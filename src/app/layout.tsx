import type { Metadata, Viewport } from "next";
import { Anton, Hanken_Grotesk, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/data";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const devanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-devanagari", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hello-aditya-dev.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/big-boss-cafe-website`),
  title: {
    default: "Big Boss Cafe — pure-veg cafe opposite GEC, Koni, Bilaspur",
    template: "%s · Big Boss Cafe",
  },
  description:
    "Big Boss Cafe is a pure-vegetarian, open-air cafe opposite Government Engineering College, Koni, Bilaspur. Chai from ₹10, coffee, maggi, chaat and lassi — 9 am to 9 pm, every day.",
  keywords: [
    "Big Boss Cafe Bilaspur",
    "cafe near Government Engineering College Bilaspur",
    "pure veg cafe Koni",
    "chai Bilaspur",
    "student cafe Koni Bilaspur",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Big Boss Cafe — chai at ₹10, opposite GEC Koni",
    description:
      "A pure-veg, open-air college cafe in Koni, Bilaspur. Real photographed price board, real photos, tap-to-call.",
    url: "/",
    siteName: "Big Boss Cafe",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Big Boss Cafe — red signboard, open-air seating and price board" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Boss Cafe — Koni, Bilaspur",
    description: "Pure-veg cafe opposite Government Engineering College. Chai ₹10, 9-to-9 daily.",
    images: ["/images/og.jpg"],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#B3261E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Big Boss Cafe",
  alternateName: "बिग बॉस कैफे",
  description:
    "A pure-vegetarian, open-air cafe opposite Government Engineering College, Koni, Bilaspur, Chhattisgarh, serving chai, coffee, maggi, sandwiches, chaat and lassi.",
  telephone: "+917828164615",
  servesCuisine: ["Indian", "Snacks", "Chaat", "Beverages"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "opp. Gov. Eng. College, Koni",
    addressLocality: "Bilaspur",
    addressRegion: "Chhattisgarh",
    postalCode: "495009",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.1314304, longitude: 82.1268477 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  hasMap: BUSINESS.mapsListing,
  image: [`${SITE_URL}/big-boss-cafe-website/images/og.jpg`],
  isAccessibleForFree: true,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${hanken.variable} ${devanagari.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-body text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
