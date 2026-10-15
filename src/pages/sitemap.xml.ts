import type { APIRoute } from 'astro';

// The pages worth indexing. Redirect pages and the 404 page are left out.
const pages = ['/', '/research/', '/publications/', '/mentorship/', '/contact/', '/privacy/'];

export const GET: APIRoute = ({ site }) => {
  const urls = pages.map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
