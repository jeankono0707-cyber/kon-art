import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from '@phosphor-icons/react';
import { useReveal } from '../hooks/useReveal.js';

// === Hero film — vidéo principale du portfolio ===
const HERO_FILM = {
  id: 'showreel-main',
  title: 'A film by J.M. Onana Kono',
  tagline: 'Animation 3D · Direction visuelle · Storytelling',
  videoId: 'uUCeWzxNOss',
  type: 'youtube',
  year: '2026',
  role: 'Director · 3D Generalist',
  format: '16:9 · 4K',
};

// === Selected Films — gallery (no duplicates with the rest of the site) ===
const SELECTED_FILMS = [
  {
    id: 'film-cinematic',
    title: 'Cinematic sequence',
    subtitle: 'Réalisation · 3D Generalist',
    desc: "Séquence cinématographique — direction visuelle, lighting et animation.",
    type: 'youtube',
    videoId: 'NNmw87qh4qQ',
    aspect: 'aspect-video',
    year: '2026',
    genre: 'Unreal cinematic',
    accent: 'cyan',
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
    type: 'drive',
    videoId: '1w_2wyvZAC3iCuFi61hVWxccMgghK24zW',
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

function FilmCard({ film, onOpen, index }) {
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
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className="bezel group block text-left"
    >
      <div className={`bezel-core ${film.aspect}`}>
        <img
          src={poster}
          alt={film.title}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06] group-hover:saturate-110"
        />
        {/* Cinematic darken overlay — gives every YouTube poster a cohesive look */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="absolute inset-0 bg-ink-950/15 transition-opacity duration-700 group-hover:bg-ink-950/0" />

        {/* Year + genre top */}
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className={`rounded-full border ${accentBorder} bg-ink-950/60 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest2 ${accentText} backdrop-blur-sm md:text-[10px]`}>
            {film.genre}
          </span>
          <span className="font-mono text-[10px] text-white/55">{film.year}</span>
        </div>

        {/* Play badge */}
        <div className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-ink-950/40 backdrop-blur-sm transition-all duration-700 group-hover:border-cyan-300 group-hover:bg-cyan-500/20">
          <Play size={14} weight="fill" className="text-cyan-300 translate-x-0.5" />
        </div>

        {/* Bottom info */}
        <div className={`absolute inset-x-5 ${isVertical ? 'bottom-20' : 'bottom-6'}`}>
          <div className={`font-mono text-[10px] uppercase tracking-widest2 ${accentText}`}>{film.subtitle}</div>
          <h4 className="mt-2 font-name text-lg font-semibold text-white md:text-xl">{film.title}</h4>
        </div>
      </div>
    </motion.button>
  );
}

export default function Showreel() {
  const [ref, inView] = useReveal();
  const [playing, setPlaying] = useState(false);
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

  const heroPoster = `https://i.ytimg.com/vi/${HERO_FILM.videoId}/maxresdefault.jpg`;

  return (
    <section id="showreel" ref={ref} className="relative overflow-hidden bg-ink-950 py-32 md:py-40">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(93,195,215,0.18), transparent 60%)', filter: 'blur(80px)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.15), transparent 60%)', filter: 'blur(80px)' }} />

      <div className="container-x">
        {/* ============================================ */}
        {/* HERO FILM BLOCK — réalisateur, cinéma         */}
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
              {HERO_FILM.tagline}. Une signature cinématique construite plan par plan,
              de la conception au master final.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-widest2 text-white/55 font-mono">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/[0.06] px-3 py-1 text-cyan-300">{HERO_FILM.format}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">{HERO_FILM.year}</span>
              <span className="rounded-full border border-ember-500/30 bg-ember-500/[0.06] px-3 py-1 text-ember-400">{HERO_FILM.role}</span>
            </div>
          </div>
        </motion.div>

        {/* ===== Main showreel player ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="bezel relative mt-14"
        >
          <div className="bezel-core aspect-video">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${HERO_FILM.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="KON'art — A film by J.M. Onana Kono"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group relative h-full w-full"
                aria-label="Lire le film"
              >
                <img
                  src={heroPoster}
                  alt={HERO_FILM.title}
                  className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Cinematic darken */}
                <div className="absolute inset-0 bg-ink-950/30 transition-opacity duration-700 group-hover:bg-ink-950/10" />
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/95 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/95 to-transparent" />

                <div className="absolute top-3 left-3 hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.42em] text-white/70">
                  <span className="block h-1.5 w-1.5 rounded-full bg-ember-500 animate-ping-slow" />
                  <span>Rec · {HERO_FILM.year}</span>
                </div>
                <div className="absolute top-3 right-3 hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.42em] text-white/70">
                  <span>{HERO_FILM.format}</span>
                  <span className="text-cyan-400">●</span>
                </div>

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

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 md:p-9">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.42em] text-cyan-300">Featured · {HERO_FILM.year}</div>
                    <div className="logo-text mt-2 text-2xl text-white md:text-4xl">SHOWREEL</div>
                    <div className="mt-1 text-sm text-white/65">{HERO_FILM.tagline}</div>
                  </div>
                </div>
              </button>
            )}
          </div>
        </motion.div>

        {/* ===== Metadata strip ===== */}
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
            <div className="mt-1 font-mono text-sm text-cyan-300">{HERO_FILM.year}</div>
          </div>
        </div>

        {/* ============================================ */}
        {/* SELECTED FILMS — vraie galerie cinéma          */}
        {/* ============================================ */}
        <div className="mt-32 md:mt-40">
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
                Cinematics, clips, <span className="display-strong text-ember-400">expérimentations.</span>
              </h3>
            </div>
            <p className="text-base leading-relaxed text-white/70 lg:col-span-5 max-w-[55ch]">
              Cinematics Unreal, brand content, court métrage de fin d'études, expérimentations rapides
              et formats sociaux — un panel de réalisations récentes.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SELECTED_FILMS.map((film, i) => (
              <FilmCard key={film.id} film={film} index={i} onOpen={setOpen} />
            ))}
          </div>

          {/* CTA */}
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
