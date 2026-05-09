// Spécialités personnelles — alignées sur le CV et l'expérience réelle de Jean-Marie Onana Kono.

import {
  Cube, FilmStrip, PencilSimple, Person, Lightbulb, Stack, MagicWand, Sparkle, Palette,
} from '@phosphor-icons/react';

export const services = [
  {
    id: 'animation-3d',
    icon: Cube,
    title: 'Animation 3D',
    desc: "Animation de personnages, cycles, acting et séquences stylisées. Plus de 4 ans en studio sur des projets ULTIMA VACCAE, Jumbo MANA, DOM FRED.",
    span: 'lg:col-span-7 lg:row-span-2',
    bgVideoId: '6pgIvI6vrPE', // Showreel — looping muted bg
    detail: {
      tagline: "Donner vie aux personnages, à la caméra et au mouvement.",
      what: "Animation de personnages 3D, cycles (marche, course, idle), acting expressif, séquences stylisées, animation de caméra cinématique. Pipeline Maya · iClone · Toon Boom.",
      audience: "Studios d'animation, agences de production, marques cherchant un univers animé fort, réalisateurs indépendants.",
      deliverables: [
        "Séquences animées rendues (4K possible)",
        "Cycles d'animation réutilisables",
        "Caméras animées + storyboard correspondant",
        "Versions étalonnées et masterisées",
      ],
      why: "Une animation qui dépasse le simple mouvement : intention, rythme, poids et émotion. Formé à MOPA Arles (Master Animation 3D), je travaille l'acting comme un acteur joue une scène.",
    },
  },
  {
    id: 'storyboard',
    icon: PencilSimple,
    title: 'Storyboard',
    desc: "Découpage visuel, mise en scène, composition de plans. Conception narrative pour productions animées.",
    span: 'lg:col-span-5',
    detail: {
      tagline: "La pré-production qui sauve la production.",
      what: "Storyboards plan-par-plan, animatique, découpage technique, recommandations de cadrage et d'éclairage. Pour productions animées, clips, publicités, films de marque.",
      audience: "Studios animation/live, réalisateurs, agences créatives, producteurs en pré-prod.",
      deliverables: [
        "Storyboard complet (planches numériques)",
        "Animatique synchronisée (timing préliminaire)",
        "Notes de mise en scène par plan",
        "Variations de découpage si besoin",
      ],
      why: "Expérience storyboard chez REC'IM. Un bon storyboard évite des semaines de production perdue : l'image se construit avant qu'elle ne coûte.",
    },
  },
  {
    id: 'character-acting',
    icon: Person,
    title: 'Character acting',
    desc: "Donner vie à un personnage : intention, rythme, poids, émotion. Animation expressive et fluide.",
    span: 'lg:col-span-5',
    detail: {
      tagline: "Le personnage avant le mouvement.",
      what: "Acting et animation expressive : posing, timing, anticipation, follow-through. Application aux courts métrages, clips, jeux vidéo, productions animées.",
      audience: "Studios animation, jeu vidéo, productions narratives.",
      deliverables: [
        "Plans animés (acting validé en blocking puis splined)",
        "Variantes d'acting si demande",
        "Lip-sync sur dialogue (si fourni)",
      ],
      why: "Approche d'auteur : l'acting raconte l'histoire avant la mise en scène. Inspiré du cinéma d'animation classique (Disney, Pixar, Studio Ghibli) et de la 3D moderne (Sony, Spider-Verse).",
    },
  },
  {
    id: 'modelisation-3d',
    icon: Stack,
    title: 'Modélisation 3D',
    desc: "Hard surface, organique, stylisé. Pipeline ZBrush + Maya. Topologie clean prête pour l'animation.",
    span: 'lg:col-span-4',
    bgImage: '/MODELING.png',
    detail: {
      tagline: "Des modèles propres, prêts à être animés et rendus.",
      what: "Modélisation hard-surface (objets, véhicules, environnements) et organique (personnages, créatures, anatomie). Sculpting ZBrush, retopo Maya, UVs propres, normal maps.",
      audience: "Studios cherchant des assets prêts pour la prod, agences ayant besoin de visuels 3D, freelances en collaboration.",
      deliverables: [
        "Mesh basse définition propre (animation-ready)",
        "Mesh haute définition sculptée",
        "UVs + textures PBR (Substance Painter)",
        "Format livré : FBX, OBJ, USD, .ma selon besoin",
      ],
      why: "Pipeline solide : un modèle bien construit accélère toute la production aval (rigging, animation, lighting).",
    },
  },
  {
    id: 'lighting-rendering',
    icon: Lightbulb,
    title: 'Lighting & Rendering',
    desc: "Mise en lumière cinématographique sous Arnold et V-Ray. Lookdev et étalonnage final.",
    span: 'lg:col-span-4',
    bgVideoId: 'uUCeWzxNOss', // WHO — looping muted bg
    detail: {
      tagline: "L'image finale qui donne envie de regarder une seconde fois.",
      what: "Lighting cinématographique sous Arnold ou V-Ray : key light, fill, rim, GI, volumetrics. Lookdev complet, render passes, compositing AE / DaVinci, étalonnage.",
      audience: "Productions cinéma/anim ayant besoin du \"final look\", studios cherchant un lighter dédié, marques en quête d'images premium.",
      deliverables: [
        "Render final 4K (passes séparées si besoin)",
        "Lookdev de matières (PBR)",
        "Étalonnage cinéma (LUT custom)",
        "Versions WEB / broadcast / cinéma",
      ],
      why: "L'image cinématographique, c'est avant tout la lumière. ANGLE MORT (Unreal · Niagara FX) en est l'exemple : l'atmosphère se construit pixel par pixel.",
    },
  },
  {
    id: 'visual-storytelling',
    icon: FilmStrip,
    title: 'Visual storytelling',
    desc: "Direction visuelle d'ensemble : moodboards, cadrage, rythme du récit, identité d'univers.",
    span: 'lg:col-span-4',
    detail: {
      tagline: "Construire un univers, pas juste produire des images.",
      what: "Direction visuelle complète : moodboards, références, palette, langage de cadrage, rythme narratif, identité d'univers cohérente du premier au dernier plan.",
      audience: "Marques voulant une identité cinématographique, réalisateurs en pré-prod, studios cherchant un visual director freelance.",
      deliverables: [
        "Moodboard structuré + références",
        "Palette de couleurs + ambiance lumineuse",
        "Style frames (key visuals)",
        "Bible visuelle (document de référence pour l'équipe)",
      ],
      why: "Le storytelling visuel donne du sens à chaque choix : pourquoi ce cadre, cette lumière, ce mouvement. C'est ce qui fait la différence entre un beau plan et un plan qui raconte.",
    },
  },
  {
    id: 'motion-design',
    icon: MagicWand,
    title: 'Motion design',
    desc: "Génériques, transitions, identités animées. After Effects + Premiere Pro pour la post-production.",
    span: 'lg:col-span-6',
    detail: {
      tagline: "Mouvement précis, transitions léchées, signatures animées.",
      what: "Génériques de marque, logos animés, transitions cinétiques, explainers, contenus social media (vertical 9:16). Pipeline After Effects + Premiere Pro + Illustrator.",
      audience: "Marques (logo animé, identité), médias (génériques, habillages), créateurs de contenu (transitions, formats sociaux).",
      deliverables: [
        "Logo animé (3-10 sec)",
        "Pack transitions / habillage complet",
        "Versions formats sociaux (9:16, 1:1, 16:9)",
        "Sources AE livrées si demandé",
      ],
      why: "Le motion design réussi est invisible : il guide l'œil sans s'imposer. Chaque image-clé compte.",
    },
  },
  {
    id: 'compositing',
    icon: Sparkle,
    title: 'Compositing',
    desc: "Intégration multi-couches, effets visuels, rendu final. Workflow Maya → AE → DaVinci.",
    span: 'lg:col-span-3',
    detail: {
      tagline: "Là où la 3D rencontre la prise de vue réelle.",
      what: "Compositing multi-passes 3D, intégration de plans, rotoscoping, keying, stabilisation, grain match, color match. Workflow After Effects ou DaVinci Resolve.",
      audience: "Productions live ayant besoin d'effets 3D intégrés, studios cherchant un compositeur sur mesure.",
      deliverables: [
        "Plans composités finaux (4K)",
        "Versions étalonnées",
        "Sources composites livrables",
      ],
      why: "Un bon compositing rend une intégration crédible. Mauvais compositing = sortir le spectateur de l'histoire.",
    },
  },
  {
    id: 'direction-artistique',
    icon: Palette,
    title: 'Direction artistique',
    desc: "Conception d'univers cohérents, style frames, références. Vision globale d'un projet.",
    span: 'lg:col-span-3',
    detail: {
      tagline: "La cohérence visuelle, du premier brief au master final.",
      what: "Direction artistique d'un projet : recherches, moodboard, palette, style frames, choix de cadrage et d'éclairage, supervision de la cohérence visuelle sur l'ensemble de la production.",
      audience: "Marques, studios, productions ayant besoin d'un DA dédié pour piloter l'identité visuelle.",
      deliverables: [
        "Moodboard global du projet",
        "Style frames (3-6 images-clés)",
        "Bible visuelle complète",
        "Supervision pendant la production",
      ],
      why: "Une production sans direction artistique = une succession de plans. Avec DA = un univers reconnaissable.",
    },
  },
];
