const CTASection = () => (
  <section id="contact" className="py-20 md:py-28 section-navy relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: "radial-gradient(hsl(var(--cream)) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }} />

    <div className="relative container max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
        Every day without data<br />
        is a day you're losing pounds.
      </h2>
      <p className="text-cream/60 text-lg mt-5 max-w-xl mx-auto">
        15-minute demo. We'll show you what shrink is actually costing your operation — 
        with your real numbers. No commitment.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <a
          href="mailto:demo@shrinkguard.com"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Book your demo
        </a>
        <a
          href="tel:+12075551234"
          className="border border-cream/20 hover:border-cream/40 text-cream/80 hover:text-cream font-medium px-8 py-4 rounded-lg transition-colors"
        >
          Call us: (207) 555-1234
        </a>
      </div>
      <p className="text-cream/30 text-sm mt-6">
        No credit card. No contract. Just a conversation about your tanks.
      </p>
    </div>
  </section>
);

export default CTASection;
