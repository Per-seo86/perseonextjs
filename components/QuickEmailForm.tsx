'use client';

import { useState } from 'react';
import Link from 'next/link';

interface QuickEmailFormProps {
  title?: string;
  recipientEmail?: string;
}

export default function QuickEmailForm({
  title = 'Hai bisogno di una consulenza SEO urgente?',
  recipientEmail = 'urgente@perseo.biz',
}: QuickEmailFormProps) {
  const [email, setEmail] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: 'Utente sito',
          email,
          oggetto: 'Richiesta di contatto urgente',
          messaggio: `L'utente ${email} ha richiesto una consulenza urgente.`,
          recipientEmail,
        }),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-1 my-10">
      <div className="bg-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-6">{title}</h3>

        {status === 'ok' ? (
          <p className="text-green-600 font-semibold text-lg py-4">
            Ricevuto! Ti risponderò il prima possibile.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-700 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />

            <div className="flex items-start gap-3 mb-5 text-left">
              <input
                type="checkbox"
                id="privacy-quick"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                className="mt-1 shrink-0"
                required
              />
              <label htmlFor="privacy-quick" className="text-sm text-gray-600">
                Accetto che i miei dati vengano raccolti e archiviati. Per maggiori
                informazioni consulta la{' '}
                <Link href="/cookie-policy-ue" className="text-blue-600 hover:underline">
                  privacy policy
                </Link>
              </label>
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm mb-3">Errore nell'invio. Riprova.</p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-3 rounded-full transition disabled:opacity-60"
              >
                {loading ? 'Invio…' : 'Invia'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
