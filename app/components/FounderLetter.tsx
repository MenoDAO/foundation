"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale } from "../lib/locale";
import { useHomeContent } from "../lib/use-home-content";
import {
  useFoundationFounderVideo,
  useFoundationSite,
} from "../lib/foundation-site";
import { ROUTES } from "../lib/constants";
import { Eyebrow } from "./TruthBadge";
import { Reveal } from "./Reveal";
import { SpeedVideo } from "./SpeedVideo";
import { IconArrowUpRight } from "./illustrations/HeroIcons";

export function FounderLetter() {
  const { t } = useLocale();
  const c = useHomeContent();
  const photoUrl = useFoundationSite()?.founderPhotoUrl ?? null;
  const founderVideo = useFoundationFounderVideo();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [photoUrl]);

  const showPhoto = Boolean(photoUrl) && !failed;
  const videoLabels = {
    video: t.home.hero.videoLabel,
    play: t.home.hero.play,
    pause: t.home.hero.pause,
    mute: t.home.hero.mute,
    unmute: t.home.hero.unmute,
    speed: t.home.hero.speed,
  };

  return (
    <section id="founders-letter" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <Reveal>
          <article className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-sand via-white to-[#fff8ec] p-6 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold-light/25 blur-3xl"
            />

            <div className="relative grid items-center gap-8 md:grid-cols-[13.5rem_minmax(0,1fr)] lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
              <div>
                {founderVideo.videoUrl ? (
                  <figure>
                    <SpeedVideo
                      key={founderVideo.videoUrl}
                      src={founderVideo.videoUrl}
                      poster={founderVideo.posterUrl}
                      playbackRate={founderVideo.playbackRate}
                      autoplay={false}
                      muted={founderVideo.muted}
                      loop={false}
                      labels={videoLabels}
                      className="aspect-[4/5] w-full rounded-2xl border border-line"
                    />
                    {founderVideo.caption ? (
                      <figcaption className="mt-3 text-center text-[11px] font-medium text-slate">
                        {founderVideo.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ) : (
                  <FounderPortrait src={photoUrl} alt={c.letterPhotoAlt} showPhoto={showPhoto} />
                )}

                <div className="mt-4 flex items-center gap-3 md:hidden">
                  <FounderAvatar src={photoUrl} showPhoto={showPhoto} alt={c.letterPhotoAlt} />
                  <div>
                    <p className="text-sm font-semibold text-navy">{c.letterName}</p>
                    <p className="text-[11px] text-slate">{c.letterRole}</p>
                  </div>
                </div>
              </div>

              <div>
                <Eyebrow>{c.letterEyebrow}</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">
                  {c.letterTitle}
                </h2>
                {c.letterSummary || c.letterBody ? (
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
                    {c.letterSummary || c.letterBody}
                  </p>
                ) : null}

                <div className="mt-6 hidden items-center gap-3 md:flex">
                  <FounderAvatar src={photoUrl} showPhoto={showPhoto} alt={c.letterPhotoAlt} />
                  <div>
                    <p className="text-sm font-semibold text-navy">{c.letterName}</p>
                    <p className="text-xs text-slate">{c.letterRole}</p>
                  </div>
                </div>

                <Link
                  href={`${ROUTES.story}#founders-letter`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-clinical transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical focus-visible:ring-offset-2"
                >
                  {t.story.ctaLetter}
                  <IconArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function FounderPortrait({
  src,
  alt,
  showPhoto,
}: {
  src: string | null;
  alt: string;
  showPhoto: boolean;
}) {
  return (
    <figure className="mx-auto w-44 md:mx-0 md:w-52">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-card">
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src ?? undefined} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-card to-white text-clinical"
            role="img"
            aria-label={alt}
          >
            <AvatarIcon />
          </div>
        )}
      </div>
    </figure>
  );
}

function FounderAvatar({
  src,
  showPhoto,
  alt,
}: {
  src: string | null;
  showPhoto: boolean;
  alt: string;
}) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-card">
      {showPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src ?? undefined} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <AvatarIcon className="h-7 w-7" />
      )}
    </span>
  );
}

function AvatarIcon({ className = "h-20 w-20" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden>
      <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M16 66c3.5-14 12.5-20 24-20s20.5 6 24 20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
