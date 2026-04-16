import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from "@/components/Header";
import "./globals.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boutiquedivingbali.com"),
  title: {
    default: "Boutique Diving Bali | Luxury Private Diving Experiences in Indonesia",
    template: "%s | Boutique Diving Bali",
  },
  description:
    "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond. SSI certified professional. No groups, no packages — every dive tailored to you.",
  keywords: [
    "luxury diving bali",
    "private dive instructor bali",
    "bespoke diving indonesia",
    "dive butler bali",
    "personal dive concierge",
    "scuba diving bali luxury",
    "SSI certification bali private",
    "private diving komodo",
    "raja ampat diving guide",
    "family diving bali",
    "scuba diving for kids bali",
    "dive butler indonesia liveaboard",
  ],
  openGraph: {
    title: "Private Diving Concierge Bali — Luxury Bespoke Experiences | Boutique Diving Bali",
    description:
      "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond. SSI certified. No groups, no packages — every dive tailored to you.",
    url: "https://www.boutiquedivingbali.com",
    siteName: "Boutique Diving Bali",
    images: [
      {
        url: "https://www.boutiquedivingbali.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boutique Diving Bali — Your Personal Diving Concierge in Paradise",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Diving Concierge Bali — Luxury Bespoke Experiences",
    description:
      "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond.",
    images: ["https://www.boutiquedivingbali.com/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  verification: {
    google: "AKiUau91FXJ-0rWV6roMTd9zOLVlXHv84-6mxPqvEZI",
    // TODO: Add Bing Webmaster Tools verification code from bing.com/webmasters
    // other: {
    //   'msvalidate.01': 'REAL_CODE_HERE',
    // },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-[#FDF8F0] text-[#2D4349]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#C5A55A] focus:text-[#0A1628] focus:rounded-lg focus:text-sm focus:font-sans">
          Skip to content
        </a>
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.boutiquedivingbali.com/#organization",
                  name: "Boutique Diving Bali",
                  url: "https://www.boutiquedivingbali.com",
                  description: "Indonesia's premier personal diving concierge. Fully bespoke, private diving experiences across Bali and Indonesia.",
                  email: "info@boutiquedivingbali.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.boutiquedivingbali.com/images/logo-icon-only.png",
                    width: 400,
                    height: 400
                  },
                  founder: { "@type": "Person", name: "Dominic Frei" },
                  contactPoint: {
                    "@type": "ContactPoint",
                    "telephone": "+41791722403",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "German"]
                  },
                  areaServed: { "@type": "Country", name: "Indonesia" },
                  sameAs: [
 "https://www.instagram.com/boutiquedivingbali",
 "https://maps.app.goo.gl/dWZz5fu84wEpBcHD7",
 "https://wa.me/41791722403"
 ],
                  "dateModified": "2026-04-16"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.boutiquedivingbali.com/#website",
                  name: "Boutique Diving Bali",
                  url: "https://www.boutiquedivingbali.com",
                  publisher: { "@id": "https://www.boutiquedivingbali.com/#organization" }
                }
              ]
            }),
          }}
        />
        {children}
        <GoogleAnalytics gaId="G-R3YKM3DHTB" />
      </body>
    </html>
  );
}