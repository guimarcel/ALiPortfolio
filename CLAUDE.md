# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview production build
```

## Architecture

Single-page React app built with Vite 5. No backend — all data is static.

**Routing** (`src/App.jsx`): React Router v6 with three routes:
- `/` → redirects to `/work`
- `/work` → `Home` page (hero + project grid)
- `/:slug` → `ProjectPage` (project detail)

`ScrollToTop` component inside `App.jsx` handles scroll-to-top on every navigation.

**Data** (`src/data/projects.js`): single exported array of 6 projects. Each project has `id`, `slug`, `title`, `year`, `description`, `tags`, `cover` (CDN image URL), and `link` (route path). This is the single source of truth — all components consume it.

**Styling**: CSS Modules per component (e.g. `Navbar.module.css` alongside `Navbar.jsx`). Global tokens defined in `src/styles/global.css` as CSS custom properties (`--bg`, `--text`, `--text-muted`, `--border`). Font is DM Sans loaded from Google Fonts in `index.html`.

**Meta tags**: `react-helmet-async` with `HelmetProvider` wrapping the app in `App.jsx`. Each page sets its own `<title>` and `og:*` tags.

## Key design constraints

- Background `#191919`, text `#ffffff`, muted `#888888` — maintain the dark editorial aesthetic.
- Card images use `aspect-ratio: 3/2` and `object-fit: cover`.
- Grid is 2 columns desktop / 1 column mobile (breakpoint `768px`).
- `YouMayAlsoLike` shows 4 projects excluding the current one.
- To add a new project: append an entry to `src/data/projects.js` — no other files need to change.
