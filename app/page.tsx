"use client";

import Link from "next/link";
import { useLocale } from "./lib/locale";
import { useHomeContent } from "./lib/use-home-content";
import { useFoundationSite } from "./lib/foundation-site";
import { ROUTES } from "./lib/constants";
import { Eyebrow, TruthBadge } from "./components/TruthBadge";
import { Reveal } from "./components/Reveal";
import { FounderLetter } from "./components/FounderLetter";
import { HomeHero } from "./components/HomeHero";
import { MediaRibbon } from "./components/MediaRibbon";
import { IconArrowUpRight } from "./components/illustrations/HeroIcons";
import { AnimatedStat } from "./components/AnimatedStat";
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
const accents = ["bg-gold", "bg-clinical", "bg-mint"];

function short(body: string, max = 132) {
  const sentence = body.split(/(?<=\.)\s/)[0] || body;
  return sentence.length > max ? `${sentence.slice(0, max).trimEnd()}…` : sentence;
}

export default function HomePage() {
  const { t } = useLocale();
  const c = useHomeContent();
  const site = useFoundationSite();

  const impactValues = [
    site?.impact.registeredMembers,
    site?.impact.peopleReached,
    site?.impact.peopleScreened,
    site?.impact.treatmentsDone,
    site?.impact.totalReferrals,
    site?.impact.campsConducted,
  ];

  return (
    <>
      <HomeHero />
      <MediaRibbon />

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-coral">
                The reality we work in
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-navy md:text-3xl">
                {c.challengeTitle}
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {c.challengeCards.map((card, i) => {
              const Icon = challengeIcons[i];
              return (
                <Reveal key={card.title} delay={i * 80}>
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-shadow duration-300 hover:shadow-lg md:p-6">
                    <div className="flex items-start justify-between">
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-line ${accents[i]}`}
                      >
                        <Icon />
                      </span>
                      <span className="text-2xl font-semibold text-line">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-navy md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{short(card.body)}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f4f9fc] via-white to-[#fff8ec]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clinical">
                  One continuous pathway
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-navy md:text-3xl">
                  {c.pillarsTitle}
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate">{t.work.intro}</p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {c.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i];
              return (
                <Reveal key={pillar.title} delay={i * 90}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                    <div className={`h-1.5 w-full ${accents[i]}`} />
                    <div className="flex flex-1 flex-col p-6">
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface ring-1 ring-line ${accents[i]}`}
                      >
                        <Icon />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold leading-snug text-navy md:text-xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                        {short(pillar.body, 118)}
                      </p>
                      <Link
                        href={pillar.href}
                        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-clinical transition-colors hover:text-navy"
                      >
                        {pillar.cta}
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-white md:py-14" aria-label={t.impact.eyebrow}>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.impact.strip.map((stat, index) => (
              <div key={stat.label} className="border-t border-white/15 pt-6">
                <p className="text-3xl font-semibold tabular-nums text-gold-light md:text-4xl">
                  <AnimatedStat value={impactValues[index]} />
                </p>
                <p className="mt-1 text-sm font-medium text-white">{stat.label}</p>
                <p className="mt-1 text-[11px] text-white/60">{stat.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FounderLetter />

      <section id="get-involved" className="scroll-mt-24 border-t border-line bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-2 md:px-6 md:py-16">
          <Reveal>
            <Eyebrow>{c.involvedEyebrow}</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">
              {c.involvedTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate md:text-base">
              {c.involvedBody}
            </p>
            <Link
              href={ROUTES.involved}
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              {c.involvedCta}
              <IconArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-light/25 blur-2xl"
              />
              <div className="relative">
                <TruthBadge category="protocol" />
                <h3 className="mt-4 text-lg font-semibold text-navy md:text-xl">
                  {c.schoolTeaserTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {short(c.schoolTeaserBody, 160)}
                </p>
                <Link
                  href={`${ROUTES.involved}#pathway-schools`}
                  className="mt-5 inline-flex text-sm font-semibold text-clinical hover:text-navy"
                >
                  {c.schoolTeaserCta} →
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
