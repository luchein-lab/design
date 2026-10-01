# Capptus design-system instructions

- Read README.md, docs/foundations.md, and docs/provenance.md before editing.
- Preserve the original logo bytes, proportions, transparency, and colors.
- Approved typography: Lora Medium 500 for h1–h3/display/quotes, real Lora Italic for 1–2 emphasized headline words; Montserrat 400 for body and 500/600 for UI. See docs/typography.md.
- Keep fixed identity, inherited design direction, and proposed implementation choices distinct.
- Do not introduce client claims, commercial metrics, or invented endorsements.
- Update tokens/tokens.json and regenerate styles/tokens.css; do not hand-edit generated CSS.
- Edit scripts/showcase.mjs and regenerate index.html; do not hand-edit the generated showcase.
- Preserve the supplied icon/emoji kit and source artwork; keep publication within the user's authorized design scope.
- Preserve native HTML semantics, visible keyboard focus, and reduced-motion behavior.
- Run npm run build and npm run check after changing tokens or components.
- Record material design decisions in docs/foundations.md.
- Do not commit, push, publish packages, or deploy unless the user explicitly asks.
