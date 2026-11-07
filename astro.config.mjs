// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Fonts are @fontsource files, served from this site. Only the Latin subset is used: it
// covers all the text on the site apart from the odd Greek letter, which falls back to a
// system font. One file per face means each preload fetches exactly one file.
const fontsource = (pkg, file) => [`@fontsource/${pkg}/files/${file}`];

// Publication pages on the old Jekyll site, at /publication/<slug>.
const oldPublicationSlugs = [
  'lhs1903',
  'speculoos3',
  'hd110067',
  'wasp189b-phase-curve',
  'nu2-lupi-d',
  'toi178',
  'toi2407b',
  'jwst-toi1685b',
  'wasp12b-storms',
  'kelt9b-nuv',
  'spi-ops',
];

export default defineConfig({
  site: 'https://drmatthewhooton.com',

  // Keep Astro 6's HTML-aware whitespace handling, so prose with inline links
  // keeps its spaces at line breaks.
  compressHTML: true,

  devToolbar: { enabled: false },

  // On a static site these are HTML pages with a meta refresh and a canonical link
  // to the destination.
  redirects: {
    '/teaching': '/mentorship/',
    '/about': '/',
    '/sitemap': '/',
    ...Object.fromEntries(
      oldPublicationSlugs.map((slug) => [`/publication/${slug}`, '/publications/']),
    ),
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Newsreader',
      cssVariable: '--font-display',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: fontsource('newsreader', 'newsreader-latin-400-normal.woff2') },
          // Headings: weight 600 with the optical-size axis (24–72 pt), made from
          // @fontsource-variable/newsreader by scripts/instance-newsreader.py.
          { weight: 600, style: 'normal', src: ['./src/assets/fonts/newsreader-latin-600-opsz.woff2'] },
          { weight: 400, style: 'italic', src: fontsource('newsreader', 'newsreader-latin-400-italic.woff2') },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Source Sans 3',
      cssVariable: '--font-body',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: fontsource('source-sans-3', 'source-sans-3-latin-400-normal.woff2') },
          { weight: 600, style: 'normal', src: fontsource('source-sans-3', 'source-sans-3-latin-600-normal.woff2') },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      fallbacks: ['Menlo', 'monospace'],
      options: {
        variants: [
          { weight: 400, style: 'normal', src: fontsource('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff2') },
          { weight: 500, style: 'normal', src: fontsource('ibm-plex-mono', 'ibm-plex-mono-latin-500-normal.woff2') },
        ],
      },
    },
  ],
});
