import type { Metadata } from "next";
import { Crown, Shield, Globe, Compass, Users, Phone, CheckCircle2, ChevronRight, Anchor, Star, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Personal Dive Butler Indonesia | Boutique Diving Bali",
 description:
 "Your personal SSI-certified diving companion travels with you across Indonesia. Liveaboards, resorts, any destination. Fully bespoke, entirely private.",
 keywords: [
 "dive butler Indonesia",
 "personal dive instructor Bali",
 "private diving concierge Indonesia",
 "luxury diving Indonesia",
 "private dive guide liveaboard",
 "bespoke diving experience Bali",
 "personal dive instructor liveaboard Indonesia",
 "SSI dive instructor Bali",
 "private diving Komodo",
 "private diving Raja Ampat",
 "luxury dive travel Indonesia",
 "dive butler service",
 "personal dive guide Indonesia",
 ],
 openGraph: {
 title: "Personal Dive Butler Service | Boutique Diving Bali",
 description:
 "Your personal SSI-certified diving companion travels with you across Indonesia. Luxury liveaboards, five-star resorts, private dive experiences — all handled for you.",
 url: "https://www.boutiquedivingbali.com/services/dive-butler",
 siteName: "Boutique Diving Bali",
 images: [{ url: 'https://www.boutiquedivingbali.com/images/og-image.jpg', width: 1200, height: 630 }],
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Personal Dive Butler Service | Boutique Diving Bali",
 description:
 "Your personal SSI-certified diving companion travels with you across Indonesia. Fully bespoke, entirely private.",
 images: ['https://www.boutiquedivingbali.com/images/og-image.jpg'],
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/services/dive-butler",
 },
};

const faqItems = [
 {
 question: "What exactly is the Dive Butler service?",
 answer:
 "The Dive Butler is your personal, SSI-certified diving companion who travels with you to any destination in Indonesia. Whether you are joining a luxury liveaboard expedition or staying at a five-star dive resort, Dominic accompanies you as your dedicated diving companion. He handles all diving logistics — equipment selection, dive planning, safety protocols, weather timing — so you experience only the wonder of being underwater. Think of it as having a private diving concierge who ensures every dive is tailored to your comfort, skill level, and wishes.",
 },
 {
 question: "Which destinations does the Dive Butler service cover?",
 answer:
 "The Dive Butler service covers all of Indonesia. Bali's Tulamben region serves as our home base, where Dominic leads dives personally at sites he knows intimately — the USAT Liberty wreck, the coral gardens, the drop-off, and the macro sites. For destinations beyond Bali — Komodo National Park, Raja Ampat, the Banda Sea, Alor, Wakatobi, and more — Dominic coordinates with carefully vetted local dive guides who know their sites inside-out. He handles all preparation and logistics before the dive, the local guide delivers the site-specific briefing, and Dominic stays with you underwater as your personal dive companion and safety monitor throughout every dive.",
 },
 {
 question: "Do I need to be an experienced diver to use the Dive Butler service?",
 answer:
 "Not at all. The Dive Butler service is designed for all skill levels — from complete beginners who have never breathed underwater to advanced divers chasing manta rays in strong currents. If you need certification, Dominic can train you as part of your trip. If you are a certified diver who has not been in the water for years, he will refresh your skills at your own pace before any open water dives. And if you are an experienced diver, he will match you with sites and conditions that challenge and thrill you. Every experience is tailored entirely to where you are as a diver.",
 },
 {
 question: "How is the Dive Butler different from the dive guides included on liveaboards or at resorts?",
 answer:
 "Most liveaboards and dive resorts provide shared dive guides who lead groups of 6 to 12 divers through a standard route. They do not know your personal comfort level, your anxieties, what you want to see, or how to adjust the dive to your pace. The Dive Butler is the opposite: Dominic is YOUR instructor, exclusively. He knows your experience, your preferences, your signals. He has already planned your dive specifically for you. He manages your equipment, monitors your air, watches your buoyancy, and ensures you see the marine life that matters most to you — not the group. It is the difference between a guided tour and a private concierge.",
 },
 {
 question: "Can I book the Dive Butler for my family, including children?",
 answer:
 "Absolutely. The Dive Butler service is especially popular with families. Children from age 8 can participate in the SSI Scuba Explorer program, and from age 10 they can begin their Junior Open Water Diver certification. Dominic's approach with young divers is built on patience, safety, and making it genuinely fun — his background as a Swiss Army instructor gives him a natural ability to teach with discipline and encouragement in equal measure. Each family member dives at their own pace and comfort level. No one is rushed, no one is left behind.",
 },
 {
 question: "I am a hotel concierge / personal assistant — can I book this for my clients or employer?",
 answer:
 "Yes, and this is one of the most common ways the Dive Butler service is booked. If you are a concierge at a luxury hotel or villa in Bali, a personal assistant to a high-net-worth individual, a travel advisor, or a yacht charter manager — you can reach out on behalf of your client or employer. Dominic will work directly with you to understand their preferences, skill levels, timeline, and wishes, and will prepare a fully bespoke proposal. Discretion and professionalism are guaranteed. The goal is to make you look exceptional by delivering an experience your client will never forget.",
 },
 {
 question: "How does pricing work for the Dive Butler service?",
 answer:
 "Every Dive Butler engagement is fully bespoke, which means pricing is individual for each client. The cost depends on several factors: your destination, the duration of the engagement (from a single day to multi-week expeditions), the number of divers in your party, their skill levels, any certification courses requested, the number of fun dives, and any travel or accommodation logistics involved. Once Dominic understands exactly what you envision, he prepares a detailed, transparent proposal tailored to your specific wishes. There are no hidden costs and no standard packages — because no two diving experiences should ever be the same. Simply reach out to start the conversation.",
 },
];

export default function DiveButlerPage() {
 return (
 <>
 {/* JSON-LD Service Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Service",
 name: "Personal Dive Butler Service",
 provider: { "@id": "https://www.boutiquedivingbali.com/#organization" },
 description:
 "Your personal SSI-certified diving companion travels with you to any destination in Indonesia. From luxury liveaboards to five-star dive resorts — fully bespoke, entirely private diving experiences.",
 areaServed: {
 "@type": "Country",
 name: "Indonesia",
 },
 serviceType: "Personal Dive Butler / Private Diving Concierge",
 priceRange: "$$$$",
 url: "https://www.boutiquedivingbali.com/services/dive-butler",
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
 name: "Dive Butler Service",
 item: "https://www.boutiquedivingbali.com/services/dive-butler",
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
 style={{ left: "20%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(15deg)" }}
 />
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
 style={{ left: "65%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-10deg)" }}
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
 <li className="text-[#C5A55A]">Dive Butler</li>
 </ol>
 </nav>

 {/* Eyebrow */}
 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Signature Service
 </p>
 </FadeIn>

 {/* Crown icon */}
 <FadeIn delay={0.1}>
 <div className="flex justify-center mb-6">
 <div className="w-16 h-16 rounded-full bg-[#C5A55A]/10 border border-[#C5A55A]/20 flex items-center justify-center">
 <Crown className="w-8 h-8 text-[#C5A55A]" />
 </div>
 </div>
 </FadeIn>

 {/* Heading */}
 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 Your Personal{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Dive Butler
 </span>
 </h1>
 </FadeInUp>

 {/* Sub-heading */}
 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
 A dedicated SSI-certified diving professional who travels with you to any destination in Indonesia. Your dives, your pace, your wishes — handled from start to finish.
 </p>
 </FadeInUp>

 {/* CTAs */}
 <FadeInUp delay={0.4}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20the%20Dive%20Butler%20service."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300"
 >
 <Phone className="w-4 h-4" />
 Request Your Proposal
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Dive%20Butler%20Inquiry"
 className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-sans font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
 >
 Send an Email
 </a>
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

 {/* Transition gradient */}
 <div className="h-24 bg-gradient-to-b from-[#0A1628] to-[#FDF8F0]" />

 {/* ============================================= */}
 {/* THE CONCEPT — What is a Dive Butler */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The Concept
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 What Is a Dive Butler?
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Imagine arriving at a luxury liveaboard or a five-star dive resort — and instead of joining a group of strangers led by an unfamiliar guide, you have your own personal diving concierge already there, already prepared, already knowing exactly what you want from this trip.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 That is the Dive Butler. Dominic Frei, your SSI-certified Swiss diving professional, travels with you to any destination in Indonesia as your private dive professional. He handles everything: equipment preparation, dive planning, safety checks, weather timing, coordination with local operators and dive guides. You handle nothing — except deciding where you want to dive and what you want to see.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 The concept of a personal Dive Butler was pioneered internationally by operators serving superyachts and ultra-luxury resorts in the Maldives. Boutique Diving Bali brings this same philosophy to Indonesia — the world&apos;s largest archipelago and the global epicentre of marine biodiversity — with one critical difference: here, it is not a team of rotating staff. It is one person. Your person. The same instructor, the same trust, the same understanding — from your first breath underwater to your last dive of the trip.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* HowTo Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How the Dive Butler Service Works",
 "description": "From first contact to first dive — how to book your personal Dive Butler for a fully bespoke diving experience across Indonesia.",
 "step": [
 {
 "@type": "HowToStep",
 "position": 1,
 "name": "Share Your Vision",
 "text": "Tell Dominic what you dream of — destinations, dates, group size, experience level. A liveaboard through Komodo, manta dives in Nusa Penida, or family certification in Tulamben."
 },
 {
 "@type": "HowToStep",
 "position": 2,
 "name": "Receive Your Bespoke Proposal",
 "text": "Dominic prepares a detailed, fully transparent proposal. Every element is itemised: dive days, certifications, equipment, logistics, and accommodation. No hidden costs."
 },
 {
 "@type": "HowToStep",
 "position": 3,
 "name": "Dominic Prepares Everything",
 "text": "Before you arrive, everything is handled. Equipment selected and checked, dive sites planned around conditions, local guides briefed and coordinated."
 },
 {
 "@type": "HowToStep",
 "position": 4,
 "name": "Dive With Your Personal Instructor",
 "text": "Underwater, Dominic is by your side exclusively. He monitors your comfort, manages safety, and adjusts every dive to your pace and interests."
 }
 ]
 }}
 />

 {/* ============================================= */}
 {/* HOW IT WORKS — 4 Steps */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 How It Works
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 From First Contact to First Dive
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 Every engagement begins with a conversation — because no two diving experiences should ever be the same.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-8">
 {[
 {
 step: "01",
 title: "Share Your Vision",
 description:
 "Tell Dominic what you dream of. A week-long liveaboard through Komodo? A weekend of manta dives in Nusa Penida? Getting your family certified together in Tulamben? Certification courses, fun dives, destinations, dates, group size — the more he knows, the better he can design your experience.",
 icon: Compass,
 },
 {
 step: "02",
 title: "Receive Your Bespoke Proposal",
 description:
 "Based on your wishes, Dominic prepares a detailed, fully transparent proposal. Every element is itemised: dive days, certifications, equipment, logistics, travel, and accommodation where applicable. No hidden costs, no standard packages. You review, refine, and approve at your own pace.",
 icon: Star,
 },
 {
 step: "03",
 title: "Dominic Prepares Everything",
 description:
 "Before you arrive, everything is already handled. Equipment is selected and checked. Dive sites are planned around conditions, tides, and what you want to see. Local dive guides — at destinations beyond Bali — are briefed and coordinated. All you need to do is show up.",
 icon: Shield,
 },
 {
 step: "04",
 title: "Dive With Your Personal Instructor",
 description:
 "Underwater, Dominic is by your side — exclusively. He monitors your comfort, manages your safety, adjusts the dive in real time to your pace and interests. At his home base in Tulamben, he leads dives himself. At destinations across Indonesia, he works alongside vetted local guides who handle the site briefing while Dominic stays focused on you.",
 icon: Anchor,
 },
 ].map((item, index) => (
 <FadeInUp delay={index * 0.1}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DFD0] hover:shadow-lg transition-all duration-300 h-full">
 <div className="flex items-start gap-4 mb-4">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C5A55A]/10 border border-[#C5A55A]/20 flex items-center justify-center">
 <item.icon className="w-5 h-5 text-[#C5A55A]" />
 </div>
 <div>
 <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A55A]">
 Step {item.step}
 </span>
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mt-1">
 {item.title}
 </h3>
 </div>
 </div>
 <p className="font-sans text-[#64748B] leading-relaxed">
 {item.description}
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
 The Dive Butler Experience
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Crown,
 title: "Your Personal Instructor",
 description: "One dedicated SSI-certified instructor — Dominic — exclusively for you and your party. No group rotations, no strangers.",
 },
 {
 icon: Globe,
 title: "Any Destination in Indonesia",
 description: "From Tulamben to Komodo, Raja Ampat to the Banda Sea. Dominic travels with you wherever you want to dive.",
 },
 {
 icon: Shield,
 title: "End-to-End Dive Management",
 description: "Equipment, planning, safety, weather, logistics, local guide coordination — everything is handled before you arrive.",
 },
 {
 icon: Users,
 title: "All Skill Levels Welcome",
 description: "Complete beginners, families with children from age 8, lapsed divers needing a refresher, or seasoned pros — every dive is tailored.",
 },
 {
 icon: Star,
 title: "Certifications On Your Trip",
 description: "SSI Open Water, Junior OWD, Specialties, Skills Update — earn your certification as part of the Dive Butler experience.",
 },
 {
 icon: Compass,
 title: "Fully Bespoke Proposals",
 description: "No fixed packages, no standard pricing. Every proposal is crafted individually based on your specific wishes and requirements.",
 },
 ].map((feature, index) => (
 <FadeInUp delay={index * 0.05}>
 <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-[#C5A55A]/20 transition-all duration-300 h-full">
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
 {/* DESTINATIONS — Where the Dive Butler Goes */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Destinations
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 Where Your Dive Butler Goes
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 Serving Bali and the entire Indonesian archipelago.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-8">
 {/* Home Base */}
 <FadeInUp delay={0.1}>
 <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E8DFD0] relative overflow-hidden">
 <div className="absolute top-4 right-4">
 <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C5A55A]/10 border border-[#C5A55A]/20 rounded-full text-xs font-sans uppercase tracking-wider text-[#C5A55A]">
 <MapPin className="w-3 h-3" /> Home Base
 </span>
 </div>
 <h3 className="font-heading text-2xl font-normal text-[#2D4349] mb-2 mt-2">
 Bali — Tulamben Region
 </h3>
 <p className="font-sans text-[#64748B] leading-relaxed mb-4">
 Dominic&apos;s home waters. He leads dives personally at sites he knows intimately — every coral formation, every cleaning station, every critter hiding spot. This is where the Dive Butler experience is most personal.
 </p>
 <div className="flex flex-wrap gap-2">
 {["USAT Liberty Wreck", "Coral Garden", "Drop-Off", "Seraya Secrets", "Amed Wall", "Jemeluk Bay"].map((site) => (
 <span key={site} className="text-xs font-sans px-3 py-1 bg-[#0C7C6B]/10 text-[#0C7C6B] rounded-full">
 {site}
 </span>
 ))}
 </div>
 </div>
 </FadeInUp>

 {/* Expedition Destinations */}
 <FadeInUp delay={0.2}>
 <div className="space-y-4">
 {[
 {
 name: "Komodo National Park",
 highlights: "Manta rays, reef sharks, pristine coral walls, strong drift dives",
 },
 {
 name: "Raja Ampat",
 highlights: "The global epicentre of marine biodiversity — over 75% of all known coral species",
 },
 {
 name: "Banda Sea & Beyond",
 highlights: "Hammerhead sharks, remote seamounts, volcanic underwater landscapes",
 },
 {
 name: "Nusa Penida",
 highlights: "Manta Point, Crystal Bay mola mola, dramatic underwater topography",
 },
 ].map((dest) => (
 <div
 key={dest.name}
 className="bg-[#F5F0E8] rounded-xl p-5 border border-[#E8DFD0] hover:border-[#C5A55A]/30 transition-all duration-300"
 >
 <h4 className="font-heading text-lg font-normal text-[#2D4349] mb-1">
 {dest.name}
 </h4>
 <p className="font-sans text-sm text-[#64748B]">
 {dest.highlights}
 </p>
 </div>
 ))}
 </div>
 </FadeInUp>
 </div>

 <FadeIn delay={0.3}>
 <p className="font-sans text-sm text-[#64748B] text-center mt-8 italic">
 Alor · Wakatobi · Menjangan · Padang Bai · Lembeh Strait · Cenderawasih Bay — and anywhere else you want to go.
 </p>
 </FadeIn>
 </div>
 </section>

 {/* ============================================= */}
 {/* WHO BOOKS — B2B + Individual */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Who Books the Dive Butler
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 For Discerning Divers — and Those Who Book for Them
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Luxury Travellers",
 description: "Couples, honeymooners, and solo travellers who expect private, worry-free experiences — above and below the surface.",
 },
 {
 title: "Families with Children",
 description: "Parents who want safe, patient, one-on-one instruction for their children — from first bubbles at age 8 to full certification at age 10.",
 },
 {
 title: "Hotel & Villa Concierges",
 description: "Offer your guests an exclusive diving experience they cannot find elsewhere. Dominic makes you look exceptional.",
 },
 {
 title: "Personal & Executive Assistants",
 description: "Booking a diving experience for your employer or client? Dominic works with you to deliver a seamless, bespoke proposal.",
 },
 {
 title: "Travel Advisors & Tour Operators",
 description: "Add a premium diving concierge to your Indonesia itineraries. A service tier your competitors cannot match.",
 },
 {
 title: "Corporate & Team Experiences",
 description: "Private group diving for executive retreats, team building, or incentive travel — planned and delivered with precision.",
 },
 ].map((audience, index) => (
 <FadeInUp delay={index * 0.05}>
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
 title: "Open Water Diver",
 description: "Full SSI certification — privately, at your pace, in Bali's most beautiful dive sites.",
 href: "/services/open-water",
 badge: "From Age 15",
 },
 {
 title: "Custom Fun Dives",
 description: "Dream dive designed from scratch — mantas, wrecks, macro, night dives. Tell us your wish.",
 href: "/services/custom-fun-dives",
 badge: "Certified Divers",
 },
 {
 title: "Scuba Explorer",
 description: "First underwater experience for young adventurers aged 8–9. Safe, fun, unforgettable.",
 href: "/services/scuba-explorer",
 badge: "Ages 8–9",
 },
 ].map((service, index) => (
 <FadeInUp delay={index * 0.1}>
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
 Start Your Adventure
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 Ready for Your Personal{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Dive Butler?
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Tell Dominic about your diving dreams. Whether you are a first-time diver, a family, or a concierge booking for a VIP guest — every conversation starts here.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20the%20Dive%20Butler%20service."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <Phone className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Dive%20Butler%20Inquiry"
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