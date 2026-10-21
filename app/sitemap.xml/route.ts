import { getAllPosts, categoryMeta } from '@/lib/posts';
import { BASE_URL, getStaticPageUrlsXml } from '@/lib/staticPages';

export async function GET() {
  const posts = getAllPosts();
  const categories = Object.entries(categoryMeta);

  const postUrls = posts.map(
    (post) => `
  <url>
    <loc>${BASE_URL}/${post.category}/${post.slug}/</loc>
    <lastmod>${post.date ? new Date(post.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  );

  const categoryUrls = categories.map(([slug, meta]) => {
    const url = meta.parent
      ? `${BASE_URL}/category/${meta.parent}/${slug}/`
      : `${BASE_URL}/category/${slug}/`;
    return `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  const allUrls = getStaticPageUrlsXml() + [...postUrls, ...categoryUrls].join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
