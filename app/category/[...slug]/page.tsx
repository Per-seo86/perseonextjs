import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getAllPosts,
  getPostsByCategory,
  getPostsBySubcategory,
  categoryMeta,
} from '@/lib/posts';
import { categoryDescriptions } from '@/lib/categoryDescriptions';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  // Top-level categories
  const topLevel = Object.entries(categoryMeta).filter(([, meta]) => !meta.parent);
  for (const [key] of topLevel) {
    paths.push({ slug: [key] });
  }

  // Subcategories
  const subCategories = Object.entries(categoryMeta).filter(([, meta]) => meta.parent);
  for (const [key, meta] of subCategories) {
    paths.push({ slug: [meta.parent!, key] });
  }

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const [categorySlug, subcategorySlug] = slug;

  if (subcategorySlug) {
    const meta = categoryMeta[subcategorySlug];
    if (!meta) return { title: 'Categoria non trovata' };
    return {
      title: `${meta.name} | Blog Perseo`,
      description: `Articoli su ${meta.name}`,
    };
  }

  const meta = categoryMeta[categorySlug];
  if (!meta) return { title: 'Categoria non trovata' };
  return {
    title: `${meta.name} | Blog Perseo`,
    description: `Tutti gli articoli sulla categoria ${meta.name}`,
  };
}

function PostCard({ post }: { post: ReturnType<typeof getAllPosts>[number] }) {
  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
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
        <div className="text-sm text-purple-600 font-semibold mb-2 uppercase">
          {categoryMeta[post.subcategory || post.category]?.name ||
            (post.category === 'google-ads' ? 'Google Ads' :
             post.category === 'meta-ads' ? 'Meta Ads' : 'SEO')}
        </div>
        <h2 className="text-xl font-bold mb-3 line-clamp-2">
          <Link href={`/${post.category}/${post.slug}`} className="hover:text-purple-600 transition">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            {new Date(post.date).toLocaleDateString('it-IT', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <Link
            href={`/${post.category}/${post.slug}`}
            className="text-purple-600 font-semibold hover:underline"
          >
            Leggi →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const [categorySlug, subcategorySlug] = slug;

  // ── Subcategory page ──────────────────────────────────────────────────────
  if (subcategorySlug) {
    const subMeta = categoryMeta[subcategorySlug];
    const parentMeta = categoryMeta[categorySlug];

    if (!subMeta || subMeta.parent !== categorySlug || !parentMeta) {
      notFound();
    }

    const posts = getPostsBySubcategory(subcategorySlug);

    return (
      <div>
        <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb
              light
              items={[
                { label: 'Blog', href: '/blog' },
                { label: parentMeta.name, href: `/category/${categorySlug}` },
                { label: subMeta.name },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{subMeta.name}</h1>
            <p className="text-xl">
              {posts.length} articol{posts.length === 1 ? 'o' : 'i'}
            </p>
          </div>
        </section>

        {categoryDescriptions[subcategorySlug] && (
          <section className="py-12 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 max-w-4xl">
              <div
                className="category-description prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: categoryDescriptions[subcategorySlug] }}
              />
            </div>
          </section>
        )}

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            {posts.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <p className="text-xl mb-4">Nessun articolo in questa categoria.</p>
                <Link href="/blog" className="text-purple-600 hover:underline font-semibold">
                  Torna al Blog →
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // ── Parent category page ──────────────────────────────────────────────────
  const parentMeta = categoryMeta[categorySlug];
  if (!parentMeta) notFound();

  const allPosts = getPostsByCategory(categorySlug);
  const subcategories = Object.entries(categoryMeta).filter(
    ([, meta]) => meta.parent === categorySlug
  );

  return (
    <div>
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb
            light
            items={[
              { label: 'Blog', href: '/blog' },
              { label: parentMeta.name },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{parentMeta.name}</h1>
          <p className="text-xl">
            {allPosts.length} articol{allPosts.length === 1 ? 'o' : 'i'}
          </p>
        </div>
      </section>

      {/* Subcategory nav cards */}
      {subcategories.length > 0 && (
        <section className="py-10 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Sottocategorie</h2>
            <div className="flex flex-wrap gap-4">
              {subcategories.map(([key, meta]) => {
                const count = getPostsBySubcategory(key).length;
                return (
                  <Link
                    key={key}
                    href={`/category/${categorySlug}/${key}`}
                    className="bg-white border border-gray-200 rounded-lg px-6 py-4 hover:border-purple-400 hover:shadow-md transition group"
                  >
                    <div className="font-semibold text-gray-800 group-hover:text-purple-600 transition">
                      {meta.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {count} articol{count === 1 ? 'o' : 'i'}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {categoryDescriptions[categorySlug] && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div
              className="category-description prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: categoryDescriptions[categorySlug] }}
            />
          </div>
        </section>
      )}

      {/* All posts in this category */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {allPosts.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              <p className="text-xl mb-4">Nessun articolo in questa categoria.</p>
              <Link href="/blog" className="text-purple-600 hover:underline font-semibold">
                Torna al Blog →
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
