import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Chi è Perseo? | Digital Strategist e Web Marketing Specialist',
  description: 'Digital Strategist da più di 10 anni con la grande passione del Web Marketing. Laurea in Filosofia e Scienze della Comunicazione presso Unical e Master in Copywriting presso IED Roma.',
};

const timeline = [
  {
    year: '2019',
    company: 'AvvocatoFlash',
    description: 'Responsabile Web Marketing',
    color: '#737de8',
    logo: '/images/logo-avvocatoflash.jpeg',
    side: 'right', // card on right, logo on left
  },
  {
    year: '2019',
    company: 'Arkys',
    description: 'SEO · Web Agency · Web Marketing',
    color: '#9ca3af',
    logo: '/images/logo-arkys.png',
    side: 'left', // card on left, logo on right
  },
  {
    year: '2018',
    company: 'Internet e Idee',
    description: 'System integration, Web Solutions, Digital Marketing',
    color: '#737de8',
    logo: '/images/logo-internet-idee.jpeg',
    side: 'right',
  },
  {
    year: '2013',
    company: 'Devoloop',
    description: 'Software & App',
    color: '#ef4444',
    logo: '/images/logo-devoloop.jpeg',
    side: 'left',
  },
  {
    year: '2012',
    company: 'IED',
    description: 'Master in Copywriting',
    color: '#9ca3af',
    logo: '/images/ied-istituto-europeo-di-design-spa-logo-vector.png',
    side: 'right',
  },
  {
    year: '2010',
    company: 'Unical',
    description: 'Laurea in Filosofia e Scienze della Comunicazione',
    color: '#22c55e',
    logo: '/images/unical.png',
    side: 'left',
  },
] as const;

export default function ChiSono() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumb items={[{ label: 'Chi è Perseo' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chi è Perseo?</h1>
          <p className="text-xl opacity-90">Digital Strategist da più di 10 anni con la grande passione del Web Marketing</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Mi chiamo Lorenzo Curia. Ho costruito la mia carriera attraverso esperienze in agenzia, startup e grandi aziende, sviluppando competenze in SEO, Google Ads, Meta Ads e strategie di digital marketing integrate.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-10 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Il mio percorso</h2>

          <div className="relative">
            {/* Vertical line — left on mobile, center on desktop */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {timeline.map((item, i) => {
                const isRight = item.side === 'right';

                return (
                  <div key={i} className="relative">

                    {/* ── MOBILE: single column, line on left ── */}
                    <div className="flex items-start md:hidden pl-16">
                      {/* Dot + year pinned to left line */}
                      <div className="absolute left-0 flex flex-col items-center" style={{ width: '3rem' }}>
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: item.color }}
                        />
                        <div
                          className="text-sm font-black mt-1 whitespace-nowrap"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </div>
                      </div>
                      {/* Logo + card stacked */}
                      <div className="flex flex-col gap-3 flex-1">
                        {item.logo && (
                          <div className="relative w-24 h-14 rounded-lg overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <Image src={item.logo} alt={item.company} fill className="object-contain p-2" />
                          </div>
                        )}
                        <div
                          className="bg-white rounded-xl shadow-sm border-l-4 px-4 py-3"
                          style={{ borderLeftColor: item.color }}
                        >
                          <p className="font-bold text-sm" style={{ color: item.color }}>{item.company}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* ── DESKTOP: alternating two-column ── */}
                    <div className="hidden md:flex items-center gap-0">

                      {/* LEFT */}
                      <div className="flex-1 flex justify-end pr-14">
                        {isRight ? (
                          <div className="flex items-center justify-end">
                            {item.logo && (
                              <div className="relative w-44 h-28 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md">
                                <Image src={item.logo} alt={item.company} fill className="object-contain p-3" />
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            className="bg-white rounded-2xl shadow-md border-l-4 px-7 py-6 max-w-sm"
                            style={{ borderLeftColor: item.color }}
                          >
                            <p className="font-bold text-base" style={{ color: item.color }}>{item.company}</p>
                            <p className="text-sm text-gray-500 mt-1.5">{item.description}</p>
                          </div>
                        )}
                      </div>

                      {/* CENTER — dot + year */}
                      <div className="relative z-10 flex flex-col items-center shrink-0 w-0">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-white shadow-lg shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <div
                          className="text-3xl font-black mt-3 whitespace-nowrap"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="flex-1 flex justify-start pl-14">
                        {isRight ? (
                          <div
                            className="bg-white rounded-2xl shadow-md border-l-4 px-7 py-6 max-w-sm"
                            style={{ borderLeftColor: item.color }}
                          >
                            <p className="font-bold text-base" style={{ color: item.color }}>{item.company}</p>
                            <p className="text-sm text-gray-500 mt-1.5">{item.description}</p>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            {item.logo && (
                              <div className="relative w-44 h-28 rounded-xl overflow-hidden bg-white border border-gray-100 shadow-md">
                                <Image src={item.logo} alt={item.company} fill className="object-contain p-3" />
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vuoi lavorare insieme?</h2>
        <Link
          href="/contatti"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition"
        >
          Parliamo del tuo progetto
        </Link>
      </section>

      {/* Contact form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <ContactForm recipientEmail="info@perseo.biz" />
        </div>
      </section>
    </div>
  );
}
