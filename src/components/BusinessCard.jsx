import { motion } from 'framer-motion';

export default function BusinessCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.article whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-2xl border border-slate-300/20 bg-midnight/60">
      <img loading="lazy" src={item.image} alt={`${item.name} activity`} className="h-52 w-full object-cover transition duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
      <div className="relative p-6">
        <span className="text-xs uppercase tracking-[0.24em] text-silver">{item.category}</span>
        <h3 className="mt-2 font-serif text-2xl text-pearl">{item.name}</h3>
        <p className="mt-1 text-sm text-champagne">{item.tagline}</p>
        <p className="mt-3 text-sm text-slate-200/90">{item.description}</p>
        <button className="mt-4 inline-flex items-center gap-2 text-sm text-champagne"><Icon size={16} /> Learn More</button>
      </div>
    </motion.article>
  );
}
