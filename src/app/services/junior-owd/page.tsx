import type { Metadata } from "next";
import { GraduationCap, Shield, Globe, Compass, Users, Phone, ChevronRight, Anchor, Star, Heart, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Private SSI Junior Open Water Diver Course in Bali — Ages 10–14 | Boutique Diving Bali",
 description:
 "Private SSI Junior Open Water Diver course for children aged 10–14 in Bali. One-on-one, patient, safe. No group classes.",
 keywords: [
 "Junior Open Water Diver Bali",
 "kids scuba certification Bali",
 "SSI Junior OWD Bali",
 "private dive course kids Bali",
 "children scuba diving Bali",
 "learn to dive kids Bali",
 "junior scuba certification Indonesia",
 "private dive instructor children Bali",
 "SSI Junior Open Water Diver",
 "kids diving Tulamben",
 "family diving Bali",
 "scuba diving children Bali",
 "junior diver course Bali private",
 ],
 openGraph: {
 title: "Private SSI Junior Open Water Diver Course — Ages 10–14 | Boutique Diving Bali",
 description:
 "Private SSI Junior Open Water Diver certification for children aged 10–14 in Bali. Patient, safe, one-on-one instruction at your child's pace.",
 url: "https://www.boutiquedivingbali.com/services/junior-owd",
 siteName: "Boutique Diving Bali",
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Private SSI Junior Open Water Diver Course — Ages 10–14 | Boutique Diving Bali",
 description:
 "Private SSI Junior Open Water Diver certification for children aged 10–14 in Bali. Patient, safe, fun.",
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/services/junior-owd",
 },
};

const faqItems = [
 {
 question: "What is the SSI Junior Open Water Diver certification?",
 answer:
 "The SSI Junior Open Water Diver is the same internationally recognised certification as the adult Open Water Diver, specifically designed for young divers aged 10 to 14. Your child learns the same theory, practises the same skills, and completes the same four open water dives — but with age-appropriate depth limits and a requirement to always dive with a certified adult or dive professional. The certification is recognised worldwide and valid for life. When your child turns 15, it automatically upgrades to the full Open Water Diver certification.",
 },
 {
 question: "What are the depth limits for Junior Open Water Divers?",
 answer:
 "SSI sets age-based depth limits for safety. Junior divers aged 10 and 11 are certified to a maximum depth of 12 metres (40 feet). Junior divers aged 12 to 14 are certified to a maximum depth of 18 metres (60 feet) — the same as an adult Open Water Diver. All Junior Open Water Divers must dive with a certified adult (parent, guardian, or dive professional) at all times. These limits exist to match the physical and cognitive development of young divers.",
 },
 {
 question: "How long does the Junior OWD course take?",
 answer:
 "The in-water portion typically takes three to four days: one day for confined water skills and two to three days for open water dives. your child learns privately with Dominic, the pace is completely flexible. If your child needs more time on a skill, they take it without any pressure. If they are confident and progressing well, the course moves at their speed. The academic theory is completed online before arriving in Bali, so all the time in Bali is spent in the water.",
 },
 {
 question: "Does my child need prior diving experience?",
 answer:
 "No prior diving experience is needed. Your child should be comfortable in water and able to swim. The course is designed from scratch for young beginners. If your child has already completed the SSI Scuba Explorer program (ages 8–12), that experience provides an excellent foundation — but it is not a requirement. Dominic assesses every child individually at the start and builds their confidence step by step.",
 },
 {
 question: "Can parents dive alongside their children?",
 answer:
 "Absolutely — and Dominic encourages it. If you are already a certified diver, you can join your child on their open water dives. If you are not yet certified, Dominic can run your Open Water Diver course alongside your child's Junior OWD — so the whole family learns together, privately, at the same time. Many families find this is one of the most memorable experiences of their Bali trip: learning to dive together.",
 },
 {
 question: "Is it safe for children to scuba dive?",
 answer:
 "Yes, when taught properly by a qualified instructor. SSI has developed specific training standards, depth limits, and supervision requirements for young divers based on decades of research and experience. Dominic's approach adds an extra layer of safety: his Swiss Army instructor background means discipline and safety protocols are second nature, while his experience as a father of 14-year-old twin teenage daughters means he genuinely understands how children learn — with patience, encouragement, and a focus on making it fun. Every child is different, and Dominic adapts to each one.",
 },
 {
 question: "How does pricing work for the Junior OWD course?",
 answer:
 "Every course is individually priced based on your family's specific needs — how many children, whether parents are joining, the dive sites selected, and any additional services. Because Boutique Diving Bali offers exclusively private instruction, pricing is prepared as a bespoke proposal after Dominic understands your situation. There are no hidden costs and no standard packages. Reach out via WhatsApp or email and Dominic will prepare a personalised proposal for your family.",
 },
];

export default function JuniorOwdPage() {
 return (
 <>
 {/* JSON-LD Service Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Service",
 name: "Private SSI Junior Open Water Diver Course",
 provider: {
 "@type": "LocalBusiness",
 name: "Boutique Diving Bali",
 url: "https://www.boutiquedivingbali.com",
 },
 description:
 "Private SSI Junior Open Water Diver certification for children aged 10–14 in Bali. One-on-one instruction — patient, safe, and fun.",
 areaServed: {
 "@type": "Place",
 name: "Bali, Indonesia",
 },
 serviceType: "Private SSI Junior Open Water Diver Certification Course",
 priceRange: "$$$$",
 audience: {
 "@type": "PeopleAudience",
 suggestedMinAge: 10,
 suggestedMaxAge: 14,
 },
 url: "https://www.boutiquedivingbali.com/services/junior-owd",
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
 name: "Junior Open Water Diver",
 item: "https://www.boutiquedivingbali.com/services/junior-owd",
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
 style={{ left: "30%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(10deg)" }}
 />
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
 style={{ left: "60%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-12deg)" }}
 />
 </div>

 <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
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
 <li className="text-[#C5A55A]">Junior Open Water Diver</li>
 </ol>
 </nav>

 {/* Eyebrow */}
 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 SSI Certification for Young Divers
 </p>
 </FadeIn>

 {/* Icon */}
 <FadeIn delay={0.1}>
 <div className="flex justify-center mb-6">
 <div className="w-16 h-16 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <GraduationCap className="w-8 h-8 text-[#0C7C6B]" />
 </div>
 </div>
 </FadeIn>

 {/* Badge */}
 <FadeIn delay={0.15}>
 <div className="flex justify-center mb-6">
 <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 rounded-full text-sm font-sans text-[#0C7C6B]">
 Ages 10–14
 </span>
 </div>
 </FadeIn>

 {/* Heading */}
 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 Junior{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Open Water Diver
 </span>
 </h1>
 </FadeInUp>

 {/* Sub-heading */}
 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
 Your child&apos;s first real scuba certification — taught privately, at their pace, with patience and safety at the heart of every dive.
 </p>
 </FadeInUp>

 {/* CTAs */}
 <FadeInUp delay={0.4}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20the%20Junior%20Open%20Water%20Diver%20course%20for%20my%20child."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300"
 >
 <Phone className="w-4 h-4" />
 Book Your Child&apos;s Course
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Junior%20Open%20Water%20Diver%20Inquiry"
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
 {/* THE CONCEPT — Why Private Matters for Kids */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Why Private Instruction Matters
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 Learning to Dive Should Feel Like an Adventure, Not a Classroom
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Children learn differently from adults. They need more encouragement, more patience, more flexibility — and above all, they need to feel safe and excited, not pressured. In a typical group course, your child is one of several students competing for the instructor&apos;s attention. They may feel self-conscious, rushed, or anxious about keeping up with older or more confident kids. That is not how a child should experience the underwater world for the first time.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 With Boutique Diving Bali, your child dives privately with Dominic — one-on-one or with their siblings only. Every skill is taught at their pace. Every question gets a patient, individual answer. If they need to repeat a skill ten times, they repeat it ten times — without anyone watching or waiting. If they are having a brilliant day and want to push further, Dominic adjusts the plan instantly.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 Dominic is not only an SSI-certified instructor — he is also a father of 14-year-old twin teenage daughters and a former Swiss Army instructor. He knows how to teach young people with the right blend of discipline, encouragement, and genuine fun. Your child will not just earn a certification. They will discover a lifelong passion for the ocean.
 </p>
 </div>
 </FadeInUp>
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
 The Same World-Class Certification — At Your Child&apos;s Pace
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 The Junior OWD follows the same three-phase structure as the adult course. The difference? Every moment is adapted to how your child learns best.
 </p>
 </FadeInUp>

 <div className="space-y-6">
 {[
 {
 phase: "01",
 title: "Digital Theory — Learn Before You Arrive",
 description:
 "Your child completes the SSI academic materials online before arriving in Bali. The digital platform is designed to be engaging and easy to follow — covering diving physics, equipment, safety, and marine life in a way that builds excitement. They can study at their own speed, pause and revisit sections, and arrive in Bali already understanding the fundamentals. Dominic reviews the key concepts in person to make sure everything is clear before entering the water.",
 icon: BookOpen,
 detail: "Completed online before arrival · Child-friendly digital platform · Reviewed in person by Dominic",
 },
 {
 phase: "02",
 title: "Confined Water Training — Build Confidence Step by Step",
 description:
 "The first day in the water takes place in a pool or calm, shallow environment. Dominic guides your child through every essential skill privately: breathing underwater, clearing a mask, controlling buoyancy, sharing air, and signalling. Because there are no other students, your child never feels rushed or judged. Every skill is practised until they are genuinely confident — not until a timer runs out. This phase is where trust is built, and it makes all the difference in the open water dives that follow.",
 icon: Shield,
 detail: "One full day · Private pool or calm shallow water · All equipment provided and fitted",
 },
 {
 phase: "03",
 title: "Open Water Dives — The Real Adventure Begins",
 description:
 "Over two to three days, your child completes four open water dives at carefully selected dive sites. This is the magical part — applying their skills in the real ocean, seeing fish and coral for the first time underwater, and realising they can actually do this. Dominic chooses sites based on conditions, your child's comfort level, and what will make the experience most memorable. Depth limits are followed strictly: 12 metres for ages 10–11, 18 metres for ages 12–14. By the final dive, your child will hold their SSI Junior Open Water Diver certification — recognised worldwide.",
 icon: Globe,
 detail: "Four dives over 2–3 days · Age-appropriate depth limits · Certification valid for life",
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
 What Your Child Gets
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white text-center mb-14">
 A Certification Course Built Around Your Child
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Users,
 title: "Completely Private Instruction",
 description: "One instructor, one child (or siblings together). No strangers, no peer pressure. Your child is the only student.",
 },
 {
 icon: Heart,
 title: "Patience as a Teaching Philosophy",
 description: "Dominic's background as a father and Swiss Army instructor means genuine patience — not just tolerance. Every child learns differently.",
 },
 {
 icon: Shield,
 title: "Safety Beyond the Standard",
 description: "Age-appropriate depth limits, strict supervision, premium equipment fitted to your child. Safety is never a compromise.",
 },
 {
 icon: GraduationCap,
 title: "Globally Recognised Certification",
 description: "The SSI Junior Open Water Diver card is recognised worldwide and valid for life. Upgrades to full OWD at age 15.",
 },
 {
 icon: Star,
 title: "Equipment Included & Fitted",
 description: "All diving equipment is included, personally selected and fitted to your child's size. Comfort and safety start with the right gear.",
 },
 {
 icon: Compass,
 title: "Family Can Dive Together",
 description: "Parents can join the dives or take their own OWD course alongside. Dominic coordinates the entire family experience privately.",
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
 {/* DEPTH LIMITS & SAFETY */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Safety First
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 Age-Appropriate Depth Limits
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 SSI sets clear depth limits and supervision rules for Junior Open Water Divers. Dominic follows these strictly — and adds his own safety standards on top.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-8">
 <FadeInUp delay={0.1}>
 <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E8DFD0]">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-12 h-12 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <span className="font-sans text-xs font-medium text-[#0C7C6B] whitespace-nowrap">10–11</span>
 </div>
 <h3 className="font-heading text-xl font-normal text-[#2D4349]">
 Ages 10–11
 </h3>
 </div>
 <div className="space-y-3">
 <p className="font-sans text-[#64748B] leading-relaxed">
 Maximum depth of <span className="text-[#2D4349] font-medium">12 metres (40 feet)</span>. Must dive with a certified adult or dive professional at all times. All dives are planned well within these limits, at sites where conditions are calm and visibility is excellent.
 </p>
 </div>
 </div>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E8DFD0]">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-12 h-12 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <span className="font-sans text-xs font-medium text-[#0C7C6B] whitespace-nowrap">12–14</span>
 </div>
 <h3 className="font-heading text-xl font-normal text-[#2D4349]">
 Ages 12–14
 </h3>
 </div>
 <div className="space-y-3">
 <p className="font-sans text-[#64748B] leading-relaxed">
 Maximum depth of <span className="text-[#2D4349] font-medium">18 metres (60 feet)</span> — the same as an adult Open Water Diver. Must dive with a certified adult at all times. This opens up a wider range of dive sites including wrecks and deeper reef systems.
 </p>
 </div>
 </div>
 </FadeInUp>
 </div>

 <FadeIn delay={0.3}>
 <div className="mt-8 bg-[#F5F0E8] rounded-xl p-6 border border-[#E8DFD0] text-center">
 <p className="font-sans text-sm text-[#2D4349]">
 <span className="text-[#C5A55A] font-medium">Automatic upgrade:</span>{" "}
 When your child turns 15, their Junior Open Water Diver certification upgrades to the full SSI Open Water Diver — no additional course required. They can also complete an SSI Scuba Skills Update at that point to refresh their skills.
 </p>
 </div>
 </FadeIn>
 </div>
 </section>

 {/* ============================================= */}
 {/* FAMILY DIVING — Learn Together */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Dive as a Family
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 The Whole Family Can Learn Together
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Children Aged 10–14",
 description: "The Junior Open Water Diver course — full SSI certification with age-appropriate depth limits and private instruction at their own pace.",
 },
 {
 title: "Parents & Adults (15+)",
 description: "Take the Open Water Diver course alongside your child. Dominic runs both courses privately and simultaneously — so the whole family learns together.",
 },
 {
 title: "Younger Siblings (8–12)",
 description: "Children aged 8 to 12 who are not yet ready for open water certification can join the SSI Scuba Explorer program — a pool-based introduction to scuba diving.",
 },
 {
 title: "Already Certified Parents",
 description: "If you are already a certified diver, you can join your child on their open water dives. Share the experience and watch them discover the ocean firsthand.",
 },
 {
 title: "Mixed Skill Levels",
 description: "One child taking Junior OWD, another doing Scuba Explorer, parents doing their own OWD? Dominic plans the entire family programme privately.",
 },
 {
 title: "A Memory That Lasts Forever",
 description: "Families who learn to dive together share something extraordinary. Your children will remember this trip — and this feeling — for the rest of their lives.",
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
 Everything Parents Need to Know
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
 title: "Scuba Explorer",
 description: "For younger children aged 8–12. A fun, pool-based introduction to scuba diving — no open water required.",
 href: "/services/scuba-explorer",
 badge: "Ages 8–12",
 },
 {
 title: "Open Water Diver",
 description: "The full SSI certification for divers aged 15 and above. Perfect for parents who want to get certified alongside their children.",
 href: "/services/open-water",
 badge: "From Age 15",
 },
 {
 title: "Dive Butler Service",
 description: "Your personal diving concierge across all of Indonesia. Perfect for families who want a guide for their entire trip.",
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
 Start Their Adventure
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 Give Your Child the{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Gift of Diving
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Tell Dominic about your family — ages, experience levels, travel dates, and any questions you have. He will prepare a personalised proposal for your child&apos;s private course.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20the%20Junior%20Open%20Water%20Diver%20course%20for%20my%20child."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <Phone className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Junior%20Open%20Water%20Diver%20Inquiry"
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