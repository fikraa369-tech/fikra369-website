# FIKRA 369 Website

Production-ready front-end built with React + TypeScript + Vite.

## Stack
- React
- TypeScript
- Vite
- React Router
- Lucide React SVG icons
- Custom responsive CSS

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Contact details
Edit `src/config.ts` and add:
- `whatsappNumber` without the plus sign, example: `971501234567`
- `phone`
- `email`
- social media links

## Domain / SEO
Replace `YOUR-DOMAIN.com` in:
- `public/robots.txt`
- `public/sitemap.xml`

## Deployment
- Vercel: `vercel.json` already contains SPA rewrite rules.
- cPanel/Apache: configure all non-file routes to return `index.html` for React Router.

## Notes
- Arabic/English language switch is built in.
- Arabic RTL and English LTR are automatic.
- All interface icons are real SVG icons from Lucide React; no emoji icons are used.
- About images are stored locally under `public/assets/about`.
