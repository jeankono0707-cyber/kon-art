// Spécialités personnelles — alignées sur le CV et l'expérience réelle de Jean-Marie Onana Kono.

import {
  Cube, FilmStrip, PencilSimple, Person, Lightbulb, Stack, MagicWand, Sparkle, Palette,
} from '@phosphor-icons/react';

export const services = [
  {
    icon: Cube,
    title: 'Animation 3D',
    desc: "Animation de personnages, cycles, acting et séquences stylisées. Plus de 4 ans en studio sur des projets ULTIMA VACCAE, Jumbo MANA, DOM FRED.",
    span: 'lg:col-span-7 lg:row-span-2', // Feature card — sa spécialité phare
  },
  {
    icon: PencilSimple,
    title: 'Storyboard',
    desc: "Découpage visuel, mise en scène, composition de plans. Conception narrative pour productions animées.",
    span: 'lg:col-span-5',
  },
  {
    icon: Person,
    title: 'Character acting',
    desc: "Donner vie à un personnage : intention, rythme, poids, émotion. Animation expressive et fluide.",
    span: 'lg:col-span-5',
  },
  {
    icon: Stack,
    title: 'Modélisation 3D',
    desc: "Hard surface, organique, stylisé. Pipeline ZBrush + Maya. Topologie clean prête pour l'animation.",
    span: 'lg:col-span-4',
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Rendering',
    desc: "Mise en lumière cinématographique sous Arnold et V-Ray. Lookdev et étalonnage final.",
    span: 'lg:col-span-4',
  },
  {
    icon: FilmStrip,
    title: 'Visual storytelling',
    desc: "Direction visuelle d'ensemble : moodboards, cadrage, rythme du récit, identité d'univers.",
    span: 'lg:col-span-4',
  },
  {
    icon: MagicWand,
    title: 'Motion design',
    desc: "Génériques, transitions, identités animées. After Effects + Premiere Pro pour la post-production.",
    span: 'lg:col-span-6',
  },
  {
    icon: Sparkle,
    title: 'Compositing',
    desc: "Intégration multi-couches, effets visuels, rendu final. Workflow Maya → AE → DaVinci.",
    span: 'lg:col-span-3',
  },
  {
    icon: Palette,
    title: 'Direction artistique',
    desc: "Conception d'univers cohérents, style frames, références. Vision globale d'un projet.",
    span: 'lg:col-span-3',
  },
];
