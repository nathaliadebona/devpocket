# DevPocket 💜

A pocket toolkit for developers: convert pixel values to rem, convert colors between HEX, RGB and HSL, and generate a ready-to-use `box-shadow` declaration.

Built as a front-end learning project with plain HTML, CSS, and JavaScript (no frameworks).

https://nathaliadebona.github.io/devpocket/

## Features

- **Unit converter:** convert pixels to rem using a custom base font size (defaults to 16px)
- **Color converter:** type a HEX value or pick a color to see its RGB and HSL equivalents, with a live preview swatch
- **CSS generator:** build a `box-shadow` with sliders for horizontal/vertical offset, blur and opacity, plus a color picker, with a live preview and the generated code
- One-click copy to clipboard on every result, with a "Copied!" feedback message
- Light, lavender-themed design with a monospace font for code-like results
- Accessibility basics: labels linked to inputs and a semantic `<output>` element for each result

## Tech stack

- HTML5, CSS3, and JavaScript, no frameworks
- [Font Awesome](https://fontawesome.com/) (icons)
- [Poppins](https://fonts.google.com/specimen/Poppins) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts)

## Project structure

- `index.html`: page structure, with one card per tool
- `style.css`: styles, with colors and fonts as CSS variables
- `script.js`: logic for all three tools (conversions, the shadow generator, and the copy buttons)

## Running locally

1. Clone the repository.
2. Open `index.html` in your browser (or use a local server such as VS Code's "Live Server" extension, since the clipboard feature needs a secure context to work).

No build step or dependencies needed.

## Screenshots

<img width="1832" height="3424" alt="nathaliadebona github io_devpocket_" src="https://github.com/user-attachments/assets/aa8a3bb3-b33c-4221-96b5-67d4933d065e" />

---

Personal learning project, built by [Nathalia](https://github.com/nathaliadebona).
