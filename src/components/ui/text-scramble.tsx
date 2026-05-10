'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
// Glyphs to preserve (whitespace, common punctuation, accents that are not in CHARS).
const PRESERVE = /[\s.,'’·\-—:;!?()/]/;

interface TextScrambleProps {
  /** Final text to reveal. */
  text: string;
  /** Tailwind classes — inherits font/size from parent if omitted. */
  className?: string;
  /** Frames per char (lower = faster). Default 3. */
  speed?: number;
}

/**
 * TextScramble — kinetic typography effect on CLICK.
 *
 * Click (or Enter/Space when focused) → letters scramble through random glyphs,
 * progressively revealing the final text from left to right. Inherits font from
 * its parent so it works inside any heading or display style without forcing
 * a monospace look.
 */
export function TextScramble({ text, className = '', speed = 3 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);
    frameRef.current = 0;
    const duration = Math.max(text.length * speed, 12);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      const progress = frameRef.current / duration;
      const revealedLength = Math.floor(progress * text.length);

      const next = text
        .split('')
        .map((char, i) => {
          if (PRESERVE.test(char)) return char;
          if (i < revealedLength) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplayText(next);

      if (frameRef.current >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 30);
  }, [text, speed, isScrambling]);

  // Reset display when text prop changes (e.g. live editing during dev).
  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  // Cleanup on unmount.
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      onClick={scramble}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          scramble();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={text}
      aria-busy={isScrambling}
      className={`cursor-pointer select-none outline-none transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:rounded-sm ${
        isScrambling ? 'scale-[1.01]' : ''
      } ${className}`}
    >
      {displayText}
    </span>
  );
}

export default TextScramble;
