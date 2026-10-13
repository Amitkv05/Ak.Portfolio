# Video Portfolio — Next.js Version

This is the Next.js conversion of the existing React/Vite portfolio. The design and behavior are intentionally preserved: 5-second slide-up splash, continuous one-page scrolling, light/dark theme, animated hero, About, Skills, Projects, case studies, and Contact.

## Stack
- Next.js (App Router)
- React
- JavaScript / JSX
- Framer Motion
- Plain CSS

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production build
```bash
npm run build
npm start
```

## Main files
- `app/layout.jsx` — metadata, global CSS, theme boot script
- `app/page.jsx` — home route
- `components/Portfolio.jsx` — complete one-page portfolio
- `components/Nav.jsx` — sticky navigation + theme toggle
- `components/SplashScreen.jsx` — 5-second splash
- `components/ProjectCase.jsx` — project case-study layout
- `data/projects.js` — project content
- `app/globals.css` — complete styling and responsive/dark-theme rules

## Customize
Replace placeholder email/phone/GitHub/LinkedIn values inside `components/Portfolio.jsx`. Edit projects in `data/projects.js`. Replace the `AK` placeholder blocks with your own image/component when ready.

## Notes
- This version does not use Vite.
- This version does not use TypeScript.
- Hash links remain on one page, so About/Skills/Projects/Contact are reached through normal continuous scrolling.
- GitHub/LinkedIn icons are local SVG React components, so there is no `lucide-react` export issue.
