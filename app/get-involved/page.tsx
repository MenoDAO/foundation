"use client";

import { useLocale } from "../lib/locale";
import { EMAILS } from "../lib/constants";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SchoolForm } from "../components/forms/SchoolForm";
import { VolunteerForm } from "../components/forms/VolunteerForm";
import { FacilityForm } from "../components/forms/FacilityForm";
import { WhatsAppLink } from "../components/WhatsAppLink";

export default function GetInvolvedPage() {
  const { t } = useLocale();
  const c = t.involved;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} subhead={c.subhead} />

      <section id="get-involved" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 md:px-6">
          <Pathway
            id="pathway-schools"
            kicker={`${t.common.pathwayLabel} 1`}
            title={c.schoolsTitle}
            body={c.schoolsBody}
          >
            <SchoolForm />
          </Pathway>

          <Pathway
            id="pathway-clinicians"
            kicker={`${t.common.pathwayLabel} 2`}
            title={c.volunteerTitle}
            body={c.volunteerBody}
          >
            <VolunteerForm />
          </Pathway>

          <Pathway
            id="pathway-facilities"
            kicker={`${t.common.pathwayLabel} 3`}
            title={c.facilityTitle}
            body={c.facilityBody}
          >
            <FacilityForm />
          </Pathway>

          <Reveal>
            <article
              id="pathway-donors"
              className="scroll-mt-24 rounded-2xl border border-[#D8DCEB]/60 bg-sand p-6 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                {t.common.pathwayLabel} 4
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-navy md:text-3xl">
                {c.donorsTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">{c.donorsBody}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {c.packages.map((pack, i) => (
                  <div
                    key={pack.title}
                    className="rounded-2xl border border-[#D8DCEB]/60 bg-white p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clinical">
                      {t.common.packageLabel} {String.fromCharCode(65 + i)}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-navy">{pack.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{pack.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate">
                {c.donorsContactLead}{" "}
                <a className="font-semibold text-navy" href={`mailto:${EMAILS.partnerships}`}>
                  {EMAILS.partnerships}
                </a>
              </p>
              {/* PLACEHOLDER: insert real phone number before launch */}
              <p className="mt-2 text-sm text-muted">{t.common.phonePlaceholderLabel}</p>
              <WhatsAppLink className="mt-3 text-sm font-medium text-navy">
                {t.menodao.deskCta}
              </WhatsAppLink>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Pathway({
  id,
  kicker,
  title,
  body,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <article
        id={id}
        className="scroll-mt-24 rounded-2xl border border-[#D8DCEB]/60 bg-card p-6 md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clinical">
          {kicker}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-navy md:text-3xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">{body}</p>
        <div className="mt-8 rounded-2xl border border-[#D8DCEB]/60 bg-white p-5 md:p-6">
          {children}
        </div>
      </article>
    </Reveal>
  );
}
