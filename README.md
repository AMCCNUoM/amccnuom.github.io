# Andrew Mayes Centre for Cognitive Neuroscience — website source

This is the source for the AMCCN site (deployable at `amccnuom.github.io`).
It is a small static site — no build step.

## Files

- `index.html` — the page shell. Loads React + Babel from a CDN, then `amccn-data.jsx` and `amccn-site.jsx`.
- `amccn-data.jsx` — **all editable text content for the research themes & labs.** Open this file to change theme blurbs, lab names, lab leads, or the URLs each lab links out to.
- `amccn-site.jsx` — page layout (Home, Research, Training, Facilities, Public engagement, theme detail). Edit copy in here for the homepage / sub-pages.

## How to edit text

You can edit either file directly on GitHub via the pencil ✏️ icon, commit, and the change goes live in ~30 seconds.

### To change a theme blurb or lab list (`amccn-data.jsx`)

Find the theme in `AMCCN_THEMES` and change `blurb`, `description`, or items in `labs`.
Lab `url` fields are placeholders (`#lab-...`) — replace each with the real lab page URL.

### To change homepage copy (`amccn-site.jsx`)

Look for the `Home` component (around the `// ─── HOME ───` comment) and edit the JSX text directly.

### To change sub-page copy

Each subpage (`Research`, `Training`, `Facilities`, `Engagement`) is a small component lower in `amccn-site.jsx`. Edit the `PageHeader` lede and the row data in place.

## Local preview

Open `index.html` in a browser. Babel transpiles the JSX in-browser at load time — no build is needed.


## Notes

- The site uses Google Fonts (EB Garamond, Source Sans 3, JetBrains Mono) loaded over the network.
- All photo placeholders are striped SVG fills with a label — to swap in real images, edit the `<StripedPlaceholder>` calls in `amccn-site.jsx`.
- The forest-green + ivory palette is baked into `index.html` — change values in `PALETTE = {...}` there to retune.
