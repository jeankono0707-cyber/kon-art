================================================================================
KON'art — Dossier de déploiement Hostinger
================================================================================

Contenu de ce dossier (5 fichiers) :

  - index.html                       → la page principale du site
  - CV-Jean-Marie-Onana-Kono.pdf     → votre CV téléchargeable
  - favicon.svg                      → l'icône du site
  - .htaccess                        → config Apache (HTTPS, gzip, cache)
  - robots.txt                       → instructions pour Google
  - sitemap.xml                      → plan du site pour Google
  - README.txt                       → ce fichier (à NE PAS uploader)

================================================================================
DÉPLOIEMENT HOSTINGER — méthode File Manager (la plus simple)
================================================================================

  1. Connectez-vous à hPanel (panneau Hostinger)
  2. Cliquez sur "Gestionnaire de fichiers" (File Manager)
  3. Ouvrez le dossier "public_html"
  4. Supprimez tous les fichiers existants à l'intérieur (par défaut Hostinger
     y met une page de bienvenue — il faut la virer)
  5. Glissez-déposez TOUS les fichiers de ce dossier "deploy/" SAUF README.txt
     directement dans public_html/
  6. Vérifiez que ".htaccess" est bien présent (parfois caché — activez
     "Afficher les fichiers cachés" si nécessaire)
  7. Visitez votre nom de domaine — le site est en ligne.

================================================================================
AVANT MISE EN LIGNE — à modifier dans index.html, robots.txt, sitemap.xml
================================================================================

  Remplacez "VOTRE-DOMAINE.com" partout par votre vrai domaine, par exemple :
    - "konart.studio"
    - "jeanmarie-onanakono.fr"
    - ou ce que vous avez acheté

  Cherchez et remplacez aussi dans index.html les balises :
    - <link rel="canonical" href="https://konart.studio/" />
    - <meta property="og:url" content="..." />
  par votre vraie URL.

================================================================================
DOMAINE PERSONNALISÉ
================================================================================

  Si vous avez déjà acheté un domaine via Hostinger : il pointe automatiquement
  vers votre public_html/ — rien à faire.

  Si vous avez acheté votre domaine ailleurs (OVH, Namecheap...) :
    1. Hostinger vous donne 2 nameservers (ns1.dns-parking.com, ns2...)
    2. Allez chez votre registrar
    3. Modifiez les "DNS" du domaine pour utiliser ces 2 nameservers
    4. Attendez 1 à 24h pour la propagation

================================================================================
SSL / HTTPS
================================================================================

  Hostinger fournit un certificat SSL gratuit (Let's Encrypt) :
    1. hPanel → SSL → "SSL gratuit" → Activer
    2. Attendez 5 à 10 minutes
    3. Le .htaccess force déjà la redirection https — c'est tout

================================================================================
EMAIL professionnel
================================================================================

  Hostinger inclut souvent 1 ou 2 emails gratuits (selon votre plan).
  Vous pouvez créer "contact@votre-domaine.com" et remplacer dans
  index.html toutes les occurrences de "onanakono0707@yahoo.com".

================================================================================
MISE À JOUR DU SITE
================================================================================

  Pour modifier le site plus tard :
    1. Modifiez les fichiers en local
    2. Re-uploadez les fichiers modifiés via File Manager
    3. Forcez le rechargement (Ctrl+Shift+R) sur votre navigateur pour voir

================================================================================
SUPPORT
================================================================================

  - Hostinger Support : https://support.hostinger.fr
  - Documentation Apache .htaccess : https://httpd.apache.org/docs/

================================================================================
