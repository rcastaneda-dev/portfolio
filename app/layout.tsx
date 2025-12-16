import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricardo Castaneda - QA Automation Engineer & Full Stack Developer",
  description:
    "Experienced QA Automation Engineer with 10+ years delivering high-quality solutions across Financial services, eCommerce, Cybersecurity, Maritime, Ground transportation & Logistics. Skilled in JavaScript/TypeScript, Java, and modern testing frameworks.",
  keywords:
    "QA Automation, Full Stack Developer, TypeScript, JavaScript, Cypress, Testing, El Salvador",
  authors: [{ name: "Ricardo Castaneda" }],
  openGraph: {
    title: "Ricardo Castaneda - QA Automation Engineer",
    description:
      "Bridging development and testing to drive efficiency and reliability",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={vt323.className}>
        <I18nProvider>
          <div className="min-h-screen bg-gradient-to-br from-darker via-dark to-darker">
            {children}
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
