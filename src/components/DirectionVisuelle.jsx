import { motion } from 'framer-motion';
import { Eye, Lightbulb, FrameCorners, Palette as PaletteIcon, Compass, ArrowUpRight } from '@phosphor-icons/react';
import { useReveal } from '../hooks/useReveal.js';

/**
 * Direction Visuelle / Storyboard / Préproduction
 *
 * 5 piliers illustrés par des miniatures concrètes (rendus + images repo),
 * puis galerie "cas d'école" en grille uniforme bien proportionnée.
 */

const PILLARS = [
  {
    icon: Compass,
    title: 'Moodboard',
    desc: "Recherche de références, palette, ambiance. Le point de départ de toute production cohérente.",
    accent: 'cyan',
    thumb: 'https://cdna.artstation.com/p/assets/images/images/040/842/452/large/jean-marie-onana-kono-face2.jpg?1630013790', // Nocturne — character mood reference
  },
  {
    icon: FrameCorners,
    title: 'Cadrage',
    desc: "Choix de la composition de chaque plan : plongée, contre-plongée, focale, ratio. Le cadre raconte avant l'image.",
    accent: 'cyan',
    thumb: 'https://cdna.artstation.com/p/assets/videos/images/087/574/802/large/jean-marie-onana-kono-maxresdefault.jpg?1746137624', // ANGLE MORT — strong cinematography
  },
  {
    icon: Lightbulb,
    title: 'Ambiance lumineuse',
    desc: "Direction d'éclairage cinématographique. Travail sur les contrastes, températures, volumétrie, atmosphère.",
    accent: 'ember',
    thumb: '/IMG_20250221_175147.jpg', // Bar Scene — warm/cool lighting study
  },
  {
    icon: Eye,
    title: 'Intention visuelle',
    desc: "Pourquoi cette image existe : ce qu'elle doit transmettre, faire ressentir, évoquer.",
    accent: 'ember',
    thumb: 'https://cdnb.artstation.com/p/assets/images/images/080/388/929/large/jean-marie-onana-kono-img-20240926-043430.jpg?1727433210', // La colère de Fred — strong emotional intent
  },
  {
    icon: PaletteIcon,
    title: "Cohérence d'univers",
    desc: "Garantir que chaque plan, chaque détail appartient au même monde. Vision globale du premier au dernier frame.",
    accent: 'cyan',
    thumb: 'https://cdnb.artstation.com/p/assets/covers/images/079/775/341/large/jean-marie-onana-kono-jean-marie-onana-kono-screenshot-2024-09-08-15-41-04-525-com-whatsapp.jpg?1725803459', // Mystère — full universe
  },
];

/** Galerie "cas d'école" — grille uniforme 3×2 sans row-span, proportions clean. */
const DEMO_GALLERY = [
  {
    id: 'angle-mort',
    src: 'https://cdna.artstation.com/p/assets/videos/images/087/574/802/large/jean-marie-onana-kono-maxresdefault.jpg?1746137624',
    title: 'ANGLE MORT',
    pillar: 'Ambiance lumineuse',
    href: 'https://www.artstation.com/artwork/8BEVrE',
  },
  {
    id: 'mystere-case',
    src: 'https://cdnb.artstation.com/p/assets/covers/images/079/775/341/large/jean-marie-onana-kono-jean-marie-onana-kono-screenshot-2024-09-08-15-41-04-525-com-whatsapp.jpg?1725803459',
    title: 'Mystère',
    pillar: "Cohérence d'univers",
    href: 'https://www.artstation.com/artwork/AZr58W',
  },
  {
    id: 'colere',
    src: 'https://cdnb.artstation.com/p/assets/images/images/080/388/929/large/jean-marie-onana-kono-img-20240926-043430.jpg?1727433210',
    title: 'La colère de Fred',
    pillar: 'Intention visuelle',
    href: 'https://www.artstation.com/artwork/1Nxv6e',
  },
  {
    id: 'bar-scene',
    src: '/IMG_20250221_175147.jpg',
    title: 'Bar Scene',
    pillar: 'Ambiance lumineuse',
    href: '#portfolio',
  },
  {
    id: 'snowfall',
    src: '/IMG-20240913-WA0019.jpg',
    title: 'Snowfall',
    pillar: 'Moodboard',
    href: '#portfolio',
  },
  {
    id: 'bibliotheque',
    src: 'https://cdnb.artstation.com/p/assets/images/images/037/623/483/large/jean-marie-onana-kono-art2.jpg?1620859230',
    title: 'La Bibliothèque',
    pillar: 'Cadrage',
    href: 'https://www.artstation.com/artwork/d8nVrW',
  },
];

export default function DirectionVisuelle() {
  const [ref, inView] = useReveal();

  return (
    <section id="direction" ref={ref} className="relative overflow-hidden bg-ink-900 py-32 md:py-40">
      <div aria-hidden className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(93,195,215,0.16), transparent 60%)', filter: 'blur(80px)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.12), transparent 60%)', filter: 'blur(80px)' }} />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="grid items-end gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Direction visuelle · Préproduction</span>
            <h2 className="font-name mt-8 text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
              Construire avant
              <br />
              <span className="display-strong text-cyan-300">de produire.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/70 lg:col-span-5 max-w-[55ch]">
            Au-delà des belles images, je construis la <strong className="text-white">narration visuelle</strong> :
            moodboards, cadrage, ambiance, intention, cohérence d'univers.
            La pré-production est ce qui sépare un beau plan d'un plan qui raconte.
          </p>
        </motion.div>

        {/* ===== Pillars (avec miniatures) ===== */}
        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            const accentText = p.accent === 'ember' ? 'text-ember-400' : 'text-cyan-300';
            const accentBorder = p.accent === 'ember' ? 'border-ember-500/40' : 'border-cyan-400/40';
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.32, 0.72, 0, 1] }}
                className="group relative overflow-hidden bg-ink-900 transition-colors duration-700 hover:bg-ink-800"
              >
                {/* Thumbnail at top — small banner that illustrates the pillar */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.thumb}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06] group-hover:saturate-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

                  {/* Floating icon badge top-right of thumb */}
                  <div className={`absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border ${accentBorder} bg-ink-950/70 backdrop-blur-sm`}>
                    <Icon size={16} weight="light" className={accentText} />
                  </div>
                </div>

                {/* Text */}
                <div className="p-7">
                  <h3 className="font-name text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== Galerie cas d'école — grille uniforme 3×2 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="mt-20 mb-10"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300/70">Démonstrations</div>
              <h3 className="mt-3 font-name text-3xl font-semibold leading-[1] tracking-tight text-white md:text-4xl">
                Mes rendus comme <span className="display-strong text-ember-400">cas d'école.</span>
              </h3>
            </div>
            <p className="max-w-md text-sm text-white/60">
              Six images, six compétences concrètes de direction visuelle.
            </p>
          </div>
        </motion.div>

        {/* Grille uniforme — 1 / 2 / 3 colonnes selon viewport, aspect-[4/5] partout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {DEMO_GALLERY.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="bezel group block"
            >
              <div className="bezel-core aspect-[4/5]">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05] group-hover:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

                <span className="absolute right-4 top-4 rounded-full border border-cyan-400/40 bg-ink-950/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-cyan-300 backdrop-blur-sm">
                  {item.pillar}
                </span>

                <div className="absolute inset-x-5 bottom-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300/70">Cas d'étude</div>
                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h4 className="font-name text-lg font-semibold text-white md:text-xl">{item.title}</h4>
                    <ArrowUpRight size={16} weight="light" className="shrink-0 text-white/55 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ===== Note storyboard ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.06] to-ember-500/[0.04] p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300">Storyboard · Préproduction</div>
              <h3 className="mt-3 font-name text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-4xl">
                Je ne fais pas seulement <span className="display-strong text-ember-400">de belles images.</span>
              </h3>
              <p className="mt-5 max-w-[55ch] text-base leading-relaxed text-white/75">
                Mon expérience de <strong className="text-white">Storyboard Artist chez REC'IM</strong> et
                ma formation Master à <strong className="text-white">MOPA Arles</strong> me permettent
                d'intervenir en amont : structurer la narration, valider le rythme, anticiper la production.
              </p>
              <p className="mt-4 max-w-[55ch] text-sm leading-relaxed text-white/65">
                Storyboards plan-par-plan, animatique synchronisée, recommandations de cadrage et d'éclairage —
                pour productions animées, clips, publicités, films de marque.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end">
              <a href="#contact" className="btn-primary self-start">
                <span className="pl-1">Discuter d'un projet</span>
                <span className="btn-trail">
                  <ArrowUpRight size={14} weight="light" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
