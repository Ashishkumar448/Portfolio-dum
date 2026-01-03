
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import TerminalSection from './components/TerminalSection';
import BentoGallery from './components/BentoGallery';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LinkTree from './components/LinkTree';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-blue-500 selection:text-white overflow-hidden">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <TerminalSection />
      <BentoGallery />
      <Projects />
      <Skills />
      <Experience />
      <Blogs />
      <Contact />
    </main>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<div className="pt-20"><Projects /></div>} />
          <Route path="/blogs" element={<div className="pt-20"><Blogs /></div>} />
          <Route path="/about" element={<div className="pt-20"><About /></div>} />
          <Route path="/contact" element={<div className="pt-20"><Contact /></div>} />
          <Route path="/links" element={<LinkTree />} />
          {/* Add more routes for details if needed, e.g., /projects/:id */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
