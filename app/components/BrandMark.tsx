"use client";

import Link from "next/link";
import { LOGOS } from "../lib/constants";
import { useLocale } from "../lib/locale";

export function BrandMark({
  compact = false,
  onDark = false,
}: {
  compact?: boolean;
  onDark?: boolean;
}) {
  const { t } = useLocale();
  const logo = (
    // Static WebP (~6.5KB). Skip next/image so the header does not wait on the optimizer.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGOS.foundation.src}
      alt=""
      width={LOGOS.foundation.width}
      height={LOGOS.foundation.height}
      className={`w-auto object-contain ${compact ? "h-11 sm:h-12" : "h-12"}`}
      decoding={compact ? "sync" : "async"}
      fetchPriority={compact ? "high" : "low"}
    />
  );

  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label="Dr. Papi Foundation home"
    >
      <span
        className={`inline-flex items-center justify-center overflow-hidden rounded-xl ${
          onDark ? "bg-white px-2 py-1.5" : ""
        }`}
      >
        {logo}
      </span>
      {compact ? null : (
        <span className="block text-xs font-medium text-slate">
          {t.common.brandLocation}
        </span>
      )}
    </Link>
  );
}
