import type { Metadata } from 'next';
import BlogListing from '@/components/BlogListing';

export const metadata: Metadata = {
  title: 'Blog | Novità dal mondo Digital - Perseo',
  description: 'Guide, consigli e strategie su SEO, Google Ads, Meta Ads e Digital Marketing.',
};

export default function Blog() {
  return <BlogListing page={1} />;
}
