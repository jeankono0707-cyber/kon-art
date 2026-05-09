import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowUpRight, Play } from '@phosphor-icons/react';

const HERO_BG = 'https://cdna.artstation.com/p/assets/videos/images/087/574/802/4k/jean-marie-onana-kono-maxresdefault.jpg?1746137624';
const ARTSTATION_URL = 'https://www.artstation.com/jeankono';

/**
 * Realistic dust particles canvas — slow floating dust in a dark room.
 * 3 depth layers for parallax, organic 2D drift via lightweight pseudo-noise,
 * size + opacity variance, soft blur on far layer.
 */
function DustParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let particles = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const makeParticle = (depth) => {
      // depth 0 = far (blurred, slow), 1 = mid, 2 = near (sharp, larger)
      const speedFactor = 0.3 + depth * 0.4;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        // Small floating motes — 0.4–2.4 px radius depending on depth
        r: (0.4 + Math.random() * 1.4) * (0.5 + depth * 0.5),
        // Gentle drift, mostly horizontal with slight downward gravity (real dust)
        vx: (Math.random() - 0.5) * 0.18 * speedFactor,
        vy: (Math.random() - 0.4) * 0.08 * speedFactor, // slight downward bias
        // Sin-wave wobble for organic feel
        phase: Math.random() * Math.PI * 2,
        wobble: 0.05 + Math.random() * 0.15,
        opacity: depth === 0 ? 0.10 + Math.random() * 0.12 : depth === 1 ? 0.18 + Math.random() * 0.18 : 0.28 + Math.random() * 0.30,
        depth,
      };
    };

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Density depends on viewport — keeps perf good on mobile
      const area = window.innerWidth * window.innerHeight;
      const totalCount = Math.min(140, Math.max(40, Math.floor(area / 14000)));
      const counts = [Math.floor(totalCount * 0.5), Math.floor(totalCount * 0.3), Math.floor(totalCount * 0.2)];
      particles = [];
      counts.forEach((count, depth) => {
        for (let i = 0; i < count; i++) particles.push(makeParticle(depth));
      });
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      t += 0.005;

      particles.forEach((p) => {
        // Organic drift via sine wobble
        const wobbleX = Math.sin(t + p.phase) * p.wobble;
        const wobbleY = Math.cos(t * 0.7 + p.phase) * p.wobble * 0.6;
        p.x += p.vx + wobbleX * 0.05;
        p.y += p.vy + wobbleY * 0.05;

        // Wrap edges
        if (p.y > window.innerHeight + 5) p.y = -5;
        if (p.y < -10) p.y = window.innerHeight + 5;
        if (p.x < -10) p.x = window.innerWidth + 10;
        if (p.x > window.innerWidth + 10) p.x = -10;

        // Soft cream-white dust color, depth-based glow size
        const glow = p.r * (p.depth === 0 ? 5 : p.depth === 1 ? 3.5 : 2.5);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glow);
        grad.addColorStop(0, `rgba(255, 246, 220, ${p.opacity})`);
        grad.addColorStop(0.5, `rgba(220, 230, 240, ${p.opacity * 0.4})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    if (!reduceMotion) raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2] mix-blend-screen"
    />
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100dvh] w-full overflow-hidden vignette">
      {/* Layer 0 : Ken-Burns background = ANGLE MORT */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={HERO_BG} alt="ANGLE MORT — Unreal Engine, Jean Marie Onana Kono" className="h-full w-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/25 via-transparent to-ink-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/65 via-transparent to-ink-950/10" />
      </motion.div>

      {/* Layer 1 : Realistic dust particles */}
      <DustParticles />

      {/* Layer 2 : Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 h-[700px] w-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(93,195,215,0.22), transparent 60%)', filter: 'blur(70px)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.18), transparent 60%)', filter: 'blur(80px)' }} />

      {/* Letterbox bars */}
      <div aria-hidden className="absolute inset-x-0 top-0 z-[5] h-[8%] bg-gradient-to-b from-ink-950 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[5] h-[8%] bg-gradient-to-t from-ink-950 to-transparent" />

      {/* Vertical text — left edge */}
      <div className="absolute bottom-32 left-4 z-10 hidden md:flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-cyan-400/60" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Featured · 2025 · Unreal Engine · Niagara FX
        </span>
      </div>

      {/* Vertical text — right edge */}
      <div className="absolute top-32 right-4 z-10 hidden md:flex items-start gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-cyan-400/60" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Portfolio · Lyon · 2026
        </span>
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container-x relative z-10 flex min-h-[100dvh] flex-col justify-end pb-24 md:justify-center md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.5, ease: [0.32, 0.72, 0, 1] }}
          className="mb-8"
        >
          <span className="section-eyebrow">3D Generalist · Animateur 3D · Visual Designer</span>
        </motion.div>

        <h1 className="font-name max-w-5xl text-[clamp(2.8rem,8.5vw,8.5rem)] font-semibold leading-[0.95] tracking-tight text-white text-glow-cyan">
          {[
            { text: 'Jean Marie' },
            { text: 'Onana Kono', accent: true },
          ].map((line, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0, filter: 'blur(10px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, delay: 1.55 + i * 0.18, ease: [0.32, 0.72, 0, 1] }}
              className="block overflow-hidden"
            >
              <span className={line.accent ? 'cyan-text' : ''}>{line.text}</span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 2.1, ease: [0.32, 0.72, 0, 1] }}
          className="mt-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          Artiste 3D polyvalent spécialisé en <em className="not-italic font-medium text-cyan-300">animation</em>,
          {' '}<em className="not-italic font-medium text-ember-400">storytelling visuel</em> et création d'univers stylisés.
          J'interviens sur toute la chaîne — conception, animation, lighting, rendu, direction visuelle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: [0.32, 0.72, 0, 1] }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a href="#portfolio" className="btn-primary">
            <span className="pl-1">Voir mon travail</span>
            <span className="btn-trail">
              <Play size={14} weight="fill" />
            </span>
          </a>
          <a href={ARTSTATION_URL} target="_blank" rel="noreferrer" className="btn-ghost">
            <span className="pl-1">ArtStation</span>
            <span className="btn-trail">
              <ArrowUpRight size={14} weight="light" />
            </span>
          </a>
        </motion.div>

        <a href="https://www.artstation.com/artwork/8BEVrE" target="_blank" rel="noreferrer" className="absolute bottom-12 right-8 hidden flex-col items-end gap-1 text-right md:flex group">
          <span className="font-mono text-[10px] uppercase tracking-[0.42em] text-white/55">Featured render · 2025</span>
          <span className="font-logo text-sm text-white/95 group-hover:text-cyan-300 transition-colors">ANGLE MORT</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-400">Unreal · Niagara FX</span>
          <div className="mt-2 h-px w-16 bg-gradient-to-r from-transparent to-cyan-400 group-hover:to-cyan-300 transition-colors" />
        </a>

        <div className="absolute bottom-12 left-8 hidden items-center gap-4 md:flex">
          <div className="h-px w-10 bg-cyan-400/50" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/55">Lyon · France</span>
        </div>
      </motion.div>
    </section>
  );
}
