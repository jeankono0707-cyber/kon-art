import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from '@phosphor-icons/react';
import { categories, projects } from '../data/portfolio.js';
import { useReveal } from '../hooks/useReveal.js';
import { TextScramble } from './ui/text-scramble.tsx';

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const [open, setOpen] = useState(null);
  const [ref, inView] = useReveal();

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  // ESC to close lightbox
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleOpen = (e, project) => {
    if (project.youtubeId) {
      e.preventDefault();
      setOpen(project);
    }
  };

  return (
    <section id="portfolio" ref={ref} className="relative overflow-hidden bg-ink-950 py-32 md:py-40">
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(93,195,215,0.15), transparent 60%)', filter: 'blur(80px)' }} />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="grid items-end gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Portfolio</span>
            <h2 className="display mt-8 text-5xl text-white md:text-7xl">
              <TextScramble text="Sélection de" /> <TextScramble text="travaux." className="display-strong text-cyan-300" />
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/70 lg:col-span-5 max-w-[55ch]">
            Unreal Engine, character work, environnements 3D, illustration. Chaque card mène à la fiche
            complète sur ArtStation. Cliquez sur les cards vidéo pour les lire ici.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-2"
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2 font-mono text-[12px] uppercase tracking-widest2 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                active === c.id
                  ? 'bg-white text-ink-950'
                  : 'border border-white/12 bg-white/[0.02] text-white/65 hover:border-cyan-500/50 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Mosaic grid */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.artstation}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleOpen(e, p)}
                layout
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.7, delay: i * 0.04, ease: [0.32, 0.72, 0, 1] }}
                className="bezel group block text-left"
              >
                <div className="bezel-core aspect-[4/5]">
                  <img
                    src={p.poster}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-90" />

                  {/* Play badge for videos */}
                  {p.type === 'video' && (
                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-ink-950/40 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-cyan-300 group-hover:bg-cyan-500/20">
                      <Play size={14} weight="fill" className="text-cyan-300" />
                    </div>
                  )}

                  {/* Tags */}
                  {p.tags && (
                    <div className="absolute left-5 top-5 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className="rounded-full border border-white/15 bg-ink-950/60 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest2 text-white/70 backdrop-blur-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="absolute inset-x-6 bottom-6">
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest2 text-cyan-300">
                      <span>{categories.find((c) => c.id === p.category)?.label}</span>
                      <span className="h-px w-6 bg-cyan-500/50" />
                      <span>{p.year}</span>
                    </div>
                    <h3 className="mt-3 logo-text text-xl text-white transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1 md:text-2xl">
                      {p.title}
                    </h3>
                    <div className="mt-1 text-[11px] text-white/55">{p.studio}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA to ArtStation */}
        <div className="mt-16 flex justify-center">
          <a href="https://www.artstation.com/jeankono" target="_blank" rel="noreferrer" className="btn-ghost">
            <span className="pl-1">Portfolio complet sur ArtStation</span>
            <span className="btn-trail">
              <ArrowUpRight size={14} weight="light" />
            </span>
          </a>
        </div>

        {/* Immersive ScrollTiltedGrid section */}
      </div>

      {/* YouTube lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-2xl md:p-10"
          >
            <button
              aria-label="Fermer"
              onClick={() => setOpen(null)}
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <X size={18} weight="light" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0, filter: 'blur(8px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bezel relative w-full max-w-6xl"
            >
              <div className="bezel-core aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${open.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={open.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="mt-6 flex flex-col justify-between gap-3 px-2 md:flex-row md:items-end">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300">
                    {categories.find((c) => c.id === open.category)?.label} · {open.year}
                  </div>
                  <h3 className="mt-2 logo-text text-2xl text-white md:text-3xl">{open.title}</h3>
                  <div className="mt-1 text-sm text-white/55">{open.studio}</div>
                </div>
                <p className="max-w-md text-sm text-white/60">{open.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
