/** Published institutional inboxes only. */
export const EMAILS = {
  general: "info@drpapifoundation.org",
  outreach: "outreach@drpapifoundation.org",
  partnerships: "partnerships@drpapifoundation.org",
} as const;

export const SITE_URL = "https://drpapifoundation.org";

export const HOURS = "Mon–Fri, 8:30 AM–5:00 PM EAT";

export const LOCATIONS = {
  headquarters: "Mombasa County, Republic of Kenya",
  clinicalBase: "Mikindani Hospital Dental Unit, Mikindani, Mombasa, Kenya",
} as const;

/**
 * PLACEHOLDER: insert real WhatsApp number before launch.
 * Do not publish a live wa.me deep-link until a real number is supplied.
 */
export const WHATSAPP_NUMBER: string | null = null;

export function getFoundationApiUrl(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/$/, "");
  return fromEnv || null;
}

export const ROUTES = {
  home: "/",
  story: "/our-story",
  work: "/what-we-do",
  menodao: "/menodao",
  impact: "/impact",
  involved: "/get-involved",
  contact: "/contact",
} as const;
