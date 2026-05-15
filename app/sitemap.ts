import { MetadataRoute } from 'next';

const BASE_URL = 'https://perseo.biz';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/pages-sitemap.xml`,
    },
    {
      url: `${BASE_URL}/posts-sitemap.xml`,
    },
    {
      url: `${BASE_URL}/categories-sitemap.xml`,
    },
  ];
}
