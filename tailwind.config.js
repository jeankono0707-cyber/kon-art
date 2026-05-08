/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:     { 950: '#050a0e', 900: '#0a1218', 800: '#0f1a22', 700: '#16242e', 600: '#1d3140' },
        cyan:    { 300: '#a4e2ee', 400: '#7ed4e6', 500: '#5dc3d7', 600: '#3da8c0', 700: '#2a8aa0' },
        ember:   { 300: '#ffb088', 400: '#ff8a5b', 500: '#ff6b35', 600: '#e85420' },
        crimson: { 500: '#c84545' },
        gold:    { 400: '#e6c46a', 500: '#d4af37' },
      },
      fontFamily: {
        logo:    ['Orbitron', 'sans-serif'],
        name:    ['"Bricolage Grotesque"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif:   ['"Instrument Serif"', 'serif'],
        sans:    ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
        widest3: '0.42em',
        logo:    '0.18em',
      },
      transitionTimingFunction: {
        silk:      'cubic-bezier(0.32, 0.72, 0, 1)',
        cinematic: 'cubic-bezier(0.6, 0.01, 0.05, 0.95)',
      },
      animation: {
        shimmer:    'shimmer 3s linear infinite',
        marquee:    'marquee 35s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'float-soft': 'float-soft 6s ease-in-out infinite',
        kenburns:   'kenburns 28s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'ping-slow': 'ping-slow 2.8s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        shimmer:    { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        marquee:    { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'float-soft': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        kenburns:   { '0%': { transform: 'scale(1) translate(0,0)' }, '100%': { transform: 'scale(1.18) translate(-2%,-3%)' } },
        'glow-pulse': { '0%,100%': { opacity: '0.3', transform: 'scale(1)' }, '50%': { opacity: '0.6', transform: 'scale(1.05)' } },
        'ping-slow': { '0%': { transform: 'scale(1)', opacity: '0.7' }, '75%,100%': { transform: 'scale(1.8)', opacity: '0' } },
      },
      borderRadius: { '3xl': '1.5rem' },
    },
  },
  plugins: [],
};
