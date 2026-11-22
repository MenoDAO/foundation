"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getFoundationApiUrl } from "./constants";

export type FoundationClinic = {
  id: string;
  name: string;
  location: string;
  chairs: number | null;
  isAnchor: boolean;
  isNamedPartner: boolean;
  hidden?: boolean;
  logoUrl: string | null;
};

export type FoundationImpact = {
  registeredMembers: number;
  contributingMembers: number;
  approvedFacilities: number;
  campsConducted: number;
  peopleServed: number;
  counties: number;
};

export type FoundationPlaybackRate = 0.5 | 0.75 | 1 | 1.25 | 1.5 | 2;

export type FoundationHeroContent = {
  videoUrl: string | null;
  posterUrl: string | null;
  playbackRate: FoundationPlaybackRate;
  autoplay: boolean;
  muted: boolean;
  loop: boolean;
};

export type FoundationFounderVideo = {
  videoUrl: string | null;
  posterUrl: string | null;
  caption: string | null;
  playbackRate: FoundationPlaybackRate;
  muted: boolean;
};

export type FoundationMediaItem = {
  id: string;
  kind: "image" | "video";
  src: string;
  posterUrl?: string | null;
  alt?: string | null;
  altSw?: string | null;
  caption?: string | null;
  captionSw?: string | null;
  href?: string | null;
  playbackRate?: FoundationPlaybackRate;
};

export type FoundationCopyLocale = {
  eyebrow?: string | null;
  h1?: string | null;
  subhead?: string | null;
  primaryCta?: string | null;
  secondaryCta?: string | null;
  challengeTitle?: string | null;
  pillarsTitle?: string | null;
  letterEyebrow?: string | null;
  letterTitle?: string | null;
  letterBody?: string | null;
  letterSummary?: string | null;
  involvedTitle?: string | null;
  involvedBody?: string | null;
};

export type FoundationCopyOverrides = {
  en: FoundationCopyLocale;
  sw: FoundationCopyLocale;
};

export type FoundationSiteData = {
  founderPhotoUrl: string | null;
  whatsappNumber: string | null;
  clinicalClassification: string | null;
  clinics: FoundationClinic[];
  impact: FoundationImpact;
  hero: FoundationHeroContent;
  founderVideo: FoundationFounderVideo;
  mediaItems: FoundationMediaItem[];
  copy: FoundationCopyOverrides;
};

const FALLBACK_CLINICS: FoundationClinic[] = [
  {
    id: "mikindani",
    name: "Mikindani Hospital Dental Unit",
    location: "Mikindani, Mombasa, Kenya",
    chairs: null,
    isAnchor: true,
    isNamedPartner: true,
    logoUrl: null,
  },
];

const FALLBACK_HERO: FoundationHeroContent = {
  videoUrl: null,
  posterUrl: null,
  playbackRate: 1,
  autoplay: true,
  muted: true,
  loop: true,
};

const FALLBACK_FOUNDER_VIDEO: FoundationFounderVideo = {
  videoUrl: null,
  posterUrl: null,
  caption: null,
  playbackRate: 1,
  muted: true,
};

const FALLBACK_COPY: FoundationCopyOverrides = { en: {}, sw: {} };
const EMPTY_MEDIA: FoundationMediaItem[] = [];

const FoundationSiteContext = createContext<FoundationSiteData | null>(null);

export function FoundationSiteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FoundationSiteData | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const backend = getFoundationApiUrl();
        if (!backend) return;
        const res = await fetch(`${backend}/public/foundation/media`, {
          cache: "no-store",
        });
        if (!res.ok) return;
        const payload = (await res.json()) as Partial<FoundationSiteData>;
        if (!cancelled && Array.isArray(payload.clinics)) {
          setData({
            founderPhotoUrl: payload.founderPhotoUrl ?? null,
            whatsappNumber: payload.whatsappNumber ?? null,
            clinicalClassification: payload.clinicalClassification ?? null,
            clinics: payload.clinics,
            impact:
              payload.impact ??
              ({
                registeredMembers: 0,
                contributingMembers: 0,
                approvedFacilities: 1,
                campsConducted: 0,
                peopleServed: 0,
                counties: 2,
              } satisfies FoundationImpact),
            hero: { ...FALLBACK_HERO, ...(payload.hero || {}) },
            founderVideo: {
              ...FALLBACK_FOUNDER_VIDEO,
              ...(payload.founderVideo || {}),
            },
            mediaItems: Array.isArray(payload.mediaItems) ? payload.mediaItems : [],
            copy: {
              en: payload.copy?.en || {},
              sw: payload.copy?.sw || {},
            },
          });
        }
      } catch {
        /* Keep the last good snapshot, or the named-partner fallback. */
      }
    }

    void load();
    const timer = window.setInterval(() => void load(), 30_000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <FoundationSiteContext.Provider value={data}>
      {children}
    </FoundationSiteContext.Provider>
  );
}

export function useFoundationSite() {
  return useContext(FoundationSiteContext);
}

export function useFoundationHero() {
  return useFoundationSite()?.hero ?? FALLBACK_HERO;
}

export function useFoundationFounderVideo() {
  return useFoundationSite()?.founderVideo ?? FALLBACK_FOUNDER_VIDEO;
}

export function useFoundationMediaItems() {
  return useFoundationSite()?.mediaItems ?? EMPTY_MEDIA;
}

export function useFoundationCopy() {
  return useFoundationSite()?.copy ?? FALLBACK_COPY;
}

export function useFoundationClinics() {
  return useFoundationSite()?.clinics ?? FALLBACK_CLINICS;
}

export function useWhatsAppNumber() {
  return useFoundationSite()?.whatsappNumber ?? null;
}
