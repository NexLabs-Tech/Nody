# Nody UI

The first design-system workspace for Nody. This folder is intentionally a small, framework-free starting point while the product and stack are being defined. It is not a repository or a production component library yet.

## Direction

Nody starts with a workspace tree that can grow from an organization to families and other kinds of groups. Pages, databases, and blocks live inside that hierarchy. The interface uses a quiet, paper-like neutral palette and restrained blue actions, adapted from the local Notion design-system reference.

## Pages and shared files

- `tokens.css` — Nody UI color, type, spacing, radius, motion, and elevation tokens.
- `system.css` and `system.js` — shared responsive shell, hamburger navigation, theme toggle, and preview styles.
- `index.html` — design-system overview and navigation hub.
- Foundations: `colors.html`, `typography.html`, `logos.html`, `icons.html`, `layout.html`.
- Components: `ctas.html`, `controls.html`, `navigation.html`, `blocks.html`, `databases.html`, `charts.html`, `states.html`.
- Guidelines: `accessibility.html`.
- `logo/` — high-resolution light/dark PNG logos plus editable SVG drafts for the symbol and wordmark.
- `styles.css` — workspace component preview styles from the initial prototype.

Open `index.html` in a browser and use the left navigation to switch sections. No build tools are required. Google Material Symbols load from Google Fonts, so the browser needs an internet connection to display the icon glyphs.

## Early component inventory

The catalog demonstrates CTAs, form controls, navigation, content blocks, database table and board views, charts, feedback states, accessibility guidance, Material Symbols, typography, logo assets, colors, and layout tokens. These are framework-free visual prototypes, not a committed component API. The theme button in the top bar previews light and dark token values.

## Stack decisions still open

Google Material Symbols are selected for the interface. Choose the frontend framework, component packaging, typography licensing, token format, and accessibility/testing conventions before turning these prototypes into shared production components. Backend, server, and worker repositories are intentionally out of scope for this initial design-system workspace.
