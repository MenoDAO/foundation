"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Content } from "../content";
import { HERO_IMAGES } from "../content/hero-images";
import { IconChevronLeft, IconChevronRight } from "./illustrations/HeroIcons";

const CROSSFADE_MS = 500;

/** Matches the photo plate's rendered width so the browser fetches only what it needs. */
const IMAGE_SIZES =
  "(min-width: 1280px) 700px, (min-width: 1024px) calc((100vw - 96px) * 0.5), (min-width: 768px) calc(100vw - 48px), (min-width: 640px) calc(100vw - 32px), 100vw";

type HeroCopy = Content["home"]["hero"];

export function HeroGalleryCarousel({ labels }: { labels: HeroCopy }) {
  const total = HERO_IMAGES.length;
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const indexRef = useRef(0);

  const go = useCallback(
    (direction: number) => {
      const current = indexRef.current;
      const next = (current + direction + total) % total;
      indexRef.current = next;
      setPreviousIndex(current);
      setIndex(next);
    },
    [total],
  );

  // Keep the outgoing photo mounted underneath the incoming one so the
  // crossfade never flashes the plate background.
  useEffect(() => {
    if (previousIndex === null) return;
    const timer = window.setTimeout(
      () => setPreviousIndex(null),
      CROSSFADE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [previousIndex]);

  const current = HERO_IMAGES[index];
  const upcoming = HERO_IMAGES[(index + 1) % total];
  const outgoing =
    previousIndex === null || previousIndex === index
      ? null
      : HERO_IMAGES[previousIndex];
  const showUpcoming =
    upcoming.src !== current.src && upcoming.src !== outgoing?.src;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.mediaTitle}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const delta =
          (event.changedTouches[0]?.clientX ?? touchStart.current) -
          touchStart.current;
        if (Math.abs(delta) > 42) go(delta < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <figure className="-mx-4 sm:mx-0">
        <div className="relative aspect-[16/13] overflow-hidden border-y border-line bg-surface sm:border">
          {outgoing ? (
            <Image
              key={`out-${outgoing.src}`}
              src={outgoing.src}
              alt=""
              aria-hidden
              fill
              sizes={IMAGE_SIZES}
              quality={70}
              placeholder={outgoing.blurDataURL ? "blur" : "empty"}
              blurDataURL={outgoing.blurDataURL}
              className="z-0 object-contain"
            />
          ) : null}

          <Image
            key={`in-${current.src}`}
            src={current.src}
            alt={current.alt}
            fill
            sizes={IMAGE_SIZES}
            quality={70}
            priority={index === 0}
            placeholder={current.blurDataURL ? "blur" : "empty"}
            blurDataURL={current.blurDataURL}
            className="hero-photo-fade z-[1] object-contain"
          />

          {showUpcoming ? (
            <Image
              key={`next-${upcoming.src}`}
              src={upcoming.src}
              alt=""
              aria-hidden
              fill
              sizes={IMAGE_SIZES}
              quality={70}
              placeholder={upcoming.blurDataURL ? "blur" : "empty"}
              blurDataURL={upcoming.blurDataURL}
              className="pointer-events-none z-0 object-contain opacity-0"
            />
          ) : null}
        </div>

        <figcaption className="mt-3 flex flex-col gap-3 px-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:px-0">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clinical">
              {labels.mediaEyebrow}
            </p>
            <p className="mt-1 text-[13px] leading-snug text-navy">
              {labels.imageCaption}
              <span className="text-slate"> · {labels.location}</span>
            </p>
            <span className="sr-only">{labels.mediaNote}</span>
          </div>

          <div className="flex shrink-0 items-center justify-between gap-4 sm:justify-end">
            <p className="text-[11px] tabular-nums text-slate">
              <span className="font-semibold text-navy">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              / {String(total).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={labels.previous}
                title={labels.previous}
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-white text-navy transition-colors duration-200 hover:border-navy/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <IconChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={labels.next}
                title={labels.next}
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-white text-navy transition-colors duration-200 hover:border-navy/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <IconChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </figcaption>
      </figure>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {labels.photoLabel} {index + 1} / {total}
      </p>
    </div>
  );
}
