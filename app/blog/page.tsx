import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, categoryMeta } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog | Novità dal mondo Digital - Perseo',
  description: 'Guide, consigli e strategie su SEO, Google Ads, Meta Ads e Digital Marketing.',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Blog' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Novità dal mondo Digital
          </h1>
          <p className="text-xl">
            Guide, consigli e strategie su SEO, Google Ads e Meta Ads
          </p>
        </div>
      </section>

      {/* Lista Articoli */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                {post.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  {/* Clickable category + subcategory tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Link
                      href={`/category/${post.category}`}
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gray-900 text-white hover:bg-purple-700 transition"
                    >
                      {categoryMeta[post.category]?.name || post.category}
                    </Link>
                    {post.subcategory && (
                      <Link
                        href={`/category/${post.category}/${post.subcategory}`}
                        className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
                      >
                        {categoryMeta[post.subcategory]?.name || post.subcategory}
                      </Link>
                    )}
                  </div>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link href={`/${post.category}/${post.slug}`} className="hover:text-purple-600 transition">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString('it-IT', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</span>
                    <Link href={`/${post.category}/${post.slug}`} className="text-purple-600 font-semibold hover:underline">
                      Leggi →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
