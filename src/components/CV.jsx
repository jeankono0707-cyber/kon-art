import { motion } from 'framer-motion';
import { DownloadSimple, FileText, Briefcase, GraduationCap, UsersThree, ArrowUpRight } from '@phosphor-icons/react';
import { useReveal } from '../hooks/useReveal.js';
import { experiences, formations, collaborations } from '../data/cv.js';

export default function CV() {
  const [ref, inView] = useReveal();

  return (
    <section id="cv" ref={ref} className="relative overflow-hidden bg-ink-900 py-32 md:py-40">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="grid items-end gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Parcours</span>
            <h2 className="display mt-6 text-5xl text-white md:text-7xl">
              CV & <span className="display-strong text-cyan-300">expérience.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <a href="/CV-Jean-Marie-Onana-Kono.pdf" download className="btn-primary">
              <span className="pl-1">Télécharger le CV</span>
              <span className="btn-trail">
                <DownloadSimple size={14} weight="light" />
              </span>
            </a>
            <a href="/CV-Jean-Marie-Onana-Kono.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
              <span className="pl-1">Voir en ligne</span>
              <span className="btn-trail">
                <FileText size={14} weight="light" />
              </span>
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Experience timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7"
          >
            <h3 className="mb-10 flex items-center gap-3 text-xs uppercase tracking-widest2 text-cyan-300">
              <Briefcase size={16} weight="light" /> Expériences
            </h3>
            <div className="relative space-y-12 border-l border-white/10 pl-8">
              {experiences.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
                  animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.32, 0.72, 0, 1] }}
                  className="relative"
                >
                  <span className="absolute -left-[35px] top-1.5 flex h-3 w-3 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500/40" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500" />
                  </span>
                  <div className="text-[10px] uppercase tracking-widest2 text-cyan-300 font-mono">{e.period}</div>
                  <h4 className="mt-2 display text-2xl text-white md:text-3xl">{e.role}</h4>
                  <div className="mt-1 text-sm text-white/55">{e.company}</div>
                  <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-white/65">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Formation & collabs — Double-Bezel cards */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="bezel">
              <div className="bezel-core p-8">
                <h3 className="mb-6 flex items-center gap-3 text-xs uppercase tracking-widest2 text-cyan-300">
                  <GraduationCap size={16} weight="light" /> Formations
                </h3>
                <ul className="space-y-5">
                  {formations.map((f, i) => (
                    <li key={i} className="border-l-2 border-cyan-500/40 pl-4">
                      <div className="text-[10px] font-mono uppercase tracking-widest2 text-cyan-300">{f.period}</div>
                      <div className="mt-1 text-sm text-white">{f.title}</div>
                      <div className="text-xs text-white/50">{f.school}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bezel">
              <div className="bezel-core p-8">
                <h3 className="mb-6 flex items-center gap-3 text-xs uppercase tracking-widest2 text-cyan-300">
                  <UsersThree size={16} weight="light" /> Collaborations
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {collaborations.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="h-px w-6 bg-cyan-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
