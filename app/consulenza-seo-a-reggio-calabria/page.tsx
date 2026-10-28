import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import QuickEmailForm from '@/components/QuickEmailForm';

export const metadata: Metadata = {
  title: 'SEO a Reggio Calabria: consulenza per il posizionamento su Google | Perseo',
  description: 'Consulenza SEO a Reggio Calabria per turismo, agroalimentare e attività locali: farsi trovare in città, sullo Stretto e in tutta la provincia.',
};

export default function ConsulenzaSEOReggioCalabria() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'Consulenza SEO in Calabria', href: '/consulenza-seo-in-calabria' }, { label: 'SEO a Reggio Calabria' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SEO a Reggio Calabria: consulenza per il posizionamento su Google
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            per attività che lavorano tra lo Stretto, l&apos;Aspromonte e i due mari
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20 md:h-28">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z" fill="white" opacity="0.4"/>
            <path d="M0,80 C400,20 1000,100 1440,50 L1440,100 L0,100 Z" fill="white" opacity="0.6"/>
            <path d="M0,90 C300,50 900,110 1440,70 L1440,100 L0,100 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Contesto */}
          <h2 className="text-3xl font-bold mb-6">Reggio Calabria: una città metropolitana che Google legge a pezzi</h2>
          <p className="text-gray-700 mb-4">
            Uno degli equivoci più diffusi sulla SEO a Reggio Calabria è pensare che basti posizionarsi per &quot;qualcosa + Reggio Calabria&quot;. Fine. In realtà Reggio è una città metropolitana che va dal Tirreno allo Ionio: la Costa Viola, la Piana di Gioia Tauro, l&apos;Aspromonte, la Locride. Decine di comuni, ognuno con il suo nome, e chi cerca su Google quasi sempre scrive il nome del posto dove si trova, non quello del capoluogo.
          </p>
          <p className="text-gray-700 mb-12">
            Chi passeggia sul lungomare in certe giornate d&apos;estate può vedere la Fata Morgana: la Sicilia sembra lì, a portata di mano, con le case che si specchiano sul mare. Poi ti avvicini e non c&apos;è niente. Ecco, nel posizionamento su Google funziona spesso allo stesso modo. Il risultato sembra vicinissimo, ma se non sai esattamente dove sono i tuoi clienti e cosa cercano, stai inseguendo un miraggio.
          </p>

          {/* Reggio vs Reggio */}
          <h2 className="text-3xl font-bold mb-6">&quot;Reggio&quot; da sola non basta: il problema del nome</h2>
          <p className="text-gray-700 mb-4">
            C&apos;è un dettaglio che quasi nessuno considera. In Italia di Reggio ce ne sono due, e per Google &quot;Reggio&quot; senza altro può voler dire anche Reggio Emilia. Se sul sito scrivi &quot;siamo a Reggio&quot;, per un reggino è chiarissimo. Per un algoritmo, molto meno.
          </p>
          <p className="text-gray-700 mb-12">
            La regola è semplice: nei testi, nei title, nella scheda Google Business Profile e negli elenchi online scrivi sempre &quot;Reggio Calabria&quot; per intero, almeno nei punti importanti. Puoi usare &quot;Reggio&quot; o &quot;RC&quot; nel parlato del testo, ma il nome completo deve esserci. Sembra una banalità? Lo è. Ma le banalità ignorate sono proprio quelle che fanno perdere posizioni senza che nessuno capisca perché.
          </p>

          {/* Stretto */}
          <h2 className="text-3xl font-bold mb-6">Reggio o Messina? Lo Stretto passa anche dalle ricerche</h2>
          <p className="text-gray-700 mb-4">
            Reggio e Messina si guardano da sempre, e in mezzo c&apos;è un via vai continuo di persone: chi attraversa per lavoro, chi per studiare, chi per una visita medica o per fare acquisti. Traghetti da Villa San Giovanni, aliscafi dal porto di Reggio, l&apos;Aeroporto dello Stretto che serve entrambe le sponde.
          </p>
          <p className="text-gray-700 mb-12">
            Per alcune attività questo vuol dire un bacino di clienti che arriva anche dall&apos;altra parte. Un professionista, un centro specialistico o un negozio molto specifico può intercettare chi cerca dalla Sicilia, ma solo se il sito lo dice in modo esplicito: &quot;ricevo anche clienti da Messina&quot;, come arrivare dall&apos;imbarco, dove parcheggiare, quanto ci vuole a piedi dal porto. Google localizza i risultati in base a dove si trova chi cerca, quindi non aspettarti miracoli sulle ricerche generiche fatte a Messina. Ma su quelle specifiche, con il nome della città e del servizio, la partita è aperta. E spesso non la gioca nessuno.
          </p>

          {/* Turismo */}
          <h2 className="text-3xl font-bold mb-6">Bronzi, Scilla, Aspromonte: il turismo si decide prima di partire</h2>
          <p className="text-gray-700 mb-4">
            Chi viene a Reggio per i Bronzi di Riace al Museo Archeologico Nazionale, per Scilla e Chianalea, per la Costa Viola o per un&apos;escursione in Aspromonte, organizza tutto da casa. E da casa cerca: dove dormire vicino al museo, come arrivare a Scilla senza macchina, quale sentiero fare in un giorno, dove mangiare il pesce spada.
          </p>
          <p className="text-gray-700 mb-4">
            Su &quot;hotel Reggio Calabria&quot; vincono quasi sempre le OTA (le agenzie di viaggio online come Booking ed Expedia), e lì combattere è inutile. Le opportunità per una struttura o per un tour operator locale stanno nelle ricerche più lunghe e precise: quelle che un portale nazionale non ha interesse a presidiare e che chi vive qui conosce meglio di chiunque altro.
          </p>
          <p className="text-gray-700 mb-12">
            Attenzione ai tempi: le ricerche per l&apos;estate partono mesi prima, e un articolo pubblicato a giugno è già in ritardo. Ne parlo nella guida alle <Link href="/seo/keyword-a-tempo-determinato-seo-editoriale/" className="text-purple-600 hover:underline">keyword a tempo determinato</Link>: certe parole chiave valgono oro per poche settimane l&apos;anno, e vanno preparate prima.
          </p>

          <QuickEmailForm />

          {/* Bergamotto e agroalimentare */}
          <h2 className="text-3xl font-bold mb-6">Bergamotto e agroalimentare: vendere online fuori dalla Calabria</h2>
          <p className="text-gray-700 mb-4">
            Il bergamotto è uno dei pochi prodotti calabresi conosciuti davvero in tutto il mondo, e la sua patria è la costa reggina. Il problema è che chi cerca &quot;bergamotto&quot; su Google non sempre vuole comprarlo: spesso vuole sapere a cosa serve, se fa bene al colesterolo, come si usa in cucina o in profumeria. Sono ricerche informative, e un e-commerce che mostra solo la scheda prodotto non risponde a nessuna di queste.
          </p>
          <p className="text-gray-700 mb-12">
            Qui la SEO lavora su due livelli. Da un lato contenuti che rispondono alle domande (senza promesse sanitarie, che oltre a essere scorrette espongono a problemi seri), dall&apos;altro schede prodotto curate: origine, lavorazione, formato, spedizione, dati strutturati che dicono a Google prezzo e disponibilità. Lo stesso vale per olio, agrumi, conserve e liquori della provincia. E se vendi anche all&apos;estero, la versione in inglese non è un optional: è un altro mercato, con altre ricerche.
          </p>

          {/* Piana e Locride */}
          <h2 className="text-3xl font-bold mb-6">Piana di Gioia Tauro e Locride: due mercati, due strategie</h2>
          <p className="text-gray-700 mb-4">
            La Piana di Gioia Tauro ruota attorno al porto e all&apos;agricoltura. Qui ci sono aziende di logistica, trasporti, servizi portuali, produttori che vendono ad altre aziende. È SEO B2B (business to business, cioè tra imprese): pochi volumi di ricerca, ma ogni contatto può valere un contratto. Contano le pagine servizio fatte bene, le certificazioni, le referenze, e la capacità di farsi trovare anche da chi cerca in inglese.
          </p>
          <p className="text-gray-700 mb-12">
            La Locride, sul versante ionico, è un&apos;altra storia: borghi come Gerace, le spiagge, un turismo più lento e legato alla storia della Magna Grecia. Per una struttura ricettiva della zona la sfida è farsi trovare da chi non sa ancora di voler venire lì, e questo si fa raccontando il territorio, non elencando i servizi della camera.
          </p>

          {/* Local SEO in città */}
          <h2 className="text-3xl font-bold mb-6">Local SEO in città: una Reggio lunga e stretta</h2>
          <p className="text-gray-700 mb-4">
            Reggio si allunga sulla costa per chilometri, da Catona a nord fino a Pellaro a sud, e in mezzo ci sono il centro, i quartieri collinari, le zone universitarie. Per chi cerca &quot;parrucchiere&quot; o &quot;pizzeria&quot; dal telefono, la distanza conta: i risultati con la mappa cambiano anche di molto tra un quartiere e l&apos;altro.
          </p>
          <p className="text-gray-700 mb-12">
            Cosa puoi fare? Scheda Google Business Profile completa e aggiornata, categoria giusta, orari veri (anche nei festivi), foto dell&apos;ingresso così chi arriva lo riconosce. E poi le recensioni: quando i clienti citano la zona o il servizio nel testo, aiutano Google a capire cosa fai e dove. Non chiederlo con un copione, ovviamente. C&apos;è poi un pubblico che si rinnova ogni anno, quello degli studenti della Mediterranea e dell&apos;Università per Stranieri: cercano casa, copisterie, palestre, posti dove mangiare spendendo poco. Ricerche piccole, ma con un&apos;intenzione chiarissima.
          </p>

          {/* AI */}
          <h2 className="text-3xl font-bold mb-6">Cosa risponde un&apos;intelligenza artificiale quando le chiedi di Reggio?</h2>
          <p className="text-gray-700 mb-4">
            Prova a chiedere a ChatGPT o a Gemini &quot;cosa vedere a Reggio Calabria in un weekend&quot; o &quot;un buon ristorante di pesce sul lungomare di Reggio&quot;. Le risposte arrivano da fonti che l&apos;AI ha letto: siti, guide, recensioni, schede Google. Lo stesso succede con le AI Overview, i riassunti che Google mostra sempre più spesso sopra i risultati.
          </p>
          <p className="text-gray-700 mb-12">
            Per essere tra quelle fonti serve un sito che risponda in modo chiaro e completo alle domande vere, dati coerenti ovunque (nome, indirizzo, telefono) e informazioni facili da citare. Non è una disciplina separata dalla SEO, è la sua evoluzione: la differenza tra le sigle che girano in questo periodo la spiego nell&apos;articolo su <Link href="/seo/aeo-geo-differenza/" className="text-purple-600 hover:underline">AEO e GEO</Link>.
          </p>

          {/* Come lavoro */}
          <h2 className="text-3xl font-bold mb-6">Come lavoro sulla SEO a Reggio Calabria</h2>
          <p className="text-gray-700 mb-4">
            Lavoro da Cosenza, a un paio d&apos;ore di autostrada. La maggior parte del lavoro si fa da remoto, con videochiamate e accesso a Search Console e Analytics, ma quando serve vedere l&apos;attività dal vivo ci si incontra. Ogni consulenza SEO a Reggio Calabria parte dall&apos;analisi della domanda: chi ti cerca, da dove, in quali mesi, e chi occupa oggi le prime posizioni. Un B&amp;B a Scilla, un&apos;azienda del bergamotto e uno spedizioniere a Gioia Tauro hanno poco in comune, e trattarli allo stesso modo sarebbe un errore. Se vuoi un quadro più ampio, trovi l&apos;approccio generale nella pagina sulla <Link href="/consulenza-seo-in-calabria" className="text-purple-600 hover:underline">consulenza SEO in Calabria</Link>.
          </p>
          <p className="text-gray-700 mb-4">
            Non ti prometto la prima posizione in tempi certi, e diffido di chi lo fa. Ti propongo un percorso ordinato e misurabile, che parte da quello che la tua attività ha già. Perché la Fata Morgana sullo Stretto è bellissima da guardare. Ma per arrivare davvero dall&apos;altra parte, serve una rotta.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm
            title="Vuoi far crescere la tua attività a Reggio Calabria?"
            subtitle="Inviami una email personalizzata"
          />
        </div>
      </section>
    </div>
  );
}
