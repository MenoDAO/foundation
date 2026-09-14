"use client";

import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { EMAILS, ROUTES } from "../lib/constants";
import { useLocale } from "../lib/locale";
import { WhatsAppLink } from "./WhatsAppLink";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  const nav = Object.fromEntries(t.nav.items.map((item) => [item.href, item.label]));

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <div className="[&_span]:!text-white [&_.text-slate]:!text-white/70 [&_.bg-navy]:bg-white/10 [&_.text-white]:text-white">
            <BrandMark />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{t.footer.tagline}</p>
          <p className="mt-3 text-xs leading-relaxed text-white/60">{t.footer.legalForm}</p>
        </div>

        <FooterCol title={t.footer.explore}>
          <Link href={ROUTES.story}>{nav[ROUTES.story]}</Link>
          <Link href={ROUTES.work}>{nav[ROUTES.work]}</Link>
          <Link href={ROUTES.impact}>{nav[ROUTES.impact]}</Link>
          <Link href={ROUTES.contact}>{nav[ROUTES.contact]}</Link>
        </FooterCol>

        <FooterCol title={t.footer.programs}>
          <Link href={`${ROUTES.work}#tabasamu`}>{t.footer.tabasamu}</Link>
          <Link href={`${ROUTES.work}#anchor-clinical-base`}>{t.footer.clinicalBase}</Link>
          <Link href={ROUTES.menodao}>MenoDAO</Link>
          <Link href={`${ROUTES.work}#menoai`}>{t.footer.menoai}</Link>
        </FooterCol>

        <FooterCol title={t.footer.contact}>
          <a href={`mailto:${EMAILS.general}`}>{EMAILS.general}</a>
          <a href={`mailto:${EMAILS.outreach}`}>{EMAILS.outreach}</a>
          <a href={`mailto:${EMAILS.partnerships}`}>{EMAILS.partnerships}</a>
          <WhatsAppLink className="text-white/80 hover:text-white">
            {t.menodao.deskCta}
          </WhatsAppLink>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {year} {t.footer.copyright}
          </p>
          <p>{t.footer.locationLine}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{title}</p>
      <div className="mt-4 flex flex-col gap-2 text-sm text-white/80 [&>a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
