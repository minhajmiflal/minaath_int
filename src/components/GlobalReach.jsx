import SectionHeading from './SectionHeading';
import StatsBlock from './StatsBlock';
import TradeRouteMap from './TradeRouteMap';

export default function GlobalReach() {
  return (
    <section id="global" className="container-site py-24" aria-labelledby="global-heading">
      <SectionHeading headingId="global-heading" eyebrow="Global Reach" title="A network that works." description="From Dubai's Jebel Ali to the Port of Colombo, from European distribution hubs to East African markets — we operate where it matters." />
      <div className="mt-8"><StatsBlock stats={[['25+', 'Countries Served'], ['7', 'Operating Verticals'], ['150+', 'Trusted Partners'], ['100%', 'Origin Verified']]} /></div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-300/20 bg-white/5 p-6 text-slate-200/90">Our headquarters in Dubai gives Miraath International access to the world's most efficient trade infrastructure — Jebel Ali Port, DXB and DWC airports, free-zone status, and a banking system built around international commerce. We are positioned where 60% of the world's population sits within an eight-hour flight.</div>
        <TradeRouteMap />
      </div>
    </section>
  );
}
