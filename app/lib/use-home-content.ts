"use client";

import type { Content } from "../content";
import { useFoundationCopy, type FoundationCopyLocale } from "./foundation-site";
import { useLocale } from "./locale";

/** Merges admin-published copy over the approved EN/SW dictionary. */
export function useHomeContent(): Content["home"] {
  const { locale, t } = useLocale();
  const copy = useFoundationCopy();
  const override: FoundationCopyLocale = copy[locale] || {};
  const clean = Object.fromEntries(
    Object.entries(override).filter(
      ([, value]) => typeof value === "string" && value.trim().length > 0,
    ),
  );

  return { ...t.home, ...clean } as Content["home"];
}
