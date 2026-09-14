"use client";

import { LocaleProvider, useLocale } from "../lib/locale";
import { FoundationSiteProvider } from "../lib/foundation-site";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Disclaimer } from "./Disclaimer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <FoundationSiteProvider>
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Disclaimer />
        <Footer />
      </FoundationSiteProvider>
    </LocaleProvider>
  );
}

function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-gold focus:px-3 focus:py-2 focus:text-ink"
    >
      {t.common.skipToContent}
    </a>
  );
}
