import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
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
    "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond. SSI certified instructor. No groups, no packages — every dive tailored to you.",
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
    title: "Boutique Diving Bali | Luxury Private Diving Experiences",
    description:
      "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences tailored to you.",
    url: "https://boutiquedivingbali.com",
    siteName: "Boutique Diving Bali",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique Diving Bali",
    description:
      "Indonesia's premier personal dive concierge. Luxury private diving experiences.",
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
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
                  name: "Boutique Diving Bali",
                  url: "https://www.boutiquedivingbali.com",
                  description: "Indonesia's premier personal diving concierge. Fully bespoke, private diving experiences across Bali and Indonesia.",
                  email: "info@boutiquedivingbali.com",
                  founder: { "@type": "Person", name: "Dominic Frei" },
                  areaServed: { "@type": "Country", name: "Indonesia" },
                  sameAs: ["https://www.instagram.com/boutiquedivingbali"]
                },
                {
                  "@type": "WebSite",
                  name: "Boutique Diving Bali",
                  url: "https://www.boutiquedivingbali.com",
                  publisher: { "@type": "Organization", name: "Boutique Diving Bali" }
                }
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}