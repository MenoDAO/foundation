"use client";

import Link from "next/link";
import { useLocale } from "../lib/locale";
import { HeroGalleryCarousel } from "./HeroGalleryCarousel";
import { WhatsAppLink } from "./WhatsAppLink";
import { IconArrowRight, IconArrowUpRight } from "./illustrations/HeroIcons";

export function HomeHero() {
  const { t } = useLocale();
  const c = t.home;
  const h = c.hero;

  return (
    <section aria-labelledby="home-hero-title" className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-3 pt-7 sm:pt-9 lg:pt-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate sm:text-[11px]">
            {c.eyebrow}
          </p>
          <p className="ml-auto text-[10px] font-medium uppercase tracking-[0.18em] text-slate sm:text-[11px]">
            {h.location}
          </p>
        </div>

        <div className="grid gap-8 pb-9 pt-7 sm:pt-8 lg:grid-cols-12 lg:items-start lg:gap-12 lg:pb-10 lg:pt-9">
          <div className="lg:col-span-6 xl:col-span-5">
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
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {c.primaryCta}
                <IconArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#pathway-schools"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-navy/25 px-5 py-3 text-sm font-semibold text-navy transition-colors duration-200 hover:border-navy/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {c.secondaryCta}
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <HeroGalleryCarousel labels={h} />
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
                className={i === 0 ? "" : "sm:border-l sm:border-line sm:pl-8"}
              >
                <dt className="text-[12px] font-semibold text-navy">
                  {item.label}
                </dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-slate">
                  {item.detail}
                </dd>
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

      <nav aria-label={h.continuumLabel} className="border-t border-line">
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
              <li
                key={step.step}
                className={`py-5 pr-4 md:py-6 md:pr-6 ${dividers}`}
              >
                <Link
                  href={step.href}
                  className="group block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <span className="flex items-baseline gap-2">
                    <span className="text-[11px] font-semibold tabular-nums text-clinical">
                      {step.step}
                    </span>
                    <span className="text-sm font-semibold text-navy transition-colors duration-200 group-hover:text-clinical group-focus-visible:text-clinical">
                      {step.title}
                    </span>
                  </span>
                  <span className="mt-1 block text-[12px] leading-snug text-slate">
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
