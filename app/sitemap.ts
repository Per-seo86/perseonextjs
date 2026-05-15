import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

const BASE_URL = 'https://perseo.biz';

const staticRoutes = [
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
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/${post.category}/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...postEntries];
}
