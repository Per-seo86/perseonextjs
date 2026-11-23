import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import BlogListing, { getBlogTotalPages } from '@/components/BlogListing';

// Solo le pagine generate in build: /blog/page/N/ oltre l'ultima risponde 404
export const dynamicParams = false;

interface PageProps {
  params: Promise<{ page: string }>;
}

export function generateStaticParams() {
  const total = getBlogTotalPages();
  // /blog/page/1/ esiste solo per reindirizzare a /blog/
  return Array.from({ length: total }, (_, i) => ({ page: String(i + 1) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog - Pagina ${page} | Novità dal mondo Digital - Perseo`,
    description: `Pagina ${page} del blog di Perseo: guide, consigli e strategie su SEO, Google Ads, Meta Ads e Digital Marketing.`,
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { page } = await params;
  const n = Number(page);
  if (n === 1) permanentRedirect('/blog/');
  if (!Number.isInteger(n) || n < 1 || n > getBlogTotalPages()) notFound();
  return <BlogListing page={n} />;
}
