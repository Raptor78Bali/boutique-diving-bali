import type { Metadata } from "next";
import { Waves, Shield, Compass, Users, Phone, ChevronRight, ArrowRight, BookOpen, Clock, MapPin, Heart, Calendar, Award, Globe, ShieldCheck, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Private SSI Basic Diver Experience Bali — Try Scuba Diving | Boutique Diving Bali",
 description:
 "Try scuba diving privately in Bali with the SSI Basic Diver program. Perfect first dive experience for couples, families, and individuals. Max depth 12m. From age 10.",
 keywords: [
 "try scuba diving Bali",
 "basic diver SSI Bali",
 "first time diving Bali",
 "discover scuba diving Bali private",
 "try diving experience Bali",
 "beginner diving Bali",
 "private scuba experience Bali",
 "couples diving Bali",
 "family diving experience Bali",
 "luxury diving experience Indonesia",
 "one day scuba diving Bali",
 "SSI Basic Diver program",
 "personal dive concierge Bali",
 ],
 openGraph: {
 title: "Private SSI Basic Diver Experience Bali — Try Scuba Diving | Boutique Diving Bali",
 description:
 "Try scuba diving privately in Bali with the SSI Basic Diver program. Perfect first dive experience for couples, families, and individuals. Max depth 12m. From age 10.",
 url: "https://www.boutiquedivingbali.com/services/basic-diver",
 siteName: "Boutique Diving Bali",
 images: [{ url: "https://www.boutiquedivingbali.com/images/og-image.jpg", width: 1200, height: 630 }],
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Private SSI Basic Diver Experience Bali | Boutique Diving Bali",
 description:
 "Try scuba diving privately in Bali. Perfect first dive for couples, families, and adventurers. SSI certified. From age 10.",
 images: ["https://www.boutiquedivingbali.com/images/og-image.jpg"],
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/services/basic-diver",
 },
};

const faqData = [
 {
 question: "Do I need any diving experience for the Basic Diver program?",
 answer:
 "No experience at all. The SSI Basic Diver program is designed specifically for complete beginners. The only prerequisite is that you are comfortable in the water and able to swim. Dominic guides you through every step — from your first breath underwater to your open water dive.",
 },
 {
 question: "How deep will I go during the Basic Diver experience?",
 answer:
 "The maximum depth for the Basic Diver program is 12 metres (40 feet). This is the perfect depth to experience the underwater world — you will see colourful coral, tropical fish, and marine life while staying within a safe and comfortable range for a first-time diver.",
 },
 {
 question: "Can we do this as a couple or family?",
 answer:
 "Absolutely. The Basic Diver experience is ideal for couples and families. Dominic guides small groups of up to 4 people, so you share the adventure together while still receiving personal attention. Children from age 10 can participate.",
 },
 {
 question: "How long does the Basic Diver program take?",
 answer:
 "The complete program takes approximately 10 to 12 hours spread across a single day. This includes a theory session, a confined water (pool or shallow) session to practise essential skills, and an open water dive at one of Bali's beautiful dive sites. Everything is done at your pace — no rushing.",
 },
 {
 question: "Can I continue to get fully certified after the Basic Diver?",
 answer:
 "Yes — this is one of the best features of the SSI Basic Diver program. Everything you complete counts as credit toward the SSI Scuba Diver or Open Water Diver certification within 6 months. If you discover that diving is your thing, you can pick up right where you left off without repeating anything.",
 },
 {
 question: "What is included in the Basic Diver experience with Boutique Diving Bali?",
 answer:
 "Your experience includes the complete SSI Basic Diver digital learning materials, a private theory session, a confined water session, an open water dive, all diving equipment, and Dominic as your personal diving companion throughout the entire day. No hidden costs, no group strangers.",
 },
 {
 question: "Where does the Basic Diver experience take place?",
 answer:
 "The home base for the Basic Diver experience is Tulamben on Bali's northeast coast. Tulamben offers calm, clear waters and stunning marine life — including the famous USAT Liberty wreck — making it one of the best locations in Bali for a first dive. Alternative sites can be arranged based on your preferences and accommodation.",
 },
];

export default function BasicDiverPage() {
 return (
 <>
 {/* JSON-LD Service Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Service",
 name: "Private SSI Basic Diver Experience",
 description:
 "Try scuba diving privately in Bali with the SSI Basic Diver program. Perfect for first-time divers, couples, families, and anyone wanting to experience the underwater world in a single day.",
 provider: {
 "@type": "LocalBusiness",
 name: "Boutique Diving Bali",
 url: "https://www.boutiquedivingbali.com",
 },
 areaServed: ["Bali", "Tulamben", "Indonesia"],
 serviceType: "Try Scuba Diving Experience",
 url: "https://www.boutiquedivingbali.com/services/basic-diver",
 priceRange: "$$$$",
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
 name: "Basic Diver",
 item: "https://www.boutiquedivingbali.com/services/basic-diver",
 },
 ],
 }}
 />

 <main className="min-h-screen">
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
 <li className="text-[#C5A55A]">Basic Diver</li>
 </ol>
 </nav>

 {/* Eyebrow */}
 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Try Scuba Diving
 </p>
 </FadeIn>

 {/* Icon */}
 <FadeIn delay={0.1}>
 <div className="flex justify-center mb-6">
 <div className="w-16 h-16 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <Waves className="w-8 h-8 text-[#0C7C6B]" />
 </div>
 </div>
 </FadeIn>

 {/* Badge */}
 <FadeIn delay={0.15}>
 <div className="flex justify-center mb-6">
 <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 rounded-full text-sm font-sans text-[#0C7C6B]">
 From Age 10
 </span>
 </div>
 </FadeIn>

 {/* Heading */}
 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 SSI Basic Diver
 </span>
 </h1>
 </FadeInUp>

 {/* Sub-heading */}
 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
 Your First Breath Underwater — Privately, at Your Pace
 </p>
 <p className="font-sans text-base text-[#94A3B8]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
 Discover the underwater world in a single day. The SSI Basic Diver program is perfect for anyone who wants to try scuba diving for the first time — whether you are a couple looking for an unforgettable adventure, a family creating memories together, or an individual curious about what lies beneath the surface. No experience needed. Just curiosity and a sense of wonder.
 </p>
 </FadeInUp>

 {/* CTAs */}
 <FadeInUp delay={0.4}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hi%20Dominic%2C%20I%27m%20interested%20in%20the%20Basic%20Diver%20experience"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300"
 >
 <Phone className="w-4 h-4" />
 Book Your Experience
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Basic%20Diver%20Experience%20Inquiry"
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
 {/* THE CONCEPT — More Than Just a Try Dive */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The Experience
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 More Than Just a Try Dive
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Most &ldquo;try diving&rdquo; experiences around Bali are rushed group affairs — 20 minutes of instruction, a crowded boat, and a guide who barely knows your name. The Basic Diver experience with Boutique Diving Bali is fundamentally different. This is a proper SSI program with real training, real skills, and a real dive at a world-class site — all done privately with Dominic as your personal diving companion.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 The SSI Basic Diver program teaches you the essential knowledge and skills to dive to 12 metres under the direct supervision of an SSI Professional. You will learn to breathe underwater, control your buoyancy, communicate with hand signals, and move through the water with confidence. And the best part — everything you learn counts as credit toward full Open Water Diver certification if you decide to continue.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 Whether you have a single day in Bali and want to make it extraordinary, or you want to test the waters before committing to a full certification course, this is the experience that lets you discover diving the right way — privately, safely, and at your own pace.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* PROGRAM STRUCTURE — Your Day of Discovery */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The Program
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 Your Day of Discovery
 </h2>
 </FadeInUp>

 <div className="space-y-6">
 {[
 {
 phase: "01",
 title: "Digital Theory",
 description:
 "Start with a private theory session using SSI's digital learning materials. You will learn about diving equipment, underwater physics, safety procedures, and hand signals. Dominic explains everything in plain language — no jargon, no exams, just understanding what you need to know to be safe and comfortable underwater.",
 icon: BookOpen,
 },
 {
 phase: "02",
 title: "Confined Water",
 description:
 "Practise essential skills in a pool or shallow, calm water. You will learn to breathe from a regulator, clear your mask, equalise your ears, and control your buoyancy. This is where you build real confidence before your open water dive. Dominic guides you through each skill one-on-one until you feel completely comfortable.",
 icon: ShieldCheck,
 },
 {
 phase: "03",
 title: "Open Water Dive",
 description:
 "The moment you have been waiting for — your first real dive in the ocean. At one of Tulamben's beautiful dive sites, you will descend to a maximum of 12 metres and experience the underwater world firsthand. Coral gardens, tropical fish, and the thrill of weightlessness. Dominic stays right by your side throughout the entire dive.",
 icon: Compass,
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
 What&apos;s Included
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white text-center mb-14">
 Everything You Need
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: BookOpen,
 title: "SSI Digital Materials",
 description: "Complete SSI Basic Diver digital learning kit included — study at your own pace before or during your visit to Bali.",
 },
 {
 icon: Users,
 title: "Private Experience",
 description: "No strangers. Just you and your group (up to 4 people) with Dominic as your personal diving companion all day.",
 },
 {
 icon: Shield,
 title: "Full Equipment",
 description: "All diving equipment provided and personally fitted by Dominic — mask, wetsuit, BCD, regulator, tank, weights.",
 },
 {
 icon: MapPin,
 title: "World-Class Dive Site",
 description: "Your open water dive takes place at one of Tulamben's stunning dive sites — home to colourful reefs and the famous USAT Liberty wreck.",
 },
 {
 icon: Clock,
 title: "Full Day Program",
 description: "Approximately 10 to 12 hours of training and diving — no rushing, no cutting corners. Everything done at your pace.",
 },
 {
 icon: ArrowRight,
 title: "Pathway to Certification",
 description: "Everything counts as credit toward SSI Scuba Diver or Open Water Diver certification within 6 months. Nothing is wasted.",
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
 {/* PERFECT FOR — Who Is This For */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Who Is This For
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 Perfect For
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Heart,
 title: "Couples",
 description: "Share an unforgettable underwater adventure together. The Basic Diver experience is one of the most unique things you can do as a couple in Bali — intimate, exciting, and completely private.",
 },
 {
 icon: Users,
 title: "Families",
 description: "Give your family an experience they will talk about for years. Children from age 10 can participate, and Dominic adapts everything to each family member's comfort level. Up to 4 people per session.",
 },
 {
 icon: Compass,
 title: "First-Time Adventurers",
 description: "Curious about diving but not sure if it is for you? The Basic Diver lets you try properly — with real training and a real dive — before committing to a full certification course.",
 },
 {
 icon: Calendar,
 title: "Short-Stay Visitors",
 description: "Only have one day for diving? The Basic Diver program fits into a single day and gives you a complete, meaningful experience — not a rushed tourist activity.",
 },
 {
 icon: Award,
 title: "Future Divers",
 description: "Thinking about getting certified but want to test the waters first? Everything you complete in the Basic Diver counts toward your Open Water certification. Start here, continue later.",
 },
 {
 icon: Globe,
 title: "Group Adventures",
 description: "Travelling with friends? The Basic Diver experience accommodates up to 4 people, making it perfect for small groups who want to share the adventure.",
 },
 ].map((audience, index) => (
 <FadeInUp key={audience.title} delay={index * 0.05}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0]">
 <audience.icon className="w-6 h-6 text-[#0C7C6B] mb-3" />
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
 <section className="py-20 bg-[#F5F0E8]">
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
 <FaqAccordion items={faqData} />
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* CROSS-LINKS — Other Services */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-12">
 You Might Also Be Interested In
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Open Water Diver",
 description: "Ready for full certification? The SSI Open Water Diver course is the next step — and your Basic Diver credit counts toward it.",
 href: "/services/open-water",
 badge: "From Age 15",
 icon: Award,
 },
 {
 title: "Junior Open Water Diver",
 description: "For younger divers aged 10 to 14. If your child loved the Basic Diver experience, this is their path to certification.",
 href: "/services/junior-owd",
 badge: "Ages 10–14",
 icon: GraduationCap,
 },
 {
 title: "Custom Fun Dives",
 description: "Already certified? Design your dream dive experience — from manta encounters to wreck exploration, anywhere in Indonesia.",
 href: "/services/custom-fun-dives",
 badge: "Certified Divers",
 icon: Sparkles,
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
 Start Your Adventure
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 Ready to{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Try Scuba Diving?
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Tell Dominic about your travel dates, your group, and any questions you have. He will design the perfect Basic Diver experience for you.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hi%20Dominic%2C%20I%27m%20interested%20in%20the%20Basic%20Diver%20experience"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <Phone className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Basic%20Diver%20Experience%20Inquiry"
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
