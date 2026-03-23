import type { Metadata } from "next";
import { Baby, Shield, Heart, Compass, Users, Phone, ChevronRight, Star, Waves, ArrowRight, Sparkles, Fish } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "SSI Scuba Explorer for Kids in Bali — Ages 8–12, Private & Fun | Boutique Diving Bali",
 description:
 "SSI Scuba Explorer for kids aged 8–12 in Bali. Private, pool-based first underwater adventure. Safe, fun, unforgettable.",
 keywords: [
 "SSI Scuba Explorer Bali",
 "kids diving Bali",
 "children scuba diving Bali",
 "scuba diving kids 8 years old Bali",
 "kids underwater experience Bali",
 "scuba for children Bali",
 "SSI Explorers program",
 "private kids diving Bali",
 "learn to dive kids Bali",
 "family diving Bali children",
 "scuba diving for kids Indonesia",
 "kids dive experience Bali",
 "young divers Bali",
 ],
 openGraph: {
 title: "SSI Scuba Explorer for Kids — Ages 8–12 | Boutique Diving Bali",
 description:
 "Your child's first underwater adventure. Private SSI Scuba Explorer program for kids aged 8–12 in Bali. Safe, fun, one-on-one instruction.",
 url: "https://www.boutiquedivingbali.com/services/scuba-explorer",
 siteName: "Boutique Diving Bali",
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "SSI Scuba Explorer for Kids — Ages 8–12 | Boutique Diving Bali",
 description:
 "Your child's first underwater adventure. Private SSI Scuba Explorer program in Bali. Safe, fun, unforgettable.",
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/services/scuba-explorer",
 },
};

const faqItems = [
 {
 question: "What is the SSI Scuba Explorer program?",
 answer:
 "The SSI Scuba Explorer is an introductory diving experience designed specifically for children aged 8 to 12. It takes place in a pool or calm, shallow confined water — not in the open ocean. Your child learns to breathe underwater using real scuba equipment, practises basic diving skills like buoyancy and mask clearing, and gets a genuine taste of what it feels like to be a diver. It is a safe, supervised, and fun experience that builds confidence and excitement for the underwater world. The program also includes an introduction to ocean conservation through the SSI Blue Oceans Explorer module.",
 },
 {
 question: "Is this a certification course?",
 answer:
 "The Scuba Explorer is an experience program, not a full open water certification. Your child earns the SSI Scuba Explorer recognition — a real achievement they can be proud of — but it does not certify them to dive independently in open water. Think of it as the foundation: it introduces the skills, builds confidence, and prepares your child for the SSI Junior Open Water Diver course (available from age 10) when they are ready to take the next step.",
 },
 {
 question: "How old does my child need to be?",
 answer:
 "The SSI Scuba Explorer program is available for children aged 8 to 12. Children younger than 8 can participate in the SSI Blue Oceans Explorer and Snorkel Explorer modules (available from age 6), which introduce ocean conservation and basic snorkelling skills. From age 10, children who are ready for more can move into the SSI Junior Open Water Diver course, which leads to a full open water certification.",
 },
 {
 question: "Where does the program take place?",
 answer:
 "The Scuba Explorer program takes place entirely in a pool or calm, shallow confined water — never in the open ocean. This controlled environment allows your child to focus on learning and having fun without any of the variables of open water diving. Dominic selects the best pool facility in the Tulamben or Amed area, ensuring a clean, safe, and comfortable setting for your child's first underwater experience.",
 },
 {
 question: "Does my child need to know how to swim?",
 answer:
 "Your child should be comfortable in the water, but they do not need to be an expert swimmer. If they can put their face in the water, float, and move around in a pool without distress, they are likely ready for the Scuba Explorer program. Dominic assesses every child individually at the start and will not proceed until he is confident your child is comfortable and happy. There is never any pressure.",
 },
 {
 question: "Can I watch or participate?",
 answer:
 "Parents are absolutely welcome to watch from poolside and take photos or videos. You cannot participate in the Scuba Explorer session itself (it is designed specifically for children), but you are encouraged to be there to share the excitement. If you want to dive alongside your child on a future visit, the Junior Open Water Diver course (from age 10) and the Open Water Diver course (from age 15) allow families to dive together in open water.",
 },
 {
 question: "How does pricing work?",
 answer:
 "Every experience is individually priced based on your family's specific needs — the number of children participating, any additional activities, and the location. Because Boutique Diving Bali offers exclusively private instruction, pricing is prepared as a personalised proposal after Dominic understands your situation. There are no hidden costs. Reach out via WhatsApp or email to start the conversation.",
 },
];

export default function ScubaExplorerPage() {
 return (
 <>
 {/* JSON-LD Service Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Service",
 name: "SSI Scuba Explorer Program for Kids",
 provider: {
 "@type": "LocalBusiness",
 name: "Boutique Diving Bali",
 url: "https://www.boutiquedivingbali.com",
 },
 description:
 "Private SSI Scuba Explorer experience for children aged 8–12 in Bali. A safe, fun, pool-based introduction to scuba diving with one-on-one instruction.",
 areaServed: {
 "@type": "Place",
 name: "Bali, Indonesia",
 },
 serviceType: "SSI Scuba Explorer Program — Kids Diving Experience",
 priceRange: "$$$$",
 audience: {
 "@type": "PeopleAudience",
 suggestedMinAge: 8,
 suggestedMaxAge: 12,
 },
 url: "https://www.boutiquedivingbali.com/services/scuba-explorer",
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
 name: "Scuba Explorer",
 item: "https://www.boutiquedivingbali.com/services/scuba-explorer",
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
 style={{ left: "35%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(8deg)" }}
 />
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
 style={{ left: "55%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-14deg)" }}
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
 <li className="text-[#C5A55A]">Scuba Explorer</li>
 </ol>
 </nav>

 {/* Eyebrow */}
 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 First Underwater Adventure
 </p>
 </FadeIn>

 {/* Icon */}
 <FadeIn delay={0.1}>
 <div className="flex justify-center mb-6">
 <div className="w-16 h-16 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <Baby className="w-8 h-8 text-[#0C7C6B]" />
 </div>
 </div>
 </FadeIn>

 {/* Badge */}
 <FadeIn delay={0.15}>
 <div className="flex justify-center mb-6">
 <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 rounded-full text-sm font-sans text-[#0C7C6B]">
 Ages 8–12
 </span>
 </div>
 </FadeIn>

 {/* Heading */}
 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Scuba Explorer
 </span>
 {" "}for Kids
 </h1>
 </FadeInUp>

 {/* Sub-heading */}
 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
 Your child&apos;s first breath underwater — private, safe, and unforgettable. A pool-based introduction to scuba diving for young adventurers aged 8 to 12.
 </p>
 </FadeInUp>

 {/* CTAs */}
 <FadeInUp delay={0.4}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20the%20Scuba%20Explorer%20program%20for%20my%20child."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300"
 >
 <Phone className="w-4 h-4" />
 Book Your Child&apos;s Experience
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Scuba%20Explorer%20Inquiry"
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
 {/* THE CONCEPT — What is Scuba Explorer */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The Experience
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 Their First Breath Underwater — A Moment They Will Never Forget
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 The SSI Scuba Explorer program is designed for one purpose: to give children aged 8 to 12 a safe, exciting, and genuinely magical first encounter with the underwater world. This is not a full certification course — it is something even more special. It is the moment your child discovers they can breathe underwater, float weightlessly, and see the world from a completely new perspective.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 The entire experience takes place in a pool or calm shallow water — never in the open ocean. Your child uses real scuba equipment, learns real diving skills, and earns a real SSI recognition. But above all, they have fun. With Boutique Diving Bali, the experience is completely private: just your child (or children) and Dominic. No group, no distractions, no pressure. Every moment is adapted to your child&apos;s comfort, confidence, and curiosity.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 The program also introduces children to ocean conservation through SSI&apos;s Blue Oceans Explorer module — teaching them why the oceans matter and what they can do to protect marine life. It is the beginning of a journey: from explorer, to junior diver, to a lifelong love of the ocean.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* WHAT THEY'LL LEARN — 4 Skill Areas */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 What They Will Learn
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 Real Skills, Real Equipment, Real Fun
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 The Scuba Explorer program teaches genuine diving skills — in a safe, controlled environment where the only goal is your child&apos;s comfort and enjoyment.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-6">
 {[
 {
 title: "Breathing Underwater",
 description:
 "The most magical moment: your child takes their first breath from a real scuba regulator and realises they can actually breathe underwater. Dominic introduces this gradually — starting at the surface, then in shallow water — until they are completely comfortable and confident.",
 icon: Waves,
 },
 {
 title: "Buoyancy & Movement",
 description:
 "Your child learns how to float weightlessly, control their position in the water, and move around using fins. These are the foundational skills of all scuba diving — and in a pool, they can practise them without any stress or current.",
 icon: Compass,
 },
 {
 title: "Mask & Equipment Skills",
 description:
 "Clearing water from a mask, using a regulator, understanding hand signals, and becoming comfortable with diving equipment. Every skill is taught step by step, at your child's pace, with patient repetition until it feels natural.",
 icon: Shield,
 },
 {
 title: "Ocean Conservation",
 description:
 "Through the SSI Blue Oceans Explorer module, your child learns why the oceans matter, what marine life lives in Indonesian waters, and what they can do to help protect the underwater world. It is the beginning of environmental awareness through experience.",
 icon: Fish,
 },
 ].map((item, index) => (
 <FadeInUp key={item.title} delay={index * 0.1}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DFD0] hover:shadow-lg transition-all duration-300 h-full">
 <div className="flex items-start gap-4 mb-4">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <item.icon className="w-5 h-5 text-[#0C7C6B]" />
 </div>
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mt-2">
 {item.title}
 </h3>
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
 What Your Child Gets
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white text-center mb-14">
 The Private Explorer Experience
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Users,
 title: "Completely Private",
 description: "One instructor, one child (or siblings). No group of strangers. Your child is the only student — all attention is on them.",
 },
 {
 icon: Heart,
 title: "Patience & Encouragement",
 description: "Dominic is a father of two. He teaches children the way they need to be taught: with genuine patience, encouragement, and fun.",
 },
 {
 icon: Shield,
 title: "Pool Environment Only",
 description: "No open ocean, no waves, no currents. Everything happens in a controlled pool or calm shallow water. Maximum safety, minimum stress.",
 },
 {
 icon: Star,
 title: "Real Scuba Equipment",
 description: "Your child uses actual diving gear — regulator, BCD, mask, fins — sized and fitted specifically for them. A real experience, not a simulation.",
 },
 {
 icon: Sparkles,
 title: "SSI Recognition",
 description: "Your child earns the official SSI Scuba Explorer recognition — a genuine achievement they can be proud of and a foundation for future diving.",
 },
 {
 icon: Compass,
 title: "Flexible Scheduling",
 description: "The experience fits your family's holiday schedule. Morning, afternoon — whenever works best. No fixed group timetable to work around.",
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
 {/* THE PATHWAY — Explorer to Junior OWD to OWD */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The Diving Journey
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">
 From First Bubbles to Certified Diver
 </h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">
 The Scuba Explorer is the first step in a clear pathway. Each stage builds on the last — and Dominic guides your child through every one.
 </p>
 </FadeInUp>

 <div className="grid md:grid-cols-3 gap-6">
 {[
 {
 step: "Start Here",
 title: "Scuba Explorer",
 age: "Ages 8–12",
 description: "Pool-based introduction. First breath underwater, basic skills, ocean conservation. Earns SSI Scuba Explorer recognition.",
 highlight: true,
 },
 {
 step: "Next Step",
 title: "Junior Open Water Diver",
 age: "Ages 10–14",
 description: "Full SSI certification with open water dives. Age-appropriate depth limits. Recognised worldwide and valid for life.",
 highlight: false,
 },
 {
 step: "The Goal",
 title: "Open Water Diver",
 age: "From Age 15",
 description: "The full adult certification. 18 metres depth, dive anywhere in the world with another certified diver. Junior OWD upgrades automatically at 15.",
 highlight: false,
 },
 ].map((item, index) => (
 <FadeInUp key={item.title} delay={index * 0.1}>
 <div className={`rounded-2xl p-6 border h-full ${item.highlight ? "bg-[#0C7C6B]/5 border-[#0C7C6B]/20" : "bg-[#F5F0E8] border-[#E8DFD0]"}`}>
 <span className={`font-sans text-xs uppercase tracking-[0.2em] ${item.highlight ? "text-[#0C7C6B]" : "text-[#C5A55A]"}`}>
 {item.step}
 </span>
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mt-2 mb-1">
 {item.title}
 </h3>
 <span className="inline-block px-2 py-0.5 text-xs font-sans uppercase tracking-wider text-[#0C7C6B] bg-[#0C7C6B]/10 rounded-full mb-3">
 {item.age}
 </span>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed">
 {item.description}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* FOR PARENTS — What to Know */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 For Parents
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 What Parents Should Know
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "It Is Completely Safe",
 description: "Pool-based, shallow water, one-on-one supervision by an SSI-certified instructor with Swiss Army safety training. Your child is never out of arm's reach.",
 },
 {
 title: "No Pressure, Ever",
 description: "If your child is nervous, Dominic slows down. If they want to stop, they stop. There is never any pressure to continue. The experience should be 100% positive.",
 },
 {
 title: "A Holiday Highlight",
 description: "Families consistently tell us the Scuba Explorer was the highlight of their Bali trip. It is a unique experience your child simply cannot get at home.",
 },
 {
 title: "Builds Genuine Confidence",
 description: "Learning to breathe underwater, control buoyancy, and manage equipment gives children a sense of achievement that extends well beyond diving.",
 },
 {
 title: "Siblings Can Join Together",
 description: "If you have multiple children aged 8–12, they can share the experience together — privately, with Dominic. Each child still receives individual attention.",
 },
 {
 title: "The Perfect First Step",
 description: "If your child loves it (and most do), they are perfectly prepared for the Junior Open Water Diver course from age 10 — either on the same trip or on a future visit.",
 },
 ].map((item, index) => (
 <FadeInUp key={item.title} delay={index * 0.05}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0] h-full">
 <h3 className="font-heading text-lg font-normal text-[#2D4349] mb-2">
 {item.title}
 </h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed">
 {item.description}
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
 title: "Junior Open Water Diver",
 description: "The next step: full SSI certification for children aged 10–14. Open water dives, worldwide recognition, private instruction.",
 href: "/services/junior-owd",
 badge: "Ages 10–14",
 },
 {
 title: "Open Water Diver",
 description: "The full adult certification from age 15. Perfect for parents who want to get certified alongside their children.",
 href: "/services/open-water",
 badge: "From Age 15",
 },
 {
 title: "Dive Butler Service",
 description: "Your personal diving concierge across all of Indonesia. Ideal for families who want a dedicated guide for their entire trip.",
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
 Let Them Discover the{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Underwater World
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Tell Dominic about your child — their age, their comfort in water, and when you are visiting Bali. He will prepare a personalised plan for their Scuba Explorer experience.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27m%20interested%20in%20the%20Scuba%20Explorer%20program%20for%20my%20child."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <Phone className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Scuba%20Explorer%20Inquiry"
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