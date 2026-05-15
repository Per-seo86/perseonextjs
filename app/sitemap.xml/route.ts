const BASE_URL = 'https://perseo.biz';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/pages-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/posts-sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/categories-sitemap.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
