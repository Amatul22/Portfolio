# Amatul Odud Tazrian — Portfolio

A minimal, warm personal portfolio site. Pure HTML/CSS/JS — no build step, no dependencies.

## Files
- `index.html` — page content
- `style.css` — styling (soft cream/rose/sage palette, Fraunces + Inter + Caveat fonts)
- `script.js` — small scroll-reveal effect (respects reduced-motion)

## How to host on GitHub Pages

1. Create a new repository on GitHub (e.g. `amatul-portfolio`).
2. Upload `index.html`, `style.css`, and `script.js` to the root of the repo.
3. Go to the repo's **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Pick the `main` branch and `/ (root)` folder, then click **Save**.
6. Wait a minute or two — your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

If you want it at `https://<your-username>.github.io` directly (no repo name in the URL), name the repository exactly `<your-username>.github.io`.

## Customizing
- Colors live as CSS variables at the top of `style.css` under `:root`.
- Fonts are loaded from Google Fonts in `index.html`'s `<head>`.
- All text content is in `index.html` — just edit and re-upload.
