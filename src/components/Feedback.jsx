import { motion } from 'framer-motion';
import { useState } from 'react';
import { RatingInteraction } from './ui/emoji-rating.tsx';
import { useReveal } from '../hooks/useReveal.js';

/**
 * Feedback section — emoji rating widget for visitors.
 * Lightweight, sits between Contact and Footer.
 */
export default function Feedback() {
  const [ref, inView] = useReveal();
  const [rated, setRated] = useState(false);

  const handleRate = (value) => {
    setRated(true);
    // Optionally send to analytics here :
    // window.gtag?.('event', 'rating', { value });
    if (typeof window !== 'undefined' && window.console) {
      console.log('[KON\'art] User rating :', value);
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-white/[0.05] bg-ink-950 py-20 md:py-24">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(93,195,215,0.12), transparent 70%)', filter: 'blur(80px)' }} />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
        className="container-x flex flex-col items-center gap-8 text-center"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-white/45">
          Comment trouvez-vous ce portfolio ?
        </p>

        <RatingInteraction onChange={handleRate} />

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <p
          className={`font-mono text-[11px] uppercase tracking-widest2 transition-all duration-500 ${
            rated ? 'opacity-100 text-cyan-300' : 'opacity-0'
          }`}
        >
          Merci pour votre retour ✦
        </p>
      </motion.div>
    </section>
  );
}
