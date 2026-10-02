# Foundations

## Identity and status

The original Capptus logo is fixed. Blue #008ED1 and gray #6D6E70 were sampled from the supplied logo. Do not redraw, recolor, stretch, or typeset a substitute.

The Living Oasis direction uses warm limestone, restrained mineral colors, editorial typography, generous space, and confident irregular line illustration. Baja and cactus resilience inform the direction; they do not require a cactus in every layout.

The typography pairing is approved by the user as of October 1, 2026: Lora for display and Montserrat for body/UI. The supporting palette, spacing scale, and component API remain proposed implementation choices.

## Color roles

| Token | Value | Role | Status |
| --- | --- | --- | --- |
| color.blue | #008ED1 | Identity accent, illustration gesture, decorative detail | Fixed identity color |
| color.logo-gray | #6D6E70 | Original logo identity | Fixed identity color |
| color.limestone | #F8F7F3 | Main warm surface | Inherited direction; supporting proposal |
| color.sand | #D8C5AB | Secondary warm surface | Inherited direction; supporting proposal |
| color.cactus | #3B5146 | Deep green support and hover state | Inherited direction; supporting proposal |
| color.ink | #1B1B19 | Primary text | Inherited direction; supporting proposal |
| color.action | #006D9E | Links, focus, and button backgrounds | Inherited from hero v2 implementation |
| color.muted | #646660 | Secondary reading text | Inherited from hero v2 implementation |
| color.line | #D6D6CD | Decorative dividers | Inherited from hero v2 implementation |

Use action blue for normal-size links and white-on-blue buttons. Identity blue is not the default normal-text color on limestone or behind white normal text. Thin decorative dividers are not sufficient boundaries for interactive controls.

## Typography and layout

Use Lora Medium (500) for h1, h2, h3, highlighted phrases, and quotations. Apply Lora Italic to one or two key words in impact headlines. Use Montserrat Regular (400) for paragraphs and Medium (500) or SemiBold (600) for navigation, buttons, tags, h4/h5, and functional labels. Preserve a strong contrast between large serif headlines and contained sans-serif reading blocks. Keep generous line height and margins, and write professional, approachable, witty, sophisticated copy without dense paragraphs. See docs/typography.md. Avoid long all-caps paragraphs and excessive letter spacing. Body copy starts at 16px with 1.6 line height. Label text starts at 12px. Size large titles responsively; do not truncate meaningful content.

The starter proposes a 4px spacing base, a 72rem content maximum, square button corners, and a 44px minimum control height. These establish consistency for review; they are not retroactively approved brand specifications.

## Assets

The Capptus Way adds seven editorial line-art PNGs. The first six names and operational stages are user-confirmed; Optimize / Grow is a proposed extension, with Regrowth / Rebrote as a proposed narrative name. The user-selected primary Capptus Way mark uses a side-by-side negative lockup on Capptus blue. Earlier logo explorations are archived; the corporate logo is preserved. See [stage meanings and usage](capptus-way.md).

Scale the logo proportionally and keep surrounding space. Numeric clear-space rules and minimum logo sizes require design-owner approval. Original illustrations are PNG raster assets; the supplied kit adds eight compact SVG interpretations and sixteen interface symbols. Keep full silhouettes visible on light backgrounds. The reference moodboard contains generated landscape concept imagery.

The supplied icon/emoji kit defines a 24px UI grid with 2.2px stroke and a 64px compact emoji grid with 3.2px stroke. UI display sizes are 20, 24, and 32px inside 44px minimum controls. Compact emoji minimum size is 32px, preferred 48px, with 8px surrounding space. Use the supplied light tiles for dark or unknown messaging surfaces. See docs/icon-emoji-usage.txt and tokens/icon-emoji.tokens.json.

The icon kit's optional expressive motion is one 240ms response, maximum scale 1.04, with a static reduced-motion alternative. The general component token remains a separate proposed 180ms control feedback. The showcase itself has no animation loops.

## Components and accessibility

The initial components are a primary link/button, secondary link/button, card, field, and disclosure using native details/summary. A link navigates; a button performs an action. Disabled button examples use the native disabled attribute; links must not masquerade as disabled buttons.

Keyboard focus uses a visible 3px action-blue outline. Controls have a minimum 44px height. Form examples include labels and descriptions. Motion is optional and removed when reduced motion is requested. These are implementation intentions supported by checks, not an accessibility certification.

## Open decisions

- Name accountable design and engineering owners.
- Confirm the supporting palette.
- Define logo clear space, minimum sizes, and any authorized alternate artwork.
- Define error, warning, success, and data-visualization palettes with contrast checks.
- Expand states and patterns from real product needs, including errors and loading behavior.
- Confirm asset licensing and whether the repository and future packages should be public.
- Choose the application framework, package distribution, and documentation hosting when needed.
