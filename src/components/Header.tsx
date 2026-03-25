"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
 const pathname = usePathname();
 const isServicePage = pathname.startsWith("/services/") || pathname === "/about" || pathname === "/contact" || pathname === "/privacy" || pathname === "/terms";
 const [isOpen, setIsOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const [servicesOpen, setServicesOpen] = useState(false);

 useEffect(() => {
 const handleScroll = () => setScrolled(window.scrollY > 20);
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const services = [
 { name: "Scuba Explorer (8-12)", href: "/services/scuba-explorer" },
 { name: "Junior Open Water (10-14)", href: "/services/junior-owd" },
 { name: "Open Water Diver (15+)", href: "/services/open-water" },
 { name: "SSI Specialty Courses", href: "/services/specialty" },
 { name: "Scuba Skills Update", href: "/services/scuba-skills-update" },
 { name: "Custom Fun Dives", href: "/services/custom-fun-dives" },
 { name: "Dive Butler Service", href: "/services/dive-butler" },
 ];

 return (
 <header
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
 scrolled
 ? "bg-[#0A1628]/98 backdrop-blur-md border-b border-white/10"
 : "bg-[#0A1628]/80 backdrop-blur-sm"
 }`}
 >
 <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
 <Link href="/" className={`flex items-center gap-2 ${isServicePage ? "invisible" : ""}`}>
 <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
 <Image
 src="/images/logo-icon-only.png"
 alt="Boutique Diving Bali"
 width={200}
 height={200}
 className="w-full h-full object-cover"
 />
</div>
 <span className="font-heading text-lg text-white">Boutique Diving <span className="text-[#C5A55A] tracking-[0.15em] text-sm font-sans">BALI</span></span>
 </Link>

 <nav className="hidden lg:flex items-center gap-8">
 <div
 className="relative"
 onMouseEnter={() => setServicesOpen(true)}
 onMouseLeave={() => setServicesOpen(false)}
 >
 <button className="text-white/70 hover:text-white text-sm font-sans transition-colors flex items-center gap-1">
 Services <ChevronDown className="w-3.5 h-3.5" />
 </button>
 {servicesOpen && (
 <div className="absolute top-full left-0 mt-2 w-64 bg-[#0A1628]/98 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-xl">
 {services.map((service) => (
 <Link
 key={service.name}
 href={service.href}
 className="block px-4 py-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm font-sans transition-colors"
 >
 {service.name}
 </Link>
 ))}
 </div>
 )}
 </div>

 <Link href="/services/dive-butler" className="text-white/70 hover:text-white text-sm font-sans transition-colors">
 Dive Butler
 </Link>
 <Link href="#destinations" className="text-white/70 hover:text-white text-sm font-sans transition-colors">
 Destinations
 </Link>
 <Link href="/about" className="text-white/70 hover:text-white text-sm font-sans transition-colors">
 About
 </Link>
 <Link href="/contact" className="text-white/70 hover:text-white text-sm font-sans transition-colors">
 Contact
 </Link>

 <Link
 href="/contact"
 className="glow-button-gold px-6 py-2.5 rounded-full font-sans font-medium text-xs tracking-wide"
 >
 Plan Your Dive
 </Link>
 </nav>

 <button
 onClick={() => setIsOpen(!isOpen)}
 className="lg:hidden text-white/70 hover:text-white transition-colors"
 >
 {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
 </button>
 </div>

 {isOpen && (
 <div className="lg:hidden bg-[#0A1628]/98 backdrop-blur-md border-t border-white/10">
 <div className="max-w-6xl mx-auto px-6 py-6 space-y-4">
 <p className="text-white/40 text-xs uppercase tracking-widest font-sans mb-2">Services</p>
 {services.map((service) => (
 <Link
 key={service.name}
 href={service.href}
 onClick={() => setIsOpen(false)}
 className="block text-white/60 hover:text-white text-sm font-sans transition-colors py-1"
 >
 {service.name}
 </Link>
 ))}
 <div className="border-t border-white/10 pt-4 mt-4 space-y-3">
 <Link href="/about" onClick={() => setIsOpen(false)} className="block text-white/60 hover:text-white text-sm font-sans transition-colors">
 About Dominic
 </Link>
 <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-white/60 hover:text-white text-sm font-sans transition-colors">
 Contact
 </Link>
 <Link href="/" onClick={() => setIsOpen(false)} className="block text-white/60 hover:text-white text-sm font-sans transition-colors">
 Home
 </Link>
 </div>
 <Link
 href="/contact"
 onClick={() => setIsOpen(false)}
 className="glow-button-gold px-6 py-3 rounded-full font-sans font-medium text-sm tracking-wide inline-block mt-4"
 >
 Plan Your Dive
 </Link>
 </div>
 </div>
 )}
 </header>
 );
}