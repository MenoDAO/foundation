"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "./BrandMark";
import { useLocale } from "../lib/locale";
import { ROUTES } from "../lib/constants";

export function Header() {
  const { t, locale, setLocale } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[#D8DCEB]/80 bg-white/95 backdrop-blur-md"
          : "border-transparent bg-surface/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
        <div className="shrink-0">
          <BrandMark compact />
        </div>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:gap-1 lg:flex"
          aria-label="Primary"
        >
          {t.nav.items.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-xl px-2 py-2 text-[13px] font-medium leading-none transition-colors xl:px-3 xl:text-sm ${
                  active
                    ? "bg-card text-navy"
                    : "text-slate hover:bg-card hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div
            className="hidden items-center rounded-xl border border-[#D8DCEB]/60 bg-white p-0.5 sm:flex"
            role="group"
            aria-label={t.nav.languageLabel}
          >
            {(["en", "sw"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                  locale === code
                    ? "bg-navy text-white"
                    : "text-slate hover:text-navy"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            href={`${ROUTES.involved}#get-involved`}
            className="hidden whitespace-nowrap rounded-xl bg-gold px-3 py-2 text-[13px] font-semibold leading-none text-ink xl:px-4 xl:text-sm lg:inline-flex"
          >
            {t.nav.cta}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D8DCEB]/60 bg-white text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">
              {open ? t.nav.closeMenu : t.nav.openMenu}
            </span>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[#D8DCEB]/60 bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {t.nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-navy hover:bg-card"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`${ROUTES.involved}#get-involved`}
              className="mt-2 rounded-xl bg-gold px-3 py-3 text-center text-base font-semibold text-ink"
            >
              {t.nav.cta}
            </Link>
            <div className="mt-3 flex gap-2 sm:hidden">
              {(["en", "sw"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLocale(code)}
                  className={`flex-1 rounded-xl border px-3 py-2 text-sm font-medium ${
                    locale === code
                      ? "border-navy bg-navy text-white"
                      : "border-[#D8DCEB]/60 text-slate"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      {open ? (
        <path
          d="M5 5l10 10M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 6h12M4 10h12M4 14h12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
