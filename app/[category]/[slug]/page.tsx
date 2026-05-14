import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, categoryMeta } from '@/lib/posts';
import TableOfContents from '@/components/TableOfContents';
import { generateId } from '@/lib/utils';
import ArticleSidebar from '@/components/ArticleSidebar';
import QuickEmailForm from '@/components/QuickEmailForm';
import Breadcrumb from '@/components/Breadcrumb';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    return {
      title: 'Articolo non trovato',
    };
  }

  return {
    title: `${post.title} | Perseo`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 5);

  const quickFormTitle =
    category === 'google-ads'
      ? 'Hai bisogno di una consulenza Google Ads urgente?'
      : category === 'meta-ads'
      ? 'Hai bisogno di una consulenza Meta Ads urgente?'
      : 'Hai bisogno di una consulenza SEO urgente?';

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumb
            light
            items={[
              { label: 'Blog', href: '/blog' },
              { label: categoryMeta[category]?.name || category, href: `/category/${category}` },
              ...(post.subcategory
                ? [{ label: categoryMeta[post.subcategory]?.name || post.subcategory, href: `/category/${category}/${post.subcategory}` }]
                : []),
              { label: post.title },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm">
            <span>{new Date(post.date).toLocaleDateString('it-IT', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</span>
            <span>•</span>
            <span>{categoryMeta[category]?.name || category}</span>
          </div>
        </div>
      </section>

      {/* Main layout: article + sidebar */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="article-layout">

            {/* Article content */}
            <article className="min-w-0">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-lg mb-8"
                />
              )}

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

                {post.sections && <TableOfContents sections={post.sections} />}

                {post.sections ? (
                  <div className="space-y-6">
                    {post.sections.map((section, index) => {
                      const midPoint = Math.floor(post.sections!.length / 2);
                      const showForm = index === midPoint;
                      return (
                        <div key={index}>
                          {showForm && <QuickEmailForm title={quickFormTitle} />}
                          {(() => { switch (section.type) {
                        case 'heading':
                          if (section.level === 2) {
                            return (
                              <h2 key={index} id={generateId(section.content || '')} className="text-3xl font-bold mt-12 mb-6">
                                {section.content}
                              </h2>
                            );
                          } else if (section.level === 3) {
                            return (
                              <h3 key={index} className="text-2xl font-bold mt-8 mb-4">
                                {section.content}
                              </h3>
                            );
                          } else {
                            return (
                              <h4 key={index} className="text-xl font-bold mt-6 mb-3">
                                {section.content}
                              </h4>
                            );
                          }

                        case 'paragraph':
                          return (
                            <p key={index} className="text-gray-700 leading-relaxed">
                              {section.content}
                            </p>
                          );

                        case 'code':
                          return (
                            <pre key={index} className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                              <code className="text-sm">{section.content}</code>
                            </pre>
                          );

                        case 'image':
                          return (
                            <img
                              key={index}
                              src={section.src || ''}
                              alt={section.alt || ''}
                              className="w-full h-auto rounded-lg shadow-md my-8"
                            />
                          );

                        case 'list':
                          return (
                            <ul key={index} className="list-disc list-inside space-y-2 text-gray-700">
                              {section.items?.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          );

                        case 'table':
                          return (
                            <div key={index} className="overflow-x-auto my-8">
                              <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                  <tr className="bg-gray-50">
                                    {section.headers?.map((header, i) => (
                                      <th key={i} className="border border-gray-300 px-6 py-3 text-left font-bold text-gray-900">
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.rows?.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                      <td className="border border-gray-300 px-6 py-4 align-top">
                                        <strong>{row.label.split(':')[0]}:</strong> {row.label.split(':')[1]}
                                      </td>
                                      <td className="border border-gray-300 px-6 py-4 align-top">
                                        <ul className="list-disc list-inside space-y-1">
                                          {row.pro.map((item, j) => (
                                            <li key={j}>{item}</li>
                                          ))}
                                        </ul>
                                      </td>
                                      <td className="border border-gray-300 px-6 py-4 align-top">
                                        <ul className="list-disc list-inside space-y-1">
                                          {row.contro.map((item, j) => (
                                            <li key={j}>{item}</li>
                                          ))}
                                        </ul>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          );

                        default:
                          return null;
                      }})()}
                        </div>
                      );
                    })}
                  </div>
                ) : post.content ? (
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>

            {/* Sidebar */}
            <ArticleSidebar recentPosts={recentPosts} currentCategory={category} />
          </div>
        </div>
      </div>
    </div>
  );
}
