import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { Compass, Shield, Globe, ChevronDown, Baby, GraduationCap, Award, Layers, Sparkles, Crown, Anchor, Navigation, Users, Star, Mail, MessageCircle, MapPin, Instagram, RefreshCw } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";

export const metadata = { title: "Preview | Boutique Diving Bali", robots: { index: false, follow: false } };

const localBusinessSchema = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 name: "Boutique Diving Bali",
 description: "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond.",
 url: "https://boutiquedivingbali.com",
 email: "info@boutiquedivingbali.com",
 address: { "@type": "PostalAddress", addressLocality: "Bali", addressCountry: "ID" },
 geo: { "@type": "GeoCoordinates", latitude: -8.4095, longitude: 115.1889 },
 priceRange: "$$$$",
 image: "https://boutiquedivingbali.com/logo.svg",
 areaServed: ["Bali", "Komodo", "Raja Ampat", "Indonesia"],
};

const websiteSchema = {
 "@context": "https://schema.org",
 "@type": "WebSite",
 name: "Boutique Diving Bali",
 url: "https://boutiquedivingbali.com",
 description: "Indonesia's premier personal dive concierge offering fully bespoke, private scuba diving experiences.",
};

const homepageFaq = [
 {
 question: "What makes Boutique Diving Bali different from other dive operators?",
 answer: "We are NOT a dive shop. We are your personal diving concierge. Every experience is fully bespoke — designed from scratch around your wishes, skill level, and comfort. No fixed packages, no group tours. You dive privately with Dominic, your SSI-certified Swiss instructor, who handles every detail for a seamless, worry-free experience."
 },
 {
 question: "Do I need diving experience to book?",
 answer: "Not at all! We welcome complete beginners from age 8. Our Scuba Explorer program (ages 8-12) and Junior Open Water Diver course (ages 10-14) are designed specifically for young adventurers. Adults can start with the SSI Open Water Diver certification — fully private, at your own pace."
 },
 {
 question: "What is the Dive Butler service?",
 answer: "The Dive Butler is our signature service. Dominic joins you as your personal dive instructor on liveaboard trips or at dive resorts anywhere in Indonesia — Komodo, Raja Ampat, Banda Sea, Wakatobi, and beyond. He handles all diving logistics, equipment, safety planning, and coordination so you experience only wonder."
 },
 {
 question: "Which destinations in Indonesia can you arrange diving?",
 answer: "We cover all of Indonesia's premier diving destinations: Bali (Nusa Penida, Tulamben, Amed, Padang Bai, Menjangan), Komodo National Park, Raja Ampat, Banda Sea, Wakatobi, Alor, and more. Bali is our home base, but the Dive Butler service extends across the entire archipelago."
 },
 {
 question: "Can you accommodate families with children?",
 answer: "Absolutely! Family diving is one of our specialties. Children from age 8 can join our Scuba Explorer program in a safe, controlled environment. Ages 10-14 can pursue their Junior Open Water Diver certification. We design custom family programs that accommodate all ages and skill levels, ensuring everyone creates unforgettable underwater memories together."
 },
 {
 question: "How do I book a custom diving experience?",
 answer: "Simply get in touch via our contact form, email (info@boutiquedivingbali.com), or WhatsApp. Tell us about your dream diving experience — your dates, skill level, interests, who you are traveling with — and Dominic will personally design a bespoke program just for you. No generic packages, ever."
 },
 {
 question: "What safety measures do you have in place?",
 answer: "Safety is paramount. Dominic brings Swiss military precision and a decade of corporate security management experience to every dive. All equipment is premium and personally inspected before every dive. We maintain comprehensive insurance, follow strict SSI safety protocols, carry emergency oxygen, and never compromise on diver-to-instructor ratios. Your safety and comfort come first, always."
 },
];

export default function Home() {
 return (
 <main className="overflow-x-hidden">
 <JsonLd data={localBusinessSchema} />
 <JsonLd data={websiteSchema} />

 {/* SECTION 1: HEADER */}
 <Header />

 

{/* SECTION 2: HERO */}
 <section className="ocean-hero-bg min-h-screen flex items-center justify-center relative">
 {/* Light rays */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden">
 <div className="absolute w-[200px] h-[600px] bg-white/[0.03] rotate-[15deg] -top-20 left-[20%]" style={{ animation: "light-ray-drift 20s ease-in-out infinite" }} />
 <div className="absolute w-[150px] h-[500px] bg-white/[0.02] -rotate-[10deg] -top-10 right-[25%]" style={{ animation: "light-ray-drift-2 25s ease-in-out infinite" }} />
 <div className="absolute w-[100px] h-[400px] bg-white/[0.02] rotate-[20deg] top-10 left-[60%]" style={{ animation: "light-ray-drift 22s ease-in-out infinite 3s" }} />
 </div>

 {/* Floating particles */}
 <div className="absolute inset-0 pointer-events-none">
 {[...Array(8)].map((_, i) => (
 <div
 key={i}
 className="absolute rounded-full bg-white/10"
 style={{
 width: `${2 + Math.random() * 3}px`,
 height: `${2 + Math.random() * 3}px`,
 left: `${10 + Math.random() * 80}%`,
 top: `${20 + Math.random() * 60}%`,
 animation: `particle-float ${8 + Math.random() * 7}s ease-in-out infinite ${Math.random() * 5}s`,
 }}
 />
 ))}
 </div>

 <div className="text-center px-6 relative z-10 max-w-4xl mx-auto">
 <FadeIn delay={0.2}>
 <span className="inline-block border border-white/20 text-white/60 text-xs uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-6 font-sans">
 Indonesia&apos;s Premier Personal Dive Concierge
 </span>
 </FadeIn>

 <FadeIn delay={0.4}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
 Your Personal Diving
 <br />
 <span className="gradient-text-gold">Concierge in Paradise</span>
 </h1>
 </FadeIn>

 <FadeIn delay={0.6}>
 <p className="text-white/70 max-w-2xl mx-auto mb-10 font-sans text-base md:text-lg leading-relaxed">
 Are you looking for a premium, fully personalized and worry-free diving experience
 to create wonderful memories? You just found it! Welcome to Boutique Diving Bali,
 curated by Dominic Frei — your SSI-certified Swiss scuba instructor.
 </p>
 </FadeIn>

 <FadeIn delay={0.8}>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
 <Link href="/contact" className="glow-button-gold px-8 py-3.5 rounded-full font-sans font-medium text-sm tracking-wide inline-block text-center">
 Plan Your Dive
 </Link>
 <Link href="#services" className="ghost-button px-8 py-3.5 rounded-full font-sans text-sm tracking-wide inline-block text-center">
 Explore Services
 </Link>
 </div>
 </FadeIn>

 <FadeIn delay={1.0}>
 <div className="text-center">
 <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-sans mb-3">
 Trusted by guests from
 </p>
 <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-white/60 text-xs uppercase tracking-widest font-sans">
 <span>Switzerland</span>
 <span className="text-white/30">•</span>
 <span>Australia</span>
 <span className="text-white/30">•</span>
 <span>Germany</span>
 <span className="text-white/30">•</span>
 <span>UK</span>
 <span className="text-white/30">•</span>
 <span>USA</span>
 <span className="text-white/30">•</span>
 <span>Singapore</span>
 </div>
 </div>
 </FadeIn>
 </div>

 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
 <ChevronDown className="w-6 h-6 text-white/40" />
 </div>
 </section>

 

{/* SECTION 3: TRANSITION */}
 <div className="ocean-hero-fade" />

 

{/* SECTION 4: WHY BOUTIQUE DIVING BALI */}
 <section className="py-20 md:py-28 px-6 bg-[var(--brand-cream)]">
 <div className="max-w-6xl mx-auto">
 <FadeInUp>
 <div className="max-w-3xl mx-auto text-center mb-16">
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 The Difference
 </p>
 <h2 className="font-heading text-3xl md:text-5xl text-[var(--brand-text)] mb-6 leading-tight">
 Not a Dive Shop.
 <br />
 Your Personal Diving Concierge.
 </h2>
 <p className="text-[var(--brand-text-secondary)] leading-relaxed font-sans mb-4">
 Nestled in paradise Bali, I craft high-end diving experiences, individually
 tailored just for you and your loved ones. Whether you&apos;re a family introducing
 your little ones (from 8 years old) to the underwater wonders alongside parents,
 a couple seeking romantic submersion, honeymooners chasing blissful serenity, or
 an individual explorer craving solitude beneath the waves — every dive will be
 a unique masterpiece.
 </p>
 <p className="text-[var(--brand-text-secondary)] leading-relaxed font-sans">
 My mission is to curate the ultimate premium diving experience — an exclusive
 sanctuary for exciting underwater adventures, individually tailored just for you
 and your loved ones. Join me in discovering the elite essence of the deep, where
 every moment is crafted with sophistication and soul.
 </p>
 </div>
 </FadeInUp>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[
 { icon: Compass, title: "Fully Bespoke", text: "Every dive custom-tailored to your wishes, skill level, and comfort. No fixed packages. No generic group tours." },
 { icon: Shield, title: "Private & Exclusive", text: "No groups, no crowds. Just you, your loved ones, and your personal Swiss diving professional." },
 { icon: Globe, title: "Indonesia-Wide", text: "From Bali to Komodo to Raja Ampat — your Dive Butler travels with you across Indonesia's most spectacular underwater worlds." },
 ].map((card, i) => (
 <FadeInUp key={card.title} delay={0.1 + i * 0.15}>
 <div className="bg-[var(--brand-sand)] border border-[var(--brand-tan)] rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
 <card.icon className="w-8 h-8 text-[var(--brand-teal)] mx-auto mb-4" strokeWidth={1.5} />
 <h3 className="font-heading text-xl text-[var(--brand-text)] mb-3">{card.title}</h3>
 <p className="text-[var(--brand-text-secondary)] text-sm leading-relaxed font-sans">{card.text}</p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 

{/* SECTION 9: ABOUT DOMINIC */}
 <section className="py-20 md:py-28 px-6 bg-[var(--brand-sand)]">
 <div className="max-w-6xl mx-auto">
 <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
 <div className="lg:col-span-2">
 <FadeInUp>
 <div className="aspect-[3/4] rounded-2xl border border-[var(--brand-tan)] bg-gradient-to-b from-[var(--brand-cream)] to-[var(--brand-sand)] flex items-center justify-center">
 <div className="text-center px-6">
 <Users className="w-12 h-12 text-[var(--brand-teal)]/30 mx-auto mb-4" strokeWidth={1} />
 <p className="text-[var(--brand-text-muted)] text-sm font-sans">Professional photo</p>
 <p className="text-[var(--brand-text-muted)] text-xs font-sans mt-1">Coming soon</p>
 </div>
 </div>
 </FadeInUp>
 </div>

 <div className="lg:col-span-3">
 <FadeInUp delay={0.15}>
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 THE FOUNDER
 </p>
 <h2 className="font-heading text-3xl md:text-4xl text-[var(--brand-text)] mb-6 leading-tight">
 Dominic Frei — Your Personal Diving Expert
 </h2>
 <div className="space-y-4 text-[var(--brand-text-secondary)] leading-relaxed font-sans">
 <p>
 Hi, I&apos;m Dominic, a 48-year-young visionary from Switzerland, calling Bali
 home and our family&apos;s happy place for 5 years already. With a heritage rooted
 in precision and excellence, my journey has taken me from the disciplined heights
 of military service as an instructor for an elite Swiss Army unit, through a decade
 as a Risk &amp; Security Management Executive at corporate level, to the magical
 depths of the ocean.
 </p>
 <p>
 My passion for the underwater world started in Panama&apos;s Bocas del Toro
 archipelago in 2002 and ignited a lifelong quest to explore the underwater wonders
 of our beautiful blue planet. In 2023, I elevated this passion by becoming a
 certified SSI Diving Instructor, allowing me to share this magical experience
 with adventurers like you. Nothing is more relaxing, de-stressing and magical to
 me than floating weightless below the ocean and watching the beauty of our
 blue planet...
 </p>
 </div>

 <div className="flex flex-wrap gap-3 mt-8">
 {[
 "SSI Certified Instructor",
 "Swiss Precision & Safety",
 "In Bali Since 2021",
 "Multilingual (EN / DE)",
 ].map((badge) => (
 <span
 key={badge}
 className="text-xs font-sans font-medium text-[var(--brand-teal)] bg-[var(--brand-teal)]/10 px-4 py-2 rounded-full border border-[var(--brand-teal)]/20"
 >
 {badge}
 </span>
 ))}
 </div>

 <Link
 href="/about"
 className="inline-flex items-center gap-1 text-[var(--brand-teal)] font-sans font-medium text-sm mt-6 hover:gap-2 transition-all"
 >
 Read Full Story →
 </Link>
 </FadeInUp>
 </div>
 </div>
 </div>
 </section>

 

{/* SECTION 6: WHY BOOK ME */}
 <section className="py-20 md:py-28 px-6 bg-[var(--brand-sand)]">
 <div className="max-w-3xl mx-auto">
 <FadeInUp>
 <div className="text-center mb-12">
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 THE STORY
 </p>
 <h2 className="font-heading text-3xl md:text-5xl text-[var(--brand-text)] mb-6 leading-tight">
 Why Boutique Diving Bali Exists
 </h2>
 </div>
 </FadeInUp>

 <FadeInUp delay={0.15}>
 <div className="space-y-5 text-[var(--brand-text-secondary)] leading-relaxed font-sans">
 <p>
 You may think that curating a premium, high-end diving experience should be the
 goal of every diving operator, right? Unfortunately, that is not always the case.
 </p>
 <p>
 Before launching Boutique Diving Bali, I spent 3 months during high season in
 Koh Samui, working 6 days a week as a Diving Instructor &amp; Boatmaster for a
 large local operator. I wanted to see and experience for myself the Good, the Bad,
 and the Ugly sides of this business — and do active market research at the same time.
 It was an intense, challenging, and deeply insightful time.
 </p>
 <p>
 The recreational diving industry is booming globally, but sadly this comes with
 negative side effects that can ruin your experience completely — especially at
 mass-diving hotspots. From burned-out, unmotivated instructors with a dangerous
 lack of safety awareness, to worn-out and poorly maintained equipment that
 compromises your safety, to manufactured 5-star reviews offered in exchange for
 discounts or free beers.
 </p>
 <p className="text-[var(--brand-text)] font-medium">
 That is exactly why Boutique Diving Bali exists. Every experience is designed with
 Swiss precision, an unwavering commitment to your safety, and a genuine passion for
 sharing the magic of the underwater world. No shortcuts. No compromises. Just
 exceptional diving, tailored to you.
 </p>
 </div>
 </FadeInUp>

 <FadeInUp delay={0.3}>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
 {[
 { problem: "Burned-out instructors", solution: "Your dedicated, passionate dive professional" },
 { problem: "Poorly maintained equipment", solution: "Premium, personally inspected gear" },
 { problem: "Generic group packages", solution: "Every experience designed from scratch for you" },
 ].map((item) => (
 <div key={item.problem} className="bg-white border border-[var(--brand-tan)] rounded-2xl p-6 text-center">
 <p className="text-[var(--brand-coral)] text-sm font-sans font-medium mb-2 line-through decoration-[var(--brand-coral)]/40">
 {item.problem}
 </p>
 <div className="w-6 h-px bg-[var(--brand-gold)] mx-auto my-3" />
 <p className="text-[var(--brand-teal)] text-sm font-sans font-medium">
 {item.solution}
 </p>
 </div>
 ))}
 </div>
 </FadeInUp>
 </div>
 </section>

 

{/* SECTION 5: SERVICES OVERVIEW */}
 <section id="services" className="py-20 md:py-28 px-6 bg-[var(--brand-cream)] border-t border-[var(--brand-tan)]">
 <div className="max-w-6xl mx-auto">
 <FadeInUp>
 <div className="text-center mb-16">
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 Our Services
 </p>
 <h2 className="font-heading text-3xl md:text-5xl text-[var(--brand-text)] mb-4 leading-tight">
 Diving Experiences Crafted for You
 </h2>
 <p className="text-[var(--brand-text-secondary)] max-w-2xl mx-auto font-sans leading-relaxed">
 Whether you&apos;re a complete beginner from age 8, or a seasoned diver seeking your
 next adventure — every experience is designed around your wishes, skill level, and comfort.
 </p>
 </div>
 </FadeInUp>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 icon: Baby,
 title: "Scuba Explorer",
 age: "Ages 8–12",
 text: "Your child's magical first breath underwater. Safe, fun, and unforgettable introduction to the ocean in a controlled environment.",
 href: "/services/scuba-explorer",
 },
 {
 icon: GraduationCap,
 title: "Junior Open Water Diver",
 age: "Ages 10–14",
 text: "Full SSI Junior Open Water certification at your child's pace. Private instruction ensures confidence, safety, and lasting memories.",
 href: "/services/junior-owd",
 },
 {
 icon: Award,
 title: "Open Water Diver",
 age: "From Age 15",
 text: "Your SSI Open Water certification — fully private, at your pace, in Bali's most beautiful dive sites. No rushing, no groups.",
 href: "/services/open-water",
 },
 {
 icon: Layers,
 title: "SSI Specialty Courses",
 age: "Certified Divers",
 text: "Deep Diving, Nitrox, Night Diving, Wreck Diving, and more. Advance your skills with private instruction customized to your level.",
 href: "/services/specialty",
 },
 {
 icon: RefreshCw,
 title: "Scuba Skills Update",
 age: "Certified Divers",
 text: "Haven't dived in a while? Refresh your skills and confidence with a private SSI Scuba Skills Update. Review and practice at your own pace before your next dive adventure.",
 href: "/services/scuba-skills-update",
 },
 {
 icon: Sparkles,
 title: "Custom Fun Dives",
 age: "Certified Divers",
 text: "Your dream dive, designed from scratch. Manta rays in Nusa Penida, the USAT Liberty wreck, macro diving in Amed — tell me your wish.",
 href: "/services/custom-fun-dives",
 },
 {
 icon: Crown,
 title: "Dive Butler Service",
 age: "All Levels",
 text: "Your personal dive instructor on liveaboards and resorts across Indonesia. I handle every detail for a seamless, worry-free experience.",
 href: "/services/dive-butler",
 },
 ].map((service, i) => (
 <FadeInUp key={service.title} delay={0.1 + i * 0.1} className={i === 6 ? "lg:col-start-2" : ""}>
 <Link href={service.href} className="block h-full">
 <div className="bg-white border border-[var(--brand-tan)] rounded-2xl p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
 <service.icon className="w-7 h-7 text-[var(--brand-teal)] mb-4" strokeWidth={1.5} />
 <div className="flex items-center gap-3 mb-3">
 <h3 className="font-heading text-xl text-[var(--brand-text)]">{service.title}</h3>
 <span className="text-[10px] uppercase tracking-wider text-[var(--brand-gold)] font-sans font-medium bg-[var(--brand-gold)]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
 {service.age}
 </span>
 </div>
 <p className="text-[var(--brand-text-secondary)] text-sm leading-relaxed font-sans flex-grow">{service.text}</p>
 <span className="text-[var(--brand-teal)] text-sm font-sans font-medium mt-4 inline-flex items-center gap-1">
 Learn More →
 </span>
 </div>
 </Link>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 

{/* SECTION 7: THE DIVE BUTLER */}
 <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-[#0B2A3A] to-[#0A1628] relative overflow-hidden">
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-teal)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

 <div className="max-w-6xl mx-auto relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
 <div className="lg:col-span-3">
 <FadeInUp>
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 Signature Service
 </p>
 <div className="flex items-start gap-4 mb-6">
 <div className="hidden md:block w-0.5 h-16 bg-[var(--brand-gold)] mt-2 flex-shrink-0" />
 <h2 className="font-heading text-3xl md:text-5xl text-white leading-tight">
 Your Personal
 <br />
 Dive Butler
 </h2>
 </div>
 <p className="text-white/70 leading-relaxed font-sans mb-8 max-w-xl">
 You want a private Dive Butler? No problem. I will join you as your personal
 dive instructor. Whether on a liveaboard trip through Komodo, a week at a luxury
 dive resort in Raja Ampat, or island-hopping through the Banda Sea — I will handle
 every detail regarding diving for you. Equipment selection, logistics, safety
 planning, weather timing — all invisible. You experience only wonder.
 </p>

 <div className="space-y-4 mb-8">
 {[
 { title: "Accompanies You Anywhere", text: "Bali, Komodo, Raja Ampat, Banda Sea, Wakatobi, and beyond" },
 { title: "End-to-End Management", text: "Equipment, logistics, bookings, safety — everything handled" },
 { title: "Your Pace, Your Style", text: "Whether your first dive or your 500th, tailored to you" },
 ].map((feature) => (
 <div key={feature.title} className="flex items-start gap-3">
 <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-gold)] mt-2 flex-shrink-0" />
 <div>
 <p className="text-white font-sans font-medium text-sm">{feature.title}</p>
 <p className="text-white/50 font-sans text-sm">{feature.text}</p>
 </div>
 </div>
 ))}
 </div>

 <Link
 href="/services/dive-butler"
 className="glow-button-gold px-8 py-3.5 rounded-full font-sans font-medium text-sm tracking-wide inline-block"
 >
 Discover Dive Butler
 </Link>
 </FadeInUp>
 </div>

 <div className="lg:col-span-2">
 <FadeInUp delay={0.2}>
 <div className="aspect-[3/4] rounded-2xl border border-[var(--brand-gold)]/20 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center">
 <div className="text-center px-6">
 <Anchor className="w-12 h-12 text-[var(--brand-gold)]/30 mx-auto mb-4" strokeWidth={1} />
 <p className="text-white/30 text-sm font-sans">Premium underwater photo</p>
 <p className="text-white/20 text-xs font-sans mt-1">Coming soon</p>
 </div>
 </div>
 </FadeInUp>
 </div>
 </div>
 </div>
 </section>

 

{/* SECTION 8: DESTINATION SHOWCASE */}
 <section id="destinations" className="py-20 md:py-28 px-6 bg-[var(--brand-cream)]">
 <div className="max-w-6xl mx-auto">
 <FadeInUp>
 <div className="text-center mb-16">
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 Dive Destinations
 </p>
 <h2 className="font-heading text-3xl md:text-5xl text-[var(--brand-text)] leading-tight">
 Indonesia&apos;s Most Spectacular
 <br />
 Underwater Worlds
 </h2>
 </div>
 </FadeInUp>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 {
 name: "Bali",
 highlights: "Manta rays, Mola Mola, USAT Liberty wreck, vibrant coral reefs",
 sites: "Nusa Penida • Tulamben • Amed • Padang Bai",
 },
 {
 name: "Komodo National Park",
 highlights: "UNESCO World Heritage, strong currents, sharks, mantas, dragons",
 sites: "Batu Bolong • Manta Alley • Castle Rock",
 },
 {
 name: "Raja Ampat",
 highlights: "World's #1 biodiversity, 1,500+ fish species, pristine reefs",
 sites: "Misool • Wayag • Kri Island • The Passage",
 },
 {
 name: "Banda Sea & Beyond",
 highlights: "Hammerheads, volcanic seamounts, remote expedition diving",
 sites: "Banda Islands • Alor • Wakatobi • Forgotten Islands",
 },
 ].map((dest, i) => (
 <FadeInUp key={dest.name} delay={0.1 + i * 0.1}>
 <div className="bg-white border border-[var(--brand-tan)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
 <div className="aspect-[4/3] bg-gradient-to-b from-[#0B2A3A] to-[#0A1628] flex items-center justify-center">
 <Navigation className="w-8 h-8 text-[var(--brand-teal)]/30" strokeWidth={1} />
 </div>
 <div className="p-6 flex flex-col flex-grow">
 <h3 className="font-heading text-xl text-[var(--brand-text)] mb-2">{dest.name}</h3>
 <p className="text-[var(--brand-text-secondary)] text-sm leading-relaxed font-sans mb-3 flex-grow">{dest.highlights}</p>
 <p className="text-[var(--brand-teal)] text-xs font-sans font-medium">{dest.sites}</p>
 </div>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 

{/* SECTION 10: TESTIMONIALS */}
 <section className="py-20 md:py-28 px-6 bg-[var(--brand-cream)]">
 <div className="max-w-6xl mx-auto">
 <FadeInUp>
 <div className="text-center mb-16">
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 Guest Experiences
 </p>
 <h2 className="font-heading text-3xl md:text-5xl text-[var(--brand-text)] leading-tight">
 What Our Guests Say
 </h2>
 </div>
 </FadeInUp>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {[
 {
 quote: "The most personalized diving experience we've ever had. Dominic made us feel like the only divers in the ocean. Every detail was perfect — from the site selection to the underwater photography. A truly unforgettable honeymoon highlight.",
 name: "Sarah & James",
 origin: "Australia",
 },
 {
 quote: "Dominic made our family feel completely safe and looked after. Our 10-year-old daughter got her Junior Open Water certification and hasn't stopped talking about it since. The patience, professionalism, and genuine warmth made all the difference.",
 name: "The Mueller Family",
 origin: "Germany",
 },
 {
 quote: "Having a personal Dive Butler on our Komodo liveaboard trip was extraordinary. While other guests dealt with group logistics, Dominic handled everything for us. The attention to detail and insider knowledge of the best dive sites was remarkable.",
 name: "Chen Wei",
 origin: "Singapore",
 },
 ].map((testimonial, i) => (
 <FadeInUp key={testimonial.name} delay={0.1 + i * 0.15}>
 <div className="bg-white border border-[var(--brand-tan)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
 <span className="font-heading text-5xl text-[var(--brand-gold)]/20 leading-none mb-2">&ldquo;</span>
 <p className="text-[var(--brand-text-secondary)] text-sm leading-relaxed font-sans italic flex-grow mb-6">
 {testimonial.quote}
 </p>
 <div className="flex items-center gap-2 pt-4 border-t border-[var(--brand-tan)]">
 <div className="flex gap-0.5">
 {[...Array(5)].map((_, j) => (
 <Star key={j} className="w-3.5 h-3.5 fill-[var(--brand-gold)] text-[var(--brand-gold)]" />
 ))}
 </div>
 <span className="text-[var(--brand-text)] text-sm font-sans font-medium ml-2">
 {testimonial.name}
 </span>
 <span className="text-[var(--brand-text-muted)] text-xs font-sans">
 — {testimonial.origin}
 </span>
 </div>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 

{/* SECTION 11: STATS COUNTER BAR */}
 <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-[#0A1628] to-[#0B2A3A]">
 <div className="max-w-5xl mx-auto">
 <FadeInUp>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
 {[
 { number: "500+", label: "Dives Completed" },
 { number: "100%", label: "Private & Bespoke" },
 { number: "15+", label: "Destinations" },
 { number: "5★", label: "Guest Experience" },
 ].map((stat) => (
 <div key={stat.label}>
 <p className="font-heading text-3xl md:text-5xl text-[var(--brand-gold)] mb-2">
 {stat.number}
 </p>
 <p className="text-white/60 text-xs md:text-sm font-sans uppercase tracking-wider">
 {stat.label}
 </p>
 </div>
 ))}
 </div>
 </FadeInUp>
 </div>
 </section>

 

{/* SECTION 12: FAQ */}
 <section id="faq" className="py-20 md:py-28 px-6 bg-[var(--brand-cream)]">
 <div className="max-w-3xl mx-auto">
 <FadeInUp>
 <div className="text-center mb-12">
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 COMMON QUESTIONS
 </p>
 <h2 className="font-heading text-3xl md:text-4xl text-[var(--brand-text)] leading-tight">
 Frequently Asked Questions
 </h2>
 </div>
 </FadeInUp>
 <FadeInUp delay={0.15}>
 <FaqAccordion items={homepageFaq} />
 </FadeInUp>
 </div>
 </section>

 

{/* SECTION 13: CONTACT / INQUIRY CTA */}
 <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-[#0A1628] to-[#0B2A3A] relative overflow-hidden">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-gold)]/5 rounded-full blur-[150px] pointer-events-none" />
 <div className="max-w-3xl mx-auto text-center relative z-10">
 <FadeInUp>
 <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)] mb-4 font-sans font-medium">
 Start Your Adventure
 </p>
 <h2 className="font-heading text-3xl md:text-5xl text-white mb-6 leading-tight">
 Ready to Dive Into Something
 <br />
 <span className="gradient-text-gold">Extraordinary?</span>
 </h2>
 <p className="text-white/60 font-sans mb-10 leading-relaxed max-w-xl mx-auto">
 Tell us about your dream diving experience. We&apos;ll design something
 unforgettable — just for you.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <Link
 href="/contact"
 className="glow-button-gold px-10 py-4 rounded-full font-sans font-medium text-sm tracking-wide inline-block"
 >
 Plan Your Dive
 </Link>
 <a
 href="https://wa.me/62XXXXXXXXXX"
 target="_blank"
 rel="noopener noreferrer"
 className="ghost-button px-10 py-4 rounded-full font-sans text-sm tracking-wide inline-flex items-center justify-center gap-2"
 >
 <MessageCircle className="w-4 h-4" />
 WhatsApp
 </a>
 </div>
 <p className="text-white/40 text-sm font-sans">
 Or reach us directly:{" "}
 <a href="mailto:info@boutiquedivingbali.com" className="text-[var(--brand-gold)] hover:text-[var(--brand-gold-bright)] transition-colors">
 info@boutiquedivingbali.com
 </a>
 </p>
 </FadeInUp>
 </div>
 </section>

 

{/* SECTION 14: FOOTER */}
 <footer className="py-16 px-6 bg-[#060D18] border-t border-white/5">
 <div className="max-w-6xl mx-auto">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
 <div>
 <h3 className="font-heading text-xl text-white mb-2">Boutique Diving Bali</h3>
 <p className="text-white/40 text-sm font-sans leading-relaxed">
 Indonesia&apos;s premier personal dive concierge. Fully bespoke, private diving
 experiences crafted with Swiss precision.
 </p>
 </div>

 <div>
 <h4 className="text-white/60 text-xs uppercase tracking-widest font-sans mb-4">Services</h4>
 <ul className="space-y-2.5">
 {[
 { name: "Scuba Explorer", href: "/services/scuba-explorer" },
 { name: "Junior Open Water", href: "/services/junior-owd" },
 { name: "Open Water Diver", href: "/services/open-water" },
 { name: "Specialty Courses", href: "/services/specialty" },
 { name: "Scuba Skills Update", href: "/services/scuba-skills-update" },
 { name: "Custom Fun Dives", href: "/services/custom-fun-dives" },
 { name: "Dive Butler", href: "/services/dive-butler" },
 ].map((link) => (
 <li key={link.name}>
 <Link href={link.href} className="text-white/50 hover:text-[var(--brand-gold)] text-sm font-sans transition-colors">
 {link.name}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h4 className="text-white/60 text-xs uppercase tracking-widest font-sans mb-4">Explore</h4>
 <ul className="space-y-2.5">
 {[
 { name: "Destinations", href: "#destinations" },
 { name: "About Dominic", href: "/about" },
 { name: "FAQ", href: "#faq" },
 { name: "Contact", href: "/contact" },
 ].map((link) => (
 <li key={link.name}>
 <Link href={link.href} className="text-white/50 hover:text-[var(--brand-gold)] text-sm font-sans transition-colors">
 {link.name}
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div>
 <h4 className="text-white/60 text-xs uppercase tracking-widest font-sans mb-4">Connect</h4>
 <ul className="space-y-2.5">
 <li>
 <a href="https://instagram.com/boutiquedivingbali" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[var(--brand-gold)] text-sm font-sans transition-colors inline-flex items-center gap-2">
 <Instagram className="w-4 h-4" /> Instagram
 </a>
 </li>
 <li>
 <a href="https://wa.me/62XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[var(--brand-gold)] text-sm font-sans transition-colors inline-flex items-center gap-2">
 <MessageCircle className="w-4 h-4" /> WhatsApp
 </a>
 </li>
 <li>
 <a href="mailto:info@boutiquedivingbali.com" className="text-white/50 hover:text-[var(--brand-gold)] text-sm font-sans transition-colors inline-flex items-center gap-2">
 <Mail className="w-4 h-4" /> info@boutiquedivingbali.com
 </a>
 </li>
 </ul>
 </div>
 </div>

 <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
 <p className="text-white/30 text-xs font-sans">
 © {new Date().getFullYear()} Boutique Diving Bali. All rights reserved.
 </p>
 <div className="flex items-center justify-center gap-4 mt-4 text-xs text-[#64748B]">
 <Link href="/privacy" className="hover:text-[#C5A55A] transition-colors">Privacy Policy</Link>
 <span className="text-[#64748B]/30">·</span>
 <Link href="/terms" className="hover:text-[#C5A55A] transition-colors">Terms & Conditions</Link>
 </div>
 <div className="flex items-center gap-1 text-white/30 text-xs font-sans">
 <MapPin className="w-3 h-3" />
 Bali, Indonesia
 </div>
 </div>
 </div>
 </footer>

 </main>
 );
}