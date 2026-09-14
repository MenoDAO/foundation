"use client";

import { useLocale } from "../lib/locale";
import { EMAILS } from "../lib/constants";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ContactForm } from "../components/forms/ContactForm";
import { ClinicalFacilities } from "../components/ClinicalFacilities";
import { WhatsAppLink } from "../components/WhatsAppLink";
import { IconClock, IconMail, IconPin } from "../components/illustrations/Icons";

export default function ContactPage() {
  const { t } = useLocale();
  const c = t.contact;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} subhead={c.subhead} />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">
              {c.locationsTitle}
            </h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[#D8DCEB]/60 bg-card p-5">
                <div className="flex items-start gap-3 text-navy">
                  <IconPin />
                  <div>
                    <h3 className="text-lg font-semibold">{c.hqLabel}</h3>
                    <p className="mt-1 text-base text-slate">{c.hqDetail}</p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-slate">
                      <IconClock /> {c.hqHours}
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="anchor-clinical-base"
                className="scroll-mt-24 rounded-2xl border border-[#D8DCEB]/60 bg-card p-5"
              >
                <div className="flex items-start gap-3 text-navy">
                  <IconPin />
                  <div>
                    <h3 className="text-lg font-semibold">{c.baseLabel}</h3>
                    <p className="mt-1 text-base text-slate">{c.baseDetail}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <ClinicalFacilities compact />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">
              {c.endpointsTitle}
            </h2>
            <ul className="mt-6 space-y-3">
              {c.endpoints.map((item) => (
                <li
                  key={item.email}
                  className="flex items-start gap-3 rounded-2xl border border-[#D8DCEB]/60 bg-card p-4"
                >
                  <span className="mt-0.5 text-clinical">
                    <IconMail />
                  </span>
                  <div>
                    <a className="font-semibold text-navy" href={`mailto:${item.email}`}>
                      {item.email}
                    </a>
                    <p className="text-sm text-slate">{item.purpose}</p>
                  </div>
                </li>
              ))}
              <li className="rounded-2xl border border-[#D8DCEB]/60 bg-card p-4 text-sm">
                <WhatsAppLink className="font-semibold text-navy">
                  {t.menodao.deskCta}
                </WhatsAppLink>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#D8DCEB]/60 bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">{c.formTitle}</h2>
            <p className="mt-2 text-sm text-slate">
              {t.common.submissionsRouted}{" "}
              <a className="font-medium text-clinical" href={`mailto:${EMAILS.general}`}>
                {EMAILS.general}
              </a>
              .
            </p>
            <div className="mt-8 rounded-2xl border border-[#D8DCEB]/60 bg-white p-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
