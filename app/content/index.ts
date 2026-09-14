import { en } from "./en";
import { sw } from "./sw";
import type { Content, Locale } from "./types";

export const dictionaries: Record<Locale, Content> = { en, sw };

export function getContent(locale: Locale = "en"): Content {
  return dictionaries[locale] ?? en;
}

export type { Content, Locale } from "./types";
