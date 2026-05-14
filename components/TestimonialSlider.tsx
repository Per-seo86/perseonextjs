'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'Ci siamo rivolti a Lorenzo tramite consiglio di alcuni amici. Con la creazione del sito e dell\'ottimizzazione SEO, la nostra attività locale ha continue richieste di biglietti da visita, magliette personalizzate, gadget ecc...',
    name: 'Domenico Miceli',
    role: 'Titolare @Zpress',
    image: '/images/miceli.jpeg',
  },
  {
    quote: 'Con Lorenzo c\'è stata immediatamente una perfetta sintonia lavorativa. Ha creato il nostro sito e ci ha resi finalmente visibili su Google e i risultati sono arrivati dopo poco tempo.',
    name: 'Alessandra Gentile',
    role: 'CEO @Ripetiamodiritto',
    image: '/images/alessandra-min.jpeg',
  },
  {
    quote: 'Sono stati 3 anni importanti per noi. Con le strategie di Lorenzo e l\'ottimo lavoro del nostro team, abbiamo una crescita costante di lead e fatturato.',
    name: 'Daniele Izzo',
    role: 'CMO @AvvocatoFlash',
    image: '/images/daniele-izzo.png',
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* ── CIRCLE CARD ── */}
          <div className="relative flex-shrink-0 w-full md:w-[560px] aspect-square flex items-center justify-center">
            {/* Background blob */}
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle at 70% 70%, #19dffa, #6039ff)' }}
            />
            {/* Main circle */}
            <div
              className="relative w-[90%] h-[90%] rounded-full flex flex-col justify-center px-10 md:px-14 text-white"
              style={{ background: 'linear-gradient(135deg, #6039ff 0%, #46b4ff 60%, #19dffa 100%)' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Cosa pensano alcuni<br />miei clienti
              </h2>

              <p className="text-sm md:text-base leading-relaxed opacity-90 mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white/40">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-base">{t.name}</p>
                  <p className="text-sm opacity-75">{t.role}</p>
                </div>
              </div>
            </div>

            {/* Dots navigator */}
            <div className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                  style={{ backgroundColor: i === active ? '#6039ff' : '#d1d5db' }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── ILLUSTRATION ── */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3]">
              <Image
                src="/images/illustration-email-marketing.png"
                alt="Digital Marketing Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
