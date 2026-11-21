"use client";

import { useLocale } from "../lib/locale";
import {
  useFoundationMediaItems,
  type FoundationMediaItem,
} from "../lib/foundation-site";
import { HERO_IMAGES } from "../content/hero-images";
import { Reveal } from "./Reveal";
import { SpeedVideo } from "./SpeedVideo";

export function MediaRibbon() {
  const { locale, t } = useLocale();
  const configured = useFoundationMediaItems();
  const labels = t.home.hero;

  const items: FoundationMediaItem[] = configured.length
    ? configured.slice(0, 6)
    : HERO_IMAGES.slice(0, 6).map((image, index) => ({
        id: `ribbon-${index}`,
        kind: "image",
        src: image.src,
        alt: image.alt,
        caption: labels.imageCaption,
      }));

  if (items.length === 0) return null;

  const videoLabels = {
    video: labels.videoLabel,
    play: labels.play,
    pause: labels.pause,
    mute: labels.mute,
    unmute: labels.unmute,
    speed: labels.speed,
  };

  return (
    <section className="border-y border-line bg-white" aria-labelledby="field-journal-title">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clinical">
                {labels.mediaEyebrow}
              </p>
              <h2 id="field-journal-title" className="mt-2 text-2xl font-semibold text-navy md:text-3xl">
                {labels.mediaTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate">{labels.mediaNote}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item, index) => {
            const caption =
              locale === "sw" ? item.captionSw || item.caption : item.caption;
            const alt =
              (locale === "sw" ? item.altSw || item.alt : item.alt) ||
              caption ||
              labels.imageCaption;
            return (
              <Reveal key={`${item.id}-${index}`} delay={index * 60}>
                <article className="group relative aspect-[4/5] overflow-hidden border border-line bg-navy-deep">
                  {item.kind === "video" ? (
                    <SpeedVideo
                      key={item.src}
                      src={item.src}
                      poster={item.posterUrl}
                      playbackRate={item.playbackRate || 1}
                      autoplay={false}
                      muted
                      loop={false}
                      labels={videoLabels}
                      className="h-full w-full"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.src}
                      alt={alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent px-3 pb-3 pt-10">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-white/70">
                      {item.kind === "video" ? labels.videoLabel : labels.photoLabel}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-[11px] font-medium leading-snug text-white">
                      {caption || alt}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
