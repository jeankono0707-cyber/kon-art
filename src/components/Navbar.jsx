import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, ArrowUpRight } from '@phosphor-icons/react';

const links = [
  { href: '#about',     label: 'À propos' },
  { href: '#services',  label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#showreel',  label: 'Showreel' },
  { href: '#cv',        label: 'CV' },
  { href: '#contact',   label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 1.4, ease: [0.32, 0.72, 0, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6"
      >
        <div className={`flex items-center gap-2 rounded-full border border-white/12 bg-ink-950/70 p-1.5 backdrop-blur-2xl transition-shadow duration-700 ${scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.5)]' : ''}`}>
          <a href="#top" className="flex flex-col items-start rounded-full px-4 py-1">
            <span className="logo-text text-sm leading-none">
              KON<span className="logo-accent">·</span>ART
            </span>
            <span className="font-mono text-[8px] uppercase tracking-widest text-white/45 leading-none mt-1">
              J.M. Onana Kono
            </span>
          </a>

          <nav className="mx-2 hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-3 py-2 text-[13px] text-white/70 transition-colors hover:text-cyan-300">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden lg:inline-flex btn-primary">
            <span className="pl-1">Travailler ensemble</span>
            <span className="btn-trail"><ArrowUpRight size={14} weight="light" /></span>
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
          >
            <List size={20} weight="light" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[70] bg-ink-950/85 backdrop-blur-3xl lg:hidden"
          >
            <div className="container-x flex h-20 items-center justify-between pt-6">
              <a href="#top" onClick={() => setOpen(false)} className="logo-text text-xl">
                KON<span className="logo-accent">·</span>ART
              </a>
              <button
                aria-label="Fermer"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04] text-white"
              >
                <X size={20} weight="light" />
              </button>
            </div>
            <nav className="container-x mt-12 flex flex-col gap-7">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="font-name text-5xl font-semibold text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="btn-primary mt-8 w-fit"
              >
                <span className="pl-1">Travailler ensemble</span>
                <span className="btn-trail"><ArrowUpRight size={14} weight="light" /></span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
