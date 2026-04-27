import SectionHeading from './SectionHeading';

const options = ['General Partnership', 'Export Products', 'Gems & Jewelry', 'Logistics', 'Investment', 'Supplier Inquiry', 'Foundation'];

export default function Contact() {
  return (
    <section id="contact" className="container-site py-24">
      <SectionHeading eyebrow="Contact" title="Let’s build something that lasts." description="Whether you're a buyer, a supplier, an investor, or a partner — Miraath International is open for conversation. Tell us what you're looking for; we'll tell you how we can help." />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="panel text-slate-200/90 space-y-3"><p>Email: info@miraathint.com</p><p>Phone: +971 4 XXX XXXX</p><p>Office: Dubai, United Arab Emirates</p><p>Website: miraathint.com</p></div>
        <form className="panel space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input className="field" placeholder="Name" aria-label="Name" required />
          <input className="field" placeholder="Company" aria-label="Company" required />
          <input type="email" className="field" placeholder="Email" aria-label="Email" required />
          <select className="field" aria-label="Inquiry Type" defaultValue=""><option value="" disabled>Inquiry Type</option>{options.map((item)=><option key={item}>{item}</option>)}</select>
          <textarea className="field min-h-32" placeholder="Message" aria-label="Message" required />
          <button className="btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
