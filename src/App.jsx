import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Showreel from './components/Showreel.jsx';
import CV from './components/CV.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  const [loaded, setLoaded] = useState(false);
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1300);
    return () => clearTimeout(t);
  }, []);

  // Cursor spotlight tracking (drives a CSS variable on :root)
  useEffect(() => {
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mx', e.clientX + 'px');
        document.documentElement.style.setProperty('--my', e.clientY + 'px');
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="relative">
      {/* Grain overlay (fixed, perf-safe) */}
      <div className="grain-overlay" aria-hidden />

      {/* Cursor spotlight */}
      <div className="cursor-spot" aria-hidden />

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400 via-cyan-500 to-ember-500"
      />

      {/* Intro overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1, pointerEvents: loaded ? 'none' : 'auto' }}
        transition={{ duration: 0.9, ease: [0.6, 0.01, 0.05, 0.95] }}
        className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950"
      >
        <div className="text-center">
          <motion.div
            initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.1 }}
            className="logo-text text-3xl text-white md:text-5xl"
          >
            KON<span className="logo-accent">·</span>ART
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 font-mono text-[10px] uppercase tracking-[0.42em] text-white/50"
          >
            Jean Marie Onana Kono · 3D Generalist
          </motion.p>
        </div>
      </motion.div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Showreel />
        <CV />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
