import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, center = false, headingId }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.28em] text-silver">{eyebrow}</p>}
      <h2 id={headingId} className="font-serif text-3xl leading-tight text-pearl md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-slate-200/90">{description}</p>}
    </motion.div>
  );
}
