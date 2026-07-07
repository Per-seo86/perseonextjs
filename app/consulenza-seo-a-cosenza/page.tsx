import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import QuickEmailForm from '@/components/QuickEmailForm';

export const metadata: Metadata = {
  title: 'SEO a Cosenza: consulenza per il posizionamento su Google | Perseo',
  description: 'Consulenza SEO a Cosenza per aziende, professionisti e attività locali. Strategia su misura per posizionare il tuo sito nel mercato cosentino e oltre.',
};

export default function ConsulenzaSEOCosenza() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'Consulenza SEO in Calabria', href: '/consulenza-seo-in-calabria' }, { label: 'SEO a Cosenza' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SEO a Cosenza: consulenza per il posizionamento su Google
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            per aziende e professionisti che vogliono farsi trovare davvero
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
          <h2 className="text-3xl font-bold mb-6">Perché la SEO conta a Cosenza più che altrove</h2>
          <p className="text-gray-700 mb-4">
            Cosenza è il capoluogo con la provincia più estesa e popolosa della Calabria, ma è anche una città a doppia velocità: da un lato il centro storico, i quartieri consolidati, l&apos;economia dei servizi e del commercio; dall&apos;altro la conurbazione con Rende, che ospita l&apos;Università della Calabria, uno dei pochi campus universitari realmente autosufficienti in Italia e un bacino costante di studenti, ricercatori e nuove attività.
          </p>
          <p className="text-gray-700 mb-12">
            Questo significa che a Cosenza convivono mercati molto diversi nella stessa area geografica: professionisti e studi che lavorano su clientela locale, attività commerciali che vivono di passaggio e recensioni, aziende legate al turismo di Sila e Costa Tirrenica Cosentina, e realtà più giovani, spesso nate in orbita universitaria, che ragionano già in ottica digitale. Una strategia SEO efficace deve tenere conto di questa doppia natura, non trattare Cosenza come una città qualunque a cui appiccicare un nome.
          </p>

          {/* Il problema reale */}
          <h2 className="text-3xl font-bold mb-6">Il problema: pagine locali fatte con lo stampino</h2>
          <p className="text-gray-700 mb-4">
            Chi cerca oggi &quot;SEO a Cosenza&quot; su Google trova soprattutto due tipi di risultati: agenzie nazionali che hanno un elenco di decine di città con il nome cambiato ogni volta, e directory generiche che si limitano a raccogliere contatti. Il contenuto, quando c&apos;è, parla di SEO in generale e cita Cosenza una volta nel titolo, senza dire nulla di specifico sul mercato locale, sui quartieri, sulla concorrenza reale che un&apos;azienda cosentina si trova davanti.
          </p>
          <p className="text-gray-700 mb-12">
            Il risultato è che chi cerca un consulente SEO a Cosenza fatica a distinguere chi conosce davvero il territorio da chi ha semplicemente clonato una pagina. Ed è proprio qui che si gioca il vantaggio competitivo: una pagina che dimostra conoscenza reale del contesto locale comunica affidabilità sia agli utenti che a Google.
          </p>

          {/* Settori */}
          <h2 className="text-3xl font-bold mb-6">Settori con margini reali di crescita a Cosenza</h2>
          <p className="text-gray-700 mb-4">
            In città e provincia esistono ambiti in cui la concorrenza online è ancora poco strutturata: studi professionali (avvocati, commercialisti, notai), sanità privata e centri specialistici, ristorazione e ricettività legata al turismo di Sila e costa, artigianato e agroalimentare tipico, e-commerce e attività che vendono anche fuori regione. In ciascuno di questi settori bastano pochi competitor realmente ottimizzati per occupare le prime posizioni: chi si muove con metodo oggi parte in vantaggio.
          </p>
          <p className="text-gray-700 mb-12">
            Discorso diverso per il polo universitario di Rende-Arcavacata: qui la domanda di ricerca è più giovane, più abituata a informarsi online e più ricettiva a contenuti nuovi, il che rende questa zona un buon banco di prova per strategie SEO più sperimentali, incluse quelle orientate alla ricerca generativa.
          </p>

          <QuickEmailForm />

          {/* Local SEO specifica */}
          <h2 className="text-3xl font-bold mb-6">Local SEO: Google Business Profile e presenza sulla mappa</h2>
          <p className="text-gray-700 mb-4">
            Per la maggior parte delle attività cosentine, il primo terreno di gioco non è la prima pagina generica di Google, ma il Local Pack: i tre risultati con mappa che compaiono per ricerche come &quot;ristorante Cosenza centro&quot; o &quot;dentista Cosenza&quot;. Curare la scheda Google Business Profile, le recensioni, la coerenza di nome-indirizzo-telefono su tutte le directory locali, è spesso il modo più rapido per ottenere risultati misurabili in tempi brevi.
          </p>
          <p className="text-gray-700 mb-12">
            Ma la Local SEO da sola non basta: senza un sito ben strutturato e contenuti che rispondano davvero alle domande dei clienti, la visibilità sulla mappa non si traduce in autorevolezza né in posizionamento stabile sulle ricerche più competitive.
          </p>

          {/* Oltre Cosenza */}
          <h2 className="text-3xl font-bold mb-6">Aziende cosentine che vendono anche fuori regione</h2>
          <p className="text-gray-700 mb-4">
            Non tutte le attività di Cosenza lavorano solo su clientela locale. Molte imprese, soprattutto nell&apos;agroalimentare, nell&apos;artigianato e nei servizi digitali, vendono anche fuori Calabria. In questi casi la pagina locale su Cosenza non è un limite ma una base: comunica a Google la sede reale dell&apos;attività, mentre contenuti informazionali e commerciali più ampi permettono di intercettare domanda su scala nazionale.
          </p>
          <p className="text-gray-700 mb-12">
            È lo stesso principio già descritto per la <Link href="/consulenza-seo-in-calabria" className="text-purple-600 hover:underline">consulenza SEO in Calabria</Link>: si parte da un contesto territoriale solido per poi scalare verso mercati più ampi, senza perdere la rilevanza locale che spesso fa la differenza per chi ha comunque un negozio, uno studio o una sede fisica in città.
          </p>

          {/* GEO / ricerca AI */}
          <h2 className="text-3xl font-bold mb-6">SEO e ricerca generativa: prepararsi anche per l&apos;AI</h2>
          <p className="text-gray-700 mb-4">
            Sempre più utenti, inclusi quelli cosentini, usano strumenti come ChatGPT o l&apos;AI Overview di Google per farsi consigliare un professionista o un&apos;attività in città. Questo significa che una strategia SEO aggiornata non può limitarsi al posizionamento classico: deve includere contenuti strutturati, dati coerenti e informazioni verificabili che questi sistemi possano leggere e citare correttamente.
          </p>
          <p className="text-gray-700 mb-12">
            Chi lavora oggi su Cosenza con questa doppia ottica, SEO tradizionale e ottimizzazione per la ricerca generativa, costruisce un vantaggio che sarà sempre più difficile recuperare per chi arriva dopo.
          </p>

          {/* Scelta strategica */}
          <h2 className="text-3xl font-bold mb-6">Perché scegliere una consulenza SEO mirata su Cosenza</h2>
          <p className="text-gray-700 mb-4">
            Una consulenza SEO seria per Cosenza parte dall&apos;analisi della domanda reale della città e della provincia, individua le opportunità specifiche di ogni settore e costruisce una struttura coerente, senza promesse di risultati immediati e senza contenuti riciclati da altre città con il nome cambiato.
          </p>
          <p className="text-gray-700 mb-4">
            Non è una scorciatoia, ma un percorso costruito su un territorio che conosco: significa capire la differenza tra un cliente del centro storico e uno di Rende, tra un&apos;attività che vive di passaggio e una che deve farsi conoscere anche fuori regione.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm
            title="Vuoi far crescere la tua attività a Cosenza?"
            subtitle="Inviami una email personalizzata"
          />
        </div>
      </section>
    </div>
  );
}
