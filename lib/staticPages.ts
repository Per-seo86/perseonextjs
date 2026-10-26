import { getAllPosts } from '@/lib/posts';

export const BASE_URL = 'https://perseo.biz';

// lastmod: data dell'ultima modifica reale del contenuto (YYYY-MM-DD).
// Aggiornala quando modifichi il testo della pagina: è il segnale che Google usa per tornare a scansionarla.
// Per '/' e '/blog' si usa la data dell'articolo più recente.
const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly', lastmod: 'latest-post' },
  { url: '/chi-sono', priority: 0.8, changefreq: 'monthly', lastmod: '2026-05-15' },
  { url: '/consulente-seo', priority: 0.9, changefreq: 'monthly', lastmod: '2026-05-15' },
  { url: '/consulente-seo/seo-concessionarie', priority: 0.8, changefreq: 'monthly', lastmod: '2026-05-15' },
  { url: '/consulente-seo/seo-negozi-di-arredamento', priority: 0.8, changefreq: 'monthly', lastmod: '2026-05-15' },
  { url: '/consulente-seo/seo-farmacie', priority: 0.8, changefreq: 'monthly', lastmod: '2026-05-15' },
  { url: '/google-ads-specialist', priority: 0.9, changefreq: 'monthly', lastmod: '2026-05-15' },
  { url: '/meta-ads-specialist', priority: 0.9, changefreq: 'monthly', lastmod: '2026-05-15' },
  { url: '/risultati', priority: 0.7, changefreq: 'monthly', lastmod: '2026-05-15' },
  { url: '/consulenza-seo-in-calabria', priority: 0.8, changefreq: 'monthly', lastmod: '2026-10-21' },
  { url: '/consulenza-seo-a-cosenza', priority: 0.8, changefreq: 'monthly', lastmod: '2026-07-07' },
  { url: '/consulenza-seo-a-crotone', priority: 0.8, changefreq: 'monthly', lastmod: '2026-10-12' },
  { url: '/consulenza-seo-a-vibo-valentia', priority: 0.8, changefreq: 'monthly', lastmod: '2026-10-21' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly', lastmod: 'latest-post' },
  { url: '/contatti', priority: 0.7, changefreq: 'yearly', lastmod: '2026-05-15' },
  { url: '/uso-intelligenza-artificiale', priority: 0.3, changefreq: 'yearly', lastmod: '2026-10-09' },
  { url: '/casi-studio-google-ads', priority: 0.7, changefreq: 'monthly', lastmod: '2026-10-26' },
  { url: '/i-casi-piu-problematici-che-mi-siano-capitati-sulla-seo', priority: 0.7, changefreq: 'monthly', lastmod: '2026-10-26' },
];

export function getStaticPageUrlsXml(): string {
  const latestPost = getAllPosts()[0]?.date ?? new Date().toISOString().split('T')[0];

  return pages
    .map(
      (p) => `
  <url>
    <loc>${BASE_URL}${p.url}${p.url.endsWith('/') ? '' : '/'}</loc>
    <lastmod>${p.lastmod === 'latest-post' ? latestPost : p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('');
}
