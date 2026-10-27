import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import QuickEmailForm from '@/components/QuickEmailForm';

export const metadata: Metadata = {
  title: 'SEO a Catanzaro: consulenza per il posizionamento su Google | Perseo',
  description: 'Consulenza SEO a Catanzaro per professionisti, sanità, commercio e turismo sullo Ionio: farsi trovare in città, al Lido e in tutta la provincia.',
};

export default function ConsulenzaSEOCatanzaro() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'Consulenza SEO in Calabria', href: '/consulenza-seo-in-calabria' }, { label: 'SEO a Catanzaro' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SEO a Catanzaro: consulenza per il posizionamento su Google
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            per studi, ambulatori e attività che lavorano tra il colle, il Lido e la provincia
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
          <h2 className="text-3xl font-bold mb-6">Catanzaro: un capoluogo che vive di servizi</h2>
          <p className="text-gray-700 mb-4">
            Quando si parla di SEO a Catanzaro, molti pensano subito al commercio in centro. In realtà la città ha un&apos;economia diversa da quasi tutto il resto della Calabria: qui ci sono la Regione, l&apos;università Magna Graecia, il policlinico, la Corte d&apos;Appello, il TAR. Uffici, ospedali, tribunali. E attorno a questi, migliaia di professionisti: avvocati, medici, commercialisti, consulenti, tecnici.
          </p>
          <p className="text-gray-700 mb-12">
            È anche la città delle tre V (il vento, il velluto e San Vitaliano), arroccata su un colle a pochi chilometri dallo Ionio, nel punto in cui l&apos;Italia è più stretta. Insomma, un capoluogo dove la gente non arriva per fare shopping, ma perché ha bisogno di qualcosa: una visita, una pratica, un parere, un esame all&apos;università. Ed è proprio questo bisogno che, online, si trasforma in ricerche su Google.
          </p>

          {/* Geografia */}
          <h2 className="text-3xl font-bold mb-6">Centro, Lido o Germaneto: dove ti cerca Google?</h2>
          <p className="text-gray-700 mb-4">
            Catanzaro non è una città compatta. C&apos;è il centro storico in alto, c&apos;è Catanzaro Lido sul mare, c&apos;è Germaneto con la Cittadella regionale e il campus universitario, e in mezzo una serie di quartieri cresciuti lungo le colline. Tra un punto e l&apos;altro ci sono anche venti minuti di macchina.
          </p>
          <p className="text-gray-700 mb-4">
            Per la Local SEO questo conta, eccome. Quando qualcuno cerca &quot;dentista Catanzaro&quot;, i tre risultati con la mappa che Google mostra in alto (il Local Pack) cambiano in base a dove si trova chi cerca. Lo stesso studio può essere primo per chi è al Lido e sparire per chi è in centro. Non è un errore di Google: è la distanza che pesa.
          </p>
          <p className="text-gray-700 mb-12">
            Cosa si può fare? Innanzitutto curare la scheda Google Business Profile: categoria principale precisa, servizi elencati uno per uno, foto vere, recensioni a cui rispondi. Poi dire chiaramente sul sito dove sei e chi servi. Se ricevi pazienti o clienti da tutta la città, scrivilo, e spiega come arrivare e dove parcheggiare (a Catanzaro, credimi, è un&apos;informazione che vale oro). Quello che non devi fare è aprire una pagina per ogni quartiere con lo stesso testo e il nome cambiato: Google se ne accorge, e i tuoi clienti pure.
          </p>

          {/* Professionisti */}
          <h2 className="text-3xl font-bold mb-6">Avvocati, medici, commercialisti: la SEO per chi vende fiducia</h2>
          <p className="text-gray-700 mb-4">
            Una buona parte delle attività di Catanzaro lavora in settori che Google tratta con le pinze. Si chiamano YMYL (Your Money or Your Life: salute, soldi, diritti, tutto ciò che può cambiare la vita di una persona) e per questi temi l&apos;algoritmo è molto più severo. Non basta un testo ottimizzato: Google vuole capire chi lo ha scritto, che titoli ha, perché dovrebbe fidarsi.
          </p>
          <p className="text-gray-700 mb-4">
            Il problema è che i siti dei professionisti, quasi sempre, sono biglietti da visita. Una pagina &quot;chi siamo&quot;, una pagina &quot;aree di attività&quot; con cinque parole per area, un modulo contatti. Fine. Chi cerca &quot;quanto dura un ricorso al TAR&quot; o &quot;separazione consensuale costi Catanzaro&quot; non trova nulla di utile, e finisce sui portali nazionali.
          </p>
          <p className="text-gray-700 mb-12">
            La strada è scrivere le risposte alle domande che i clienti ti fanno già in studio: tempi, costi indicativi, documenti da portare, cosa succede dopo. Con nome, cognome e iscrizione all&apos;albo dell&apos;autore ben visibili. Attenzione: ogni professione ha le sue regole deontologiche sulla comunicazione, e un contenuto SEO deve rispettarle. Informare sì, promettere esiti no. Che, a pensarci bene, è anche la regola che seguo io con la SEO.
          </p>

          <QuickEmailForm />

          {/* Studenti e famiglie */}
          <h2 className="text-3xl font-bold mb-6">Studenti e famiglie in trasferta: una domanda che quasi nessuno presidia</h2>
          <p className="text-gray-700 mb-4">
            C&apos;è un pubblico che a Catanzaro si rinnova ogni anno: gli studenti fuori sede della Magna Graecia, che arrivano da tutta la regione e oltre. E ce n&apos;è un altro, meno visibile ma costante: le famiglie che accompagnano un parente al policlinico o in una clinica della città, a volte per giorni.
          </p>
          <p className="text-gray-700 mb-12">
            Entrambi cercano su Google cose molto concrete: una stanza in affitto vicino a Germaneto, un B&amp;B comodo per l&apos;ospedale, un ristorante aperto la sera, una copisteria, una farmacia di turno. Sono ricerche con volumi piccoli ma un&apos;intenzione chiarissima, e in molti casi la concorrenza è quasi zero. Per un affittacamere, un bar o un negozio di zona, una pagina scritta pensando a queste persone può portare più clienti di qualsiasi tentativo di posizionarsi su una keyword generica.
          </p>

          {/* Provincia */}
          <h2 className="text-3xl font-bold mb-6">Lamezia, Soverato e lo Ionio: quando la provincia viene cercata più del capoluogo</h2>
          <p className="text-gray-700 mb-4">
            La provincia di Catanzaro ha due nomi che, su Google, camminano da soli. Lamezia Terme, con l&apos;aeroporto da cui passa buona parte di chi arriva in Calabria in aereo: noleggio auto, transfer, parcheggi, hotel per chi ha il volo all&apos;alba. E Soverato con la costa ionica, che d&apos;estate si riempie e d&apos;inverno torna tranquilla.
          </p>
          <p className="text-gray-700 mb-12">
            Qui la parola chiave è stagionalità. Una keyword che a gennaio non cerca nessuno ad agosto può valere metà del fatturato dell&apos;anno, e i contenuti vanno pubblicati mesi prima, non a stagione iniziata. Per capire quando si muove la domanda servono i dati: Google Trends per le tendenze generali e Search Console per le query reali del tuo sito, come spiego nella guida alla <Link href="/seo/keyword-research-google-search-console/" className="text-purple-600 hover:underline">keyword research con Search Console</Link>. Il resto della strategia segue lo stesso principio della <Link href="/consulenza-seo-in-calabria" className="text-purple-600 hover:underline">consulenza SEO in Calabria</Link>: partire dal territorio, non da una lista di parole prese a caso.
          </p>

          {/* GEO */}
          <h2 className="text-3xl font-bold mb-6">SEO e intelligenza artificiale: cosa sa ChatGPT del tuo studio?</h2>
          <p className="text-gray-700 mb-4">
            Fai una prova: chiedi a ChatGPT o a Gemini &quot;un buon commercialista a Catanzaro&quot; o &quot;un ortopedico a Catanzaro Lido&quot;. Le risposte non escono dal nulla: arrivano da siti, schede Google, recensioni, elenchi degli ordini professionali. Lo stesso vale per l&apos;AI Overview che Google mostra sempre più spesso sopra i risultati.
          </p>
          <p className="text-gray-700 mb-12">
            Per comparire lì non serve un trucco nuovo. Serve che nome, indirizzo, telefono e servizi siano identici ovunque, che il sito spieghi in modo chiaro chi sei e cosa fai, e che i dati strutturati (il codice che descrive a Google e alle AI la tua attività) siano impostati bene. Se il tuo studio risulta in due indirizzi diversi perché hai traslocato tre anni fa, un algoritmo non sa quale scegliere. E nel dubbio, sceglie un altro.
          </p>

          {/* Come lavoro */}
          <h2 className="text-3xl font-bold mb-6">Come lavoro sulla SEO a Catanzaro</h2>
          <p className="text-gray-700 mb-4">
            Lavoro da Cosenza, a poco più di un&apos;ora di strada, e la Calabria è il territorio che conosco meglio. Ogni consulenza SEO a Catanzaro parte da un&apos;analisi della domanda: cosa cercano i tuoi clienti, da quale zona, in quali mesi, e chi occupa oggi le prime posizioni. Per uno studio legale vicino al tribunale e per un lido a Soverato le priorità sono quasi opposte, e trattarle allo stesso modo è il modo più rapido per sprecare tempo e soldi.
          </p>
          <p className="text-gray-700 mb-4">
            Non posso garantirti la prima posizione in tempi certi, e diffido di chi lo fa. Posso costruire con te un percorso ordinato e misurabile, che parta da quello che la tua attività ha già. A Catanzaro il vento non manca mai. Online è lo stesso: la domanda c&apos;è. Serve solo qualcuno che orienti la vela nella direzione giusta.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm
            title="Vuoi far crescere la tua attività a Catanzaro?"
            subtitle="Inviami una email personalizzata"
          />
        </div>
      </section>
    </div>
  );
}
