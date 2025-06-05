# AVIF/AV1 Media Converter

Une application Next.js pour convertir automatiquement vos images et vidéos vers les formats modernes AVIF et AV1.

## 🎯 Fonctionnalités

- **Images** → Conversion vers AVIF
- **Vidéos** → Miniatures AVIF animées (10 frames) + Conversion AV1
- Interface temps réel avec progression
- Traitement en arrière-plan via Worker Threads
- Galerie d'affichage des résultats

## 📁 Structure

```
avif-av1-converter/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── process/          # Lancement des jobs
│   │   │   ├── progress/[jobId]/ # SSE pour progression
│   │   │   └── files/            # Scan des fichiers
│   │   ├── components/
│   │   └── page.tsx
│   ├── lib/
│   │   ├── ffmpeg.ts            # Service FFmpeg
│   │   ├── processor.ts         # Logique de traitement
│   │   └── workers/
│   │       └── video-processor.js
│   └── types/
├── public/
│   ├── input/                   # Dossier source
│   └── output/                  # Fichiers convertis
└── package.json
```

## 🚀 Installation

```bash
# Cloner et installer
git clone <repo>
cd avif-av1-converter
pnpm install

# Créer les dossiers
mkdir -p public/input public/output

# Démarrer
pnpm dev
```

## 🔧 Prérequis

- Node.js 18+
- FFmpeg installé système ou `@ffmpeg/ffmpeg`
- PNPM

## 💻 Utilisation

1. Placer images/vidéos dans `public/input/`
2. Ouvrir `http://localhost:3000`
3. Cliquer "Traiter les fichiers"
4. Suivre la progression en temps réel
5. Consulter les résultats dans la galerie

## 🔄 Architecture

### Flux de traitement
```
Utilisateur → API → Worker Thread → FFmpeg/LibAVIF → Résultats
     ↓                    ↓
Client React ← SSE ← parentPort ← Progression
```

### Formats supportés
- **Entrée** : JPG, PNG, WebP, MP4, MOV, AVI
- **Sortie** : AVIF (statique/animé), AV1

## 🛠️ Technologies

- **Frontend** : Next.js 14, TypeScript, Tailwind CSS
- **Backend** : Node.js Worker Threads, Server-Sent Events
- **Traitement** : FFmpeg, LibAVIF
- **Temps réel** : EventSource, SSE

## 📊 Progression temps réel

Le système utilise :
- **Worker Threads** pour traitement non-bloquant
- **Server-Sent Events** pour progression temps réel
- **EventSource** côté client pour mises à jour

## 🎨 Interface

- Dashboard principal avec bouton de traitement
- Barre de progression temps réel
- Galerie comparative avant/après
- Statistiques de compression

## 🔧 Configuration

Variables d'environnement :
```env
FFMPEG_PATH=/usr/bin/ffmpeg
INPUT_DIR=public/input
OUTPUT_DIR=public/output
MAX_CONCURRENT_JOBS=3
```

## 📝 Étapes de développement

1. ✅ Configuration environnement
2. ✅ Interface utilisateur
3. ✅ API détection fichiers
4. ✅ Service traitement images
5. ✅ Service traitement vidéo
6. ✅ Worker Threads + SSE
7. ✅ Galerie d'affichage
8. 🔄 Optimisations

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

This project is under the CC BY-NC-SA 4.0 licence, more info at the end of this README.

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/the-me-0/media-converter">AVIF/AV1 Media Converter</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/the-me-0">Noah PHILIPPE</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>