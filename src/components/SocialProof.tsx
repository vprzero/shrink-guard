const SocialProof = () => (
  <section className="py-20 md:py-28 section-cream">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-secondary text-sm font-semibold uppercase tracking-widest">From The Dock</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
          Dealers who stopped guessing.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            quote: "I thought shrink was just part of the business. Turns out I was flushing $52,000 a year. ShrinkGuard paid for itself in the first month.",
            name: "Third-generation dealer",
            loc: "Stonington, ME",
            saved: "$52K/yr recovered",
          },
          {
            quote: "My guys don't do computers. They do this. Log the lot, check the screen, move the product. That's it. Took us 20 minutes to learn.",
            name: "Co-op manager",
            loc: "Vinalhaven, ME",
            saved: "Zero training friction",
          },
        ].map(({ quote, name, loc, saved }) => (
          <div key={name} className="bg-card rounded-xl p-8 border border-border shadow-[var(--shadow-card)]">
            <div className="inline-block bg-emerald-500/10 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              {saved}
            </div>
            <blockquote className="text-card-foreground text-lg leading-relaxed mb-6">
              "{quote}"
            </blockquote>
            <div className="border-t border-border pt-4">
              <div className="font-display font-semibold text-card-foreground text-sm">{name}</div>
              <div className="text-muted-foreground text-xs">{loc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
        {[
          { n: "86M", l: "lbs landed in Maine (2024)" },
          { n: "$528M", l: "paid to lobstermen" },
          { n: "240+", l: "active dealer licenses" },
          { n: "20%+", l: "documented shrink rates" },
        ].map((s) => (
          <div key={s.n} className="text-center">
            <div className="font-display text-3xl font-bold text-foreground">{s.n}</div>
            <div className="text-muted-foreground text-xs mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
