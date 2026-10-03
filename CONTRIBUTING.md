# Contributing

Describe the user need, show the proposed change, and state whether it changes fixed identity, extends the Living Oasis direction, or adds an implementation detail.

For new industry symbols, flowchart concepts and abstract icons, use [the master prompt](docs/icon-style-master-prompt.md) and [current v2 board](assets/reference/Capptus-Icon-System-v2.png). Show matching regular and negative versions when requested. Earlier moodboards are historical references in [the archive](docs/archive.md).

Edit token values in tokens/tokens.json, then run npm run build and npm run check. Use semantic native HTML and keep components framework-independent until a consuming application requires a framework.

Review at mobile and desktop widths, 200% zoom, and with keyboard navigation. Check focus visibility, text contrast, full illustration visibility, and reduced-motion preferences. A component with inputs must have associated labels and clear error messaging before release.

Use pull requests when repository publication is authorized. Explain the behavior changed and verification performed. Capptus should designate a design owner and implementation reviewer; neither is assigned by this starter.
