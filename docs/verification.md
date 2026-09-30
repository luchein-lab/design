# Verification record

September 30, 2026 · showcase 0.2.0

## Passed

- Generated styles/tokens.css matches tokens/tokens.json.
- Generated index.html matches scripts/showcase.mjs and assets/catalog.json.
- All 32 catalog entries resolve: 8 illustrations, 8 compact emoji designs, and 16 interface icons.
- All 75 library/reference/download files match assets/manifest.json.
- The 56 extracted emoji and interface files match the supplied ZIP byte for byte.
- The original Capptus logo matches the original source SHA-256.
- Local stylesheet, image, script, download, and fragment destinations exist.
- HTML IDs are unique; field label and description references resolve.
- Showcase and filter JavaScript syntax checks pass.
- Documented normal-text pairs exceed 4.5:1 computed contrast: ink/limestone 16.09, muted/limestone 5.42, action/limestone 5.32, white/action 5.70, white/cactus 8.57, ink/sand 10.26, muted/white 5.82.

## Visual source review

The supplied icon/emoji reference sheet and a rendered contact sheet of all 17 workshop pages were reviewed. PDF pages 1, 2, 6, and 15 were selected for their presentation design; client-specific exercises, commercial amounts, and personal working assignments were omitted. The original PDF is unchanged and remains outside the repository.

## Browser review pending

The in-app browser again denied localhost navigation because its admin-enforced security policy could not be verified. No alternate route was used to bypass this control. Search, filter interaction, keyboard navigation, mobile layout, zoom, and screen-reader behavior have not been verified in a browser.

Before product release, review the page at desktop and mobile widths, keyboard navigation, 200% zoom, reduced motion, and with a screen reader. Automated checks do not certify accessibility or product readiness.

## Publication scope

The user explicitly authorized commit and push to luchein-lab/design on September 30, 2026, and clarified that the repository should showcase the work already created. This release contains a visual GitHub README and an interactive static gallery. Website hosting and package distribution have not been configured.
