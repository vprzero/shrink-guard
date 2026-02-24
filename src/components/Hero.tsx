import DashboardMockup from "./DashboardMockup";
import heroImage from "@/assets/hero-lobster.webp";

const Hero = () => (
  <section className="relative section-navy overflow-hidden">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(var(--cream)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cream)) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />

    <div className="relative container max-w-6xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 py-5 max-w-6xl mx-auto w-full">
        <div className="font-display font-bold text-cream text-lg tracking-tight">
          ShrinkGuard<span className="text-secondary">™</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-cream/60 hover:text-cream text-sm transition-colors">The Problem</a>
          <a href="#how-it-works" className="text-cream/60 hover:text-cream text-sm transition-colors">How It Works</a>
          <a href="#calculator" className="text-cream/60 hover:text-cream text-sm transition-colors">ROI Calculator</a>
          <a href="#contact" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-5 py-2 rounded-lg transition-colors">
            Book a Demo
          </a>
        </div>
      </nav>

      {/* Hero content: text left, image right */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Copy */}
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold">Maine lobster dealers are losing $40K+/year to shrink</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-cream leading-[1.1] tracking-tight">
            You're losing money<br />
            in your tanks.<br />
            <span className="text-primary">Every single day.</span>
          </h1>

          <p className="text-cream/60 text-base sm:text-lg mt-6 max-w-lg leading-relaxed">
            Lobster dies. You eat the cost. ShrinkGuard tracks every lot, every tank, every degree — 
            and tells you exactly what to sell, hold, or move <em>before</em> you lose another pound.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="#calculator"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-3.5 rounded-lg transition-colors text-center"
            >
              Calculate your losses →
            </a>
            <a
              href="#how-it-works"
              className="border border-cream/20 hover:border-cream/40 text-cream/80 hover:text-cream font-medium px-7 py-3.5 rounded-lg transition-colors text-center"
            >
              See how it works
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-cream/10">
            {[
              { n: "240+", l: "dealers in Maine alone" },
              { n: "20%", l: "shrink rates reported (USDA)" },
              { n: "$0", l: "upfront cost to start" },
            ].map((s) => (
              <div key={s.n}>
                <div className="font-display font-bold text-cream text-base sm:text-lg">{s.n}</div>
                <div className="text-cream/40 text-[10px] sm:text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="min-w-0 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Lobsterman sorting live lobsters in holding tanks at a Maine waterfront pound"
            className="w-full max-w-md md:max-w-full rounded-xl border border-cream/10 object-cover aspect-square"
            loading="eager"
          />
        </div>
      </div>

      {/* Dashboard below hero */}
      <div className="mt-12 md:mt-16 w-full">
        <DashboardMockup />
      </div>
    </div>
  </section>
);

export default Hero;
