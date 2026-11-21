"use client";

import { useEffect, useState } from "react";
import { useLocale } from "../lib/locale";
import {
  type FoundationHeroContent,
  type FoundationMediaItem,
} from "../lib/foundation-site";
import { HERO_IMAGES } from "../content/hero-images";
import { SpeedVideo } from "./SpeedVideo";
import { IconChevronLeft, IconChevronRight } from "./illustrations/HeroIcons";

type Props = {
  hero: FoundationHeroContent;
  items: FoundationMediaItem[];
};

export function HeroMediaStage({ hero, items }: Props) {
  const { t } = useLocale();
  const labels = t.home.hero;
  const videoLabels = {
    video: labels.videoLabel,
    play: labels.play,
    pause: labels.pause,
    mute: labels.mute,
    unmute: labels.unmute,
    speed: labels.speed,
  };

  if (hero.videoUrl) {
    return (
      <div className="overflow-hidden border border-line bg-navy-deep sm:rounded-sm">
        <SpeedVideo
          key={hero.videoUrl}
          src={hero.videoUrl}
          poster={hero.posterUrl}
          playbackRate={hero.playbackRate}
          autoplay={hero.autoplay}
          muted={hero.muted}
          loop={hero.loop}
          labels={videoLabels}
          className="aspect-[16/11] w-full"
        />
        <div className="flex items-center justify-between gap-3 border-t border-line bg-white px-4 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clinical">
            {labels.mediaEyebrow}
          </p>
          <p className="text-[11px] text-slate">{labels.mediaNote}</p>
        </div>
      </div>
    );
  }

  const gallery: FoundationMediaItem[] = items.length
    ? items.slice(0, 5)
    : HERO_IMAGES.slice(0, 5).map((image, index) => ({
        id: `fallback-${index}`,
        kind: "image",
        src: image.src,
        alt: image.alt,
        caption: labels.imageCaption,
      }));

  return (
    <MediaMosaic
      items={gallery}
      labels={{
        mediaEyebrow: labels.mediaEyebrow,
        mediaNote: labels.mediaNote,
        previous: labels.previous,
        next: labels.next,
        imageCaption: labels.imageCaption,
        location: labels.location,
        video: videoLabels,
      }}
    />
  );
}

type MosaicLabels = {
  mediaEyebrow: string;
  mediaNote: string;
  previous: string;
  next: string;
  imageCaption: string;
  location: string;
  video: {
    video: string;
    play: string;
    pause: string;
    mute: string;
    unmute: string;
    speed: string;
  };
};

function MediaMosaic({ items, labels }: { items: FoundationMediaItem[]; labels: MosaicLabels }) {
  const [active, setActive] = useState(0);
  const locale = useLocale().locale;

  useEffect(() => {
    setActive(0);
  }, [items.length]);

  if (items.length === 0) return null;
  const current = items[Math.min(active, items.length - 1)];
  const caption = locale === "sw" ? current.captionSw || current.caption : current.caption;
  const alt =
    (locale === "sw" ? current.altSw || current.alt : current.alt) || caption || labels.imageCaption;

  const go = (direction: number) => {
    setActive((index) => (index + direction + items.length) % items.length);
  };

  return (
    <div
      role="region"
      aria-roledescription="gallery"
      aria-label={labels.mediaEyebrow}
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
    >
      <div className="relative overflow-hidden border border-line bg-navy-deep sm:rounded-sm">
        {current.kind === "video" ? (
          <SpeedVideo
            key={current.src}
            src={current.src}
            poster={current.posterUrl}
            playbackRate={current.playbackRate || 1}
            autoplay={false}
            muted
            loop={false}
            labels={labels.video}
            className="aspect-[16/11] w-full"
          />
        ) : (
          <a
            href={current.href || undefined}
            className={current.href ? "block" : undefined}
          >
            {/* Remote URLs are admin-configurable, so next/image domains do not apply. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={alt}
              className="aspect-[16/11] w-full object-cover"
            />
          </a>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/35 to-transparent px-4 pb-4 pt-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
            {labels.mediaEyebrow}
          </p>
          <p className="mt-1 max-w-md text-sm font-medium text-white">{caption || alt}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={labels.previous}
          title={labels.previous}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line bg-white text-navy transition-colors hover:border-navy/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          <IconChevronLeft className="h-4 w-4" />
        </button>

        <div className="grid flex-1 grid-cols-5 gap-1.5">
          {items.map((item, index) => {
            const thumb = item.posterUrl || (item.kind === "image" ? item.src : "");
            return (
              <button
                key={`${item.id}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`${labels.imageCaption} ${index + 1}`}
                aria-current={index === active}
                className={`relative aspect-[4/3] overflow-hidden border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy ${
                  index === active
                    ? "border-gold ring-1 ring-gold"
                    : "border-line opacity-70 hover:opacity-100"
                }`}
              >
                {thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={thumb} alt="" className="h-full w-full object-cover" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-navy-deep text-white">
                    <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" className="h-4 w-4">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label={labels.next}
          title={labels.next}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line bg-white text-navy transition-colors hover:border-navy/40 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          <IconChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-1 text-[11px] text-slate sm:flex-row sm:items-center sm:justify-between">
        <p>{labels.mediaNote}</p>
        <p className="font-medium tabular-nums text-navy">
          {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}
