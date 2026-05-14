import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import QuickEmailForm from '@/components/QuickEmailForm';

export const metadata: Metadata = {
  title: 'SEO per negozi di arredamento | Perseo',
  description: 'Come arrivare in prima pagina Google per un negozio di arredamento. Strategie SEO specifiche per e-commerce e showroom di arredamento.',
};

export default function SEONegozi() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'SEO per Negozi di Arredamento' }]} light />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEO per negozi di arredamento
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            Come arrivare in prima pagina Google per un negozio di arredamento
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
            Per prima cosa serve un'analisi dello stato di salute dell'azienda. Punti di forza, debolezza, opportunità e minacce. I competitors quali sono? È un'azienda che può spedire i mobili nella città, in regione o in tutta Italia? Questa fase è assolutamente necessaria per poi andare a creare una strategia SEO pertinente affinché faccia capire agli utenti e ai motori di ricerca innanzitutto se è un'attività locale o meno, in modo che possa prendere in considerazione il sito per alcuni risultati di ricerca e non per altri.
          </p>

          {/* Struttura */}
          <h2 className="text-3xl font-bold mb-6">Struttura per un sito di arredamento</h2>
          <p className="text-gray-700 mb-4">
            Occorre poi iniziare a strutturare il sito, cosa non banale. Per prima cosa bisogna fare ricerca di parole chiave in modo da capire quali categorie inserire nelle pagine e quali no, in base ovviamente ai prodotti presenti in azienda. Alcuni negozi d'arredamento online, inseriscono tutti i prodotti nella homepage senza le pagine dedicate alle varie categorie, in questo caso, ad esempio:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>cucine moderne,</li>
            <li>armadi,</li>
            <li>divani,</li>
            <li>letti ecc…</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Questo non è assolutamente la maniera ottimale di strutturare il sito. Ogni cosa deve essere al suo posto e all'interno della giusta categoria.
          </p>

          {/* Titoli */}
          <h2 className="text-3xl font-bold mb-6">Titoli nelle pagine</h2>
          <p className="text-gray-700 mb-4">
            I titoli, sembrerà strano, ma sono un fattore importantissimo per la SEO on page. Infatti si assiste a orde di siti dove i titoli, all'interno delle pagine, sono inseriti in bold. No, non è così che si procede. Google vuole vedere una gerarchia tra i titoli, come se formassero una piramide: dal più grande al più piccolo.
          </p>
          <p className="text-gray-700 mb-4">
            La gerarchia pertinente è quella di inserire gli H1 ai titoli delle pagine, gli H2 ai titoli dei paragrafi, gli H3 ai sottoparagrafi e così via. Google e gli altri motori, devono vedere questa struttura a piramide. Certo, è necessario trovare argomenti e concetti per i quali ci sia una effettiva domanda sui motori di ricerca. La sfida è questa: riuscire a posizionarsi prima degli altri per parole competitive, cominciando con una strategia per parole non troppo generali, che hanno un volume di ricerca basso, e man mano, sviscerando tanti argomenti e coprendo le varie intenzioni di ricerca degli utenti, Google un giorno deciderà di inserire il sito in prima pagina.
          </p>
          <p className="text-gray-700 mb-12">
            Ovviamente, si possono avere i migliori titoli del mondo, ma senza un ottimo contenuto dei paragrafi, è difficile andare lontano.
          </p>

                    <QuickEmailForm />

          {/* Descrizione prodotti */}
          <h2 className="text-3xl font-bold mb-6">Descrizione dei prodotti</h2>
          <p className="text-gray-700 mb-12">
            Altro errore che si vede spesso è la descrizione mancante di un prodotto. Molti inseriscono il titolo, alcune specifiche tecniche o il nome del modello della cucina/divano/letto ecc… e il gioco è fatto. Assolutamente NO! Anche nella descrizione è opportuno inserire un buon testo, anche strutturato da alcuni paragrafi i quali spieghino come è nato quel prodotto, dove è stato fabbricato, qualche consiglio su come scegliere la parte della casa nella quale inserirlo. Ad esempio: le poltrone per il soggiorno avranno un testo specifico e le poltrone da ufficio ne avranno uno diverso. Oppure se si parla di cucine, si dovrebbero illustrare i vari tipi di composizioni sia con foto, sia con delle opportune descrizioni. Insomma anche lì andrebbe fatta una ricerca per parole chiavi (o meglio, ormai parliamo di concetti/entità chiave) e capire come ragiona il target di riferimento e andargli incontro in base alle sue esigenze.
          </p>

          {/* Meta tag */}
          <h2 className="text-3xl font-bold mb-6">Inserire i Meta tag</h2>
          <p className="text-gray-700 mb-12">
            I meta tags sono informazioni che vengono trasmesse ai motori di ricerca a proposito del contenuto delle pagine. Sono titoli e descrizioni da "dietro le quinte", quindi non visibili agli utenti. Non vi preoccupate, nelle pagine non ci saranno due titoli identici, potete stare tranquilli. Questi appariranno nei risultati di ricerca una volta che saranno inseriti all'interno del codice HTML o, per chi usa WordPress ad esempio, tramite alcuni plugin per la SEO come Rank Math o Yoast. All'interno dell'editor di WordPress delle pagine, andando in basso ci sarà la sezione di Yoast o Rank Math e basterà riempire i campi vuoti con il titolo e la descrizione che si vogliono inserire (per il titolo è già il plugin che inserisce come meta title, il titolo della pagina in H1, quindi non si dovrà fare nulla, a meno che non lo si voglia differenziare).
          </p>

          {/* Dati strutturati */}
          <h2 className="text-3xl font-bold mb-6">Inserire i dati strutturati</h2>
          <p className="text-gray-700 mb-12">
            I dati strutturati non sono direttamente un fattore di posizionamento, però sono utilissimi a far capire a Google meglio su ciò che tratta il sito. Quindi, in questo caso, che si parla di prodotti, aggiungendo informazioni attraverso un codice, Google potrebbe far apparire stelline, foto, descrizione, prezzo già nei risultati di ricerca del sito in questione.
          </p>

          {/* Foto */}
          <h2 className="text-3xl font-bold mb-6">Foto</h2>
          <p className="text-gray-700 mb-12">
            Per creare un e-commerce a regola d'arte, è necessario avere delle foto professionali. Non bisogna prendere immagini da altri negozi che hanno gli stessi prodotti o da siti come shutterstock con immagini esenti dal diritto d'autore. Si chiama un fotografo professionista che porterà tutta l'attrezzatura fatta di luci, riflettori con ombrello riflettente, treppiedi, diffusori ecc… e una volta ottenute le foto di altissima qualità in jpg, png, webP o altri formati, verranno caricate sul sito dove gli utenti potranno rendersi conto dei veri e unici prodotti del negozio e farsi un'idea su dove collocarli nel proprio ambiente domestico. Le foto di altissima qualità, però, non sono fattore di posizionamento nei motori di ricerca. Certo, invogliano i clienti a comprare, ma una volta atterrati sul sito. Ciò che invece può essere una spinta per arrivare in prima pagina sono gli Alt tag, ovvero i testi che fanno comprendere ai motori di ricerca il contenuto delle immagini. Si possono inserire tramite codice all'interno dell'html.
          </p>

          {/* Filtri */}
          <h2 className="text-3xl font-bold mb-6">Inserire i filtri</h2>
          <p className="text-gray-700 mb-6">
            I filtri possono essere un grande aiuto per i prodotti. Anche in questo caso, esistono moltissimi e-commerce che mettono in vendita lo stesso prodotto (duplicando o triplicando lo stesso testo, immagine) solo perché cambia di colore o di dimensione. Ai fini SEO è un errore quanto una casa. Non devono esserci più pagine che riportano gli stessi contenuti. Per questo arrivano i filtri che semplificano la vita. Nella pagina di un prodotto (mettiamo una piantana) l'utente deve poter scegliere il colore (nero – metallo – oro) e le sue dimensioni (200×190 – 180×170 cm), spuntando le caselle (o un menù a tendina) sia del colore che della dimensione. Ma queste operazioni deve poterle fare dall'unica pagina di quella particolare piantana. Ovvio che se cambia il tipo di piantana, allora si creeranno le diverse pagine con descrizioni uniche, ma se sono solo gli attributi che cambiano, allora deve esserci una pagina sola.
          </p>
          <div className="mb-12">
            <Image
              src="/images/filtri-ecommerce-arredamento.png"
              alt="Filtri colore e-commerce arredamento"
              width={1024}
              height={530}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Recensioni */}
          <h2 className="text-3xl font-bold mb-6">Sezione per le recensioni</h2>
          <p className="text-gray-700 mb-4">
            Non è un fattore di posizionamento, ma avere buone recensioni e soprattutto UTILI è un'ottima opportunità. I motori di ricerca potrebbero scegliere una delle recensioni sul tuo sito di arredamento per farla apparire quando un utente cerca un'informazione su Google/Bing ecc… ad esempio se qualcuno cercasse "chaise longue appartamento piccolo", potrebbe uscire come risultato in prima pagina questa recensione:
          </p>
          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600 mb-4">
            "sconsiglio la sezione delle tre poltroncine "brand" più la chaise longue perché per un soggiorno di 40 metri quadri occupa troppo spazio. Ho optato per le tre poltroncine più il puffo per poggiare i piedi e mi trovo benissimo."
          </blockquote>
          <p className="text-gray-700 mb-4">
            Ancora in Italia è raro trovare recensioni che vengano posizionate, ma le pagine in lingua inglese già beneficiano di questo update di Google… quindi: meglio farsi trovare preparati e avere commenti utili da parte degli utenti. (Si potrebbe pensare di ottenere recensioni attraverso l'email marketing, così da mantenere un legame e fidelizzare sempre di più gli utenti)
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-500 mb-12 text-sm">
            Piccolo aggiornamento del 23 febbraio 2023. "Today we released the February 2023 product reviews update, which applies to these languages globally: English, Spanish, German, French, Italian, Vietnamese, Indonesian, Russian, Dutch, Portuguese, Polish. It'll take ~2 weeks to fully roll out." — Google Search Central, February 21, 2023
          </blockquote>

          {/* Profilo attività */}
          <h2 className="text-3xl font-bold mb-6">Creare il profilo dell'attività</h2>
          <p className="text-gray-700 mb-6">
            Una volta veniva chiamato "Google my business" ed era la scheda che appariva sulla parte destra della pagina dei risultati di Google con le foto del negozio, il nome, gli orari di apertura, il numero di telefono, le recensioni, gli eventuali prodotti ecc… Ai fini dei negozi locali, è un'operazione importante da fare anche perché, poi il sito potrebbe finire nelle local pack. Cosa sono? Le abbiamo viste migliaia di volte. Quindi se si ha un negozio di arredamento e si vuole essere presente per gli utenti che scrivono su Google "Mobili soggiorno Bari", "Cucine moderne Napoli", "Poltrone rilassanti Potenza" ecc… si devono fare queste ultime operazioni descritte.
          </p>
          <div className="mb-12">
            <Image
              src="/images/local-pack-arredamento.png"
              alt="Local pack arredamento Bari"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Velocità */}
          <h2 className="text-3xl font-bold mb-6">Velocità del sito</h2>
          <p className="text-gray-700 mb-4">
            La velocità di caricamento di un sito è fondamentale per l'esperienza dell'utente che naviga all'interno di un sito (qualsiasi esso sia) e può essere un piccolo fattore di posizionamento nei motori di ricerca. Senza scendere troppo nel tecnico, ma sicuramente una buona prassi è quella di:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Caricare immagini in formati recenti (webP e avif) e che non superino un certo peso (sicuramente 1 mega per una foto è estremamente pesante).</li>
            <li>Non caricare il sito di troppi plugin che rallenterebbero il tutto</li>
            <li>Ottimizzare gli script esterni usando le chiamate asincrone</li>
            <li>Utilizzare una CDN, ovvero un gruppo di server per il collegamento molto rapido dei contenuti.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Andrebbero poi fatte altre operazioni, anche perché ci sono dei tool come Google Page Speed che segnalano tutte le anomalie relative alla velocità di caricamento e bisognerebbe risolvere i problemi riportati. Ma già queste piccole operazioni, possono sicuramente giovare alle pagine.
          </p>

          {/* Link */}
          <h2 className="text-3xl font-bold mb-6">Link da siti autorevoli</h2>
          <p className="text-gray-700 mb-12">
            Google dice che i link verso un sito specifico, debbano arrivare in maniera naturale. Deve "conquistarsi" questi premi in base ai suoi contenuti e a tanti altri fattori. L'acquisto di link presso siti terzi potrebbe essere penalizzante per il sito in questione perché Google, nelle sue linee guida, vieta questa pratica. Il problema è che molti lo fanno ed hanno degli ottimi risultati. La conclusione qual è? Che se si adotta questa strategia, bisogna farla nel miglior modo possibile al fine di far apparire questi link acquistati, naturali. Bisogna, quindi, analizzare bene i siti da contattare: se hanno avuto penalizzazioni o meno, se sono in crescita, se sono troppo grandi rispetto al nostro che è appena nato e sarebbe alquanto strano che una holding possa linkare in maniera naturale il mio piccolo sito locale d'arredamento e tanti altri fattori. Le più grandi aziende, all'interno dell'ambito SEO, di solito, hanno una figura che si occupa solo ed esclusivamente di sviluppare strategie di link building. Quindi è sicuramente uno dei maggiori fattori di posizionamento anche al giorno d'oggi, ma… occhio a farlo bene.
          </p>

          {/* Piattaforma */}
          <h2 className="text-3xl font-bold mb-6">Quale piattaforma utilizzare per realizzare un e-commerce di arredamento?</h2>
          <p className="text-gray-700 mb-12">
            Dipende, se sono pochi prodotti si può procedere con un CMS come WordPress o Shopify. Se si va oltre il migliaio, quindi 3 o 4 mila prodotti o superiori, si consigliano piattaforme più robuste come Magento o Prestashop. Ovvio che se si ha abbastanza budget e ci si può permettere di pagare uno sviluppatore, sarebbe meglio creare un sito da zero, con una piattaforma customizzata dall'inizio. In questo caso si ha un controllo assoluto del sito ed è più sicuro.
          </p>

          {/* Catalogo */}
          <h2 className="text-3xl font-bold mb-6">Come organizzare un catalogo che accompagna davvero l'utente</h2>
          <p className="text-gray-700 mb-12">
            Nel settore dell'arredamento, il catalogo non è solo un elenco di prodotti: è un percorso guidato che deve accompagnare l'utente nella scelta, soprattutto quando non ha ancora un'idea precisa di ciò che vuole acquistare. Dividere i mobili solo per categoria spesso non basta. In molti casi l'utente arriva da voi con una necessità vaga: "devo rinnovare il salotto", "mi serve un tavolo allungabile", "vorrei qualcosa in stile industrial". E se il sito non offre percorsi chiari e intuitivi, si rischia che l'utente abbandoni la pagina perché non sa da dove cominciare. Per questo è utile strutturare il catalogo non solo per tipologia di prodotto, ma anche per stili, materiali, ambienti o soluzioni specifiche. Una persona che cerca idee per arredare un piccolo bilocale, ad esempio, deve poter trovare rapidamente una sezione dedicata a "soluzioni salvaspazio" o "arredo per ambienti piccoli". Questo tipo di organizzazione aumenta il tempo di permanenza, riduce il tasso di abbandono e aiuta i motori di ricerca a comprendere meglio la logica del vostro sito.
          </p>

          {/* Immagini ambientate */}
          <h2 className="text-3xl font-bold mb-6">Come migliorare l'esperienza con immagini ambientate e contenuti visuali</h2>
          <div className="mb-6">
            <Image
              src="/images/divano-3d-arredamento-seo.png"
              alt="divano 3d negozio di arredamento seo"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <p className="text-gray-700 mb-12">
            Le foto dei prodotti sono fondamentali, ma nel mondo dell'arredo non bastano quasi mai. L'utente ha bisogno di vedere il mobile nel suo contesto naturale, in una stanza che ricorda la sua casa. Ecco perché le immagini ambientate, i render 3D e le panoramiche d'insieme possono fare davvero la differenza. Non si tratta solo di estetica, ma di far percepire il valore del prodotto. Un divano fotografato da solo potrebbe non dare un'idea precisa delle proporzioni, mentre inserito in un soggiorno reale permette di capire immediatamente lo spazio che occuperà. Lo stesso vale per madie, letti, armadi e complementi: la contestualizzazione facilita la scelta e riduce le incertezze tipiche di questo tipo di acquisto. Inoltre, questi contenuti arricchiscono la pagina in termini semantici, perché permettono di inserire descrizioni aggiuntive senza ripetere ciò che già è stato detto nella scheda tecnica.
          </p>

          {/* Contenuti ispirazionali */}
          <h2 className="text-3xl font-bold mb-6">Come guidare l'utente attraverso contenuti ispirazionali</h2>
          <p className="text-gray-700 mb-12">
            Nel settore arredo l'acquisto raramente è immediato. Le persone passano molto tempo a cercare ispirazioni, idee, soluzioni creative. È qui che entrano in gioco i contenuti ispirazionali, che non sostituiscono la descrizione del prodotto, ma la completano. Articoli che mostrano tendenze, moodboard, accostamenti di colori, consigli per arredare open space o camere piccole permettono al vostro sito di posizionarsi anche per ricerche informazionali e comparative. Sono contenuti che intercettano utenti nelle prime fasi del percorso d'acquisto e che, se ben strutturati, possono riportarli più volte sul vostro sito. Questo contribuisce a creare familiarità con il brand, che poi si traduce in fiducia quando arriva il momento di acquistare.
          </p>

          {/* Percorsi navigazione */}
          <h2 className="text-3xl font-bold mb-6">Creare percorsi di navigazione che risolvono problemi concreti</h2>
          <p className="text-gray-700 mb-12">
            Un utente che cerca arredamento non sta solo valutando un prodotto, ma spesso sta cercando di risolvere un problema pratico: mancanza di spazio, scarsa luminosità, necessità di ottimizzare una stanza irregolare. Organizzare una parte del sito attorno ai problemi reali delle persone permette di offrire un valore immediato e distinguersi dai concorrenti che propongono solo il classico catalogo. Si possono creare pagine dedicate come "come arredare un open space", "soluzioni per stanze strette", "idee per camere da letto moderne" o "i materiali più resistenti per le zone giorno". Queste pagine sono molto apprezzate dagli utenti e da Google, perché rispondono in modo diretto a domande reali e contribuiscono a rendere il vostro sito un punto di riferimento nel settore.
          </p>

          {/* Design interfaccia */}
          <h2 className="text-3xl font-bold mb-6">L'importanza del design dell'interfaccia e della chiarezza visiva</h2>
          <p className="text-gray-700 mb-12">
            Un sito di arredamento comunica il vostro stile ancora prima di mostrare i prodotti. Se l'interfaccia è caotica, datata o poco coerente con l'identità del negozio, l'utente percepirà una mancanza di cura. Al contrario, un design pulito, leggibile, con spazi ben distribuiti e colori coerenti con il brand trasmette professionalità e rende la navigazione più piacevole. La chiarezza visiva è fondamentale anche nel momento dell'acquisto. Pagine con testi leggibili, pulsanti ben visibili, informazioni organizzate in modo coerente facilitano l'azione dell'utente e riducono i dubbi. Un layout confusionario aumenta lo stress cognitivo e porta l'utente ad abbandonare la pagina anche se il prodotto è interessante.
          </p>

          {/* Valore percepito */}
          <h2 className="text-3xl font-bold mb-6">Idee per aumentare il valore percepito dei prodotti</h2>
          <p className="text-gray-700 mb-12">
            Nel settore dell'arredamento il valore percepito incide moltissimo sulla decisione d'acquisto. Due prodotti simili possono avere performance di vendita totalmente diverse a seconda di come vengono presentati. Il modo in cui raccontate il prodotto, il contesto in cui lo inserite, la qualità delle immagini e la cura del testo influiscono direttamente sulla percezione dell'utente. Inserire dettagli come la storia del materiale, modalità di manutenzione, consigli su come abbinarlo ad altri elementi della casa, testimonianze reali e immagini ambientate aumenta la sicurezza dell'utente. Queste informazioni fanno percepire competenza e attenzione, due fattori fondamentali per scegliere un negozio piuttosto che un altro.
          </p>

          {/* Video */}
          <h2 className="text-3xl font-bold mb-6">Contenuti video per aumentare fiducia e trasparenza</h2>
          <p className="text-gray-700 mb-12">
            Nel settore arredamento i video stanno diventando sempre più importanti. Un breve video dimostrativo di un mobile, di un meccanismo che si apre, di un tavolo allungabile o di un divano reclinabile permette all'utente di vedere con i propri occhi come funziona un prodotto. Questo tipo di contenuto dà trasparenza e avvicina l'esperienza online a quella reale in showroom. Un video non deve essere complesso o cinematografico: bastano buone luci, un'inquadratura chiara e una spiegazione semplice. I video aumentano il tempo di permanenza sulla pagina, migliorano la fiducia e aiutano l'utente a compiere la scelta finale. Inoltre, offrono ulteriori opportunità di posizionamento anche nei risultati video di Google.
          </p>

          {/* Conclusioni */}
          <h2 className="text-3xl font-bold mb-6">Conclusioni finali</h2>
          <h3 className="text-2xl font-semibold mb-4">È possibile, quindi, arrivare in prima pagina Google per un negozio d'arredamento?</h3>
          <p className="text-gray-700 mb-4">
            Beh dipende. Ad esempio se si ha la necessità di essere visibile solo localmente (più sarà grande la città e più il grado di difficoltà aumenterà perché ci saranno più competitor) è un conto. Se, invece, si vuole procedere con la visibilità sui motori di ricerca a livello nazionale o internazionale, sarà tutt'altra questione. Cambieranno strategie e cambierà il target. Certo, molti tecnicismi saranno gli stessi, però i tempi saranno molto più lunghi e il lavoro sarà più faticoso. Però, con:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>ottimi contenuti unici di qualità,</li>
            <li>un ottimo lavoro di facilità di caricamento delle pagine e navigazione per gli utenti,</li>
            <li>con una struttura solida e chiara delle varie categorie,</li>
            <li>un'ottima struttura di link interni,</li>
            <li>un blog che viene aggiornato quotidianamente con articoli scritti da persone con esperienza,</li>
            <li>link e menzioni esterne autorevoli,</li>
          </ul>
          <p className="text-gray-700 mb-4">
            dopo qualche tempo, si potrebbero riuscire a scavalcare i competitor e raggiungere la prima pagina per parole molto molto competitive. Ovvio che anche il più bravo SEO del mondo non può sapere quando precisamente avverrà questo evento. Non si possono dare date, né orari. Chi lo fa, è solo un truffaldino. Il motore di ricerca agisce in modo autonomo, seguendo delle proprie logiche e modificando le posizioni dei risultati di ricerca a proprio piacimento. Non è corruttibile in nessun modo. Chi vuole risultati che siano visibili immediatamente, può optare per le Meta Ads o Google Ads. Una volta create le inserzioni e pubblicate, sono visibili pochi istanti dopo. La SEO non è così, purtroppo. Abbiate pazienza. I risultati arriveranno e potrebbero consentire un aumento e scaling di fatturato notevole. Portate pazienza!
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
              <p className="text-gray-500 mb-4">E-commerce arredamento con meno di 100 prodotti</p>
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
              <p className="text-gray-500 mb-4">E-commerce arredamento con meno di 100 prodotti</p>
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
