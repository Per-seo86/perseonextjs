'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  recipientEmail?: string;
}

export default function ContactForm({
  title = "Inviami un messaggio",
  subtitle,
  recipientEmail = 'info@perseo.biz',
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.get('nome'),
          email: data.get('email'),
          oggetto: data.get('oggetto'),
          messaggio: data.get('messaggio'),
          recipientEmail,
        }),
      });

      if (res.ok) {
        setStatus('ok');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'ok') {
    return (
      <div className="max-w-2xl mx-auto text-center py-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-green-600 font-semibold text-lg">
          Messaggio inviato! Ti risponderò il prima possibile.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">{title}</h2>
      {subtitle && <p className="text-gray-600 text-center mb-8">{subtitle}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">
            Il tuo nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            La tua email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="oggetto" className="block text-gray-700 font-semibold mb-2">
            Oggetto
          </label>
          <input
            type="text"
            id="oggetto"
            name="oggetto"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="messaggio" className="block text-gray-700 font-semibold mb-2">
            Messaggio
          </label>
          <textarea
            id="messaggio"
            name="messaggio"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
            required
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            className="mt-1 mr-3"
            required
          />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            Accetto che i miei dati vengano raccolti e archiviati. Per maggiori informazioni
            consulta la{' '}
            <Link href="/cookie-policy-ue" className="text-purple-600 hover:underline">
              privacy policy
            </Link>
          </label>
        </div>

        {status === 'error' && (
          <p className="text-red-600 text-sm">
            Errore nell'invio. Riprova o scrivimi direttamente a{' '}
            <a href={`mailto:${recipientEmail}`} className="underline">{recipientEmail}</a>.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition disabled:opacity-60"
        >
          {loading ? 'Invio in corso…' : 'Invia Messaggio'}
        </button>
      </form>
    </div>
  );
}
