import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FadeInUp } from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Boutique Diving Bali",
  description: "Privacy Policy for Boutique Diving Bali. How we handle your personal information when you contact us or use our website.",
  alternates: {
    canonical: "https://www.boutiquedivingbali.com/privacy",
  },
  openGraph: {
    title: 'Privacy Policy | Boutique Diving Bali',
    description: 'Privacy policy for Boutique Diving Bali — how we handle your personal data.',
    url: 'https://www.boutiquedivingbali.com/privacy',
    siteName: 'Boutique Diving Bali',
    images: [{ url: 'https://www.boutiquedivingbali.com/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Boutique Diving Bali',
    description: 'Privacy policy for Boutique Diving Bali.',
    images: ['https://www.boutiquedivingbali.com/images/og-image.jpg'],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.boutiquedivingbali.com" },
            { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.boutiquedivingbali.com/privacy" },
          ],
        }}
      />

      <main id="main-content" className="min-h-screen">
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628]">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-16">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center justify-center gap-2 text-sm text-[#94A3B8]">
                <li><Link href="/" className="hover:text-[#C5A55A] transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3 h-3" /></li>
                <li className="text-[#C5A55A]">Privacy Policy</li>
              </ol>
            </nav>
            <FadeInUp>
              <h1 className="font-heading text-4xl sm:text-5xl font-normal text-white mb-4">Privacy Policy</h1>
              <p className="font-sans text-[#94A3B8]">Last updated: March 2026</p>
            </FadeInUp>
          </div>
        </section>

        <div className="h-16 bg-gradient-to-b from-[#0A1628] to-[#FDF8F0]" />

        <section className="py-16 bg-[#FDF8F0]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <FadeInUp>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Who We Are</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  Boutique Diving Bali is a personal diving concierge service serving Bali and Indonesia. When this policy refers to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;, it means Boutique Diving Bali. Our website is <a href="https://www.boutiquedivingbali.com" className="text-[#0C7C6B] hover:text-[#0A6B5C]">www.boutiquedivingbali.com</a>.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.05}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">What Information We Collect</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  We collect only the information you voluntarily provide when you contact us. This may include your name, email address, phone number or WhatsApp contact, travel dates, group size, diving experience level, and any other details you choose to share in your inquiry.
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  We do not collect personal information automatically through our website beyond standard technical data (such as IP addresses and browser information) that may be logged by our hosting provider, Vercel, for security and performance purposes.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">How We Use Your Information</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  We use the information you provide solely for the purpose of responding to your inquiry and preparing a personalised proposal for diving experiences. Specifically, we use your information to communicate with you about your diving interests and travel plans, to prepare bespoke proposals tailored to your needs, and to coordinate logistics related to your diving experience.
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  We do not use your information for automated marketing, profiling, or any purpose unrelated to your inquiry.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">How We Share Your Information</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  We do not sell, rent, or trade your personal information to any third party. We may share limited information (such as your name, group size, and experience level) with local dive operators, resorts, or liveaboard operators solely for the purpose of coordinating the diving experience you have requested. We will never share your information without a direct connection to the services you have asked us to arrange.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Cookies and Tracking</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  Our website may use essential cookies required for basic functionality and security. We do not use advertising cookies, retargeting pixels, or third-party tracking tools for marketing purposes. Our hosting provider (Vercel) may collect anonymous analytics data to monitor website performance and security.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.25}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Data Retention</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected — typically for the duration of your inquiry and any subsequent diving experience, plus a reasonable period afterward for follow-up communication. You may request deletion of your personal data at any time by contacting us.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Your Rights</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  You have the right to request access to the personal information we hold about you, to request correction of any inaccurate information, to request deletion of your personal data, and to withdraw your consent to our processing of your data at any time. To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:info@boutiquedivingbali.com" className="text-[#0C7C6B] hover:text-[#0A6B5C]">info@boutiquedivingbali.com</a>.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Third-Party Services</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  Our website may contain links to third-party websites (such as WhatsApp, Instagram, and diving insurance providers). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Children&apos;s Privacy</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  We do not knowingly collect personal information directly from children under 16. When parents or guardians contact us to arrange diving experiences for their children, the personal information is provided by the parent or guardian, not by the child.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.45}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Changes to This Policy</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Contact Us</h2>
                <p className="text-[#64748B] font-sans leading-relaxed">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at{" "}
                  <a href="mailto:info@boutiquedivingbali.com" className="text-[#0C7C6B] hover:text-[#0A6B5C]">info@boutiquedivingbali.com</a>.
                </p>
              </FadeInUp>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}