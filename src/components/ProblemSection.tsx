import { Droplets, Thermometer, TrendingDown, Clock, BarChart3, FileText } from "lucide-react";

const ProblemSection = () => (
  <section id="problem" className="py-20 md:py-28 section-cream">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-secondary text-sm font-semibold uppercase tracking-widest">The Problem</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Shrink is the silent margin killer.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          You can't manage what you can't see. Most dealers are guessing — walking the tanks, 
          eyeballing shells, and hoping for the best. Meanwhile, lobster is dying and money is 
          draining out of your operation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: TrendingDown,
            stat: "$40K+",
            title: "Lost per year",
            desc: "Average mid-size dealer loses $30K–$60K annually to shrink they never tracked.",
          },
          {
            icon: Clock,
            stat: "48 hrs",
            title: "Danger window",
            desc: "After 48 hours in a tank, mortality rates accelerate. Most dealers don't track hold time by lot.",
          },
          {
            icon: Thermometer,
            stat: "2°F",
            title: "Makes the difference",
            desc: "A 2-degree swing in tank temp can double your shrink rate. Are you watching every tank?",
          },
        ].map(({ icon: Icon, stat, title, desc }) => (
          <div
            key={title}
            className="bg-card rounded-xl p-6 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="font-display text-2xl font-bold text-primary mb-1">{stat}</div>
            <div className="font-display font-semibold text-foreground mb-2">{title}</div>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-accent rounded-xl p-6 md:p-8 text-accent-foreground">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-shrink-0">
            <Droplets className="w-8 h-8 text-secondary" />
          </div>
          <div>
            <p className="text-accent-foreground/90 text-lg font-medium leading-relaxed">
              "Shrinkage of over 20% has been documented in live lobster handling operations."
            </p>
            <p className="text-accent-foreground/50 text-sm mt-2">
              — USDA National Institute of Food and Agriculture
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
