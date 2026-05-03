# Abdulrahman Bashir Portfolio

## Project Overview
Personal portfolio website for Abdulrahman Bashir — a Senior Frontend Engineer. The site showcases expertise, career history, projects, and provides a contact form. Deployed to GitHub Pages at [abdulrahman-bashir.com](https://www.abdulrahman-bashir.com).

## Tech Stack
- **Framework**: React 18 (Create React App / `react-scripts 5.0.1`)
- **Language**: TypeScript 4.9
- **UI Library**: Material UI (MUI) v5
- **Styling**: SCSS (Sass) + MUI `sx` prop inline styles
- **Icons**: FontAwesome (brands, solid, regular) + MUI Icons
- **Animations**: Custom `FadeIn` component (staggered reveal), `typewriter-effect`
- **Timeline**: `react-vertical-timeline-component`
- **Video**: `react-player` (YouTube embeds)
- **Email**: `@emailjs/browser` for contact form
- **Analytics**: Google Analytics (gtag.js)
- **Deployment**: GitHub Pages (`gh-pages`)

## Project Structure
```
src/
├── App.tsx                    # Root component — theme, dark/light mode, section layout
├── index.tsx                  # Entry point (ReactDOM.createRoot)
├── index.scss                 # Global styles, dark/light mode theming
├── constants.ts               # TypeWriter label strings
├── types/
│   └── project.ts             # ProjectData interface
├── assets/
│   ├── images/
│   │   ├── bg-dark.png        # Hero background (420 KB)
│   │   ├── bg-light.png       # Hero background light (552 KB)
│   │   ├── profile.jpeg       # Profile photo (91 KB)
│   │   └── projects/          # Project screenshots (many are 1-4 MB PNGs!)
│   └── styles/
│       ├── Main.scss
│       ├── Expertise.scss
│       ├── Timeline.scss
│       ├── Project.scss
│       ├── ProjectDetails.scss
│       ├── Contact.scss
│       └── Footer.scss
├── components/
│   ├── index.js               # Barrel exports for all page sections
│   ├── Navigation.tsx         # AppBar with scroll spy, mobile Drawer
│   ├── Main.tsx               # Hero section (profile, typewriter, social links)
│   ├── Expertise.tsx          # Skills grid (Web, Mobile, DevOps) with chips
│   ├── Timeline.tsx           # Career history using VerticalTimeline
│   ├── Project.tsx            # Project cards grid with click-to-detail
│   ├── ProjectDetails.tsx     # Full-screen MUI Dialog for project details
│   ├── Contact.tsx            # Contact form with EmailJS integration
│   ├── Footer.tsx             # Social links footer
│   ├── FadeIn.tsx             # Staggered fade-in animation wrapper
│   ├── common/
│   │   └── ImageCarousel.tsx  # Image slideshow with MobileStepper dots
│   └── projects/
│       ├── TalabatWebsite.tsx  # Detailed Talabat website project page
│       ├── TalabatMobile.tsx   # Placeholder (TBD)
│       ├── Vodafone.tsx        # Detailed Vodafone project page
│       ├── CrossOver.tsx       # Placeholder
│       └── ParentAps.tsx       # Placeholder
```

## Architecture & Conventions

### Single-Page Layout
- All sections render on a single page (no routing)
- Navigation uses `scrollIntoView({ behavior: 'smooth' })` to scroll to section IDs
- Section IDs: `expertise`, `history`, `projects`, `contact`

### Theming
- Dark/light mode toggled via state in `App.tsx`
- CSS class `dark-mode` / `light-mode` applied to `.main-container`
- MUI ThemeProvider with primary color `#f55905` (orange)
- Background: `#0d1116` (dark) / `#f8f9fa` (light)

### Component Patterns
- Functional components only (no class components)
- MUI components used extensively (AppBar, Dialog, TextField, Chip, Grid, Paper, etc.)
- SCSS files per component in `assets/styles/`
- `sx` prop used for one-off styling within MUI components
- No state management library (local state only via `useState`)
- No code splitting or lazy loading

### Styling Approach
- Global SCSS in `index.scss` for base styles and light/dark mode overrides
- Component-specific SCSS files imported directly in components
- Font: "Lato" sans-serif (system fallback stack)
- No CSS Modules — plain class names

### Data
- All content is hardcoded in components (no CMS, no JSON data files)
- Career timeline entries are inline JSX in `Timeline.tsx`
- Project data array defined in `Project.tsx`

## Known Performance Issues

### Critical: Large Unoptimized Images (~13 MB total in build)
- `vodafone_id.jpg` — **2.4 MB**
- `Releasing_Re_ranking_experiment.png` — **4.6 MB**
- `QCPL re-ranking on the CMS.png` — **3.4 MB**
- `1.website.png` — **1.2 MB**
- Background images (`bg-dark.png`, `bg-light.png`) — ~1 MB combined
- All images are bundled into the main build (no lazy loading)

### Critical: No Code Splitting
- Single monolithic JS bundle: **506 KB** (minified)
- All components, MUI, FontAwesome, react-player, react-vertical-timeline loaded upfront
- `react-player` loaded even though it's only used inside project details dialog

### Moderate: CRA (Create React App) Limitations
- No SSR/SSG — entire app is client-side rendered
- No built-in image optimization
- Webpack 5 but no manual optimization config (would need eject)
- No route-based code splitting (single page, but could split project details)

### Moderate: MUI Bundle Size
- Full MUI library imported (~150 KB+ gzipped contribution)
- Many individual MUI component imports but tree-shaking limited by CRA config

### Minor: FadeIn Component
- Uses sequential `setTimeout` per child (5 children × 50ms delay = cascading re-renders)
- Not a major bottleneck but adds perceived load time

### Minor: Theme Recreation on Every Render
- `createTheme()` called inside `App` function body without `useMemo`

## Development Commands
```bash
npm start          # Dev server (port 3000)
npm run build      # Production build
npm run deploy     # Build + deploy to GitHub Pages
npm run lint       # ESLint check
npm run lint:fix   # ESLint auto-fix
npm run format     # Prettier format
```

## Environment
- Homepage: `https://www.abdulrahman-bashir.com`
- **Hosting**: GitHub Pages (deployed via `gh-pages` branch)
- **Domain**: Purchased from Cloudflare, DNS managed via Cloudflare
- Custom domain configured via `CNAME` file in repo root
- EmailJS service: `service_ye32xm4`, template: `template_kwv9beb`
- Google Analytics: `G-1V8FGEYYM9`
