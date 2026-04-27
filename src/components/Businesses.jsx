import SectionHeading from './SectionHeading';
import BusinessCard from './BusinessCard';

export default function Businesses({ items }) {
  return (
    <section id="businesses" className="container-site py-24">
      <SectionHeading eyebrow="Businesses" title="Seven verticals. One vision." description="Each Miraath subsidiary operates with focused expertise — together they form an integrated ecosystem that moves goods, capital, and value across borders with purpose and precision." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => <BusinessCard key={item.name} item={item} />)}
      </div>
    </section>
  );
}
