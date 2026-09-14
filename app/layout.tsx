import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SiteShell } from "./components/SiteShell";
import { SITE_URL } from "./lib/constants";
import { en } from "./content/en";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: en.meta.titleDefault,
    template: `%s · ${en.meta.siteName}`,
  },
  description: en.meta.description,
  applicationName: en.meta.siteName,
  authors: [{ name: "Dr. Papi Foundation" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: en.meta.siteName,
    title: en.meta.titleDefault,
    description: en.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.titleDefault,
    description: en.meta.description,
  },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.json",
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#1E2878",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Dr. Papi Foundation",
    url: SITE_URL,
    email: "info@drpapifoundation.org",
    areaServed: ["Mombasa County", "Kwale County"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mombasa County",
      addressCountry: "KE",
    },
    description: en.meta.description,
  };

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
