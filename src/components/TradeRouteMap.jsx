import { motion } from 'framer-motion';

const routes = [
  'M130 140 Q 260 40 340 120',
  'M340 120 Q 420 80 520 130',
  'M340 120 Q 430 170 500 200',
  'M340 120 Q 260 180 190 210',
  'M340 120 Q 360 58 420 46',
];

export default function TradeRouteMap() {
  return (
    <div className="rounded-2xl border border-slate-300/20 bg-[#08192f] p-4">
      <svg viewBox="0 0 600 280" className="h-full w-full" role="img" aria-label="Stylized trade map centered on Dubai">
        <rect width="600" height="280" fill="transparent" />
        <g stroke="#4ed0c8" strokeOpacity="0.52" fill="none" strokeWidth="1.3">
          {routes.map((d) => (
            <motion.path key={d} d={d} initial={{ pathLength: 0, opacity: 0.2 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, amount: 0.7 }} transition={{ duration: 1.2 }} />
          ))}
        </g>

        <circle cx="340" cy="120" r="7" fill="#c9ae7b" />
        <text x="350" y="116" fill="#e8eef8" fontSize="13">Dubai</text>
      </svg>
    </div>
  );
}
