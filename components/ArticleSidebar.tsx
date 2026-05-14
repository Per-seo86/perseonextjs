'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categoryMeta, Post } from '@/lib/posts';

interface ArticleSidebarProps {
  recentPosts: Post[];
  currentCategory: string;
}

export default function ArticleSidebar({ recentPosts, currentCategory }: ArticleSidebarProps) {
  const [formData, setFormData] = useState({ nome: '', email: '', oggetto: '', messaggio: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recipientEmail: 'info@perseo.biz' }),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  // All top-level + subcategory entries for the sidebar list
  const allCategories = Object.entries(categoryMeta).sort(([, a], [, b]) =>
    a.name.localeCompare(b.name)
  );

  return (
    <aside className="lg:w-72 shrink-0">
      <div className="sticky top-24 space-y-8">

        {/* Ultimi articoli */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900">Ultimi articoli</h3>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li key={post.slug} className="flex gap-2 text-sm text-gray-600">
                <span className="text-gray-400 mt-1 shrink-0">•</span>
                <Link
                  href={`/${post.category}/${post.slug}`}
                  className="hover:text-purple-600 transition leading-snug"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categorie */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900">Categorie</h3>
          <ul className="space-y-2">
            {allCategories.map(([key, meta]) => {
              const href = meta.parent
                ? `/category/${meta.parent}/${key}`
                : `/category/${key}`;
              const isActive = key === currentCategory;
              return (
                <li key={key} className="flex gap-2 text-sm">
                  <span className="text-gray-400 mt-0.5 shrink-0">•</span>
                  <Link
                    href={href}
                    className={`hover:text-purple-600 transition leading-snug ${
                      isActive ? 'text-purple-600 font-semibold' : 'text-gray-600'
                    }`}
                  >
                    {meta.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mini contact form */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-900">Inviami una richiesta</h3>
          {status === 'ok' ? (
            <p className="text-green-600 text-sm font-semibold">
              Messaggio inviato! Ti risponderò presto.
            </p>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Il tuo nome</label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">La tua email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Oggetto</label>
              <input
                type="text"
                value={formData.oggetto}
                onChange={(e) => setFormData({ ...formData, oggetto: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Messaggio</label>
              <textarea
                value={formData.messaggio}
                onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
                required
              />
            </div>
            {status === 'error' && (
              <p className="text-red-500 text-xs">Errore. Riprova.</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition disabled:opacity-60"
            >
              {loading ? 'Invio…' : 'Invia'}
            </button>
          </form>
          )}
        </div>

      </div>
    </aside>
  );
}
