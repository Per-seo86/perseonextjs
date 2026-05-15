import { getAllPosts, categoryMeta } from '@/lib/posts';

const BASE_URL = 'https://perseo.biz';

const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/chi-sono', priority: 0.8, changefreq: 'monthly' },
  { url: '/consulente-seo', priority: 0.9, changefreq: 'monthly' },
  { url: '/consulente-seo/seo-concessionarie', priority: 0.8, changefreq: 'monthly' },
  { url: '/consulente-seo/seo-negozi-di-arredamento', priority: 0.8, changefreq: 'monthly' },
  { url: '/consulente-seo/seo-farmacie', priority: 0.8, changefreq: 'monthly' },
  { url: '/google-ads-specialist', priority: 0.9, changefreq: 'monthly' },
  { url: '/meta-ads-specialist', priority: 0.9, changefreq: 'monthly' },
  { url: '/risultati', priority: 0.7, changefreq: 'monthly' },
  { url: '/consulenza-seo-in-calabria', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
  { url: '/contatti', priority: 0.7, changefreq: 'yearly' },
  { url: '/i-casi-piu-problematici-che-mi-siano-capitati-sulla-seo', priority: 0.7, changefreq: 'monthly' },
];

export async function GET() {
  const posts = getAllPosts();
  const categories = Object.entries(categoryMeta);

  const staticUrls = staticPages.map(
    (p) => `
  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  );

  const postUrls = posts.map(
    (post) => `
  <url>
    <loc>${BASE_URL}/${post.category}/${post.slug}</loc>
    <lastmod>${post.date ? new Date(post.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  );

  const categoryUrls = categories.map(([slug, meta]) => {
    const url = meta.parent
      ? `${BASE_URL}/category/${meta.parent}/${slug}`
      : `${BASE_URL}/category/${slug}`;
    return `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  const allUrls = [...staticUrls, ...postUrls, ...categoryUrls].join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
