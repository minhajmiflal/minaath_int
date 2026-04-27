import SectionHeading from './SectionHeading';

export default function Foundation() {
  return (
    <section id="foundation" className="container-site py-24">
      <SectionHeading headingId="foundation-heading" eyebrow="Miraath Hands Foundation" title="Profit with purpose." description="Every Miraath business carries a quiet obligation — to give back. Through Miraath Hands Foundation, we transform a portion of group profit into measurable change in the lives of the communities behind our supply chains." />
      <p className="mt-6 max-w-4xl text-slate-200/90">This is not a marketing programme. It is a structural commitment, written into how the group operates: a defined share of profit is set aside, year after year, for the foundation to deploy.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="panel"><h4>Education</h4><p>Scholarships, school supply programmes, and digital learning support for the children of farmers, artisans, and producers.</p></article>
        <article className="panel"><h4>Food Security</h4><p>Direct nutrition support and food parcel distribution during seasonal hardship.</p></article>
        <article className="panel"><h4>Livelihood</h4><p>Microgrants, equipment, and training for small producers — helping families build self-sustaining enterprises.</p></article>
      </div>
      <ul className="mt-8 flex flex-wrap gap-3 text-sm text-silver"><li className="pill">Transparent</li><li className="pill">Local partnerships</li><li className="pill">Structural</li><li className="pill">Focused</li></ul>
    </section>
  );
}
