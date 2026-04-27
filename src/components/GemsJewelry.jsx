import SectionHeading from './SectionHeading';

const gemstones = ['Ceylon Blue Sapphires', 'Ceylon Yellow Sapphires', 'Padparadscha Sapphires', 'Star Sapphires', 'Star Rubies', 'Rubies', 'Alexandrite', 'Spinel', 'Garnet', 'Moonstone', 'Cat’s Eye'];
const jewelry = ['18K and 22K gold jewelry', 'Diamond jewelry', 'Gemstone jewelry', 'Custom and OEM production', 'Private label supply'];
const trust = ['Direct origin', 'Transparent pricing', 'Certification on request', 'Ethical sourcing', 'Discretion and reliability'];

export default function GemsJewelry() {
  return (
    <section id="gems" className="relative overflow-hidden bg-[#020916] py-24">
      <div className="container-site">
        <SectionHeading headingId="gems-heading" eyebrow="Miraath Heritage Gems" title="Earth’s treasure. Crafted with trust." description="Sri Lanka is one of the world's oldest and most respected sources of fine coloured gemstones. Through Miraath Heritage Gems, we offer direct access to investment-grade stones — sourced at origin, certified by recognised laboratories, priced for the trade." />
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="panel"><h4>Investment Gemstones</h4><ul>{gemstones.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="panel"><h4>B2B Jewelry Supply</h4><p>Miraath Heritage Gems also operates a wholesale jewelry supply line — engineered for jewelry retailers, online brands, and regional wholesalers who need consistent quality at trade prices.</p><ul>{jewelry.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="panel"><h4>Trust Points</h4><ul>{trust.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
