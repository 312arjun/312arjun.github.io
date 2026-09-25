# Arjun Soundarajan — Portfolio (Vite + React)

Interactive portfolio with a CD jewel-case shelf, About, Projects, and Contact pages.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Routing

This app uses **HashRouter** (`#/`, `#/about`, `#/projects`, `#/contact`) with Vite `base: './'`.

That combination works when:
- opening files from a folder,
- serving from any subpath,
- hosting on GitHub Pages (user or project site).

Clean path URLs (`BrowserRouter`) need server rewrite rules and break with a relative `base`, so HashRouter was chosen.

## Layout

- `src/` — React app (pages, components, styles, data, CD shelf engine)
- `public/assets` — images (served as `assets/...`)
- `public/docs` — resume PDF
- `_legacy/` — previous static HTML/CSS/JS site (backup; not used by the React app)

## Notes

- Do not recompress or rename artwork PNGs under `public/assets`.
- GitHub username in project links remains `312arjun`.
