"use client";

import Link from "next/link";
import { useLocale } from "../lib/locale";

/**
 * PLACEHOLDER: drop official logo files here before launch:
 *   /public/logos/dr-papi-foundation.png
 *   /public/logos/menodao.png
 *   /public/logos/mikindani-hospital-dental-unit.png
 * Do not recreate or approximate official marks from description.
 */
export function BrandMark({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale();

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Dr. Papi Foundation home">
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#D8DCEB]/60 bg-navy text-white">
        <span className="font-sans text-sm font-bold tracking-tight">DP</span>
      </span>
      <span className={compact ? "hidden sm:block" : "block"}>
        <span className="block text-sm font-semibold leading-tight text-navy">
          Dr. Papi Foundation
        </span>
        <span className="block text-xs font-medium text-slate">{t.common.brandLocation}</span>
      </span>
    </Link>
  );
}

export function PartnerMark({
  name,
  note,
}: {
  name: string;
  note: string;
}) {
  const { t } = useLocale();

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#D8DCEB]/60 bg-card px-4 py-3">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D8DCEB]/60 bg-white text-[10px] font-semibold uppercase tracking-wide text-clinical">
        {t.common.logoWord}
      </span>
      <div>
        <p className="text-sm font-semibold text-navy">{name}</p>
        <p className="text-xs text-slate">{note}</p>
      </div>
    </div>
  );
}
