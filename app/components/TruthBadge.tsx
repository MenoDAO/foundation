"use client";

import type { TruthCategory } from "../content/types";
import { useLocale } from "../lib/locale";

const tones: Record<TruthCategory, string> = {
  established: "bg-navy/10 text-navy border-navy/15",
  protocol: "bg-clinical/10 text-clinical border-clinical/20",
  pilot: "bg-gold/15 text-navy border-gold/30",
  pipeline: "bg-card text-slate border-[#D8DCEB]/80",
};

export function TruthBadge({ category }: { category: TruthCategory }) {
  const { t } = useLocale();

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium md:text-sm ${tones[category]}`}
    >
      {t.truth.categories[category].label}
    </span>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.18em] text-clinical md:text-sm ${className}`}
    >
      {children}
    </p>
  );
}
