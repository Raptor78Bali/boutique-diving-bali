"use client";

import { useState } from "react";
import { Mail, Instagram, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoon() {
 const [email, setEmail] = useState("");
 const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (email) {
 setSubmitted(true);
 }
 };

 return (
 <main className="min-h-screen ocean-hero-bg flex items-center justify-center relative overflow-hidden">
 {/* Light rays */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden">
 <div
 className="absolute w-[200px] h-[600px] bg-white/[0.03] rotate-[15deg] -top-20 left-[20%]"
 style={{ animation: "light-ray-drift 20s ease-in-out infinite" }}
 />
 <div
 className="absolute w-[150px] h-[500px] bg-white/[0.02] -rotate-[10deg] -top-10 right-[25%]"
 style={{ animation: "light-ray-drift-2 25s ease-in-out infinite" }}
 />
 </div>

 {/* Floating particles */}
 <div className="absolute inset-0 pointer-events-none">
 {[...Array(6)].map((_, i) => (
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

 <div className="text-center px-6 relative z-10 max-w-2xl mx-auto">
 {/* Brand */}
 <motion.div
 initial={{ opacity: 0, y: -10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 >
 <h1 className="font-heading text-2xl md:text-3xl text-white tracking-wide mb-1">
 Boutique Diving{" "}
 <span className="text-[var(--brand-gold)] tracking-[0.15em]">BALI</span>
 </h1>
 <div className="w-12 h-px bg-[var(--brand-gold)] mx-auto mt-4 mb-8" />
 </motion.div>

 {/* Headline */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.4 }}
 >
 <p className="text-[var(--brand-gold)] text-xs uppercase tracking-[0.25em] font-sans font-medium mb-4">
 Coming Soon
 </p>
 <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] mb-6">
 Your Personal Diving
 <br />
 <span className="gradient-text-gold">Concierge in Paradise</span>
 </h2>
 <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
 Indonesia&apos;s premier personal dive concierge is launching soon.
 Fully bespoke, private scuba diving experiences — tailored exclusively to you.
 </p>
 </motion.div>

 {/* Email signup */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6, delay: 0.6 }}
 >
 {!submitted ? (
 <div>
 <p className="text-white/40 text-sm font-sans mb-4">
 Be the first to know when we launch
 </p>
 <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="Your email address"
 className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-white text-sm font-sans placeholder:text-white/30 focus:outline-none focus:border-[var(--brand-gold)]/50 transition-colors"
 />
 <button
 onClick={handleSubmit}
 className="glow-button-gold px-8 py-3 rounded-full font-sans font-medium text-sm tracking-wide whitespace-nowrap"
 >
 Notify Me
 </button>
 </div>
 </div>
 ) : (
 <div className="bg-white/5 border border-[var(--brand-gold)]/20 rounded-2xl px-8 py-6">
 <p className="text-[var(--brand-gold)] font-sans font-medium mb-1">
 Thank you!
 </p>
 <p className="text-white/50 text-sm font-sans">
 We&apos;ll notify you as soon as we launch.
 </p>
 </div>
 )}
 </motion.div>

 {/* Contact info */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.6, delay: 0.8 }}
 className="mt-16 space-y-4"
 >
 <p className="text-white/30 text-xs uppercase tracking-widest font-sans">
 In the meantime
 </p>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50 text-sm font-sans">
 <a
 href="mailto:info@boutiquedivingbali.com"
 className="hover:text-[var(--brand-gold)] transition-colors inline-flex items-center gap-2"
 >
 <Mail className="w-4 h-4" />
 info@boutiquedivingbali.com
 </a>
 <a
 href="https://instagram.com/boutiquedivingbali"
 target="_blank"
 rel="noopener noreferrer"
 className="hover:text-[var(--brand-gold)] transition-colors inline-flex items-center gap-2"
 >
 <Instagram className="w-4 h-4" />
 @boutiquedivingbali
 </a>
 </div>
 <div className="flex items-center justify-center gap-1.5 text-white/25 text-xs font-sans mt-6">
 <MapPin className="w-3 h-3" />
 Bali, Indonesia
 </div>
 </motion.div>
 </div>
 </main>
 );
}