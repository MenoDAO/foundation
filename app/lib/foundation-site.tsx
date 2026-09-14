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
  counties: number;
};

export type FoundationSiteData = {
  founderPhotoUrl: string | null;
  whatsappNumber: string | null;
  clinicalClassification: string | null;
  clinics: FoundationClinic[];
  impact: FoundationImpact;
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
        const payload = (await res.json()) as FoundationSiteData;
        if (!cancelled && Array.isArray(payload.clinics)) {
          setData(payload);
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

export function useFoundationClinics() {
  return useFoundationSite()?.clinics ?? FALLBACK_CLINICS;
}

export function useWhatsAppNumber() {
  return useFoundationSite()?.whatsappNumber ?? null;
}
