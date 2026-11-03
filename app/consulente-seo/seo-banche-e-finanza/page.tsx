import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'SEO per banche e servizi finanziari | Perseo',
  description: 'SEO per banche, consulenti finanziari e mediatori creditizi: come posizionarsi su Google in un settore YMYL dove la fiducia conta più delle keyword.',
};

export default function SEOBancheFinanza() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'SEO per banche e finanza' }]} light />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEO per banche e servizi finanziari
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            Come arrivare in prima pagina Google per una banca, un consulente finanziario o un mediatore creditizio
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
            Quando apri un conto in banca, la prima cosa che ti chiedono non è quanto vuoi depositare. È un documento. Poi il codice fiscale, poi la residenza, poi da dove arrivano i soldi. Si chiama adeguata verifica, e nessuno ti apre un conto finché non sa chi sei.
          </p>
          <p className="text-gray-700 mb-4">
            Ecco, Google con i siti che parlano di soldi fa esattamente la stessa cosa. Prima di mandarti traffico su "mutuo prima casa" o "come investire i risparmi" vuole sapere chi sei, chi scrive, chi ti controlla e perché dovrebbe fidarsi. La SEO per banche e servizi finanziari parte da qui: prima ancora delle keyword, c'è da superare un'adeguata verifica.
          </p>
          <p className="text-gray-700 mb-12">
            Questa pagina vale per chi lavora nel settore bancario e finanziario in senso ampio: banche locali e di credito cooperativo, consulenti finanziari, mediatori creditizi, agenti in attività finanziaria, società di consulenza. I problemi cambiano un po' da caso a caso, la logica di fondo no.
          </p>

          {/* Analisi */}
          <h2 className="text-3xl font-bold mb-6">Analisi</h2>
          <p className="text-gray-700 mb-4">
            La prima cosa da fare, come sempre, è capire chi sei davvero e dove vuoi arrivare. Sembra banale, ma nel finanziario lo è meno che altrove.
          </p>
          <p className="text-gray-700 mb-4">
            Una banca di credito cooperativo con 15 filiali tra Cosenza e provincia non deve competere con le banche online su "conto corrente gratis". Non vincerebbe, e soprattutto non le serve: il suo cliente è il commerciante di Rende, l'azienda agricola della Sibaritide, la famiglia che vuole un mutuo e preferisce guardare in faccia chi glielo concede. Un consulente finanziario indipendente, invece, ha bisogno di farsi trovare da persone che magari non sono nella sua città ma cercano proprio quel tipo di consulenza. Un mediatore creditizio vive di richieste di mutuo e prestito: per lui ogni form compilato è fatturato.
          </p>
          <p className="text-gray-700 mb-12">
            Tre attività, tre strategie diverse. Se parti senza questa distinzione, finisci a scrivere articoli su "cos'è lo spread" che non porteranno mai un cliente in filiale.
          </p>

          {/* Competitor */}
          <h2 className="text-3xl font-bold mb-6">Chi ti ruba la prima pagina</h2>
          <p className="text-gray-700 mb-4">
            Cerca "mutuo prima casa" su Google e guarda chi c'è. Comparatori come MutuiOnline e Facile.it, le grandi banche nazionali, le banche online, i giornali economici. Siti con budget, autorevolezza e anni di link alle spalle.
          </p>
          <p className="text-gray-700 mb-4">
            Pensare di superarli sulle ricerche generiche è, diciamo, ottimista. Ma non è lì che si gioca la partita per una realtà locale o per un professionista. Si gioca su ricerche più specifiche, che quei colossi coprono male o non coprono affatto:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Ricerche locali:</strong> "mutuo prima casa Cosenza", "banca vicino a me aperta il sabato", "consulente finanziario Rende".</li>
            <li><strong>Ricerche di nicchia:</strong> "finanziamento per aziende agricole", "mutuo per giovani under 36 con contratto a tempo determinato", "prestito per partita IVA in regime forfettario".</li>
            <li><strong>Ricerche legate al territorio:</strong> bandi regionali, agevolazioni locali, accordi con i Confidi della zona.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Nell'analisi dei competitor, quindi, non guardare solo chi è primo. Guarda cosa manca. Spesso trovi SERP dove i risultati sono articoli generici scritti a Milano per un pubblico nazionale, e nessuno che risponda alla domanda di chi abita a 20 km da te.
          </p>

          {/* YMYL */}
          <h2 className="text-3xl font-bold mb-6">Perché Google è più severo quando si parla di soldi</h2>
          <p className="text-gray-700 mb-4">
            Google classifica alcuni argomenti come YMYL, Your Money or Your Life: tutto ciò che può incidere sulla salute, sulla sicurezza o sul portafogli delle persone. La finanza ci sta dentro con tutte le scarpe.
          </p>
          <p className="text-gray-700 mb-4">
            Ne ho parlato anche nella pagina sulla <Link href="/consulente-seo/seo-farmacie/" className="text-purple-600 hover:underline">SEO per farmacie</Link>, a proposito del Medic Update del 2018. Quell'aggiornamento è passato alla storia come "l'update della salute", ma ha colpito duro anche i siti di finanza: blog che promettevano rendimenti, guide ai prestiti scritte da chissà chi, siti di "trading facile" che sono spariti dalla sera alla mattina.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <p className="text-gray-700 font-medium">Un consiglio sbagliato su un tostapane ti fa perdere 30 euro. Un consiglio sbagliato su un mutuo o su un investimento ti può rovinare.</p>
          </div>
          <p className="text-gray-700 mb-4">
            Per questo, sulle ricerche finanziarie, Google alza l'asticella su quello che chiama <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">E-E-A-T</a> (Experience, Expertise, Authoritativeness, Trustworthiness, cioè esperienza, competenza, autorevolezza e affidabilità). E la "T", la fiducia, è quella che pesa di più.
          </p>
          <p className="text-gray-700 mb-12">
            Tradotto in pratica: in questo settore non basta scrivere bene. Devi dimostrare di essere chi dici di essere.
          </p>

          {/* E-E-A-T */}
          <h2 className="text-3xl font-bold mb-6">Come dimostrare a Google che ci si può fidare di te</h2>
          <p className="text-gray-700 mb-4">
            La buona notizia è che chi lavora nel finanziario regolamentato parte avvantaggiato. Una banca è iscritta all'albo della <a href="https://www.bancaditalia.it/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Banca d'Italia</a>. Un consulente finanziario è iscritto all'albo dell'<a href="https://www.organismocf.it/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">OCF</a> (l'Organismo di vigilanza e tenuta dell'albo unico dei consulenti finanziari). Un mediatore creditizio o un agente in attività finanziaria è iscritto negli elenchi dell'<a href="https://www.organismo-am.it/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">OAM</a>. Sono tutte informazioni pubbliche e verificabili.
          </p>
          <p className="text-gray-700 mb-4">
            Il problema è che molti siti le nascondono in un footer scritto in corpo 8, o non le mettono proprio. Peccato, perché sono esattamente i segnali di affidabilità che Google cerca. Ecco cosa non può mancare:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Pagina "Chi siamo" vera:</strong> persone con nome, cognome, foto e ruolo. Non "un team di professionisti al tuo servizio", che non dice niente a nessuno.</li>
            <li><strong>Iscrizioni e numeri di registrazione:</strong> albo, elenco OAM, codice ABI, partita IVA, con il link alla pagina pubblica dove verificarli.</li>
            <li><strong>Autore su ogni contenuto:</strong> chi ha scritto la guida al mutuo? Se è il responsabile crediti della filiale, dillo, con una breve bio e da quanti anni fa quel lavoro.</li>
            <li><strong>Data di aggiornamento:</strong> nel finanziario le informazioni scadono. Una guida sui tassi del 2022 oggi è sbagliata, e l'utente (e Google) se ne accorgono.</li>
            <li><strong>Contatti completi:</strong> indirizzo, telefono, email, PEC. E le pagine sui reclami e sull'<a href="https://www.arbitrobancariofinanziario.it/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Arbitro Bancario Finanziario</a>, che per una banca sono comunque obbligatorie: tanto vale che siano chiare e facili da trovare.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            <strong>Attenzione:</strong> niente scorciatoie. Biografie gonfiate, certificazioni inventate o recensioni comprate in questo settore non sono solo un rischio SEO. Sono un rischio legale.
          </p>

          {/* Alberatura */}
          <h2 className="text-3xl font-bold mb-6">Alberatura del sito</h2>
          <p className="text-gray-700 mb-4">
            Prima di mettere mano al sito serve un'analisi delle parole chiave, e da lì si costruisce il menu. L'errore più frequente che vedo sui siti delle banche è che l'alberatura ricalca l'organigramma interno, non il modo in cui cercano le persone.
          </p>
          <p className="text-gray-700 mb-4">
            Il cliente non cerca "Prodotti di finanziamento retail a medio-lungo termine". Cerca "mutuo", "prestito per la macchina", "anticipo fatture". Una struttura che funziona, per una banca, di solito è divisa per tipo di cliente e poi per bisogno:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Privati e famiglie:</strong> conti correnti, carte, mutui, prestiti personali, risparmio e investimenti, assicurazioni.</li>
            <li><strong>Imprese:</strong> conti business, finanziamenti, anticipo fatture, leasing, POS.</li>
            <li><strong>Settori specifici:</strong> agricoltura, professionisti, enti e associazioni (le banche del territorio spesso hanno prodotti dedicati, e sono oro per la SEO perché i grandi gruppi non li presidiano).</li>
            <li><strong>Filiali:</strong> una pagina per ciascuna, ne parlo tra poco.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Per un consulente finanziario o un mediatore il ragionamento è lo stesso, solo più snello: una pagina per ogni servizio (pianificazione previdenziale, passaggio generazionale, consulenza sul mutuo, surroga, cessione del quinto) invece di un'unica pagina "Servizi" con un elenco puntato.
          </p>

          {/* Filiali */}
          <h2 className="text-3xl font-bold mb-6">Pagine filiale: la local SEO che quasi nessuna banca fa bene</h2>
          <p className="text-gray-700 mb-4">
            Per una banca locale, le ricerche più preziose sono quelle con il nome di un paese o di un quartiere dentro. E qui si apre un mondo, perché nella maggior parte dei casi le pagine filiale sono tutte uguali: indirizzo, orari, numero di telefono. Cambia solo il nome del paese.
          </p>
          <p className="text-gray-700 mb-4">
            Per Google sono pagine quasi duplicate, e infatti non le posiziona. Una pagina filiale che funziona ha contenuti suoi:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>chi ci lavora (il direttore, i consulenti, con foto);</li>
            <li>i servizi davvero disponibili lì (cassa continua, consulenza imprese, cassette di sicurezza, ATM evoluto);</li>
            <li>come arrivarci, dove parcheggiare, accessibilità;</li>
            <li>le iniziative sul territorio (sponsorizzazioni, eventi, convenzioni con associazioni locali).</li>
          </ul>
          <p className="text-gray-700 mb-12">
            E poi c'è il profilo dell'attività su Google. Ogni filiale deve avere il suo, verificato, con orari aggiornati (anche quelli dei festivi: niente fa arrabbiare un cliente come trovare la filiale chiusa quando Google dice che è aperta), foto vere, categoria corretta e il link alla pagina filiale, non alla home del sito.
          </p>

          {/* Intenzioni di ricerca */}
          <h2 className="text-3xl font-bold mb-6">Capire le diverse intenzioni di ricerca degli utenti</h2>
          <p className="text-gray-700 mb-6">
            Non tutte le ricerche "mutuo" sono uguali. Dietro ci sono persone in momenti molto diversi, e ogni momento chiede un contenuto diverso.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intenzione informativa</h3>
              <p className="text-gray-700 mb-2">L'utente sta cercando di capire. Non ha ancora deciso nulla.</p>
              <p className="text-gray-500 italic">"Come funziona il mutuo", "cos'è il TAEG", "cosa succede ai miei soldi se la banca fallisce"</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intenzione comparativa</h3>
              <p className="text-gray-700 mb-2">Ha ristretto il campo e vuole confrontare.</p>
              <p className="text-gray-500 italic">"Mutuo tasso fisso o variabile", "conto corrente online o in filiale", "consulente finanziario indipendente o bancario"</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intenzione transazionale</h3>
              <p className="text-gray-700 mb-2">È pronto, o quasi. Qui si prendono i contatti.</p>
              <p className="text-gray-500 italic">"Mutuo prima casa Cosenza", "aprire conto corrente aziendale", "consulente finanziario appuntamento"</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intenzione navigazionale</h3>
              <p className="text-gray-700 mb-2">Cerca già te.</p>
              <p className="text-gray-500 italic">"Banca Rossi filiale Rende orari", "Banca Rossi IBAN", "Banca Rossi home banking accesso"</p>
            </div>
          </div>
          <p className="text-gray-700 mb-12">
            Quest'ultima sembra la più facile, ma attenzione: se una persona cerca il login dell'home banking e trova un risultato confuso, o peggio un sito di phishing che ti imita, il danno è doppio. Presidiare bene le ricerche sul proprio marchio, nel finanziario, è anche una questione di sicurezza.
          </p>

          {/* Contenuti */}
          <h2 className="text-3xl font-bold mb-6">Contenuti: informare senza promettere</h2>
          <p className="text-gray-700 mb-4">
            Il blog di una banca o di un consulente può portare tantissimo traffico qualificato. A una condizione: deve rispondere alle domande vere delle persone, non fare pubblicità travestita da articolo.
          </p>
          <p className="text-gray-700 mb-4">
            Le domande vere sono tante, e spesso molto concrete: "Posso chiedere un mutuo se ho appena cambiato lavoro?", "Conviene estinguere il prestito in anticipo?", "Quanto costa davvero un conto corrente in un anno?". Chi lavora allo sportello le sente ogni giorno. Il mio consiglio è sempre lo stesso: fatti dare dai consulenti l'elenco delle dieci domande che ricevono più spesso. È un piano editoriale già pronto, e nessun tool di keyword research te lo darà così preciso.
          </p>
          <p className="text-gray-700 mb-4">
            Poi ci sono le regole del gioco, che nel finanziario sono più rigide del solito:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Niente promesse di rendimento:</strong> "fai fruttare i tuoi risparmi del 7%" non è un titolo, è un problema. Con la compliance e con Google.</li>
            <li><strong>Numeri sempre datati:</strong> se citi un tasso, scrivi a quando si riferisce. I tassi cambiano a ogni riunione della <a href="https://www.ecb.europa.eu/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">BCE</a>, il tuo articolo no (a meno che qualcuno non lo aggiorni).</li>
            <li><strong>Fonti citate:</strong> <a href="https://www.bancaditalia.it/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Banca d'Italia</a>, <a href="https://www.consob.it/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Consob</a>, <a href="https://www.abi.it/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">ABI</a>, <a href="https://www.istat.it/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Istat</a>. Linkare fonti ufficiali non ti "toglie" autorevolezza, te la dà.</li>
            <li><strong>Informazione separata dalla vendita:</strong> la guida spiega come funziona la surroga, poi, alla fine, dice che se vuoi valutarla puoi prendere un appuntamento. Non il contrario.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            C'è poi un aspetto che i colossi nazionali non possono copiare: il territorio. Un articolo su come funzionano le agevolazioni regionali per le imprese calabresi, scritto da chi quelle pratiche le segue davvero, vale più di dieci guide generiche sull'inflazione.
          </p>

          {/* Simulatori */}
          <h2 className="text-3xl font-bold mb-6">Simulatori e strumenti: il contenuto che si fa linkare da solo</h2>
          <p className="text-gray-700 mb-4">
            Il calcolatore della rata del mutuo è uno dei contenuti più cercati e più linkati del settore. Lo stesso vale per il calcolo della rata del prestito, della cessione del quinto, del rendimento di un piano di accumulo.
          </p>
          <p className="text-gray-700 mb-4">
            Funzionano per due motivi. Rispondono perfettamente a un'intenzione di ricerca ("calcolo rata mutuo") e sono utili, quindi altri siti li citano spontaneamente.
          </p>
          <p className="text-gray-700 mb-12">
            Due accortezze. La prima: il simulatore non deve essere l'unica cosa nella pagina. Sotto ci va un testo che spiega come si legge il risultato, cosa cambia tra TAN e TAEG (TAN è il tasso "puro" sul capitale, TAEG include anche spese e costi accessori) e perché la rata reale può essere diversa. La seconda: se il simulatore mostra tassi e costi, deve rispettare le stesse regole di trasparenza della pubblicità, con le ipotesi di calcolo ben visibili.
          </p>

          {/* Compliance */}
          <h2 className="text-3xl font-bold mb-6">Trasparenza e compliance: quello che la SEO non può toccare</h2>
          <p className="text-gray-700 mb-4">
            Qui c'è un punto che molti SEO sottovalutano. Nel settore bancario e finanziario ci sono testi e documenti che non si possono "ottimizzare" a piacimento.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Fogli informativi e documenti di sintesi:</strong> sono obbligatori e hanno contenuti regolati dalla normativa sulla trasparenza bancaria. Non si riscrivono per metterci le keyword.</li>
            <li><strong>Pubblicità del credito ai consumatori:</strong> se un annuncio indica un tasso o una cifra relativa al costo del credito, deve indicare anche il TAEG e le altre informazioni previste dall'<a href="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1993-09-01;385~art123" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">art. 123 del Testo Unico Bancario</a>. Vale anche per i banner e, in molti casi, per le pagine prodotto.</li>
            <li><strong>Avvertenze sugli investimenti:</strong> rischi, costi, "i rendimenti passati non sono indicativi di quelli futuri". Restano, anche se allungano la pagina.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            La SEO, qui, lavora intorno: titoli, struttura, contenuti di supporto, collegamenti interni. Il consiglio pratico è coinvolgere la compliance dall'inizio, non alla fine. Mi è capitato di vedere progetti fermi per mesi perché l'ufficio legale ha visto i testi solo a sito finito.
          </p>
          <p className="text-gray-700 mb-12">
            Un problema tecnico tipico: i PDF dei fogli informativi. Google li indicizza, e capita che sulla ricerca "conto corrente Banca Rossi" esca prima un PDF di 12 pagine che la pagina del prodotto. L'utente apre il PDF, non trova un pulsante, non trova un contatto, e se ne va. La soluzione non è nasconderli (devono restare pubblici e accessibili), ma indicare a Google qual è la pagina principale con un <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">canonical nell'intestazione HTTP</a> del PDF (un'indicazione che si imposta lato server e dice a Google "la versione da mostrare è quest'altra pagina") e linkare il PDF dalla pagina prodotto, non viceversa.
          </p>

          {/* Dati strutturati */}
          <h2 className="text-3xl font-bold mb-6">Inserire i dati strutturati</h2>
          <p className="text-gray-700 mb-4">
            I dati strutturati non sono un fattore di posizionamento diretto, ma aiutano Google a capire chi sei e cosa offri. Per il settore finanziario <a href="https://schema.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Schema.org</a> ha tipi dedicati:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong><a href="https://schema.org/BankOrCreditUnion" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">BankOrCreditUnion</a></strong> per la banca e le singole filiali (con indirizzo, orari, coordinate);</li>
            <li><strong><a href="https://schema.org/FinancialService" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">FinancialService</a></strong> per consulenti, mediatori e società di servizi finanziari;</li>
            <li><strong><a href="https://schema.org/LoanOrCredit" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">LoanOrCredit</a></strong> e <strong><a href="https://schema.org/MortgageLoan" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">MortgageLoan</a></strong> per descrivere prodotti come prestiti e mutui;</li>
            <li><strong>Person</strong> e <strong>Article</strong> per collegare ogni contenuto al suo autore, con le sue qualifiche.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            <strong>Attenzione:</strong> non aspettarti stelline o box speciali nei risultati di ricerca per questi tipi. Il loro valore è un altro: rendere coerenti e leggibili per le macchine le stesse informazioni di affidabilità di cui parlavo prima. E oggi le macchine non sono solo Google, sono anche i motori di risposta basati sull'IA.
          </p>

          {/* Tecnica */}
          <h2 className="text-3xl font-bold mb-6">Aspetti tecnici da non dimenticare</h2>
          <p className="text-gray-700 mb-4">
            Un sito bancario ha qualche complicazione tecnica in più rispetto a un sito normale.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
            <li><strong>Area riservata e home banking:</strong> le pagine di login, recupero password e area clienti non devono finire nell'indice. Si escludono con il tag noindex (un'istruzione nel codice della pagina che dice a Google "non mostrarmi nei risultati"), non solo con il robots.txt.</li>
            <li><strong>Sicurezza:</strong> HTTPS ovunque, senza contenuti misti, certificati aggiornati. Per un sito di banca un avviso di "connessione non sicura" è un disastro di immagine, prima ancora che SEO.</li>
            <li><strong>Velocità e mobile:</strong> sempre più persone cercano filiale, orari e IBAN dallo smartphone, spesso in fretta. Pagine pesanti e banner dei cookie che coprono metà schermo fanno scappare tutti.</li>
            <li><strong>Migrazioni:</strong> le banche si fondono, cambiano nome, rifanno il sito. Ogni fusione è una migrazione SEO, con mappe di redirect da preparare con mesi di anticipo. Sottovalutarla significa perdere in un giorno il traffico costruito in anni (ne parlo anche in <Link href="/seo/modificare-una-pagina-senza-perdere-il-posizionamento-seo/" className="text-purple-600 hover:underline">come modificare una pagina senza perdere il posizionamento</Link>).</li>
          </ul>

          {/* Recensioni */}
          <h2 className="text-3xl font-bold mb-6">Recensioni: le filiali sono il bersaglio preferito</h2>
          <p className="text-gray-700 mb-4">
            Le banche hanno un problema con le recensioni: le scrive soprattutto chi è arrabbiato. Carta bloccata, coda allo sportello, bonifico in ritardo. Il cliente soddisfatto, invece, non ci pensa nemmeno.
          </p>
          <p className="text-gray-700 mb-4">
            Il risultato è che molte filiali hanno una media di 2 stelle anche quando lavorano bene. E quella media è la prima cosa che vede chi cerca "banca vicino a me". Cosa fare:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
            <li>Rispondere a tutte le recensioni, anche quelle negative, con tono professionale e senza mai entrare nel merito di dati personali o rapporti specifici (il segreto bancario vale anche su Google).</li>
            <li>Chiedere la recensione nel momento giusto: dopo la firma del mutuo, dopo una consulenza andata bene, non a caso.</li>
            <li>Usare le recensioni come informazione: se dieci persone si lamentano degli orari, forse il problema non è la SEO.</li>
          </ul>

          {/* Link */}
          <h2 className="text-3xl font-bold mb-6">Link da altri siti</h2>
          <p className="text-gray-700 mb-4">
            I link restano uno dei fattori di posizionamento più importanti, e nel finanziario quelli giusti valgono doppio. La buona notizia è che una realtà locale ha occasioni che un sito nazionale non ha:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Educazione finanziaria:</strong> incontri nelle scuole, serate con le associazioni di categoria, il <a href="https://www.quellocheconta.gov.it/attivita/mese-delleducazione-finanziaria/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Mese dell'educazione finanziaria</a> che si tiene ogni anno in autunno (nel 2026 a novembre). Sono iniziative utili davvero, e i siti che le raccontano (scuole, comuni, giornali locali) linkano volentieri.</li>
            <li><strong>Territorio:</strong> sponsorizzazioni sportive e culturali, convenzioni con ordini professionali e associazioni, partnership con i Confidi.</li>
            <li><strong>Dati e ricerche:</strong> un'analisi sull'andamento dei mutui in provincia, fatta con i propri dati aggregati e anonimi, interessa ai giornali locali molto più di un comunicato stampa.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Quello che invece sconsiglio, in questo settore più che in altri, è comprare link a pacchetto da siti che parlano di tutto. Un sito di finanza che riceve link da blog di ricette e casinò online non sembra autorevole. Sembra sospetto.
          </p>

          {/* Misurare */}
          <h2 className="text-3xl font-bold mb-6">Come si misurano davvero i risultati</h2>
          <p className="text-gray-700 mb-4">
            Una banca non vende online come un e-commerce. Le conversioni vere avvengono quasi sempre in filiale o al telefono, settimane dopo la prima visita al sito. Per questo bisogna misurare le micro-conversioni:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>richieste di appuntamento;</li>
            <li>simulazioni completate;</li>
            <li>clic su telefono, WhatsApp e indicazioni stradali;</li>
            <li>richieste di contatto da pagine prodotto;</li>
            <li>visite alle pagine filiale.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            E bisogna mettere in conto che in questo settore i dati sono incompleti. Molti utenti rifiutano i cookie, molti cercano da un dispositivo e poi chiamano da un altro. Search Console e il pannello del profilo dell'attività su Google, che non dipendono dal consenso, diventano fonti preziose quanto GA4.
          </p>

          {/* SEO e Ads */}
          <h2 className="text-3xl font-bold mb-6">SEO e Ads: nel finanziario ancora più complementari</h2>
          <p className="text-gray-700 mb-4">
            Google Ads e Meta Ads hanno regole specifiche per i servizi finanziari: restrizioni sui contenuti, requisiti di trasparenza, limiti al targeting su alcuni prodotti di credito. Fare pubblicità resta possibile, ma è più complicato e costoso che in altri settori, e i costi per clic sulle parole chiave del credito sono tra i più alti in assoluto.
          </p>
          <p className="text-gray-700 mb-12">
            Proprio per questo la SEO ha un valore particolare: ogni visita che arriva in modo organico su "surroga mutuo" o "prestito per ristrutturazione" è una visita che non hai pagato a peso d'oro. La strategia migliore, di solito, è usare le <Link href="/google-ads-specialist/" className="text-purple-600 hover:underline">campagne Google Ads</Link> per i prodotti e i momenti caldi (una nuova offerta, un periodo dell'anno) e la SEO per costruire una presenza che resta.
          </p>

          {/* Errori */}
          <h2 className="text-3xl font-bold mb-6">Gli errori più comuni</h2>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
            <li><strong>Copiare le schede prodotto dalla capogruppo o dal fornitore:</strong> se tutte le banche dello stesso gruppo hanno lo stesso testo, Google ne mostra una sola. Indovina quale (non la tua).</li>
            <li><strong>Pagine filiale tutte uguali:</strong> cambiare solo il nome del paese non basta.</li>
            <li><strong>Contenuti senza autore e senza data:</strong> nel settore YMYL è come presentarsi in filiale senza documento.</li>
            <li><strong>Tassi e condizioni non aggiornati:</strong> oltre al problema SEO, c'è quello di trasparenza.</li>
            <li><strong>Lasciare il blog al tirocinante:</strong> rispetto per i tirocinanti, ma la guida al mutuo deve passare almeno dalle mani di chi i mutui li fa.</li>
            <li><strong>Ignorare la ricerca sul proprio marchio:</strong> se su "nome banca + login" esce un risultato strano, è un problema di sicurezza oltre che di immagine.</li>
          </ul>

          {/* Conclusioni */}
          <h2 className="text-3xl font-bold mb-6">È possibile, quindi, arrivare in prima pagina Google per una banca o un consulente finanziario?</h2>
          <p className="text-gray-700 mb-4">
            Dipende. Su "mutuo" o "conto corrente" secco, per una banca locale, onestamente no: quelle ricerche sono presidiate da colossi con budget che una BCC o uno studio di consulenza non avranno mai. E diffida da chi ti promette il contrario.
          </p>
          <p className="text-gray-700 mb-4">
            Sulle ricerche locali, di nicchia e legate al territorio, invece, sì. Ed è lì che stanno i clienti che ti interessano davvero: quelli che vogliono parlare con una persona, che cercano una banca o un consulente vicino, che hanno un bisogno preciso. Ci vuole tempo, perché in questo settore Google è prudente e la fiducia si costruisce lentamente, ma una volta costruita è difficile da scalzare.
          </p>
          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700 font-medium">Alla fine funziona come allo sportello. Google ti apre il conto solo dopo l'adeguata verifica. E chi si presenta con documenti in regola, persone vere e informazioni chiare non deve convincerlo: deve solo farsi riconoscere.</p>
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
              <p className="text-gray-500 mb-4">Sito di banca locale o studio di consulenza con meno di 50 pagine</p>
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
              <p className="text-gray-500 mb-4">Sito di banca locale o studio di consulenza con meno di 50 pagine</p>
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
