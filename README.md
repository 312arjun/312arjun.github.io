# Arjun // Portfolio template

Single-file portfolio with a **fixed-tray CD shelf** (CDs slide along a wide shallow arc). Open `index.html` in a browser, or serve the folder locally. Assets use relative `assets/...` paths.

## Controls
- **Drag** left/right to advance which CD is at center (turntable interaction with inertia, then snap).
- **Click** a CD (without much drag) to jump it to center and update the detail panel.
- **← →** buttons nudge by one project.

## Tray note
The tray image is **`assets/backgrounds/shelf.png` for now** (stand-in until a dedicated tray art is ready). It stays **fixed** (no `rotateY`); only CD cards reposition along the arc. Do not crop/re-encode asset PNGs from this template — reference them as-is.

## Edit projects
Open `index.html` and find near the top of `<script>`:

- `SITE` — brand, hero copy, about/contact, blank CD path, start index
- `PROJECTS` — editable array (`id`, `title`, `subtitle`, `description`, `tags`, `features`, `image`, `link`, `github`)

Finished jewel-case art: `assets/cds/cd_ha_dock.png`, `assets/cds/cd_iphone_companion.png`. Placeholder slots use `assets/cds/CD_without_artwork.png` (title overlay drawn on blank cases).

## CD size
Cards are ~**158×330px** at center, scaled down toward the arc edges. Images use `object-fit: contain` with no rectangular frame chrome.


## About page
- Open **`about.html`** for the About layout (bio, journey, skills, stats) — compact single-viewport layout.
- Edit the **`ABOUT`** config object near the top of the `<script>` in `about.html` for all copy (headline, bio, services, journey, skills, stats).
- Optional portrait: drop a photo at **`assets/about_photo.jpg`**. If missing, a dark initials placeholder (`AS`) is shown.
- Present journey entry can include a `link: { text, href }` (e.g. “View projects →” → `projects.html`).
- Landing nav **ABOUT** links to `about.html`; shared nav is `WORK | ABOUT | PROJECTS | CONTACT`.
- Reference mockup: `assets/mockups/about_mockup.png` (visual only; page uses placeholder portrait until photo exists).

## Contact page
- Open **`contact.html`** for the Contact layout (Email / Location / Timezone cards, socials, mailto form). Desk art **`assets/backgrounds/contact_bg.png`** is a **full-bleed fixed body background** (`cover` / `center bottom`) with a dark gradient overlay on `body::after` (do not modify the PNG).
- Edit the **`CONTACT`** config object near the top of the `<script>` in `contact.html` for copy, email, location/timezone, and social hrefs.
- Form is client-side only: validates required fields, then opens a `mailto:` with the filled subject/body.
- Nav **CONTACT** on all pages points to `contact.html`. Index still keeps a `#contact` stub section for anchors.
- Reference mockup: `assets/mockups/contact_mockup.png`.

## Projects page
- Open **`projects.html`** for the filterable project grid (section `02. PROJECTS`, amber headline accent, filter pills + search).
- Edit **`PROJECTS_PAGE`** (copy / filters) and **`PROJECTS`** (card data: title, category, filter, description, tags, icon, tone, github, link) in the page `<script>`.
- Cards use CSS/SVG jewel-case icon thumbs (no photo art required). GitHub / external hrefs default to `#` placeholders.
- Nav **PROJECTS** is wired on index / about / contact / projects. About journey “View projects →” links to `projects.html`.
- Reference mockup: `assets/mockups/projects_mockup.png` (visual only).

## Assets layout
```
assets/
  cds/           # jewel-case art for the shelf (+ blank CD)
  backgrounds/   # page backgrounds + shelf tray
  mockups/       # design reference mockups
  artwork/       # source cover art before CD composite
  _scratch/      # debug / temp images
```
Optional: `assets/about_photo.jpg` for the About portrait.
