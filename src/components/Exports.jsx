import SectionHeading from './SectionHeading';
import ProductCard from './ProductCard';

export default function Exports({ products }) {
  return (
    <section id="exports" className="container-site py-24">
      <SectionHeading headingId="exports-heading" eyebrow="Miraath Origins" title="From the island of Ceylon." description="Sri Lanka has been a crossroads of the spice and gem trade for two thousand years. We bring its finest produce to the world — sourced directly from farmers, processed to international standards, exported with full traceability." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((item) => <ProductCard key={item.title} item={item} />)}
      </div>
    </section>
  );
}
