# drmatthewhooton.com

Source of [drmatthewhooton.com](https://drmatthewhooton.com), built with [Astro](https://astro.build).
Every push to `master` builds the site and deploys it to GitHub Pages
(`.github/workflows/deploy.yml`).

## Working on the site

```sh
npm ci            # install the exact versions in package-lock.json
npm run dev       # local server that reloads as you edit
npm run build     # build the site into dist/
npm run preview   # serve dist/ locally, as it will be deployed
```

## Where things are

- Pages: `src/pages/`
- Paper lists: `src/data/publications.ts`
- Profile links and the form address: `src/data/site.ts`
- Styles, with the Nightfall colour tokens at the top: `src/styles/global.css`
- Photographs and figures: `src/assets/`. They are resized and converted to AVIF and WebP at
  build time.
- Link-preview images and icons: `public/`. `npm run previews` remakes them; it needs Google
  Chrome.
- Heading font: `src/assets/fonts/newsreader-latin-600-opsz.woff2`, made by
  `scripts/instance-newsreader.py`. The other fonts come straight from the `@fontsource`
  packages.

## The old site

The Jekyll (Academic Pages) version is kept at the tag `academicpages-final` and the branch
`old-site`.
