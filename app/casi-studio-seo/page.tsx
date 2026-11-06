import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import TableOfContents from '@/components/TableOfContents';
import { generateId } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Casi studio SEO: i più problematici e come li ho risolti | Perseo',
  description: 'Casi studio SEO reali: i problemi più complessi che mi sono capitati in oltre 10 anni di attività e come li ho affrontati, con numeri e grafici.',
};

const CASI = [
  "Sito estero – Blocco Paypal",
  "Sito di informazione – Problema principale: thin content",
  "Azienda di infissi – Il blog sparito con il rifacimento del sito",
  "Azienda enogastronomica – Prodotto stagionale: l'intento che mancava",
];

export default function CasiSEO() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'Casi studio SEO' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            I casi studio SEO più problematici che mi siano mai capitati e come li ho risolti
          </h1>
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

          <div className="mb-8">
            <Image
              src="/images/casi-seo-problematici-copertina.webp"
              alt="Professionista alla scrivania di notte con le mani sul volto, davanti al computer"
              width={1000}
              height={563}
              priority
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <TableOfContents sections={CASI.map((content) => ({ type: 'heading', level: 2, content }))} />

          {/* Caso 1 - Blocco Paypal */}
          <h2 id={generateId(CASI[0])} className="text-3xl font-bold mb-6">{CASI[0]}</h2>
          <p className="text-gray-700 mb-4">
            In più di 10 anni di attività, mi sono capitate, ovviamente, alcune sfide. Alcune grosse, altre di meno. All'inizio non ci capivo niente e avevo più difficoltà, poi con l'abitudine e il ripresentarsi di medesimi errori, c'ho fatto il callo, come tutti.
          </p>

          <h3 className="text-xl font-semibold mb-4">Il caso studio è questo</h3>
          <p className="text-gray-700 mb-4">
            Sito estero, abbastanza grosso, con molte pagine sia di prodotti che di servizi (offerte di lavoro, collaborazioni ecc…).
          </p>
          <p className="text-gray-700 mb-4">
            Sulla Search Console appaiono una caterva di pagine non scansionabili e, di conseguenza, non indicizzabili. Le pagine del blog non hanno problemi, infatti il traffico arriva tutto da lì. Ma quelle relative agli acquisti, ovviamente 0.
          </p>
          <p className="text-gray-700 mb-4">
            Nella mia ingenuità penso "Visto che il sito è in React, mi gioco tutto che è un problema di Server-Side Rendering." E avrei perso tutto, dato che Wappalyzer mi segnala che il portale ha Next.js: framework che permette una serie di operazioni SEO in React.
          </p>
          <p className="text-gray-700 mb-4">
            Voglio una conferma e da "Visualizza sorgente pagina", l'html si legge tutto. Titoli, link, paragrafi, immagini.
          </p>
          <p className="text-gray-700 mb-4">
            "Ok, quindi non può essere questo il problema" (anche perché sarebbero stati bloccati gli articoli del blog, a quel punto). Chiedo aiuto alla nostra vecchia rana (Screaming Frog), dove, in effetti, segnala una sfilza di pagine bloccate dal robots.txt. Sono tutte quelle di "acquisto". Ci siamo!
          </p>
          <p className="text-gray-700 mb-4">
            Vado sul robots, dove mi aspetto di trovare i path in disallow, ma è tutto libero. Pure troppo. È tutto in Allow. Non è possibile! Tiro giù qualche Madonna e comincio a leggere meglio i dati di Screaming Frog. Noto che nei dettagli c'è un link paypal che causa il blocco.
          </p>
          <p className="text-gray-700 mb-4">
            C'è qualcosa che non va esternamente. Comincio a cercare qualcosa "sull'Internet" e in un forum legato a paypal, c'è un utente che aveva avuto il mio stesso problema e che il blocco, secondo lui, era dovuto ai CORS.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <p className="text-gray-700">
              I CORS (Cross-Origin Resource Sharing) sono un sistema di sicurezza del browser che impedisce che uno o più script in una pagina web, effettuino richieste verso un dominio diverso dal proprio, a meno che il server di destinazione non permetta esplicitamente tali richieste. Se PayPal non consente l'accesso alle sue risorse da parte di un dominio, le risorse non vengono caricate, causando problemi di funzionamento o visualizzazione sul sito.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            Ok forse ci sono!
          </p>
          <p className="text-gray-700 mb-4">
            Mi metto in contatto con l'assistenza ufficiale di Paypal spiegando il problema e mi dicono che sarò ricontattato a breve.
          </p>
          <p className="text-gray-700 mb-4">
            Ovviamente, mi aspettavo una risposta tipo "Sì, in effetti il sito del cliente è visto come malevolo da Paypal e quindi le pagine dove c'è il sistema di pagamento sono bloccate". Invece mi dicono che il sito è tutto ok e non è in alcuna "black list".
          </p>
          <p className="text-gray-700 mb-4">
            "Com'è possibile?" Però forse c'è una logica. Se c'è un blocco tra i browser, dovrebbero esserci problemi di visualizzazione o errori 500, 503 et similia non appena le persone tentano di effettuare un pagamento. Search Console me le avrebbe restituite con questo status code o al massimo in 404. Mi sa che sono sulla strada sbagliata.
          </p>
          <p className="text-gray-700 mb-4">
            Finalmente forse la luce della ragione (LA BAAAAANDA – cit. Blues Brothers):
          </p>
          <p className="text-gray-700 mb-4">
            Dunque, se Screaming Frog segnala che le pagine sono bloccate dal robots.txt, ma in realtà il file è completamente aperto, non è che il problema è su PayPal? Controllo ed ecco la risposta: il link PayPal contenuto nel sito, include un percorso che è in Disallow nel <strong>robots.txt di PayPal stesso</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Finalmente tutto ha senso.
          </p>
          <p className="text-gray-700 mb-4">
            Segnalo il problema al cliente e gli invio una guida ufficiale su come aggirarlo, modificando il link in tutte le pagine coinvolte, rispettando i criteri di PayPal.
          </p>

          <h3 className="text-xl font-semibold mb-4">Com'è andata a finire?</h3>
          <p className="text-gray-700 mb-12">
            Qualche tempo dopo lascio l'agenzia che mi aveva affidato questo cliente estero e, per curiosità, controllo qualche giorno fa come va il tutto: <strong>quelle pagine sono ancora bloccate</strong>. 😅 Grazie a questo errore, il sito, ancora oggi, perde una marea di soldi al giorno.
          </p>

          {/* Caso 2 - Sito di informazione */}
          <h2 id={generateId(CASI[1])} className="text-3xl font-bold mb-6">{CASI[1]}</h2>
          <p className="text-gray-700 mb-4">
            Infatti molte news non venivano indicizzate. Cominciamo a pubblicare news lunghe, formattate per la SEO (headings, link interni ed esterni, tag alt ecc…), dettagliate, esaustive e alcune, addirittura, escono prima dei competitor. Cresciamo sulla ricerca organica, ma c'è qualcosa che blocca l'aumento di visite.
          </p>
          <p className="text-gray-700 mb-4">
            Vado sulla Search Console e mi accorgo che c'è un numero spropositato di pagine scansionate, ma non indicizzate. Il povero crawler stava faticando assai. Scansionare URL spazzatura non è bello, anche tag non pertinenti del vecchio sito, quando era in WordPress (ora è in un CMS proprietario). Bisogna bloccare questo sistema disfunzionale.
          </p>
          <p className="text-gray-700 mb-4">
            "Vabbè, ma vanno poi tutte in <Link href="/seo/errori-404-sul-tuo-sito" className="text-purple-600 underline hover:text-pink-500">404</Link>, che te frega?! poi Google le elimina" mi dicono. Il fatto è che stavano aumentando di giorno in giorno.
          </p>
          <p className="text-gray-700 mb-4">
            Rifletti, analizza e vai a beccare che all'interno della sitemap_index, ci sono 2 sitemap. "Mi sta bene" penso io. Ci sono tantissimi articoli ed è corretto che anche prima dei 50k URL, si crei una seconda sitemap per non appesantire tutto il sito in una sola. Dopo un paio di giorni, ritorno sulle 2 sitemap e vedo che hanno gli stessi URL. Sono identiche. Una la copia dell'altra.
          </p>
          <p className="text-gray-700 mb-4">
            Immediatamente faccio rimuoverne una e… tac. Lo spider sembra che torni finalmente a respirare. Così, questo intervento tecnico, insieme agli ottimi e autorevoli articoli che ormai popolano la testata, hanno fatto sì che il sito cominciasse a crescere sul serio.
          </p>
          <p className="text-gray-700 mb-6">
            Molte persone credono che basti un tag title, un H1 o H2 per far riprendere un sito. Molti addirittura dicono "sì sì abbiamo la SEO sul sito. c'è già Yoast". Ah tutto qui? Avete risolto tutto? Come si può ben vedere, la SEO è un mix perfetto di strategie, psicologia del target, tecniche (a volte complesse) e contenuti. Come tutte le cose, è un insieme di fattori esterni e interni. E soprattutto non è un'attività che può cambiarti la vita da un giorno all'altro (ho cominciato a seguire questo cliente da giugno, più o meno dov'è la freccia rossa).
          </p>
          <div className="mb-12">
            <Image
              src="/images/andamento-sito-informazione.jpg"
              alt="andamento sito di informazione Search Console"
              width={2560}
              height={853}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Caso 3 - Blog perso nel rifacimento del sito */}
          <h2 id={generateId(CASI[2])} className="text-3xl font-bold mb-6">{CASI[2]}</h2>
          <p className="text-gray-700 mb-4">
            Un'azienda che vende infissi arriva da noi disperata: i contatti di chi ha bisogno di una porta, di una finestra o di infissi nuovi non arrivano più. Il sito è stato appena rifatto ed è pure bello. Solo che non porta più nessuno.
          </p>

          <h3 className="text-xl font-semibold mb-4">Il caso studio è questo</h3>
          <p className="text-gray-700 mb-4">
            Apriamo Search Console, partiamo con l'analisi e scopriamo il problema: tutti gli articoli del blog sono andati perduti. Se li è persi per strada il webmaster che ha lavorato al rifacimento.
          </p>
          <p className="text-gray-700 mb-4">
            Di solito, in questi casi, il colpevole è un <Link href="/seo/guida-pratica-all-htaccess-redirect-cache-e-seo-tecnica" className="text-purple-600 underline hover:text-pink-500">redirect 301</Link> mancante (quello che dice a Google "questa pagina è stata spostata definitivamente qui"). Qui i redirect mancavano, certo, ma il problema era a monte: non c'era più una pagina verso cui farli puntare. Non esisteva nemmeno la sezione blog. Zero.
          </p>
          <p className="text-gray-700 mb-6">
            In buona sostanza, un'azienda che vende porte aveva murato quelle da cui entravano i clienti. Il grafico di Search Console non ha bisogno di tante spiegazioni: da inizio luglio 2025, con giornate tra gli 80 e i 120 clic, si scende in poche settimane fino a una manciata di clic al giorno.
          </p>
          <div className="mb-6 max-w-2xl mx-auto">
            <Image
              src="/images/caso-studio-infissi-search-console.webp"
              alt="Clic in Search Console del sito di infissi: il crollo dell'estate 2025 e la risalita dall'autunno"
              width={860}
              height={946}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <h3 className="text-xl font-semibold mb-4">Cosa abbiamo fatto</h3>
          <p className="text-gray-700 mb-4">
            Se gli articoli non ci sono più, bisogna andare a riprenderli dove sono rimasti. A quel punto ci siamo rivolti a Wayback Machine (l'archivio di Internet Archive che conserva le copie storiche dei siti). Abbiamo portato in locale le copie archiviate del vecchio sito e scritto uno script Python che, per ogni articolo:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
            <li>cerca il file HTML dell'articolo nella copia locale;</li>
            <li>sceglie lo snapshot più recente disponibile (lo snapshot è la "fotografia" della pagina in una certa data);</li>
            <li>estrae titolo e contenuto, e ricava la data dallo snapshot;</li>
            <li>ricava slug (la parte finale dell'URL) e categoria dal percorso originale;</li>
            <li>genera un file WXR (il formato XML con cui WordPress importa ed esporta i contenuti), pronto per l'importazione.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Detta così sembra una passeggiata. O meglio: lo sembra finché non lanci lo script.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>I percorsi di Wayback:</strong> le cartelle degli snapshot hanno come nome un timestamp seguito da "id_" e la struttura delle sottocartelle cambia. Lo script doveva fare i conti con le varianti https://, http:// e www, e con una modifica alla ricerca siamo passati direttamente a zero risultati.</li>
            <li><strong>Il contenuto:</strong> nelle prime prove non veniva importato correttamente. Ottimo, un articolo senza articolo.</li>
            <li><strong>Lo slug:</strong> quando l'estrazione dal percorso falliva, il contenuto arrivava, ma lo slug diventava "articolo" e la categoria "Blog". Ed è l'errore più subdolo, perché a occhio sembra tutto a posto. Se l'URL non è quello di prima, però, non stai recuperando un vecchio articolo: ne stai pubblicando uno nuovo, che Google non ha mai visto.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Per questo la regola è stata una sola: <strong>prima un articolo, poi tutti gli altri</strong>. Si importa il primo in WordPress, si controllano contenuto, slug e categoria, e solo dopo si passa al resto. Per il primo articolo lo script ha trovato 6 snapshot e ha scelto quello del 24 giugno 2025: l'ultima fotografia di una porta, poco prima che venisse murata. Alla fine gli articoli li abbiamo recuperati tutti, e il blog è tornato online.
          </p>

          <h3 className="text-xl font-semibold mb-4">Com'è andata</h3>
          <p className="text-gray-700 mb-6">
            In Search Console la risalita si vede da settembre 2025: si torna intorno ai 40 clic al giorno, con punte tra i 50 e i 60. Su tutto il periodo fanno <strong>14,9K clic e 1,33 milioni di impressioni</strong>. Lo stesso film su SEOZoom: l'andamento del dominio crolla da circa 3,5K a meno di 500 tra luglio e settembre 2025, poi risale fino a circa 3K a inizio 2026.
          </p>
          <div className="mb-6">
            <Image
              src="/images/caso-studio-infissi-seozoom.webp"
              alt="Andamento del dominio su SEOZoom: il crollo dell'estate 2025 e la risalita fino a inizio 2026"
              width={1462}
              height={1118}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <p className="text-gray-700 mb-4">
            Ora, onestà prima di tutto. I clic non sono tornati ai picchi di luglio. Il dominio, su SEOZoom, era già in calo da prima del rifacimento. Nello stesso periodo il grafico segna anche degli aggiornamenti di Google, quindi non tutto si può attribuire al nostro lavoro. E l'ultimo tratto riscende sotto i 2K: non l'ho tagliato, perché un sito recuperato non è un sito guarito per sempre.
          </p>

          <h3 className="text-xl font-semibold mb-4">Cosa ci porto a casa</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Prima di rifare un sito, fai l'inventario:</strong> esporta tutti gli URL e guarda in Search Console <Link href="/seo/come-capire-quali-pagine-del-sito-hanno-perso-traffico" className="text-purple-600 underline hover:text-pink-500">quali pagine portano traffico</Link>. Sono quelle che non puoi perdere, e anche quando restano online <Link href="/seo/modificare-una-pagina-senza-perdere-il-posizionamento-seo" className="text-purple-600 underline hover:text-pink-500">vanno modificate con calma</Link>.</li>
            <li><strong>I redirect non bastano se manca la destinazione:</strong> prima si controlla che i contenuti esistano ancora, poi si pensa a dove mandarli.</li>
            <li><strong>Wayback Machine salva, ma è l'ultima spiaggia:</strong> recuperare a mano quello che bastava non cancellare costa molto più di un backup. Sempre. Non è un consiglio, è una regola.</li>
            <li><strong>Prova su un articolo solo:</strong> importarne cento con lo slug sbagliato significa rifare il lavoro cento volte.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Il sito nuovo era bellissimo, per carità. Mancavano solo le porte.
          </p>

          {/* Caso 4 - Prodotto stagionale */}
          <h2 id={generateId(CASI[3])} className="text-3xl font-bold mb-6">{CASI[3]}</h2>
          <p className="text-gray-700 mb-4">
            Questo non è un caso problematico, anzi. Ma insegna una cosa che vedo sbagliare di continuo: <strong>cercare di capire cosa cerca davvero la gente, prima di scrivere</strong>.
          </p>

          <h3 className="text-xl font-semibold mb-4">Il caso studio è questo</h3>
          <p className="text-gray-700 mb-4">
            Un'azienda del settore enogastronomico che vende un prodotto stagionale. Il sito ha già dei contenuti informativi che portano traffico, ma più o meno sempre gli stessi: qualche decina di visite al giorno, con picchi quando il periodo si avvicina.
          </p>
          <p className="text-gray-700 mb-4">
            Apro SEOZoom per vedere per quali ricerche il sito è visibile e per quali no. Il quadro è chiaro in dieci minuti: quasi tutte le keyword sono <strong>informazionali</strong> (chi vuole capire, informarsi, confrontare). Gli intenti <strong>transazionali</strong>, quelli di chi sta per comprare o vuole sapere quanto spenderà ("costo", "prezzo 2026" e simili), sono quasi assenti. Zero.
          </p>
          <p className="text-gray-700 mb-4">
            Ed è un problema, perché in un prodotto stagionale chi cerca il prezzo è chi ha già deciso di comprare. Ha un'urgenza, e il periodo è breve. Se in quella finestra non ci sei, ci sono gli altri.
          </p>

          <h3 className="text-xl font-semibold mb-4">Cosa ho fatto</h3>
          <p className="text-gray-700 mb-4">
            Un solo contenuto, pensato apposta per quel buco: un articolo sul prezzo del prodotto nel 2026, che risponde alla domanda che le persone si fanno davvero ("quanto costa quest'anno?") invece di girarci intorno.
          </p>

          <h3 className="text-xl font-semibold mb-4">Com'è andata</h3>
          <p className="text-gray-700 mb-4">
            Dalla pubblicazione dell'articolo, il sito è passato da circa <strong>30 clic al giorno a quasi 300</strong>. Nel grafico qui sotto (Search Console, da fine luglio a metà ottobre 2026) si vede bene: una linea piatta per due mesi e poi la verticale. Nel periodo: <strong>2,85K clic e 126K impressioni</strong>, con una posizione media di 9,8.
          </p>
          <div className="mb-6">
            <Image
              src="/images/caso-studio-prodotto-stagionale-search-console.webp"
              alt="Andamento di clic e impressioni in Search Console dopo l'articolo sul prezzo 2026"
              width={2000}
              height={742}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <p className="text-gray-700 mb-4">
            Ora, onestà prima di tutto: <strong>non è tutto merito dell'articolo</strong>. Il periodo di vendita sposta la domanda da solo, e le keyword legate al prodotto salgono comunque in autunno, con o senza contenuti. Ma è proprio qui che il caso diventa interessante: <strong>senza quell'articolo avremmo avuto circa il 50% di visite in meno</strong>. La stagionalità ha alzato la marea, l'articolo ci ha messo la barca che raccoglieva la parte di domanda che prima restava a riva.
          </p>

          <p className="text-gray-700 mb-4">
            Il dato che mi convince di più è quello sulle query che contengono la parola "prezzo", cioè proprio gli intenti che prima mancavano. Filtrando <Link href="/seo/keyword-research-google-search-console" className="text-purple-600 underline hover:text-pink-500">Search Console</Link> su quella parola, tra il 14 e il 18 ottobre: <strong>230 clic, 4,93K impressioni, CTR del 4,7% e posizione media 5,3</strong>. E guarda la curva: parte da pochi clic al giorno e il 18 ottobre ne porta oltre 100, su un totale di 286 clic quel giorno (7,4K impressioni). In altre parole, una fetta enorme dell'impennata arriva da ricerche che prima non intercettavamo affatto.
          </p>
          <div className="mb-6">
            <Image
              src="/images/caso-studio-query-prezzo-search-console.webp"
              alt="Clic e impressioni in Search Console per le query che contengono la parola prezzo"
              width={2000}
              height={1011}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <h3 className="text-xl font-semibold mb-4">Cosa ci porto a casa</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Guarda gli intenti, non solo i volumi:</strong> un sito pieno di contenuti informativi può essere invisibile proprio dove si decide l'acquisto.</li>
            <li><strong>Nei prodotti stagionali conta il tempismo:</strong> il contenuto transazionale va pubblicato prima del picco, non durante. Vale anche per le <Link href="/seo/keyword-a-tempo-determinato-seo-editoriale" className="text-purple-600 underline hover:text-pink-500">keyword a tempo determinato</Link>.</li>
            <li><strong>Separa sempre cosa fa il mercato da cosa fai tu:</strong> se non lo fai, ti attribuisci meriti che non hai, o peggio ti dai colpe che non hai.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            A volte non serve scrivere di più. Serve scrivere quello che manca.
          </p>

        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm
            title="Vuoi avviare una collaborazione duratura?"
            subtitle="Inviami una email personalizzata"
          />
        </div>
      </section>
    </div>
  );
}
