# AVIF/AV1 Media Converter

A Next.js 15 application to automatically convert your images and videos to the modern AVIF and AV1 formats.

## 🎯 Features

- **Images** → Conversion to AVIF
- **Vidéos** → Animated AVIF miniature (10 frames) + AV1 conversion
- Real time progress tracking
- Background processing using Worker Threads
- Processing statistics
- Gallery to display results

## 📁 Structure

> Hypothetical project structure for clarity

```
avif-av1-converter/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── process/          # Start processing
│   │   │   ├── progress/[jobId]/ # Progress tracking (SSE)
│   │   │   └── files/            # File detection
│   │   ├── components/
│   │   └── page.tsx
│   ├── lib/
│   │   ├── ffmpeg.ts            # FFmpeg wrapper
│   │   ├── processor.ts         # Image/Video processing logic
│   │   └── workers/
│   │       └── video-processor.js
│   └── types/
├── public/
│   ├── input/                   # Files to process
│   └── output/                  # Processed files
└── package.json
```

## 🚀 Installation

```bash
# Clone and install dependencies
git clone <repo>
cd media-converter
pnpm install

# Create input/output directories
mkdir -p public/input public/output

# Start the development server
pnpm dev
```

## 🔧 Prerequisites

- Node.js 22+
- FFmpeg installed and accessible in PATH
- PNPM

## 💻 Usage

1. Place images/videos in `public/input/`
2. Start the server with `pnpm dev`
3. Open `http://localhost:3000`
4. Click "Process Files"
5. Wait for processing to complete (real-time updates)
6. View results in `public/output/`, or directly in the gallery

## 🔄 Architecture

### Processing Flow
```
   User  →   API  →  Worker Thread  →  FFmpeg/LibAVIF  →  Results
     ↓                    ↓
React Client ← SSE ← parentPort ← Progression
```

### Formats
- **Input** : *To be determined* (e.g., JPEG, PNG, MP4)
- **Output** : AVIF, webm (AV1)

## 🛠️ Technologies

- **Frontend** : Next.js 15, TypeScript, Tailwind CSS
- **Backend** : Node.js Worker Threads, Server-Sent Events
- **Processing** : FFmpeg, LibAVIF
- **Real time** : EventSource, SSE

## 📊 Real-time Processing

This application uses:
- **Worker Threads** to handle a non-blocking processing of images and videos
- **Server-Sent Events** (SSE) for real-time updates
- **EventSource** to receive updates in the frontend

## 🎨 Interface

- Dashboard with a modern UI, to start, follow and see the results of the processing
- Real-time progress bar for each file
- Gallery to display processed files
- Statistics on processing time and file sizes

## 🔧 Configuration

Environment variables :

> *To be determined*

## 📄 Licence

This project is under the CC BY-NC-SA 4.0 licence, more info at the end of this README.

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/the-me-0/media-converter">AVIF/AV1 Media Converter</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/the-me-0">Noah PHILIPPE</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>