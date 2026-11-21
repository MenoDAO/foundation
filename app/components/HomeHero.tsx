"use client";

import Link from "next/link";
import { useLocale } from "../lib/locale";
import { useHomeContent } from "../lib/use-home-content";
import {
  useFoundationHero,
  useFoundationMediaItems,
} from "../lib/foundation-site";
import { HeroMediaStage } from "./HeroMediaStage";
import { WhatsAppLink } from "./WhatsAppLink";
import { IconArrowRight, IconArrowUpRight } from "./illustrations/HeroIcons";

export function HomeHero() {
  const { t } = useLocale();
  const c = useHomeContent();
  const h = c.hero;
  const hero = useFoundationHero();
  const mediaItems = useFoundationMediaItems();

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative overflow-hidden bg-surface"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold-light/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-52 h-80 w-80 rounded-full bg-clinical-light/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-3 pt-7 sm:pt-9 lg:pt-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clinical sm:text-[11px]">
            {c.eyebrow}
          </p>
          <p className="ml-auto text-[10px] font-medium uppercase tracking-[0.18em] text-slate sm:text-[11px]">
            {h.location}
          </p>
        </div>

        <div className="grid gap-8 pb-9 pt-7 sm:pt-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-10 lg:pt-9">
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gold" />
              {t.common.brandLocation}
            </div>
            <h1
              id="home-hero-title"
              className="text-balance text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-navy sm:text-[3.15rem] lg:text-[3.5rem] xl:text-[3.9rem]"
            >
              {c.h1}
            </h1>

            <p className="mt-5 max-w-[34rem] text-[15px] leading-[1.7] text-slate sm:mt-6 sm:text-base">
              {c.subhead}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-ink shadow-[0_10px_30px_-12px_rgba(240,150,10,0.8)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {c.primaryCta}
                <IconArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#pathway-schools"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-navy/25 bg-white/70 px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {c.secondaryCta}
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <HeroMediaStage hero={hero} items={mediaItems} />
          </div>
        </div>

        <div className="border-t border-line py-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate">
            {h.standardsLabel}
          </p>

          <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-3">
            {h.standards.map((item, i) => (
              <div
                key={item.label}
                className={`flex gap-3 ${i === 0 ? "" : "sm:border-l sm:border-line sm:pl-8"}`}
              >
                <span
                  aria-hidden
                  className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                    i === 0 ? "bg-gold" : i === 1 ? "bg-clinical" : "bg-mint"
                  }`}
                />
                <div>
                  <dt className="text-[12px] font-semibold text-navy">{item.label}</dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-slate">
                    {item.detail}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex flex-col gap-2 border-t border-line pt-4 text-[12px] leading-relaxed text-slate sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-6 sm:gap-y-1">
            <p>
              {c.tertiaryLead}{" "}
              <WhatsAppLink className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-clinical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface">
                {c.tertiaryLink}
              </WhatsAppLink>
            </p>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
              <span>Non-profit Company Limited by Guarantee</span>
              <span aria-hidden className="h-3 w-px bg-line" />
              <span>Mombasa, Kenya</span>
            </p>
          </div>
        </div>
      </div>

      <nav aria-label={h.continuumLabel} className="relative border-t border-line bg-white/60">
        <ol className="mx-auto grid max-w-7xl grid-cols-2 px-4 md:grid-cols-4 md:px-6">
          {h.continuum.map((step, i) => {
            const dividers =
              i === 0
                ? ""
                : i === 1
                  ? "border-l border-line pl-4 md:pl-6"
                  : i === 2
                    ? "border-t border-line md:border-t-0 md:border-l md:pl-6"
                    : "border-l border-t border-line pl-4 md:border-t-0 md:pl-6";
            return (
              <li key={step.step} className={`py-5 pr-4 md:py-6 md:pr-6 ${dividers}`}>
                <Link
                  href={step.href}
                  className="group block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <span className="flex items-baseline gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy/5 text-[10px] font-semibold tabular-nums text-clinical">
                      {step.step}
                    </span>
                    <span className="text-sm font-semibold text-navy transition-colors duration-200 group-hover:text-clinical group-focus-visible:text-clinical">
                      {step.title}
                    </span>
                  </span>
                  <span className="mt-1 block pl-8 text-[12px] leading-snug text-slate">
                    {step.detail}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
}
