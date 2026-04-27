import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PillarCard from './components/PillarCard';
import Businesses from './components/Businesses';
import Exports from './components/Exports';
import GemsJewelry from './components/GemsJewelry';
import Sustainability from './components/Sustainability';
import Foundation from './components/Foundation';
import GlobalReach from './components/GlobalReach';
import MissionVisionValues from './components/MissionVisionValues';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ClosingCTA from './components/ClosingCTA';
import SectionHeading from './components/SectionHeading';
import { businesses, exportProducts, heroStats, navLinks, pillarData } from './data/siteData';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const ids = navLinks.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.45 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-midnight text-white">
      <Header links={navLinks} activeSection={activeSection} open={menuOpen} setOpen={setMenuOpen} />
      <main>
        <Hero stats={heroStats} />
        <AboutSection />

        <section className="container-site py-12" id="pillars">
          <SectionHeading title="The four pillars of Miraath." />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillarData.map((pillar) => <PillarCard key={pillar.title} pillar={pillar} />)}
          </div>
        </section>

        <Businesses items={businesses} />
        <Exports products={exportProducts} />
        <GemsJewelry />
        <Sustainability />
        <Foundation />
        <GlobalReach />
        <MissionVisionValues />
        <ClosingCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
