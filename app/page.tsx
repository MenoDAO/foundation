"use client";

import Link from "next/link";
import { useLocale } from "./lib/locale";
import { ROUTES } from "./lib/constants";
import { Eyebrow, TruthBadge } from "./components/TruthBadge";
import { Reveal } from "./components/Reveal";
import { WhatsAppLink } from "./components/WhatsAppLink";
import { FounderLetter } from "./components/FounderLetter";
import { HeroScene } from "./components/illustrations/HeroScene";
import {
  IconAccess,
  IconBarrier,
  IconClinic,
  IconDisease,
  IconPool,
  IconSchool,
} from "./components/illustrations/Icons";

const challengeIcons = [IconDisease, IconBarrier, IconAccess];
const pillarIcons = [IconSchool, IconClinic, IconPool];

export default function HomePage() {
  const { t } = useLocale();
  const c = t.home;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-clinical/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-5xl">
              {c.h1}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate">{c.subhead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink"
              >
                {c.primaryCta}
              </a>
              <a
                href="#pathway-schools"
                className="inline-flex items-center justify-center rounded-xl border border-navy px-5 py-3 text-sm font-semibold text-navy"
              >
                {c.secondaryCta}
              </a>
            </div>
            <p className="mt-5 text-sm text-slate">
              {c.tertiaryLead}{" "}
              <WhatsAppLink className="font-medium text-navy underline decoration-[#D8DCEB] underline-offset-4">
                {c.tertiaryLink}
              </WhatsAppLink>
            </p>
          </div>
          <HeroScene badge={t.common.heroBadge} />
        </div>
      </section>

      <section className="border-t border-[#D8DCEB]/60 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <Reveal>
            <h2 className="max-w-3xl text-2xl font-semibold text-navy md:text-3xl">
              {c.challengeTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {c.challengeCards.map((card, i) => {
              const Icon = challengeIcons[i];
              return (
                <Reveal key={card.title} delay={i * 90} as="article">
                  <article className="h-full rounded-2xl border border-[#D8DCEB]/60 bg-card p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                      <Icon />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-navy md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate">{card.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">
              {c.pillarsTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {c.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <Reveal key={pillar.title} delay={i * 90} as="article">
                  <article className="flex h-full flex-col rounded-2xl border border-[#D8DCEB]/60 bg-white p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-card">
                      <Icon />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-navy md:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-slate">
                      {pillar.body}
                    </p>
                    <Link
                      href={pillar.href}
                      className="mt-5 text-sm font-semibold text-clinical"
                    >
                      {pillar.cta}
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FounderLetter />

      <section id="get-involved" className="scroll-mt-24 border-t border-[#D8DCEB]/60 bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2 md:px-6">
          <Reveal>
            <Eyebrow>{c.involvedEyebrow}</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">
              {c.involvedTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">{c.involvedBody}</p>
            <Link
              href={ROUTES.involved}
              className="mt-6 inline-flex rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink"
            >
              {c.involvedCta}
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <article
              id="pathway-schools"
              className="scroll-mt-24 rounded-2xl border border-[#D8DCEB]/60 bg-white p-6"
            >
              <TruthBadge category="protocol" />
              <h3 className="mt-4 text-lg font-semibold text-navy md:text-xl">
                {c.schoolTeaserTitle}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate">
                {c.schoolTeaserBody}
              </p>
              <Link
                href={`${ROUTES.involved}#pathway-schools`}
                className="mt-5 inline-flex text-sm font-semibold text-clinical"
              >
                {c.schoolTeaserCta} →
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
