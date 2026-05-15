const BASE_URL = 'https://perseo.biz';

const pages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' },
  { url: '/chi-sono', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/consulente-seo', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/consulente-seo/seo-concessionarie', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/consulente-seo/seo-negozi-di-arredamento', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/consulente-seo/seo-farmacie', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/google-ads-specialist', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/meta-ads-specialist', priority: 0.9, changeFrequency: 'monthly' },
  { url: '/risultati', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/consulenza-seo-in-calabria', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/contatti', priority: 0.7, changeFrequency: 'yearly' },
  { url: '/i-casi-piu-problematici-che-mi-siano-capitati-sulla-seo', priority: 0.7, changeFrequency: 'monthly' },
];

export async function GET() {
  const urls = pages
    .map(
      (p) => `
  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <changefreq>${p.changeFrequency}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
