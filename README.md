# KON'art — Portfolio Jean Marie Onana Kono

Portfolio professionnel de **Jean Marie Onana Kono**, 3D Generalist · Animateur 3D · Visual Designer freelance, basé à Lyon.

> Artiste 3D généraliste freelance spécialisé en animation, cinématiques, teasers, clips et production visuelle premium.

**ArtStation** : https://www.artstation.com/jeankono
**LinkedIn** : https://www.linkedin.com/in/jean-marie-onana-kono-8033b3194
**Email** : onanakono0707@yahoo.com
**Tél** : +33 7 66 80 79 25

---

## Stack technique

| Catégorie | Technologie |
|---|---|
| Framework | React 18 + Vite 5 |
| Style | Tailwind CSS 3 |
| TypeScript | activé (mixte JS + TS) |
| Animations | Framer Motion 11 |
| Icônes | @phosphor-icons/react (weight `light`) |
| Polices | **Bricolage Grotesque** (titres) · **Orbitron** (logo sci-fi) · **Space Grotesk** (display) · **Instrument Serif** (italic accents) · **JetBrains Mono** (meta) |
| Vidéo | YouTube (lecteur intégré) |

---

## Démarrage

> Prérequis : **Node.js ≥ 18** et **npm**.

```bash
npm install      # installe les dépendances (~30 paquets)
npm run dev      # lance Vite sur http://localhost:5173
npm run build    # build production → dist/
npm run preview  # prévisualise le build
```

---

## Structure du projet

```
kon-art/
├── index.html                       # Entrée Vite + preview statique hybride (Tailwind CDN fallback)
├── public/
│   ├── favicon.svg                  # KON'art logo cyan
│   └── CV-Jean-Marie-Onana-Kono.pdf
├── src/
│   ├── App.jsx                      # composition + intro overlay + cursor spotlight
│   ├── main.jsx
│   ├── index.css                    # Tailwind + utilitaires (.bezel, .btn-island, .cyan-text…)
│   ├── components/
│   │   ├── ui/
│   │   │   └── scroll-tilted-grid.tsx  ← shadcn-style component (TS)
│   │   ├── Navbar.jsx               # Floating Island pill
│   │   ├── Hero.jsx                 # Particles canvas + Ken-Burns + ANGLE MORT
│   │   ├── About.jsx                # Bio réelle + Nocturne featured
│   │   ├── Services.jsx             # Bento 8 cartes (Unreal cinematics en feature)
│   │   ├── Portfolio.jsx            # Mosaïque + YouTube lightbox + ScrollTiltedGrid
│   │   ├── Showreel.jsx             # YouTube interactive player (uUCeWzxNOss)
│   │   ├── CV.jsx                   # 6 expériences + 2 formations réelles
│   │   ├── Skills.jsx               # 11 logiciels du CV avec barres animées
│   │   ├── Contact.jsx              # Formulaire + email/tél/WhatsApp/ArtStation/LinkedIn
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── portfolio.js             # 10 vrais projets ArtStation + youtubeId
│   │   ├── services.js
│   │   ├── skills.js                # Maya · iClone · Unreal · Toon Boom · ZBrush · Arnold · V-Ray · PS · AE · Premiere · Illustrator
│   │   └── cv.js                    # Vraies expériences DOM FRED, Skyrock, REC'IM, ULTIMA VACCAE, Jumbo MANA, WAW GAMES
│   ├── hooks/useReveal.js           # IntersectionObserver-based reveal
│   └── lib/utils.ts                 # cn() helper (clsx + tailwind-merge)
├── tailwind.config.js               # Palette cyan/ember/ink + polices
├── postcss.config.js
├── tsconfig.json + tsconfig.node.json
└── vite.config.js                   # alias @/ + manual chunks (framer, phosphor)
```

---

## Identité visuelle

### Palette
- **Fond** : bleu nuit teal `#0a1218` (extrait d'ANGLE MORT)
- **Accent principal** : Cyan/teal `#5dc3d7` (underwater Unreal)
- **Accent chaud** : Ember/orange `#ff6b35` (flamme du cigare, "La colère de Fred")
- **Crimson** : `#c84545` (cornes du character)
- **Doré** : conservé en accent rare

### Typographie
- **Logo `KON·ART`** : Orbitron 700, accent cyan glowing
- **Nom "Jean Marie Onana Kono"** : Bricolage Grotesque 600 — premium contemporain
- **Sections H2** : Space Grotesk 600
- **Italic accents** : Instrument Serif italic (e.g., "*histoires.*")
- **Meta/timestamps** : JetBrains Mono

---

## Vraies vidéos intégrées

| Projet | Source | Embed |
|---|---|---|
| **Showreel 2026** | YouTube `uUCeWzxNOss` | Lecteur principal section Showreel |
| **ANGLE MORT** | YouTube `Nfov-XbEgww` | Modal lightbox sur la card portfolio |
| **Mystère** | YouTube `abEKVlGuHPM` | Modal lightbox sur la card portfolio |

**Comment ça marche** : Les cards vidéo affichent le poster ArtStation en thumbnail. Au clic, un lightbox s'ouvre avec le lecteur YouTube intégré (`youtube-nocookie.com` pour le RGPD). Ferme avec Esc ou clic hors du player.

---

## Composant phare : `ScrollTiltedGrid`

Fichier : `src/components/ui/scroll-tilted-grid.tsx`

Grille 3D qui se redresse au scroll (Awwwards-style) :
- À l'entrée du viewport : tuiles inclinées en avant
- Au centre : tuiles parfaitement plates
- À la sortie : tuiles inclinées en arrière
- Stagger d'apparition par index

Utilisation :
```tsx
import { ScrollTiltedGrid } from '@/components/ui/scroll-tilted-grid';
import { tiltedGridItems } from '@/data/portfolio';

<ScrollTiltedGrid items={tiltedGridItems} rotateAmount={20} scaleAmount={0.9} />
```

API : `items[]` (id/src/href/title/category/year), `rotateAmount`, `scaleAmount`, `perspective`, `gridClassName`.

---

## SEO & métadonnées

L'`index.html` contient :
- `<title>` : *KON'art — Jean Marie Onana Kono · 3D Generalist · Animateur 3D Freelance*
- `<meta description>` (155 car.)
- `keywords`, `author`, `robots`, `canonical`
- **Open Graph complet** : type, title, description, image (ANGLE MORT 4K), locale fr_FR, site_name
- **Twitter Cards** (summary_large_image)
- **JSON-LD `Person`** structuré : nom, jobTitle, sameAs (ArtStation + LinkedIn), alumniOf (MOPA + YNOV)
- `theme-color` cyan-noir
- `preconnect` vers Google Fonts + ArtStation CDN + i.ytimg.com

À ajouter avant déploiement :
- `public/og-image.jpg` 1200×630 personnalisé (sinon ArtStation cover par défaut)
- `public/sitemap.xml` + `public/robots.txt`
- Domaine canonical : remplacez `https://konart.studio/` par le vôtre dans `<link rel="canonical">` et `og:url`

---

## Performance

- **Vite** + tree-shaking + code splitting (manualChunks `framer`, `phosphor`)
- **Vidéos** : YouTube en lazy embed (poster image en preload, iframe injectée au clic)
- **Images** : `loading="lazy"` partout, `fetchpriority="high"` sur le hero
- **Fonts** : `preconnect` + `display=swap`
- **Grain overlay** : `position: fixed` + `pointer-events: none` (jamais sur scroll containers)
- **Animations** : uniquement `transform` / `opacity` / `filter` (jamais top/left/width/height)
- **`prefers-reduced-motion`** respecté
- **Framer Motion** : `whileInView` + `useReveal` IntersectionObserver (pas de listeners scroll lourds)

---

## Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```
Ou : push GitHub → import dans Vercel → deploy auto.

### Netlify
```bash
npm run build
# Drag & drop dist/ sur netlify.com
```
Ou via CLI : `netlify deploy --prod --dir=dist`.

### GitHub Pages
```bash
npm run build
# Push dist/ sur la branch gh-pages
```
Pensez à ajouter `base: '/repo-name/'` dans `vite.config.js` si pas à la racine.

### Hébergement classique (FTP)
1. `npm run build`
2. Upload tout le contenu de `dist/` sur votre hébergeur
3. C'est tout — c'est du statique pur

---

## Pre-flight check (avant mise en ligne)

- [ ] `npm install` sans erreur
- [ ] `npm run dev` ouvre sur http://localhost:5173
- [ ] `npm run build` génère `dist/` sans erreur
- [ ] `npm run preview` rend le build correctement
- [ ] Aucune erreur console
- [ ] Le CV PDF est bien dans `public/CV-Jean-Marie-Onana-Kono.pdf`
- [ ] Tous les liens externes ouvrent dans un nouvel onglet (`target="_blank"`)
- [ ] Le formulaire contact ouvre `mailto:onanakono0707@yahoo.com`
- [ ] Showreel YouTube se lance au clic
- [ ] Lightbox YouTube ANGLE MORT et Mystère fonctionnent
- [ ] Responsive mobile/tablette/desktop testé
- [ ] Domaine final renseigné dans les balises canonical/og:url

---

## Backlog (améliorations possibles)

- Section témoignages réels (placeholders supprimés en attendant)
- Service Worker pour offline-first
- Sitemap.xml généré automatiquement
- Intégration Plausible/Umami pour analytics RGPD-friendly
- Backend formulaire (Formspree, Resend, EmailJS) — actuellement mailto direct
- Upload propre du CV via panneau admin (actuellement statique)

---

## Licence

Code : libre d'usage pour Jean Marie Onana Kono. Médias et œuvres : © Jean Marie Onana Kono — tous droits réservés.

— Built with care · Lyon · 2026.
