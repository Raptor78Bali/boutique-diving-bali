import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { Compass, Shield, Globe, ChevronDown, Baby, GraduationCap, Award, Layers, Sparkles, Crown, Anchor, Navigation, Users, Star, Mail, MessageCircle, MapPin, Instagram, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
 title: "Private Diving Concierge Bali — Luxury Bespoke Experiences | Boutique Diving Bali",
 openGraph: {
 title: "Private Diving Concierge Bali — Luxury Bespoke Experiences | Boutique Diving Bali",
 description: "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond. SSI certified. No groups, no packages — every dive tailored to you.",
 url: "https://www.boutiquedivingbali.com",
 siteName: "Boutique Diving Bali",
 images: [
 {
 url: "https://www.boutiquedivingbali.com/images/og-image.jpg",
 width: 1200,
 height: 630,
 alt: "Boutique Diving Bali — Your Personal Diving Concierge in Paradise",
 },
 ],
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Private Diving Concierge Bali — Luxury Bespoke Experiences",
 description: "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond.",
 images: ["https://www.boutiquedivingbali.com/images/og-image.jpg"],
 },
};

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
 {
 question: "What do private diving experiences cost?",
 answer: "Every experience is custom-designed, so pricing depends on the type of service, duration, number of divers, and destination. As a general guide: private day diving in Bali starts from approximately USD 350 per day, multi-day programs and SSI certification courses are quoted based on your specific goals, and Dive Butler service on liveaboards or at dive resorts includes a daily rate plus travel arrangements. There are no hidden fees — you will always receive a transparent, personalised quote before committing. Simply get in touch and tell us about your dream dive experience, and Dominic will provide a detailed proposal."
 },
 {
 question: "When is the best time to dive in Bali and Indonesia?",
 answer: "Bali offers year-round diving, with each season bringing unique encounters. Nusa Penida's famous Manta rays are present year-round, while the rare Mola Mola (ocean sunfish) appear from July to October. Tulamben's USAT Liberty wreck and Amed's macro diving are excellent in all conditions. For Komodo National Park, the best season is May to October with warm waters and excellent visibility. Raja Ampat peaks from October to April. The Banda Sea's legendary hammerhead season runs from March to May and September to November. As your personal diving concierge, Dominic will help you choose the perfect destination and timing based on what you want to see."
 },
];

export default function Home() {
 return (
 <main className="overflow-x-hidden">
 <JsonLd data={localBusinessSchema} />
 <JsonLd data={websiteSchema} />
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
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@type": "ProfessionalService",
 "name": "Boutique Diving Bali",
 "description": "Indonesia's premier personal dive concierge. Fully bespoke, private scuba diving experiences in Bali, Komodo, Raja Ampat and beyond.",
 "url": "https://www.boutiquedivingbali.com",
 "telephone": "+41791722403",
 "email": "info@boutiquedivingbali.com",
 "image": "https://www.boutiquedivingbali.com/images/founder-underwater.jpg",
 "logo": "https://www.boutiquedivingbali.com/images/logo-icon-only.png",
 "priceRange": "$$$$",
 "currenciesAccepted": "USD, EUR, CHF, IDR",
 "paymentAccepted": "Bank Transfer, Cash",
 "areaServed": [
 { "@type": "Place", "name": "Bali, Indonesia" },
 { "@type": "Place", "name": "Komodo National Park, Indonesia" },
 { "@type": "Place", "name": "Raja Ampat, Indonesia" },
 { "@type": "Place", "name": "Banda Sea, Indonesia" },
 { "@type": "Place", "name": "Wakatobi, Indonesia" }
 ],
 "address": {
 "@type": "PostalAddress",
 "addressLocality": "Tulamben",
 "addressRegion": "Bali",
 "addressCountry": "ID"
 },
 "geo": {
 "@type": "GeoCoordinates",
 "latitude": -8.2775,
 "longitude": 115.5964
 },
 "founder": {
 "@type": "Person",
 "name": "Dominic Frei"
 },
 "contactPoint": {
 "@type": "ContactPoint",
 "telephone": "+41791722403",
 "contactType": "customer service",
 "availableLanguage": ["English", "German"],
 "areaServed": "ID"
 },
 "sameAs": [
 "https://instagram.com/boutiquedivingbali"
 ],
 "hasOfferCatalog": {
 "@type": "OfferCatalog",
 "name": "Diving Experiences",
 "itemListElement": [
 { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dive Butler Service" } },
 { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Fun Dives" } },
 { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SSI Open Water Diver Certification" } },
 { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Junior Open Water Diver" } },
 { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scuba Explorer (Ages 8-12)" } },
 { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SSI Specialty Courses" } },
 { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scuba Skills Update" } }
 ]
 }
 })
 }}
 />

 {/* SECTION 2: HERO */}
 <section className="ocean-hero-bg min-h-screen flex items-center justify-center relative">
 {/* Hero background image carousel */}
 <div className="absolute inset-0 z-0">
 <Image
 src="/images/hero-1-manta.jpg"
 alt="Manta ray gliding over coral reef in Bali — private diving with Boutique Diving Bali"
 fill
 priority
 className="hero-carousel-image"
 sizes="100vw"
 quality={85}
 />
 <Image
 src="/images/hero-2-coral.jpg"
 alt="Vibrant coral reef with tropical fish in Tulamben, Bali"
 fill
 loading="lazy"
 aria-hidden="true"
 className="hero-carousel-image"
 sizes="100vw"
 quality={85}
 />
 <Image
 src="/images/hero-3-bubbles.jpg"
 alt="Scuba diving bubbles rising toward the ocean surface in Bali"
 fill
 loading="lazy"
 aria-hidden="true"
 className="hero-carousel-image"
 sizes="100vw"
 quality={85}
 />
 {/* Dark overlay for text readability */}
 <div className="absolute inset-0 bg-[#0A1628]/75 z-10" />
 </div>

 {/* Light rays */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
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

 <div className="text-center px-6 relative z-30 max-w-4xl mx-auto">
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
 curated by Dominic Frei — your SSI-certified Swiss scuba diving professional.
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
 Boutique Diving Bali is a premium personal diving concierge service founded by Dominic Frei, an SSI-certified Swiss diving professional based in Bali, Indonesia since 2021. The service offers fully bespoke, private scuba diving experiences with no fixed packages and no group tours — covering Bali, Komodo National Park, Raja Ampat, the Banda Sea, Wakatobi, and destinations across the entire Indonesian archipelago.
 </p>
 <p className="text-[var(--brand-text-secondary)] leading-relaxed font-sans mb-4">
 Whether you are a family introducing your children to the underwater world, a couple seeking a romantic adventure, or an experienced diver craving something extraordinary — every dive is a unique creation, never a package.
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
 <div className="relative w-full max-w-md mx-auto lg:mx-0">
 <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
 <Image
 src="/images/founder-underwater.jpg"
 alt="Dominic Frei diving over coral reef in Bali — founder of Boutique Diving Bali"
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 400px"
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
 <p className="text-[var(--brand-text-secondary)] leading-relaxed font-sans mb-4">
 Hi, I'm Dominic — a Swiss diving professional calling Bali home since 2021. My journey to the ocean started in Panama in 2002, and after careers in the Swiss Army and corporate security, I turned my deepest passion into a way of life. In 2023, I became a certified SSI Diving Professional.
 </p>
 <p className="text-[var(--brand-text-secondary)] leading-relaxed font-sans mb-6">
 Today, I design and guide fully private diving experiences across Bali and Indonesia. No groups, no standard routes — just you, the ocean, and my full attention. Whether it is your first breath underwater or your five-hundredth dive, I am personally there to make it unforgettable.
 </p>
 </div>

 <div className="flex flex-wrap gap-3 mt-8">
 {[
 "SSI Certified Professional",
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
 <p className="text-[var(--brand-text-secondary)] leading-relaxed font-sans mb-4">
 Before launching Boutique Diving Bali, I spent three months working as a Diving Instructor in Koh Samui to see the industry from the inside. What I found was eye-opening: overcrowded boats, burned-out guides, worn equipment, and manufactured reviews. The recreational diving industry is booming — but the quality of the experience often suffers.
 </p>
 <p className="text-[var(--brand-text-secondary)] leading-relaxed font-sans mb-6">
 Boutique Diving Bali exists because premium travellers deserve better. Swiss precision meets underwater paradise — every detail handled, every dive personal, every moment designed for you.
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
 <div className="text-center mt-8">
 <Link href="/about" className="inline-flex items-center gap-1 text-[var(--brand-teal)] hover:text-[var(--brand-teal)]/80 font-sans text-sm transition-colors">
 Read the Full Story <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
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
 <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
 <Image
 src="/images/dive-butler-section.jpg"
 alt="Dominic Frei guiding a diver underwater — the personal Dive Butler experience in Bali"
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 500px"
 quality={85}
 />
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
 ].map((dest, i) => {
 const destImages: Record<string, string> = {
 "Bali": "/images/dest-bali.jpg",
 "Komodo National Park": "/images/dest-komodo.jpg",
 "Raja Ampat": "/images/dest-raja-ampat.jpg",
 "Banda Sea & Beyond": "/images/dest-banda-sea.jpg",
 };
 const destAlts: Record<string, string> = {
 "Bali": "Green sea turtle gliding over coral reef in Bali — private diving at Tulamben and Nusa Penida",
 "Komodo National Park": "Manta ray silhouette in deep blue water at Komodo National Park, Indonesia",
 "Raja Ampat": "Vibrant coral reef teeming with tropical fish in Raja Ampat, Indonesia — world's top diving destination",
 "Banda Sea & Beyond": "Dominic Frei diving with a massive school of fish in the Banda Sea, Indonesia",
 };
 return (
 <FadeInUp key={dest.name} delay={0.1 + i * 0.1}>
 <div className="bg-white border border-[var(--brand-tan)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
 <div className="relative aspect-[4/3] rounded-t-2xl overflow-hidden">
 <Image
 src={destImages[dest.name]}
 alt={destAlts[dest.name]}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 280px"
 quality={80}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
 </div>
 <div className="p-6 flex flex-col flex-grow">
 <h3 className="font-heading text-xl text-[var(--brand-text)] mb-2">{dest.name}</h3>
 <p className="text-[var(--brand-text-secondary)] text-sm leading-relaxed font-sans mb-3 flex-grow">{dest.highlights}</p>
 <p className="text-[var(--brand-teal)] text-xs font-sans font-medium">{dest.sites}</p>
 </div>
 </div>
 </FadeInUp>
 );
 })}
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

 


      {/* ============================================= */}
      {/* SECTION: OUR PARTNER */}
      {/* ============================================= */}
      <section className="py-20 md:py-28 px-6 bg-[#FDF8F0]">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A55A] mb-4 font-sans font-medium">
                Our Partner
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-[#2D4349] leading-tight">
                Ocean Sun Dive Resort
              </h2>
              <p className="text-[#64748B] text-sm font-sans mt-2">Tulamben, Bali</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <div className="bg-[#F5F0E8] rounded-2xl border border-[#E8DFD0] p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Ocean Sun Logo */}
                <div className="flex-shrink-0">
                  <a href="https://ocean-sun.com/en" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/partner-ocean-sun.png"
                      alt="Ocean Sun Dive Resort — SSI Diamond Center, Tulamben, Bali"
                      width={220}
                      height={220}
                      className="w-44 h-44 md:w-52 md:h-52 object-contain"
                    />
                  </a>
                </div>
                {/* Description */}
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center px-3 py-1 bg-[#C5A55A]/10 border border-[#C5A55A]/20 rounded-full text-xs font-sans uppercase tracking-wider text-[#C5A55A] mb-4">
                    SSI Diamond Center
                  </div>
                  <p className="text-[#2D4349] font-sans text-sm md:text-base leading-relaxed mb-4">
                    Ocean Sun is our home base in Tulamben and an official SSI Diamond Center — the highest recognition SSI awards to dive centers that consistently exceed their strictest standards in training quality, safety, and professionalism. Every staff member holds active SSI professional status, and all equipment is premium-grade, maintained and serviced in Ocean Sun&apos;s own dedicated service center.
                  </p>
                  <p className="text-[#2D4349] font-sans text-sm md:text-base leading-relaxed mb-4">
                    This is where Dominic completed his SSI Instructor certification — trained personally by Ocean Sun&apos;s owner, Ricardo. That relationship of trust and shared standards is the foundation of this partnership.
                  </p>
                  <p className="text-[#64748B] font-sans text-sm leading-relaxed mb-6">
                    For guests staying at hotels, private villas, or resorts without their own dive facilities, Ocean Sun serves as the base for all courses and fun dives. From equipment to pool sessions to boat departures — everything is handled at Diamond Center level.
                  </p>
                  <a
                    href="https://ocean-sun.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0C7C6B] hover:text-[#0A6B5C] font-sans text-sm font-medium transition-colors"
                  >
                    Visit Ocean Sun Dive Resort
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
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
 href="https://wa.me/41791722403"
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
 <div className="flex items-center gap-4 mb-4">
 <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
 <Image
 src="/images/logo-icon-only.png"
 alt="Boutique Diving Bali"
 width={400}
 height={400}
 className="w-full h-full object-cover"
 />
 </div>
 <span className="font-heading text-lg text-white">Boutique Diving <span className="text-[#C5A55A] tracking-[0.15em] text-sm font-sans">BALI</span></span>
 </div>
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
 <a href="https://wa.me/41791722403" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[var(--brand-gold)] text-sm font-sans transition-colors inline-flex items-center gap-2">
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