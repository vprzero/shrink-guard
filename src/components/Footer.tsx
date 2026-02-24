const Footer = () => (
  <footer className="section-navy border-t border-navy-light/30 py-10">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-display font-bold text-cream text-lg tracking-tight">
            ShrinkGuard<span className="text-secondary">™</span>
          </div>
          <p className="text-cream/40 text-xs mt-1">
            Shrink management for live lobster dealers.
          </p>
        </div>
        <div className="flex items-center gap-6 text-cream/40 text-xs">
          <a href="#problem" className="hover:text-cream/70 transition-colors">The Problem</a>
          <a href="#how-it-works" className="hover:text-cream/70 transition-colors">How It Works</a>
          <a href="#calculator" className="hover:text-cream/70 transition-colors">ROI Calculator</a>
          <a href="#contact" className="hover:text-cream/70 transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-navy-light/20 text-cream/25 text-xs text-center">
        © {new Date().getFullYear()} ShrinkGuard. Built for Maine. Built for dealers.
      </div>
    </div>
  </footer>
);

export default Footer;
