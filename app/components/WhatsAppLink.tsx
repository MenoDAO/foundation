"use client";

import { useLocale } from "../lib/locale";
import { useWhatsAppNumber } from "../lib/foundation-site";

export function WhatsAppLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { t } = useLocale();
  const number = useWhatsAppNumber();

  if (number) {
    return (
      <a
        href={`https://wa.me/${number}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      role="link"
      aria-disabled="true"
      title={t.common.whatsappUnavailable}
      className={`inline-flex cursor-not-allowed items-center gap-2 opacity-70 ${className}`}
    >
      {children}
      <span className="sr-only"> ({t.common.whatsappUnavailable})</span>
    </span>
  );
}
