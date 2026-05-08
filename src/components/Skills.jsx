import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal.js';
import { softwareSkills, expertise } from '../data/skills.js';

export default function Skills() {
  const [ref, inView] = useReveal();

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden bg-ink-950 py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-ember-500/[0.06] blur-[140px]"
      />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="grid items-end gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Compétences</span>
            <h2 className="display mt-6 text-5xl text-white md:text-7xl">
              Outils & <span className="display-serif cyan-text">expertises.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/60 lg:col-span-5 max-w-[55ch]">
            Une stack maîtrisée de bout en bout : modélisation, animation, lighting,
            compositing et étalonnage. Pipeline professionnel, exécution précise.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          {/* Software bars */}
          <div className="lg:col-span-7">
            <h3 className="mb-10 text-xs uppercase tracking-widest2 text-cyan-300">Logiciels maîtrisés</h3>
            <div className="space-y-7">
              {softwareSkills.map((s, i) => (
                <SkillBar key={s.name} skill={s} index={i} inView={inView} />
              ))}
            </div>
          </div>

          {/* Expertises + Process */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5"
          >
            <h3 className="mb-8 text-xs uppercase tracking-widest2 text-cyan-300">Expertises</h3>
            <div className="flex flex-wrap gap-2">
              {expertise.map((e, i) => (
                <motion.span
                  key={e}
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                  animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: [0.32, 0.72, 0, 1] }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] text-white/80 transition hover:border-cyan-500/60 hover:bg-white/[0.06] hover:text-white"
                >
                  {e}
                </motion.span>
              ))}
            </div>

            <div className="mt-12 bezel">
              <div className="bezel-core p-8">
                <div className="display text-2xl text-white md:text-3xl">Process</div>
                <ol className="mt-6 space-y-3 text-sm text-white/65">
                  <li className="flex gap-4"><span className="font-mono text-cyan-300">01.</span> Brief & moodboard</li>
                  <li className="flex gap-4"><span className="font-mono text-cyan-300">02.</span> Storyboard / animatique</li>
                  <li className="flex gap-4"><span className="font-mono text-cyan-300">03.</span> Production 3D / animation</li>
                  <li className="flex gap-4"><span className="font-mono text-cyan-300">04.</span> Compositing & étalonnage</li>
                  <li className="flex gap-4"><span className="font-mono text-cyan-300">05.</span> Livraison master</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
      animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
    >
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-medium text-white">{skill.name}</span>
        <span className="font-mono text-xs text-cyan-400">{skill.level}%</span>
      </div>
      <div className="relative h-[3px] w-full overflow-hidden bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.4, delay: 0.3 + index * 0.08, ease: [0.32, 0.72, 0, 1] }}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-ember-500"
        >
          <span className="absolute inset-0 animate-shimmer" style={{ backgroundImage: 'linear-gradient(110deg, transparent 30%, rgba(164,226,238,0.6) 50%, transparent 70%)', backgroundSize: '200% 100%' }} />
        </motion.div>
      </div>
    </motion.div>
  );
}
