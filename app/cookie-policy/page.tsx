import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Cookie Policy | Perseo',
  description: 'Cookie Policy di perseo.biz — informazioni sugli strumenti di tracciamento utilizzati.',
};

export default function CookiePolicy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={[{ label: 'Cookie Policy' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg opacity-90">Ultima modifica: 22 gennaio 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            {/* Intro */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Introduzione</h2>
              <p className="mb-4">
                Questo documento contiene informazioni in merito alle tecnologie che consentono a questa Applicazione di raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al Titolare di raccogliere e salvare informazioni (per esempio tramite l&apos;utilizzo di Cookie) o di utilizzare risorse (per esempio eseguendo uno script) sul dispositivo dell&apos;Utente quando quest&apos;ultimo interagisce con questa Applicazione.
              </p>
              <p className="mb-4">
                Per semplicità, in questo documento tali tecnologie sono sinteticamente definite &ldquo;Strumenti di Tracciamento&rdquo;. Per esempio, sebbene i Cookie possano essere usati in browser sia web sia mobili, sarebbe fuori luogo parlare di Cookie nel contesto di applicazioni per dispositivi mobili. Per questo motivo, all&apos;interno di questo documento il termine Cookie è utilizzato solo per indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.
              </p>
              <p className="mb-4">
                Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero richiedere il consenso dell&apos;Utente. Se viene prestato il consenso, esso può essere revocato liberamente in qualsiasi momento seguendo le istruzioni contenute in questo documento.
              </p>
              <p>
                Questa Applicazione utilizza Strumenti di Tracciamento gestiti direttamente dal Titolare (di prima parte) e Strumenti di Tracciamento che abilitano servizi forniti da terzi (di terza parte). Durata e scadenza dei Cookie possono variare a seconda di quanto impostato dal Titolare o da ciascun fornitore terzo. Alcuni di essi scadono al termine della sessione di navigazione dell&apos;Utente.
              </p>
            </div>

            {/* Titolare */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Titolare del Trattamento dei Dati</h2>
              <p>
                Lorenzo Curia — Via Panebianco 162/U — 87100 — Cosenza — Italia<br />
                <strong>Email:</strong>{' '}
                <a href="mailto:info@perseo.biz" className="text-purple-600 hover:underline">info@perseo.biz</a>
              </p>
            </div>

            {/* Come usa gli strumenti */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Come questa Applicazione utilizza gli Strumenti di Tracciamento</h2>

              {/* Necessari */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Necessari</h3>
                <p className="mb-4">
                  Questa Applicazione utilizza Cookie comunemente detti &ldquo;tecnici&rdquo; o altri Strumenti di Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del Servizio.
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Strumenti di Tracciamento gestiti da terze parti</p>
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="font-semibold text-gray-900">Google Tag Manager</p>
                      <p className="text-sm text-gray-500">Azienda: Google LLC — Luogo del trattamento: Stati Uniti</p>
                      <p className="text-sm text-gray-500">Dati Personali trattati: Dati di utilizzo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Esperienza */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Esperienza</h3>
                <p className="mb-4">
                  Questa Applicazione utilizza Strumenti di Tracciamento per migliorare la qualità della user experience e consentire le interazioni con contenuti, network e piattaforme esterni.
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Strumenti di Tracciamento gestiti da terze parti</p>
                  <div>
                    <p className="font-semibold text-gray-900">Google Fonts</p>
                    <p className="text-sm text-gray-500">Azienda: Google LLC — Luogo del trattamento: Stati Uniti</p>
                    <p className="text-sm text-gray-500">Dati Personali trattati: Dati di utilizzo</p>
                  </div>
                </div>
              </div>

              {/* Misurazione */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Misurazione</h3>
                <p className="mb-4">
                  Questa Applicazione utilizza Strumenti di Tracciamento per misurare il traffico e analizzare il comportamento degli Utenti per migliorare il Servizio.
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3">Strumenti di Tracciamento gestiti da terze parti</p>
                  <div>
                    <p className="font-semibold text-gray-900">Google Analytics 4</p>
                    <p className="text-sm text-gray-500">Azienda: Google LLC — Luogo del trattamento: Stati Uniti</p>
                    <p className="text-sm text-gray-500">Dati Personali trattati: Dati di utilizzo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gestire preferenze */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Come gestire le preferenze e prestare o revocare il consenso</h2>
              <p className="mb-4">
                Qualora l&apos;utilizzo dei Tracker sia basato sul consenso, l&apos;Utente può fornire o revocare tale consenso impostando o aggiornando le proprie preferenze tramite il relativo pannello delle scelte in materia di privacy disponibile su questa Applicazione.
              </p>
              <p>
                Per quanto riguarda Strumenti di Tracciamento di terza parte, gli Utenti possono gestire le proprie preferenze visitando il relativo link di opt out (qualora disponibile), utilizzando gli strumenti descritti nella privacy policy della terza parte o contattando quest&apos;ultima direttamente.
              </p>
            </div>

            {/* Gestire via browser */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Come controllare o eliminare Cookie tramite le impostazioni del browser</h2>
              <p className="mb-4">Gli Utenti possono utilizzare le impostazioni del proprio browser per vedere, bloccare o cancellare Cookie e tecnologie simili.</p>
              <ul className="list-disc list-inside space-y-2">
                {[
                  { label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647' },
                  { label: 'Mozilla Firefox', href: 'https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox' },
                  { label: 'Apple Safari', href: 'https://support.apple.com/it-it/guide/safari/sfri11471/mac' },
                  { label: 'Microsoft Internet Explorer', href: 'https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d' },
                  { label: 'Microsoft Edge', href: 'https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
                  { label: 'Brave', href: 'https://support.brave.com/hc/en-us/articles/360022806212-How-do-I-use-Shields-while-browsing' },
                  { label: 'Opera', href: 'https://help.opera.com/en/latest/web-preferences/#cookies' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni mobili disattivandoli tramite le apposite impostazioni del dispositivo, quali le impostazioni di pubblicità per dispositivi mobili o le impostazioni relative al tracciamento in generale.
              </p>
            </div>

            {/* Conseguenze */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Conseguenze legate al rifiuto degli Strumenti di Tracciamento</h2>
              <p>
                Gli Utenti sono liberi di decidere se permettere o meno l&apos;utilizzo di Strumenti di Tracciamento. Tuttavia, si noti che gli Strumenti di Tracciamento consentono a questa Applicazione di fornire agli Utenti un&apos;esperienza migliore e funzionalità avanzate. Pertanto, qualora l&apos;Utente decida di bloccarli, il Titolare potrebbe non essere in grado di fornire le relative funzionalità.
              </p>
            </div>

            {/* Definizioni */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Definizioni e riferimenti legali</h2>
              <dl className="space-y-5">
                {[
                  {
                    term: 'Dati Personali (o Dati)',
                    def: 'Qualunque informazione che, direttamente o indirettamente, renda identificata o identificabile una persona fisica.',
                  },
                  {
                    term: 'Dati di Utilizzo',
                    def: 'Informazioni raccolte automaticamente attraverso questa Applicazione: indirizzi IP, indirizzi URI, orario della richiesta, metodo della richiesta, dimensione del file, codice di stato, paese di provenienza, caratteristiche del browser e del sistema operativo, tempo di permanenza su ciascuna pagina.',
                  },
                  {
                    term: 'Utente',
                    def: "L'individuo che utilizza questa Applicazione.",
                  },
                  {
                    term: 'Interessato',
                    def: 'La persona fisica cui si riferiscono i Dati Personali.',
                  },
                  {
                    term: 'Responsabile del Trattamento (o Responsabile)',
                    def: 'La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare.',
                  },
                  {
                    term: 'Titolare del Trattamento (o Titolare)',
                    def: 'La persona fisica o giuridica che determina le finalità e i mezzi del trattamento di dati personali.',
                  },
                  {
                    term: 'Cookie',
                    def: "Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.",
                  },
                  {
                    term: 'Strumento di Tracciamento',
                    def: 'Qualsiasi tecnologia — es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting — che consenta di tracciare gli Utenti.',
                  },
                  {
                    term: 'Unione Europea (o UE)',
                    def: "Salvo ove diversamente specificato, ogni riferimento all'Unione Europea si intende esteso a tutti gli attuali stati membri dell'Unione Europea e dello Spazio Economico Europeo.",
                  },
                ].map(({ term, def }) => (
                  <div key={term}>
                    <dt className="font-semibold text-gray-900">{term}</dt>
                    <dd className="mt-1 text-gray-600">{def}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-gray-500">
                Ove non diversamente specificato, questa policy riguarda esclusivamente questa Applicazione.
              </p>
            </div>

            {/* Contatti */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Contattaci</h2>
              <p>
                Lorenzo Curia — Via Panebianco 162/U — 87100 — Cosenza — Italia<br />
                <a href="mailto:info@perseo.biz" className="text-purple-600 hover:underline font-semibold">info@perseo.biz</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
