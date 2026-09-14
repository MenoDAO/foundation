"use client";

import { useLocale } from "../lib/locale";

export function Disclaimer() {
  const { t } = useLocale();
  const { regionLabel, legalTitle, legal, clinicalTitle, clinical, privacyTitle, privacy } =
    t.disclaimers;

  return (
    <section aria-label={regionLabel} className="border-t border-[#D8DCEB]/60 bg-card">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
        <DisclaimerBlock title={legalTitle} body={legal} />
        <DisclaimerBlock title={clinicalTitle} body={clinical} />
        <DisclaimerBlock title={privacyTitle} body={privacy} />
      </div>
    </section>
  );
}

function DisclaimerBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="text-xs font-semibold text-navy md:text-sm">{title}</h2>
      <p className="mt-2 text-xs leading-relaxed text-slate md:text-sm">{body}</p>
    </div>
  );
}
