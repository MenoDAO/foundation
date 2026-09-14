"use client";

import Link from "next/link";
import { useLocale } from "../lib/locale";
import { EMAILS, ROUTES } from "../lib/constants";
import { useFoundationSite } from "../lib/foundation-site";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { Eyebrow, TruthBadge } from "../components/TruthBadge";

export default function ImpactPage() {
  const { t } = useLocale();
  const c = t.impact;
  const impact = useFoundationSite()?.impact;
  const live = [
    impact?.registeredMembers,
    impact?.contributingMembers,
    impact?.approvedFacilities,
    impact?.counties,
  ];

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} subhead={c.subhead} />

      <section className="border-b border-[#D8DCEB]/60 bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2 lg:grid-cols-4 md:px-6">
          {c.strip.map((item, i) => (
            <div key={item.label}>
              <p className="text-4xl font-bold tracking-tight text-gold">
                {formatStat(live[i], item.stat)}
              </p>
              <p className="mt-2 text-sm font-medium text-white">{item.label}</p>
              <p className="mt-1 text-xs text-white/65">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {c.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 70} as="article">
                <article className="flex h-full flex-col rounded-2xl border border-[#D8DCEB]/60 bg-card p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-clinical">
                    {card.title}
                  </p>
                  <p className="mt-3 text-4xl font-bold tracking-tight text-navy">
                    {formatStat(live[i], card.stat)}
                    {card.statSuffix ? (
                      <span className="ml-1 text-lg font-semibold">{card.statSuffix}</span>
                    ) : null}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-navy">{card.label}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{card.note}</p>
                  <p className="mt-4 text-xs text-slate">
                    <span className="font-semibold text-navy">{t.common.dataSource} </span>
                    {card.source}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="truth-appendix" className="scroll-mt-24 border-t border-[#D8DCEB]/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <Eyebrow>{c.truthEyebrow}</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold text-navy md:text-3xl">
              {c.truthTitle}
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate">{c.truthBody}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {(
                [
                  "established",
                  "protocol",
                  "pilot",
                  "pipeline",
                ] as const
              ).map((key) => (
                <article
                  key={key}
                  className="rounded-2xl border border-[#D8DCEB]/60 bg-white p-5"
                >
                  <TruthBadge category={key} />
                  <p className="mt-3 text-base leading-relaxed text-slate">
                    {t.truth.categories[key].description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-4xl text-base leading-relaxed text-ink">
              {c.truthClosing}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#truth-appendix"
                className="inline-flex items-center justify-center rounded-xl border border-navy px-5 py-3 text-sm font-semibold text-navy"
              >
                {c.appendixCta}
              </a>
              <Link
                href={`${ROUTES.contact}?topic=evidence-bank`}
                className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white"
              >
                {c.evidenceCta}
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate">
              {t.common.evidenceBankLead}{" "}
              <a className="font-medium text-clinical" href={`mailto:${EMAILS.general}`}>
                {EMAILS.general}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function formatStat(value: number | undefined, fallback: string) {
  return typeof value === "number" ? String(value) : fallback;
}
