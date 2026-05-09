// Portfolio réel — projets ArtStation de Jean Marie Onana Kono.
// Source : https://www.artstation.com/jeankono
//
// Hiérarchie :
//   - PROJECTS (recent) : 2022 → 2026 — affichés dans la section Portfolio principale
//   - ARCHIVES        : avant 2022 — affichés dans la section Old Work / Archives (compact)

export const categories = [
  { id: 'all',          label: 'Tout' },
  { id: 'unreal-vfx',   label: 'Unreal · VFX' },
  { id: 'animation',    label: 'Animation 3D' },
  { id: 'character',    label: 'Personnages' },
  { id: 'environment',  label: 'Environnements' },
  { id: 'illustration', label: 'Illustration' },
];

// ============================================================================
// PROJETS RÉCENTS (2022 → 2026)
// ============================================================================
export const projects = [
  {
    id: 'angle-mort',
    title: 'ANGLE MORT',
    studio: 'Unreal Engine · Niagara FX',
    category: 'unreal-vfx',
    year: '2025',
    type: 'video',
    youtubeId: 'Nfov-XbEgww',
    poster: 'https://cdna.artstation.com/p/assets/videos/images/087/574/802/large/jean-marie-onana-kono-maxresdefault.jpg?1746137624',
    artstation: 'https://www.artstation.com/artwork/8BEVrE',
    description: "Effets sous-marins sous Unreal Engine — Niagara FX, animation, design et lighting.",
    tags: ['Unreal', 'Niagara', 'VFX', 'Lighting'],
  },
  {
    id: 'mystere',
    title: 'Mystère',
    studio: 'Court métrage 3D',
    category: 'animation',
    year: '2024',
    type: 'video',
    youtubeId: 'abEKVlGuHPM',
    poster: 'https://cdnb.artstation.com/p/assets/covers/images/079/775/341/large/jean-marie-onana-kono-jean-marie-onana-kono-screenshot-2024-09-08-15-41-04-525-com-whatsapp.jpg?1725803459',
    artstation: 'https://www.artstation.com/artwork/AZr58W',
    description: 'Court métrage mettant en scène les mystères de la vie dans une nature calme et féerique.',
    tags: ['Animation', 'Court métrage', 'Storytelling'],
  },
  {
    id: 'colere-fred',
    title: 'La colère de Fred',
    studio: 'Illustration 2D',
    category: 'illustration',
    year: '2024',
    type: 'image',
    poster: 'https://cdnb.artstation.com/p/assets/images/images/080/388/929/large/jean-marie-onana-kono-img-20240926-043430.jpg?1727433210',
    artstation: 'https://www.artstation.com/artwork/1Nxv6e',
    description: "Illustration 2D, composition centrée. Lighting simple — beauté de la tombée de la nuit.",
    tags: ['Illustration', '2D', 'Lighting'],
  },
  // === Illustrations / character studies ===
  {
    id: 'bar-scene-2025',
    title: 'Bar Scene',
    studio: 'Character study · Illustration',
    category: 'illustration',
    year: '2025',
    type: 'image',
    poster: '/IMG_20250221_175147.jpg',
    artstation: 'https://www.artstation.com/jeankono',
    description: "Étude de personnage cinématographique — late-night bar scene, lighting chaud / froid.",
    tags: ['Character', 'Lighting', 'Cinematic'],
  },
  {
    id: 'snowfall-character-2024',
    title: 'Snowfall',
    studio: 'Character study · Illustration',
    category: 'illustration',
    year: '2024',
    type: 'image',
    poster: '/IMG-20240913-WA0019.jpg',
    artstation: 'https://www.artstation.com/jeankono',
    description: "Personnage stylisé en plan rapproché — neige, contre-jour orangé, ambiance d'hiver.",
    tags: ['Character', 'Stylized', 'Winter'],
  },
];

// ============================================================================
// ARCHIVES — anciens travaux (avant 2022)
// Présentation compacte, ambiance documentaire / timeline.
// ============================================================================
export const archives = [
  {
    id: 'nocturne',
    title: 'Nocturne',
    studio: 'Character · ZBrush · Arnold',
    category: 'character',
    year: '2021',
    poster: 'https://cdna.artstation.com/p/assets/images/images/040/842/452/large/jean-marie-onana-kono-face2.jpg?1630013790',
    artstation: 'https://www.artstation.com/artwork/NxXLw5',
  },
  {
    id: 'bibliotheque',
    title: 'La Bibliothèque du bonheur',
    studio: 'Environment · Lighting',
    category: 'environment',
    year: '2021',
    poster: 'https://cdnb.artstation.com/p/assets/images/images/037/623/483/large/jean-marie-onana-kono-art2.jpg?1620859230',
    artstation: 'https://www.artstation.com/artwork/d8nVrW',
  },
  {
    id: 'personnage-mopa',
    title: 'Personnage MOPA',
    studio: 'Concours école',
    category: 'character',
    year: '2021',
    poster: 'https://cdna.artstation.com/p/assets/images/images/037/077/366/large/jean-marie-onana-kono-3d.jpg?1619437154',
    artstation: 'https://www.artstation.com/artwork/B10mG6',
  },
  {
    id: 'fan-art-dbz',
    title: 'Fan art DBZ — Vegeta',
    studio: 'Character study',
    category: 'character',
    year: '2021',
    poster: 'https://cdnb.artstation.com/p/assets/images/images/036/856/483/large/jean-marie-onana-kono-img-20210418-032809-803.jpg?1618829305',
    artstation: 'https://www.artstation.com/artwork/g2QBdZ',
  },
  {
    id: 'atelier-germain',
    title: "L'atelier de Germain",
    studio: 'Environnement 3D',
    category: 'environment',
    year: '2021',
    poster: 'https://cdna.artstation.com/p/assets/images/images/034/455/518/large/jean-marie-onana-kono-x-img-1612339438583.jpg?1612340051',
    artstation: 'https://www.artstation.com/artwork/AqKDPy',
  },
  {
    id: 'hopital-ruine',
    title: 'Hôpital en ruine',
    studio: 'Animation · Environnement',
    category: 'environment',
    year: '2020',
    poster: 'https://cdna.artstation.com/p/assets/video_clips/images/030/269/604/large/jean-marie-onana-kono-thumb.jpg?1600105830',
    artstation: 'https://www.artstation.com/artwork/bKVP3n',
  },
  {
    id: 'modelisation-3d',
    title: "Couloir d'hôpital — Modélisation",
    studio: 'Environment design',
    category: 'environment',
    year: '2020',
    poster: 'https://cdna.artstation.com/p/assets/images/images/030/244/950/large/jean-marie-onana-kono-img-20200911-wa0070.jpg?1600036086',
    artstation: 'https://www.artstation.com/artwork/VgB3a8',
  },
];

/** Compact list for the immersive ScrollTiltedGrid section (recent only). */
export const tiltedGridItems = projects.map((p) => ({
  id: p.id,
  src: p.poster,
  href: p.artstation,
  alt: p.title,
  title: p.title,
  category: categories.find((c) => c.id === p.category)?.label,
  year: p.year,
}));
