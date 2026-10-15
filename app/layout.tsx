import type { Metadata } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

// Archivo's width axis powers the condensed hero headline (font-stretch in globals.css).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const SITE_URL = "https://rcastaneda.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ricardo Castaneda | Senior SDET",
  description:
    "Senior SDET with 10+ years in test automation and software development. AI-first QA with Playwright, Cypress, TypeScript, mobile testing and CI/CD, across financial services, eCommerce, cybersecurity, maritime, and ground transportation and logistics.",
  keywords:
    "Senior SDET, QA Automation, AI-first QA, Quality Engineering, Playwright, Cypress, TypeScript, Mobile Testing, BrowserStack, CI/CD, El Salvador",
  authors: [{ name: "Ricardo Castaneda" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ricardo Castaneda | Senior SDET",
    description:
      "Bridging development and testing to drive efficiency and reliability",
    type: "website",
    url: SITE_URL,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ricardo Castaneda",
  jobTitle: "Senior SDET",
  url: SITE_URL,
  email: "hi@rcastaneda.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Salvador",
    addressCountry: "SV",
  },
  sameAs: [
    "https://github.com/rcastaneda-dev",
    "https://www.linkedin.com/in/rcastaneda-dev/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${sourceSerif.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
