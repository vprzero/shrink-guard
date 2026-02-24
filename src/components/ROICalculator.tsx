import { useState, useEffect, useRef } from "react";

const ROICalculator = () => {
  const [weeklyLbs, setWeeklyLbs] = useState(15000);
  const [avgPrice, setAvgPrice] = useState(6.5);
  const [currentShrink, setCurrentShrink] = useState(4);
  const [reducedShrink, setReducedShrink] = useState(1.5);

  const annualLbs = weeklyLbs * 52;
  const currentLoss = annualLbs * (currentShrink / 100) * avgPrice;
  const reducedLoss = annualLbs * (reducedShrink / 100) * avgPrice;
  const annualSavings = currentLoss - reducedLoss;
  const monthlySavings = annualSavings / 12;

  const formatDollars = (n: number) =>
    "$" + Math.round(n).toLocaleString();

  return (
    <section id="calculator" className="py-20 md:py-28 section-navy">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest">ROI Calculator</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mt-3">
            Plug in your numbers. See what you're losing.
          </h2>
          <p className="text-cream/60 mt-3 max-w-xl mx-auto">
            Every dealer's operation is different. But the math doesn't lie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <InputSlider
              label="Weekly throughput"
              unit="lbs"
              min={1000}
              max={100000}
              step={500}
              value={weeklyLbs}
              onChange={setWeeklyLbs}
              formatValue={(v) => v.toLocaleString() + " lbs"}
            />
            <InputSlider
              label="Average price per pound"
              unit="$/lb"
              min={3}
              max={15}
              step={0.25}
              value={avgPrice}
              onChange={setAvgPrice}
              formatValue={(v) => "$" + v.toFixed(2)}
            />
            <InputSlider
              label="Current shrink rate"
              unit="%"
              min={0.5}
              max={15}
              step={0.5}
              value={currentShrink}
              onChange={setCurrentShrink}
              formatValue={(v) => v.toFixed(1) + "%"}
              danger
            />
            <InputSlider
              label="Shrink rate with ShrinkGuard"
              unit="%"
              min={0.5}
              max={5}
              step={0.25}
              value={reducedShrink}
              onChange={setReducedShrink}
              formatValue={(v) => v.toFixed(1) + "%"}
              success
            />
          </div>

          {/* Results */}
          <div className="flex flex-col justify-center">
            <div className="bg-navy-light/40 rounded-xl p-6 border border-navy-light/30 space-y-5">
              <ResultRow label="You're currently losing" value={formatDollars(currentLoss)} sub="/year" danger />
              <ResultRow label="With ShrinkGuard" value={formatDollars(reducedLoss)} sub="/year" />
              <div className="border-t border-navy-light/40 pt-5">
                <div className="text-cream/50 text-sm mb-1">Your annual savings</div>
                <div className="stat-number text-emerald-400">
                  {formatDollars(annualSavings)}
                </div>
                <div className="text-cream/40 text-sm mt-1">
                  That's <span className="text-emerald-400 font-semibold">{formatDollars(monthlySavings)}/mo</span> back in your pocket
                </div>
              </div>
              <a
                href="#contact"
                className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-colors mt-4"
              >
                See it on your operation — book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputSlider = ({
  label, min, max, step, value, onChange, formatValue, danger, success, unit
}: {
  label: string; unit: string; min: number; max: number; step: number;
  value: number; onChange: (v: number) => void; formatValue: (v: number) => string;
  danger?: boolean; success?: boolean;
}) => (
  <div>
    <div className="flex justify-between mb-2">
      <label className="text-cream/70 text-sm">{label}</label>
      <span className={`font-display font-bold text-sm ${danger ? "text-primary" : success ? "text-emerald-400" : "text-cream"}`}>
        {formatValue(value)}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-full appearance-none cursor-pointer accent-secondary bg-navy-light/60"
    />
    <div className="flex justify-between mt-1 text-cream/30 text-[10px]">
      <span>{formatValue(min)}</span>
      <span>{formatValue(max)}</span>
    </div>
  </div>
);

const ResultRow = ({
  label, value, sub, danger
}: {
  label: string; value: string; sub: string; danger?: boolean;
}) => (
  <div>
    <div className="text-cream/50 text-sm mb-1">{label}</div>
    <div className="flex items-baseline gap-1">
      <span className={`font-display text-2xl font-bold ${danger ? "text-primary" : "text-cream"}`}>{value}</span>
      <span className="text-cream/40 text-sm">{sub}</span>
    </div>
  </div>
);

export default ROICalculator;
