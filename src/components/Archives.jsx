import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import { archives, categories } from '../data/portfolio.js';
import { useReveal } from '../hooks/useReveal.js';

/**
 * Old Work / Archives — anciens travaux (avant 2022).
 *
 * Présentation volontairement plus discrète qu'un portfolio premium :
 * thumbnails compactes, glow réduit, ambiance documentaire / timeline.
 * Objectif : montrer l'évolution sans polluer les highlights récents.
 */
export default function Archives() {
  const [ref, inView] = useReveal();

  // Group by year for timeline feel
  const byYear = archives.reduce((acc, item) => {
    (acc[item.year] = acc[item.year] || []).push(item);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a));

  return (
    <section id="archives" ref={ref} className="relative overflow-hidden bg-ink-950 py-24 md:py-32">
      {/* No ambient glow on purpose — section is meant to feel like an archive */}
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
          className="grid items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-white/55">
              Old Work · Archives
            </span>
            <h2 className="font-name mt-6 text-4xl font-semibold leading-[0.95] tracking-tight text-white/80 md:text-5xl">
              Avant 2022 — <span className="text-white/55">l'évolution.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/55 lg:col-span-5 max-w-[55ch]">
            Travaux d'école et premiers projets — conservés ici à titre de timeline.
            Pour le travail récent, voir le <a href="#portfolio" className="text-cyan-300 underline-offset-2 hover:underline">portfolio principal</a>.
          </p>
        </motion.div>

        {/* Timeline grouped by year */}
        <div className="mt-14 space-y-12">
          {years.map((year, yearIdx) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: yearIdx * 0.1, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Year header */}
              <div className="flex items-baseline gap-4 border-b border-white/[0.06] pb-3">
                <span className="font-mono text-2xl font-medium text-white/35">{year}</span>
                <span className="h-px flex-1 bg-white/[0.06]" />
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-white/35">
                  {byYear[year].length} {byYear[year].length > 1 ? 'projets' : 'projet'}
                </span>
              </div>

              {/* Compact grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
                {byYear[year].map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.artstation}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.04, ease: [0.32, 0.72, 0, 1] }}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-xl border border-white/[0.06] bg-ink-900"
                  >
                    <img
                      src={item.poster}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:grayscale-0 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

                    <div className="absolute inset-x-3 bottom-3">
                      <div className="font-mono text-[8px] uppercase tracking-widest2 text-white/45">
                        {categories.find((c) => c.id === item.category)?.label}
                      </div>
                      <h4 className="mt-1 font-name text-xs font-medium text-white/80 md:text-sm">
                        {item.title}
                      </h4>
                    </div>

                    <ArrowUpRight
                      size={12}
                      weight="light"
                      className="absolute right-2 top-2 text-white/30 transition-all duration-500 group-hover:text-cyan-300"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final note */}
        <div className="mt-16 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
          <p className="text-sm text-white/55">
            <span className="font-mono uppercase tracking-widest2 text-white/45">Note</span>
            {' — '}
            Ces travaux datent de mes années de formation (Bachelor YNOV Lyon · début Master MOPA Arles).
            Ils sont conservés pour la transparence du parcours, mais ne reflètent pas mon niveau actuel.
            Voir <a href="#portfolio" className="text-cyan-300 hover:underline">les projets récents</a> pour ma direction artistique 2022–2026.
          </p>
        </div>
      </div>
    </section>
  );
}
