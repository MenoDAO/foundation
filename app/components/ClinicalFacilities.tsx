"use client";

import { LOGOS } from "../lib/constants";
import { useLocale } from "../lib/locale";
import { useFoundationClinics, type FoundationClinic } from "../lib/foundation-site";

export function ClinicalFacilities({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale();
  const clinics = useFoundationClinics();
  const others = clinics.filter((clinic) => !clinic.isAnchor);

  return (
    <div className={compact ? "space-y-3" : "space-y-4"}>
      <div className={`grid gap-3 ${compact ? "" : "md:grid-cols-2 lg:grid-cols-3"}`}>
        {clinics.map((clinic) => (
          <FacilityCard key={clinic.id} clinic={clinic} />
        ))}
      </div>
      {others.length > 0 ? (
        <p className="text-xs text-slate">
          {t.work.clinicalPartnersLead} {others.map((clinic) => clinic.name).join(", ")}.
        </p>
      ) : null}
    </div>
  );
}

function isMikindaniClinic(clinic: FoundationClinic) {
  return /mikindani/i.test(clinic.id) || /mikindani/i.test(clinic.name);
}

function FacilityCard({ clinic }: { clinic: FoundationClinic }) {
  const { t } = useLocale();
  const note = clinic.location || t.common.logoSlotNote;
  const remoteLogo = clinic.logoUrl;
  const localMikindani = !remoteLogo && isMikindaniClinic(clinic);

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${
        clinic.isAnchor
          ? "border-gold/50 bg-sand"
          : "border-[#D8DCEB]/60 bg-card"
      }`}
    >
      <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#D8DCEB]/60 bg-white p-1">
        {remoteLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={remoteLogo}
            alt=""
            width={64}
            height={64}
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : localMikindani ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={LOGOS.mikindani.src}
            alt=""
            width={LOGOS.mikindani.width}
            height={LOGOS.mikindani.height}
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="text-[10px] font-semibold uppercase tracking-wide text-clinical">
            {t.common.logoWord}
          </span>
        )}
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-navy">{clinic.name}</p>
          {clinic.isAnchor ? (
            <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy">
              {t.work.clinicalAnchorLabel}
            </span>
          ) : null}
        </div>
        <p className="text-xs text-slate">{note}</p>
      </div>
    </div>
  );
}
