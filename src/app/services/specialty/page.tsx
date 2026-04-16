import type { Metadata } from "next";
import { Layers, Shield, Globe, Compass, Phone, ChevronRight, Anchor, Star, ArrowRight, ArrowDown, Waves, Moon, Camera, Gauge } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "SSI Specialty Diving Courses Bali | Boutique Diving Bali",
 description:
 "Private SSI Specialty courses in Bali. Deep Diving, Nitrox, Night, Wreck, Navigation and more — one-on-one at Bali's best sites.",
 keywords: [
 "SSI specialty courses Bali",
 "deep diving course Bali",
 "nitrox course Bali",
 "night diving Bali",
 "wreck diving Bali",
 "private advanced diving Bali",
 "SSI advanced diver Bali",
 "navigation diving course Bali",
 "perfect buoyancy course Bali",
 "underwater photography Bali",
 "private specialty diving Indonesia",
 "SSI Master Diver Bali",
 "advanced scuba courses Bali",
 ],
 openGraph: {
 title: "Private SSI Specialty Courses in Bali | Boutique Diving Bali",
 description:
 "Deep Diving, Nitrox, Night Diving, Wreck Diving, and more — all taught privately at Bali's best dive sites by your personal SSI instructor.",
 url: "https://www.boutiquedivingbali.com/services/specialty",
 siteName: "Boutique Diving Bali",
 images: [{ url: 'https://www.boutiquedivingbali.com/images/og-image.jpg', width: 1200, height: 630 }],
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Private SSI Specialty Courses in Bali | Boutique Diving Bali",
 description:
 "Deep Diving, Nitrox, Night Diving, Wreck Diving, and more — privately, at Bali's best dive sites.",
 images: ['https://www.boutiquedivingbali.com/images/og-image.jpg'],
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/services/specialty",
 },
};

const faqItems = [
 {
 question: "What SSI Specialty courses do you offer?",
 answer:
 "Boutique Diving Bali offers a wide range of SSI Specialty programs including Deep Diving (to 40 metres), Enriched Air Nitrox (32% and 40%), Night Diving and Limited Visibility, Wreck Diving, Navigation, Perfect Buoyancy, Waves Tides and Currents, Photo and Video, Diver Stress and Rescue, and more. If there is a specific specialty you are interested in that is not listed, ask Dominic — he can arrange it or advise on the best path forward.",
 },
 {
 question: "What are the prerequisites for Specialty courses?",
 answer:
 "Most SSI Specialty courses require an Open Water Diver certification (or equivalent from any agency). Some specialties have additional requirements — for example, Deep Diving may require a minimum number of logged dives, and Diver Stress and Rescue requires an Advanced Adventurer rating. Dominic will assess your current certification level and dive experience during the initial conversation and recommend the specialties that match where you are as a diver.",
 },
 {
 question: "How long does a Specialty course take?",
 answer:
 "Most SSI Specialty courses take one to two days to complete, depending on the specialty. Each includes academic sessions (completed online before arrival or reviewed in person) and two to three open water training dives. Because your course is fully private, the schedule is flexible — you can complete a specialty in a single focused day or spread it across multiple days to fit your holiday plans.",
 },
 {
 question: "Can I combine multiple Specialty courses in one trip?",
 answer:
 "Absolutely — and this is one of the smartest ways to advance your diving. Many divers combine two or three specialties during a Bali trip, for example Deep Diving and Nitrox, or Night Diving and Navigation. Dominic will help you plan a combination that makes sense for your experience level and the time you have available. Completing multiple specialties also earns you SSI recognition ratings like Specialty Diver, Advanced Open Water Diver, and ultimately Master Diver.",
 },
 {
 question: "What is the SSI recognition rating pathway?",
 answer:
 "As you complete Specialty programs and log dives, SSI automatically awards recognition ratings. With 2 specialties and 12 logged dives you earn Specialty Diver. With 4 specialties and 24 logged dives you earn Advanced Open Water Diver. With 4 specialties plus Diver Stress and Rescue and 50 logged dives you earn the prestigious Master Diver rating — one of the highest achievements in recreational diving. Dominic can help you plan a pathway that builds toward whichever goal excites you.",
 },
 {
 question: "Where do the Specialty dives take place?",
 answer:
 "Each specialty is matched to the dive sites where it makes the most sense. Deep Diving training happens at Tulamben's famous Drop-Off and the USAT Liberty wreck. Wreck Diving naturally centres on the Liberty wreck — one of the most accessible and beautiful wrecks in the world. Night Diving takes place at sites with rich nocturnal marine life. Navigation training uses sites with clear reference points. Dominic selects the best site for each specialty based on conditions that day.",
 },
 {
 question: "How does pricing work for Specialty courses?",
 answer:
 "Every course is individually priced based on the specific specialty, the number of dives required, and whether you are combining multiple courses. Because all instruction is fully private, pricing is prepared as a bespoke proposal after Dominic understands your goals and experience level. There are no hidden costs and no standard group rates. Reach out via WhatsApp or email to discuss your interests.",
 },
];

export default function SpecialtyPage() {
 return (
 <>
 {/* JSON-LD Service Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Service",
 name: "Private SSI Specialty Diving Courses",
 provider: { "@id": "https://www.boutiquedivingbali.com/#organization" },
 description:
 "Private SSI Specialty courses in Bali: Deep Diving, Nitrox, Night Diving, Wreck Diving, Navigation, and more. One-on-one instruction at Bali's best dive sites.",
 areaServed: {
 "@type": "Place",
 name: "Bali, Indonesia",
 },
 serviceType: "Private SSI Specialty Diving Courses",
 priceRange: "$$$$",
 url: "https://www.boutiquedivingbali.com/services/specialty",
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
 name: "SSI Specialty Courses",
 item: "https://www.boutiquedivingbali.com/services/specialty",
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
 style={{ left: "22%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(14deg)" }}
 />
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
 style={{ left: "68%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-9deg)" }}
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
 <li className="text-[#C5A55A]">SSI Specialty Courses</li>
 </ol>
 </nav>

 {/* Eyebrow */}
 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Advanced Training
 </p>
 </FadeIn>

 {/* Icon */}
 <FadeIn delay={0.1}>
 <div className="flex justify-center mb-6">
 <div className="w-16 h-16 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <Layers className="w-8 h-8 text-[#0C7C6B]" />
 </div>
 </div>
 </FadeIn>

 {/* Badge */}
 <FadeIn delay={0.15}>
 <div className="flex justify-center mb-6">
 <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 rounded-full text-sm font-sans text-[#0C7C6B]">
 Certified Divers
 </span>
 </div>
 </FadeIn>

 {/* Heading */}
 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 SSI{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Specialty Courses
 </span>
 </h1>
 </FadeInUp>

 {/* Sub-heading */}
 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
 Go deeper, dive longer, explore further. Private SSI Specialty courses taught one-on-one at Bali&apos;s most extraordinary dive sites.
 </p>
 </FadeInUp>

 {/* CTAs */}
 <FadeInUp delay={0.4}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20SSI%20Specialty%20courses%20in%20Bali."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300"
 >
 <Phone className="w-4 h-4" />
 Discuss Your Specialties
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=SSI%20Specialty%20Course%20Inquiry"
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
 {/* THE CONCEPT — Why Specialties Matter */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Beyond Open Water
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 Your Open Water Certification Was the Beginning. This Is Where It Gets Exciting.
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Your Open Water Diver certification gave you the fundamentals — how to breathe, how to descend, how to stay safe. But it also opened a door. <a href="https://www.divessi.com" target="_blank" rel="noopener noreferrer" className="text-[#0C7C6B] hover:text-[#0A6B5C] transition-colors">SSI</a> Specialty courses take you through that door and into the areas of diving that genuinely excite you: descending to 40 metres along dramatic walls, diving at night when the ocean transforms, exploring World War II shipwrecks, or extending your bottom time with enriched air nitrox.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 At most dive shops, Specialty courses are taught in groups with mixed experience levels and generic site selection. With Boutique Diving Bali, every Specialty is taught privately — one-on-one with Dominic at the dive sites in Bali that are specifically suited to that specialty. Deep Diving at Tulamben&apos;s Drop-Off. Wreck Diving on the USAT Liberty. Night Diving where the nocturnal marine life is richest. The right training at the right site makes all the difference.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 Each Specialty you complete also builds toward SSI&apos;s recognition ratings — from Specialty Diver through Advanced Open Water Diver to the prestigious Master Diver. Dominic can help you plan a pathway that matches your ambitions, whether you want to complete one specialty this trip or build toward Master Diver over multiple visits.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* AVAILABLE SPECIALTIES — Course Cards */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Choose Your Specialty
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 Popular SSI Specialties Available in Bali
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 Each specialty is taught privately — one-on-one with Dominic at the dive sites best suited for that training.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-6">
 {[
 {
 title: "Deep Diving",
 icon: ArrowDown,
 depth: "18–40 metres",
 dives: "3 open water dives",
 description:
 "Explore deeper wrecks, coral walls, and reef systems. Learn to plan and execute dives between 18 and 40 metres safely — including gas management, narcosis awareness, and deep dive procedures.",
 bestSite: "Tulamben Drop-Off, USAT Liberty deep sections",
 },
 {
 title: "Enriched Air Nitrox",
 icon: Gauge,
 depth: "Up to 40 metres",
 dives: "Theory + optional dives",
 description:
 "Extend your bottom time, shorten surface intervals, and reduce fatigue. Learn to plan and dive with enriched air mixtures up to 40% oxygen. The most practical specialty for multi-dive days.",
 bestSite: "Any dive site — Nitrox improves every dive",
 },
 {
 title: "Night Diving & Limited Visibility",
 icon: Moon,
 depth: "Up to 30 metres",
 dives: "2 open water dives",
 description:
 "Discover the ocean after dark — when entirely different marine life emerges. Learn torch techniques, navigation in darkness, communication signals, and how to manage limited visibility conditions.",
 bestSite: "Tulamben — rich nocturnal marine life",
 },
 {
 title: "Wreck Diving",
 icon: Anchor,
 depth: "Up to 30 metres",
 dives: "2 open water dives",
 description:
 "Explore iconic shipwrecks safely. Learn penetration assessment, buoyancy control near structures, line techniques, and how to navigate around and above wreck environments.",
 bestSite: "USAT Liberty wreck, Tulamben",
 },
 {
 title: "Navigation",
 icon: Compass,
 depth: "Up to 30 metres",
 dives: "2 open water dives",
 description:
 "Never feel lost underwater again. Master compass navigation, natural reference techniques, distance estimation, and multi-leg navigation patterns that make every dive more confident.",
 bestSite: "Sites with clear reference points around Tulamben and Amed",
 },
 {
 title: "Photo & Video",
 icon: Camera,
 depth: "Up to 30 metres",
 dives: "2 open water dives",
 description:
 "Capture your dive highlights and marine life encounters. Learn underwater camera techniques, composition, lighting basics, and how to take images that do justice to what you see below the surface.",
 bestSite: "Seraya Secrets (macro), Coral Garden, Jemeluk Bay",
 },
 ].map((specialty, index) => (
 <FadeInUp key={specialty.title} delay={index * 0.08}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0] hover:shadow-lg transition-all duration-300 h-full">
 <div className="flex items-start gap-4 mb-3">
 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <specialty.icon className="w-5 h-5 text-[#0C7C6B]" />
 </div>
 <div>
 <h3 className="font-heading text-xl font-normal text-[#2D4349]">
 {specialty.title}
 </h3>
 <div className="flex flex-wrap gap-2 mt-1">
 <span className="text-xs font-sans px-2 py-0.5 bg-[#0C7C6B]/10 text-[#0C7C6B] rounded-full">
 {specialty.depth}
 </span>
 <span className="text-xs font-sans px-2 py-0.5 bg-[#C5A55A]/10 text-[#C5A55A] rounded-full">
 {specialty.dives}
 </span>
 </div>
 </div>
 </div>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-3">
 {specialty.description}
 </p>
 <p className="font-sans text-xs text-[#0C7C6B]">
 Best site: {specialty.bestSite}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>

 <FadeIn delay={0.3}>
 <p className="font-sans text-sm text-[#64748B] text-center mt-8 italic">
 Also available: Perfect Buoyancy · Waves, Tides & Currents · Diver Stress & Rescue · Equipment Techniques · Science of Diving — ask Dominic about any specialty that interests you.
 </p>
 </FadeIn>
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
 The Private Specialty Experience
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Layers,
 title: "One-on-One Instruction",
 description: "Every Specialty is taught privately. No group dynamics, no waiting. Dominic's full attention is on developing your skills.",
 },
 {
 icon: Globe,
 title: "Best-Site Matching",
 description: "Each Specialty is taught at the Bali dive site specifically suited for that training — not a generic location chosen for group convenience.",
 },
 {
 icon: Star,
 title: "Combine Multiple Specialties",
 description: "Complete two or three Specialties in one trip. Dominic plans the sequence and site selection for maximum learning and enjoyment.",
 },
 {
 icon: Shield,
 title: "Theory Before Arrival",
 description: "Complete the digital academics online before you arrive. Your time in Bali is spent in the water, not in a classroom.",
 },
 {
 icon: Compass,
 title: "Flexible Scheduling",
 description: "One day or two. Morning or afternoon. Fit your Specialty training around your holiday — not the other way around.",
 },
 {
 icon: Anchor,
 title: "Path to Master Diver",
 description: "Every Specialty counts toward SSI recognition ratings. Dominic helps you plan a pathway that builds toward your diving goals.",
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
 {/* RECOGNITION PATHWAY */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The SSI Pathway
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 Build Toward Master Diver
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 Every Specialty you complete and every dive you log counts toward SSI&apos;s recognition ratings. Here is the pathway.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-3 gap-6">
 {[
 {
 title: "Specialty Diver",
 requirement: "2 Specialties + 12 logged dives",
 description: "Your first recognition beyond Open Water. Demonstrates commitment to developing your diving skills across multiple areas.",
 },
 {
 title: "Advanced Open Water Diver",
 requirement: "4 Specialties + 24 logged dives",
 description: "A significant milestone. Shows you have broad experience across multiple diving environments and techniques.",
 },
 {
 title: "Master Diver",
 requirement: "4 Specialties + Stress & Rescue + 50 logged dives",
 description: "One of the most elite ratings in recreational diving. Combines deep knowledge, diverse skills, and substantial real-world experience.",
 },
 ].map((rating, index) => (
 <FadeInUp key={rating.title} delay={index * 0.1}>
 <div className="bg-[#F5F0E8] rounded-2xl p-6 border border-[#E8DFD0] h-full">
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mb-2">
 {rating.title}
 </h3>
 <span className="inline-block px-3 py-1 text-xs font-sans bg-[#C5A55A]/10 text-[#C5A55A] rounded-full mb-3">
 {rating.requirement}
 </span>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed">
 {rating.description}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* WHO IS IT FOR */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Who Are Specialties For?
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 Whether You Are Newly Certified or Chasing Master Diver
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Recently Certified Divers",
 description: "Just finished your Open Water? Nitrox and Deep Diving are the logical next steps — they open up more sites and longer bottom times immediately.",
 },
 {
 title: "Holiday Divers",
 description: "Add a Specialty to your Bali diving holiday. One or two extra days of focused training transforms a fun trip into a skills-building experience.",
 },
 {
 title: "Experienced Divers",
 description: "Fill gaps in your training. Navigation, Stress & Rescue, and Night Diving are specialties that make every future dive safer and more enjoyable.",
 },
 {
 title: "Wreck Enthusiasts",
 description: "Bali's USAT Liberty is one of the world's most accessible wrecks. There is no better place to earn your Wreck Diving specialty.",
 },
 {
 title: "Underwater Photographers",
 description: "Bali's macro sites and coral gardens are a photographer's paradise. The Photo & Video specialty teaches you to capture what you see.",
 },
 {
 title: "Master Diver Candidates",
 description: "Planning your path to SSI Master Diver? Dominic can structure multiple specialties across one or more trips to get you there.",
 },
 ].map((audience, index) => (
 <FadeInUp key={audience.title} delay={index * 0.05}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0] h-full">
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
 title: "Custom Fun Dives",
 description: "Already certified and just want to dive? Dream dives designed from scratch — mantas, wrecks, macro, night dives.",
 href: "/services/custom-fun-dives",
 badge: "Certified Divers",
 },
 {
 title: "Scuba Skills Update",
 description: "Haven't dived in a while? Refresh your skills privately before starting a Specialty course.",
 href: "/services/scuba-skills-update",
 badge: "Certified Divers",
 },
 {
 title: "Dive Butler Service",
 description: "Your personal diving concierge across all of Indonesia. Combine Specialties with liveaboard expeditions.",
 href: "/services/dive-butler",
 badge: "Signature Service",
 },
 ].map((service, index) => (
 <FadeInUp key={service.title} delay={index * 0.1}>
 <Link
 href={service.href}
 className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0] hover:border-[#C5A55A]/30 hover:shadow-lg transition-all duration-300 group h-full"
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
 Take the Next Step
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 Ready to Go{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Deeper?
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Tell Dominic which specialties interest you, your current certification level, and when you are visiting Bali. He will build a personalised training plan and proposal.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20SSI%20Specialty%20courses%20in%20Bali."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <Phone className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=SSI%20Specialty%20Course%20Inquiry"
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