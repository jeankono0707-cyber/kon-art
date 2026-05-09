import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from '@phosphor-icons/react';
import { useReveal } from '../hooks/useReveal.js';

// === "A film by" — 3 films alignés (les 3 plus importants)
const HERO_FILMS = [
  {
    id: 'who-uucewzxnoss',
    title: 'WHO...',
    subtitle: 'Latest · 2026',
    desc: "Travail le plus récent — direction visuelle, animation et lighting cinématographique.",
    type: 'youtube',
    videoId: 'uUCeWzxNOss',
    aspect: 'aspect-video',
    year: '2026',
    genre: 'Latest',
    accent: 'cyan',
  },
  {
    id: 'angle-mort-film',
    title: 'ANGLE MORT',
    subtitle: 'Unreal Engine · Niagara FX',
    desc: 'Effets sous-marins sous Unreal Engine — animation, design et lighting.',
    type: 'youtube',
    videoId: 'Nfov-XbEgww',
    aspect: 'aspect-video',
    year: '2025',
    genre: 'Unreal cinematic',
    accent: 'cyan',
  },
  {
    id: 'mystere-film',
    title: 'Mystère',
    subtitle: 'Court métrage 3D',
    desc: 'Court métrage mettant en scène les mystères de la vie dans une nature calme et féerique.',
    type: 'youtube',
    videoId: 'abEKVlGuHPM',
    aspect: 'aspect-video',
    year: '2024',
    genre: 'Short film',
    accent: 'ember',
  },
];

// === Selected Films — autres réalisations (pas de doublon avec les 3 ci-dessus)
const SELECTED_FILMS = [
  {
    id: 'showreel-2026',
    title: 'Showreel 2026',
    subtitle: "Director's reel",
    desc: "Le showreel principal — 3D Generalist · Animation · Direction visuelle.",
    type: 'youtube',
    videoId: '6pgIvI6vrPE',
    aspect: 'aspect-video',
    year: '2026',
    genre: 'Showreel',
    accent: 'cyan',
    featured: true,
  },
  {
    id: 'sprint',
    title: 'Sprint créatif',
    subtitle: 'Quick work · 1 semaine',
    desc: "Démonstration de production rapide : test créatif, animation et lighting réalisés en une semaine.",
    type: 'youtube',
    videoId: 'GHjD8A-zL0k',
    aspect: 'aspect-video',
    year: '2025',
    genre: 'Experimental sequence',
    accent: 'ember',
  },
  {
    id: 'skyrock',
    title: 'Collaboration Skyrock',
    subtitle: 'Brand content · Client',
    desc: "Visuels et animations 3D pour les contenus médias et la communication Skyrock.",
    type: 'youtube',
    videoId: 'iv-yKRtIgnE',
    aspect: 'aspect-video',
    year: '2024',
    genre: 'Music / Brand',
    accent: 'cyan',
  },
  {
    id: 'master-film',
    title: "Film de fin d'études",
    subtitle: 'MOPA Arles · Master',
    desc: "Réalisation, direction artistique, storytelling et animation. Le projet d'auteur qui résume mon parcours.",
    type: 'youtube',
    videoId: 'NNmw87qh4qQ',
    aspect: 'aspect-video',
    year: '2023',
    genre: 'Short film',
    accent: 'cyan',
  },
  {
    id: 'short',
    title: 'Format vertical',
    subtitle: 'Short · Social content',
    desc: 'Contenu vertical 9:16 pensé pour les formats sociaux — Reels, TikTok, Shorts.',
    type: 'youtube',
    videoId: 'nJYq1QjrHTk',
    aspect: 'aspect-[9/16]',
    year: '2025',
    genre: 'Social · 9:16',
    accent: 'ember',
  },
];

function FilmCard({ film, onOpen, index, large }) {
  const isVertical = film.aspect.includes('9/16');
  const accentText = film.accent === 'ember' ? 'text-ember-400' : 'text-cyan-300';
  const accentBorder = film.accent === 'ember' ? 'border-ember-500/40' : 'border-cyan-400/40';

  const poster = film.type === 'youtube'
    ? `https://i.ytimg.com/vi/${film.videoId}/maxresdefault.jpg`
    : 'https://cdna.artstation.com/p/assets/images/images/040/842/452/large/jean-marie-onana-kono-face2.jpg?1630013790';

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(film)}
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
      className={`bezel group block text-left ${film.featured ? 'md:col-span-2' : ''}`}
    >
      <div className={`bezel-core ${film.aspect}`}>
        <img
          src={poster}
          alt={film.title}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06] group-hover:saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="absolute inset-0 bg-ink-950/15 transition-opacity duration-700 group-hover:bg-ink-950/0" />

        {/* Cinema bars on the wide hero cards for film feel */}
        {large && (
          <>
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/90 to-transparent" />
          </>
        )}

        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className={`rounded-full border ${accentBorder} bg-ink-950/60 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest2 ${accentText} backdrop-blur-sm md:text-[10px]`}>
            {film.genre}
          </span>
          <span className="font-mono text-[10px] text-white/55">{film.year}</span>
        </div>

        <div className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-ink-950/40 backdrop-blur-sm transition-all duration-700 group-hover:border-cyan-300 group-hover:bg-cyan-500/20">
          <Play size={14} weight="fill" className="text-cyan-300 translate-x-0.5" />
        </div>

        <div className={`absolute inset-x-5 ${isVertical ? 'bottom-20' : 'bottom-6'}`}>
          <div className={`font-mono text-[10px] uppercase tracking-widest2 ${accentText}`}>{film.subtitle}</div>
          <h4 className={`mt-2 font-name font-semibold text-white ${large ? 'text-2xl md:text-3xl' : film.featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
            {film.title}
          </h4>
        </div>
      </div>
    </motion.button>
  );
}

export default function Showreel() {
  const [ref, inView] = useReveal();
  const [open, setOpen] = useState(null);

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

  const lightboxSrc = open
    ? open.type === 'drive'
      ? `https://drive.google.com/file/d/${open.videoId}/preview`
      : `https://www.youtube-nocookie.com/embed/${open.videoId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  return (
    <section id="showreel" ref={ref} className="relative overflow-hidden bg-ink-950 py-32 md:py-40">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(93,195,215,0.18), transparent 60%)', filter: 'blur(80px)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.15), transparent 60%)', filter: 'blur(80px)' }} />

      <div className="container-x">
        {/* ============================================ */}
        {/* HERO "A film by" — 3 films alignés            */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Featured · A film by</span>
            <h2 className="font-name mt-8 text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl text-glow-cyan">
              <span className="block">A film by</span>
              <span className="block display-strong text-cyan-300 mt-3">J.M. Onana Kono.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-white/75 max-w-[50ch]">
              Animation 3D · Direction visuelle · Storytelling. Trois films représentatifs —
              du travail le plus récent au court métrage personnel.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-widest2 text-white/55 font-mono">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/[0.06] px-3 py-1 text-cyan-300">3 Films</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">2024 → 2026</span>
              <span className="rounded-full border border-ember-500/30 bg-ember-500/[0.06] px-3 py-1 text-ember-400">Director · 3D Generalist</span>
            </div>
          </div>
        </motion.div>

        {/* 3-card hero grid — Who / ANGLE MORT / Mystère */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-6"
        >
          {HERO_FILMS.map((film, i) => (
            <FilmCard key={film.id} film={film} index={i} onOpen={setOpen} large />
          ))}
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

        {/* ============================================ */}
        {/* SELECTED FILMS — gallery (sans doublons)      */}
        {/* ============================================ */}
        <div id="showreel-films" className="mt-32 md:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="grid items-end gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <span className="section-eyebrow">Selected Films</span>
              <h3 className="font-name mt-6 text-4xl font-semibold leading-[0.95] tracking-tight text-white md:text-6xl">
                Showreel, cinematics, <span className="display-strong text-ember-400">expérimentations.</span>
              </h3>
            </div>
            <p className="text-base leading-relaxed text-white/70 lg:col-span-5 max-w-[55ch]">
              Mon showreel actuel, brand content, court métrage de fin d'études, expérimentations rapides
              et formats sociaux. Cliquez pour lancer la lecture en plein écran.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SELECTED_FILMS.map((film, i) => (
              <FilmCard key={film.id} film={film} index={i} onOpen={setOpen} />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="max-w-md text-sm text-white/55">
              Vous avez un projet de film, clip, brand content ou cinematic Unreal ?
            </p>
            <a href="#contact" className="btn-primary">
              <span className="pl-1">Discutons de votre film</span>
              <span className="btn-trail">
                <ArrowUpRight size={14} weight="light" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== Lightbox ===== */}
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
              className={`bezel relative w-full ${open.aspect.includes('9/16') ? 'max-w-md' : 'max-w-6xl'}`}
            >
              <div className={`bezel-core ${open.aspect}`}>
                <iframe
                  src={lightboxSrc}
                  title={open.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="mt-6 flex flex-col justify-between gap-3 px-2 md:flex-row md:items-end">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300">{open.subtitle} · {open.year}</div>
                  <h3 className="mt-2 font-name text-2xl font-semibold text-white md:text-3xl">{open.title}</h3>
                </div>
                <p className="max-w-md text-sm text-white/65">{open.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
