import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'SEO per assicurazioni: agenzie e broker | Perseo',
  description: 'SEO per agenzie assicurative e broker: come farsi trovare su Google contro comparatori e compagnie online, tra local SEO, fiducia e regole IVASS.',
};

const ext = 'text-purple-600 hover:underline';

export default function SEOAssicurazioni() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'SEO per assicurazioni' }]} light />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SEO per assicurazioni
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            Come arrivare in prima pagina Google per un&apos;agenzia assicurativa o un broker
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
            Ogni anno, prima della scadenza della RC auto, la compagnia ti mette a disposizione l&apos;attestato di rischio con la tua classe di merito. Se sei in prima classe paghi poco. Se hai fatto un incidente con colpa risali di due classi e paghi di più. Se hai appena preso la patente parti dalla quattordicesima, e paghi tanto.
          </p>
          <p className="text-gray-700 mb-4">
            Ecco, la SEO per assicurazioni funziona più o meno così. Google assegna a ogni sito una specie di classe di merito: un sito nuovo parte dal fondo, ogni anno di contenuti utili e segnali di fiducia lo fa scendere di una classe, e ogni scorciatoia (link comprati, testi copiati, recensioni gonfiate) è un sinistro con colpa. Solo che qui non c&apos;è nessuna legge Bersani: la classe buona del sito di un parente non la puoi ereditare.
          </p>
          <p className="text-gray-700 mb-12">
            Questa pagina è pensata soprattutto per chi le polizze le vende sul territorio: agenti monomandatari e plurimandatari, subagenti, broker. Le compagnie hanno budget e problemi diversi, e ne parlo poco.
          </p>

          {/* Analisi */}
          <h2 className="text-3xl font-bold mb-6">Analisi</h2>
          <p className="text-gray-700 mb-4">
            La prima cosa da fare, come sempre, è capire chi sei e dove vuoi arrivare. Nelle assicurazioni sembra semplice, ma le situazioni di partenza sono molto diverse.
          </p>
          <p className="text-gray-700 mb-4">
            Un agente monomandatario vende i prodotti di una sola compagnia. Spesso ha già un sito, magari fornito dalla compagnia stessa, con regole precise su logo, colori e testi. Un plurimandatario può confrontare più compagnie, e questo è il suo argomento di vendita principale. Un broker lavora per il cliente, non per la compagnia, e di solito punta più sulle aziende e sui professionisti che sui privati.
          </p>
          <p className="text-gray-700 mb-4">
            Tre profili, tre strategie. Il monomandatario deve distinguersi da tutte le altre agenzie della stessa compagnia. Il plurimandatario deve spiegare perché conviene passare da lui invece che da un comparatore online. Il broker deve farsi trovare da un&apos;azienda che ha un rischio preciso da coprire e non sa a chi chiedere.
          </p>
          <p className="text-gray-700 mb-12">
            Se parti senza questa distinzione, finisci a scrivere l&apos;ennesimo articolo su &quot;cos&apos;è la RC auto&quot;, e la RC auto a quel punto la vendono gli altri.
          </p>

          {/* Competitor */}
          <h2 className="text-3xl font-bold mb-6">Chi ti ruba la prima pagina</h2>
          <p className="text-gray-700 mb-4">
            Cerca &quot;preventivo assicurazione auto&quot; su Google. Prima trovi gli annunci a pagamento, poi i comparatori (Facile.it, Segugio.it e simili), le compagnie dirette che vendono solo online, i siti delle grandi compagnie tradizionali. Un&apos;agenzia di Cosenza, in quella pagina, non c&apos;è. E non ci sarà.
          </p>
          <p className="text-gray-700 mb-4">
            Per darti un&apos;idea dei numeri, ho controllato su SEOZoom (dati di novembre 2026): &quot;assicurazione auto&quot; ha circa 246.000 ricerche al mese, &quot;preventivo assicurazione auto&quot; 49.500, &quot;assicurazione moto&quot; 40.500. La keyword difficulty (un punteggio da 0 a 100 che stima quanto è dura posizionarsi) di &quot;assicurazione auto&quot; è 70. Tradotto: un mare di gente e una concorrenza feroce.
          </p>
          <p className="text-gray-700 mb-4">
            Pensare di competere lì con il sito di un&apos;agenzia è, diciamo, ottimista. Ma per un agente o un broker la partita vera si gioca altrove:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Ricerche locali:</strong> &quot;agenzia assicurazioni Cosenza&quot;, &quot;assicurazione vicino a me&quot;, &quot;broker assicurativo Rende&quot;.</li>
            <li><strong>Ricerche di nicchia:</strong> &quot;polizza fideiussoria&quot; (1.900 ricerche al mese, keyword difficulty 38), &quot;assicurazione responsabilità civile professionale&quot; (480 ricerche, keyword difficulty 30). Meno volume, molta meno concorrenza, e dietro c&apos;è spesso un cliente che ha bisogno della polizza adesso.</li>
            <li><strong>Ricerche legate a un mestiere o a un settore:</strong> la polizza per il ristorante, per l&apos;impresa edile, per l&apos;azienda agricola, per il medico o l&apos;avvocato che deve rispettare un obbligo assicurativo.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Attenzione però a una cosa. Se cerchi su SEOZoom &quot;agenzia assicurativa&quot; trovi appena 260 ricerche al mese, e per &quot;agenzia assicurazioni Cosenza&quot; il tool non restituisce nemmeno un dato. Sembra una pessima notizia. Non lo è: i tool stimano male le ricerche locali a basso volume, e chi cerca &quot;assicurazione&quot; dallo smartphone vede comunque le agenzie vicine nella mappa di Google, anche senza scrivere la città. Zero nei tool non vuol dire zero clienti.
          </p>

          {/* YMYL */}
          <h2 className="text-3xl font-bold mb-6">Perché Google è più severo con chi vende polizze</h2>
          <p className="text-gray-700 mb-4">
            Google classifica alcuni argomenti come YMYL, Your Money or Your Life: tutto ciò che può incidere sulla salute, sulla sicurezza o sul portafogli delle persone. Le assicurazioni ci stanno dentro due volte: parlano di soldi e, spesso, di salute (polizze vita, infortuni, sanitarie).
          </p>
          <p className="text-gray-700 mb-4">
            Ne ho parlato anche nella pagina sulla <Link href="/consulente-seo/seo-banche-e-finanza/" className={ext}>SEO per banche e servizi finanziari</Link>, e il ragionamento è lo stesso.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <p className="text-gray-700 font-medium">Un consiglio sbagliato su un tostapane ti fa perdere 30 euro. Una polizza sbagliata la scopri solo quando hai il sinistro, cioè nel momento peggiore possibile.</p>
          </div>
          <p className="text-gray-700 mb-4">
            Per questo, sulle ricerche assicurative, Google alza l&apos;asticella su quello che chiama <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className={ext}>E-E-A-T</a> (Experience, Expertise, Authoritativeness, Trustworthiness, cioè esperienza, competenza, autorevolezza e affidabilità). E la &quot;T&quot;, la fiducia, è quella che pesa di più.
          </p>
          <p className="text-gray-700 mb-12">
            Tradotto in pratica: non basta scrivere bene. Devi dimostrare chi sei, chi ti controlla e cosa vendi davvero.
          </p>

          {/* E-E-A-T */}
          <h2 className="text-3xl font-bold mb-6">Come dimostrare a Google che ci si può fidare di te</h2>
          <p className="text-gray-700 mb-4">
            Chi distribuisce polizze in Italia parte avvantaggiato, perché ha un&apos;identità verificabile per legge. Agenti, broker e collaboratori sono iscritti al RUI, il Registro Unico degli Intermediari assicurativi tenuto dall&apos;<a href="https://www.ivass.it/" target="_blank" rel="noopener noreferrer" className={ext}>IVASS</a> (l&apos;Istituto per la vigilanza sulle assicurazioni). Il numero di iscrizione è pubblico, e chiunque può controllarlo sul sito dell&apos;IVASS.
          </p>
          <p className="text-gray-700 mb-4">
            Il problema è che molti siti lo nascondono in un footer scritto in corpo 8, insieme alla partita IVA. Peccato, perché è esattamente il tipo di segnale che Google cerca. Ecco cosa non può mancare:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Pagina &quot;Chi siamo&quot; vera:</strong> persone con nome, cognome, foto e ruolo. L&apos;agente titolare, i collaboratori, chi segue i sinistri. Non &quot;un team di professionisti al tuo servizio&quot;.</li>
            <li><strong>Numero di iscrizione al RUI:</strong> per l&apos;agenzia e per ogni collaboratore, con il link alla pagina dell&apos;IVASS dove verificarlo.</li>
            <li><strong>Compagnie rappresentate:</strong> per un plurimandatario è un elenco che dà fiducia. Per un broker, le collaborazioni con le compagnie e con i grandi broker.</li>
            <li><strong>Autore su ogni contenuto:</strong> chi ha scritto la guida alla polizza per i professionisti? Se è l&apos;agente che le vende da vent&apos;anni, dillo, con una breve bio.</li>
            <li><strong>Data di aggiornamento:</strong> le regole cambiano, e una guida scritta prima di un obbligo di legge diventa sbagliata il giorno dopo.</li>
            <li><strong>Reclami e informative:</strong> come fare un reclamo, i riferimenti dell&apos;IVASS e dell&apos;Arbitro Assicurativo, le informazioni che il Regolamento IVASS n. 40 del 2018 chiede di rendere disponibili anche sul sito. Sono comunque obbligatorie: tanto vale che siano chiare e facili da trovare.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            <strong>Attenzione:</strong> niente scorciatoie. Recensioni inventate, &quot;migliori tariffe garantite&quot; o qualifiche che non hai, in un settore vigilato, non sono solo un rischio SEO. Sono un rischio con l&apos;IVASS.
          </p>

          {/* Alberatura */}
          <h2 className="text-3xl font-bold mb-6">Alberatura del sito</h2>
          <p className="text-gray-700 mb-4">
            Prima di mettere mano al sito serve un&apos;analisi delle parole chiave, e da lì si costruisce il menu. L&apos;errore più frequente sui siti delle agenzie è un menu che ricalca il listino della compagnia: &quot;Linea Persona&quot;, &quot;Linea Patrimonio&quot;, &quot;Soluzioni Impresa Plus&quot;. Sono nomi commerciali. Nessuno li cerca su Google.
          </p>
          <p className="text-gray-700 mb-4">
            Il cliente cerca &quot;assicurazione casa&quot;, &quot;polizza infortuni&quot;, &quot;assicurazione per il negozio&quot;. Una struttura che funziona, per un&apos;agenzia, di solito è divisa per tipo di cliente e poi per bisogno:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Privati e famiglie:</strong> auto e moto, casa, infortuni, salute, vita e risparmio, tutela legale.</li>
            <li><strong>Aziende:</strong> responsabilità civile, incendio e furto, flotte, polizze catastrofali, fideiussioni.</li>
            <li><strong>Professionisti:</strong> RC professionale per ogni categoria (medici, avvocati, ingegneri, commercialisti), con una pagina per ciascuna.</li>
            <li><strong>Sinistri:</strong> come si denuncia, cosa serve, chi ti segue. Ne parlo tra poco, perché è una pagina che quasi nessuno cura.</li>
            <li><strong>Sedi:</strong> una pagina per ogni ufficio o punto vendita, con contenuti propri.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Per un broker la struttura è simile, ma pesa di più la parte aziende: una pagina per settore (edilizia, trasporti, agricoltura, sanità privata) vale più di dieci pagine generiche sui &quot;rischi d&apos;impresa&quot;.
          </p>

          {/* Sito compagnia */}
          <h2 className="text-3xl font-bold mb-6">Il sito fornito dalla compagnia: comodo, ma non basta</h2>
          <p className="text-gray-700 mb-4">
            Molte compagnie danno ai propri agenti un sito pronto, tutto uguale: stessa struttura, stesse foto, stessi testi sui prodotti. Per l&apos;agente è comodo, perché non deve pensarci. Per la SEO è un problema.
          </p>
          <p className="text-gray-700 mb-4">
            Se cento agenzie della stessa compagnia hanno la stessa pagina &quot;Assicurazione casa&quot; con lo stesso testo, Google ne mostra una sola. Indovina quale (non la tua). Spesso nemmeno quella dell&apos;agenzia: mostra la pagina della compagnia, che ha più autorevolezza di tutte.
          </p>
          <p className="text-gray-700 mb-12">
            Le strade sono due. La prima: se il sito della compagnia permette di aggiungere contenuti propri (pagina agenzia, news, chi siamo), usali fino in fondo, con testi scritti da te e foto vere. La seconda: affiancare un sito tuo, rispettando le regole della compagnia sull&apos;uso del marchio. Prima di farlo, leggi bene il mandato e chiedi alla direzione cosa puoi e non puoi fare. Meglio una telefonata prima che una diffida dopo.
          </p>

          {/* Local */}
          <h2 className="text-3xl font-bold mb-6">Local SEO: la mappa vale più della prima pagina</h2>
          <p className="text-gray-700 mb-4">
            Per un&apos;agenzia, il risultato più prezioso non è il primo link blu. È la mappa con le tre attività che Google mostra quando qualcuno cerca &quot;assicurazione&quot; o &quot;agenzia assicurazioni&quot; vicino a sé.
          </p>
          <p className="text-gray-700 mb-4">
            Lì contano il profilo dell&apos;attività su Google e la pagina della sede sul sito. Qualche accortezza:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Categoria giusta:</strong> &quot;Agenzia assicurativa&quot; come principale, eventuali categorie secondarie solo se corrispondono a quello che fai davvero.</li>
            <li><strong>Nome reale:</strong> il nome dell&apos;agenzia come compare sull&apos;insegna. Aggiungere &quot;assicurazione auto economica Cosenza&quot; al nome è vietato dalle <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer" className={ext}>linee guida di Google</a> e rischia la sospensione del profilo.</li>
            <li><strong>Orari aggiornati:</strong> anche quelli estivi e dei festivi. Niente fa arrabbiare un cliente come trovare chiuso il giorno in cui gli scade la polizza.</li>
            <li><strong>Foto vere:</strong> l&apos;ufficio, l&apos;insegna, le persone. Non le foto di stock con la famiglia felice sul divano.</li>
            <li><strong>Link alla pagina della sede, non alla home:</strong> e la pagina sede deve avere contenuti suoi: chi ci lavora, come arrivarci, quali servizi ci sono davvero (consulenza aziende, gestione sinistri, rinnovi senza appuntamento).</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Se hai più uffici in paesi diversi, vale la stessa regola delle pagine filiale delle banche: se cambia solo il nome del paese, per Google sono pagine quasi duplicate, e non le posiziona.
          </p>

          {/* Intenzioni di ricerca */}
          <h2 className="text-3xl font-bold mb-6">Capire le diverse intenzioni di ricerca degli utenti</h2>
          <p className="text-gray-700 mb-6">
            Non tutte le ricerche &quot;assicurazione&quot; sono uguali. Dietro ci sono persone in momenti molto diversi, e ogni momento chiede un contenuto diverso.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intenzione informativa</h3>
              <p className="text-gray-700 mb-2">L&apos;utente sta cercando di capire. Non ha ancora deciso nulla.</p>
              <p className="text-gray-500 italic">&quot;Come funziona la classe di merito&quot;, &quot;cos&apos;è l&apos;attestato di rischio&quot;, &quot;polizza vita come funziona&quot;</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intenzione comparativa</h3>
              <p className="text-gray-700 mb-2">Ha ristretto il campo e vuole confrontare.</p>
              <p className="text-gray-500 italic">&quot;Kasko o mini kasko&quot;, &quot;agenzia o compagnia online&quot;, &quot;broker o agente assicurativo&quot;</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intenzione transazionale</h3>
              <p className="text-gray-700 mb-2">È pronto, o quasi. Qui si prendono i contatti.</p>
              <p className="text-gray-500 italic">&quot;Preventivo assicurazione casa Cosenza&quot;, &quot;RC professionale avvocato prezzo&quot;, &quot;agenzia assicurazioni aperta sabato&quot;</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Intenzione urgente</h3>
              <p className="text-gray-700 mb-2">Tipica delle assicurazioni, e vale oro.</p>
              <p className="text-gray-500 italic">&quot;Polizza scaduta cosa fare&quot;, &quot;come denunciare un sinistro&quot;, &quot;constatazione amichevole come si compila&quot;</p>
            </div>
          </div>
          <p className="text-gray-700 mb-12">
            Chi cerca queste ultime cose ha un problema adesso, spesso è agitato, e ha bisogno di qualcuno che gli risponda. Se trova sul tuo sito una pagina chiara, con un numero di telefono in evidenza, è molto probabile che diventi un cliente. Anche se non lo era.
          </p>

          {/* Contenuti */}
          <h2 className="text-3xl font-bold mb-6">Contenuti: rispondere prima di vendere</h2>
          <p className="text-gray-700 mb-4">
            Il blog di un&apos;agenzia può portare traffico molto qualificato. A una condizione: deve rispondere alle domande vere delle persone, non fare pubblicità travestita da articolo.
          </p>
          <p className="text-gray-700 mb-4">
            Le domande vere le senti ogni giorno allo sportello: &quot;Se presto la macchina a mio figlio e fa un incidente, chi paga?&quot;, &quot;La polizza casa copre i danni dell&apos;acqua del vicino?&quot;, &quot;Posso disdire la polizza vita prima della scadenza?&quot;. Il mio consiglio è sempre lo stesso: tieni un foglio in ufficio e scrivi le domande che ti fanno più spesso. Dopo un mese hai un piano editoriale che nessun tool di keyword research ti darà così preciso.
          </p>
          <p className="text-gray-700 mb-4">
            Poi ci sono le regole del gioco, che nel settore assicurativo sono più rigide del solito:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Niente promesse:</strong> &quot;risparmia il 40% sulla RC auto&quot; è un titolo che attira clic, e anche problemi. La pubblicità assicurativa deve essere corretta e coerente con i documenti della polizza.</li>
            <li><strong>Il set informativo resta quello:</strong> DIP, DIP aggiuntivo e condizioni di assicurazione sono documenti regolati. Si spiegano con parole semplici in una pagina a parte, non si riscrivono per metterci le keyword.</li>
            <li><strong>Fonti citate:</strong> <a href="https://www.ivass.it/" target="_blank" rel="noopener noreferrer" className={ext}>IVASS</a>, <a href="https://www.ania.it/" target="_blank" rel="noopener noreferrer" className={ext}>ANIA</a>, i testi di legge. Linkare fonti ufficiali non ti toglie autorevolezza, te la dà.</li>
            <li><strong>Informazione separata dalla vendita:</strong> la guida spiega come funziona la mini kasko, poi, alla fine, dice che se vuoi un preventivo puoi chiamare. Non il contrario.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Un&apos;altra cosa sui contenuti informativi. Secondo SEOZoom, su quasi tutte le ricerche assicurative che ho controllato (da &quot;assicurazione auto&quot; ad &quot;attestato di rischio&quot;, da &quot;polizza vita&quot; a &quot;bonus malus&quot;) Google mostra già l&apos;AI Overview, il riassunto generato dall&apos;IA in cima ai risultati. Chi cerca la definizione generica spesso si ferma lì e non clicca. Un motivo in più per scrivere contenuti che l&apos;IA non può riassumere in tre righe: casi concreti, esempi di sinistri (anonimi), le domande che fanno davvero i tuoi clienti.
          </p>

          {/* Stagionalità */}
          <h2 className="text-3xl font-bold mb-6">Stagionalità e scadenze: il calendario delle ricerche</h2>
          <p className="text-gray-700 mb-4">
            Le assicurazioni hanno un vantaggio che pochi settori hanno: sai in anticipo quando la gente cercherà.
          </p>
          <p className="text-gray-700 mb-4">
            Su SEOZoom, &quot;assicurazione moto&quot; passa da circa 18.100 ricerche a dicembre a 74.000 a maggio, quando si tirano fuori le moto dal garage. &quot;Assicurazione casa&quot; ha il picco a luglio (33.100 ricerche, quasi il doppio della media). E poi ci sono le scadenze personali: la RC auto non si rinnova più in automatico, e dopo la scadenza ci sono solo 15 giorni di tolleranza. Ogni giorno qualcuno cerca &quot;polizza scaduta&quot; o &quot;periodo di tolleranza&quot;.
          </p>
          <p className="text-gray-700 mb-4">
            Il ragionamento pratico è semplice: i contenuti stagionali vanno pubblicati o aggiornati uno o due mesi prima del picco, non durante. Google ha bisogno di tempo per trovarli e posizionarli.
          </p>
          <p className="text-gray-700 mb-12">
            Lo stesso vale per i cambi di regole. Quando arriva un nuovo obbligo, come quello della polizza contro le catastrofi naturali per le imprese, per qualche mese le aziende cercano risposte e i grandi siti non hanno ancora scritto niente di utile. Un&apos;agenzia o un broker che pubblica subito una guida chiara, aggiornata e firmata può prendersi quelle ricerche prima dei colossi. Su SEOZoom &quot;polizza catastrofale&quot; risulta quasi a zero, ma è il solito limite dei tool sulle ricerche nuove: le aziende che dovevano mettersi in regola le domande le facevano eccome.
          </p>

          {/* Sinistri */}
          <h2 className="text-3xl font-bold mb-6">La pagina sinistri: il contenuto che tutti dimenticano</h2>
          <p className="text-gray-700 mb-4">
            Quasi tutti i siti di agenzia parlano di come comprare una polizza. Pochissimi spiegano bene cosa fare quando serve.
          </p>
          <p className="text-gray-700 mb-4">
            Eppure &quot;come denunciare un sinistro&quot; o &quot;constatazione amichevole come si compila&quot; sono ricerche fatte da persone con un problema in corso. Una pagina sinistri fatta bene ha:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>cosa fare subito, in pochi passi numerati (foto, dati dell&apos;altro conducente, testimoni, modulo CAI);</li>
            <li>i tempi per la denuncia e i documenti da preparare;</li>
            <li>chi ti segue in agenzia, con nome e numero diretto;</li>
            <li>le differenze tra i rami (auto, casa, infortuni), magari in pagine separate.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Questa pagina ha anche un effetto che va oltre la SEO: dice al potenziale cliente &quot;quando avrai bisogno, qui troverai qualcuno&quot;. Che, a ben vedere, è esattamente quello che compra chi sceglie un&apos;agenzia invece di un&apos;app.
          </p>

          {/* Dati strutturati */}
          <h2 className="text-3xl font-bold mb-6">Inserire i dati strutturati</h2>
          <p className="text-gray-700 mb-4">
            I dati strutturati non sono un fattore di posizionamento diretto, ma aiutano Google a capire chi sei e cosa offri. Per il settore assicurativo <a href="https://schema.org/" target="_blank" rel="noopener noreferrer" className={ext}>Schema.org</a> ha un tipo dedicato:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong><a href="https://schema.org/InsuranceAgency" target="_blank" rel="noopener noreferrer" className={ext}>InsuranceAgency</a></strong> per l&apos;agenzia o lo studio di brokeraggio e per le singole sedi (con indirizzo, orari, coordinate);</li>
            <li><strong><a href="https://schema.org/Service" target="_blank" rel="noopener noreferrer" className={ext}>Service</a></strong> per descrivere le singole coperture offerte;</li>
            <li><strong>Person</strong> e <strong>Article</strong> per collegare ogni contenuto al suo autore, con le sue qualifiche (e il numero RUI).</li>
          </ul>
          <p className="text-gray-700 mb-12">
            <strong>Attenzione:</strong> non aspettarti stelline o box speciali nei risultati di ricerca per questi tipi. Il loro valore è un altro: rendere coerenti e leggibili per le macchine le stesse informazioni di affidabilità di cui parlavo prima. E oggi le macchine non sono solo Google, sono anche i motori di risposta basati sull&apos;IA.
          </p>

          {/* Tecnica */}
          <h2 className="text-3xl font-bold mb-6">Aspetti tecnici da non dimenticare</h2>
          <p className="text-gray-700 mb-4">
            Un sito di agenzia è di solito piccolo, ma ha qualche trappola tipica.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
            <li><strong>Moduli di preventivo:</strong> se il preventivo si fa con un modulo esterno (spesso fornito dalla compagnia, dentro un iframe), Google non vede quel contenuto. La pagina che lo ospita deve avere un testo suo, che spiega cosa succede dopo l&apos;invio e in quanto tempo richiami.</li>
            <li><strong>Area riservata:</strong> le pagine di accesso clienti non devono finire nell&apos;indice. Si escludono con il tag noindex (un&apos;istruzione nel codice della pagina che dice a Google &quot;non mostrarmi nei risultati&quot;).</li>
            <li><strong>PDF:</strong> condizioni di polizza e informative spesso vengono indicizzati al posto della pagina del prodotto. Il PDF deve restare pubblico, ma va linkato dalla pagina del prodotto, che deve essere più completa e utile del PDF.</li>
            <li><strong>Velocità e mobile:</strong> chi cerca &quot;polizza scaduta cosa fare&quot; lo fa dallo smartphone, spesso in macchina (da passeggero, si spera). Pagine pesanti e banner dei cookie che coprono metà schermo lo fanno scappare.</li>
            <li><strong>Cambi di mandato e fusioni di agenzie:</strong> quando un&apos;agenzia cambia compagnia, nome o dominio, è una migrazione SEO a tutti gli effetti, con i redirect da preparare prima (ne parlo anche in <Link href="/seo/modificare-una-pagina-senza-perdere-il-posizionamento-seo/" className={ext}>come modificare una pagina senza perdere il posizionamento</Link>).</li>
          </ul>

          {/* Recensioni */}
          <h2 className="text-3xl font-bold mb-6">Recensioni: il momento giusto è dopo il sinistro</h2>
          <p className="text-gray-700 mb-4">
            Le agenzie hanno un vantaggio rispetto alle compagnie online: il cliente le conosce di persona. Ma hanno anche lo stesso problema di tutti: le recensioni le scrive soprattutto chi è arrabbiato. Rimborso in ritardo, rinnovo più caro, sinistro respinto.
          </p>
          <p className="text-gray-700 mb-4">Cosa fare:</p>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
            <li>Chiedere la recensione nel momento giusto. Non alla firma della polizza, quando il cliente non sa ancora come lavori. Dopo un sinistro gestito bene, quando ha visto davvero la differenza.</li>
            <li>Rispondere a tutte le recensioni, anche quelle negative, con tono professionale e senza mai entrare nei dettagli della pratica (i dati del cliente restano riservati anche su Google).</li>
            <li>Usare le recensioni come informazione: se dieci persone si lamentano dei tempi di risposta, forse il problema non è la SEO.</li>
          </ul>

          {/* Link */}
          <h2 className="text-3xl font-bold mb-6">Link da altri siti</h2>
          <p className="text-gray-700 mb-4">
            I link restano uno dei fattori di posizionamento più importanti. Un&apos;agenzia locale ha occasioni che un comparatore nazionale non ha:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Territorio:</strong> sponsorizzazioni sportive e culturali, convenzioni con associazioni di categoria, ordini professionali, circoli.</li>
            <li><strong>Partner naturali:</strong> concessionarie, carrozzerie, amministratori di condominio, commercialisti. Lavorate già insieme, una pagina &quot;partner&quot; sui rispettivi siti è il minimo.</li>
            <li><strong>Educazione assicurativa:</strong> incontri con le scuole o con le associazioni di imprese su temi concreti (cosa copre la polizza casa, come si gestisce un sinistro, cosa cambia con l&apos;obbligo catastrofale). Sono iniziative utili, e i siti che le raccontano linkano volentieri.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Quello che invece sconsiglio è comprare link a pacchetto da siti che parlano di tutto. Un&apos;agenzia assicurativa con link da blog di ricette e casinò online non sembra autorevole. Sembra sospetta.
          </p>

          {/* Misurare */}
          <h2 className="text-3xl font-bold mb-6">Come si misurano davvero i risultati</h2>
          <p className="text-gray-700 mb-4">
            Un&apos;agenzia non vende online come un e-commerce. La polizza si firma quasi sempre in ufficio o al telefono, giorni o settimane dopo la prima visita al sito. Per questo bisogna misurare le micro-conversioni:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>richieste di preventivo;</li>
            <li>clic su telefono, WhatsApp e indicazioni stradali;</li>
            <li>visite alla pagina sinistri e alle pagine sede;</li>
            <li>richieste di contatto dalle pagine prodotto.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            E una cosa che i tool non ti diranno mai: chiedi ai nuovi clienti come ti hanno trovato. Sembra roba da anni Novanta, ma in un settore dove molti rifiutano i cookie e cercano da un dispositivo per poi chiamare da un altro, è spesso il dato più affidabile che hai. Insieme a Search Console e al pannello del profilo dell&apos;attività su Google, che non dipendono dal consenso.
          </p>

          {/* SEO e Ads */}
          <h2 className="text-3xl font-bold mb-6">SEO e Ads: i clic costano cari</h2>
          <p className="text-gray-700 mb-4">
            Nelle assicurazioni la pubblicità su Google costa, perché ci sono compagnie e comparatori con budget enormi. Secondo le stime di SEOZoom, un clic su &quot;preventivo assicurazione auto&quot; costa in media 5,34 €, su &quot;rc auto&quot; 4,62 €, su &quot;polizza vita&quot; 3,68 €. Un clic, non un cliente.
          </p>
          <p className="text-gray-700 mb-12">
            Proprio per questo la SEO ha un valore particolare: ogni visita che arriva in modo organico su &quot;RC professionale ingegnere&quot; o &quot;polizza fideiussoria per affitto&quot; è una visita che non hai pagato. La strategia migliore, di solito, è usare le <Link href="/google-ads-specialist/" className={ext}>campagne Google Ads</Link> per i momenti caldi (la stagione delle moto, una nuova polizza obbligatoria, una promozione della compagnia) e la SEO per costruire una presenza che resta.
          </p>

          {/* Errori */}
          <h2 className="text-3xl font-bold mb-6">Gli errori più comuni</h2>
          <ul className="list-disc list-inside text-gray-700 mb-12 space-y-2">
            <li><strong>Usare solo i testi della compagnia:</strong> se cento agenzie hanno la stessa pagina, Google ne mostra una. E di solito è quella della compagnia.</li>
            <li><strong>Menu con i nomi commerciali dei prodotti:</strong> &quot;Linea Persona Plus&quot; non lo cerca nessuno.</li>
            <li><strong>Numero RUI nascosto o assente:</strong> in un settore vigilato è come presentarsi senza documento.</li>
            <li><strong>Nessuna pagina sinistri:</strong> è il contenuto che dimostra cosa fa un&apos;agenzia in più di un&apos;app.</li>
            <li><strong>Contenuti stagionali pubblicati in ritardo:</strong> la guida all&apos;assicurazione moto va online a marzo, non a maggio.</li>
            <li><strong>Keyword nel nome del profilo Google:</strong> rischi la sospensione proprio quando ti serve.</li>
          </ul>

          {/* Conclusioni */}
          <h2 className="text-3xl font-bold mb-6">È possibile, quindi, arrivare in prima pagina Google per un&apos;agenzia di assicurazioni?</h2>
          <p className="text-gray-700 mb-4">
            Dipende. Su &quot;assicurazione auto&quot; o &quot;preventivo RC auto&quot;, onestamente no: quelle ricerche sono presidiate da comparatori e compagnie con budget che un&apos;agenzia non avrà mai. E diffida da chi ti promette il contrario.
          </p>
          <p className="text-gray-700 mb-4">
            Sulle ricerche locali, di nicchia, stagionali e urgenti, invece, sì. Ed è lì che stanno i clienti che ti interessano davvero: l&apos;azienda che deve mettersi in regola, il professionista che cerca la sua RC, la persona con un sinistro appena successo che vuole parlare con qualcuno. Ci vuole tempo, perché in questo settore Google è prudente e la fiducia si costruisce lentamente.
          </p>
          <div className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700 font-medium">Come con la classe di merito: si scende un anno alla volta, senza sinistri. Ma una volta arrivati in prima classe, restarci costa molto meno che arrivarci.</p>
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
              <p className="text-gray-500 mb-4">Sito di agenzia assicurativa o broker con meno di 50 pagine</p>
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
              <p className="text-gray-500 mb-4">Sito di agenzia assicurativa o broker con meno di 50 pagine</p>
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
