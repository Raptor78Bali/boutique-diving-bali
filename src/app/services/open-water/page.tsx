import type { Metadata } from "next";
import { Award, Shield, Globe, Compass, Users, Phone, ChevronRight, Anchor, Star, MapPin, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Private SSI Open Water Course Bali",
 description:
 "Private SSI Open Water Diver certification in Bali. No groups, no strangers — just you and your personal diving professional. From age 15.",
 keywords: [
 "SSI Open Water Diver Bali",
 "private scuba certification Bali",
 "private dive course Bali",
 "SSI certification Bali",
 "learn to dive Bali private",
 "scuba diving course Bali",
 "private diving lessons Bali",
 "Open Water Diver course Indonesia",
 "SSI Open Water private instructor",
 "scuba certification Tulamben",
 "learn scuba diving Bali",
 "personal dive instructor Bali",
 "private OWD course Bali",
 ],
 openGraph: {
 title: "Private SSI Open Water Diver Course | Boutique Diving Bali",
 description:
 "Earn your SSI Open Water Diver certification with fully private instruction in Bali. No groups, no rush — just you and your personal diving professional.",
 url: "https://www.boutiquedivingbali.com/services/open-water",
 siteName: "Boutique Diving Bali",
 images: [{ url: 'https://www.boutiquedivingbali.com/images/og-image.jpg', width: 1200, height: 630 }],
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Private SSI Open Water Diver Course | Boutique Diving Bali",
 description:
 "Earn your SSI Open Water Diver certification with fully private instruction in Bali. No groups, no rush.",
 images: ['https://www.boutiquedivingbali.com/images/og-image.jpg'],
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/services/open-water",
 },
};

const faqItems = [
 {
 question: "What is the SSI Open Water Diver certification?",
 answer:
 "The SSI Open Water Diver is the world's most recognised entry-level scuba diving certification. It teaches you the fundamental knowledge and skills to dive safely and independently with another certified diver to a maximum depth of 18 metres. The certification is internationally recognised, valid for life, and accepted at dive centres and resorts worldwide. It is your passport to the underwater world.",
 },
 {
 question: "What does the course involve?",
 answer:
 "The SSI Open Water Diver course has three phases. First, digital theory — you study the academic materials online at your own pace before arriving in Bali, covering diving physics, safety, equipment, and planning. Second, confined water training — you practise essential skills (breathing, buoyancy, mask clearing, emergency procedures) in a pool or calm shallow water until you are completely comfortable. Third, open water dives — you complete four open water dives over two days at real dive sites, applying everything you have learned. With Boutique Diving Bali, all three phases are conducted entirely privately with Dominic as your personal diving professional.",
 },
 {
 question: "How long does the course take?",
 answer:
 "The in-water portion of the course typically takes three to four days: one day for confined water skills training and two to three days for open water dives. However, because your course is fully private, there is no fixed schedule. If you need more time on any skill, you take it. If you progress quickly, Dominic adapts the pace to match. The theory portion is completed online before you arrive, so your time in Bali is spent in the water, not in a classroom.",
 },
 {
 question: "Do I need any prior diving experience?",
 answer:
 "None at all. The Open Water Diver course is designed specifically for complete beginners. You do not need any previous diving experience. You do need to be reasonably comfortable in the water and able to swim 200 metres (any style) and float or tread water for 10 minutes. If you are unsure, Dominic will assess your comfort level at the start and work with you at whatever pace feels right.",
 },
 {
 question: "Where in Bali will I do my certification dives?",
 answer:
 "Your open water dives take place at Bali's finest dive sites, selected by Dominic based on conditions and your comfort level. Typical sites include Tulamben — home of the famous USAT Liberty shipwreck and stunning coral gardens — and Padang Bai's Blue Lagoon, known for its calm, clear waters ideal for new divers. Unlike group courses that follow a fixed schedule regardless of conditions, Dominic chooses the best site for you on the day, ensuring the safest and most beautiful experience possible.",
 },
 {
 question: "What is the minimum age for the SSI Open Water Diver course?",
 answer:
 "The minimum age for the full SSI Open Water Diver certification is 15. Divers aged 10 to 14 can earn the Junior Open Water Diver certification, which follows the same curriculum but includes depth restrictions and a requirement to dive with a certified adult. Boutique Diving Bali offers both — and for families, Dominic can run Junior and adult certifications simultaneously so everyone dives together. Children aged 8 to 12 can start with the SSI Scuba Explorer program.",
 },
 {
 question: "How does pricing work for the private course?",
 answer:
 "Every course is individually priced based on your specific situation — the number of students, any additional services like equipment or transport, and the dive sites selected. Because Boutique Diving Bali offers exclusively private instruction (never groups with strangers), pricing is prepared as a bespoke proposal after Dominic understands your needs. There are no hidden costs and no standard packages. Simply reach out via WhatsApp or email to start the conversation.",
 },
];

export default function OpenWaterDiverPage() {
 return (
 <>
 {/* JSON-LD Service Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Service",
 name: "Private SSI Open Water Diver Course",
 provider: { "@id": "https://www.boutiquedivingbali.com/#organization" },
 description:
 "Earn your SSI Open Water Diver certification with fully private instruction in Bali. No group classes — just you and your personal SSI-certified diving professional.",
 areaServed: {
 "@type": "Place",
 name: "Bali, Indonesia",
 },
 serviceType: "Private SSI Open Water Diver Certification Course",
 priceRange: "$$$$",
 url: "https://www.boutiquedivingbali.com/services/open-water",
 "dateModified": "2026-04-16",
 }}
 />
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
 name: "Services",
 item: "https://www.boutiquedivingbali.com/#services",
 },
 {
 "@type": "ListItem",
 position: 3,
 name: "Open Water Diver",
 item: "https://www.boutiquedivingbali.com/services/open-water",
 },
 ],
 }}
 />

 <main id="main-content" className="min-h-screen">
 {/* ============================================= */}
 {/* HERO SECTION */}
 {/* ============================================= */}
 <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628]">
 {/* Animated light rays */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
 style={{ left: "25%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(12deg)" }}
 />
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
 style={{ left: "70%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-8deg)" }}
 />
 </div>

 <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-20">
 {/* Breadcrumb */}
 <nav aria-label="Breadcrumb" className="mb-8">
 <ol className="flex items-center justify-center gap-2 text-sm text-[#94A3B8]">
 <li>
 <Link href="/" className="hover:text-[#C5A55A] transition-colors">
 Home
 </Link>
 </li>
 <li>
 <ChevronRight className="w-3 h-3" />
 </li>
 <li>
 <Link href="/#services" className="hover:text-[#C5A55A] transition-colors">
 Services
 </Link>
 </li>
 <li>
 <ChevronRight className="w-3 h-3" />
 </li>
 <li className="text-[#C5A55A]">Open Water Diver</li>
 </ol>
 </nav>

 {/* Eyebrow */}
 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 SSI Certification Course
 </p>
 </FadeIn>

 {/* Icon */}
 <FadeIn delay={0.1}>
 <div className="flex justify-center mb-6">
 <div className="w-16 h-16 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <Award className="w-8 h-8 text-[#0C7C6B]" />
 </div>
 </div>
 </FadeIn>

 {/* Badge */}
 <FadeIn delay={0.15}>
 <div className="flex justify-center mb-6">
 <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 rounded-full text-sm font-sans text-[#0C7C6B]">
 From Age 15
 </span>
 </div>
 </FadeIn>

 {/* Heading */}
 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 Your Private{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Open Water Diver
 </span>
 {" "}Course
 </h1>
 </FadeInUp>

 {/* Sub-heading */}
 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
 Earn your SSI Open Water Diver certification with fully private instruction. No group classes, no strangers — just you and your personal diving professional at Bali&apos;s most beautiful dive sites.
 </p>
 </FadeInUp>

 {/* CTAs */}
 <FadeInUp delay={0.4}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20the%20private%20Open%20Water%20Diver%20course."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300"
 >
 <Phone className="w-4 h-4" />
 Book Your Private Course
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Open%20Water%20Diver%20Course%20Inquiry"
 className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-sans font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
 >
 Send an Email
 </a>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* Transition gradient */}
 <div className="h-24 bg-gradient-to-b from-[#0A1628] to-[#FDF8F0]" />

 {/* ============================================= */}
 {/* THE CONCEPT — Why Private Matters */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The Boutique Diving Difference
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 Why Learn to Dive Privately?
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 The SSI Open Water Diver certification is a 3–4 day course that qualifies you to dive to 18 metres with a buddy, anywhere in the world, for life. Boutique Diving Bali delivers it fully private — solo, with your partner, or as a family — never mixed with strangers, in Tulamben on Bali&apos;s east coast.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 At Boutique Diving Bali, your Open Water Diver course is entirely different. Dominic Frei, your SSI-certified Swiss diving professional, guides you privately — one-on-one or with your own group only. Every skill is demonstrated just for you. Every question is answered immediately. Every dive is planned around your comfort, your confidence, and the best conditions that day. You never compete for attention, and you never feel rushed.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 The result is not just a certification card — it is genuine comfort and competence underwater. Divers who learn privately develop better buoyancy, stronger confidence, and a deeper connection to the ocean from their very first dive. This is learning to dive as it should be: personal, patient, and unforgettable.
 </p>
 </div>
 </FadeInUp>
 </div>

 {/* Scroll indicator */}
 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
 <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
 </svg>
 </div>
 </section>

 {/* ============================================= */}
 {/* COURSE STRUCTURE — 3 Phases */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Course Structure
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 What does the SSI Open Water Diver course involve?
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 The SSI Open Water Diver course is structured in three clear phases — and with private instruction, each phase is tailored entirely to your pace.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.05}>
 <div className="overflow-x-auto rounded-lg border border-[#E8DFD0] my-8 max-w-4xl mx-auto">
 <table className="w-full text-left text-sm md:text-base">
 <thead className="bg-[#0A1628] text-[#FDF8F0]">
 <tr>
 <th className="px-4 py-3 font-medium tracking-wide">Specification</th>
 <th className="px-4 py-3 font-medium tracking-wide">Detail</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-[#E8DFD0] bg-[#FDF8F0]">
 <tr>
 <td className="px-4 py-3 font-medium text-[#2D4349]">Certification body</td>
 <td className="px-4 py-3 text-[#2D4349]">SSI (Scuba Schools International)</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-medium text-[#2D4349]">Course duration</td>
 <td className="px-4 py-3 text-[#2D4349]">3–4 days, paced to your comfort</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-medium text-[#2D4349]">Maximum depth</td>
 <td className="px-4 py-3 text-[#2D4349]">18 metres (60 feet)</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-medium text-[#2D4349]">Minimum age</td>
 <td className="px-4 py-3 text-[#2D4349]">15 years</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-medium text-[#2D4349]">Prerequisites</td>
 <td className="px-4 py-3 text-[#2D4349]">Basic swimming ability, medical fitness to dive</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-medium text-[#2D4349]">Course components</td>
 <td className="px-4 py-3 text-[#2D4349]">Digital theory + confined-water session + 4 open-water dives</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-medium text-[#2D4349]">Certification validity</td>
 <td className="px-4 py-3 text-[#2D4349]">Lifetime, recognised in over 130 countries</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-medium text-[#2D4349]">Group size</td>
 <td className="px-4 py-3 text-[#2D4349]">Solo, couple, or family — never mixed with strangers</td>
 </tr>
 </tbody>
 </table>
 </div>
 </FadeInUp>

 <div className="space-y-6">
 {[
 {
 phase: "01",
 title: "Digital Theory — Learn at Home",
 description:
 "Before you arrive in Bali, you complete the SSI academic materials online at your own pace. You will learn about diving physics, the effects of pressure underwater, how your equipment works, dive planning, and essential safety procedures. The digital platform is available on your phone, tablet, or computer — study when it suits you. By the time you meet Dominic, you will already understand the theory and be ready to focus on practical skills.",
 icon: BookOpen,
 detail: "Completed online before arrival · Study at your own pace · Available on any device",
 },
 {
 phase: "02",
 title: "Confined Water Training — Master the Skills",
 description:
 "Your first day in the water. In a pool or calm, shallow environment, Dominic guides you through every essential diving skill one-on-one: equipment setup, breathing techniques, buoyancy control, mask clearing, regulator recovery, emergency ascents, and air-sharing procedures. Because it is just you and Dominic, there is no pressure and no waiting. You practise each skill until you are genuinely comfortable — not until the group is ready to move on.",
 icon: Shield,
 detail: "One full day · Private pool or calm shallow water · All equipment provided",
 },
 {
 phase: "03",
 title: "Open Water Dives — Explore Bali's Best Sites",
 description:
 "Over two to three days, you complete four open water dives at Bali's finest dive sites. This is where everything comes together — you apply your skills in the real ocean, exploring coral reefs, encountering marine life, and experiencing the wonder of breathing underwater in open water for the first time. Dominic selects the best sites based on conditions that day, and every dive is planned specifically for you. By the end, you will hold your SSI Open Water Diver certification — recognised worldwide, valid for life.",
 icon: Globe,
 detail: "Four dives over 2–3 days · Sites chosen for best conditions · Certification valid for life",
 },
 ].map((item, index) => (
 <FadeInUp key={item.phase} delay={index * 0.1}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DFD0] hover:shadow-lg transition-all duration-300">
 <div className="flex items-start gap-4 mb-4">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <item.icon className="w-5 h-5 text-[#0C7C6B]" />
 </div>
 <div className="flex-1">
 <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A55A]">
 Phase {item.phase}
 </span>
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mt-1">
 {item.title}
 </h3>
 </div>
 </div>
 <p className="font-sans text-[#64748B] leading-relaxed mb-4">
 {item.description}
 </p>
 <p className="font-sans text-xs text-[#0C7C6B] tracking-wide">
 {item.detail}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* WHAT'S INCLUDED — Feature Grid */}
 {/* ============================================= */}
 <section className="py-20 bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628] text-white">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 What You Get
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white text-center mb-14">
 The Private Course Experience
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Users,
 title: "Entirely Private Instruction",
 description: "One diving professional, one student (or your own group). No strangers, no waiting, no compromises on your learning pace.",
 },
 {
 icon: Award,
 title: "Globally Recognised Certification",
 description: "Your SSI Open Water Diver card is recognised worldwide and valid for life. Dive anywhere on the planet with another certified diver.",
 },
 {
 icon: Shield,
 title: "Swiss Precision Safety",
 description: "Dominic's Swiss Army background and decade in risk management mean safety is never an afterthought — it is built into every moment.",
 },
 {
 icon: Compass,
 title: "Best-Site Selection",
 description: "No fixed schedule. Dominic selects the dive site with the best conditions on the day — not the most convenient one for a group bus.",
 },
 {
 icon: Star,
 title: "Equipment Provided",
 description: "All diving equipment is included and personally fitted to you. You bring only a swimsuit, towel, and your sense of adventure.",
 },
 {
 icon: Anchor,
 title: "Flexible Scheduling",
 description: "Your course runs on your schedule, not a fixed timetable. Need a rest day between dives? Starting late? No problem — this is your course.",
 },
 ].map((feature, index) => (
 <FadeInUp key={feature.title} delay={index * 0.05}>
 <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-[#0C7C6B]/20 transition-all duration-300 h-full">
 <feature.icon className="w-6 h-6 text-[#C5A55A] mb-4" />
 <h3 className="font-heading text-lg font-normal text-white mb-2">
 {feature.title}
 </h3>
 <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
 {feature.description}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* DIVE SITES — Where You'll Learn */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Your Classroom
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 Where You Will Learn to Dive
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 Not a hotel swimming pool. Not a crowded beach. Bali&apos;s finest dive sites — chosen for you, on the day, by Dominic.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-8">
 <FadeInUp delay={0.1}>
 <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E8DFD0] relative overflow-hidden">
 <div className="absolute top-4 right-4">
 <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C5A55A]/10 border border-[#C5A55A]/20 rounded-full text-xs font-sans uppercase tracking-wider text-[#C5A55A]">
 <MapPin className="w-3 h-3" /> Primary Site
 </span>
 </div>
 <h3 className="font-heading text-2xl font-normal text-[#2D4349] mb-2 mt-2">
 Tulamben
 </h3>
 <p className="font-sans text-[#64748B] leading-relaxed mb-4">
 Dominic&apos;s home base and arguably the best place in Bali to learn to dive. Calm conditions, easy shore entries, and an extraordinary range of marine life — from the iconic <a href="https://en.wikipedia.org/wiki/USAT_Liberty" target="_blank" rel="noopener noreferrer" className="text-[#0C7C6B] underline underline-offset-2">USAT Liberty</a> shipwreck (a World War II cargo ship resting at just 5–30 metres) to vibrant coral gardens teeming with tropical fish. You will not believe this is your classroom.
 </p>
 <div className="flex flex-wrap gap-2">
 {["USAT Liberty Wreck", "Coral Garden", "Drop-Off", "Seraya Secrets"].map((site) => (
 <span key={site} className="text-xs font-sans px-3 py-1 bg-[#0C7C6B]/10 text-[#0C7C6B] rounded-full">
 {site}
 </span>
 ))}
 </div>
 </div>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="space-y-4">
 <div className="bg-[#F5F0E8] rounded-xl p-5 border border-[#E8DFD0]">
 <h4 className="font-heading text-lg font-normal text-[#2D4349] mb-1">
 Padang Bai — Blue Lagoon
 </h4>
 <p className="font-sans text-sm text-[#64748B]">
 Crystal-clear waters and gentle currents make this an ideal alternative for training dives. Rich coral life and frequent turtle sightings.
 </p>
 </div>
 <div className="bg-[#F5F0E8] rounded-xl p-5 border border-[#E8DFD0]">
 <h4 className="font-heading text-lg font-normal text-[#2D4349] mb-1">
 Amed
 </h4>
 <p className="font-sans text-sm text-[#64748B]">
 Beautiful bay diving with easy entries, colourful walls, and Japanese wreck sites. A peaceful, uncrowded alternative when conditions favour it.
 </p>
 </div>
 <div className="bg-[#F5F0E8] rounded-xl p-5 border border-[#E8DFD0]">
 <h4 className="font-heading text-lg font-normal text-[#2D4349] mb-1">
 Jemeluk Bay
 </h4>
 <p className="font-sans text-sm text-[#64748B]">
 A sheltered bay near Amed with calm, warm water, healthy coral reefs, and an excellent variety of macro marine life. Perfect for building confidence.
 </p>
 </div>
 </div>
 </FadeInUp>
 </div>

 <FadeIn delay={0.3}>
 <p className="font-sans text-sm text-[#64748B] text-center mt-8 italic">
 Dominic selects the site with the best conditions each day. You never dive a site just because it fits a bus schedule.
 </p>
 </FadeIn>
 </div>
 </section>

 {/* ============================================= */}
 {/* WHO IS IT FOR */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Is This Course Right for You?
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 Who This Private Course Is For
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Complete Beginners",
 description: "Never dived before? Perfect. The Open Water Diver is designed from scratch for people with zero experience. You just need to be comfortable in water.",
 },
 {
 title: "Holiday Divers",
 description: "Visiting Bali and want to get certified during your trip? A private course fits around your holiday schedule — no fixed start dates, no group waiting lists.",
 },
 {
 title: "Couples & Friends",
 description: "Learn together at your own pace. Dominic guides couples and small groups privately — so you share the experience without sharing Dominic with strangers.",
 },
 {
 title: "Anxious Beginners",
 description: "Nervous about breathing underwater? A private course removes every source of pressure. No audience, no rushing. Just you, Dominic, and your pace.",
 },
 {
 title: "Parents Before Family Trips",
 description: "Getting certified before a family dive holiday? Learn privately in Bali, then join your kids on their Junior OWD or Scuba Explorer experience.",
 },
 {
 title: "Career Changers & Gap Travellers",
 description: "Starting your diving journey? A solid private Open Water foundation sets you up for Specialty courses, Advanced training, and a lifetime of diving.",
 },
 ].map((audience, index) => (
 <FadeInUp key={audience.title} delay={index * 0.05}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0]">
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
 {/* FAQ SECTION */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-3xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Common Questions
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-12">
 Everything You Need to Know
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <FaqAccordion items={faqItems} />
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* CROSS-LINKS — Other Services */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Explore More
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-12">
 You Might Also Be Interested In
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Junior Open Water Diver",
 description: "Same world-class certification for divers aged 10–14. Private instruction at your child's pace.",
 href: "/services/junior-owd",
 badge: "Ages 10–14",
 },
 {
 title: "SSI Specialty Courses",
 description: "Already certified? Go deeper with Deep Diving, Nitrox, Night Diving, Wreck Diving, and more.",
 href: "/services/specialty",
 badge: "Certified Divers",
 },
 {
 title: "Dive Butler Service",
 description: "Your personal diving concierge across all of Indonesia. Liveaboards, resorts, any destination.",
 href: "/services/dive-butler",
 badge: "Signature Service",
 },
 ].map((service, index) => (
 <FadeInUp key={service.title} delay={index * 0.1}>
 <Link
 href={service.href}
 className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0] hover:border-[#C5A55A]/30 hover:shadow-lg transition-all duration-300 group"
 >
 <span className="inline-block px-2 py-0.5 text-xs font-sans uppercase tracking-wider text-[#0C7C6B] bg-[#0C7C6B]/10 rounded-full mb-3">
 {service.badge}
 </span>
 <h3 className="font-heading text-lg font-normal text-[#2D4349] mb-2 group-hover:text-[#0C7C6B] transition-colors">
 {service.title}
 </h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-3">
 {service.description}
 </p>
 <span className="inline-flex items-center gap-1 text-sm font-sans text-[#0C7C6B] group-hover:gap-2 transition-all">
 Learn More <ArrowRight className="w-4 h-4" />
 </span>
 </Link>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* CONTACT CTA */}
 {/* ============================================= */}
 <section className="relative py-24 bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628] text-white overflow-hidden">
 {/* Gold glow */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A55A]/5 rounded-full blur-[120px] pointer-events-none" />

 <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Start Your Journey
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 Ready to Become a{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Certified Diver?
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Tell Dominic about your plans — when you are visiting Bali, who is joining you, and any questions you have. He will prepare a personalised proposal for your private course.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20the%20private%20Open%20Water%20Diver%20course."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <Phone className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Open%20Water%20Diver%20Course%20Inquiry"
 className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-sans font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
 >
 Send an Email
 </a>
 </div>
 </FadeInUp>

 <FadeIn delay={0.3}>
 <p className="font-sans text-sm text-[#64748B] mt-8">
 Or email directly:{" "}
 <a
 href="mailto:info@boutiquedivingbali.com"
 className="text-[#C5A55A] hover:text-[#D4AF37] transition-colors"
 >
 info@boutiquedivingbali.com
 </a>
 </p>
 </FadeIn>
 </div>
 </section>
 </main>
 </>
 );
}