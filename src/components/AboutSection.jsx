import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="container-site py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="A name that means legacy."
            description="The word Miraath carries a deep meaning — heritage, inheritance, the things of value passed forward. We chose it because that is what we build: businesses that don't just trade goods, but carry forward trust, craftsmanship, and opportunity across generations."
          />
          <p className="mt-5 text-slate-200/90">
            From our headquarters in Dubai, the world's most strategic crossroads of commerce, Miraath International operates a portfolio of seven complementary enterprises. We connect emerging markets with global demand, source with integrity, and deliver with precision.
          </p>
          <p className="mt-4 text-slate-200/90">
            Our businesses are diverse by design. E-commerce reaches the consumer at home. International trade and exports reach the buyer abroad. Logistics moves what the others sell. Gems and jewelry preserve value. And our charity arm ensures that growth carries others forward with us.
          </p>
          <blockquote className="mt-7 border-l-2 border-champagne pl-5 font-serif text-2xl text-pearl">
            “What we build today becomes the inheritance of tomorrow.”
          </blockquote>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="heritage-frame relative overflow-hidden rounded-[2rem] border border-slate-300/20"
        >
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1551887373-6e6cf0b0f0f3?auto=format&fit=crop&w=1400&q=80"
            alt="Dubai business district and modern architecture"
            className="h-full min-h-[430px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
