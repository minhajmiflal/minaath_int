import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Header({ links, activeSection, open, setOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl transition ${scrolled ? 'border-slate-300/30 bg-midnight/90 shadow-glass' : 'border-slate-300/15 bg-midnight/70'}`}>
        <button className="text-left" onClick={() => jump('home')}>
          <p className="font-serif text-lg tracking-wide text-pearl">MIRAATH INTERNATIONAL</p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-silver">A Diversified Global Enterprise</p>
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => jump(link.id)}
              className={`text-sm transition ${activeSection === link.id ? 'text-champagne' : 'text-slate-100 hover:text-champagne'}`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => jump('contact')} className="rounded-full border border-champagne/60 px-4 py-2 text-sm text-champagne hover:bg-champagne/10">Partner With Us</button>
        </nav>

        <button className="text-pearl lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-300/20 bg-midnight/95 p-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <button key={link.id} onClick={() => jump(link.id)} className="rounded-lg px-3 py-2 text-left text-slate-100 hover:bg-white/10">
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
