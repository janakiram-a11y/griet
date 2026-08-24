import { useState, useEffect } from 'react';
import Navbar, { QuickNavBar } from './components/Navbar';
import NavStrip from './components/NavStrip';
import Footer from './components/Footer';

export default function CollegeLayout({ college, children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Hysteresis band (40–80px) instead of a single threshold: shrinking the
    // header changes page layout/scrollY, which can flip a single threshold
    // back and forth on its own and make the header shake in a feedback loop.
    const onScroll = () => {
      setScrolled((prev) => (prev ? window.scrollY > 40 : window.scrollY > 80));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="bg-[#FFFDFC] font-dm-sans"
      style={{
        '--college-primary': college.primaryColor,
        '--college-accent': college.accentColor,
      }}
    >
      <QuickNavBar college={college} />
      <div className="sticky top-0 z-50">
        <Navbar college={college} scrolled={scrolled} />
        <NavStrip college={college} scrolled={scrolled} />
      </div>
      {children}
      <Footer college={college} />
    </div>
  );
}
