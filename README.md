# Dikeledi Kwenaite — Personal Portfolio

A premium, modern, responsive personal portfolio website built for graduate programs, internships, and full-time job applications in Software and Data Engineering.

## Overview

This is a single-page portfolio with a merlot & champagne, glassmorphic aesthetic — designed to feel premium, elegant, and production-ready. It showcases my background, education, technical & soft skills, selected projects, certifications, and contact details.

### Sections

- **Hero** — introduction with animated typewriter tagline and portrait
- **About** — background, education journey, and areas of interest
- **Skills** — programming languages, tools, and soft skills with animated proficiency bars
- **Projects** — filterable showcase of selected work (AI, Web, Data)
- **Education** — academic timeline (WeThinkCode_, TVET NATED N1–N5)
- **Experience** — current independent work and learning
- **Certifications** — continuous learning highlights
- **Contact** — contact form and social links
- **Chrome** — sticky navbar, smooth scroll, back-to-top

## Tech Stack

- **React 19** + **TypeScript** — component architecture and type safety
- **TanStack Start** + **Vite 7** — full-stack React framework with SSR
- **Tailwind CSS v4** — utility-first styling with semantic design tokens
- **Framer Motion** — smooth scroll-triggered animations
- **Lucide React** — icon system
- **Responsive design** — mobile-first, works from 320px up to ultrawide

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+

### Run locally

```bash
bun install
bun dev
```

The app runs on `http://localhost:8080`.

### Build for production

```bash
bun run build
```

The production bundle is emitted to `dist/`.

### Preview the production build

```bash
bun run start
```

## Deployment

The `dist/` output is a static-friendly build and can be deployed to:

- **Vercel** — import the repo, framework preset auto-detected
- **Netlify** — drag & drop `dist/` or connect the repo
- **GitHub Pages** — push `dist/` to the `gh-pages` branch
- **Cloudflare Pages** — connect the repo, build command `bun run build`

No environment variables are required for the base site.

## Customising Content

All content lives in typed data arrays inside the portfolio components — no CMS needed. Edit the file, save, and the preview updates instantly.

| What to change | File |
| --- | --- |
| Name, tagline, portrait, social links | `src/components/portfolio/Hero.tsx` |
| About bio and highlights | `src/components/portfolio/About.tsx` |
| Technical & soft skills | `src/components/portfolio/Skills.tsx` |
| Projects (title, description, tech, links) | `src/components/portfolio/Projects.tsx` |
| Education & experience timeline | `src/components/portfolio/Timeline.tsx` |
| Certifications | `src/components/portfolio/Timeline.tsx` (`certifications` array) |
| Contact details | `src/components/portfolio/Contact.tsx` |
| Navigation items | `src/components/portfolio/Navbar.tsx` |
| Page metadata (title, description, OG tags) | `src/routes/__root.tsx` |

### Downloadable CV

Drop your CV at `public/cv.pdf` — the "Download CV" button in the hero links to it automatically.

### Portrait image

Replace `src/assets/portrait.jpg` with your own photo (square crop works best).

## Project Structure

```text
src/
├── assets/                  # Images (portrait, etc.)
├── components/
│   ├── portfolio/           # Section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Timeline.tsx     # Education, Experience, Certifications
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   ├── Chrome.tsx       # Back-to-top, scroll utilities
│   │   └── Section.tsx      # Shared section wrapper
│   └── ui/                  # shadcn/ui primitives
├── routes/
│   ├── __root.tsx           # App shell, head metadata
│   └── index.tsx            # Home page
├── styles.css               # Tailwind v4 theme tokens
└── router.tsx               # TanStack Router setup
```

## Design System

Colors, gradients, and typography are defined as semantic design tokens in `src/styles.css`. Components consume tokens (`bg-primary`, `text-foreground`) rather than hardcoded values, so the theme can be re-skinned in one place.

- **Palette**: deep wine-black background (`#140C11`), ivory text and champagne rose-gold accents (`#9C6B5A → #D9AE94 → #F3D9C6`) with soft merlot glows (`#7A1F3D`)
- **Effects**: glassmorphism (`.glass-card`), gold gradient text (`.gold-gradient-text`), soft radial glows
- **Motion**: scroll-triggered fades, staggered reveals, hover lifts (Framer Motion)

## License

Personal portfolio — all content © Dikeledi Kwenaite.
