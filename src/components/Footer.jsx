import { Palette, LinkedinLogo, ArrowUpRight, ArrowUp, EnvelopeSimple } from '@phosphor-icons/react';

const ARTSTATION = 'https://www.artstation.com/jeankono';
const LINKEDIN = 'https://www.linkedin.com/in/jean-marie-onana-kono-8033b3194';
const EMAIL = 'onanakono0707@yahoo.com';

const navCols = [
  {
    title: 'Navigation',
    links: [
      { href: '#about', label: 'À propos' },
      { href: '#services', label: 'Spécialités' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#showreel', label: 'Showreel' },
    ],
  },
  {
    title: 'Parcours',
    links: [
      { href: '#cv', label: 'CV / Expériences' },
      { href: '#skills', label: 'Compétences' },
      { href: '#contact', label: 'Contact' },
      { href: '/CV-Jean-Marie-Onana-Kono.pdf', label: 'Télécharger le CV', download: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink-950">
      <div className="overflow-hidden border-b border-white/5 py-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 px-6">
              {Array.from({ length: 6 }).map((_, j) => (
                <span key={j} className="display text-7xl font-semibold text-white/[0.04] md:text-9xl">
                  Jean Marie Onana Kono · 3D Artist ·
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="display text-3xl">
              <span className="cyan-text">KON</span><span className="text-white">'</span><span className="text-white">art</span>
            </a>
            <div className="mt-2 text-[11px] uppercase tracking-widest2 text-white/40">
              Jean Marie Onana Kono · 3D Generalist · Lyon
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Animation 3D, storyboard et direction visuelle. Disponible pour collaborations
              avec studios, agences et artistes indépendants.
            </p>
            <div className="mt-6 flex gap-2">
              <Social href={ARTSTATION} icon={Palette} label="ArtStation" />
              <Social href={LINKEDIN} icon={LinkedinLogo} label="LinkedIn" />
              <Social href={`mailto:${EMAIL}`} icon={EnvelopeSimple} label="Email" />
            </div>
          </div>

          {navCols.map((col) => (
            <div key={col.title} className="lg:col-span-3">
              <div className="text-[10px] uppercase tracking-widest2 text-cyan-300">{col.title}</div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      download={l.download || undefined}
                      className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                    >
                      {l.label}
                      <ArrowUpRight size={12} weight="light" className="-translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 lg:flex lg:justify-end">
            <a
              href="#top"
              aria-label="Retour en haut"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition hover:border-cyan-500 hover:bg-white/[0.05] hover:text-cyan-400"
            >
              <ArrowUp size={16} weight="light" />
            </a>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-white/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Jean Marie Onana Kono · Tous droits réservés.</span>
          <span className="font-mono">Built with care · Lyon · Worldwide collaborations.</span>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      aria-label={label}
      title={label}
      className="flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 transition hover:border-cyan-500 hover:bg-white/[0.05] hover:text-cyan-400"
    >
      <Icon size={14} weight="light" />
      <span className="text-[11px] uppercase tracking-widest2">{label}</span>
    </a>
  );
}
