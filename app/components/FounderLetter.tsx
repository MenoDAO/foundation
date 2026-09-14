"use client";

import { useEffect, useState } from "react";
import { useLocale } from "../lib/locale";
import { useFoundationSite } from "../lib/foundation-site";
import { Eyebrow } from "./TruthBadge";
import { Reveal } from "./Reveal";

export function FounderLetter() {
  const { t } = useLocale();
  const c = t.home;
  const photoUrl = useFoundationSite()?.founderPhotoUrl ?? null;

  return (
    <section id="founders-letter" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <Reveal>
          <article className="rounded-2xl border border-[#D8DCEB]/60 bg-sand p-6 md:p-10">
            <div className="grid items-start gap-8 md:grid-cols-[13.5rem_minmax(0,1fr)]">
              <FounderPortrait src={photoUrl} alt={c.letterPhotoAlt} />
              <div>
                <Eyebrow>{c.letterEyebrow}</Eyebrow>
                <h2 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">
                  {c.letterTitle}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate">
                  {c.letterBody}
                </p>
                <p className="mt-8 text-base font-semibold text-navy">{c.letterName}</p>
                <p className="text-sm text-slate">{c.letterRole}</p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function FounderPortrait({ src, alt }: { src: string | null; alt: string }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    setFailed(false);
  }, [src]);
  const showPhoto = Boolean(src) && !failed;

  return (
    <figure className="mx-auto w-44 md:mx-0 md:w-52">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#D8DCEB]/70 bg-card">
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src ?? undefined}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center text-clinical"
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

function AvatarIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="h-20 w-20"
      fill="none"
      aria-hidden
    >
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
