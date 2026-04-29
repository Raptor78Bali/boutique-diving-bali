import type { Metadata } from "next";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FadeInUp } from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Boutique Diving Bali. Important information about our concierge services, client responsibilities, diving insurance, and liability.",
  alternates: {
    canonical: "https://www.boutiquedivingbali.com/terms",
  },
  openGraph: {
    title: 'Terms & Conditions | Boutique Diving Bali',
    description: 'Terms and conditions for Boutique Diving Bali diving concierge services.',
    url: 'https://www.boutiquedivingbali.com/terms',
    siteName: 'Boutique Diving Bali',
    images: [{ url: 'https://www.boutiquedivingbali.com/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Boutique Diving Bali',
    description: 'Terms and conditions for Boutique Diving Bali.',
    images: ['https://www.boutiquedivingbali.com/images/og-image.jpg'],
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.boutiquedivingbali.com" },
            { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: "https://www.boutiquedivingbali.com/terms" },
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
                <li className="text-[#C5A55A]">Terms &amp; Conditions</li>
              </ol>
            </nav>
            <FadeInUp>
              <h1 className="font-heading text-4xl sm:text-5xl font-normal text-white mb-4">Terms &amp; Conditions</h1>
              <p className="font-sans text-[#94A3B8]">Last updated: March 2026</p>
            </FadeInUp>
          </div>
        </section>

        <div className="h-16 bg-gradient-to-b from-[#0A1628] to-[#FDF8F0]" />

        <section className="py-16 bg-[#FDF8F0]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <FadeInUp>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Nature of Our Service</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  Boutique Diving Bali operates as a personal diving concierge and trip planning service. We curate, coordinate, and facilitate bespoke diving experiences across Bali and Indonesia. Our role is to design personalised diving itineraries, coordinate with licensed local dive operators, arrange logistics, and accompany clients during their diving experiences.
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  Diving activities are conducted in coordination with licensed local dive operators and facilities. Equipment rental, academic training materials, and facility-based services are provided by these local partners directly. Boutique Diving Bali acts as a concierge and coordinator — not as a dive centre or commercial dive operator.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.05}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Proposals and Pricing</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  All pricing is provided as individualised proposals based on the specific requirements of each client. Proposals are prepared after an initial consultation and reflect the scope, duration, and nature of the requested experience. There are no standard packages or fixed price lists.
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  A proposal is not a binding contract until explicitly confirmed in writing by both parties. Boutique Diving Bali reserves the right to adjust proposals based on changes in scope, availability, weather conditions, or other factors that affect the planned experience.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Client Responsibilities</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  Clients are responsible for ensuring they are in good physical and mental health to participate in diving activities. Clients must honestly disclose any medical conditions, medications, or health concerns that may affect their fitness to dive. All participants are required to complete the relevant medical questionnaire before any in-water activity.
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  Clients are responsible for holding appropriate and valid diving certifications for the activities they wish to undertake. For certification courses, clients must meet the minimum age and health requirements set by Scuba Schools International (SSI).
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  Clients must follow all safety briefings, instructions, and dive plans communicated before and during diving activities. Failure to follow safety protocols may result in the cancellation of a dive at the sole discretion of the dive professional, with no refund for that specific activity.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.15}>
                <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E8DFD0] mb-8">
                  <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Diving Insurance — Your Responsibility</h2>
                  <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                    <strong className="text-[#2D4349]">All clients are solely responsible for obtaining adequate diving and travel insurance before participating in any diving activity.</strong> Standard travel insurance policies typically do not cover scuba diving accidents, hyperbaric treatment, or emergency medical evacuation related to diving injuries. It is the client&apos;s responsibility to verify that their insurance covers the specific activities they will be undertaking.
                  </p>
                  <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                    Boutique Diving Bali does not provide insurance coverage for clients. We do not verify, validate, or guarantee any client&apos;s insurance status. Participating in diving activities without adequate insurance is entirely at the client&apos;s own risk.
                  </p>
                  <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                    We strongly recommend <strong className="text-[#2D4349]">Divers Alert Network (DAN)</strong> — the world&apos;s leading dive safety organisation, founded in 1980 and trusted by over 300,000 members worldwide. DAN specialises in dive accident insurance that covers what standard travel insurance typically excludes: hyperbaric (recompression) treatment, emergency medical evacuation, and dive injury medical expenses.
                  </p>
                  <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                    For divers visiting Bali and Indonesia, DAN Asia-Pacific offers both short-term plans (starting from US$20 for a single trip of 1–30 days) and annual membership with year-round worldwide coverage. Coverage begins immediately upon enrolment — you can purchase it even after arriving in Indonesia. DAN also operates a 24/7 emergency hotline with a dedicated Indonesian number: +62-21-5085-8719.
                  </p>
                  <p className="text-[#64748B] font-sans leading-relaxed">
                    Learn more and enrol at{" "}
                    <a
                      href="https://world.dan.org/membership-coverage/asia-pacific/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0C7C6B] hover:text-[#0A6B5C] inline-flex items-center gap-1"
                    >
                      DAN Asia-Pacific (world.dan.org) <ExternalLink className="w-3 h-3" />
                    </a>{" "}
                    or ask Dominic for guidance on choosing the right plan for your trip.
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Assumption of Risk</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  Scuba diving and related underwater activities involve inherent risks, including but not limited to decompression sickness, barotrauma, drowning, marine life injuries, equipment failure, and other hazards associated with underwater environments. These risks exist regardless of the level of training, preparation, or supervision provided.
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  By participating in any diving activity arranged through Boutique Diving Bali, clients acknowledge and accept these inherent risks. Clients confirm that their participation is voluntary and that they assume full responsibility for any injury, loss, or damage that may occur during diving activities, except where caused by gross negligence.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.25}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Limitation of Liability</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  Boutique Diving Bali acts as a concierge and coordinator of diving experiences. To the fullest extent permitted by applicable law, Boutique Diving Bali shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or in connection with diving activities, including but not limited to personal injury, property damage, loss of enjoyment, or financial loss.
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  Boutique Diving Bali is not responsible for the acts, omissions, or negligence of third-party operators, resorts, liveaboard companies, transport providers, or any other service providers involved in the delivery of the diving experience. Any claims related to services provided by third parties should be directed to those parties.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Cancellations and Weather</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
                  Diving activities are subject to weather, sea conditions, and safety considerations. Boutique Diving Bali reserves the right to modify, reschedule, or cancel any diving activity if conditions are deemed unsafe. Safety will always take precedence over schedules. Where possible, alternative dates or sites will be offered.
                </p>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  Client cancellation policies will be outlined in the individual proposal provided to each client. These may vary depending on the nature and scope of the planned experience.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Intellectual Property</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  All content on this website — including text, design, graphics, logos, and layout — is the property of Boutique Diving Bali and is protected by applicable intellectual property laws. No content may be reproduced, distributed, or used without prior written permission.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Photography and Media</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  Photographs or videos taken during diving experiences may be used by Boutique Diving Bali for marketing purposes (website, social media, promotional materials) only with the explicit prior consent of the client. No images will be published without permission.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.45}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Changes to These Terms</h2>
                <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
                  We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <h2 className="font-heading text-2xl font-normal text-[#2D4349] mb-4">Contact</h2>
                <p className="text-[#64748B] font-sans leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at{" "}
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