import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Privacy Policy | Perseo',
  description: 'Privacy Policy di perseo.biz — informazioni sul trattamento dei dati personali.',
};

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Ultima modifica: 22 gennaio 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

            <p>
              Benvenuto nella privacy policy di perseo.biz/. Questa policy ti aiuterà a comprendere quali dati raccogliamo, perché li raccogliamo e quali sono i tuoi diritti in merito.
            </p>

            {/* Titolare */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Titolare del Trattamento dei Dati</h2>
              <p>
                Lorenzo Curia — Via Panebianco 162/U — 87100 — Cosenza — Italia<br />
                <strong>Indirizzo email del Titolare:</strong>{' '}
                <a href="mailto:info@perseo.biz" className="text-purple-600 hover:underline">info@perseo.biz</a>
              </p>
            </div>

            {/* Tipologie di dati */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Tipologie di Dati raccolti</h2>
              <p>
                Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li>Strumenti di Tracciamento</li>
                <li>Dati di utilizzo</li>
                <li>Numero di Utenti</li>
                <li>Statistiche delle sessioni</li>
                <li>Email</li>
              </ul>
              <p className="mt-4">
                Dettagli completi su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei Dati stessi.
              </p>
              <p className="mt-2">
                I Dati Personali possono essere liberamente forniti dall&apos;Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l&apos;uso di questa Applicazione. Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori.
              </p>
              <p className="mt-2">
                L&apos;Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione.
              </p>
            </div>

            {/* Modalità e luogo */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Modalità e luogo del trattamento dei Dati raccolti</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Modalità di trattamento</h3>
              <p>
                Il Titolare adotta le opportune misure di sicurezza volte ad impedire l&apos;accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Luogo</h3>
              <p>
                I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. I Dati Personali dell&apos;Utente potrebbero essere trasferiti in un paese diverso da quello in cui l&apos;Utente si trova.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Periodo di conservazione</h3>
              <p>
                Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.
              </p>
            </div>

            {/* Finalità */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Finalità del Trattamento dei Dati raccolti</h2>
              <p>I Dati dell&apos;Utente sono raccolti per consentire al Titolare di:</p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li>Fornire il Servizio e adempiere agli obblighi di legge</li>
                <li>Rispondere a richieste o azioni esecutive</li>
                <li>Tutelare i propri diritti ed interessi</li>
                <li>Individuare eventuali attività dolose o fraudolente</li>
                <li>Statistica e gestione dei tag</li>
                <li>Contattare l&apos;Utente</li>
                <li>Visualizzazione di contenuti da piattaforme esterne</li>
              </ul>
            </div>

            {/* Dettagli trattamento */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Dettagli sul trattamento dei Dati Personali</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Modulo di contatto</h3>
              <p>Dati Personali trattati: email, Dati di utilizzo.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Gestione dei tag — Google Tag Manager</h3>
              <p>
                Questo tipo di servizio consente al Titolare di gestire in modo centralizzato i tag o gli script necessari su questa Applicazione.<br />
                <strong>Azienda:</strong> Google LLC — <strong>Luogo del trattamento:</strong> Stati Uniti<br />
                Dati Personali trattati: Dati di utilizzo.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Statistica — Google Analytics 4</h3>
              <p>
                I servizi contenuti nella presente sezione permettono al Titolare di monitorare e analizzare i dati di traffico e tener traccia del comportamento dell&apos;Utente.<br />
                <strong>Azienda:</strong> Google LLC — <strong>Luogo del trattamento:</strong> Stati Uniti<br />
                Dati Personali trattati: Dati di utilizzo.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Visualizzazione di contenuti da piattaforme esterne — Google Fonts</h3>
              <p>
                <strong>Azienda:</strong> Google LLC — <strong>Luogo del trattamento:</strong> Stati Uniti<br />
                Dati Personali trattati: Dati di utilizzo.
              </p>
            </div>

            {/* GDPR */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Ulteriori informazioni per gli utenti nell&apos;Unione Europea</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Base giuridica del trattamento</h3>
              <p>Il Titolare tratta Dati Personali relativi all&apos;Utente in caso sussista una delle seguenti condizioni:</p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li>l&apos;Utente ha prestato il consenso per una o più finalità specifiche;</li>
                <li>il trattamento è necessario all&apos;esecuzione di un contratto con l&apos;Utente;</li>
                <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li>
                <li>il trattamento è necessario per l&apos;esecuzione di un compito di interesse pubblico;</li>
                <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Diritti dell&apos;Utente (GDPR)</h3>
              <p>Nei limiti previsti dalla legge, l&apos;Utente ha il diritto di:</p>
              <ul className="list-disc list-inside space-y-1 mt-3">
                <li><strong>Revocare il consenso</strong> in ogni momento;</li>
                <li><strong>Opporsi al trattamento</strong> dei propri Dati;</li>
                <li><strong>Accedere ai propri Dati</strong> e riceverne una copia;</li>
                <li><strong>Verificare e chiedere la rettificazione</strong> dei Dati;</li>
                <li><strong>Ottenere la limitazione</strong> del trattamento;</li>
                <li><strong>Ottenere la cancellazione</strong> dei propri Dati Personali;</li>
                <li><strong>Ricevere i propri Dati</strong> o farli trasferire ad altro titolare;</li>
                <li><strong>Proporre reclamo</strong> all&apos;autorità di controllo della protezione dei dati.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Come esercitare i diritti</h3>
              <p>
                Eventuali richieste di esercizio dei diritti dell&apos;Utente possono essere indirizzate al Titolare attraverso i recapiti forniti in questo documento. La richiesta è gratuita e il Titolare risponderà nel più breve tempo possibile, in ogni caso entro un mese.
              </p>
            </div>

            {/* Ulteriori info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Ulteriori informazioni sul trattamento</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Difesa in giudizio</h3>
              <p>
                I Dati Personali dell&apos;Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell&apos;utilizzo di questa Applicazione.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Log di sistema e manutenzione</h3>
              <p>
                Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l&apos;indirizzo IP Utente.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Modifiche a questa privacy policy</h3>
              <p>
                Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.
              </p>
            </div>

            {/* Definizioni */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Definizioni e riferimenti legali</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-gray-900">Dati Personali (o Dati)</dt>
                  <dd className="mt-1">Qualunque informazione che, direttamente o indirettamente, renda identificata o identificabile una persona fisica.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Dati di Utilizzo</dt>
                  <dd className="mt-1">Informazioni raccolte automaticamente attraverso questa Applicazione, tra cui: indirizzi IP, indirizzi URI, orario della richiesta, metodo della richiesta, dimensione del file ottenuto, codice di stato, paese di provenienza, caratteristiche del browser e del sistema operativo, tempo di permanenza su ciascuna pagina.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Utente</dt>
                  <dd className="mt-1">L&apos;individuo che utilizza questa Applicazione.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Titolare del Trattamento (o Titolare)</dt>
                  <dd className="mt-1">La persona fisica o giuridica che determina le finalità e i mezzi del trattamento di dati personali.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Cookie</dt>
                  <dd className="mt-1">Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all&apos;interno del browser dell&apos;Utente.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Strumento di Tracciamento</dt>
                  <dd className="mt-1">Qualsiasi tecnologia — es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting — che consenta di tracciare gli Utenti.</dd>
                </div>
              </dl>
            </div>

            {/* Contatti */}
            <div className="bg-purple-50 rounded-xl p-6 mt-8">
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
