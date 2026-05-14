import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ShowcaseItem {
  slug: string;
  title: string;
  description: string;
  content: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    slug: 'seozoom',
    title: 'SEOZoom',
    description: 'Strumento completo per l\'analisi SEO, keyword research e audit tecnico',
    content: `SEOZoom è uno strumento fondamentale per migliorare la visibilità del tuo sito nei risultati dei motori di ricerca.

A differenza di Google Search Console, SEOZoom rivela il posizionamento delle parole chiave e le posizioni nei risultati di ricerca, indipendentemente dal fatto che il traffico raggiunga effettivamente il tuo sito.

Funzionalità principali:
- Analisi backlink e valutazione della qualità
- Assistente editoriale per creare contenuti allineati con l'intento di ricerca degli utenti
- Strumenti di analisi delle parole chiave (volume di ricerca e difficoltà di posizionamento)
- Audit tecnico del sito (titoli, meta description, contenuti duplicati, tag ALT immagini, link rotti)
- Funzionalità comparabili a Screaming Frog per l'analisi SEO tecnica`,
  },
  {
    slug: 'search-console',
    title: 'Google Search Console',
    description: 'Lo strumento definitivo per la SEO tecnica',
    content: `Google Search Console è uno strumento che aiuta i proprietari di siti web a monitorare e gestire la presenza del loro sito nei risultati di ricerca di Google.

A differenza di Google Analytics, si concentra sugli aspetti tecnici della SEO.

Funzionalità principali:
- Monitoraggio dell'indicizzazione e stato delle pagine
- Identificazione di problemi tecnici che influenzano la visibilità
- Core Web Vitals - metriche sulla velocità del sito
- Problemi specifici per mobile
- Query di ricerca - mostra le parole chiave utilizzate dagli utenti
- Insights per l'ottimizzazione e miglioramento della visibilità

Search Console è lo strumento definitivo per la SEO tecnica, permettendo ai proprietari di siti web di identificare problemi e ottimizzare i loro siti per migliorare il posizionamento.`,
  },
  {
    slug: 'ga4',
    title: 'Google Analytics 4',
    description: 'Sistema di analisi web essenziale',
    content: `GA4 (Google Analytics 4) è il nuovo sistema di analisi web di Google che sostituisce Universal Analytics.

È uno strumento essenziale per i proprietari di siti web che desiderano comprendere meglio il comportamento dei loro visitatori e ottimizzare il loro sito.

GA4 è la mia prima priorità al mattino: monitoro l'attività degli utenti in tempo reale e traccio le conversioni.

La piattaforma aiuta a tracciare:
- Acquisti e carrelli abbandonati
- Registrazioni alla newsletter
- Comportamento di lettura degli articoli del blog
- Metriche di engagement e conversione

GA4 è fondamentale per pianificare e scalare sia le campagne SEO che PPC.`,
  },
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return showcaseItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = showcaseItems.find(i => i.slug === slug);

  if (!item) {
    return {
      title: 'Strumento non trovato',
    };
  }

  return {
    title: `${item.title} | Showcase - Perseo`,
    description: item.description,
  };
}

export default async function ShowcasePage({ params }: PageProps) {
  const { slug } = await params;
  const item = showcaseItems.find(i => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-sm mb-4">
            <Link href="/showcase" className="hover:underline">Showcase</Link>
            {' '}/{' '}
            <span>{item.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {item.title}
          </h1>
          <p className="text-xl">
            {item.description}
          </p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {item.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/showcase" className="text-purple-600 hover:underline font-semibold">
            ← Torna agli strumenti
          </Link>
        </div>
      </section>
    </div>
  );
}
