import type { Metadata } from "next";
import { Sparkles, Shield, Globe, Compass, Users, Phone, ChevronRight, Star, ArrowRight, Anchor, MapPin, Waves, Search } from "lucide-react";
import Link from "next/link";
import { FadeInUp, FadeIn } from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Custom Fun Dives in Bali — Private Guided Diving at Bali's Best Sites | Boutique Diving Bali",
 description:
 "Dream dives designed from scratch. Private guided diving at Bali's finest sites — manta rays, the USAT Liberty wreck, macro photography, night dives, and more. Tell Dominic your wish and he designs the perfect dive experience for you.",
 keywords: [
 "private fun diving Bali",
 "custom dive experience Bali",
 "guided diving Bali private",
 "manta ray diving Bali",
 "wreck diving Tulamben",
 "USAT Liberty dive Bali",
 "night diving Bali",
 "macro diving Bali",
 "private dive guide Bali",
 "bespoke diving Bali",
 "luxury fun diving Bali",
 "Nusa Penida diving private",
 "personal dive guide Bali",
 ],
 openGraph: {
 title: "Custom Fun Dives in Bali — Private Guided Diving | Boutique Diving Bali",
 description:
 "Dream dives designed from scratch. Private guided diving at Bali's finest sites — mantas, wrecks, macro, night dives. Your wish, your dive.",
 url: "https://www.boutiquedivingbali.com/services/custom-fun-dives",
 siteName: "Boutique Diving Bali",
 locale: "en_US",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Custom Fun Dives in Bali | Boutique Diving Bali",
 description:
 "Dream dives designed from scratch. Private guided diving at Bali's finest sites.",
 },
 alternates: {
 canonical: "https://www.boutiquedivingbali.com/services/custom-fun-dives",
 },
};

const faqItems = [
 {
 question: "What are Custom Fun Dives?",
 answer:
 "Custom Fun Dives are exactly what they sound like: diving experiences designed entirely around what you want to see and do. There is no fixed itinerary, no group, and no standard route. You tell Dominic what excites you — manta rays, the USAT Liberty wreck, macro critters, night diving, drift dives, or simply exploring the most beautiful coral gardens in Bali — and he designs a private dive experience specifically for you. Every detail is tailored: site selection, timing, number of dives, surface intervals, and what marine life you are most likely to encounter.",
 },
 {
 question: "Do I need a specific certification level?",
 answer:
 "You need at least an Open Water Diver certification (or equivalent from any agency) to participate in Custom Fun Dives. The specific sites and dive profiles Dominic plans for you will match your certification level and experience. If you hold an Advanced Open Water or specialty certifications like Deep Diving or Nitrox, that opens up additional sites and deeper profiles. If you have not dived recently, Dominic may recommend a quick Scuba Skills Update before your fun dives to ensure you are comfortable.",
 },
 {
 question: "Which dive sites can I choose from?",
 answer:
 "Any dive site in the Bali region. Popular choices include Tulamben (USAT Liberty wreck, Coral Garden, Drop-Off, Seraya Secrets for macro), Nusa Penida (Manta Point, Crystal Bay for mola mola), Padang Bai (Blue Lagoon, shark point), Amed (Japanese wreck, Jemeluk Bay), and Menjangan Island (pristine walls and coral). Dominic selects the final site based on conditions, tides, and visibility on the day — always optimising for the best possible experience.",
 },
 {
 question: "Can I do multiple dives in one day?",
 answer:
 "Absolutely. A typical fun dive day includes two to three dives with surface intervals in between. Dominic plans the sequence to maximise your experience — often starting with the deepest or most demanding dive first, then moving to shallower, more relaxed sites. If you are Nitrox certified, you can extend your bottom times and shorten surface intervals for even more time underwater.",
 },
 {
 question: "Can I bring my partner or friends who don't dive?",
 answer:
 "Of course. Non-diving companions are welcome to join for the day — they can snorkel at many of the same sites, relax on the boat, or enjoy the scenery. If a companion wants to try diving for the first time, Dominic can arrange a Discover Scuba experience alongside your fun dives (subject to site conditions and safety considerations).",
 },
 {
 question: "Is equipment included?",
 answer:
 "Yes — all diving equipment is included and personally fitted to you. If you prefer to use your own gear, you are welcome to bring it. Dominic inspects all equipment before every dive regardless of whether it is provided or personal. If you need specific equipment for a particular dive (torch for night diving, surface marker buoy, etc.), it is all arranged in advance.",
 },
 {
 question: "How does pricing work?",
 answer:
 "Every fun dive experience is individually priced based on what you want to do — the dive sites, number of dives, whether transport is needed, any special equipment requirements, and the number of divers in your party. Because all diving is fully private, pricing is prepared as a bespoke proposal after Dominic understands your wishes. There are no hidden costs and no standard group rates. Reach out via WhatsApp or email to start planning.",
 },
];

export default function CustomFunDivesPage() {
 return (
 <>
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "Service",
 name: "Custom Fun Dives — Private Guided Diving",
 provider: {
 "@type": "LocalBusiness",
 name: "Boutique Diving Bali",
 url: "https://www.boutiquedivingbali.com",
 },
 description:
 "Private guided fun dives in Bali designed from scratch around your wishes. Manta rays, wrecks, macro, night dives — every experience is bespoke.",
 areaServed: {
 "@type": "Place",
 name: "Bali, Indonesia",
 },
 serviceType: "Custom Private Fun Dives",
 url: "https://www.boutiquedivingbali.com/services/custom-fun-dives",
 }}
 />
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: "https://www.boutiquedivingbali.com" },
 { "@type": "ListItem", position: 2, name: "Services", item: "https://www.boutiquedivingbali.com/#services" },
 { "@type": "ListItem", position: 3, name: "Custom Fun Dives", item: "https://www.boutiquedivingbali.com/services/custom-fun-dives" },
 ],
 }}
 />

 <main className="min-h-screen">
 <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628]">
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" style={{ left: "18%", top: "-50%", animation: "light-ray-drift 20s ease-in-out infinite", transform: "rotate(16deg)" }} />
 <div className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" style={{ left: "72%", top: "-50%", animation: "light-ray-drift-2 25s ease-in-out infinite", transform: "rotate(-7deg)" }} />
 </div>

 <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
 <nav aria-label="Breadcrumb" className="mb-8">
 <ol className="flex items-center justify-center gap-2 text-sm text-[#94A3B8]">
 <li><Link href="/" className="hover:text-[#C5A55A] transition-colors">Home</Link></li>
 <li><ChevronRight className="w-3 h-3" /></li>
 <li><Link href="/#services" className="hover:text-[#C5A55A] transition-colors">Services</Link></li>
 <li><ChevronRight className="w-3 h-3" /></li>
 <li className="text-[#C5A55A]">Custom Fun Dives</li>
 </ol>
 </nav>

 <FadeIn>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">Your Dream Dive</p>
 </FadeIn>

 <FadeIn delay={0.1}>
 <div className="flex justify-center mb-6">
 <div className="w-16 h-16 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <Sparkles className="w-8 h-8 text-[#0C7C6B]" />
 </div>
 </div>
 </FadeIn>

 <FadeIn delay={0.15}>
 <div className="flex justify-center mb-6">
 <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 rounded-full text-sm font-sans text-[#0C7C6B]">Certified Divers</span>
 </div>
 </FadeIn>

 <FadeInUp delay={0.2}>
 <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal text-white mb-6 leading-[1.1]">
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">Custom Fun Dives</span>
 </h1>
 </FadeInUp>

 <FadeInUp delay={0.3}>
 <p className="font-sans text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
 Tell Dominic your wish. Manta rays, shipwrecks, macro critters, night dives — he designs the perfect dive experience from scratch. Privately, just for you.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.4}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27d%20like%20to%20plan%20some%20custom%20fun%20dives%20in%20Bali." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300">
 <Phone className="w-4 h-4" /> Plan Your Dives
 </a>
 <a href="mailto:info@boutiquedivingbali.com?subject=Custom%20Fun%20Dives%20Inquiry" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-sans font-medium rounded-lg hover:bg-white/5 transition-all duration-300">
 Send an Email
 </a>
 </div>
 </FadeInUp>
 </div>
 </section>

 <div className="h-24 bg-gradient-to-b from-[#0A1628] to-[#FDF8F0]" />

 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-4xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">Not a Standard Day Trip</p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-8">Your Dive. Your Sites. Your Marine Life Wishlist.</h2>
 </FadeInUp>

 <FadeInUp delay={0.1}>
 <div className="prose prose-lg max-w-none">
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 At a typical Bali dive operator, you book a &ldquo;fun dive dayrdquo and get assigned to a boat with eight other divers, a standard route, and a guide who leads the group along the same path they take every single day. You see what the group sees. You move at the group&apos;s speed. If you want to spend ten minutes watching a cleaning station, too bad — the group has moved on. If conditions are better at a different site, too bad — the bus is already heading to the scheduled one.
 </p>
 <p className="text-[#2D4349] font-sans leading-relaxed mb-6">
 Custom Fun Dives with Boutique Diving Bali work differently. You tell Dominic what you want: mantas, the Liberty wreck at sunrise before the crowds, a macro photography session at Seraya Secrets, a night dive to see the hunters come out, or simply the best diving conditions available that day. He designs your experience from scratch — choosing the site, the timing, the dive profile, and the approach based on your wishes and the conditions.
 </p>
 <p className="text-[#64748B] font-sans leading-relaxed">
 Underwater, Dominic is your private guide. He knows Tulamben&apos;s sites intimately — every critter hiding spot, every cleaning station, every angle of the Liberty wreck. He adjusts the dive in real time based on what you want to see, your air consumption, and your comfort. When you surface, you have had the dive you wanted — not the dive a group schedule dictated.
 </p>
 </div>
 </FadeInUp>
 </div>
 </section>

 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">What Excites You?</p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">Tell Dominic Your Wish</h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">These are some of the most popular experiences divers ask for. But your dive can be anything you imagine — just ask.</p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 {
 title: "Manta Ray Encounters",
 icon: Waves,
 description: "Dive with oceanic manta rays at Nusa Penida's Manta Point. Dominic times the dive for the best chance of encounters and positions you for close, respectful observation.",
 site: "Nusa Penida — Manta Point",
 },
 {
 title: "Wreck Exploration",
 icon: Anchor,
 description: "Explore the USAT Liberty — a World War II cargo ship resting at 5–30 metres, encrusted with coral and teeming with life. Early morning dives before the crowds are a speciality.",
 site: "Tulamben — USAT Liberty",
 },
 {
 title: "Macro Photography Dives",
 icon: Search,
 description: "Slow, focused dives designed for spotting and photographing tiny creatures: nudibranchs, pygmy seahorses, frogfish, ghost pipefish. Dominic knows every hiding spot.",
 site: "Seraya Secrets, Tulamben",
 },
 {
 title: "Night Diving",
 icon: Star,
 description: "The ocean transforms after dark. Hunting octopus, sleeping parrotfish, bioluminescence, and creatures you will never see during the day. A completely different world.",
 site: "Tulamben — Liberty wreck & reef",
 },
 {
 title: "Drift & Current Dives",
 icon: Compass,
 description: "For experienced divers who enjoy the thrill of current diving. Let the ocean carry you along walls and channels — exhilarating, efficient, and full of pelagic encounters.",
 site: "Nusa Penida, Padang Bai",
 },
 {
 title: "Coral Garden Exploration",
 icon: Globe,
 description: "Relaxed, scenic dives through some of Bali's healthiest and most colourful coral ecosystems. Perfect for divers who want beauty, calm, and a pure connection with the reef.",
 site: "Tulamben Coral Garden, Jemeluk Bay",
 },
 ].map((experience, index) => (
 <FadeInUp key={experience.title} delay={index * 0.08}>
 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0] hover:shadow-lg transition-all duration-300 h-full">
 <div className="flex items-start gap-3 mb-3">
 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0C7C6B]/10 border border-[#0C7C6B]/20 flex items-center justify-center">
 <experience.icon className="w-5 h-5 text-[#0C7C6B]" />
 </div>
 <h3 className="font-heading text-lg font-normal text-[#2D4349] mt-1.5">{experience.title}</h3>
 </div>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-3">{experience.description}</p>
 <p className="font-sans text-xs text-[#0C7C6B]">{experience.site}</p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">Where You Will Dive</p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-4">Bali&apos;s Finest Dive Sites — Selected for You</h2>
 <p className="font-sans text-[#64748B] text-center max-w-2xl mx-auto mb-14">Dominic chooses the site with the best conditions each day. You never dive a site just because it fits a schedule.</p>
 </FadeInUp>

 <div className="grid md:grid-cols-2 gap-8">
 <FadeInUp delay={0.1}>
 <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E8DFD0] relative overflow-hidden">
 <div className="absolute top-4 right-4">
 <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C5A55A]/10 border border-[#C5A55A]/20 rounded-full text-xs font-sans uppercase tracking-wider text-[#C5A55A]">
 <MapPin className="w-3 h-3" /> Home Base
 </span>
 </div>
 <h3 className="font-heading text-2xl font-normal text-[#2D4349] mb-2 mt-2">Tulamben</h3>
 <p className="font-sans text-[#64748B] leading-relaxed mb-4">
 Dominic&apos;s home waters and arguably the best fun diving in Bali. Calm conditions, easy shore entries, and an extraordinary variety: the world-famous USAT Liberty wreck, pristine coral gardens, dramatic drop-offs, and the macro paradise of Seraya Secrets.
 </p>
 <div className="flex flex-wrap gap-2">
 {["USAT Liberty Wreck", "Coral Garden", "Drop-Off", "Seraya Secrets", "Batu Kelebit", "Alamanda"].map((site) => (
 <span key={site} className="text-xs font-sans px-3 py-1 bg-[#0C7C6B]/10 text-[#0C7C6B] rounded-full">{site}</span>
 ))}
 </div>
 </div>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="space-y-4">
 {[
 { name: "Nusa Penida", highlights: "Manta Point, Crystal Bay (mola mola season Jul–Oct), dramatic topography and strong marine life encounters." },
 { name: "Padang Bai", highlights: "Blue Lagoon for calm, clear dives. Shark Point for reef sharks. Great alternative when east coast conditions are variable." },
 { name: "Amed & Jemeluk Bay", highlights: "Beautiful bay diving, Japanese wreck, colourful walls, and excellent macro. Peaceful and uncrowded." },
 { name: "Menjangan Island", highlights: "Pristine coral walls in the northwest. Crystal visibility and untouched reefs — worth the journey for serious divers." },
 ].map((dest) => (
 <div key={dest.name} className="bg-[#F5F0E8] rounded-xl p-5 border border-[#E8DFD0] hover:border-[#C5A55A]/30 transition-all duration-300">
 <h4 className="font-heading text-lg font-normal text-[#2D4349] mb-1">{dest.name}</h4>
 <p className="font-sans text-sm text-[#64748B]">{dest.highlights}</p>
 </div>
 ))}
 </div>
 </FadeInUp>
 </div>
 </div>
 </section>

 <section className="py-20 bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628] text-white">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">What You Get</p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-white text-center mb-14">The Private Fun Dive Experience</h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 { icon: Users, title: "Entirely Private", description: "No strangers on your dive. Just you (and your group) with Dominic as your personal guide. Every dive is designed around your interests." },
 { icon: Sparkles, title: "Designed from Scratch", description: "No standard routes. No fixed packages. Your dive experience is created based on what you want to see, your skill level, and the best conditions that day." },
 { icon: MapPin, title: "Best-Site Selection", description: "Dominic chooses the dive site with the best conditions on the day — not the one a tour bus is already heading to." },
 { icon: Shield, title: "All Equipment Included", description: "Premium diving equipment, personally fitted and inspected. Bring your own gear if you prefer — Dominic checks it regardless." },
 { icon: Compass, title: "Flexible Scheduling", description: "One dive or three. Dawn start or afternoon session. Single day or multi-day programme. Your dives fit your holiday, not the other way around." },
 { icon: Star, title: "Local Knowledge", description: "Dominic knows Tulamben's sites intimately — every critter hiding spot, every cleaning station, every angle of the Liberty wreck at every time of day." },
 ].map((feature, index) => (
 <FadeInUp key={feature.title} delay={index * 0.05}>
 <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:border-[#0C7C6B]/20 transition-all duration-300 h-full">
 <feature.icon className="w-6 h-6 text-[#C5A55A] mb-4" />
 <h3 className="font-heading text-lg font-normal text-white mb-2">{feature.title}</h3>
 <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">{feature.description}</p>
 </div>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 <section className="py-20 bg-[#FDF8F0]">
 <div className="max-w-3xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">Common Questions</p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-12">Everything You Need to Know</h2>
 </FadeInUp>
 <FadeInUp delay={0.1}>
 <FaqAccordion items={faqItems} />
 </FadeInUp>
 </div>
 </section>

 <section className="py-20 bg-[#F5F0E8]">
 <div className="max-w-5xl mx-auto px-6">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4 text-center">Explore More</p>
 <h2 className="font-heading text-3xl sm:text-4xl font-normal text-[#2D4349] text-center mb-12">You Might Also Be Interested In</h2>
 </FadeInUp>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {[
 { title: "SSI Specialty Courses", description: "Combine fun dives with a Specialty course. Deep Diving, Nitrox, Night Diving, Wreck Diving — earn a new certification while you enjoy Bali.", href: "/services/specialty", badge: "Certified Divers" },
 { title: "Scuba Skills Update", description: "Haven't dived in a while? A quick private refresher before your fun dives ensures you are comfortable from the first descent.", href: "/services/scuba-skills-update", badge: "Certified Divers" },
 { title: "Dive Butler Service", description: "Want Dominic for your entire trip — including liveaboards and resorts across Indonesia? The Dive Butler goes wherever you go.", href: "/services/dive-butler", badge: "Signature Service" },
 ].map((service, index) => (
 <FadeInUp key={service.title} delay={index * 0.1}>
 <Link href={service.href} className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DFD0] hover:border-[#C5A55A]/30 hover:shadow-lg transition-all duration-300 group h-full">
 <span className="inline-block px-2 py-0.5 text-xs font-sans uppercase tracking-wider text-[#0C7C6B] bg-[#0C7C6B]/10 rounded-full mb-3">{service.badge}</span>
 <h3 className="font-heading text-lg font-normal text-[#2D4349] mb-2 group-hover:text-[#0C7C6B] transition-colors">{service.title}</h3>
 <p className="font-sans text-sm text-[#64748B] leading-relaxed mb-3">{service.description}</p>
 <span className="inline-flex items-center gap-1 text-sm font-sans text-[#0C7C6B] group-hover:gap-2 transition-all">Learn More <ArrowRight className="w-4 h-4" /></span>
 </Link>
 </FadeInUp>
 ))}
 </div>
 </div>
 </section>

 <section className="relative py-24 bg-gradient-to-b from-[#0A1628] via-[#0B2A3A] to-[#0A1628] text-white overflow-hidden">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A55A]/5 rounded-full blur-[120px] pointer-events-none" />

 <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
 <FadeInUp>
 <p className="font-sans uppercase tracking-[0.2em] text-xs text-[#C5A55A] mb-4">Start Planning</p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6">
 What Is Your{" "}
 <span className="bg-gradient-to-r from-[#C5A55A] via-[#D4AF37] to-[#0C7C6B] bg-clip-text text-transparent animate-[gradient-text-shift_8s_ease_infinite] bg-[length:200%_auto]">Dream Dive?</span>
 </h2>
 <p className="font-sans text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto">
 Mantas at sunrise? The Liberty wreck before the crowds? A night dive on the reef? Tell Dominic what excites you and he will make it happen.
 </p>
 </FadeInUp>

 <FadeInUp delay={0.2}>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <a href="https://wa.me/41791722403?text=Hello%20Dominic%2C%20I%27d%20like%20to%20plan%20some%20custom%20fun%20dives%20in%20Bali." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C5A55A] to-[#D4AF37] text-[#0A1628] font-sans font-medium rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.3)] transition-all duration-300 animate-[gold-glow_3s_ease-in-out_infinite]">
 <Phone className="w-4 h-4" /> WhatsApp Dominic
 </a>
 <a href="mailto:info@boutiquedivingbali.com?subject=Custom%20Fun%20Dives%20Inquiry" className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-sans font-medium rounded-lg hover:bg-white/5 transition-all duration-300">
 Send an Email
 </a>
 </div>
 </FadeInUp>

 <FadeIn delay={0.3}>
 <p className="font-sans text-sm text-[#64748B] mt-8">
 Or email directly:{" "}
 <a href="mailto:info@boutiquedivingbali.com" className="text-[#C5A55A] hover:text-[#D4AF37] transition-colors">info@boutiquedivingbali.com</a>
 </p>
 </FadeIn>
 </div>
 </section>
 </main>
 </>
 );
}