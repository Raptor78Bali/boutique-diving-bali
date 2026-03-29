import type { Metadata } from "next";
import { Shield, Globe, Phone, ChevronRight, Star, ArrowRight, Award, Heart, Mountain, Anchor, Users, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "About Dominic Frei — Your Personal Diving Concierge in Bali | Boutique Diving Bali",
 description:
 "Meet Dominic Frei — Swiss-born, Bali-based SSI diving professional and founder of Boutique Diving Bali. His full story.",
 keywords: [
 "Dominic Frei diving concierge",
 "about Boutique Diving Bali",
 "personal dive instructor Bali",
 "Swiss diving professional Bali",
 "SSI instructor Bali",
 "dive concierge Tulamben",
 "private diving Bali founder",
 "Bali dive concierge",
 "diving concierge Indonesia",
 "Swiss Army dive instructor",
 ],
 openGraph: {
 title: "About Dominic Frei | Boutique Diving Bali",
 description:
 "Meet Dominic Frei — Swiss-born, Bali-based SSI-certified diving professional. Former Swiss Army instructor turned personal diving concierge.",
 url: "https://www.boutiquedivingbali.com/about",
 siteName: "Boutique Diving Bali",
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "About Dominic Frei | Boutique Diving Bali",
 description:
 "Meet the person behind Boutique Diving Bali. Swiss precision, Balinese warmth, and a passion for the ocean.",
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/about",
 },
};

export default function AboutPage() {
 return (
 <>
 {/* JSON-LD Person Schema */}
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Person",
 name: "Dominic Frei",
 jobTitle: "Founder & Personal Diving Concierge",
 worksFor: {
 "@type": "LocalBusiness",
 name: "Boutique Diving Bali",
 url: "https://www.boutiquedivingbali.com",
 },
 knowsLanguage: ["English", "German"],
 nationality: "Swiss",
 url: "https://www.boutiquedivingbali.com/about",
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
 name: "About",
 item: "https://www.boutiquedivingbali.com/about",
 },
 ],
 }}
 />

 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "Person",
 "name": "Dominic Frei",
 "jobTitle": "Personal Diving Concierge",
 "description": "SSI-certified Swiss diving professional and founder of Boutique Diving Bali. Offers fully bespoke, private diving experiences across Indonesia.",
 "nationality": {
 "@type": "Country",
 "name": "Switzerland"
 },
 "knowsAbout": ["Scuba Diving", "SSI Certification", "Dive Butler Service", "Indonesia Diving", "Bali Diving", "Komodo Diving", "Raja Ampat Diving"],
 "knowsLanguage": ["English", "German"],
 "sameAs": [
 "https://instagram.com/boutiquedivingbali"
 ],
 "worksFor": {
 "@type": "Organization",
 "name": "Boutique Diving Bali",
 "url": "https://www.boutiquedivingbali.com"
 }
 })
 }}
 />

 <main className="min-h-screen">
 {/* ============================================= */}
 {/* HERO SECTION */}
 {/* ============================================= */}
 <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628]">
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
 style={{ left: "24%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(13deg)" }}
 />
 <div
 className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
 style={{ left: "66%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-11deg)" }}
 />
 </div>

 <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-20">
 <nav aria-label="Breadcrumb" className="mb-8">
 <ol className="flex items-center justify-center gap-2 text-sm text-[#94A3B8]">
 <li><Link href="/" className="hover:text-[#C5A55A] transition-colors">Home</Link></li>
 <li><ChevronRight className="w-3 h-3" /></li>
 <li className="text-[#C5A55A]">About</li>
 </ol>
 </nav>

 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Meet the Founder
 </p>
 </FadeIn>

 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Dominic Frei
 </span>
 </h1>
 </FadeInUp>

 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-6 leading-relaxed">
 Swiss-born. Bali-based. SSI-certified diving professional. Former Swiss Army instructor and corporate risk management executive. Now your personal diving concierge across Indonesia.
 </p>
 </FadeInUp>

 <FadeIn delay={0.4}>
 <div className="flex flex-wrap items-center justify-center gap-3">
 {["SSI Certified Instructor", "Swiss Precision", "In Bali Since 2021", "English & German"].map((badge) => (
 <span key={badge} className="inline-flex items-center px-4 py-1.5 bg-[#C5A55A]/10 border border-[#C5A55A]/20 rounded-full text-xs font-sans uppercase tracking-wider text-[#C5A55A]">
 {badge}
 </span>
 ))}
 </div>
 </FadeIn>
 </div>

 {/* Scroll indicator */}
 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
 <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
 </svg>
 </div>
 </section>

 <div className="h-24 bg-gradient-to-b from-[#0A1628] to-[#FDF8F0]" />

 {/* ============================================= */}
 {/* THE STORY — Dominic's Journey */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The Story
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 From the Swiss Alps to the Coral Triangle
 </h2>

 {/* Founder portrait with picture-in-picture headshot */}
 <div className="relative w-full max-w-md mx-auto mb-12">
 <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
 <Image
 src="/images/founder-underwater.jpg"
 alt="Dominic Frei diving over coral reef in Bali — founder of Boutique Diving Bali"
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 448px"
 quality={85}
 />
 </div>
 {/* Circular headshot overlay */}
 <div className="absolute -bottom-6 -right-4 w-36 h-36 rounded-full border-[3px] border-[#C5A55A] shadow-lg overflow-hidden">
 <Image
 src="/images/founder-headshot.jpg"
 alt="Dominic Frei — founder of Boutique Diving Bali"
 fill
 className="object-cover"
 style={{ objectPosition: "center 30%" }}
 sizes="112px"
 quality={85}
 />
 </div>
 </div>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 It started in Panama. In 2002, in the warm waters of Bocas del Toro, Dominic Frei took his first breath underwater — and everything changed. What was supposed to be a holiday activity became an obsession that would reshape his entire life. From that moment, no matter where his career took him, the ocean was never far from his mind.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Before diving became his passion, Dominic built two very different careers. As an instructor in the Swiss Army, he trained soldiers in one of Switzerland&apos;s elite units — developing the discipline, leadership, and safety-first mindset that now defines how he shares diving. After the military, he spent a decade as a Risk and Security Management Executive at the world&apos;s second-largest valuable-in-transit company — managing operations where attention to detail and the ability to stay calm under pressure were not optional, they were essential.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 But the ocean kept calling. In 2021, Dominic moved his family — his wife and their 14-year-old twin teenage daughters — to Bali. Not for a holiday, but for a life. He immersed himself in the diving industry, spending three months gaining experience as a Diving Instructor and Boatmaster at a large dive operator in Koh Samui, Thailand. He wanted to see the industry from the inside — the good, the bad, and the ugly. What he found confirmed what he already suspected: mass-market diving sacrifices the personal experience for volume. Groups of eight or more divers. Rotating instructors who do not know your name. Fixed schedules that ignore conditions. Safety treated as a checkbox, not a philosophy.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 In 2023, Dominic earned his SSI Instructor certification. Not because he needed another credential — but because he wanted to build something different. Something where every diver is known personally. Where safety is designed into every moment, not stapled on as an afterthought. Where the instructor does not change between dives. Where the experience is not a product, but a relationship.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 That is Boutique Diving Bali. It is not a dive shop. It is not a tour operator. It is one person — Dominic — offering his expertise, his time, and his genuine passion for the ocean to people who want something better than what the dive industry typically provides. Serving Tulamben and all of Indonesia, and built on the belief that the underwater world deserves to be experienced personally, privately, and without compromise.
 </p>
 </div>
 </FadeInUp>

 <FadeInUp delay={0.15}>
 <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E8DFD0] my-8">
 <h3 className="font-heading text-xl font-normal text-[#2D4349] mb-4">The Mission</h3>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-4">
 My mission is to curate the ultimate premium diving experience — an exclusive sanctuary for exciting underwater adventures, individually tailored just for you and your loved ones. Join me in discovering the elite essence of the deep, where every moment is crafted with sophistication and soul.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 Whether you are a family introducing your little ones to the underwater wonders alongside parents, a couple seeking romantic submersion, honeymooners chasing blissful serenity, or an individual explorer craving solitude beneath the waves — every dive will be a unique masterpiece.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* BACKGROUND — Career & Life Cards */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Background
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 A Background Built for This
 </h2>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-6">
 {[
 {
 title: "Swiss Army Instructor",
 icon: Shield,
 description:
 "Instructor for an elite unit in the Swiss Army. This is where Dominic's approach to safety, discipline, and teaching was forged — not in a classroom, but in the field, where precision and calm under pressure are non-negotiable. These instincts now define how he approaches diving.",
 },
 {
 title: "Corporate Risk & Security Executive",
 icon: Star,
 description:
 "A decade managing risk and security operations at the world's second-largest valuable-in-transit company. Dominic spent years in environments where attention to detail, contingency planning, and staying composed in high-stakes situations were daily requirements.",
 },
 {
 title: "Dive Industry Research — Koh Samui",
 icon: Globe,
 description:
 "Before building Boutique Diving Bali, Dominic spent three months working as a Diving Instructor and Boatmaster at a large operator in Koh Samui. He wanted to understand the industry from the inside — and what he found confirmed that mass-market diving consistently sacrifices personal experience for volume.",
 },
 {
 title: "Family Man in Bali",
 icon: Heart,
 description:
 "Dominic lives in Bali with his wife and their 14-year-old twin teenage daughters. He has called Indonesia home since 2021. His perspective as a father directly shapes how he guides young divers — with patience, encouragement, and genuine understanding of how children learn.",
 },
 ].map((item, index) => (
 <FadeInUp key={item.title} delay={index * 0.1}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DFD0] hover:shadow-lg transition-all duration-300 h-full">
 <div className="flex items-start gap-4 mb-4">
 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C5A55A]/10 border border-[#C5A55A]/20 flex items-center justify-center">
 <item.icon className="w-5 h-5 text-[#C5A55A]" />
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
 {/* PHILOSOPHY — What Makes This Different */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 The Philosophy
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">
 Why &ldquo;Boutique&rdquo; Is Not Just a Word
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Bali has over 300 dive operators. Most of them are good. Many are excellent. But almost all of them operate the same model: fixed packages, group sizes of six to twelve, rotating instructors, and a schedule that prioritises efficiency over experience. That model works for the majority of divers — and there is nothing wrong with it.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Boutique Diving Bali exists for the people who want something else. People who value privacy over price. Who want their instructor to know their name, their comfort level, their anxieties, and their aspirations. Who want the dive site chosen for conditions, not convenience. Who want their children taught by someone who genuinely understands how young people learn — not just someone who holds a certification.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 &ldquo;Boutique&rdquo; means small by design. It means Dominic will never hire ten instructors and start running group tours. It means every client is personally looked after by the same person — from the first WhatsApp message to the last dive of the trip. It means the business stays small so the experience stays extraordinary.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* TRUST BADGES — Credentials (Dark Section) */}
 {/* ============================================= */}
 <section className="py-20 bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628] text-white">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Credentials
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white text-center mb-14">
 Why Clients Trust Dominic
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Award,
 title: "SSI Certified Instructor",
 description: "Certified in 2023 with Scuba Schools International — the world's largest diving training agency alongside PADI. Qualified to teach all recreational courses.",
 },
 {
 icon: Shield,
 title: "Swiss Army Background",
 description: "Instructor for an elite Swiss Army unit. Safety, discipline, and the ability to teach under pressure are not learned skills — they are instincts.",
 },
 {
 icon: Mountain,
 title: "Decade in Risk Management",
 description: "Ten years as a corporate executive managing risk and security at a global scale. Attention to detail and contingency planning are second nature.",
 },
 {
 icon: MapPin,
 title: "In Bali Since 2021",
 description: "Not a visiting instructor — Dominic lives in Bali with his family. He knows the island, the waters, the conditions, and the culture intimately.",
 },
 {
 icon: Users,
 title: "Father of Teenage Twins",
 description: "His twin teenage daughters give Dominic a genuine understanding of how young people learn. His patience with children is not taught — it is lived daily.",
 },
 {
 icon: Globe,
 title: "English & German",
 description: "Fluent in both English and German — serving Australia, UK, USA, Singapore, Germany, Austria, and Switzerland as key source markets.",
 },
 ].map((credential, index) => (
 <FadeInUp key={credential.title} delay={index * 0.05}>
 <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-[#C5A55A]/20 transition-all duration-300 h-full">
 <credential.icon className="w-6 h-6 text-[#C5A55A] mb-4" />
 <h3 className="font-heading text-lg font-normal text-white mb-2">
 {credential.title}
 </h3>
 <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
 {credential.description}
 </p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 {/* ============================================= */}
 {/* BEYOND DIVING — The Personal Side */}
 {/* ============================================= */}
 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 Beyond Diving
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-14">
 When Dominic Is Not Underwater
 </h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="max-w-3xl mx-auto">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Diving is Dominic&apos;s greatest passion — but it is not his only one. When he is not guiding divers underwater, you might find him paragliding over Bali&apos;s cliffs in Uluwatu, on the golf course, at the gym, training MMA, fishing off the coast, or perfecting his BBQ technique for family gatherings. Beyond the ocean, Dominic has a keen interest in artificial intelligence and digital assets — following macroeconomic developments and emerging technologies with the same analytical mindset he brings to everything else.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 But ask anyone who knows him: when Dominic talks about diving, something changes. His eyes light up. His stories get longer. His hands start gesturing at dive profiles. It is not a job. It is the thing he was always meant to do — and it took a career in the military, a decade in corporate security, a family move to Bali, and one transformative breath underwater in Panama to finally get there.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 {/* ============================================= */}
 {/* SERVICES OVERVIEW — What Dominic Offers */}
 {/* ============================================= */}
 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">
 What Dominic Offers
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-12">
 Every Service, Personally Delivered
 </h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Dive Butler Service",
 description: "Your personal diving concierge across all of Indonesia — liveaboards, resorts, any destination.",
 href: "/services/dive-butler",
 badge: "Signature Service",
 },
 {
 title: "Open Water Diver",
 description: "Private SSI certification for adults. No groups, your own guide, Bali's best sites.",
 href: "/services/open-water",
 badge: "From Age 15",
 },
 {
 title: "Junior Open Water Diver",
 description: "Private SSI certification for children aged 10–14. Patient, safe, fun.",
 href: "/services/junior-owd",
 badge: "Ages 10–14",
 },
 {
 title: "Scuba Explorer",
 description: "First underwater adventure for kids aged 8–12. Pool-based, private, unforgettable.",
 href: "/services/scuba-explorer",
 badge: "Ages 8–12",
 },
 {
 title: "SSI Specialty Courses",
 description: "Deep Diving, Nitrox, Night, Wreck, Navigation, and more — privately, at Bali's best sites.",
 href: "/services/specialty",
 badge: "Certified Divers",
 },
 {
 title: "Scuba Skills Update",
 description: "Haven't dived in a while? Private refresher course at your pace. Rebuild confidence and dive again.",
 href: "/services/scuba-skills-update",
 badge: "Certified Divers",
 },
 {
 title: "Custom Fun Dives",
 description: "Dream dives designed from scratch. Mantas, wrecks, macro, night dives — your wish, your dive.",
 href: "/services/custom-fun-dives",
 badge: "Certified Divers",
 },
 ].map((service, index) => (
 <FadeInUp key={service.title} delay={index * 0.05} className={index === 6 ? "lg:col-start-2" : ""}>
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
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A55A]/5 rounded-full blur-[120px] pointer-events-none" />

 <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">
 Get in Touch
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 Ready to Meet{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">
 Dominic?
 </span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Whether you are planning your first dive or your hundredth, Dominic would love to hear from you. Tell him about your plans, your questions, or your diving dreams.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a
 href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27d%20like%20to%20know%20more%20about%20Boutique%20Diving%20Bali."
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]"
 >
 <Phone className="w-4 h-4" />
 WhatsApp Dominic
 </a>
 <a
 href="mailto:info@boutiquedivingbali.com?subject=Hello%20from%20your%20website"
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
