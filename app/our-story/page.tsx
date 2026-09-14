"use client";

import Link from "next/link";
import { useLocale } from "../lib/locale";
import { ROUTES } from "../lib/constants";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { TruthBadge } from "../components/TruthBadge";

export default function OurStoryPage() {
  const { t } = useLocale();
  const c = t.story;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <p className="max-w-4xl text-base leading-relaxed text-slate">{c.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#D8DCEB]/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">{c.campsTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Reveal as="article">
              <article className="h-full rounded-2xl border border-[#D8DCEB]/60 bg-white p-6">
                <h3 className="text-lg font-semibold text-navy md:text-xl">
                  {c.episodicTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate">{c.episodicBody}</p>
              </article>
            </Reveal>
            <Reveal delay={80} as="article">
              <article className="h-full rounded-2xl border border-[#D8DCEB]/60 bg-card p-6">
                <TruthBadge category="protocol" />
                <h3 className="mt-4 text-lg font-semibold text-navy md:text-xl">
                  {c.continuumTitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate">{c.continuumBody}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {c.philosophy.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} as="article">
                <article className="h-full rounded-2xl border border-[#D8DCEB]/60 bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-navy md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={ROUTES.work}
              className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              {c.ctaPillars}
            </Link>
            <Link
              href="/#founders-letter"
              className="inline-flex items-center justify-center rounded-xl border border-navy px-5 py-3 text-sm font-semibold text-navy"
            >
              {c.ctaLetter}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
