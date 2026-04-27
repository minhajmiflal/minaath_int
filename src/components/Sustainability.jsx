import SectionHeading from './SectionHeading';

const commitments = [
  ['Local Sourcing First', 'Every Miraath export is sourced from local Sri Lankan farmers and producers.'],
  ['Empowering Small Producers', 'We partner with smallholder cooperatives, family-owned spice gardens, and artisan jewellers.'],
  ['Responsible Stewardship', 'Ethically-traded gemstones, sustainable cinnamon harvesting, paper-based packaging where viable, and consolidated freight to reduce transport emissions.'],
  ['Reinvested Profit', 'A defined portion of group profit flows back through Miraath Hands Foundation to the communities our supply chains depend on.'],
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="container-site py-24">
      <SectionHeading eyebrow="Sustainability" title="Sourced locally. Sold globally." description="Our most powerful sustainability commitment is also our simplest: we source from the small farmers, family workshops, and local cooperatives where our products begin. When local communities prosper, supply chains strengthen — and so does the world." />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {commitments.map(([title, body]) => (
          <article key={title} className="rounded-2xl border border-slate-300/20 bg-white/5 p-6">
            <h3 className="font-serif text-2xl text-pearl">{title}</h3>
            <p className="mt-2 text-slate-200/90">{body}</p>
          </article>
        ))}
      </div>
      <blockquote className="mt-10 border-l-2 border-champagne pl-6 font-serif text-2xl text-pearl">“The cheapest supply chain is rarely the strongest one. We invest in the source, because the source is what we sell.”</blockquote>
    </section>
  );
}
