import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal.js';
import { services } from '../data/services.js';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function Services() {
  const [ref, inView] = useReveal();

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
              Ce que je sais <span className="display-serif cyan-text">faire.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-base leading-relaxed text-white/60 lg:col-span-5 max-w-[55ch]"
          >
            Animateur 3D et storyboard artist formé à MOPA Arles. J'interviens
            sur tout le pipeline créatif : conception, animation, lighting, rendu.
          </motion.p>
        </div>

        {/* Asymmetrical Bento — skill: high-end-visual-design §3B.1 */}
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(220px,auto)]">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, inView }) {
  const Icon = service.icon;
  const isFeature = index === 0; // first card is the wide feature one

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
      className={`bezel group ${service.span}`}
    >
      {/* Inner core (Double-Bezel pattern) */}
      <div className={`bezel-core flex h-full flex-col p-7 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-ink-800 md:p-9 ${isFeature ? 'lg:p-12' : ''}`}>
        {/* Number top-right */}
        <div className="absolute right-7 top-7 font-mono text-[11px] text-white/30">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Icon — soft outer enclosure */}
        <div className="mb-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-cyan-500/40 group-hover:bg-cyan-500/[0.08]">
          <Icon size={isFeature ? 26 : 22} weight="light" className="text-cyan-400" />
        </div>

        <div className="mt-10">
          <h3 className={`display text-white ${isFeature ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {service.title}
          </h3>
          <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-white/60">
            {service.desc}
          </p>
        </div>

        {/* Hover reveal */}
        <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-cyan-300 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100">
          <span>En savoir plus</span>
          <ArrowUpRight size={12} weight="light" />
        </div>

        {/* Subtle radial highlight on hover */}
        <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{
          background: 'radial-gradient(600px circle at 30% 0%, rgba(93,195,215,0.14), transparent 50%)',
        }} />
      </div>
    </motion.div>
  );
}
