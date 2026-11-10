import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'SEO per studi legali e avvocati | Perseo',
  description: 'SEO per studi legali raccontata da chi ha lavorato tre anni per una piattaforma di avvocati: dove vincono loro e dove può vincere il tuo studio.',
};

const linkClass = 'text-purple-600 hover:underline';

export default function SEOStudiLegali() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'SEO per studi legali' }]} light />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEO per studi legali e avvocati
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            Come arrivare in prima pagina Google per uno studio legale, anche quando davanti hai le grandi piattaforme
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

          {/* Intro */}
          <p className="text-gray-700 mb-4">
            In un processo non basta avere ragione. Bisogna provarla. Puoi essere l&apos;avvocato più preparato del foro, ma se in udienza non porti documenti, testimoni e perizie, il giudice decide su quello che ha davanti. E quello che ha davanti, magari, l&apos;ha portato la controparte.
          </p>
          <p className="text-gray-700 mb-4">
            Su Google funziona allo stesso modo. Il giudice è l&apos;algoritmo, e decide su quello che trova: pagine, recensioni, link, informazioni verificabili su chi sei. La SEO per studi legali, in buona sostanza, è il lavoro di preparare il fascicolo. Non per convincere Google che sei bravo (non ci crede sulla parola), ma per dargli le prove.
          </p>
          <p className="text-gray-700 mb-12">
            Questa pagina vale per studi singoli, studi associati e società tra avvocati. Che tu ti occupi di famiglia, lavoro, penale o infortunistica, la logica di fondo è la stessa.
          </p>

          {/* Piattaforme */}
          <h2 className="text-3xl font-bold mb-6">Perché la prima pagina è piena di piattaforme e non di studi?</h2>
          <p className="text-gray-700 mb-4">
            Cerca &quot;avvocato divorzista Milano&quot; o &quot;avvocato per sfratto Treviso&quot;. Prima di trovare uno studio vero, spesso trovi portali che elencano decine di avvocati, siti di consulenza legale online e directory.
          </p>
          <p className="text-gray-700 mb-4">
            Lo so bene, perché per tre anni sono stato dall&apos;altra parte. Dal 2019 al 2022 sono stato responsabile web marketing di <a href="https://www.avvocatoflash.it/" target="_blank" rel="noopener noreferrer" className={linkClass}>AvvocatoFlash</a>, una piattaforma che mette in contatto chi ha bisogno di un avvocato con i professionisti iscritti. Il mio lavoro era esattamente questo: far uscire la piattaforma su Google prima degli studi.
          </p>
          <p className="text-gray-700 mb-4">
            Ecco com&apos;era fatto il sito, ricostruito dalle copie archiviate su Wayback Machine (che non salva tutto, quindi i numeri reali erano più alti):
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Profili degli avvocati:</strong> circa 1.500 pagine archiviate nel 2019, oltre 3.700 nel 2022. Una pagina per ogni professionista, con aree di competenza e città.</li>
            <li><strong>Pagine &quot;area di pratica × città&quot;:</strong> &quot;avvocato per sfratto Treviso&quot;, &quot;avvocato condominio Firenze&quot;, &quot;avvocato divorzio Brescia&quot;. Nel 2022 erano una cinquantina di aree moltiplicate per più di cento città.</li>
            <li><strong>Un blog con più di mille guide:</strong> come fare se il datore di lavoro non ti concede la malattia, cos&apos;è il concordato preventivo, come funziona il diritto di prelazione.</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Secondo le stime di SEOZoom, il traffico organico del sito è passato da circa 14.000 visite al mese a inizio 2019 a circa 50.000 a fine 2021. Più o meno tre volte tanto. Daniele Izzo, il CMO dell&apos;azienda, l&apos;ha riassunta così: &quot;abbiamo una crescita costante di lead e fatturato&quot;.
          </p>
          <figure className="mb-6">
            <Image
              src="/images/avvocatoflash-traffico-seozoom.webp"
              alt="Grafico SEOZoom del traffico organico stimato di avvocatoflash.it dal 2019 alla fine del 2021"
              width={1310}
              height={720}
              className="rounded-lg shadow-md"
            />
            <figcaption className="text-sm text-gray-500 mt-2">
              Traffico organico stimato di avvocatoflash.it secondo SEOZoom. Il periodo in cui ho seguito il sito, dal 2019 alla fine del 2021.
            </figcaption>
          </figure>
          <p className="text-gray-700 mb-12">
            Il punto è questo: una piattaforma vince sulla scala. Migliaia di pagine, migliaia di combinazioni tra materie e città, un blog che risponde a ogni domanda. Uno studio, da solo, non può costruire niente del genere. E non deve provarci.
          </p>

          {/* Dove vince lo studio */}
          <h2 className="text-3xl font-bold mb-6">Dove può vincere uno studio legale?</h2>
          <p className="text-gray-700 mb-4">
            Lavorando dall&apos;altra parte, ho capito anche dove le piattaforme sono deboli. Sono tre punti, e sono proprio quelli dove uno studio parte avvantaggiato.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>La mappa:</strong> quando cerchi &quot;avvocato vicino a me&quot; o &quot;avvocato del lavoro Cosenza&quot;, Google mostra spesso la mappa con tre attività locali (il cosiddetto local pack). Lì ci finiscono gli studi con un indirizzo vero e un profilo dell&apos;attività su Google curato. Una piattaforma nazionale, in quella mappa, non c&apos;è.</li>
            <li><strong>Le persone:</strong> chi cerca un avvocato, alla fine, sceglie una persona. Un nome, una faccia, una storia professionale. Le piattaforme hanno migliaia di profili quasi uguali; tu hai te stesso, e puoi raccontarti meglio di qualsiasi scheda.</li>
            <li><strong>La specializzazione vera:</strong> &quot;avvocato divorzista Milano&quot; è una partita persa in partenza. &quot;Assegno di mantenimento se l&apos;ex coniuge lavora in nero&quot; o &quot;licenziamento durante il periodo di prova cosa fare&quot; sono ricerche più specifiche, dove una guida scritta da chi quelle cause le segue davvero batte la guida generica scritta per un portale.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Insomma: non devi battere la piattaforma sul suo terreno. Devi giocare sul tuo.
          </p>

          {/* Analisi */}
          <h2 className="text-3xl font-bold mb-6">Analisi: chi sei e chi vuoi che ti trovi</h2>
          <p className="text-gray-700 mb-4">
            La prima cosa da fare, come sempre, è capire chi sei davvero e dove vuoi arrivare.
          </p>
          <p className="text-gray-700 mb-4">
            Uno studio di diritto di famiglia a Cosenza vive di clienti che abitano entro 30-40 km. Uno studio che segue il diritto dei trasporti o la proprietà intellettuale può lavorare con clienti in tutta Italia, perché quelle competenze sono rare. Uno studio di infortunistica stradale ha un cliente che cerca in fretta, spesso dal telefono, magari subito dopo l&apos;incidente.
          </p>
          <p className="text-gray-700 mb-4">
            Tre studi, tre strategie diverse. Il primo deve puntare quasi tutto sulla ricerca locale e sul profilo Google. Il secondo sui contenuti specialistici. Il terzo sulla velocità di contatto: telefono in evidenza, pagina chiara, risposta rapida.
          </p>
          <p className="text-gray-700 mb-12">
            Se parti senza questa distinzione, finisci a scrivere articoli su &quot;cos&apos;è la prescrizione&quot; che leggeranno studenti di giurisprudenza di mezza Italia, ma che non ti porteranno un cliente.
          </p>

          {/* YMYL */}
          <h2 className="text-3xl font-bold mb-6">Perché Google è più severo con i siti legali</h2>
          <p className="text-gray-700 mb-4">
            Google classifica alcuni argomenti come YMYL, Your Money or Your Life: tutto ciò che può incidere sulla salute, sulla sicurezza o sul portafogli delle persone. Ne ho parlato nelle pagine sulla <Link href="/consulente-seo/seo-farmacie/" className={linkClass}>SEO per farmacie</Link> e sulla <Link href="/consulente-seo/seo-banche-e-finanza/" className={linkClass}>SEO per banche e finanza</Link>. Le informazioni legali ci stanno dentro in pieno.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <p className="text-gray-700 font-medium">Un consiglio sbagliato su un tostapane ti fa perdere 30 euro. Un consiglio sbagliato su un termine per impugnare un licenziamento ti fa perdere la causa.</p>
          </div>
          <p className="text-gray-700 mb-12">
            Per questo, sulle ricerche legali, Google alza l&apos;asticella su quello che chiama <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className={linkClass}>E-E-A-T</a> (Experience, Expertise, Authoritativeness, Trustworthiness, cioè esperienza, competenza, autorevolezza e affidabilità). Tradotto: non basta scrivere bene. Devi dimostrare chi sei.
          </p>

          {/* E-E-A-T */}
          <h2 className="text-3xl font-bold mb-6">Come dimostrare a Google che sei un avvocato vero</h2>
          <p className="text-gray-700 mb-4">
            Qui gli avvocati partono avvantaggiati. Sei iscritto a un albo, hai un Ordine di appartenenza, il tuo nome è verificabile sull&apos;albo nazionale del <a href="https://www.consiglionazionaleforense.it/" target="_blank" rel="noopener noreferrer" className={linkClass}>Consiglio Nazionale Forense</a>. Sono prove pubbliche. Il problema è che molti siti di studi non le mostrano, o le nascondono nel footer.
          </p>
          <p className="text-gray-700 mb-4">Ecco cosa non può mancare:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Pagina per ogni avvocato:</strong> nome, cognome, foto vera, Ordine di iscrizione, anno di iscrizione, abilitazione al patrocinio in Cassazione se c&apos;è, aree di cui si occupa davvero. Non &quot;un team di professionisti al tuo servizio&quot;, che non dice niente a nessuno.</li>
            <li><strong>Autore su ogni contenuto:</strong> la guida sull&apos;assegno di mantenimento chi l&apos;ha scritta? Se è l&apos;avvocato che segue le separazioni dello studio, dillo, con il link alla sua pagina.</li>
            <li><strong>Data di aggiornamento:</strong> le norme cambiano, le sentenze pure. Una guida sul processo civile scritta prima della riforma Cartabia oggi può essere sbagliata. L&apos;utente se ne accorge, e anche Google.</li>
            <li><strong>Fonti citate:</strong> <a href="https://www.normattiva.it/" target="_blank" rel="noopener noreferrer" className={linkClass}>Normattiva</a>, Gazzetta Ufficiale, sentenze della Cassazione. Linkare le fonti ufficiali non ti toglie autorevolezza, te la dà.</li>
            <li><strong>Contatti completi:</strong> indirizzo dello studio, telefono, email, PEC, partita IVA.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            <strong>Attenzione:</strong> niente scorciatoie. Specializzazioni non conseguite, titoli gonfiati o recensioni comprate, per un avvocato, non sono solo un rischio SEO. Sono un rischio disciplinare.
          </p>

          {/* Deontologia */}
          <h2 className="text-3xl font-bold mb-6">Cosa dice il codice deontologico (e cosa cambia per la SEO)</h2>
          <p className="text-gray-700 mb-4">
            Qui c&apos;è un punto che molti SEO ignorano, e che invece è fondamentale. Gli avvocati possono farsi pubblicità, ma con regole precise. Le trovi nell&apos;art. 35 del <a href="https://www.consiglionazionaleforense.it/codice-deontologico-forense" target="_blank" rel="noopener noreferrer" className={linkClass}>Codice deontologico forense</a>, il &quot;dovere di corretta informazione&quot;, liberalizzato nel 2016 per quanto riguarda i mezzi (oggi puoi usare siti, blog, social), ma non per quanto riguarda i contenuti.
          </p>
          <p className="text-gray-700 mb-4">In pratica, per un sito di studio legale:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Niente nomi dei clienti:</strong> l&apos;avvocato non può indicare il nominativo dei propri clienti, neanche con il loro consenso. Niente loghi di aziende assistite, niente &quot;abbiamo difeso la società X&quot;. Le classiche pagine &quot;casi di successo&quot; che funzionano in altri settori, qui vanno ripensate: puoi raccontare il tipo di problema e come l&apos;hai affrontato, senza riferimenti che rendano riconoscibile il cliente.</li>
            <li><strong>Informazioni vere e non suggestive:</strong> niente &quot;il miglior divorzista di Milano&quot;, niente percentuali di cause vinte, niente promesse di risultato. Oltre al rischio disciplinare, sono anche frasi a cui nessuno crede più.</li>
            <li><strong>Niente offerte non richieste:</strong> inseguire con messaggi personalizzati chi ha appena avuto un problema (un incidente, un evento di cronaca) rischia di diventare accaparramento di clientela, vietato dall&apos;art. 37. I contenuti informativi sì; la caccia al cliente no.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            La SEO, qui, lavora dentro questi confini: titoli, struttura, contenuti utili, profilo Google, link. Il mio consiglio pratico è di far rileggere i testi del sito con il codice deontologico sotto mano, e nel dubbio chiedere al proprio Ordine.
          </p>

          {/* Alberatura */}
          <h2 className="text-3xl font-bold mb-6">Alberatura del sito: una pagina per ogni problema</h2>
          <p className="text-gray-700 mb-4">
            L&apos;errore più frequente che vedo sui siti degli studi è la pagina &quot;Aree di attività&quot; con un elenco puntato: diritto civile, diritto penale, diritto di famiglia, diritto del lavoro. Fine.
          </p>
          <p className="text-gray-700 mb-4">
            Il cliente non cerca &quot;diritto civile&quot;. Cerca &quot;come recuperare un credito da un cliente che non paga&quot;, &quot;avvocato per separazione consensuale&quot;, &quot;ricorso multa autovelox&quot;. Una struttura che funziona, di solito, è fatta così:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Una pagina per ogni area di pratica in cui lo studio lavora davvero: separazione e divorzio, licenziamenti, recupero crediti, sinistri stradali.</li>
            <li>Sotto ciascuna, le pagine sui problemi specifici più richiesti: affidamento dei figli, assegno di mantenimento, licenziamento per giusta causa.</li>
            <li>Una pagina per ogni avvocato, collegata alle aree di cui si occupa.</li>
            <li>Le guide del blog, collegate alla pagina dell&apos;area a cui si riferiscono.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            È la stessa logica che usavamo in AvvocatoFlash con le pagine &quot;area × città&quot;, solo in piccolo e con un vantaggio: dietro ogni pagina c&apos;è un avvocato vero che quella materia la pratica.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Attenzione</strong> a una tentazione: le pagine città fotocopia. Se lo studio è a Cosenza, creare &quot;avvocato divorzista Rende&quot;, &quot;avvocato divorzista Castrovillari&quot;, &quot;avvocato divorzista Paola&quot; cambiando solo il nome del paese non funziona. Per Google sono pagine quasi duplicate, e una piattaforma con migliaia di pagine come quelle ti batte comunque. Una pagina per un&apos;altra città ha senso solo se lì hai una sede, un collaboratore o una presenza vera (per esempio il tribunale dove patrocini più spesso).
          </p>
          <p className="text-gray-700 mb-12">
            Una nota su come si costruisce una struttura del genere. In AvvocatoFlash, nel 2020, le pagine &quot;area × città&quot; avevano URL piatte e lunghissime, tipo /specializzazioni/avvocato-separazione-con-figli-cernusco-sul-naviglio. Come team SEO abbiamo chiesto allo sviluppatore di riorganizzarle a cartelle: /diritto/avvocato-per-sfratto/treviso, prima la materia e poi la città. Più di mille pagine spostate, con i redirect 301 dalle vecchie URL alle nuove (l&apos;indicazione che dice a Google &quot;questa pagina si è trasferita qui, per sempre&quot;). Secondo le stime di SEOZoom, nei mesi successivi il traffico non è calato: ha continuato a crescere. Non è fortuna, è preparazione (ne parlo in <Link href="/seo/modificare-una-pagina-senza-perdere-il-posizionamento-seo/" className={linkClass}>come modificare una pagina senza perdere il posizionamento</Link>). E vale anche per uno studio che rifà il sito: se cambiano gli indirizzi delle pagine, la mappa dei redirect si prepara prima, non dopo.
          </p>

          {/* Profilo Google */}
          <h2 className="text-3xl font-bold mb-6">Il profilo dell&apos;attività su Google</h2>
          <p className="text-gray-700 mb-4">
            Per la maggior parte degli studi, questo è il punto da cui partire. Prima ancora del sito.
          </p>
          <p className="text-gray-700 mb-4">
            Quando qualcuno cerca &quot;avvocato&quot; più una città, o &quot;avvocato vicino a me&quot;, la mappa con tre risultati compare in alto. Per finirci dentro serve un profilo dell&apos;attività su Google:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>verificato, con il nome reale dello studio (non &quot;Studio Legale Rossi – Avvocato Divorzista Separazioni Cosenza&quot;: riempire il nome di keyword è contro le <a href="https://support.google.com/business/answer/3038177?hl=it" target="_blank" rel="noopener noreferrer" className={linkClass}>linee guida di Google</a>, e i concorrenti possono segnalarlo);</li>
            <li>con la categoria giusta (Google ne ha di specifiche: avvocato divorzista, avvocato del lavoro, avvocato penalista, e così via) e le categorie secondarie per le altre aree;</li>
            <li>con orari aggiornati, foto vere dello studio e delle persone, il link alla pagina del sito più pertinente;</li>
            <li>con un profilo per ogni sede, se lo studio ne ha più di una.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Per gli studi associati c&apos;è una possibilità in più: Google consente anche profili individuali per i singoli professionisti che ricevono clienti. Va valutata caso per caso, perché il rischio è di farsi concorrenza da soli.
          </p>

          {/* Recensioni */}
          <h2 className="text-3xl font-bold mb-6">Recensioni: il segreto professionale vale anche su Google</h2>
          <p className="text-gray-700 mb-4">
            Le recensioni pesano molto nella scelta di un avvocato, forse più che in altri settori: affidi a uno sconosciuto un problema delicato, e vuoi sapere com&apos;è andata agli altri.
          </p>
          <p className="text-gray-700 mb-4">
            Due problemi tipici. Il primo: chi ha vinto una causa raramente ha voglia di raccontarlo in pubblico, mentre chi l&apos;ha persa a volte sì. Il secondo: rispondere a una recensione negativa è difficile, perché non puoi entrare nel merito della vicenda senza violare il segreto professionale.
          </p>
          <p className="text-gray-700 mb-4">Cosa fare:</p>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
            <li>Chiedere la recensione al momento giusto, a fine incarico, quando il cliente è soddisfatto. Senza insistere e senza offrire niente in cambio.</li>
            <li>Rispondere a tutte, anche alle negative, con tono professionale e senza mai citare dettagli del caso. &quot;Ci dispiace per la sua esperienza, siamo disponibili a parlarne in studio&quot; è già tanto.</li>
            <li>Non comprare recensioni e non scriverle da sé. Oltre alle regole di Google, c&apos;è il codice deontologico.</li>
          </ul>

          {/* Contenuti */}
          <h2 className="text-3xl font-bold mb-6">Contenuti: rispondere alle domande che senti in studio</h2>
          <p className="text-gray-700 mb-4">
            Il blog di uno studio legale può portare tanto traffico qualificato. In AvvocatoFlash le guide erano una parte importante del traffico, e le più lette non erano quelle sui grandi principi del diritto: erano quelle sui problemi concreti. &quot;Come fare se il datore di lavoro non concede la malattia&quot;, per esempio.
          </p>
          <p className="text-gray-700 mb-4">
            Le domande vere le senti ogni giorno, al telefono e in studio: &quot;Posso cambiare città con i figli dopo la separazione?&quot;, &quot;Quanto tempo ho per contestare un licenziamento?&quot;, &quot;Il condominio può vietarmi di affittare su Airbnb?&quot;. Il mio consiglio è sempre lo stesso: per un mese, segnati le domande che ricevi più spesso. È un piano editoriale già pronto, e nessun tool di keyword research te lo darà così preciso.
          </p>
          <p className="text-gray-700 mb-4">Due regole:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Spiegare senza dare la consulenza:</strong> la guida spiega come funziona e quali sono i termini; per il caso concreto, invita a parlarne con un avvocato. Non è solo prudenza: è la ragione per cui il lettore ti contatta.</li>
            <li><strong>Scrivere per chi legge, non per i colleghi:</strong> &quot;ex art. 2119 c.c.&quot; va bene, ma subito dopo va spiegato cosa vuol dire per la persona che ha appena ricevuto la lettera di licenziamento.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Un&apos;ultima cosa. Sulle domande generiche (&quot;cos&apos;è la separazione consensuale&quot;) Google mostra sempre più spesso l&apos;AI Overview, il riassunto generato dall&apos;IA in cima ai risultati, e molti si fermano lì. Un motivo in più per scrivere ciò che l&apos;IA non può riassumere in tre righe: come vanno davvero le cose nel tuo tribunale, quanto durano davvero certi procedimenti, cosa chiedono davvero i giudici della tua zona.
          </p>

          {/* Dati strutturati */}
          <h2 className="text-3xl font-bold mb-6">Inserire i dati strutturati</h2>
          <p className="text-gray-700 mb-4">
            I dati strutturati non sono un fattore di posizionamento diretto, ma aiutano Google a capire chi sei e cosa fai. Per uno studio legale <a href="https://schema.org/" target="_blank" rel="noopener noreferrer" className={linkClass}>Schema.org</a> ha un tipo dedicato:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong><a href="https://schema.org/LegalService" target="_blank" rel="noopener noreferrer" className={linkClass}>LegalService</a></strong> per lo studio e per ogni sede (con indirizzo, orari, area servita). Esiste anche il tipo Attorney, ma Schema.org lo considera superato e consiglia LegalService.</li>
            <li><strong>Person</strong> per ogni avvocato, con ruolo, Ordine di appartenenza e collegamento allo studio.</li>
            <li><strong>Article</strong> per le guide, collegate al loro autore.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            <strong>Attenzione:</strong> non aspettarti stelline o box speciali nei risultati di ricerca. Il loro valore è rendere coerenti e leggibili per le macchine le stesse informazioni di affidabilità di cui parlavo prima. E oggi le macchine non sono solo Google, sono anche i motori di risposta basati sull&apos;IA.
          </p>

          {/* Link */}
          <h2 className="text-3xl font-bold mb-6">Link da altri siti</h2>
          <p className="text-gray-700 mb-4">
            I link restano uno dei fattori di posizionamento più importanti. Uno studio legale ha occasioni che un&apos;azienda normale non ha:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Ordini, associazioni e scuole forensi:</strong> convegni, corsi di formazione, commissioni. Le pagine degli eventi riportano i nomi dei relatori, spesso con il link.</li>
            <li><strong>Giornali locali:</strong> un commento su una sentenza che riguarda il territorio, un approfondimento su una nuova legge. I giornalisti cercano esperti disponibili e chiari.</li>
            <li><strong>Riviste e portali giuridici:</strong> una nota a sentenza ben scritta dà autorevolezza agli occhi dei colleghi e di Google.</li>
            <li><strong>Università e associazioni di categoria:</strong> seminari, collaborazioni, sportelli informativi.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Quello che sconsiglio, in un settore YMYL, è comprare link a pacchetto da siti che parlano di tutto. Un sito legale linkato da blog di ricette e casinò online non sembra autorevole. Sembra sospetto.
          </p>

          {/* SEO e Ads */}
          <h2 className="text-3xl font-bold mb-6">SEO e Ads per uno studio legale</h2>
          <p className="text-gray-700 mb-4">
            <Link href="/google-ads-specialist/" className={linkClass}>Google Ads</Link> e <Link href="/meta-ads-specialist/" className={linkClass}>Meta Ads</Link> per gli avvocati funzionano, ma i clic sulle ricerche legali sono tra i più cari, perché la concorrenza (piattaforme comprese) è forte e il valore di un cliente è alto. Ogni clic si paga, che il visitatore diventi cliente o no.
          </p>
          <p className="text-gray-700 mb-12">
            Per questo la SEO ha un valore particolare: ogni contatto che arriva dalla mappa o da una guida è un contatto che non hai pagato. La strategia migliore, di solito, è usare le campagne Google Ads per le urgenze e i momenti caldi (infortunistica, penale, sfratti) e la SEO per costruire una presenza che resta.
          </p>

          {/* Misurare */}
          <h2 className="text-3xl font-bold mb-6">Come si misurano davvero i risultati</h2>
          <p className="text-gray-700 mb-4">
            Uno studio legale non vende online. Il cliente legge una guida, guarda le recensioni, magari torna dopo una settimana e chiama. Per questo bisogna misurare le micro-conversioni:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>telefonate dal sito e dal profilo Google;</li>
            <li>richieste di contatto e di appuntamento;</li>
            <li>clic su WhatsApp e su &quot;indicazioni stradali&quot;;</li>
            <li>visite alle pagine degli avvocati e delle aree di pratica.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            E poi c&apos;è la domanda più semplice di tutte, che molti studi non fanno: &quot;Come ci ha conosciuti?&quot;. Chiederlo al primo appuntamento, e segnarlo, vale quanto qualsiasi report di GA4.
          </p>

          {/* Errori */}
          <h2 className="text-3xl font-bold mb-6">Gli errori più comuni</h2>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
            <li><strong>Un&apos;unica pagina &quot;Aree di attività&quot; con un elenco puntato:</strong> Google non sa per cosa posizionarti, e il cliente nemmeno.</li>
            <li><strong>Pagine città fotocopia:</strong> cambiare solo il nome del paese non basta, e contro chi ne ha migliaia perdi comunque.</li>
            <li><strong>Avvocati senza volto:</strong> nessuna foto, nessuna bio, nessun riferimento all&apos;albo. In un settore YMYL è come presentarsi in udienza senza toga.</li>
            <li><strong>Guide senza autore e senza data:</strong> sulle norme che cambiano, una guida vecchia è peggio di nessuna guida.</li>
            <li><strong>Nomi dei clienti e &quot;casi vinti&quot; in vetrina:</strong> funzionano in altri settori, qui sono una violazione deontologica.</li>
            <li><strong>Ignorare il profilo Google:</strong> per la maggior parte degli studi, è la vetrina più vista. Più del sito.</li>
          </ul>

          {/* Conclusioni */}
          <h2 className="text-3xl font-bold mb-6">È possibile, quindi, arrivare in prima pagina Google per uno studio legale?</h2>
          <p className="text-gray-700 mb-4">
            Dipende. Su &quot;avvocato divorzista Milano&quot; secco, per uno studio singolo, onestamente è molto difficile: quelle ricerche sono presidiate da piattaforme con migliaia di pagine, anni di link e budget che uno studio non avrà mai. Lo dico con cognizione di causa, perché per tre anni ho lavorato proprio per renderle difficili. E diffida da chi ti promette il contrario.
          </p>
          <p className="text-gray-700 mb-4">
            Sulla mappa locale, sulle ricerche specifiche e su quelle che contengono il tuo nome, invece, sì. Ed è lì che ci sono i clienti che ti interessano davvero: quelli che cercano un avvocato vicino, che hanno un problema preciso, che vogliono sapere chi hanno davanti prima di chiamare.
          </p>
          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700 font-medium">Alla fine funziona come in tribunale. Google non ti dà ragione perché sei bravo. Te la dà se gli porti le prove: un indirizzo vero, persone vere, recensioni vere, risposte vere. E su quelle, nessuna piattaforma può farti concorrenza.</p>
          </div>
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
              <p className="text-gray-500 mb-4">Sito di studio legale con meno di 50 pagine</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 1000€</p>
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
              <p className="text-gray-500 mb-4">Sito di studio legale con meno di 50 pagine</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 1500€</p>
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
