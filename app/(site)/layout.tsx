import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { I18nProvider } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import WhatsappCTA from "@/components/WhatsappCTA";

const display = Fraunces({
  variable: "--f-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Hanken_Grotesk({
  variable: "--f-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--f-ar",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thegrovejo.com"),
  title: "The Grove — Furniture & Beyond | Amman",
  description:
    "The Grove — your premium supplier for home furnishing in Amman. Bedrooms, dining, sofas, design & execution. Furniture & Beyond.",
  keywords: [
    "The Grove", "furniture Amman", "luxury furniture Jordan", "home furnishing",
    "interior design Amman", "أثاث", "ذا غروف", "خلدا",
  ],
  openGraph: {
    title: "The Grove — Furniture & Beyond",
    description: "Your premium supplier for home furnishing in Amman. Every room, every detail, under one roof.",
    type: "website",
    locale: "en_JO",
    siteName: "The Grove",
    images: [{ url: "/grove/p07.jpg", width: 1200, height: 1200, alt: "The Grove — premium furnishing" }],
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${display.variable} ${sans.variable} ${arabic.variable}`}>
      <body>
        <I18nProvider>
          <SmoothScroll />
          <Cursor />
          {children}
          <WhatsappCTA />
        </I18nProvider>
      </body>
    </html>
  );
}
