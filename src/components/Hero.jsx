import { motion } from 'framer-motion';
import StatsBlock from './StatsBlock';

export default function Hero({ stats }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pt-36">
      <div className="mesh absolute inset-0 opacity-70" />
      <div className="container-site relative grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-silver">A Diversified Global Enterprise</p>
          <h1 className="font-serif text-5xl leading-tight text-pearl md:text-7xl">Trade as heritage. <span className="text-champagne">Commerce with conscience.</span></h1>
          <p className="mt-7 max-w-xl text-lg text-slate-200">Miraath International is a multi-vertical global enterprise that connects markets, moves goods, and builds lasting value — from origin to destination, from artisan to global buyer.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => go('businesses')} className="btn-primary">Explore Our Businesses</button>
            <button onClick={() => go('contact')} className="btn-secondary">Partner With Us</button>
          </div>
          <div className="mt-10"><StatsBlock stats={stats} /></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative">
          <div className="absolute -inset-6 rounded-[2rem] border border-champagne/20 bg-gradient-to-br from-tealdeep/40 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-300/20 bg-slatebrand/20">
            <img loading="eager" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80" alt="Dubai skyline representing Miraath International's strategic base" className="h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-tealdeep/10" />
            <svg className="trade-routes absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
              <path d="M7 70 C 25 25, 65 20, 92 50" />
              <path d="M5 58 C 33 70, 54 18, 90 35" />
              <path d="M14 84 C 35 40, 62 62, 95 22" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
