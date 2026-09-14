"use client";

import Link from "next/link";
import { useLocale } from "../lib/locale";
import { ROUTES } from "../lib/constants";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ClinicalFacilities } from "../components/ClinicalFacilities";
import { useFoundationSite } from "../lib/foundation-site";
import { TruthBadge } from "../components/TruthBadge";

export default function WhatWeDoPage() {
  const { t } = useLocale();
  const c = t.work;
  const classification =
    useFoundationSite()?.clinicalClassification || c.clinicalClassification;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} subhead={c.intro} />

      <section id="tabasamu" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold text-navy md:text-3xl">
                {c.tabasamuTitle}
              </h2>
              <TruthBadge category="protocol" />
            </div>
            <dl className="mt-8 grid gap-6 md:grid-cols-3">
              <InfoBlock label={c.tabasamuSettingLabel} body={c.tabasamuSetting} />
              <div>
                <dt className="text-sm font-semibold text-navy">{c.tabasamuProtocolsLabel}</dt>
                <dd className="mt-2">
                  <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate">
                    {c.tabasamuProtocols.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <InfoBlock
                label={c.tabasamuSafeguardingLabel}
                body={c.tabasamuSafeguarding}
              />
            </dl>
            <Link
              href={`${ROUTES.involved}#pathway-schools`}
              className="mt-8 inline-flex rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              {c.requestOutreach}
            </Link>
          </Reveal>
        </div>
      </section>

      <section
        id="anchor-clinical-base"
        className="scroll-mt-24 border-t border-[#D8DCEB]/60 bg-card"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">
              {c.clinicalTitle}
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate">
              {classification}
            </p>
            <p className="mt-2 text-xs font-medium text-slate md:text-sm">
              {t.common.relatedParty}
            </p>
            <div className="mt-6">
              <ClinicalFacilities />
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-navy">
                  {c.clinicalCapabilitiesLabel}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate">
                  {c.clinicalCapabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <InfoBlock label={c.clinicalReferralLabel} body={c.clinicalReferral} />
              <InfoBlock label={c.clinicalMentorshipLabel} body={c.clinicalMentorship} />
            </div>
            <Link
              href={`${ROUTES.contact}#anchor-clinical-base`}
              className="mt-8 inline-flex rounded-xl border border-navy px-5 py-3 text-sm font-semibold text-navy"
            >
              {c.viewClinicalBase}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-semibold text-navy md:text-3xl">
                {c.menodaoTitle}
              </h2>
              <TruthBadge category="pilot" />
            </div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate">
              {c.menodaoBody}
            </p>
            <Link
              href={ROUTES.menodao}
              className="mt-6 inline-flex text-sm font-semibold text-clinical"
            >
              {c.menodaoCta} →
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="menoai" className="scroll-mt-24 border-t border-[#D8DCEB]/60 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <Reveal>
            <div className="rounded-2xl border border-[#D8DCEB]/60 bg-white p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-navy md:text-sm">
                  {c.menoaiTag}
                </span>
                <TruthBadge category="pipeline" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy md:text-xl">
                {c.menoaiTitle}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate">
                {c.menoaiScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl border border-[#D8DCEB]/60 bg-card px-4 py-3 text-sm leading-relaxed text-ink">
                {c.menoaiDisclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-navy">{label}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate">{body}</p>
    </div>
  );
}
