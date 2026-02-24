import { useState } from "react";

const lotData = [
  { id: "L-4821", source: "Vinalhaven Co-op", lbs: 2400, grade: "Select", tankTemp: 38.2, hours: 14, shrinkPct: 1.2, risk: "low", estLoss: "$172" },
  { id: "L-4819", source: "Stonington Wharf", lbs: 1850, grade: "Cull", tankTemp: 41.8, hours: 38, shrinkPct: 4.7, risk: "high", estLoss: "$623" },
  { id: "L-4817", source: "Friendship Trap", lbs: 3100, grade: "Hard", tankTemp: 39.1, hours: 22, shrinkPct: 2.1, risk: "medium", estLoss: "$465" },
  { id: "L-4815", source: "Jonesport Buy", lbs: 1200, grade: "New Shell", tankTemp: 42.3, hours: 46, shrinkPct: 6.8, risk: "high", estLoss: "$584" },
  { id: "L-4812", source: "Beals Island", lbs: 2750, grade: "Select", tankTemp: 37.9, hours: 8, shrinkPct: 0.4, risk: "low", estLoss: "$79" },
  { id: "L-4810", source: "Swan's Island Co-op", lbs: 1600, grade: "Hard", tankTemp: 40.5, hours: 31, shrinkPct: 3.3, risk: "medium", estLoss: "$378" },
];

const riskBadge = (risk: string) => {
  const cls = risk === "high" ? "badge-risk-high" : risk === "medium" ? "badge-risk-medium" : "badge-risk-low";
  return <span className={cls}>{risk === "high" ? "⚠ HIGH" : risk === "medium" ? "● MED" : "✓ LOW"}</span>;
};

const LotCard = ({ lot }: { lot: typeof lotData[0] }) => (
  <div className={`p-3 rounded-lg border ${lot.risk === "high" ? "border-primary/30 bg-primary/5" : "border-navy-light/20 bg-navy-light/10"}`}>
    <div className="flex items-center justify-between mb-2">
      <span className="font-mono text-secondary text-sm">{lot.id}</span>
      {riskBadge(lot.risk)}
    </div>
    <div className="text-cream/80 text-sm mb-2">{lot.source}</div>
    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
      <div className="text-cream/45">Lbs</div>
      <div className="text-cream/80 font-mono text-right">{lot.lbs.toLocaleString()}</div>
      <div className="text-cream/45">Grade</div>
      <div className="text-cream/60 text-right">{lot.grade}</div>
      <div className="text-cream/45">Temp °F</div>
      <div className={`font-mono text-right ${lot.tankTemp > 41 ? "text-primary" : "text-cream/70"}`}>{lot.tankTemp}</div>
      <div className="text-cream/45">Hold Hrs</div>
      <div className={`font-mono text-right ${lot.hours > 36 ? "text-primary" : "text-cream/70"}`}>{lot.hours}</div>
      <div className="text-cream/45">Shrink %</div>
      <div className={`font-mono text-right ${lot.shrinkPct > 4 ? "text-primary font-bold" : "text-cream/70"}`}>{lot.shrinkPct}%</div>
      <div className="text-cream/45">Est. Loss</div>
      <div className={`font-mono text-right ${lot.risk === "high" ? "text-primary font-bold" : "text-cream/70"}`}>{lot.estLoss}</div>
    </div>
  </div>
);

const DashboardMockup = () => {
  const [activeTab, setActiveTab] = useState("lots");

  return (
    <div className="rounded-xl border border-navy-light/30 bg-navy shadow-2xl overflow-hidden font-body w-full">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-navy-light/40 border-b border-navy-light/30">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/60" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/60" />
        </div>
        <div className="flex-1 flex justify-center min-w-0">
          <div className="bg-navy-light/60 rounded-md px-3 sm:px-4 py-1 text-[10px] sm:text-xs text-cream/60 font-mono truncate">
            app.shrinkguard.com/dashboard
          </div>
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-navy-light/30 min-w-0">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="font-display font-bold text-cream text-xs sm:text-sm tracking-tight shrink-0">ShrinkGuard™</span>
          <span className="text-cream/40 text-xs hidden sm:inline">|</span>
          <span className="text-cream/50 text-xs hidden sm:inline truncate">Harbor Lobster Co.</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] sm:text-xs text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">All tanks online</span>
            <span className="sm:hidden">Online</span>
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-navy-light/20">
        {[
          { label: "Active Lots", value: "23", sub: "+4 today" },
          { label: "Total Inventory", value: "12,900 lbs", sub: "$79,422 value" },
          { label: "Avg Shrink Rate", value: "2.8%", sub: "↓ 0.4% vs last week", good: true },
          { label: "Est. Loss (7d)", value: "$2,301", sub: "↑ from $1,890", bad: true },
        ].map((stat, i) => (
          <div key={i} className="bg-navy px-3 py-2.5 sm:py-3">
            <div className="text-cream/45 text-[9px] sm:text-[10px] uppercase tracking-wider">{stat.label}</div>
            <div className={`font-display font-bold text-xs sm:text-sm mt-0.5 ${stat.bad ? 'text-primary' : 'text-cream'}`}>{stat.value}</div>
            <div className={`text-[9px] sm:text-[10px] mt-0.5 truncate ${stat.good ? 'text-emerald-400' : stat.bad ? 'text-primary/70' : 'text-cream/35'}`}>{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-navy-light/30">
        {["lots", "tanks", "alerts"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-medium capitalize transition-colors ${
              activeTab === tab
                ? "text-cream border-b-2 border-secondary"
                : "text-cream/40 hover:text-cream/60"
            }`}
          >
            {tab === "alerts" ? `Alerts (3)` : tab === "lots" ? "Active Lots" : "Tank Status"}
          </button>
        ))}
      </div>

      {/* Table - desktop, Card layout - mobile */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-cream/40 text-[10px] uppercase tracking-wider border-b border-navy-light/20">
              <th className="text-left px-3 py-2 font-medium">Lot</th>
              <th className="text-left px-3 py-2 font-medium">Source</th>
              <th className="text-right px-3 py-2 font-medium">Lbs</th>
              <th className="text-left px-3 py-2 font-medium">Grade</th>
              <th className="text-right px-3 py-2 font-medium">Temp °F</th>
              <th className="text-right px-3 py-2 font-medium">Hold Hrs</th>
              <th className="text-right px-3 py-2 font-medium">Shrink %</th>
              <th className="text-left px-3 py-2 font-medium">Risk</th>
              <th className="text-right px-3 py-2 font-medium">Est. Loss</th>
            </tr>
          </thead>
          <tbody>
            {lotData.map((lot) => (
              <tr
                key={lot.id}
                className={`border-b border-navy-light/10 ${
                  lot.risk === "high" ? "bg-primary/5" : ""
                } hover:bg-navy-light/20 transition-colors`}
              >
                <td className="px-3 py-2 font-mono text-secondary">{lot.id}</td>
                <td className="px-3 py-2 text-cream/80">{lot.source}</td>
                <td className="px-3 py-2 text-right text-cream/80 font-mono">{lot.lbs.toLocaleString()}</td>
                <td className="px-3 py-2 text-cream/60">{lot.grade}</td>
                <td className={`px-3 py-2 text-right font-mono ${lot.tankTemp > 41 ? "text-primary" : "text-cream/70"}`}>
                  {lot.tankTemp}
                </td>
                <td className={`px-3 py-2 text-right font-mono ${lot.hours > 36 ? "text-primary" : "text-cream/70"}`}>
                  {lot.hours}
                </td>
                <td className={`px-3 py-2 text-right font-mono ${lot.shrinkPct > 4 ? "text-primary font-bold" : "text-cream/70"}`}>
                  {lot.shrinkPct}%
                </td>
                <td className="px-3 py-2">{riskBadge(lot.risk)}</td>
                <td className={`px-3 py-2 text-right font-mono ${lot.risk === "high" ? "text-primary font-bold" : "text-cream/70"}`}>
                  {lot.estLoss}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="sm:hidden flex flex-col gap-2 p-3">
        {lotData.map((lot) => (
          <LotCard key={lot.id} lot={lot} />
        ))}
      </div>

      {/* Alert bar */}
      <div className="px-3 py-2 bg-primary/10 border-t border-primary/20 flex items-start sm:items-center gap-2">
        <span className="text-primary text-xs font-semibold shrink-0">⚠ ALERT:</span>
        <span className="text-cream/70 text-[11px] sm:text-xs leading-relaxed">Lot L-4815 (Jonesport) holding 46hrs at 42.3°F — recommend immediate sale or re-tank. Est. loss climbing $12/hr.</span>
      </div>
    </div>
  );
};

export default DashboardMockup;
