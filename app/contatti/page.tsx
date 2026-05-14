import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contatti | Perseo - Digital Marketing Specialist',
  description: 'Hai bisogno di consulenza SEO, Google Ads o Meta Ads? Inviami un messaggio e parliamo insieme del tuo progetto.',
};

export default function Contatti() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Breadcrumb items={[{ label: 'Contatti' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contatti
          </h1>
          <p className="text-xl">
            Inviami un'email e parliamo insieme del tuo progetto
          </p>
        </div>
      </section>

      {/* Domande Qualificanti */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">📈</div>
              <p className="text-gray-700">
                Hai poche visite sul sito e vorresti incrementare sia gli utenti e, di conseguenza, le vendite?
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">💸</div>
              <p className="text-gray-700">
                Gestisci inserzioni Meta che ti fanno spendere centinaia di euro senza avere il giusto ritorno e guadagno?
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🎯</div>
              <p className="text-gray-700">
                Non riesci a scalare gli annunci Google?
              </p>
            </div>
          </div>
          <p className="text-center text-2xl font-semibold mt-8">
            Parliamone con calma
          </p>
        </div>
      </section>

      {/* Form di Contatto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
