import { categoryMeta } from '@/lib/posts';

const BASE_URL = 'https://perseo.biz';

export async function GET() {
  const categories = Object.entries(categoryMeta);

  const urls = categories
    .map(([slug, meta]) => {
      const url = meta.parent
        ? `${BASE_URL}/category/${meta.parent}/${slug}`
        : `${BASE_URL}/category/${slug}`;
      return `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
