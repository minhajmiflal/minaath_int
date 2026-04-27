import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCard({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="rounded-2xl border border-slate-300/20 bg-slatebrand/20 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left">
        <img loading="lazy" src={item.image} alt={`${item.title} sourced from Sri Lanka`} className="h-44 w-full object-cover" />
        <div className="p-5">
          <h3 className="font-serif text-2xl text-pearl">{item.title}</h3>
          <p className="text-sm text-champagne">{item.tagline}</p>
          <p className="mt-2 text-slate-200/90">{item.description}</p>
          <span className="mt-3 inline-flex items-center gap-2 text-silver">Details <ChevronDown className={`transition ${open ? 'rotate-180' : ''}`} size={16} /></span>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="grid gap-2 border-t border-slate-300/20 px-5 py-4 text-sm text-slate-200">
            {item.details.map((detail) => <li key={detail}>• {detail}</li>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </article>
  );
}
