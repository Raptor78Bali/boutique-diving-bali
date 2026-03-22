import type { Metadata } from "next";
import { Phone, Mail, MapPin, ChevronRight, Instagram, MessageSquare, Clock, Globe, ArrowRight, Users, Compass } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Contact Dominic — Plan Your Private Diving Experience in Bali | Boutique Diving Bali",
 description:
 "Get in touch with Dominic Frei to plan your private diving experience in Bali. WhatsApp, email, or Instagram — reach out however you prefer. No commitment, no pressure. Just a conversation about your diving dreams.",
 keywords: [
 "contact Boutique Diving Bali",
 "book private diving Bali",
 "Dominic Frei contact",
 "diving inquiry Bali",
 "plan dive trip Bali",
 "WhatsApp dive instructor Bali",
 "private diving Bali booking",
 "dive concierge Bali contact",
 ],
 openGraph: {
 title: "Contact Dominic | Boutique Diving Bali",
 description:
 "Plan your private diving experience in Bali. WhatsApp, email, or Instagram — reach out however you prefer.",
 url: "https://www.boutiquedivingbali.com/contact",
 siteName: "Boutique Diving Bali",
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Contact Dominic | Boutique Diving Bali",
 description:
 "Plan your private diving experience in Bali. Reach out to Dominic directly.",
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/contact",
 },
};

export default function ContactPage() {
 return (
 <>
 {/* JSON-LD BreadcrumbList Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 {
 "@type": "ListItem",
 position: 1,
 name: "Home",
 item: "https://www.boutiquedivingbali.com",
 },
 {
 "@type": "ListItem",
 position: 2,
 name: "Contact",
 item: "https://www.boutiquedivingbali.com/contact",
 },
 ],
 }}
 />

 <main className="min-h-screen">
 {/* ============================================= */}
 {/* HERO SECTION */}
 {/* ============================================= */}
 <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628]">
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
 style={{ left: "32%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(9deg)" }}
 />
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
 style={{ left: "58%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-15deg)" }}
 />
 </div>

 <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-16">
 <nav aria-label="Breadcrumb" className="mb-8">
 <ol className="flex items-center justify-center gap-2 text-sm text-[#94A3B8]">
 <li><Link href="/" className="hover:text-[#C5A55A] transition-colors">Home</Link></li>
 <li><ChevronRight className="w-3 h-3" /></li>
 <li className="text-[#C5A55A]">Contact</li>
 </ol>
 </nav>

 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Let&apos;s Talk
 </p>
 </FadeIn>

 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 Plan Your{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Diving Experience
 </span>
 </h1>
 </FadeInUp>

 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
 No forms, no automated replies. When you reach out, you are talking directly to Dominic — the person who will be with you in the water.
 </p>
 </FadeInUp>
 </div>
 </section>

 <div className="h-24 bg-gradient-to-b from-[#0A1628] to-[#FDF8F0]" />

 {/* ============================================= */}
 {/* INTRO — How to Reach Dominic */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Getting Started Is Easy
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 Just Tell Dominic What You Have in Mind
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 There is no booking engine and no automated system. Every conversation starts the same way — with a simple message from you to Dominic. Tell him what you are interested in, when you are visiting Bali, who is joining you, and any questions you have. He will respond personally, usually within a few hours.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 Whether you are a first-time diver curious about getting certified, a family planning an underwater adventure with your children, a concierge booking on behalf of a VIP guest, or an experienced diver dreaming of manta rays at sunrise — the process starts with a conversation. No commitment, no pressure. Just two people talking about diving.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* CONTACT METHODS — 3 Primary Channels */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Reach Out
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 Choose However You Prefer
 </h2>
 </FadeInUp>

 <div className="grid md:grid-cols-3 gap-6">
 {/* WhatsApp */}
 <FadeInUp delay={0.1}>
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20diving%20with%20Boutique%20Diving%20Bali."
 target="_blank"
 rel="noopener noreferrer"
 className="block bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DFD0] hover:border-[#C5A55A]/30 hover:shadow-lg transition-all duration-300 text-center h-full group"
 >
 <div className="flex justify-center mb-4">
 <div className="w-14 h-14 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
 <MessageSquare className="w-7 h-7 text-[#25D366]" />
 </div>
 </div>
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mb-2">
 WhatsApp
 </h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-4">
 The fastest way to reach Dominic. Tap the button, send a message, and he will respond personally — usually within a few hours.
 </p>
 <span className="inline-flex items-center gap-1 text-sm font-sans text-[#0C7C6B] font-medium group-hover:gap-2 transition-all">
 Open WhatsApp <ArrowRight className="w-4 h-4" />
 </span>
 </a>
 </FadeInUp>

 {/* Email */}
 <FadeInUp delay={0.2}>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Diving%20Inquiry"
 className="block bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DFD0] hover:border-[#C5A55A]/30 hover:shadow-lg transition-all duration-300 text-center h-full group"
 >
 <div className="flex justify-center mb-4">
 <div className="w-14 h-14 rounded-full bg-[#C5A55A]/10 border border-[#C5A55A]/20 flex items-center justify-center group-hover:bg-[#C5A55A]/20 transition-colors">
 <Mail className="w-7 h-7 text-[#C5A55A]" />
 </div>
 </div>
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mb-2">
 Email
 </h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-4">
 Prefer email? Write to Dominic directly. Perfect for detailed inquiries, group bookings, or when you want to include travel dates and specifics.
 </p>
 <span className="font-sans text-sm text-[#C5A55A] font-medium">
 info@boutiquedivingbali.com
 </span>
 </a>
 </FadeInUp>

 {/* Instagram */}
 <FadeInUp delay={0.3}>
 <a
 href="https://www.instagram.com/boutiquedivingbali"
 target="_blank"
 rel="noopener noreferrer"
 className="block bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DFD0] hover:border-[#C5A55A]/30 hover:shadow-lg transition-all duration-300 text-center h-full group"
 >
 <div className="flex justify-center mb-4">
 <div className="w-14 h-14 rounded-full bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center group-hover:bg-[#E1306C]/20 transition-colors">
 <Instagram className="w-7 h-7 text-[#E1306C]" />
 </div>
 </div>
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mb-2">
 Instagram
 </h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-4">
 Follow Boutique Diving Bali for underwater content, dive site previews, and behind-the-scenes moments. DMs are always open.
 </p>
 <span className="font-sans text-sm text-[#E1306C] font-medium">
 @boutiquedivingbali
 </span>
 </a>
 </FadeInUp>
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* WHAT TO INCLUDE — Helpful Prompts */}
 {/* ============================================= */}
 <section className="py-20 bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628] text-white">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Helpful but Not Required
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white text-center mb-4">
 What to Include in Your Message
 </h2>
 <p className="font-sans text-[#94A3B8] text-center max-w-2xl mx-auto mb-14">
 The more Dominic knows upfront, the faster he can prepare a personalised proposal. But a simple &ldquo;I&apos;m interested&rdquo; is also perfectly fine — he will ask the right questions.
 </p>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 gap-4">
 {[
 {
 icon: Clock,
 text: "When are you visiting Bali? (dates, even approximate)",
 },
 {
 icon: Users,
 text: "How many divers? Any children? What ages?",
 },
 {
 icon: Globe,
 text: "What is your diving experience? (beginner, certified, years since last dive)",
 },
 {
 icon: Compass,
 text: "What interests you? (certification, fun dives, specific marine life, a destination)",
 },
 {
 icon: MapPin,
 text: "Where are you staying in Bali? (helps with logistics planning)",
 },
 {
 icon: MessageSquare,
 text: "Any questions, concerns, or special requests?",
 },
 ].map((item, index) => (
 <FadeInUp key={index} delay={index * 0.05}>
 <div className="flex items-start gap-3 bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
 <item.icon className="w-5 h-5 text-[#C5A55A] mt-0.5 flex-shrink-0" />
 <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
 {item.text}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* WHO CONTACTS US — B2B + Individuals */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Everyone Is Welcome
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 Whether You Are Booking for Yourself — or Someone Else
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Individual Divers & Couples",
 description: "Planning a dive trip, a certification course, or just want to explore Bali's underwater world? This is the place to start.",
 },
 {
 title: "Families",
 description: "Travelling with children? Dominic specialises in family diving — from Scuba Explorer (age 8) to Junior OWD (age 10) and parents diving alongside.",
 },
 {
 title: "Hotel & Villa Concierges",
 description: "Looking for a premium diving experience to recommend to your guests? Dominic makes you look exceptional. Discretion guaranteed.",
 },
 {
 title: "Personal & Executive Assistants",
 description: "Booking a diving experience for your employer or client? Dominic works directly with you to deliver a seamless, bespoke proposal.",
 },
 {
 title: "Travel Advisors & Agents",
 description: "Add a private diving concierge to your Indonesia itineraries. A premium tier your competitors cannot match.",
 },
 {
 title: "Corporate & Group Organisers",
 description: "Planning a team retreat, incentive trip, or executive experience? Private group diving — planned and delivered with precision.",
 },
 ].map((audience, index) => (
 <FadeInUp key={audience.title} delay={index * 0.05}>
 <div className="bg-[#F5F0E8] rounded-2xl p-6 border border-[#E8DFD0] h-full">
 <h3 className="font-heading text-lg font-normal text-[#2D4349] mb-2">
 {audience.title}
 </h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed">
 {audience.description}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* PRACTICAL INFO */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Good to Know
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 Practical Information
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 {
 icon: MapPin,
 title: "Bali, Indonesia",
 detail: "Tulamben, East Bali — with services available across the entire island and all of Indonesia.",
 },
 {
 icon: Clock,
 title: "Response Time",
 detail: "Dominic personally responds to every message. Expect a reply within a few hours — often much faster.",
 },
 {
 icon: Globe,
 title: "Languages",
 detail: "English and German. Serving clients from Australia, UK, USA, Singapore, Germany, Austria, and Switzerland.",
 },
 {
 icon: Phone,
 title: "Timezone",
 detail: "Bali operates on WITA (UTC+8). Same timezone as Singapore, Perth, and Hong Kong.",
 },
 ].map((item, index) => (
 <FadeInUp key={item.title} delay={index * 0.08}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0] text-center h-full">
 <div className="flex justify-center mb-3">
 <div className="w-10 h-10 rounded-full bg-[#C5A55A]/10 border border-[#C5A55A]/20 flex items-center justify-center">
 <item.icon className="w-5 h-5 text-[#C5A55A]" />
 </div>
 </div>
 <h3 className="font-heading text-lg font-normal text-[#2D4349] mb-2">
 {item.title}
 </h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed">
 {item.detail}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* CONTACT CTA */}
 {/* ============================================= */}
 <section className="relative py-24 bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628] text-white overflow-hidden">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A55A]/5 rounded-full blur-[120px] pointer-events-none" />

 <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Start the Conversation
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 Your Next Dive Starts with a{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Simple Message
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 No commitment required. Just tell Dominic what you have in mind and he will take it from there.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20diving%20with%20Boutique%20Diving%20Bali."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <MessageSquare className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Diving%20Inquiry"
 className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-sans font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
 >
 <Mail className="w-4 h-4" />
 Send an Email
 </a>
 </div>
 </FadeInUp>

 <FadeIn delay={0.3}>
 <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#64748B]">
 <a
 href="mailto:info@boutiquedivingbali.com"
 className="flex items-center gap-2 hover:text-[#C5A55A] transition-colors"
 >
 <Mail className="w-4 h-4" />
 info@boutiquedivingbali.com
 </a>
 <a
 href="https://www.instagram.com/boutiquedivingbali"
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-2 hover:text-[#C5A55A] transition-colors"
 >
 <Instagram className="w-4 h-4" />
 @boutiquedivingbali
 </a>
 </div>
 </FadeIn>
 </div>
 </section>
 </main>
 </>
 );
}