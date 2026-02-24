import { Package, Activity, Bell, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Log every lot in, every lot out",
    desc: "Source, weight, grade, tank assignment. Takes 30 seconds. Replaces your clipboard.",
  },
  {
    icon: Activity,
    title: "Track tank conditions in real time",
    desc: "Temp, hold time, density — all visible at a glance. Optional sensor integration for automatic readings.",
  },
  {
    icon: Bell,
    title: "Get alerts before it's too late",
    desc: "ShrinkGuard flags at-risk lots and tells you: sell now, re-tank, or move. Plain English, not charts.",
  },
  {
    icon: BarChart3,
    title: "See your real shrink cost",
    desc: "Weekly reports show you exactly how many pounds and dollars you lost — and how much you saved.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-card">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-secondary text-sm font-semibold uppercase tracking-widest">How It Works</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-card-foreground mt-3">
          Built for the wharf, not the boardroom.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          No complex setup. No IT department needed. If you can use a phone, you can use ShrinkGuard.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="flex gap-4 p-6 rounded-xl border border-border bg-background/50 hover:bg-background transition-colors">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-sm">{i + 1}</span>
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-card-foreground mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
