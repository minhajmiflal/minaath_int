import { motion } from 'framer-motion';

export default function PillarCard({ pillar }) {
  const Icon = pillar.icon;
  return (
    <motion.article whileHover={{ y: -6 }} className="group rounded-2xl border border-slate-300/20 bg-slatebrand/20 p-6 transition hover:border-champagne/40 hover:shadow-glass">
      <Icon className="mb-5 text-champagne" />
      <h3 className="font-serif text-2xl text-pearl">{pillar.title}</h3>
      <p className="mt-3 text-slate-200/90">{pillar.description}</p>
    </motion.article>
  );
}
