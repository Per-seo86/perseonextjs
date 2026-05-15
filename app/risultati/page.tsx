import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'I miei risultati | Perseo - Case Study SEO, Google Ads e Meta Ads',
  description: 'Alcuni dei miei risultati ottenuti con SEO, Google Ads e Meta Ads per clienti in diversi settori.',
};

export default function Risultati() {
  return (
    <div>
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Risultati' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I miei risultati
          </h1>
          <p className="text-xl">
            Alcuni dei progetti di successo realizzati con SEO, Google Ads e Meta Ads
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {/* Case Study SEO */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  SEO
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Prima posizione per "lezioni di diritto"</h2>
              <p className="text-gray-700 mb-6">
                Un sito specializzato in lezioni private di Giurisprudenza ha raggiunto la prima posizione
                per parole chiave transazionali come "lezioni di diritto" e "ripetizioni di diritto"
                attraverso contenuti originali e utili agli utenti.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-100 mb-6">
                <Image src="/images/risultati-1.png" alt="Risultato SEO - Prima posizione" width={1642} height={628} className="w-full h-auto" />
              </div>
              <Link
                href="/i-casi-piu-problematici-che-mi-siano-capitati-sulla-seo"
                className="text-purple-600 font-semibold hover:underline"
              >
                Vedi altri casi SEO →
              </Link>
            </div>

            {/* Case Study Meta Ads */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="mb-4">
                <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Meta Ads
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">4 contatti con 80€ di budget</h2>
              <p className="text-gray-700 mb-4">
                Un'agenzia di noleggio schermi ledwall ha ottenuto 4 contatti con un budget di soli 80€ mensili
                utilizzando una campagna DABA su pubblico freddo.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Ogni contatto ha generato un affitto mensile di 90€ con un ROI eccezionale.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-100">
                <Image src="/images/risultati-2.png" alt="Risultato Meta Ads" width={2836} height={340} className="w-full h-auto" />
              </div>
            </div>

            {/* Case Study Google Ads */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Google Ads
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">CPA di 7€ per una piattaforma legale leader</h2>
              <p className="text-gray-700 mb-4">
                Una piattaforma legale leader in Italia ha utilizzato strategie SKAG iniziali, poi passato
                ad automatiche (CPA Target su DSA) e infine Performance Max.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Il costo per acquisizione è sceso a circa 7€ per utente, con valore di conversione di 169€+.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-100">
                <Image src="/images/risultati-3.png" alt="Risultato Google Ads" width={1990} height={665} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm
            title="Parlami del tuo progetto"
            subtitle="Vuoi ottenere risultati simili? Contattami per una consulenza"
          />
        </div>
      </section>
    </div>
  );
}
