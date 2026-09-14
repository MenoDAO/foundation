"use client";

import Link from "next/link";
import { useLocale } from "../lib/locale";
import { ROUTES } from "../lib/constants";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { TruthBadge } from "../components/TruthBadge";
import { WhatsAppLink } from "../components/WhatsAppLink";

export default function MenodaoPage() {
  const { t } = useLocale();
  const c = t.menodao;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} subhead={c.subhead} />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold text-navy md:text-3xl">
                {c.rulesTitle}
              </h2>
              <TruthBadge category="pilot" />
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#D8DCEB]/60">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-card text-navy">
                  <tr>
                    <th className="px-4 py-3 font-semibold">{t.common.componentLabel}</th>
                    <th className="px-4 py-3 font-semibold">{t.common.specificationLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.rules.map((row) => (
                    <tr key={row.component} className="border-t border-[#D8DCEB]/60">
                      <td className="px-4 py-3 font-medium text-navy">{row.component}</td>
                      <td className="px-4 py-3 text-slate">{row.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#D8DCEB]/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">{c.flowTitle}</h2>
          </Reveal>
          <ol className="mt-8 grid gap-5 md:grid-cols-2">
            {c.flow.map((step, i) => (
              <Reveal key={step.title} delay={i * 80} as="li">
                <li className="h-full rounded-2xl border border-[#D8DCEB]/60 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {t.common.stepLabel} {i + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-navy md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">
              {c.safeguardsTitle}
            </h2>
            <ul className="mt-6 space-y-4">
              {c.safeguards.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#D8DCEB]/60 bg-card px-5 py-4 text-base leading-relaxed text-slate"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={ROUTES.impact}
                className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-ink"
              >
                {c.pilotCta}
              </Link>
              <WhatsAppLink className="text-sm font-semibold text-navy">
                {c.deskCta}
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
