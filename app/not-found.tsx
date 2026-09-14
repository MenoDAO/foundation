"use client";

import Link from "next/link";
import { useLocale } from "./lib/locale";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-clinical">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy">
        {t.common.notFoundTitle}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate">{t.common.notFoundBody}</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-white"
      >
        {t.common.notFoundCta}
      </Link>
    </div>
  );
}
