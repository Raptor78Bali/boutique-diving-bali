import { FadeInUp } from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="ocean-hero-bg min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4 font-sans">
            Indonesia&apos;s Premier Personal Dive Concierge
          </p>
          <h1 className="font-heading text-4xl md:text-6xl text-white leading-tight mb-6">
            Your Personal Diving
            <br />
            <span className="gradient-text-gold">Concierge in Paradise</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 font-sans">
            Fully bespoke, private diving experiences tailored to your wishes.
            From Bali&apos;s mantas to Raja Ampat&apos;s pristine reefs — every detail handled,
            every dive unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glow-button-gold px-8 py-3 rounded-full font-sans font-medium text-sm">
              Plan Your Dive
            </button>
            <button className="ghost-button px-8 py-3 rounded-full font-sans text-sm">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="ocean-hero-fade" />

      {/* Placeholder content section */}
      <section className="py-20 px-6 bg-[var(--brand-cream)]">
        <FadeInUp>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-[var(--brand-gold)] mb-3 font-sans">
              The Difference
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-[var(--brand-text)] mb-6">
              Not a Dive Shop.
              <br />
              Your Personal Diving Concierge.
            </h2>
            <p className="text-[var(--brand-text-secondary)] leading-relaxed font-sans">
              Nestled in paradise Bali, I craft high-end diving experiences, individually
              tailored just for you and your loved ones. Whether you&apos;re a family introducing
              your little ones to the underwater wonders, a couple seeking romantic submersion,
              or an individual explorer craving solitude beneath the waves — every dive will be
              a unique masterpiece.
            </p>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}