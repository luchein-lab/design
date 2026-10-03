# Verification record

## Baja background publication · October 3, 2026

- Five published PNGs match the reviewed generated files byte for byte, each 1672 × 941 pixels. The gallery and README expose all five, usage guidance and the download ZIP.
- Current files and every downloadable ZIP were checked for superseded application filenames and presentation binaries; none remain. Git history was not rewritten.
- Build and repository checks pass: generated HTML/CSS, 30 icon catalog records, 184 file hashes, original logo, links, IDs, labels and documented text contrast. All ZIPs pass integrity checks.
- The background section was reviewed in the local in-app browser at its desktop viewport. The heading, first image row and captions render correctly. Mobile, keyboard and screen-reader behavior were not re-tested for this update. Earlier browser limitations below are historical records.

## Master prompt and imagery reference cleanup · October 2, 2026

- The chat master prompt is saved with regular and negative guidance and linked from the README, showcase, usage notes, contributor rules and current kit.
- Current README/HTML examples reference the v2 board, executive diagram and selected primary mark. Older moodboard images are accessible only through the historical archive.
- Catalog remains 30 records; artwork is unchanged. Manifest remains 181 files; kit hash is refreshed.
- Build, generated HTML/CSS, file hashes, links, IDs, labels and documented text contrast pass. Kit integrity, embedded prompt/usage/tokens and all 30 catalog destinations pass.
- No browser or native presentation rendering verification was added. Existing limitations below apply.

## Approved icon system v2 replacement · October 2, 2026

- The featured board, hero, active library and primary icon download now use the reviewed v2 set. Active catalog: 30 records, comprising seven Capptus Way illustrations, seven compact icons and sixteen UI symbols.
- Both botanical families preserve six official stage records and one proposed extension. Visual publication approval does not promote the seventh operational stage.
- Earlier assets and kits remain intact; previous catalog, usage notes and icon tokens are preserved as archives.
- The manifest covers 181 files. The corporate logo is unchanged. New compact/UI artwork matches reviewed source exports byte for byte.
- The PNG/SVG board retains the reviewed artwork with its publication footer updated. SVG lettering uses outlined Lora and Montserrat. The board and original 32px proof were visually reviewed.
- Build, generated output, asset hashes, local links, IDs, labels and documented text contrast pass. Current ZIP integrity and internal catalog destinations pass.
- Browser interaction and mobile layout remain unverified; the existing browser-policy limitation below applies.

## Executive diagram and primary logo · October 2, 2026

- The current primary logo and executive diagram lead the showcase; earlier logo proposals remain archived. The asset catalog retains its 41 records.
- The manifest covers 108 files, including six primary logo exports, two diagram images, two kit ZIPs. New files match their final local source exports byte for byte.
- Repository build, generated output, asset hashes, local links and documented text contrast pass. ZIP integrity and whitespace checks pass. The original corporate logo remains unchanged.
- No new browser interaction or mobile layout verification was performed; the browser-review limitation below still applies.

## Capptus Way update · October 1, 2026

- Gallery expanded to 41 catalog entries: the original 32, seven Capptus Way illustrations, and two proposed logo designs.
- Six stage records are marked official; the seventh is marked proposed. Both logo records are explicitly proposed.
- Asset manifest covers 97 files. The original corporate logo hash remains unchanged.
- All seven originals are 1254 × 1254 RGBA PNGs with real transparency. The combined review sheet was inspected visually; the Nurturing motif was simplified for consistency.
- The ZIP contains the seven selected PNGs, prompts, review sheet, alpha records and proposed editable logo assets. Intermediate illustrations and local build scripts are excluded.
- Build, generated-output consistency, hashes, local links and documented text contrast are checked by `npm run build` and `npm run check`.
- No new browser interaction or mobile layout verification was performed. The browser-review limitation below remains applicable.

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

## Browser review pending

The in-app browser again denied localhost navigation because its admin-enforced security policy could not be verified. No alternate route was used to bypass this control. Search, filter interaction, keyboard navigation, mobile layout, zoom, and screen-reader behavior have not been verified in a browser.

Before product release, review the page at desktop and mobile widths, keyboard navigation, 200% zoom, reduced motion, and with a screen reader. Automated checks do not certify accessibility or product readiness.

## Publication scope

The user explicitly authorized commit and push to luchein-lab/design on September 30, 2026, and clarified that the repository should showcase the work already created. This release contains a visual GitHub README and an interactive static gallery. Website hosting and package distribution have not been configured.

## Typography correction · October 1, 2026

Lora Medium 500 (normal and real italic) and Montserrat 400/500/600 are approved user decisions. Tokens, reusable styles, showcase text, and documentation now reflect them. Three original variable TTF files and two OFL notices are bundled locally. File integrity, TrueType table structure, weight ranges, and the Lora italic flag were checked. Build and repository checks pass, including the font stylesheet dependency paths. Current manifest coverage is 80 files. No new browser rendering verification was performed for this correction; the browser-review limitation above remains applicable. Archived reference images and downloads retain their original rendered type.
