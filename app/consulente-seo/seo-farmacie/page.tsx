import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import QuickEmailForm from '@/components/QuickEmailForm';

export const metadata: Metadata = {
  title: 'SEO per farmacie | Perseo',
  description: 'Come arrivare in prima pagina Google per una farmacia. Strategie SEO specifiche per farmacie online e fisiche.',
};

export default function SEOFarmacie() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'SEO per Farmacie' }]} light />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEO per farmacie
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            Come arrivare in prima pagina Google per una farmacia
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
            La prima cosa da fare è un'analisi a 360° e attenta prima di procedere con la vera e propria strategia SEO. Senza questo passaggio, molti piani digitali sono andati completamente in aria, perché non ci si è resi conto delle potenzialità della propria azienda e quali erano le maggiori minacce presentate dai competitor. Ad esempio, nel caso delle farmacie, sarebbe pertinente contestualizzare la posizione geografica: perché un conto è avere una farmacia in un paesino di provincia e, quindi, essere il punto di riferimento di quegli abitanti, altro conto è avere una farmacia in una città piccola, quindi in concorrenza con altre farmacie, o addirittura averla in una grande metropoli, come Roma, e quindi ragionando più che altro in termini di quartiere. Capire l'obiettivo dell'attività è fondamentale, perché una farmacia può anche trovarsi nel paesino più sperduto, ma avere un magazzino enorme con la maggior parte dei farmaci esistenti e una rete propria di trasportatori, stile Amazon. Quindi, sì, forniscono il piccolo paese sperduto di 200 abitanti, ma vogliono essere presenti e raggiungere tutti coloro che contattano l'azienda da qualsiasi parte d'Italia.
          </p>

          {/* Analisi competitor */}
          <h2 className="text-3xl font-bold mb-6">Analisi dei competitor</h2>
          <p className="text-gray-700 mb-4">
            Cos'è che contraddistingue questa o quella farmacia? Ci sono dei servizi aggiuntivi che però non hanno avuto risalto, eppure avrebbero aiutato e facilitato la vita dei propri clienti? All'interno dell'analisi è necessario porsi queste domande. È giusto che si valuti l'esistenza per esempio di servizi quali:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Prestazioni infermieristiche e riabilitative</li>
            <li>Autoanalisi per i parametri più comuni (emoglobina, colesterolo, glicemia, trigliceridi ecc…).</li>
            <li>Misurazione della pressione</li>
            <li>Prenotazione esami</li>
            <li>Giornate di prevenzione</li>
            <li>ecc…</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Insomma, anche per le strategie SEO, è importante sapere ciò che una farmacia può o potrebbe offrire, guardando anche le attività farmaceutiche limitrofe. Possono rappresentare una minaccia? O possono rappresentare anche un'idea su cui poter investire sia sul piano dell'assistenza, sia a livello pubblicitario?
          </p>

          {/* Alberatura */}
          <h2 className="text-3xl font-bold mb-6">Alberatura del sito</h2>
          <p className="text-gray-700 mb-4">
            Prima di mettere mano al sito, sarebbe opportuno fare un'analisi delle parole chiave e concetti su cui si vuole puntare per essere visibili sui motori di ricerca. Quindi il menù del sito dovrà contenere quelle sezioni/categorie e sottocategorie che fungeranno da contenitori per le varie tipologie di farmaci, come:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-1">
            <li>Farmaci senza ricetta</li>
            <li>Cosmesi</li>
            <li>Igiene</li>
            <li>Integratori</li>
            <li>Elettromedicali</li>
            <li>ecc…</li>
          </ul>

          {/* Titoli */}
          <h2 className="text-3xl font-bold mb-6">Titoli nelle pagine</h2>
          <p className="text-gray-700 mb-4">
            I titoli, sembrerà strano, ma sono una parte importantissima della SEO on page. Molte volte capita di imbattersi in siti dove non esiste una gerarchia tra i titoli delle pagine.
          </p>
          <p className="text-gray-700 mb-12">
            La gerarchia che piace a Google è quella di assegnare gli H1 ai titoli delle pagine, gli H2 dovrebbero corrispondere ai titoli dei paragrafi, gli H3 ai sottoparagrafi e così via. Google e gli altri motori, devono vedere questa struttura a piramide. Quest'operazione insieme a tantissimi altri fattori, contribuisce al posizionamento del sito rispetto agli altri. Ovviamente si possono avere i migliori titoli del mondo, ma senza un ottimo contenuto dei paragrafi, è difficile andare lontano.
          </p>

          {/* Descrizione farmaci */}
          <h2 className="text-3xl font-bold mb-6">Descrizione dei farmaci</h2>
          <p className="text-gray-700 mb-4">
            La descrizione dei farmaci è importantissima, perché permette agli utenti e ai motori di ricerca di posizionarti in maniera più ottimale rispetto ai competitor nei risultati di ricerca.
          </p>
          <p className="text-gray-700 mb-4">Ed è giusto ed etico dare le informazioni complete relative a quel farmaco. Un utente, ad esempio, si aspetta di trovare sezioni/paragrafi come:</p>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-1">
            <li>Indicazioni terapeutiche</li>
            <li>Posologia</li>
            <li>Controindicazioni</li>
            <li>Effetti collaterali</li>
            <li>Composizione</li>
            <li>ecc…</li>
          </ul>

                    <QuickEmailForm />

          {/* Meta tag */}
          <h2 className="text-3xl font-bold mb-6">Inserire i Meta tag</h2>
          <p className="text-gray-700 mb-4">
            Ogni pagina ha un suo titolo, è vero. E come si è appena detto, è ottimale utilizzare il tag H1. Ma non basta, perché i motori di ricerca hanno bisogno di leggere il proprio titolo. No, non è necessario riscrivere lo stesso titolo sulla pagina visibile agli utenti. È un titolo da "dietro le quinte" (Meta title) ed è opportuno inserirlo da codice HTML o se si utilizza WordPress, aggiungendo un plugin come:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Yoast</li>
            <li>All in one seo</li>
            <li>Rank math</li>
            <li>ecc…</li>
          </ul>
          <p className="text-gray-700 mb-12">
            e da lì sarà semplicissimo includere i meta tag per i motori di ricerca. Basterà riempire il campo vuoto con il titolo che si vuole inserire (alcune volte è già il plugin che inserisce come meta title il titolo della pagina già inserito, quindi non si dovrà fare nulla). In alcuni casi è consigliabile inserire anche la descrizione che apparirà nei risultati di ricerca, la famosa "meta description", che di solito è il campo sottostante al titolo.
          </p>

          {/* Foto */}
          <h2 className="text-3xl font-bold mb-6">Foto</h2>
          <p className="text-gray-700 mb-12">
            È giusto avere delle foto chiare dei farmaci, anche perché gli utenti spesso cercano proprio il packaging del prodotto di cui non ricordano il nome. Quindi è utile per le persone ma anche per Google. Utilizzando il tag Alt (se si usa WordPress, è il campo del testo alternativo) e inserendo il titolo della foto, si fa capire ai motori di ricerca quale sia il contenuto testuale dell'immagine. Questa operazione può essere considerata un piccolo fattore di posizionamento, aiutando il sito ad apparire nei risultati di Google Immagini o mostrandosi quando un utente fotografa con il proprio smartphone la confezione del farmaco utilizzando Google Lens.
          </p>

          {/* Dati strutturati */}
          <h2 className="text-3xl font-bold mb-6">Inserire i dati strutturati</h2>
          <p className="text-gray-700 mb-12">
            I dati strutturati non sono direttamente un fattore di posizionamento, però sono utilissimi a far capire a Google meglio su ciò che tratta il sito. Quindi, in questo caso che si parla di prodotti farmaceutici, è utile aggiungere informazioni attraverso un codice (il formato si chiama Json-ld) e Google potrebbe mostrare la foto, descrizione e prezzo già nei risultati di ricerca del sito in questione. Gli utenti sono più colpiti se trovano un contenuto ricco di features nelle pagine Google e tendono, ovviamente, a cliccare sul sito in questione.
          </p>

          {/* Profilo attività */}
          <h2 className="text-3xl font-bold mb-6">Creare il profilo dell'attività</h2>
          <p className="text-gray-700 mb-6">
            Era la vecchia scheda di "Google my business" che veniva mostrata sulla parte destra della pagina dei risultati di Google con le foto interne ed esterne del negozio, gli orari di apertura, il numero di telefono, le recensioni, gli eventuali prodotti ecc… Ai fini dei negozi locali, è un'operazione importante da fare anche perché, potenzialmente il sito potrebbe finire nelle local pack. Cosa sono? Le abbiamo viste migliaia di volte. Quindi se si ha una farmacia e si vuole essere visibili e farsi trovare dagli utenti che scrivono su Google "Farmacia Bari", "Farmaci da banco Napoli", "Integratori alimentari Potenza" ecc… si devono fare queste ultime operazioni descritte.
          </p>
          <div className="mb-12">
            <Image
              src="/images/local-pack-farmacie.png"
              alt="Local pack farmacie"
              width={298}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Velocità */}
          <h2 className="text-3xl font-bold mb-6">Velocità del sito</h2>
          <p className="text-gray-700 mb-4">
            La velocità di caricamento di un sito è fondamentale per la user experience (la facilità che un utente ha quando naviga all'interno di un sito) e può essere un piccolo fattore di posizionamento nei motori di ricerca. Di solito le persone quando provano ad entrare in un sito, vorrebbero aspettare meno secondi possibili. La troppa attesa scatenerebbe in loro la frustrazione lasciando immediatamente il sito in caricamento per andare verso un altro sito simile. Questa è una parte dove sviluppatori e sistemisti lavorano di più, ed essendo molto tecnica, si cercherà di evitare alcuni termini che possono risultare astrusi dando però alcuni buoni consigli che possono aiutare la velocità del sito:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Caricare immagini in formati recenti (webP e avif) e che non superino un certo peso (sicuramente 1 mega per una foto è estremamente pesante). Si consiglia di utilizzare dei tool online di compressione di immagini online come compressjpeg.com o tinypng.com</li>
            <li>Non caricare il sito di troppi plugin/moduli/framework che rallenterebbero il tutto</li>
            <li>Ottimizzare gli script esterni (Analytics, Tag Manager, Facebook pixel, Hotjar ecc…) usando le chiamate asincrone</li>
            <li>Utilizzare una CDN, ovvero un gruppo di server per il collegamento molto rapido dei contenuti.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Andrebbero poi fatte altre operazioni, anche perché tool come Google Page Speed e GTmetrix segnalano tutte le anomalie relative alla velocità di caricamento e, una volta comprese le problematiche specifiche, bisognerebbe risolverle con una buona dose di pazienza e test. Ma già queste piccole operazioni sopra elencate, possono sicuramente giovare alle pagine.
          </p>

          {/* Link esterni */}
          <h2 className="text-3xl font-bold mb-6">Link esterni</h2>
          <p className="text-gray-700 mb-12">
            Questa pratica non è particolarmente consigliata da Google. Nelle sue linee guida, infatti, si vietano gli schemi di link, quindi l'acquisto o lo scambio di link tra i siti. Sono tecniche di Black Hat e si può incorrere in penalizzazioni. Ma la domanda è: se fatta bene, può essere un fattore di posizionamento? La risposta è: Sì. Ovviamente bisogna creare una strategia di acquisizione di link, rivolgendosi a siti complementari (nel caso di siti di farmacie si andranno ad analizzare siti autorevoli come quelli di salute e benessere, non certo si compreranno link da siti che si occupano di hardware). Proseguendo, il discorso scenderebbe nel tecnico e bisognerebbe analizzare e valutare tanti altri fattori. Basti sapere che la link building è una delle attività che può portare molti vantaggi ai siti.
          </p>

          {/* Intenzioni ricerca */}
          <h2 className="text-3xl font-bold mb-6">Intenzioni di ricerca: non tutte le ricerche "farmacia" sono uguali</h2>
          <p className="text-gray-700 mb-4">
            Uno degli errori più comuni è considerare tutte le ricerche legate alle farmacie come se fossero uguali. In realtà c'è una bella differenza tra chi cerca "farmacia aperta ora vicino a me", chi digita "integratori per stanchezza cronica" e chi scrive "tamponi Covid prenotazione online". Sono tre utenti diversi, in tre momenti diversi, con tre bisogni diversi. La strategia SEO deve tenerne conto, altrimenti si rischia di posizionarsi bene per ricerche che non portano assolutamente a nulla.
          </p>
          <p className="text-gray-700 mb-12">
            A livello pratico, si distingue tra ricerche informative (chi vuole capire un problema), ricerche transazionali (chi è pronto a comprare o prenotare un servizio), ricerche di navigazione (chi sta cercando proprio voi per nome) e ricerche comparative (chi sta valutando un prodotto o una soluzione rispetto a un'altra). La farmacia che costruisce contenuti tenendo conto di queste differenze ha molte più possibilità di intercettare l'utente giusto, nel momento giusto, con la pagina giusta.
          </p>

          {/* Contenuti editoriali */}
          <h2 className="text-3xl font-bold mb-6">Contenuti editoriali in ambito salute: come non trasformarsi nel Dr. Google</h2>
          <p className="text-gray-700 mb-4">
            Quando si parla di farmacie, la tentazione di "fare il medico online" è dietro l'angolo. No, non è una buona idea. Sia per una questione etica, sia perché si entra in territori delicati (salute, diagnosi, terapie) dove è meglio non improvvisare. Questo non significa che il blog della farmacia debba limitarsi a dire ovvietà tipo "bere acqua fa bene". Anzi.
          </p>
          <p className="text-gray-700 mb-12">
            Una farmacia può produrre contenuti utili, chiari e perfettamente etici parlando di prevenzione, stili di vita, corretto uso dei dispositivi medici, stagionalità dei disturbi (allergie, influenze), differenze tra categorie di prodotti (senza mai trasformare il sito in un bugiardino online). L'obiettivo non è sostituirsi al medico, ma diventare un punto di riferimento affidabile dove l'utente si sente accompagnato prima, durante e dopo l'acquisto.
          </p>

          {/* Pagine servizi */}
          <h2 className="text-3xl font-bold mb-6">Pagine dedicate ai servizi: non solo "vendita farmaci"</h2>
          <p className="text-gray-700 mb-4">
            Molte farmacie ormai non sono più solo luoghi in cui si acquistano medicinali. Offrono servizi di autoanalisi, tamponi, vaccini, holter pressorio, ECG, consulenze mirate, percorsi di prevenzione, noleggio apparecchi elettromedicali e molto altro. Il problema è che spesso questi servizi sono nascosti in una riga del menu o in una pagina generica "i nostri servizi" che non leggerà mai nessuno.
          </p>
          <p className="text-gray-700 mb-12">
            Dal punto di vista SEO (e del buonsenso), è molto più efficace dedicare una pagina ad ogni servizio importante. Una pagina per i tamponi, una per le autoanalisi, una per le vaccinazioni in farmacia e così via. Questo permette di intercettare ricerche specifiche (che spesso sono anche molto urgenti) e di spiegare con calma cosa offre la farmacia, come funziona il servizio, se serve prenotare, se è previsto il pagamento, in quali orari è disponibile. Google apprezza i contenuti chiari, l'utente anche.
          </p>

          {/* Ricerche urgenti */}
          <h2 className="text-3xl font-bold mb-6">SEO e ricerche "urgenti": presidiare il momento del bisogno</h2>
          <p className="text-gray-700 mb-12">
            Le farmacie hanno una particolarità rispetto a molti altri settori: una grande fetta delle ricerche è legata all'urgenza. Chi cerca "farmacia aperta ora", "farmacia turno + città", "farmacia h24" non sta facendo un confronto filosofico sui modelli di business. Ha bisogno di qualcosa, adesso. E spesso lo sta cercando da smartphone, in strada o in auto. In questo contesto, essere presenti con una scheda attività curata, orari aggiornati, eventuali turni corretti e un sito che si carica rapidamente da mobile non è un vezzo, è sopravvivenza digitale. Se si promette "aperto ora" e si è chiusi, non c'è solo un problema SEO: c'è un problema di credibilità. E gli utenti, stranamente, non amano essere presi in giro.
          </p>

          {/* Recensioni */}
          <h2 className="text-3xl font-bold mb-6">Reputazione online e recensioni: non sono solo stelline</h2>
          <div className="mb-6">
            <Image
              src="/images/recensioni-farmacia.png"
              alt="recensioni farmacia"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <p className="text-gray-700 mb-4">
            Le recensioni online delle farmacie non sono più un fenomeno raro. Sempre più utenti lasciano commenti su cortesia, tempi di attesa, disponibilità dei prodotti, capacità di ascolto del farmacista. A livello SEO non sono un fattore di posizionamento diretto miracoloso, ma influiscono sulla scelta dell'utente quando Google mostra più farmacie nella stessa zona.
          </p>
          <p className="text-gray-700 mb-12">
            Ignorare recensioni negative, non rispondere mai, lasciare la scheda attività abbandonata… sono segnali di disinteresse. Rispondere in modo professionale, chiarire malintesi, ringraziare per le recensioni positive, invece, aiuta a costruire una percezione di affidabilità. E ricordiamolo: nei settori "sensibili" come salute e benessere, la fiducia è spesso più importante del prezzo.
          </p>

          {/* Misurare risultati */}
          <h2 className="text-3xl font-bold mb-6">Misurare i risultati: non solo vendite, ma micro-conversioni</h2>
          <p className="text-gray-700 mb-12">
            Una farmacia online o un sito di farmacia non dovrebbe misurare solo le vendite di prodotti (quando c'è e-commerce). Le micro-conversioni sono altrettanto importanti: clic sul numero di telefono, apertura di WhatsApp, compilazione di form per prenotare un tampone o un vaccino, richiesta di informazioni su un servizio, download di un volantino o di un calendario prevenzione. Questi segnali indicano che il sito sta lavorando bene, anche se il pagamento avviene poi in negozio. Limitarsi a guardare "quanti prodotti ho venduto online" vuol dire perdere di vista tutto il lavoro che la SEO fa a monte per portare persone reali, con problemi reali, a mettersi in contatto con la farmacia.
          </p>

          {/* Mobile first */}
          <h2 className="text-3xl font-bold mb-6">Mobile first sul serio: l'utente non è seduto alla scrivania</h2>
          <p className="text-gray-700 mb-12">
            Nel caso delle farmacie, la stragrande maggioranza delle ricerche avviene da smartphone. Nessuno, alle tre di notte con 39 di febbre, si siede al PC fisso per cercare "farmacia di turno". Eppure ci sono siti non responsive, popup ingestibili da mobile, testi microscopici e bottoni così piccoli che per cliccarli servirebbero le dita di un pianista professionista. Dire "il sito è responsive" non basta. Bisogna chiedersi: una persona di 60 anni, con gli occhiali, alle 22:30, riesce a capire in 5 secondi se siamo aperti, dove siamo e come contattarci? Se la risposta è no, abbiamo un problema che va ben oltre la SEO.
          </p>

          {/* SEO e offline */}
          <h2 className="text-3xl font-bold mb-6">Integrazione tra SEO e canali offline: dal sito al bancone</h2>
          <p className="text-gray-700 mb-12">
            Un sito di farmacia ben fatto non è un mondo parallelo rispetto al bancone fisico. I due ambienti devono parlarsi. Se sul sito si spinge un calendario di giornate di prevenzione, ma in negozio nessuno sa di cosa si tratti, il risultato è una sola cosa: confusione. Lo stesso vale per promozioni, campagne stagionali, nuovi servizi. La SEO porta persone informate fino alla porta della farmacia (o fino al carrello, nel caso di e-commerce). Se dall'altra parte non c'è coerenza, l'effetto è opposto a quello desiderato. Le farmacie che cresceranno di più saranno quelle che useranno il sito non come una "vetrina statica", ma come un'estensione naturale del banco, dove le informazioni sono le stesse e il linguaggio è riconoscibile.
          </p>

          {/* Medic Update */}
          <h2 className="text-3xl font-bold mb-6">Il "Medic Update" del 2018: quando Google ha deciso che la salute non è un gioco</h2>
          <p className="text-gray-700 mb-4">
            Nel 2018 Google ha lanciato uno degli aggiornamenti più discussi degli ultimi dieci anni: il famigerato Medic Update. Il nome non è ufficiale, ma calza a pennello, perché è stato un aggiornamento che ha colpito soprattutto i siti del settore salute, benessere, nutrizione, farmaceutico, medicina alternativa e tutto ciò che rientra nel punto più delicato dell'ecosistema Google: i contenuti YMYL, Your Money Your Life. Tradotto: tutto ciò che può incidere sulla salute delle persone o sul loro portafogli.
          </p>
          <p className="text-gray-700 mb-4">
            Che cosa è successo esattamente? Semplice: Google ha stretto le maglie. In maniera drastica. Tutti quei siti che dispensavano consigli medici senza competenza, che pubblicavano informazioni incomplete, che usavano toni sensazionalistici del tipo "questa vitamina ti cambia la vita" o "elimina il colesterolo in 3 giorni" sono stati letteralmente travolti. Alcuni hanno perso il 70% del traffico in una notte. Altri non si sono più ripresi.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <p className="text-gray-700 font-medium">Il messaggio di Google è stato chiaro: parlare di salute non è come recensire un tostapane.</p>
          </div>
          <p className="text-gray-700 mb-4">
            Chi dà informazioni mediche deve farlo con autorevolezza, competenza e trasparenza. Non più "secondo noi questo integratore fa bene", ma contenuti supportati da fonti, scritti da figure competenti e presentati in maniera chiara e responsabile.
          </p>
          <p className="text-gray-700 mb-4">
            Per le farmacie questo aggiornamento è stato, paradossalmente, una grande opportunità. Un sito di farmacia – se strutturato bene – parte già con un vantaggio: è un'attività regolamentata, riconosciuta, con professionisti reali dietro al bancone. In altre parole, possiede naturalmente quei segnali di affidabilità che Google cerca: E-A-T (Expertise, Authoritativeness, Trustworthiness). Ma questo vantaggio va dimostrato.
          </p>
          <p className="text-gray-700 mb-4">Cosa ha premiato Google dopo il Medic Update?</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>contenuti accurati e non copiati dai bugiardini</li>
            <li>descrizioni dei prodotti complete, non "tre righe e via"</li>
            <li>pagine scritte in modo responsabile e non ambiguo</li>
            <li>una chiara separazione tra informazione e opinione</li>
            <li>presenza di pagine istituzionali, contatti veri, persone vere</li>
            <li>trasparenza su chi scrive cosa</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Molti siti che trattavano salute in modo superficiale sono crollati. Chi invece ha migliorato qualità, chiarezza e autorevolezza ha visto una crescita costante nel tempo. Ed è qui che la farmacia online, se gestita bene, può davvero emergere: Google vuole contenuti affidabili e un contesto credibile. Le farmacie, per definizione, dovrebbero essere esattamente questo.
          </p>
          <div className="bg-purple-50 rounded-lg p-6 mb-12">
            <p className="text-gray-700 font-medium">Il Medic Update ha ricordato una cosa semplice: la SEO non è solo tecnica, ma anche responsabilità. Chi parla di salute deve farlo bene, altrimenti Google preferisce non farlo parlare affatto.</p>
          </div>

          {/* Piattaforma */}
          <h2 className="text-3xl font-bold mb-6">Consigli extra SEO</h2>
          <h3 className="text-2xl font-semibold mb-4">Quale piattaforma utilizzare per realizzare un e-commerce di una farmacia?</h3>
          <p className="text-gray-700 mb-4">
            Una volta presa la decisione di voler realizzare un sito di una farmacia, sarà abbastanza scontato voler inserire tutti i prodotti farmaceutici disponibili per riuscire a venderne il più possibile. Considerando, quindi, che il numero di prodotti sarà qualche migliaio, è consigliabile affidarsi a grandi CMS di e-commerce nativi come Prestashop e Magento. Assolutamente sconsigliati WordPress, Woocommerce e Shopify, adatti a business più piccoli. Se si ha un grosso budget a disposizione, la migliore scelta rimane quella di affidarsi ad uno sviluppatore che creerà un ambiente di sviluppo personalizzato e controllato al 100%. Lì anche il minimo errore non dovrebbe generare grosse ansie perché, con una figura come quella dello sviluppatore integrata in azienda, verrebbe risolto in pochissimo tempo, dato che ogni minimo dettaglio del sito, è stato generato proprio da quel professionista.
          </p>

          {/* Conclusioni */}
          <h2 className="text-3xl font-bold mb-6 mt-12">Conclusioni finali</h2>
          <h3 className="text-2xl font-semibold mb-4">È possibile, quindi, arrivare in prima pagina Google per una farmacia?</h3>
          <p className="text-gray-700 mb-4">
            Sì e no. Innanzitutto ci saranno delle parole chiavi che arriveranno in cima e altre no. Per posizionare quelle che interessano il proprietario e che, effettivamente, sono quelle che generano più profitto, non si può assicurare nulla a nessuno. Solo i truffaldini e gli pseudo-professionisti del web marketing con esperienze (ne hanno?) disastrose possono dire che il sito "migliorefarmaciaditalia.com" apparirà sulla prima pagina di Google per la parola secca "farmacia" il 24 aprile alle 23:59.
          </p>
          <p className="text-gray-700 mb-4">
            Il lavoro dei SEO è molto simile, per certi versi, al lavoro dell'avvocato. Si lavora, producendo carte, appelli, arringhe, ricorsi, obiezioni, ma poi è sempre il giudice colui che decide le sorti degli imputati. Stessa cosa avviene nel marketing digitale dei motori di ricerca. Un bravo SEO fa tutto ciò che ritiene necessario per portare un sito ad essere il primo risultato della prima pagina, ma, alla fine, è l'algoritmo che decide. Certo, ci sono dei quality raters, cioè figure umane che si occupano della qualità dei siti e del loro posizionamento, ma la maggior parte del lavoro lo svolge il machine learning e le continue evoluzioni dell'algoritmo.
          </p>
          <p className="text-gray-700 mb-4">
            Un bravo SEO si vede quando risolve i problemi manuali o algoritmici, quando riesce a distinguere una semplice fluttuazione dei risultati di ricerca da una penalizzazione e quindi riuscire a far riemergere il sito. Purtroppo non si possono dare date, né orari di posizionamenti. Se si vuole tutto e subito, meglio fare Ads con Facebook o Google. Portate pazienza!
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
              <p className="text-gray-500 mb-4">E-commerce farmacia con meno di 1000 prodotti</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 1200€</p>
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
              <p className="text-gray-500 mb-4">E-commerce farmacia con meno di 1000 prodotti</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 1600€</p>
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
