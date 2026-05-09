import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../hooks/useReveal.js';
import { services } from '../data/services.js';
import { ArrowUpRight, X, Check, EnvelopeSimple } from '@phosphor-icons/react';

export default function Services() {
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

  const goToContact = () => {
    setOpen(null);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 350);
  };

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-ink-950 py-32 md:py-40">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7"
          >
            <span className="section-eyebrow">Spécialités</span>
            <h2 className="display mt-6 text-5xl text-white md:text-7xl">
              Ce que je sais <span className="display-strong text-cyan-300">faire.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-base leading-relaxed text-white/65 lg:col-span-5 max-w-[55ch]"
          >
            Animateur 3D et storyboard artist formé à MOPA Arles. J'interviens sur tout le pipeline créatif :
            conception, animation, lighting, rendu. Cliquez sur une carte pour voir le détail du service.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(220px,auto)]">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} inView={inView} onOpen={() => setOpen(s)} />
          ))}
        </div>
      </div>

      {/* ===== Detail modal ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[90] flex items-end justify-center overflow-y-auto bg-ink-950/95 p-4 backdrop-blur-2xl md:items-center md:p-10"
          >
            <button
              aria-label="Fermer"
              onClick={() => setOpen(null)}
              className="fixed right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-900/80 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <X size={18} weight="light" />
            </button>

            <motion.div
              initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bezel relative w-full max-w-3xl"
            >
              <div className="bezel-core p-8 md:p-12">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-500/[0.08]">
                    <open.icon size={24} weight="light" className="text-cyan-300" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-cyan-300">Service · Détail</span>
                </div>

                {/* Title */}
                <h3 className="display mt-6 text-4xl text-white md:text-5xl">
                  {open.title}
                </h3>
                <p className="mt-4 max-w-[60ch] text-base text-white/75">
                  {open.detail.tagline}
                </p>

                {/* What */}
                <div className="mt-10">
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300">Ce que je propose</div>
                  <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-white/70">
                    {open.detail.what}
                  </p>
                </div>

                {/* Audience */}
                <div className="mt-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300">À qui ça s'adresse</div>
                  <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-white/70">
                    {open.detail.audience}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="mt-8">
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-cyan-300">Ce que vous obtenez</div>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {open.detail.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-white/75">
                        <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-cyan-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why */}
                <div className="mt-8 rounded-2xl border border-ember-500/25 bg-ember-500/[0.04] p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-ember-400">Pourquoi c'est utile</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {open.detail.why}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button onClick={goToContact} className="btn-primary">
                    <span className="pl-1">Me contacter pour ce type de projet</span>
                    <span className="btn-trail">
                      <EnvelopeSimple size={14} weight="light" />
                    </span>
                  </button>
                  <button
                    onClick={() => setOpen(null)}
                    className="text-xs uppercase tracking-widest2 text-white/50 transition hover:text-white"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceCard({ service, index, inView, onOpen }) {
  const Icon = service.icon;
  const isFeature = index === 0;

  // Wrapper : div for feature card (because it embeds an iframe — invalid inside <button>),
  // motion.button for the others (full button semantics).
  const Wrapper = isFeature ? motion.div : motion.button;
  const wrapperProps = isFeature
    ? { role: 'button', tabIndex: 0, onClick: onOpen, onKeyDown: (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onOpen()) }
    : { type: 'button', onClick: onOpen };

  return (
    <Wrapper
      {...wrapperProps}
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
      className={`bezel group block text-left cursor-pointer ${service.span}`}
    >
      <div className={`bezel-core flex h-full flex-col p-7 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:p-9 ${isFeature ? 'lg:p-12' : 'hover:bg-ink-800'}`}>
        {/* Feature card : looping muted showreel as background */}
        {isFeature && (
          <>
            <iframe
              aria-hidden
              src="https://www.youtube-nocookie.com/embed/6pgIvI6vrPE?autoplay=1&mute=1&loop=1&playlist=6pgIvI6vrPE&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&disablekb=1"
              allow="autoplay; encrypted-media; picture-in-picture"
              className="pointer-events-none absolute inset-0 h-full w-full scale-[1.4] object-cover opacity-50 transition-opacity duration-700 group-hover:opacity-65"
              loading="lazy"
              tabIndex={-1}
            />
            {/* Cinematic overlay so text stays readable */}
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink-950/95 via-ink-950/65 to-ink-950/55" />
            <div aria-hidden className="pointer-events-none absolute inset-0" style={{
              background: 'radial-gradient(ellipse at top right, rgba(93,195,215,0.12), transparent 60%)',
            }} />
          </>
        )}

        <div className="absolute right-7 top-7 z-10 font-mono text-[11px] text-white/30">
          {String(index + 1).padStart(2, '0')}
        </div>

        <div className="relative z-10 mb-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-cyan-500/40 group-hover:bg-cyan-500/[0.08]">
          <Icon size={isFeature ? 26 : 22} weight="light" className="text-cyan-400" />
        </div>

        <div className="relative z-10 mt-10">
          <h3 className={`display text-white ${isFeature ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {service.title}
          </h3>
          <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-white/70">
            {service.desc}
          </p>
        </div>

        {/* En savoir plus hint */}
        <div className="relative z-10 mt-6 flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-cyan-300/80 transition-colors duration-500 group-hover:text-cyan-300">
          <span>En savoir plus</span>
          <ArrowUpRight size={12} weight="light" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {!isFeature && (
          <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{
            background: 'radial-gradient(600px circle at 30% 0%, rgba(93,195,215,0.14), transparent 50%)',
          }} />
        )}
      </div>
    </Wrapper>
  );
}
