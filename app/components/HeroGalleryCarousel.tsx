"use client";

import { useEffect, useState } from "react";

const HERO_IMAGES = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/hero/gallery-${String(i + 1).padStart(2, "0")}.webp`,
  alt: `Tabasamu school and community outreach photograph ${i + 1}`,
}));

export function HeroGalleryCarousel({ badge }: { badge: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-[#D8DCEB]/60 bg-[#eef4ea]">
      <div className="relative aspect-[640/520] w-full">
        {HERO_IMAGES.map((image, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={960}
            height={780}
            loading={i === 0 ? "eager" : "lazy"}
            decoding={i === 0 ? "sync" : "async"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm md:text-sm">
          {badge}
        </span>
        <div
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5"
          aria-hidden
        >
          {HERO_IMAGES.map((image, i) => (
            <span
              key={image.src}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/55"
              }`}
            />
          ))}
        </div>
      </div>
      <figcaption className="sr-only">
        Photographs from Tabasamu school and community outreach visits across coastal
        Kenya.
      </figcaption>
    </figure>
  );
}
