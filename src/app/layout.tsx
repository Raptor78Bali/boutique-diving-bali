import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
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
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "AKiUau91FXJ-0rWV6roMTd9zOLVlXHv84-6mxPqvEZI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-[#FDF8F0] text-[#2D4349]">
        {children}
      </body>
    </html>
  );
}