import { getAllPosts } from '@/lib/posts';

const BASE_URL = 'https://perseo.biz';

export async function GET() {
  const posts = getAllPosts();

  const urls = posts
    .map(
      (post) => `
  <url>
    <loc>${BASE_URL}/${post.category}/${post.slug}</loc>
    <lastmod>${post.date ? new Date(post.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
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
