import SectionHeading from './SectionHeading';
import StatsBlock from './StatsBlock';

export default function GlobalReach() {
  return (
    <section id="global" className="container-site py-24">
      <SectionHeading eyebrow="Global Reach" title="A network that works." description="From Dubai's Jebel Ali to the Port of Colombo, from European distribution hubs to East African markets — we operate where it matters." />
      <div className="mt-8"><StatsBlock stats={[['25+', 'Countries Served'], ['7', 'Operating Verticals'], ['150+', 'Trusted Partners'], ['100%', 'Origin Verified']]} /></div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-300/20 bg-white/5 p-6 text-slate-200/90">Our headquarters in Dubai gives Miraath International access to the world's most efficient trade infrastructure — Jebel Ali Port, DXB and DWC airports, free-zone status, and a banking system built around international commerce. We are positioned where 60% of the world's population sits within an eight-hour flight.</div>
        <div className="rounded-2xl border border-slate-300/20 bg-[#08192f] p-4">
          <svg viewBox="0 0 600 280" className="h-full w-full">
            <rect width="600" height="280" fill="transparent" />
            <g stroke="#4ed0c8" strokeOpacity="0.5" fill="none">
              <path d="M140 140 Q 300 40 340 120" />
              <path d="M340 120 Q 420 80 520 130" />
              <path d="M340 120 Q 430 170 500 200" />
              <path d="M340 120 Q 260 180 190 210" />
            </g>
            <circle cx="340" cy="120" r="7" fill="#c9ae7b" />
            <text x="350" y="116" fill="#e8eef8" fontSize="13">Dubai</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
