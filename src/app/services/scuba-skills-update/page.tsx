import type { Metadata } from "next";
import { RefreshCw, Shield, Compass, Users, Phone, ChevronRight, Star, ArrowRight, CheckCircle2, Clock, Waves, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Private SSI Scuba Skills Update in Bali — Refresher Course at Your Pace | Boutique Diving Bali",
 description:
 "Private SSI Scuba Skills Update in Bali. Haven't dived in a while? Rebuild confidence at your pace with your own diving professional.",
 keywords: [
 "scuba refresher course Bali",
 "SSI Scuba Skills Update Bali",
 "dive refresher Bali",
 "scuba skills refresh Bali",
 "private dive refresher Indonesia",
 "get back into diving Bali",
 "scuba review course Bali",
 "diving after long break Bali",
 "SSI refresher Bali private",
 "scuba confidence course Bali",
 "lapsed diver refresher Bali",
 "dive skills review Bali",
 "private scuba refresher Indonesia",
 ],
 openGraph: {
 title: "Private SSI Scuba Skills Update in Bali | Boutique Diving Bali",
 description:
 "Haven't dived in a while? Private SSI refresher course in Bali. Review skills, rebuild confidence, dive again — at your pace.",
 url: "https://www.boutiquedivingbali.com/services/scuba-skills-update",
 siteName: "Boutique Diving Bali",
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Private SSI Scuba Skills Update in Bali | Boutique Diving Bali",
 description:
 "Haven't dived in a while? Private refresher course in Bali. Rebuild confidence and dive again.",
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/services/scuba-skills-update",
 },
};

const faqItems = [
 {
 question: "What is the SSI Scuba Skills Update?",
 answer:
 "The SSI Scuba Skills Update is a refresher program for certified divers who have not been in the water for a while. It allows you to review and practise the essential scuba skills you learned in your original Open Water Diver course — buoyancy control, mask clearing, regulator recovery, air sharing, emergency procedures — under the guidance of an SSI professional. There is no fixed duration: you take as much time as you need to feel genuinely comfortable and confident again.",
 },
 {
 question: "How long has it been since I last dived — do I need this?",
 answer:
 "If it has been six months or more since your last dive, a Skills Update is highly recommended. If it has been a year or more, most dive operators worldwide will require one before allowing you to dive. Even if you feel confident in your knowledge, the physical skills — buoyancy, mask clearing, emergency procedures — can get rusty surprisingly quickly. A private refresher removes all doubt and lets you enjoy your dives without worrying about whether you remember the basics.",
 },
 {
 question: "How long does the Skills Update take?",
 answer:
 "There is no fixed duration — it depends entirely on you. Some divers feel confident after a single pool session of two to three hours. Others prefer to spend a full day reviewing skills in confined water and then doing an open water dive to cement their confidence. Because your refresher is completely private, Dominic adapts the pace and content to what you actually need. There is no group schedule and no time pressure.",
 },
 {
 question: "Do I need to be SSI certified, or can I refresh any certification?",
 answer:
 "The SSI Scuba Skills Update is available to certified divers from any agency — SSI, PADI, NAUI, CMAS, or any other recognised training organisation. Your original certification does not need to be with SSI. The program reviews universal scuba skills that apply regardless of which agency trained you. Upon completion, you receive an SSI Scuba Skills Update digital recognition card.",
 },
 {
 question: "What happens during the refresher?",
 answer:
 "Dominic starts with a brief theory review — covering the fundamentals of dive planning, equipment, and safety procedures. Then you move into the water (pool or calm shallow environment) where you practise core skills: equipment setup and checks, controlled descents, buoyancy control, mask clearing and removal, regulator recovery, air sharing, and emergency ascent procedures. Depending on your confidence level, you may also complete an open water dive to apply your refreshed skills in a real diving environment.",
 },
 {
 question: "Can I do a Skills Update before starting a Specialty course?",
 answer:
 "Absolutely — this is one of the most common reasons divers book a Skills Update. If you are visiting Bali and want to take a Specialty course like Deep Diving or Nitrox but have not dived recently, a quick refresher beforehand ensures you are comfortable with the fundamentals before adding new skills on top. Dominic can schedule both the refresher and the Specialty course as part of a single trip plan.",
 },
 {
 question: "How does pricing work?",
 answer:
 "Every refresher is individually priced based on your specific needs — the time required, whether an open water dive is included, and any additional services. Because all instruction is fully private, pricing is prepared as a bespoke proposal after Dominic understands your situation and how long it has been since you last dived. There are no hidden costs. Reach out via WhatsApp or email to start the conversation.",
 },
];

export default function ScubaSkillsUpdatePage() {
 return (
 <>
 {/* JSON-LD Service Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Service",
 name: "Private SSI Scuba Skills Update",
 provider: {
 "@type": "LocalBusiness",
 name: "Boutique Diving Bali",
 url: "https://www.boutiquedivingbali.com",
 },
 description:
 "Private SSI Scuba Skills Update refresher course in Bali. Review essential diving skills, rebuild confidence, and get back in the water — at your own pace.",
 areaServed: {
 "@type": "Place",
 name: "Bali, Indonesia",
 },
 serviceType: "SSI Scuba Skills Update — Private Dive Refresher Course",
 priceRange: "$$$$",
 url: "https://www.boutiquedivingbali.com/services/scuba-skills-update",
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
 name: "Scuba Skills Update",
 item: "https://www.boutiquedivingbali.com/services/scuba-skills-update",
 },
 ],
 }}
 />

 <main className="min-h-screen">
 {/* ============================================= */}
 {/* HERO SECTION */}
 {/* ============================================= */}
 <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628]">
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
 style={{ left: "28%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(11deg)" }}
 />
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
 style={{ left: "62%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-13deg)" }}
 />
 </div>

 <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
 <nav aria-label="Breadcrumb" className="mb-8">
 <ol className="flex items-center justify-center gap-2 text-sm text-[#94A3B8]">
 <li><Link href="/" className="hover:text-[#C5A55A] transition-colors">Home</Link></li>
 <li><ChevronRight className="w-3 h-3" /></li>
 <li><Link href="/#services" className="hover:text-[#C5A55A] transition-colors">Services</Link></li>
 <li><ChevronRight className="w-3 h-3" /></li>
 <li className="text-[#C5A55A]">Scuba Skills Update</li>
 </ol>
 </nav>

 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Dive Refresher Course
 </p>
 </FadeIn>

 <FadeIn delay={0.1}>
 <div className="flex justify-center mb-6">
 <div className="w-16 h-16 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <RefreshCw className="w-8 h-8 text-[#0C7C6B]" />
 </div>
 </div>
 </FadeIn>

 <FadeIn delay={0.15}>
 <div className="flex justify-center mb-6">
 <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 rounded-full text-sm font-sans text-[#0C7C6B]">
 Certified Divers
 </span>
 </div>
 </FadeIn>

 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Scuba Skills Update
 </span>
 </h1>
 </FadeInUp>

 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
 Haven&apos;t dived in a while? Get back in the water with confidence. A private refresher course at your pace — no pressure, no judgement, just you and Dominic.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.4}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%20need%20a%20Scuba%20Skills%20Update%20before%20my%20Bali%20trip."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300"
 >
 <Phone className="w-4 h-4" />
 Book Your Refresher
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Scuba%20Skills%20Update%20Inquiry"
 className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-sans font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
 >
 Send an Email
 </a>
 </div>
 </FadeInUp>
 </div>
 </section>

 <div className="h-24 bg-gradient-to-b from-[#0A1628] to-[#FDF8F0]" />

 {/* ============================================= */}
 {/* THE CONCEPT — Why a Refresher Matters */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Rust Is Normal
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 You Have Not Forgotten How to Dive. You Just Need to Remember.
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 It is completely normal. You earned your certification years ago — maybe on a holiday, maybe on a gap year, maybe when the kids were younger. Life got busy, and diving took a back seat. Now you are planning a trip to Bali, you see the incredible dive sites, and you think: I want to do this again. But it has been a while, and you are not sure how much you remember.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 The SSI Scuba Skills Update exists for exactly this moment. It is not a test. It is not a new certification. It is simply a chance to review the skills you already learned, practise them in the water with a patient instructor, and rebuild the confidence you need to enjoy diving again. With Boutique Diving Bali, this happens entirely privately — just you and Dominic. No group of strangers watching you clear your mask for the first time in five years.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 Most divers are surprised at how quickly it comes back. The knowledge is still there. The muscle memory returns faster than expected. What a private refresher gives you is the space and time to rediscover it all without any pressure — and the confidence to then enjoy your holiday dives to the fullest.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* WHAT YOU'LL REVIEW — Skills */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 What You Will Review
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 The Core Skills — At Your Pace
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 Dominic focuses on the skills that matter most for safe, confident diving. You practise each one until it feels natural again — not until a clock runs out.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-6">
 {[
 {
 title: "Equipment Setup & Pre-Dive Checks",
 description: "Assembling your gear, checking your buddy's equipment, and performing the safety checks that should happen before every dive. Dominic walks you through the process until it becomes automatic again.",
 icon: CheckCircle2,
 },
 {
 title: "Buoyancy Control & Trim",
 description: "The single most important diving skill. Controlling your position in the water, achieving neutral buoyancy, and moving efficiently. This is often the skill that benefits most from a refresher.",
 icon: Waves,
 },
 {
 title: "Mask Clearing & Regulator Recovery",
 description: "Clearing water from your mask, removing and replacing your mask, recovering a lost regulator, and switching to an alternate air source. These emergency skills need to be instinctive, not theoretical.",
 icon: Shield,
 },
 {
 title: "Emergency Procedures & Air Sharing",
 description: "Controlled emergency ascents, sharing air with a buddy, managing an out-of-air scenario. These are the skills you hope you never need — but must be able to perform without thinking.",
 icon: ThumbsUp,
 },
 ].map((skill, index) => (
 <FadeInUp key={skill.title} delay={index * 0.1}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DFD0] hover:shadow-lg transition-all duration-300 h-full">
 <div className="flex items-start gap-4 mb-4">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <skill.icon className="w-5 h-5 text-[#0C7C6B]" />
 </div>
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mt-2">
 {skill.title}
 </h3>
 </div>
 <p className="font-sans text-[#64748B] leading-relaxed">
 {skill.description}
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
 The Private Refresher Experience
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Users,
 title: "Completely Private",
 description: "Just you and Dominic. No group of strangers watching you remember how to clear your mask. Zero judgement, total patience.",
 },
 {
 icon: Clock,
 title: "No Fixed Duration",
 description: "The refresher takes as long as you need. Two hours or a full day — Dominic adapts to your pace and comfort level.",
 },
 {
 icon: RefreshCw,
 title: "Any Agency Welcome",
 description: "Certified with PADI, NAUI, CMAS, or any other agency? No problem. The Skills Update reviews universal diving skills.",
 },
 {
 icon: Shield,
 title: "Pool + Optional Open Water",
 description: "Start in a pool to rebuild confidence, then optionally complete an open water dive to apply your skills in the real ocean.",
 },
 {
 icon: Star,
 title: "SSI Recognition Card",
 description: "Upon completion you receive the SSI Scuba Skills Update digital recognition card — proof that your skills are current.",
 },
 {
 icon: Compass,
 title: "Pairs with Specialty Courses",
 description: "Planning to take a Specialty course this trip? A quick refresher beforehand ensures you are sharp on the fundamentals first.",
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
 {/* COMMON SCENARIOS */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Sound Familiar?
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 Common Reasons Divers Book a Refresher
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "\"It's been 3+ years\"",
 description: "The most common scenario. You got certified on holiday years ago, life happened, and now you want to dive again. A refresher gets you back quickly.",
 },
 {
 title: "\"I'm nervous about diving again\"",
 description: "Completely normal. A private refresher removes all pressure. You go at your pace, in a pool, with a patient instructor. Confidence returns fast.",
 },
 {
 title: "\"We have a liveaboard booked\"",
 description: "Smart planning. A refresher before a liveaboard trip means you are comfortable from dive one — not spending the first two dives getting your bearings.",
 },
 {
 title: "\"I want to take a Specialty course\"",
 description: "If you have not dived recently but want to do Deep Diving, Nitrox, or Wreck Diving this trip, a quick refresher first ensures you are ready.",
 },
 {
 title: "\"My partner is getting certified\"",
 description: "While your partner takes their Open Water course, you refresh your skills. Then you can dive together — both confident and current.",
 },
 {
 title: "\"The dive operator requires it\"",
 description: "Many dive centres and liveaboards require proof of a recent dive or a refresher course. The SSI Skills Update satisfies this requirement worldwide.",
 },
 ].map((scenario, index) => (
 <FadeInUp key={scenario.title} delay={index * 0.05}>
 <div className="bg-[#F5F0E8] rounded-2xl p-6 border border-[#E8DFD0] h-full">
 <h3 className="font-heading text-lg font-normal text-[#2D4349] mb-2">
 {scenario.title}
 </h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed">
 {scenario.description}
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
 <FaqAccordion items={faqItems} />
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* CROSS-LINKS — Other Services */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
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
 description: "Once refreshed, dive Bali's best sites. Dream dives designed from scratch — mantas, wrecks, macro, night dives.",
 href: "/services/custom-fun-dives",
 badge: "Certified Divers",
 },
 {
 title: "SSI Specialty Courses",
 description: "Take your refreshed skills further. Deep Diving, Nitrox, Night Diving, Wreck Diving, and more — privately.",
 href: "/services/specialty",
 badge: "Certified Divers",
 },
 {
 title: "Dive Butler Service",
 description: "Your personal diving concierge across all of Indonesia. Perfect for liveaboard trips after refreshing your skills.",
 href: "/services/dive-butler",
 badge: "Signature Service",
 },
 ].map((service, index) => (
 <FadeInUp key={service.title} delay={index * 0.1}>
 <Link
 href={service.href}
 className="block bg-[#F5F0E8] rounded-2xl p-6 border border-[#E8DFD0] hover:border-[#C5A55A]/30 hover:shadow-lg transition-all duration-300 group h-full"
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
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A55A]/5 rounded-full blur-[120px] pointer-events-none" />

 <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Get Back in the Water
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 Ready to{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Dive Again?
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Tell Dominic how long it has been since your last dive and what you have planned. He will design a refresher that gets you comfortable and confident — at your pace.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%20need%20a%20Scuba%20Skills%20Update%20before%20my%20Bali%20trip."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <Phone className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Scuba%20Skills%20Update%20Inquiry"
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