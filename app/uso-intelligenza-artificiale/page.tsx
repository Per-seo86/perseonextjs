import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: "Uso dell'intelligenza artificiale | Perseo",
  description:
    "Come perseo.biz usa l'intelligenza artificiale nel blog e nei servizi di consulenza: trasparenza ai sensi dell'AI Act (Reg. UE 2024/1689) e della Legge 132/2025.",
};

export default function UsoIntelligenzaArtificiale() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={[{ label: "Uso dell'intelligenza artificiale" }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Uso dell&apos;intelligenza artificiale</h1>
          <p className="text-lg opacity-90">Ultima modifica: 9 ottobre 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            {/* Intro */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Perché questa pagina</h2>
              <p className="mb-4">
                Uso strumenti di intelligenza artificiale nel mio lavoro, come fa ormai la maggior parte di chi si occupa di digital marketing. Qui spiego come li uso, dove non li uso e chi risponde di quello che pubblico, in linea con gli obblighi di trasparenza del Regolamento (UE) 2024/1689 sull&apos;intelligenza artificiale (&ldquo;AI Act&rdquo;, in particolare l&apos;art. 50) e della Legge 23 settembre 2025, n. 132 (in particolare l&apos;art. 13 sulle professioni intellettuali).
              </p>
            </div>

            {/* Responsabile */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Responsabilità editoriale</h2>
              <p>
                Tutti i contenuti pubblicati su perseo.biz sono sotto la responsabilità editoriale di <strong>Lorenzo Curia</strong> — Via Panebianco 162/U — 87100 Cosenza — P. IVA 03728590781 —{' '}
                <a href="mailto:info@perseo.biz" className="text-purple-600 hover:underline">info@perseo.biz</a>.
              </p>
            </div>

            {/* Blog */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Come uso l&apos;IA negli articoli del blog</h2>
              <p className="mb-4">
                Alcuni articoli vengono preparati con il supporto di strumenti di IA generativa: per esempio per strutturare la scaletta, preparare una prima bozza, rivedere la forma o controllare esempi di codice.
              </p>
              <p className="mb-4">Nessun testo viene pubblicato così come esce da uno strumento di IA. Ogni articolo, prima della pubblicazione:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>viene letto, corretto e riscritto dove serve da me;</li>
                <li>viene verificato nei contenuti tecnici, nei dati e nelle procedure descritte;</li>
                <li>contiene esperienze e casi reali tratti dal mio lavoro con i clienti, che nessuno strumento può inventare;</li>
                <li>viene approvato da me, che me ne assumo la responsabilità editoriale.</li>
              </ul>
              <p>
                In fondo a ogni articolo trovi una nota che richiama queste regole.
              </p>
            </div>

            {/* Immagini */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Immagini e contenuti multimediali</h2>
              <p className="mb-4">
                Alcune immagini in evidenza degli articoli sono generate con <strong>Google Gemini</strong> (Google LLC, Stati Uniti, servizio online). Sono illustrazioni pensate per accompagnare il tema dell&apos;articolo, non fotografie o documenti.
              </p>
              <p className="mb-4">
                Le immagini generate o modificate in modo sostanziale con l&apos;IA sono indicate con la dicitura <strong>&ldquo;Immagine generata con IA&rdquo;</strong> direttamente sotto l&apos;immagine.
              </p>
              <p>
                Su questo sito non pubblico contenuti generati con l&apos;IA che rappresentano in modo realistico persone, luoghi o eventi reali (i cosiddetti &ldquo;deep fake&rdquo;). Gli screenshot di strumenti come Google Search Console, Google Analytics o Meta Ads Manager sono catture reali delle interfacce.
              </p>
            </div>

            {/* Sito */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cosa non fa l&apos;IA su questo sito</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Non ci sono chatbot o assistenti automatici: quando scrivi tramite i moduli di contatto, ti risponde una persona, cioè io.</li>
                <li>I dati che inserisci nei moduli di contatto non vengono usati per addestrare sistemi di IA né elaborati da sistemi di IA per prendere decisioni automatizzate che ti riguardano.</li>
                <li>Il sito non usa sistemi di IA per profilarti. Per gli strumenti di tracciamento consulta la{' '}
                  <Link href="/cookie-policy/" className="text-purple-600 hover:underline">Cookie Policy</Link> e la{' '}
                  <Link href="/cookie-policy-ue/" className="text-purple-600 hover:underline">Privacy Policy</Link>.
                </li>
              </ul>
            </div>

            {/* Servizi professionali */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">L&apos;IA nei servizi di consulenza</h2>
              <p className="mb-4">
                Nelle attività di consulenza (SEO, Google Ads, Meta Ads) posso usare strumenti di IA come supporto: analisi di dati ed export, bozze di testi e annunci, controlli tecnici. Per alcune funzioni uso anche gli strumenti di IA integrati nelle piattaforme pubblicitarie (per esempio lo Smart Bidding di Google Ads o le creatività Advantage+ di Meta).
              </p>
              <p className="mb-4">
                Come prevede l&apos;art. 13 della Legge 132/2025, l&apos;IA resta uno strumento di supporto: il lavoro intellettuale, le scelte strategiche e la responsabilità verso il cliente restano miei, per intero.
              </p>
              <p>
                Al momento dell&apos;incarico, ogni cliente riceve un&apos;informativa scritta con i sistemi di IA che userò per il suo progetto, la loro provenienza e le finalità d&apos;uso. Non inserisco dati personali o riservati del cliente in strumenti di IA senza averlo concordato prima.
              </p>
            </div>

            {/* Segnalazioni */}
            <div className="bg-purple-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Hai dubbi o vuoi segnalare un contenuto?</h2>
              <p>
                Se pensi che un contenuto di questo sito sia stato generato con l&apos;IA senza essere segnalato, o che contenga un errore, scrivimi: verifico e, se serve, correggo.<br />
                <a href="mailto:info@perseo.biz" className="text-purple-600 hover:underline font-semibold">info@perseo.biz</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
