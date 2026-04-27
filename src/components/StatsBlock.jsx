import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = value.match(/(\d+)/);
    if (!match) return;
    const end = Number(match[1]);
    if (!inView || Number.isNaN(end)) return;

    const controls = animate(0, end, {
      duration: 1.2,
      onUpdate: (latest) => {
        const rounded = Math.round(latest);
        setDisplay(value.replace(/\d+/, String(rounded)));
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return <p ref={ref} className="font-serif text-2xl text-champagne">{display}</p>;
}

export default function StatsBlock({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map(([value, label], idx) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.08 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-300/20 bg-white/5 p-4 backdrop-blur"
        >
          <Counter value={value} />
          <p className="mt-1 text-sm text-silver">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}
