import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import QuickEmailForm from '@/components/QuickEmailForm';

export const metadata: Metadata = {
  title: 'SEO per concessionarie | Perseo',
  description: 'Come arrivare in prima pagina Google per una concessionaria. Strategie SEO specifiche per il settore automotive.',
};

export default function SEOConcessionarie() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'SEO per Concessionarie' }]} light />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEO per concessionarie
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            Come arrivare in prima pagina Google per una concessionaria
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

          {/* Analisi */}
          <h2 className="text-3xl font-bold mb-6">Analisi</h2>
          <p className="text-gray-700 mb-12">
            Prima di procedere con la vera e propria strategia SEO, occorre una chiacchierata, un'intervista, meeting, brainstorming, chiamalo come vuoi, ma questa fase è assolutamente necessaria per quelle propedeutiche. È qui che si sviscerano i punti di forza, debolezza, più le ipotetiche minacce ed opportunità. Occorre conoscere per bene tutta la storia della concessionaria, dall'apertura al presente. Dagli accordi con il gruppo automobilistico, all'espansione con l'acquisto di altri marchi o, agli eventuali, periodi di crisi.
          </p>

          {/* Alberatura */}
          <h2 className="text-3xl font-bold mb-6">Alberatura del sito</h2>
          <p className="text-gray-700 mb-4">
            Una volta completata l'analisi, prima di iniziare a strutturare il sito, è bene fare una ricerca di parole chiavi e concetti per le quali il cliente vorrebbe essere posizionato e che offrono buone potenzialità a livello SEO (buon volume, intento transazionale, buone opportunità ecc…). Una possibile struttura del sito potrebbe essere quella di avere, ad esempio, un menù che non contenga tutti i marchi uno affiancato all'altro, ma pensare ad un menù a tendina, il quale una volta cliccato possa esporre agli utenti i vari marchi:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Ford,</li>
            <li>Volkswagen,</li>
            <li>Renault,</li>
            <li>Nissan,</li>
            <li>Skoda,</li>
            <li>Opel ecc…</li>
          </ul>
          <p className="text-gray-700 mb-12">
            E all'interno delle varie pagine, inserire tutte le vetture del marchio specifico e i vari modelli. Sarebbe pertinente inserire anche una barra della ricerca (proprio come Google) sia nella homepage che nelle pagine dei marchi. Così un utente troverebbe più facilmente l'auto che ha in mente senza dover girare e perdere troppo tempo all'interno del sito.
          </p>

          {/* Titoli */}
          <h2 className="text-3xl font-bold mb-6">Titoli nelle pagine</h2>
          <p className="text-gray-700 mb-4">
            I titoli, sembrerà strano, ma sono una parte importantissima della SEO on page e tra i principali fattori di posizionamento. Capita spesso di vedere, ad esempio, siti che all'interno delle pagine e articoli utilizzano il grassetto per i propri titoli dei paragrafi. Questa è una pratica sbagliata, in quanto Google preferisce scansionare la gerarchia dei titoli,
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-4 font-mono text-sm">
            <p className="mb-1"><strong>H1</strong> = "Volvo EX90"</p>
            <p className="mb-1"><strong>H2</strong> = "Potenza"</p>
            <p className="mb-1"><strong>H2</strong> = "Caratteristiche"</p>
            <p><strong>H3</strong> = "Colori disponibili" (sottoparagrafo di Caratteristiche)</p>
          </div>
          <p className="text-gray-700 mb-12">
            Ovviamente si possono avere i migliori titoli del mondo, ma senza un ottimo contenuto dei paragrafi, è difficile andare lontano.
          </p>

          {/* Descrizioni tecniche */}
          <h2 className="text-3xl font-bold mb-6">Descrizioni tecniche e consigli per auto</h2>
          <p className="text-gray-700 mb-4">
            Nelle pagine delle vetture specifiche, ovviamente, l'utente spera di trovare tutte le caratteristiche del prodotto, ad esempio:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg p-6 mb-4">
            {['Caratteristiche', 'Specifiche tecniche', 'Consumi', 'Tipo di veicolo', 'Cilindrata', 'Combinato', 'Immatricolazione', 'Alimentazione', 'Urbano', 'Chilometraggio', 'Potenza', 'Extraurbano', 'Garanzia', 'Cambio', 'Emissioni di CO2', 'Carrozzeria', 'Trazione', 'Classe emissioni', 'Colore esterno', 'Peso a vuoto', 'Riferimento', 'Neopatentati'].map(item => (
              <span key={item} className="bg-white rounded px-2 py-1 border border-gray-200">{item}</span>
            ))}
          </div>
          <p className="text-gray-700 mb-4">
            In più, è sempre apprezzabile per gli utenti e, soprattutto per Google, aggiungere anche una descrizione con alcuni paragrafi per completare, ad esempio:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>consigli su come guidarla,</li>
            <li>dove guidarla,</li>
            <li>ulteriori vantaggi sul finanziamento o sul leasing ecc…</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Oltre agli aspetti più tecnici di ciascuna auto, si potrebbe pensare anche di aprire un blog all'interno del sito. Ci sono migliaia di argomenti su cui si potrebbero scrivere articoli, ad esempio:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-1">
            <li>Come programmare un viaggio lungo in auto,</li>
            <li>Consigli sulle pulizie,</li>
            <li>Come non farsi imbrogliare da alcuni meccanici,</li>
            <li>Come personalizzare la propria auto, ecc…</li>
          </ul>

                    <QuickEmailForm />

          {/* Meta title e description */}
          <h2 className="text-3xl font-bold mb-6">Inserire i Meta title e meta description</h2>
          <p className="text-gray-700 mb-4">
            Si è appena parlato di H1 come titolo della pagina, ma non è il solo titolo che si deve scrivere nella pagina. Anche Google ha bisogno di leggere un suo titolo quando il suo algoritmo scansiona il sito. Il meta title è un titolo che viene inserito all'interno del codice HTML e, quindi, invisibile agli occhi degli utenti i quali troveranno nella pagina un solo e unico titolo. Se si ha un sito in WordPress, basterà scaricare un qualsiasi plugin SEO che permette di scrivere nel campo vuoto il meta title. Immediatamente sotto, ci sarà invece il campo vuoto dove si può inserire la meta description.
          </p>
          <p className="text-gray-700 mb-12">
            Essa, al contrario del meta title, non è un fattore di posizionamento, infatti molti SEO lasciano meta tag vuoto per lasciare decidere a Google stesso quale descrizione inserire, prendendo una porzione di testo all'interno del contenuto della pagina.
          </p>

          {/* Foto */}
          <h2 className="text-3xl font-bold mb-6">Foto</h2>
          <p className="text-gray-700 mb-12">
            Come in ogni e-commerce, le foto giocano un ruolo fondamentale. Alcuni erroneamente scelgono di scaricare foto (magari anche con copyright) dalla rete e inserirle nel proprio sito, rischiando anche una denuncia. Quindi, prima di mettersi nei casini o far trovare agli utenti la stessa foto già vista su qualche altro sito, sarebbe meglio contattare un fotografo professionista ed avere delle immagini ad alta risoluzione ed originali. Per il settore automobilistico c'è di più, perché non solo devono essere di altissima qualità, ma addirittura, alcuni stanno sostituendo le fotografie classiche con il 3D digital attraverso la tecnologia CGI, quindi con immagini computerizzate in modo da mostrare tutti gli aspetti e minimi dettagli delle auto. Pur non essendo affatto un fattore di posizionamento all'interno dei motori di ricerca, ma offrire agli utenti un'esperienza iper realistica di visionare un'auto a 360°, è sicuramente motivo di permanenza sul sito e più possibilità di conversioni. Ciò che invece è un fattore di posizionamento, è il tag Alt all'interno del codice HTML della foto e serve a far capire ai motori di ricerca il contenuto delle immagini.
          </p>

          {/* Contatti */}
          <h2 className="text-3xl font-bold mb-6">Contatti</h2>
          <p className="text-gray-700 mb-4">
            Inutile dire che le concessionarie sono e-commerce a metà, quindi hanno caratteristiche simili agli e-commerce come la descrizione dei prodotti, le categorie, le foto ad alta qualità, gli eventuali filtri per selezionare i vari tipi di modelli, ma non si compra mai dal sito. Esso serve per avere una vetrina completa dei marchi e delle auto, ma gli utenti comprano solo ed esclusivamente una volta raggiunta la sede fisica della concessionaria. Il sito non può far altro, quindi, che avere una sezione contatti con una mappa della sede, i contatti email e numeri di telefono e gli orari di apertura e chiusura.
          </p>
          <p className="text-gray-700 mb-12">
            Fondamentale, oltre la pagina contatti, un form da compilare, nelle pagine delle auto, per richiedere un preventivo alla concessionaria. Si raccomanda di prestare massima attenzione per il consenso marketing per la privacy del trattamento dei dati, al fine di rispettare le normative italiane ed europee (GDPR). In questa fase sarebbe ottimale rivolgersi ad un legale esperto in questa branca del Diritto.
          </p>

          {/* Recensioni */}
          <h2 className="text-3xl font-bold mb-6">Recensioni</h2>
          <p className="text-gray-700 mb-4">
            Anche le recensioni non sono fattore di posizionamento, ma contribuiscono anch'esse al funzionamento del sistema del sito. Questo anche perché, le concessionarie, possono essere considerate a tutti gli effetti delle attività locali. Quindi, l'obiettivo sarebbe quello di posizionarsi per parole come "Toyota Bari" o "Mercedes Napoli" ecc…E le recensioni potrebbero dare un grande aiuto per inserire il sito nelle local pack, ovvero il riquadro che vediamo nei risultati di ricerca con alcune delle attività di una specifica città. E più sono utili alla ricerca degli utenti, più in futuro potrebbero apparire nei risultati di ricerca, cosa che al momento avviene solamente per la lingua inglese. Meglio farsi trovare preparati, insomma.
          </p>
          <p className="text-gray-700 mb-4">
            Piccolo aggiornamento del 23 febbraio 2023. Ecco l'annuncio di Google Search Central su Twitter a proposito delle recensioni dei prodotti:
          </p>
          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600 mb-12">
            "Today we released the February 2023 product reviews update, which applies to these languages globally: English, Spanish, German, French, Italian, Vietnamese, Indonesian, Russian, Dutch, Portuguese, Polish. It'll take ~2 weeks to fully roll out." — Google Search Central, February 21, 2023
          </blockquote>

          {/* Profilo attività */}
          <h2 className="text-3xl font-bold mb-6">Creare il profilo dell'attività</h2>
          <p className="text-gray-700 mb-6">
            È la scheda Google che vediamo a destra dei risultati di ricerca con le foto del negozio, gli orari, le informazioni, le recensioni, il numero di telefono. Google, in base ad alcuni fattori potrebbe mostrare un sito piuttosto che un altro per gli utenti che digitano il nome dell'"auto + città" o "concessionaria + città".
          </p>
          <div className="mb-12">
            <Image
              src="/images/local-pack-concessionaria.png"
              alt="Local pack concessionaria"
              width={300}
              height={205}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Dati strutturati */}
          <h2 className="text-3xl font-bold mb-6">Inserire i dati strutturati</h2>
          <p className="text-gray-700 mb-12">
            I dati strutturati sono informazioni che si danno a Google, attraverso un formato (il migliore è il json-ld), per far comprendere al meglio il contenuto di una pagina al motore di ricerca. E consentono di arricchire il tuo sito con delle features già nei risultati di ricerca, come stelline con le recensioni, prodotti ecc… in questo modo, l'occhio dell'utente è più colpito da questo tipo di risultati che invece dagli altri siti per i quali vengono mostrati semplicemente il titolo, l'url e la descrizione. Quindi anche inserendo questi codici, potresti avere benefici in termini di visite e, quindi, potenzialmente, di vendite.
          </p>

          {/* Velocità */}
          <h2 className="text-3xl font-bold mb-6">Velocità del sito</h2>
          <p className="text-gray-700 mb-4">
            La velocità di caricamento del sito è sicuramente un piccolo fattore di posizionamento del sito. Per renderlo più reattivo ci sono alcuni accorgimenti tecnici da fare all'interno dei vari codici, per cui questa parte magari può non interessare ai non addetti ai lavori. Ma è sicuramente un'operazione da eseguire, anche perché un utente che attende molti secondi prima che si carichi una pagina, tende ad abbandonarla e a trovare un sito competitor da cui affidarsi.
          </p>
          <p className="text-gray-700 mb-4">
            Sicuramente, un consiglio è quello di caricare immagini in formati più recenti (webP o avif) e cercare di non superare il centinaio di KB. I motori di ricerca, sono più lenti quando trovano e scansionano immagini pesantissime e quindi l'utente, di conseguenza, potrebbe vedere caricarsi la pagina a pezzi e non di botto, come dovrebbe essere. Altro consiglio è quello di non caricare troppi plugin, perché contenendo codice aggiuntivo (soprattutto javascript), il rendering delle pagine potrebbe interrompersi e causare perdita di tempo. Pericolosi, tra l'altro, sono gli script di terze parti (quindi di domini esterni al nostro), come quelli di tag manager, analytics, hotjar che rallentano di non poco il sito.
          </p>
          <p className="text-gray-700 mb-12">
            Ma alcune piccole tecniche come caricare gli script in maniera "asincrona", potrebbe aiutare la velocità della pagina. Ripeto, queste sono questioni estremamente tecniche che però, in alcuni casi, possono essere la discriminante sulla quale Google sceglie di posizionare un sito piuttosto che un altro similissimo in qualità e autorevolezza di contenuti, link ecc…
          </p>

          {/* Link da altri siti */}
          <h2 className="text-3xl font-bold mb-6">Link da altri siti</h2>
          <p className="text-gray-700 mb-4">
            Google sconsiglia questa pratica. Nelle sue linee guida, infatti, si viene vietato l'acquisto di link su altri siti che portano al proprio. Google dice che essi possono esserci, ma devono arrivare in maniera del tutto naturale. In molti settori competitivi e stra competitivi, questo è difficile che avvenga. Pensiamo al mondo delle assicurazioni o quello finanziario, lì è quasi impossibile che un sito che sta partendo da zero, riceva link da grossi siti autorevoli. Quindi, si procede al loro acquisto. In buona sostanza:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>La link building (il nome della tecnica) è pericolosa? Sì</li>
            <li>È costosa per alcuni settori? Sì</li>
            <li>Porta benefici in termini di risultati di posizionamento? Se fatta con le dovute accortezze ed analisi, assolutamente sì.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Non è il caso di scendere troppo nel tecnico, però basti sapere che se si viene valutati da Google in maniera negativa, è molto probabile che si venga penalizzati ed assistere ad un crollo delle visite del sito pauroso. C'è però da considerare che in moltissimi settori non troppo competitivi, un'eccezionale SEO on page, con contenuti di altissima qualità ed autorevoli scritti da copywriter o esperti, si posizionano incredibilmente bene nei motori di ricerca, senza bisogno di ricorrere ad un'attività di link building.
          </p>

          {/* Prima pagina concessionaria */}
          <h2 className="text-3xl font-bold mb-6">È possibile, quindi, arrivare in prima pagina Google per un sito di una concessionaria?</h2>
          <p className="text-gray-700 mb-4">
            Sì e No sono le risposte. Ovviamente se ci sarà un po' di testo originale e ottimizzato, qualche parola chiave vedrà la luce in prima pagina di Google, ma altre parole molto più competitive, sarà difficile vederle posizionate in quel modo se non si applicano le varie tecniche SEO per un bel po' di tempo. La data esatta non la può dare nessuno, si tratta di lavorare bene ed avere pazienza.
          </p>
          <p className="text-gray-700 mb-4">
            Perché Google dovrebbe scegliere di posizionare immediatamente un sito appena nato rispetto a quelli che hanno anni e anni e rispettano le linee guida e i consigli di Google? Perché il sito è più bello ed è stato realizzato in modo migliore con grafiche di qualità più alta o inserendo animazioni avanguardistiche? No, mi spiace. Google non guarda molto la bellezza o la pertinenza dei colori in un sito. Non sono fattori di posizionamento. Anzi, se non sono ottimizzati, possono essere un danno per la velocità di caricamento del sito (come detto sopra).
          </p>
          <p className="text-gray-700 mb-12">
            Quindi un bravo SEO deve essere un bravo tecnico ed avere una mente che sappia andare incontro alle intenzioni degli utenti. Che sappia riconoscere i vari errori di scansione o riconoscere se c'è una penalizzazione relativa ai contenuti o una semplice fluttuazione dei risultati di ricerca. Che sappia leggere ed analizzare al meglio i tool come Seozoom, Screaming Frog, Search Console ecc… Sì, alla fine magari si arriverà anche in prima posizione ed in prima pagina, ma è inutile chiederlo per il giorno dopo o la settimana dopo. Solo i SEO truffatori possono dire ai poveri clienti che cadono nella loro trappola che "In un mese sarai in prima posizione per le parole che scegli tu". Chi decide è Google, i SEO possono dare solo segnali pertinenti o meno, ma chi sceglie le posizioni nei risultati della ricerca, è l'algoritmo e il suo machine learning a decidere chi va sotto, chi va sopra e chi verrà eliminato dalla prima pagina. Quindi, portate pazienza.
          </p>

          {/* Mercato automotive */}
          <h2 className="text-3xl font-bold mb-6">Analisi del mercato automotive online</h2>
          <p className="text-gray-700 mb-4">
            Negli ultimi anni il modo di scegliere e acquistare un'auto è cambiato completamente. Le persone non entrano più in concessionaria "per farsi un'idea": prima si informano online, confrontano modelli, consumi, optional, incentivi e solo alla fine decidono a chi affidarsi. Questo significa che la partita si gioca molto prima della visita fisica.
          </p>
          <p className="text-gray-700 mb-4">
            Una concessionaria che non ha una buona presenza online parte già svantaggiata, perché l'utente arriva in salone solo dopo aver selezionato mentalmente tre o quattro modelli e – molto spesso – anche la concessionaria dove andare.
          </p>
          <p className="text-gray-700 mb-12">
            Capire questo contesto è il primo passo per impostare una strategia SEO che intercetti le persone mentre stanno ancora cercando, prima che finiscano su siti concorrenti.
          </p>

          {/* Ricerche utenti */}
          <h2 className="text-3xl font-bold mb-6">Comprendere le ricerche degli utenti</h2>
          <p className="text-gray-700 mb-4">
            Se cerchi un'auto online, non hai le stesse intenzioni di tutti gli altri. C'è chi ha già deciso il modello e vuole solo vedere il prezzo migliore, e chi invece parte da zero e ha bisogno di capire quale motore, categoria o fascia di prezzo fa per lui.
          </p>
          <p className="text-gray-700 mb-4">Le ricerche più comuni ruotano attorno a:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>confronti tra modelli</li>
            <li>consumi reali</li>
            <li>differenze tra versioni e allestimenti</li>
            <li>disponibilità locale di un modello</li>
            <li>offerte aggiornate o incentivi</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Capire questi diversi punti di partenza permette di costruire una struttura del sito che rispecchia il comportamento reale degli utenti, migliorando sia la SEO che la navigazione.
          </p>

          {/* Intenzioni di ricerca */}
          <h2 className="text-3xl font-bold mb-6">Capire le diverse intenzioni di ricerca degli utenti</h2>
          <p className="text-gray-700 mb-6">
            Quando lavori alla SEO di una concessionaria è importante capire che non tutte le ricerche su Google hanno lo stesso scopo. Le persone cercano in modi diversi a seconda della fase in cui si trovano. C'è chi vuole solo informarsi, chi sta già valutando due o tre modelli, chi è pronto a chiedere un preventivo e chi cerca una concessionaria specifica. Se distingui bene queste intenzioni, puoi creare contenuti che rispondono esattamente a ciò che l'utente si aspetta.
          </p>
          <div className="space-y-6 mb-12">
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-lg font-semibold mb-2">Intenzione informazionale</h3>
              <p className="text-gray-600 mb-1">L'utente non ha ancora deciso nulla e sta cercando risposte ai suoi dubbi.</p>
              <p className="text-gray-500 text-sm italic">"Meglio ibrida o benzina per chi fa pochi km?", "Quali sono le auto più affidabili del 2024?", "Quanto costa mantenere un SUV?"</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">Intenzione comparativa</h3>
              <p className="text-gray-600 mb-1">Qui l'utente ha ristretto la scelta e vuole confrontare modelli o categorie.</p>
              <p className="text-gray-500 text-sm italic">"Fiat 500 vs Toyota Aygo", "SUV piccoli confronto consumi", "Peugeot 208 o Clio quale scegliere?"</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">Intenzione transazionale</h3>
              <p className="text-gray-600 mb-1">È il momento più importante per te, perché l'utente è praticamente pronto all'acquisto.</p>
              <p className="text-gray-500 text-sm italic">"Toyota Yaris prezzo + città", "Fiat 500 km0 offerte", "concessionaria Ford preventivo"</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold mb-2">Intenzione navigazionale</h3>
              <p className="text-gray-600 mb-1">L'utente sa già che vuole una concessionaria specifica.</p>
              <p className="text-gray-500 text-sm italic">"Concessionaria Opel Rossi Milano", "Volkswagen Autotre orari", "Nissan Centro Auto recensioni"</p>
            </div>
          </div>

          {/* Auto usate */}
          <h2 className="text-3xl font-bold mb-6">SEO per auto usate: un discorso a sé</h2>
          <p className="text-gray-700 mb-4">
            Il mercato delle auto usate ha dinamiche molto diverse dal nuovo. L'utente che cerca un'usata è più prudente, più attento e molto meno disposto a fidarsi di poche informazioni. Una scheda auto scarna genera diffidenza; al contrario, una scheda completa e trasparente aumenta la fiducia e rende la concessionaria più autorevole.
          </p>
          <p className="text-gray-700 mb-4">In una scheda usato funzionano molto bene elementi come:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>foto reali e aggiornate</li>
            <li>chilometraggio verificabile</li>
            <li>eventuali difetti dichiarati</li>
            <li>storico manutenzioni</li>
            <li>garanzie disponibili</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Google premia chi offre informazioni utili, e gli utenti premiano chi dimostra sincerità e professionalità.
          </p>

          {/* Scheda auto */}
          <h2 className="text-3xl font-bold mb-6">Come si costruisce una scheda auto che funziona davvero</h2>
          <div className="mb-6">
            <Image
              src="/images/scheda-auto-seo.jpeg"
              alt="scheda automobile ottimizzata lato seo"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <p className="text-gray-700 mb-12">
            Una scheda auto non deve limitarsi ai dati tecnici presi dal sito della casa madre. Serve un testo che parli alla persona, non al motore di ricerca. È utile spiegare perché quel modello è adatto a una certa esperienza di guida, cosa cambia tra una versione e l'altra e quali sono le caratteristiche che fanno davvero la differenza nella vita quotidiana. Le persone vogliono capire se quell'auto risolve i loro problemi: parcheggi difficili, consumi eccessivi, poca capacità di carico, comfort nei viaggi lunghi. Una scheda che risponde a tutto questo non solo si posiziona meglio, ma trasforma più utenti in contatti reali.
          </p>

          {/* Blog */}
          <h2 className="text-3xl font-bold mb-6">Perché un blog può portare contatti anche più delle schede auto</h2>
          <p className="text-gray-700 mb-4">
            Il blog è uno degli strumenti più sottovalutati dalle concessionarie. Molti lo ignorano, ma può portare moltissimi utenti in fasi molto diverse del percorso d'acquisto. Non tutti cercano subito "Fiat 500 prezzo": spesso partono da domande più ampie, come:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>"Meglio benzina o ibrida per chi fa pochi km?"</li>
            <li>"Quali sono le auto più economiche da mantenere?"</li>
            <li>"Che autonomia reale hanno le auto elettriche?"</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Rispondere a queste domande crea fiducia. E la fiducia è uno dei motivi principali per cui una persona sceglie una concessionaria invece di un'altra.
          </p>

          {/* Local SEO */}
          <h2 className="text-3xl font-bold mb-6">L'importanza della Local SEO per una concessionaria</h2>
          <p className="text-gray-700 mb-12">
            Una concessionaria lavora inevitabilmente con il territorio. Le ricerche locali sono tra le più importanti, perché l'utente vuole vedere e provare l'auto prima di comprarla. Per questo la Local SEO è fondamentale: una scheda attività ben curata su Google, con foto aggiornate e recensioni vere, è spesso il primo punto di contatto tra l'utente e la concessionaria. Se ci sono più sedi, è molto utile creare pagine dedicate per ogni location. Questo permette di posizionarsi per ricerche come "concessionaria + città" o "auto usate + città", che sono tra le più redditizie in assoluto.
          </p>

          {/* Velocità e vendite */}
          <h2 className="text-3xl font-bold mb-6">Perché un sito lento fa perdere vendite</h2>
          <p className="text-gray-700 mb-12">
            Un sito lento è uno dei principali motivi per cui le persone abbandonano la navigazione. Le foto pesanti, i plugin inutili e le pagine che si caricano lentamente danno una sensazione di scarsa professionalità e fanno perdere opportunità preziose. Migliorare la velocità significa offrire un'esperienza migliore all'utente e, allo stesso tempo, dare un segnale positivo a Google. Non è solo una questione tecnica, ma anche una questione di percezione: un sito rapido fa subito una buona impressione.
          </p>

          {/* Misurare risultati */}
          <h2 className="text-3xl font-bold mb-6">Come si misurano davvero i risultati per una concessionaria</h2>
          <p className="text-gray-700 mb-4">
            La SEO per una concessionaria non si misura solo dal traffico, ma soprattutto dai contatti che genera. Le metriche importanti sono quelle che mostrano un reale interesse dell'utente:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>clic sul numero di telefono</li>
            <li>clic su WhatsApp</li>
            <li>compilazioni del form</li>
            <li>richieste di preventivo</li>
            <li>prenotazioni di test drive</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Questi dati raccontano se la strategia sta funzionando davvero. Non serve avere migliaia di visite se poi nessuno chiede informazioni.
          </p>

          {/* SEO e Ads */}
          <h2 className="text-3xl font-bold mb-6">SEO e Ads: due strumenti che lavorano meglio insieme</h2>
          <p className="text-gray-700 mb-12">
            La SEO costruisce una visibilità stabile, mentre gli annunci a pagamento sono perfetti quando serve una spinta immediata: lancio di nuovi modelli, promozioni, incentivi o stock da smaltire. Le due strategie funzionano ancora meglio se usate insieme, perché coprono sia il breve che il lungo periodo.
          </p>

          {/* Errori comuni */}
          <h2 className="text-3xl font-bold mb-6">Gli errori più comuni che penalizzano le concessionarie</h2>
          <p className="text-gray-700 mb-12">
            Molto spesso i siti delle concessionarie hanno problemi semplici ma molto impattanti: testi duplicati, foto prese da internet, URL caotici, mancanza di pagine dedicate ai marchi, zero ottimizzazione locale. Sono errori piccoli ma che, messi insieme, riducono drasticamente la visibilità. La buona notizia è che sono tutti facilmente risolvibili, e spesso bastano poche correzioni mirate per ottenere miglioramenti visibili.
          </p>

          {/* Tecnologie */}
          <h2 className="text-3xl font-bold mb-6">Tecnologie e strumenti utili</h2>
          <p className="text-gray-700 mb-4">
            Gestire decine o centinaia di auto richiede un sistema pratico, veloce e flessibile. Non serve un sito complesso: serve un sito che permette di aggiornare lo stock con facilità, caricare immagini ottimizzate, gestire filtri utili e mantenere una struttura pulita.
          </p>
          <p className="text-gray-700 mb-4">
            Una tecnologia scelta bene non serve solo a chi gestisce il sito, ma anche all'utente che naviga tra le schede.
          </p>
        </div>
      </section>

      {/* Prezzi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Prezzi SEO una tantum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-6 text-indigo-500">Analisi SEO</h3>
              <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
                <svg viewBox="0 0 64 64" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                  <circle cx="27" cy="27" r="9"/>
                  <path d="M27 15v-3M27 42v-3M15 27h-3M42 27h-3M18.6 18.6l-2.1-2.1M37.5 37.5l-2.1-2.1M18.6 35.4l-2.1 2.1M37.5 16.5l-2.1 2.1"/>
                  <text x="27" y="31" fontSize="7" fill="#818cf8" stroke="none" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">SEO</text>
                  <line x1="33" y1="33" x2="48" y2="48" strokeWidth="2.5"/>
                  <circle cx="48" cy="48" r="4"/>
                </svg>
              </div>
              <p className="text-gray-500 mb-4">E-commerce concessionaria con meno di 100 prodotti</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 800€</p>
              <Link href="/contatti" className="mt-auto text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
                Contattami
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-6 text-green-400">Analisi e risoluzione problemi SEO</h3>
              <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mb-6">
                <svg viewBox="0 0 64 64" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                  <path d="M20 28 C20 20 12 20 12 28 L12 36 C12 44 20 44 20 36 L20 32"/>
                  <path d="M44 36 C44 44 52 44 52 36 L52 28 C52 20 44 20 44 28 L44 32"/>
                  <line x1="26" y1="38" x2="20" y2="32" strokeWidth="2"/>
                  <line x1="38" y1="26" x2="44" y2="32" strokeWidth="2"/>
                  <line x1="29" y1="42" x2="24" y2="36"/>
                  <line x1="35" y1="22" x2="40" y2="28"/>
                </svg>
              </div>
              <p className="text-gray-500 mb-4">E-commerce concessionaria con meno di 100 prodotti</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 1200€</p>
              <Link href="/contatti" className="mt-auto text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
                Contattami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
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
