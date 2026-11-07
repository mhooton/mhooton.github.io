// Makes the link-preview images (public/og/) and the favicons (public/).
//
// Run `npm run previews` after changing a source photo. The outputs are committed, so the
// site build needs neither this script nor Chrome.
//
// The Mentorship preview carries the course name set in Newsreader, so headless Google
// Chrome draws it from a small HTML page. Set CHROME to the browser's path if it is not in
// the usual macOS location.

import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const here = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));
const chrome =
  process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const ink = '#e8ecf2';
const night = '#0c1422';
const amber = '#e3a35e';

mkdirSync(here('public/og'), { recursive: true });

// Default preview: the portrait, cropped to 1200×630 around the face.
await sharp(here('src/assets/photos/portrait.jpg'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(here('public/og/default.jpg'));

// Mentorship preview: the Isaac Newton Telescope above the clouds, with the course name.
const photo = await sharp(here('src/assets/photos/int-above-clouds.jpg'))
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 92 })
  .toBuffer();
const font = readFileSync(
  here('node_modules/@fontsource/newsreader/files/newsreader-latin-600-normal.woff2'),
);
const page = `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: Newsreader;
    font-weight: 600;
    src: url(data:font/woff2;base64,${font.toString('base64')}) format('woff2');
  }
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; background: ${night}; }
  .photo { position: absolute; inset: 0; background: url(data:image/jpeg;base64,${photo.toString('base64')}) center / cover; }
  .shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(12, 20, 34, 0) 30%, rgba(12, 20, 34, 0.7) 62%, ${night} 100%); }
  h1 { position: absolute; left: 72px; bottom: 64px; width: 860px; margin: 0; color: ${ink};
       font: 600 92px/1.02 Newsreader, Georgia, serif; letter-spacing: -0.012em; }
</style>
<div class="photo"></div>
<div class="shade"></div>
<h1>Exoplanet Research Mentorship</h1>
`;

const work = mkdtempSync(join(tmpdir(), 'og-'));
try {
  writeFileSync(join(work, 'mentorship.html'), page);
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    `--screenshot=${join(work, 'mentorship.png')}`,
    `file://${join(work, 'mentorship.html')}`,
  ], { stdio: 'ignore' });
  await sharp(join(work, 'mentorship.png'))
    .resize(1200, 630, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(here('public/og/mentorship.jpg'));
} finally {
  rmSync(work, { recursive: true, force: true });
}

// Favicons: a star with a planet crossing it, in the site's colours.
const icon = (rounded) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="${rounded ? 7 : 0}" fill="${night}"/>
  <circle cx="16" cy="16" r="9.5" fill="${amber}"/>
  <circle cx="19.6" cy="13" r="3.2" fill="${night}"/>
</svg>
`;
writeFileSync(here('public/favicon.svg'), icon(true));
await sharp(Buffer.from(icon(false)), { density: 1080 })
  .resize(180, 180)
  .png()
  .toFile(here('public/apple-touch-icon.png'));

// favicon.ico holding a single 32×32 PNG, which every current browser accepts.
const png32 = await sharp(Buffer.from(icon(true)), { density: 192 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // one image
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // no palette
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png32.length, 14); // size of the PNG
header.writeUInt32LE(22, 18); // offset of the PNG
writeFileSync(here('public/favicon.ico'), Buffer.concat([header, png32]));

console.log('Wrote public/og/default.jpg, public/og/mentorship.jpg and the favicons.');
