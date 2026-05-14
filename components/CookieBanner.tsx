'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

type ConsentState = {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
};

const STORAGE_KEY = 'perseo_consent_v2';

function pushConsent(consent: ConsentState) {
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]) { w.dataLayer.push(args); }
  gtag('consent', 'update', {
    analytics_storage: consent.analytics_storage,
    ad_storage: consent.ad_storage,
    ad_user_data: consent.ad_user_data,
    ad_personalization: consent.ad_personalization,
    functionality_storage: consent.functionality_storage,
    personalization_storage: consent.personalization_storage,
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      setVisible(true);
    } else {
      // Restore and push saved consent
      try {
        const parsed: ConsentState = JSON.parse(saved);
        pushConsent(parsed);
      } catch {
        setVisible(true);
      }
    }
  }, []);

  function buildConsent(analyticsOn: boolean, marketingOn: boolean): ConsentState {
    return {
      analytics_storage: analyticsOn ? 'granted' : 'denied',
      ad_storage: marketingOn ? 'granted' : 'denied',
      ad_user_data: marketingOn ? 'granted' : 'denied',
      ad_personalization: marketingOn ? 'granted' : 'denied',
      functionality_storage: 'granted',
      personalization_storage: analyticsOn ? 'granted' : 'denied',
    };
  }

  function save(consent: ConsentState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    pushConsent(consent);
    setVisible(false);
  }

  function acceptAll() {
    save(buildConsent(true, true));
  }

  function rejectAll() {
    save(buildConsent(false, false));
  }

  function saveCustom() {
    save(buildConsent(analytics, marketing));
  }

  if (!visible) return (
    <button
      onClick={() => { setShowDetails(true); setVisible(true); }}
      className="fixed bottom-4 left-4 z-[9998] flex items-center gap-2 bg-white border border-gray-200 shadow-lg rounded-full px-3 py-2 text-sm text-gray-600 hover:shadow-xl hover:border-purple-300 transition"
      aria-label="Gestisci preferenze cookie"
      title="Gestisci preferenze cookie"
    >
      <span className="text-base">🍪</span>
      <span className="hidden sm:inline font-medium text-xs">Cookie</span>
    </button>
  );

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-end pointer-events-none">
      {/* Backdrop blur on mobile */}
      <div className="absolute inset-0 bg-black/20 pointer-events-auto" />

      <div className="relative w-full pointer-events-auto">
        <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-6 sm:px-8 sm:py-8 max-w-5xl mx-auto sm:mb-4 sm:rounded-2xl sm:border sm:shadow-2xl">

          {!showDetails ? (
            /* ── VISTA COMPATTA ── */
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Questo sito usa i cookie 🍪</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Utilizziamo cookie tecnici (sempre attivi) e cookie opzionali per analisi e marketing.
                  Puoi accettare tutto, rifiutare i non necessari o{' '}
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-purple-600 hover:underline font-medium"
                  >
                    personalizzare le tue scelte
                  </button>
                  . Leggi la{' '}
                  <Link href="/cookie-policy" className="text-purple-600 hover:underline font-medium">
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={rejectAll}
                  className="px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition"
                >
                  Rifiuta non necessari
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-5 py-2.5 rounded-full border border-purple-300 text-purple-700 text-sm font-semibold hover:border-purple-500 transition"
                >
                  Personalizza
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition"
                  style={{ backgroundColor: '#737de8' }}
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          ) : (
            /* ── VISTA DETTAGLIATA ── */
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Preferenze sui cookie</h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                  aria-label="Chiudi"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Seleziona quali categorie di cookie vuoi abilitare. I cookie tecnici sono sempre attivi perché necessari al funzionamento del sito.
                Leggi la{' '}
                <Link href="/cookie-policy" className="text-purple-600 hover:underline">Cookie Policy</Link>.
              </p>

              <div className="space-y-4 mb-6">

                {/* Necessari — sempre ON */}
                <div className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Tecnici / Necessari</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Indispensabili per il funzionamento del sito. Non possono essere disabilitati.
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-medium">Sempre attivi</span>
                    <div className="w-11 h-6 rounded-full flex items-center px-0.5" style={{ backgroundColor: '#737de8' }}>
                      <div className="w-5 h-5 bg-white rounded-full shadow ml-auto" />
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Analisi (Analytics)</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Google Analytics 4 — ci aiuta a capire come gli utenti navigano il sito, in forma anonima.
                    </p>
                  </div>
                  <button
                    role="switch"
                    aria-checked={analytics}
                    onClick={() => setAnalytics(!analytics)}
                    className="shrink-0 w-11 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200"
                    style={{ backgroundColor: analytics ? '#737de8' : '#d1d5db' }}
                  >
                    <div
                      className="w-5 h-5 bg-white rounded-full shadow transition-transform duration-200"
                      style={{ transform: analytics ? 'translateX(20px)' : 'translateX(0)' }}
                    />
                  </button>
                </div>

                {/* Marketing */}
                <div className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-xl">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Marketing / Pubblicità</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Google Tag Manager e strumenti pubblicitari — permettono di mostrare annunci personalizzati.
                    </p>
                  </div>
                  <button
                    role="switch"
                    aria-checked={marketing}
                    onClick={() => setMarketing(!marketing)}
                    className="shrink-0 w-11 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200"
                    style={{ backgroundColor: marketing ? '#737de8' : '#d1d5db' }}
                  >
                    <div
                      className="w-5 h-5 bg-white rounded-full shadow transition-transform duration-200"
                      style={{ transform: marketing ? 'translateX(20px)' : 'translateX(0)' }}
                    />
                  </button>
                </div>

              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={rejectAll}
                  className="flex-1 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 transition"
                >
                  Rifiuta non necessari
                </button>
                <button
                  onClick={saveCustom}
                  className="flex-1 px-5 py-2.5 rounded-full border border-purple-400 text-purple-700 text-sm font-semibold hover:bg-purple-50 transition"
                >
                  Salva preferenze
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition"
                  style={{ backgroundColor: '#737de8' }}
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
