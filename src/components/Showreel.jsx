import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from '@phosphor-icons/react';
import { useReveal } from '../hooks/useReveal.js';

const YOUTUBE_ID = 'uUCeWzxNOss';
const POSTER = `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

export default function Showreel() {
  const [ref, inView] = useReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="showreel" ref={ref} className="relative overflow-hidden bg-ink-950 py-32 md:py-40">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(93,195,215,0.18), transparent 60%)', filter: 'blur(80px)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.15), transparent 60%)', filter: 'blur(80px)' }} />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="section-eyebrow">Showreel · 2026</span>
          <h2 className="font-name mt-8 text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl text-glow-cyan">
            <span className="block">A film by</span>
            <span className="block display-serif cyan-text mt-2">J.M. Onana Kono.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm text-white/65">
            Animation 3D, Unreal Engine, character work et direction visuelle — condensés en une séquence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
          className="bezel relative"
        >
          <div className="bezel-core aspect-video">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="KON'art — Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group relative h-full w-full"
                aria-label="Lire le showreel"
              >
                <img
                  src={POSTER}
                  alt="KON'art Showreel"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Letterbox bars */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/95 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/95 to-transparent" />

                {/* Cinema marks */}
                <div className="absolute top-3 left-3 hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.42em] text-white/70">
                  <span className="block h-1.5 w-1.5 rounded-full bg-ember-500 animate-ping-slow" />
                  <span>Rec · 2026</span>
                </div>
                <div className="absolute top-3 right-3 hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.42em] text-white/70">
                  <span>4K · 24 FPS</span>
                  <span className="text-cyan-400">●</span>
                </div>

                {/* Multi-ring play button */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="relative flex h-28 w-28 items-center justify-center md:h-36 md:w-36">
                    <span className="absolute inset-0 rounded-full border border-cyan-400/40 animate-ping-slow" />
                    <span className="absolute inset-2 rounded-full border border-cyan-400/30 animate-ping-slow" style={{ animationDelay: '-1s' }} />
                    <span className="absolute inset-4 rounded-full border border-white/15" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/50 bg-ink-950/60 backdrop-blur-md transition-all duration-700 group-hover:bg-cyan-500/30 group-hover:border-cyan-300 md:h-24 md:w-24">
                      <Play size={32} weight="fill" className="text-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 md:p-9">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.42em] text-cyan-300">Featured · 2026</div>
                    <div className="logo-text mt-2 text-2xl text-white md:text-4xl">SHOWREEL</div>
                    <div className="mt-1 text-sm text-white/65">Animation 3D · Unreal · Direction visuelle</div>
                  </div>
                </div>
              </button>
            )}
          </div>
        </motion.div>

        {/* Metadata strip */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cyan-500/[0.12] bg-cyan-500/[0.02] md:grid-cols-4">
          <div className="bg-ink-950 p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300/70">Réalisation</div>
            <div className="mt-1 text-sm text-white">J.M. Onana Kono</div>
          </div>
          <div className="bg-ink-950 p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300/70">Outils</div>
            <div className="mt-1 text-sm text-white">Maya · Unreal · Toon Boom</div>
          </div>
          <div className="bg-ink-950 p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300/70">Disponibilité</div>
            <div className="mt-1 text-sm text-white">Freelance · Lyon</div>
          </div>
          <div className="bg-ink-950 p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300/70">Année</div>
            <div className="mt-1 font-mono text-sm text-cyan-300">2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
