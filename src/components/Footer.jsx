export default function Footer() {
  return (
    <footer className="border-t border-slate-300/20 bg-[#050c19]">
      <div className="container-site py-12">
        <p className="max-w-2xl text-slate-300">A diversified global enterprise. Trade as heritage, commerce with conscience — operating from Dubai to the world.</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-silver">
          <div><h4 className="footer-title">Businesses</h4><ul><li>Miraath Mart</li><li>Miraath Mercantile</li><li>Miraath Global Trade</li><li>Miraath Heritage Gems</li><li>Miraath Origins</li><li>Miraath Freightlink</li></ul></div>
          <div><h4 className="footer-title">Company</h4><ul><li>About Us</li><li>Sustainability</li><li>Foundation</li><li>Leadership</li><li>Careers</li><li>News</li></ul></div>
          <div><h4 className="footer-title">Resources</h4><ul><li>Product Catalogue</li><li>B2B Partnerships</li><li>Investor Relations</li><li>Compliance</li></ul></div>
          <div><h4 className="footer-title">Legal</h4><p>© 2026 Miraath International. All rights reserved.</p><p className="mt-2">Privacy · Terms · Cookies</p></div>
        </div>
      </div>
    </footer>
  );
}
