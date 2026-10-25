# Canopy landing page

The marketing site for [Ivula Canopy](https://canopy.ivulatechnologies.com), volunteer and member management for churches and nonprofits. Every call to action sends visitors to the app's sign-up page.

Built with Vite, React 19, Tailwind CSS 4 and framer-motion. It is a static site: there is no server code.

## Work on it

```bash
npm ci
npm run dev      # http://localhost:5173
npm run lint
npm run build    # writes the site to dist/
```

Sections live in `src/components/`, one file each, and `src/App.jsx` puts them in order. Brand colors (`canopy-*` greens, `sun-*` ambers) and the Lora display font are defined in `src/index.css`.

## Publish on cPanel

1. Run `npm run build`.
2. Zip the contents of `dist/` (not the folder itself).
3. In cPanel File Manager, open the domain's document root, upload the zip and choose Extract, overwriting the old files.

The Canopy app has its own landing page at canopy.ivulatechnologies.com, so this site is only needed on a second marketing domain. Once that domain is chosen, change the `og:image` URL in `index.html` to the full `https://` address so link previews show the image.

Every pull request runs lint and a build (`.github/workflows/ci.yml`).
