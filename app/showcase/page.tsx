import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Showcase - Strumenti e Tool per il Digital Marketing | Perseo',
  description: 'Gli strumenti essenziali che utilizzo per le mie consulenze: SEOZoom, Google Search Console, Google Analytics 4.',
};

export default function Showcase() {
  return (
    <div>
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Showcase' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I Miei Strumenti
          </h1>
          <p className="text-xl">
            Gli strumenti essenziali per analisi e ottimizzazione
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/showcase/seozoom" className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold mb-4">SEOZoom</h2>
              <p className="text-gray-600 mb-4">
                Strumento completo per l'analisi SEO, keyword research, analisi backlink e audit tecnico del sito.
              </p>
              <span className="text-purple-600 font-semibold">Scopri di più →</span>
            </Link>

            <Link href="/showcase/search-console" className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold mb-4">Google Search Console</h2>
              <p className="text-gray-600 mb-4">
                Lo strumento definitivo per monitorare la presenza del sito nei risultati di ricerca Google.
              </p>
              <span className="text-purple-600 font-semibold">Scopri di più →</span>
            </Link>

            <Link href="/showcase/ga4" className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold mb-4">Google Analytics 4</h2>
              <p className="text-gray-600 mb-4">
                Sistema di analisi web essenziale per comprendere il comportamento dei visitatori.
              </p>
              <span className="text-purple-600 font-semibold">Scopri di più →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
