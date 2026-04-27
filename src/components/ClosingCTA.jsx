export default function ClosingCTA() {
  return (
    <section className="container-site py-16">
      <div className="rounded-3xl border border-slate-300/20 bg-gradient-to-r from-slatebrand/40 to-tealdeep/30 p-10 text-center">
        <h3 className="font-serif text-4xl text-pearl">Let’s build something that lasts.</h3>
        <p className="mx-auto mt-4 max-w-3xl text-slate-200">
          Whether you're a buyer, a supplier, an investor, or a partner — Miraath International is open for conversation. Tell us what you're looking for; we'll tell you how we can help.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Start a Conversation</button>
          <button onClick={() => document.getElementById('businesses')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">View Our Businesses</button>
        </div>
      </div>
    </section>
  );
}
