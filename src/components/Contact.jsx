import SectionHeading from './SectionHeading';

const options = ['General Partnership', 'Export Products', 'Gems & Jewelry', 'Logistics', 'Investment', 'Supplier Inquiry', 'Foundation'];

export default function Contact() {
  return (
    <section id="contact" className="container-site py-24" aria-labelledby="contact-heading">
      <SectionHeading headingId="contact-heading" eyebrow="Contact" title="Let’s build something that lasts." description="Whether you're a buyer, a supplier, an investor, or a partner — Miraath International is open for conversation. Tell us what you're looking for; we'll tell you how we can help." />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="panel space-y-3 text-slate-200/90">
          <p>Email: info@miraathint.com</p>
          <p>Phone: +971 4 XXX XXXX</p>
          <p>Office: Dubai, United Arab Emirates</p>
          <p>Website: miraathint.com</p>
        </div>
        <form className="panel space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="grid gap-2 text-sm text-silver">Name<input className="field" name="name" required /></label>
          <label className="grid gap-2 text-sm text-silver">Company<input className="field" name="company" required /></label>
          <label className="grid gap-2 text-sm text-silver">Email<input type="email" className="field" name="email" required /></label>
          <label className="grid gap-2 text-sm text-silver">Inquiry Type<select className="field" name="inquiryType" defaultValue="" required><option value="" disabled>Select inquiry type</option>{options.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="grid gap-2 text-sm text-silver">Message<textarea className="field min-h-32" name="message" required /></label>
          <button className="btn-primary w-fit" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
