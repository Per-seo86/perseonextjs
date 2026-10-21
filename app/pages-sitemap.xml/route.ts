import { getStaticPageUrlsXml } from '@/lib/staticPages';

export async function GET() {
  const urls = getStaticPageUrlsXml();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
