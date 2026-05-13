import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal.js';
import { TextScramble } from './ui/text-scramble.tsx';

const stats = [
  { num: '5+', label: 'Années en production' },
  { num: '8', label: 'Studios collaborés' },
  { num: 'MOPA', label: 'Master Animation 3D' },
  { num: 'Lyon', label: 'Basé en France' },
];

export default function About() {
  const [ref, inView] = useReveal();

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-ink-900 py-32 md:py-40">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(93,195,215,0.18), transparent 60%)', filter: 'blur(80px)' }} />
      <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.12), transparent 60%)', filter: 'blur(80px)' }} />

      <div className="container-x relative grid gap-16 lg:grid-cols-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-5"
        >
          <span className="section-eyebrow">À propos</span>
          <h2 className="font-name mt-8 text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
            <TextScramble text="Donner vie aux" />
            <br />
            <TextScramble text="histoires." className="display-strong text-ember-400" />
          </h2>
          <p className="mt-8 max-w-[55ch] text-base leading-relaxed text-white/65">
            Artiste 3D polyvalent, je suis spécialisé en <strong className="font-semibold text-white">animation</strong>,
            <strong className="font-semibold text-white"> storyboard</strong> et
            <strong className="font-semibold text-white"> direction visuelle</strong>. Passionné
            par la narration et la création d'univers, j'interviens sur toute la chaîne de
            production — de la conception à la finalisation.
          </p>
          <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-white/65">
            Formé à <strong className="font-semibold text-white">MOPA Arles</strong> (Master)
            et à <strong className="font-semibold text-white">YNOV Lyon</strong> (Bachelor),
            j'ai travaillé pour DOM FRED FILMS, Skyrock, ULTIMA VACCAE, Jumbo MANA, REC'IM
            et d'autres studios. Créatif, autonome et rigoureux — j'aime collaborer avec des
            équipes talentueuses pour donner vie à des histoires fortes et mémorables.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['Maya', 'iClone 8', 'Unreal Engine', 'Toon Boom', 'ZBrush', 'Arnold', 'V-Ray'].map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-widest2 text-white/60">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-7"
        >
          {/* Featured portrait — Jean Marie Onana Kono */}
          <div className="bezel group block">
            <div className="bezel-core aspect-[4/5] lg:aspect-[5/6]">
              <img
                src="/PORTRAIT2.jpg"
                alt="Jean Marie Onana Kono — 3D Generalist · Animateur 3D"
                className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">Portrait · 3D Artist</div>
                  <div className="logo-text text-xl text-white mt-1">J.M. ONANA KONO</div>
                </div>
                <div className="font-mono text-xs text-white/60">Lyon · 2026</div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.32, 0.72, 0, 1] }}
                className={`border-t pt-5 ${i % 2 === 0 ? 'border-cyan-500/30' : 'border-ember-500/30'}`}
              >
                <div className={`display text-3xl md:text-4xl ${i % 2 === 0 ? 'cyan-text' : 'ember-text'}`}>{s.num}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/50">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
