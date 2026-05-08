'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface TiltedGridItem {
  id: string | number;
  src: string;
  href?: string;
  alt?: string;
  title?: string;
  category?: string;
  year?: string | number;
  span?: string;
  /** Optional video poster for cards that should load a hover preview later. */
  videoSrc?: string;
}

export interface ScrollTiltedGridProps {
  items: TiltedGridItem[];
  className?: string;
  /** Total CSS perspective applied to the grid (px). */
  perspective?: number;
  /** Max rotation (degrees) at the top/bottom of viewport. */
  rotateAmount?: number;
  /** Max scale-down at viewport extremes. */
  scaleAmount?: number;
  /** Tailwind class for grid layout. */
  gridClassName?: string;
}

/**
 * ScrollTiltedGrid — Awwwards-style 3D tilting grid driven by scroll.
 *
 * The whole grid rotates on the X axis as it enters/leaves the viewport :
 * tilted forward on entry → flat at center → tilted backward on exit.
 * Items also stagger their entry with a per-row delay.
 *
 * Designed to host portfolio thumbnails (your ArtStation renders, video posters, etc.).
 */
export function ScrollTiltedGrid({
  items,
  className,
  perspective = 1400,
  rotateAmount = 18,
  scaleAmount = 0.92,
  gridClassName,
}: ScrollTiltedGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [rotateAmount, 0, -rotateAmount]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleAmount, 1, scaleAmount]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.5]);

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          perspective: `${perspective}px`,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
        }}
        className={cn(
          'grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6',
          gridClassName
        )}
      >
        {items.map((item, i) => {
          const Wrapper: any = item.href ? motion.a : motion.div;
          return (
            <Wrapper
              key={item.id}
              href={item.href}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, delay: i * 0.04, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                'group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-ink-900 will-change-transform',
                item.span
              )}
            >
              <img
                src={item.src}
                alt={item.alt ?? item.title ?? ''}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-90" />

              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"
                style={{ background: 'radial-gradient(500px circle at 50% 50%, rgba(93,195,215,0.16), transparent 60%)' }}
              />

              {(item.title || item.category) && (
                <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
                  {(item.category || item.year) && (
                    <div className="text-[9px] font-mono uppercase tracking-[0.28em] text-cyan-300 md:text-[10px]">
                      {item.category}
                      {item.category && item.year ? ' · ' : ''}
                      {item.year}
                    </div>
                  )}
                  {item.title && (
                    <h3 className="mt-1 font-display text-base text-white md:text-lg">
                      {item.title}
                    </h3>
                  )}
                </div>
              )}
            </Wrapper>
          );
        })}
      </motion.div>
    </div>
  );
}

export default ScrollTiltedGrid;
