# 🚀 Déploiement KON'art — Guide pas-à-pas

> Site en ligne en 15 minutes : Git push → Hostinger upload.

---

## ✅ Ce qui est déjà fait

- ✅ Repo git initialisé sur la branche `main`
- ✅ Commit initial créé (`4ce9bf1` — "Initial commit — KON'art portfolio v1.0")
- ✅ Dossier `deploy/` prêt à uploader (index.html + CV + favicon + .htaccess + robots + sitemap)
- ✅ Config Apache pour Hostinger (HTTPS, gzip, cache navigateur, sécurité)

---

## 📦 ÉTAPE 1 — Pousser sur GitHub (5 min)

### 1.1 Créer le repo sur GitHub

1. Sur l'onglet GitHub que vous avez déjà ouvert, cliquez sur le bouton vert **"Créer un dépôt"** (ou allez sur https://github.com/new)
2. Remplissez :
   - **Repository name** : `kon-art`
   - **Description** : `Portfolio de Jean Marie Onana Kono — 3D Generalist freelance`
   - **Public** ou **Private** (votre choix — Public est OK pour un portfolio)
   - ⚠️ **Ne cochez RIEN d'autre** (pas de README, pas de .gitignore, pas de licence — sinon ça va créer un conflit)
3. Cliquez **"Create repository"**
4. GitHub vous montre une page avec une URL de type :
   ```
   https://github.com/VOTRE-USERNAME/kon-art.git
   ```
   Notez-la.

### 1.2 Pousser le code (3 commandes)

Ouvrez **PowerShell** ou **Git Bash** dans `C:\Users\jeanKono2\Claude\kon-art\` et tapez :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/kon-art.git
git branch -M main
git push -u origin main
```

> Remplacez `VOTRE-USERNAME` par votre vrai pseudo GitHub.

GitHub vous demandera de vous identifier :
- **Méthode 1 (la plus simple)** : une fenêtre Chrome s'ouvre → cliquez "Authorize"
- **Méthode 2** : token personnel → suivez les indications

Une fois poussé, rafraîchissez votre page GitHub : tous les fichiers apparaissent.

---

## 🌐 ÉTAPE 2 — Déployer sur Hostinger (10 min)

### Option A — File Manager (RECOMMANDÉE, la plus simple)

#### 2.A.1 Préparer les fichiers

Le dossier `deploy/` contient tout ce qu'il faut. Avant d'uploader, ouvrez ces 3 fichiers et **remplacez `VOTRE-DOMAINE.com` par votre vrai domaine** :

- `deploy/index.html` — chercher `VOTRE-DOMAINE.com` (zéro occurrence pour l'instant, mais cherchez `konart.studio` et remplacez par votre domaine si différent)
- `deploy/robots.txt` — chercher `VOTRE-DOMAINE.com`
- `deploy/sitemap.xml` — chercher `VOTRE-DOMAINE.com`

#### 2.A.2 Uploader sur Hostinger

1. Connectez-vous à **hPanel** : https://hpanel.hostinger.com
2. Choisissez votre site (s'il y en a plusieurs)
3. Sidebar gauche → **Site** → **Gestionnaire de fichiers** (File Manager)
4. Naviguez jusqu'à `public_html/`
5. **Supprimez tout** ce qui est déjà dedans (Hostinger met une page de bienvenue par défaut)
6. **Sélectionnez les 6 fichiers du dossier `deploy/`** sur votre PC :
   - `index.html`
   - `CV-Jean-Marie-Onana-Kono.pdf`
   - `favicon.svg`
   - `.htaccess`
   - `robots.txt`
   - `sitemap.xml`

   ⚠️ **NE PAS uploader** `README.txt` (c'est juste mes notes pour vous)
7. **Glissez-déposez** ces 6 fichiers dans `public_html/` (ou cliquez "Upload" en haut)
8. Vérifiez que `.htaccess` est bien présent — si pas visible : icône engrenage → **"Show hidden files"**
9. Visitez votre nom de domaine — **le site est en ligne** 🎉

### Option B — Auto-deploy depuis GitHub (plus avancé, optionnel)

Hostinger Premium / Business / Cloud propose **Git deployment** :

1. hPanel → **Site** → **Auto-deploy de Git**
2. **Add Repository** → coller `https://github.com/VOTRE-USERNAME/kon-art.git`
3. **Branch** : `main`
4. **Build path** : `/deploy` (très important — pointe vers le dossier statique)
5. **Deploy directory** : `public_html/`
6. **Connect** → autorise GitHub
7. À chaque `git push`, le site se met à jour automatiquement.

---

## 🔒 ÉTAPE 3 — HTTPS et finalisation (5 min)

### 3.1 Activer SSL gratuit
1. hPanel → **Avancé** → **SSL**
2. Cliquez **"Installer SSL gratuit"** (Let's Encrypt) sur votre domaine
3. Attendez 5-10 minutes
4. Le `.htaccess` force déjà `http → https` automatiquement

### 3.2 Vérifier que tout marche
- Visitez `https://votre-domaine.com` → la page se charge
- Cliquez le bouton **"Voir mon travail"** → scroll vers le portfolio
- Cliquez **ANGLE MORT** ou **Mystère** → le lightbox YouTube s'ouvre
- Cliquez le gros bouton play du Showreel → la vidéo YouTube se lance
- Cliquez **"Télécharger le CV"** → le PDF se télécharge
- Testez sur **mobile** (smartphone) — le site doit être responsive

---

## 🆘 EN CAS DE PROBLÈME

### "Le site ne s'affiche pas"
- Vérifiez que `index.html` est bien à la **racine** de `public_html/` (pas dans un sous-dossier)
- Forcez le rechargement : `Ctrl + Shift + R` sur le navigateur

### "Les images ne se chargent pas"
- Les images viennent du CDN ArtStation directement — vérifiez que vous avez Internet
- Aucune image n'est stockée en local sauf le PDF + le favicon

### "La vidéo Showreel ne se lance pas"
- Vérifiez que YouTube n'est pas bloqué (pare-feu, extension de blocage)
- Adresse YouTube intégrée : `https://www.youtube-nocookie.com/embed/uUCeWzxNOss`

### "Erreur 500 Internal Server Error"
- Souvent : problème dans le `.htaccess`. Renommez-le temporairement en `_htaccess` pour vérifier
- Hostinger File Manager → clic droit → Rename

### "Mon domaine n'est pas relié"
- Vérifiez les **nameservers** chez votre registrar :
  - `ns1.dns-parking.com`
  - `ns2.dns-parking.com`
  (ou ce que Hostinger vous indique)

---

## 📝 MISES À JOUR FUTURES

Pour modifier le site plus tard :

1. Modifiez le fichier en local (`deploy/index.html` par exemple)
2. **Re-uploadez** ce fichier sur Hostinger File Manager (écrase l'ancien)
3. **Ou** si auto-deploy Git activé : `git add . && git commit -m "update" && git push`

---

## 📞 CONTACT

Email : onanakono0707@yahoo.com
ArtStation : https://www.artstation.com/jeankono
LinkedIn : https://www.linkedin.com/in/jean-marie-onana-kono-8033b3194
