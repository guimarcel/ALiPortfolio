# ALiPortfolio

Personal portfolio website — a fast, minimal single-page app built with React and Vite.

## Stack

- **React 18** — UI
- **Vite 5** — bundler and dev server
- **React Router v6** — client-side routing
- **CSS Modules** — scoped component styles
- **react-helmet-async** — per-page `<title>` and Open Graph meta tags

## Architecture

```
src/
├── App.jsx              # Router setup, HelmetProvider, ScrollToTop
├── main.jsx             # Entry point
├── data/
│   └── projects.js      # Single source of truth — all project data lives here
├── pages/
│   ├── Home.jsx         # Hero + project grid
│   └── ProjectPage.jsx  # Individual project detail
├── components/
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectGrid.jsx
│   ├── YouMayAlsoLike.jsx
│   └── Footer.jsx
└── styles/
    └── global.css       # CSS custom properties (--bg, --text, --text-muted, --border)
```

**Routing:**

| Path | Component | Description |
|------|-----------|-------------|
| `/` | — | Redirects to `/work` |
| `/work` | `Home` | Hero section + project grid |
| `/:slug` | `ProjectPage` | Project detail page |

**Data layer:** `src/data/projects.js` exports a single array of projects. Each entry has `id`, `slug`, `title`, `year`, `description`, `tags`, `cover` (CDN image URL), and `link`. All components read from this array — adding a new project only requires appending an entry here.

**Styling:** CSS Modules per component for scoped styles. Global design tokens defined as CSS custom properties in `global.css`. Dark editorial aesthetic — background `#191919`, text `#ffffff`, muted `#888888`. Font: DM Sans (Google Fonts).

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Adding a project

Append an entry to `src/data/projects.js` — no other files need to change.

```js
{
  id: 7,
  slug: "my-new-project",
  title: "My New Project",
  year: "2025",
  description: "Short description of the project.",
  tags: ["Tag1", "Tag2"],
  cover: "https://cdn.example.com/image.jpg",
  link: "/my-new-project"
}
```
