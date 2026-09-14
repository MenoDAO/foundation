import { Eyebrow } from "./TruthBadge";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subhead,
}: {
  eyebrow: string;
  title: string;
  subhead?: string;
}) {
  return (
    <header className="border-b border-[#D8DCEB]/60 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-navy md:text-5xl">
            {title}
          </h1>
          {subhead ? (
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate">
              {subhead}
            </p>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}
