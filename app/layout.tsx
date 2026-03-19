import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Condensed, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StructuredData } from "@/components/site/structured-data";
import { siteConfig } from "@/lib/site/config";
import { buildMetadata } from "@/lib/site/metadata";

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const displayFont = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Roofing Recyclers | Turn roofing waste into infrastructure value",
    description: siteConfig.description,
    path: "/",
  }),
  keywords: [
    "asphalt shingle recycling",
    "roofing recyclers",
    "landfill diversion",
    "paving materials",
    "industrial recycling infrastructure",
    "roofing waste recovery",
  ],
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#09110d",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  industry: "Industrial Recycling Infrastructure",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={`${bodyFont.variable} ${displayFont.variable}`} lang="en">
      <body>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <div className="relative min-h-screen overflow-hidden">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
