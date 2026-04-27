import SectionHeading from './SectionHeading';

export default function MissionVisionValues() {
  return (
    <section id="mission" className="container-site py-24">
      <SectionHeading headingId="mission-heading" eyebrow="Mission · Vision · Values" title="Built for generations." />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="panel"><h4>Mission</h4><p>To build a diversified, ethical, and enduring global enterprise — connecting origin to destination, value to value, generation to generation.</p></article>
        <article className="panel"><h4>Vision</h4><p>To become the most trusted name in multi-vertical international trade between South Asia, the Gulf, and the world — and to set the standard for what conscientious commerce looks like in our era.</p></article>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Integrity', 'Our word, in writing or otherwise, is binding. It is the only currency that compounds across decades.'],
          ['Reliability', 'On-time, on-spec, on-budget. The fundamentals, performed without exception, build the trust we run on.'],
          ['Reach', 'A diversified portfolio with deep logistics infrastructure — we go where opportunity is.'],
          ['Stewardship', 'Of capital, of communities, of the planet. We are tenants, not owners, of the world we operate in.'],
        ].map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-300/20 bg-white/5 p-5"><h5 className="font-serif text-xl text-pearl">{title}</h5><p className="mt-2 text-sm text-slate-200/90">{text}</p></article>)}
      </div>
    </section>
  );
}
