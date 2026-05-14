export const categoryDescriptions: Record<string, string> = {
  'technical-seo': `
<p>La SEO tecnica è l'insieme delle procedure che rendono un sito scansionabile e indicizzabile per i motori di ricerca. Quindi rendere la vita migliore il più possibile agli algoritmi che, una volta trovate le tue risorse, le vedano facilmente, le indicizzino e le posizionino nelle prime pagine della ricerca, in modo tale da farti trovare dagli utenti interessati alla tua attività. Può essere un'attività complessa talvolta.</p>
<p>Soprattutto in presenza di siti molto ricchi di risorse, vale a dire migliaia di pagine, prodotti, tante categorie, tanti plug-in o librerie. Soprattutto questi ultimi strumenti, che dovrebbero agevolare l'esperienza degli utenti, aiutandoli a convertire meglio e più facilmente, dietro le quinte, invece, appesantiscono di molto l'infrastruttura, rendendo la scansione estremamente complessa e, di conseguenza, comportando la cattiva reputazione dei motori di ricerca che si affretteranno a scaraventare il sito in fondo alle ricerche, dove gli utenti non ti troveranno mai (o quasi).</p>
<h2>Controllo dell'hosting</h2>
<p>Una volta acquistato il dominio, tieni in considerazione che già in quell'istante comincia la parte tecnica. Il perché è semplice: scegliere un ottimo hosting che abbia determinate caratteristiche e un'ottima assistenza, ti sarà di grande aiuto in futuro. Innanzitutto puoi controllare come è strutturato il Cpanel, ovvero il pannello di controllo per gestire le grandi operazioni del sito. A livello di SEO tecnica, alcuni hosting offrono soluzioni molto interessanti. Ad esempio la possibilità di:</p>
<ul>
<li>passare direttamente alla versione HTTPS o trasferire il sito da HTTP ad HTTPS con un click e il redirect massivo compreso</li>
<li>gestire i redirect da www a non-www (e viceversa) con un click</li>
<li>avere sottodomini gratuiti</li>
<li>analizzare i problemi del log per capire se si è vittima di un attacco spam o scansioni di bot "strani" o di URL con parametri</li>
<li>bloccare gli IP dannosi o sospetti</li>
<li>comprimere il sito con un click, tramite la Gzip compression che agisce nell'htaccess utilizzando il mod_deflate</li>
<li>incrementare la velocità della risposta del web server tramite l'uso di CDN</li>
<li>testare il tempo di risposta del server (TTFB) e intervenire in caso di troppa lentezza</li>
</ul>
<p>Alcuni di questi strumenti e file sono utilissimi prima che nasca il sito, altri si possono configurare dopo che il sito è online. E infatti la vera partita dell'impostazione SEO tecnica, si gioca proprio sul backend del sito.</p>
<h2>Operazioni tecniche sul sito</h2>
<p>Se utilizzi un CMS, la prima che ti consiglio è quella di comprare un template leggero ed aggiornato. Questo renderà meno faticoso il lavoro di velocità di caricamento del sito. Una volta scaricato, imposta immediatamente la struttura dei permalink. Ricordati che l'impostazione che piace ai motori di ricerca sono le url parlanti. Quindi niente simboli strani come "?" o simili. Se vuoi, puoi aggiungere le categorie nel percorso URL, ad esempio:</p>
<pre>"www.per-seo.it/seo-tecnica/articolo-esempio-tecnico/"</pre>
<p>Conseguentemente, utilizzare un plug-in o framework per la SEO come Rank Math per Wordpress o Next.js per i siti in javascript. Per Joomla puoi scegliere tra diverse estensioni, ma alcune funzioni base, come i meta dati e i url "friendly", sono già presenti dalla versione 3. Una volta scaricata l'estensione, il plug-in o il framework, è necessario andare a settare alcune impostazioni generali. O meglio assicurarsi che siano impostate di default, altrimenti correggere subito, come:</p>
<ul>
<li>Meta robots impostati su index-follow</li>
<li>Verifica Allow degli User-Agent settati nel robots.txt</li>
<li>Verifica impostazioni di default del .htaccess (o del nginx.conf in presenza del web server Nginx)</li>
<li>Verifica impostazioni della sitemap e se l'URL è alla fine del robots.txt e se l'URL è raggiungibile con status code 200</li>
<li>Verifica se ci sono redirect di default.</li>
</ul>
<p>Bene, se tutte queste operazioni sono corrette, puoi cominciare a mettere mano sul sito aggiungendo contenuti, immagini, video, form di contatto e tutto quello che ti serve per rendere il tuo sito perfettamente utilizzabile dagli utenti.</p>
<p>*Anche se è una parte che riguarda il contenuto, però inserire la gerarchia degli Headings nelle pagine e negli articoli, ha soprattutto il suo effetto nei motori di ricerca quando scansionano queste risorse. Perciò, ricorda:</p>
<ol>
<li><strong>H1</strong> sono i titoli delle pagine, nel quale inserire la parola chiave/entità principale,</li>
<li><strong>H2</strong> sono i titoli delle sottosezioni/paragrafi, dove andrai ad approfondire meglio le entità e i concetti chiave,</li>
<li><strong>H3</strong> sono i sottoparagrafi dove andrai a sviluppare meglio i "sottoconcetti" introdotti nei paragrafi.</li>
</ol>
<p>Quindi, <strong>MAI</strong> scrivere i paragrafi di un articolo o sezioni di una pagina in grassetto. I motori di ricerca hanno bisogno di titoli, non di parole semplicemente "ingrassate".</p>
<h2>Consigli tecnici per aumentare la velocità</h2>
<p>Molte volte, non rendendoti conto, potresti appesantire di molto il sito. Come? Tramite immagini molto pesanti, plug-in o estensioni che hanno con sé un bagaglio di codice "sporco" e pesante. Quindi, per facilitare il caricamento del sito:</p>
<ul>
<li>Utilizzare immagini sotto i 100kb e in formati recenti come WebP</li>
<li>Minimizzare Javascript e Css</li>
<li>Rimuovere Javascript e Css inutilizzati</li>
<li>Attivare una memorizzazione della cache aggiungendo gli Expires Headers</li>
<li>Pre-caricare alcuni font</li>
<li>Ridurre i codici di terze parti (consiglio di utilizzare Google Tag Manager e aggiungere lì i tag come Analytics e il Pixel di Facebook e non inserirli nel sito nei diversi file php) ecc…</li>
</ul>
<p>È bene sottoporre il sito a scansione periodicamente, tramite Google Page Speed o premendo il tasto destro del mouse su una pagina qualsiasi del tuo sito, cliccando su "Ispeziona" e una volta aperta la tab, nella barra dove trovi "Elements, Console" ecc…c'è anche la sezione "Lightouse". Clicca lì ed esegui l'analisi della pagina.</p>
<h2>Consigli tecnici per i siti creati non utilizzando i CMS</h2>
<p>Probabilmente utilizzare un framework Javascript potrebbe essere un problema, perché i motori di ricerca non possono leggere il contenuto generato dinamicamente da JavaScript e, se non si prendono le dovute precauzioni, non leggeranno l'HTML della pagina, ma solo una piccola parte di codice che non riusciranno ad interpretare perché sprovvista di contenuto. Quindi, non ci potrà essere un'indicizzazione corretta.<br />
La cosa da fare è: eseguire il rendering (il processo in cui la parte dell'algoritmo di Google, il <strong>Web Rendering Service (WRS)</strong>) prima. Il pre-rendering nel web server, appunto. Lì, il bot sarà in grado di leggere l'HTML completo, generato dalla pagina web.<br />
Per fare ciò:</p>
<ul>
<li>I siti creati in React, possono utilizzare l'ottimo framework: Next.js</li>
<li>Mentre quelli creati in Vue.js possono scegliere tra Nuxt o Quasar</li>
<li>Angular ha al suo interno la tecnologia Universal</li>
</ul>
<p>Quindi, se si hanno le giuste precauzioni, anche con Javascript è possibile riuscire a indicizzare e posizionare ottimamente i propri siti web.</p>
<h2>Come funziona tecnicamente la ricerca Google</h2>
<p>Una volta terminato il sito, vorresti vederlo pubblicato nei risultati dei motori di ricerca, giustamente. Vediamo insieme quali sono e come funzionano le fasi che portano il tuo sito alla notorietà sulla SERP (le pagine dei risultati di ricerca):</p>
<h3>1- Scansione</h3>
<p>In genere è Google che trova direttamente i siti da scansionare, quindi non dovrebbero esserci problemi, ma se il tuo sviluppatore ha impostato qualcosa di sbagliato, allora il crawler potrebbe non riuscire a scovarlo. Cosa controllare?</p>
<ul>
<li>Che il sito non sia stato messo in no-index</li>
<li>Che il sito sia scansionabile dal robots.txt</li>
<li>Che il crawler possa eseguire il rendering se siamo in presenza di javascript.</li>
</ul>
<p>Attenzione! Il tuo sito, se è stato pubblicato da pochissimo (parliamo di qualche ora o qualche giorno) è normale che ancora i motori di ricerca non l'abbiano ancora scansionato. Pazienta un attimo. Nel frattempo, registrati su Search Console e vedi quali possano essere i problemi che incontrano i motori di ricerca.</p>
<h3>2- Indicizzazione</h3>
<p>Una volta che la scansione è finita e, il crawler recupera gli URL inseriti nel sito tramite i link, inizia l'indicizzazione. Ovvero inserisce tutte queste informazioni che immagazzina nel suo archivio.</p>
<p><strong>Nota importante!</strong> Se il sito è indicizzato non vuol dire che è visibile nei risultati di ricerca ancora. Vuol dire, invece, che il sito è stato memorizzato nel grande database di Google. Quindi, siamo ancora "dietro le quinte".</p>
<h3>3- Pubblicazione</h3>
<p>Puoi stare più sereno una volta che Google e gli altri motori di ricerca, sceglieranno di pubblicare il tuo sito nelle loro pagine dei risultati di ricerca. In quest'ultima fase, se un utente esegue una ricerca e, se i motori di ricerca lo riterranno opportuno, il tuo sito potrebbe apparirgli per quella determinata parola.</p>
<h2>Cosa controllare periodicamente?</h2>
<p>Una volta pubblicato e posizionato, è bene eseguire quasi sempre un controllo sull'andamento del sito per capire in tempo se dovessero sorgere problemi tecnici di ogni tipo. Abbiamo alcuni strumenti per farlo:</p>
<p><strong>La Search Console</strong><br />Strumento imprescindibile per ogni tecnico della SEO, da qui puoi vedere, innanzitutto:</p>
<ul>
<li>Se ci sono pagine non indicizzate e il relativo motivo</li>
<li>Se la sitemap è inviata correttamente e i motori di ricerca hanno problemi nelle periodiche letture</li>
<li>Se ci sono penalizzazioni manuali da risolvere</li>
<li>Se la versione mobile offre una buona esperienza all'utente</li>
<li>Se i Core Web Vitals presentano problemi o meno</li>
</ul>
<h3>Screaming Frog</h3>
<p>Strumento per eccellenza per capire se all'interno del sito ci sono problemi tecnici, come: errori 4xx e 5xx, contenuti duplicati, link rotti, redirect, presenza o meno di canonical, presenza o meno di hreflang, meta tag duplicati o assenti…</p>
<h2>Aggiornarsi sugli aggiornamenti algoritmici</h2>
<p>Devi tenere sempre d'occhio gli aggiornamenti dell'algoritmo di Google. Molti di questi, non ti creeranno nessun problema, ma altri potrebbero interessarti e avvisarti su quali modifiche apportare immediatamente al sito. Ma avere contenuti freschi, aggiornati, di qualità e autorevoli e mantenere tutte le operazioni descritte finora sul sito, in uno stato ottimale, faranno da scudo al tuo sito, permettendoti di resistere anche ad un core algoritmico più pesante.</p>
<h2>Conclusione</h2>
<p>Non lasciarti spaventare dalla SEO tecnica. Come diceva Tom Hanks in "<strong>Philadelphia</strong>":</p>
<blockquote><em>"Ogni problema ha una soluzione. Ogni problema ha una soluzione."</em></blockquote>
<p>Se il sito è configurato bene e i motori di ricerca non hanno alcun tipo di problema, non devi preoccuparti. E se dovessero presentarsi errori e piccole penalizzazioni manuali, datti un po' di tempo. Correggi le eventuali anomalie e torna più forte in SERP.</p>
<p>Qui troverai delle piccole guide che approfondiscono ciò che ho scritto qui sopra. Dacci un'occhiata e, in caso, fammi sapere.</p>
`,

  'copywriting': `
<p>Scrivere per il Web è diventato quasi lo sport nazionale. Tutti si definiscono Copywriter o tali. Ma cos'è la SEO copywriting? È tanto distante da scrivere per un giornale cartaceo o per un'agenzia pubblicitaria? Bhe, è naturale che alcune cose cambiano, ma la regola base è sempre la stessa:</p>
<p><strong>Scrivere correttamente in italiano.</strong></p>
<h2>Chi è la/il SEO copywriter?</h2>
<p>È una/un professionista che redige contenuti testuali al fine di rendere visibile al massimo ciò che scrive agli utenti del web. Attraverso la generazione di articoli di qualità, un sito web acquista autorevolezza e fiducia nei lettori. Inoltre, avrà un numero sempre maggiore di visitatori che, una volta entrati sul sito/blog/rivista, compiranno alcune azioni come:</p>
<ul>
<li>lasciare un abbonamento mensile o annuale,</li>
<li>condividere l'articolo sui social,</li>
<li>commentare l'articolo,</li>
<li>cliccare su alcuni banner,</li>
<li>iscriversi ad una newsletter,</li>
</ul>
<p>Come avrai notato, alcune di queste azioni, portano un vantaggio economico al sito. Ma la mission primaria è sempre quella di informare e, mai, manipolare gli algoritmi dei motori di ricerca per posizionare meglio le proprie pagine online. Una volta conquistata, <strong>con naturalezza</strong>, la fiducia dei lettori, saranno loro stessi a premiare i tuoi contenuti compiendo una, o più, azioni sopra descritte.</p>
<p>È bene ribadire anche in questa sede che i SEO copywriter non sono solo i professionisti che scrivono per i giornali online, ma sono anche coloro che perfezionano ed ottimizzano i testi per un e-commerce o siti vetrina per una determinata attività/servizio.</p>
<h2>Capire ed anticipare il Search Intent</h2>
<p>Gli intenti di ricerca non sono altro che le ragioni che spingono gli utenti a digitare una query nelle barre di ricerca dei motori di ricerca o nelle barre dei browser. Le tre macrocategorie in cui possiamo dividere le intenzioni di ricerca sono:</p>
<ul>
<li>L'intento di ricerca informazionale</li>
<li>L'intento di ricerca transazionale</li>
<li>L'intento di ricerca navigazionale</li>
</ul>
<p>L'intento informazionale è quando un utente ricerca qualcosa sul WEB per ottenere un'informazione. Questo intento è molto caro, ovviamente ai giornali e alle riviste online.</p>
<p>L'intento transazionale, invece, capita quando un utente digita una query con l'intenzione di compiere un'azione. Che sia l'acquisto di un bene materiale, di un servizio, di un'iscrizione ad una newsletter, una candidatura per un lavoro, il download di un software o di una guida ecc…</p>
<p>Il navigazionale si verifica quando un utente va direttamente al sito specifico bypassando i motori di ricerca. Ciò avviene quando si ha una brand awareness estremamente forte. Conoscere la distinzione tra queste tre tipologie, è fondamentale per la redazione di contenuti testuali del proprio sito.</p>
<h2>Come Google valuta i contenuti</h2>
<p>All'inizio abbiamo il crawler che si accorge o da solo o tramite la sitemap della novità di un sito. Che sia un sito completamente nuovo o un vecchio sito che carica una pagina nuova, il meccanismo è sempre lo stesso. Il bot scarica le pagine web che trova, dopodiché, se ritiene le pagine "degne" di essere inserite nel suo database o indice, in seguito, probabilmente, potrà decidere di pubblicarle e, infine, rankarle come risultati pertinenti per determinate query cercate dagli utenti. Per ottenere un buon ranking, Google valuta oltre 200 fattori che concorrono alla sua posizione nelle SERP (le pagine dei risultati di ricerca).</p>
<h2>Perché Google può decidere di escludere pagine dall'indicizzazione?</h2>
<p>A parte i blocchi del no-index o del robots.txt, i motivi per escludere alcune pagine dall'indexing possono risiedere nella qualità del contenuto. Se molte pagine del tuo sito hanno un contenuto molto povero e scarno, Google può scegliere di non metterle nel proprio database e, di conseguenza, non vedere mai la luce nei risultati di ricerca.</p>
<p>Quello che ti consiglio è avere sempre un ottimo programmatore e un ottimo SEO al tuo fianco, insieme ad ottimi copywriters che scrivano contenuti autorevoli, della giusta lunghezza, di qualità e veritieri.</p>
<h2>Formattazione del testo in chiave SEO</h2>
<p>Ci sono alcune regole da rispettare quando si scrive in ottica SEO. Questa è una di quelle pratiche che differenziano il web copywriting dalla scrittura offline. Possiamo cominciare con gli Headings.</p>
<h3>Headings</h3>
<ol>
<li>Utilizzare l'H1 per il titolo dell'intera pagina o articolo. La parola chiave principale deve essere inserita qui.</li>
<li>Gli H2 devono avere la funzione di titoli dei paragrafi. Le parole chiavi secondarie devono essere contenute qui e descritte nel testo dei vari paragrafi.</li>
<li>Gli H3 bisogna attribuirli ai titoli dei sottoparagrafi e servono come "sotto-argomenti" per esplicare meglio i concetti più corposi o complessi dei paragrafi principali.</li>
<li>Si consiglia di usare un solo H1 per pagina, ma naturalmente il numero degli H2, H3 e così via, sarà molto di più.</li>
<li>Si consiglia di utilizzare non più di 10 parole per gli H (vale per tutti i titoli).</li>
</ol>
<h3>Meta tags</h3>
<p>I meta tags sono i titoli non visibili. Quelli che leggono i motori di ricerca "dietro le quinte". Vanno scritti nell'HTML della pagina o se si utilizza un CMS, basta un'estensione o plugin e il gioco è fatto.</p>
<h3>Tag Title</h3>
<p>Molte volte si lascia identico all'H1, perché anch'esso descrive il contenuto della pagina. Con la differenza che il titolo lo si vede non nella pagina, ma nei risultati di ricerca. Anche qui, bisogna inserire la parola chiave principale all'interno del titolo. Esso dev'essere lungo non più di 65 caratteri, compresi gli spazi.</p>
<img src="https://per-seo.it/wp-content/uploads/2023/03/title.png" alt="tag title" style="max-width:100%;height:auto;border-radius:8px;margin:16px 0;" />
<h3>Meta description</h3>
<p>A differenza degli Heading e del Tag Title, la meta description non contribuisce più al migliore posizionamento del sito. Molti SEO neanche scrivono più la meta description. Lasciano scegliere a Google quale porzione di testo inserire nei risultati di ricerca.</p>
<h3>Figure retoriche</h3>
<p>Allegorie, metafore, metonimie, ovvero tutto ciò che non descrive in maniera precisa e letterale quello di cui ti occupi, è meglio non scriverlo. Google e anche gli altri motori di ricerca, avrebbero difficoltà estreme a collocare il tuo sito in un determinato ambito e contesto semantico.</p>
<h2>Corpo del testo</h2>
<p>Molte volte ci si pone la domanda: ma quanto deve essere lungo il testo? Beh dipende da cosa dicono i tuoi competitor. Articoli di alcune tematiche potrebbero avere bisogno anche solo di 600 parole, ma se vuoi affrontare un argomento vasto per una parola chiave estremamente competitiva, allora lì il discorso cambia e potrebbero essere necessarie due o tremila parole.</p>
<p>Se, come abbiamo detto, il testo è molto lungo, non rendere la vista e la vita complicata ai tuoi utenti, inserendo un blocco di sole parole. Per quanto possa essere serio l'argomento, devi tentare di far rimanere più a lungo possibile le persone a leggere i tuoi contenuti. Tra un paragrafo e un altro, inserisci una foto, una infografica accattivante, ma anche un piccolo form di contatto.</p>
<p>I link interni ed esterni sono fondamentali nel corpo del testo, sia per far crescere i tuoi stessi articoli sia per far capire ai motori di ricerca che reputi un sito esterno importante e che può ampliare o approfondire la tematica che stai affrontando.</p>
<h2>Come scegliere le parole chiavi</h2>
<p>Se non sai come trovare le parole giuste, o meglio, quelle che vengono ricercate maggiormente dagli utenti, non ti preoccupare, ci sono ottimi tool che ti aiutano a scegliere le keywords giuste per i tuoi articoli:</p>
<h3>1- Google</h3>
<p>Perché non utilizzare lo strumento più ovvio di tutti?! Il motore di ricerca dà ottimi suggerimenti per le keywords correlate. Basta mettere nella barra di ricerca la parola chiave principale e Google, di sua sponte, crea la tendina con quelle secondarie. Così come andare in fondo alla prima pagina Google e vedere le "Ricerche correlate".</p>
<h3>2- Strumento di pianificazione delle parole chiavi di Google Ads</h3>
<p>È utile per scoprire sia idee nuove per alcuni termini a cui non avevi pensato, sia per scoprire gli esatti volumi di ricerca di una lista di parole chiavi che puoi importare in questo strumento.</p>
<h3>3- Seozoom</h3>
<p>Gli strumenti di Seozoom sono molto utili, oltre per vedere il volume di ricerca, ma anche per capire il grado di difficoltà ed opportunità per quelle keywords.</p>
<h3>4- Answer the public</h3>
<p>Se sei un giornalista, conoscerai molto meglio di me la regola delle 5w. Bene con questo tool, puoi vedere le tue parole chiavi con l'aggiunta delle domande: Chi, Quando, Perché, Dove, Che cosa.</p>
<h3>5- Keyword Surfer</h3>
<p>Non è un tool, ma una semplice estensione di Google Chrome che è estremamente comoda perché nella barra di ricerca Google, quando digiti una query, trovi affiancato il volume di ricerca e il CPC.</p>
<h2>La pertinenza e rilevanza</h2>
<p>La pertinenza è, sostanzialmente, il legame che una parola chiave ha nei confronti di una pagina che la rappresenta o dovrebbe rappresentarla. La rilevanza, è quanto importante sia, nel complesso e nel dettaglio, quella pagina rispetto a quella query, anche grazie ai link che ricevi da altri siti pertinenti.</p>
<h2>Architettura dei contenuti</h2>
<p>Avere una chiara idea di cosa e come pubblicare, renderà il tuo sito molto più funzionante rispetto ad un competitor. Una buona struttura del sito e dei contenuti del blog, può permettere agli utenti e ai motori di ricerca una fruibilità ed una esperienza utente agevole, chiara, pertinente e completa.</p>
<p>Il metodo migliore è quello dei silos. Cioè l'organizzare i contenuti del sito in modo gerarchico e strutturato. Ovvero sezioni che raggruppano i contenuti in base all'argomento trattato e che sono collegate tra loro tramite link interni.</p>
<img src="https://per-seo.it/wp-content/uploads/2023/03/xmind.png" alt="architettura dei contenuti" style="max-width:100%;height:auto;border-radius:8px;margin:16px 0;" />
<h3>Attento alla cannibalizzazione</h3>
<p>C'è però un aspetto da non sottovalutare: la questione della cannibalizzazione. Alcune volte è molto sottovalutata questa problematica, ma può portare perdite di traffico anche notevoli. In sostanza, quando si hanno due o più articoli molto simili, nei risultati di ricerca si comincia a concorrere per le stesse parole chiavi.</p>
<h2>I piani editoriali</h2>
<p>Una volta creata la struttura del sito, se vuoi che il sito si posizioni per più keywords e che il crawler di Google lo tenga d'occhio, devi per forza aprire un blog. Conviene adottare un piano editoriale definendo cosa pubblicare e con quale frequenza. Ad esempio:</p>
<ul>
<li>Ogni lunedì viene pubblicata un'intervista</li>
<li>Il martedì articolo di approfondimento</li>
<li>Il mercoledì una biografia di un esponente di quel settore</li>
<li>Il giovedì un articolo ma con intento transazionale</li>
</ul>
<p>Monitora sempre la rendita e l'efficacia del piano editoriale. Guarda la Search Console e attenziona il CTR per vedere se la percentuale tende ad alzarsi.</p>
<h2>La rivoluzione di ChatGPT</h2>
<p>Negli ultimi mesi non si parla d'altro che dell'intelligenza artificiale applicata al chatbot che parla con il linguaggio naturale degli esseri umani. Questo formidabile salto in avanti di qualità spaventa, ma incuriosisce. Come comportarsi?</p>
<p>Quello di GPT, è uno strumento potentissimo, sì, è vero: scrive codici, traduce lingue, crea videogiochi e app e i testi che produce, la maggior parte delle volte, sono esatti e veritieri. Ma manca una cosa: l'anima umana. Quando noi parliamo o scriviamo, utilizziamo metafore, allusioni, comparazioni, facciamo ironia, giochi di parole.</p>
<p>Sì, con i prompt giusti, l'AI inserisce anche figure retoriche o creatività, ma la mano umana è altro. Altro conto è prendere spunto da ciò che il tool ci fornisce e, dopo un'attenta analisi e revisione, caricarlo sul sito. Penso che sia uno strumento avanguardistico, ma un occhio ed un cervello umano per dare un'anima a quel contenuto, servirà sempre.</p>
`,

  'creativita-meta-ads': `
<p>Le Meta Ads rappresentano un'occasione ottima per scalare la propria attività. Con le strategie corrette, i pubblici in target e il budget adeguato, si possono creare combinazioni assolutamente vincenti che permetteranno di scegliere e raggiungere vari tipi di obiettivi di business. In una grande maggioranza di casi, l'obiettivo è la vendita. Che sia un servizio o un prodotto fisico, l'obiettivo "purchase" è quello più indicato.</p>
<p>Ma anche ottenere lead con i form creati direttamente da Ads manager, sono molto utilizzati. Altro conto è essere un'attività local che ha bisogno forse più di interazioni ai post che altro. Con quell'obiettivo si generano facilmente lead che si trasformano in potenziali clienti duraturi.</p>
<p><strong>Ma come si fa a battere la concorrenza</strong>? Che sia a livello locale, nazionale o regionale, ci sono vari fattori che Meta prende a parametri, tra cui il budget allocato alle campagne, la precisione del target, ma soprattutto le creatività. Comunicare meglio degli altri il nostro prodotto, permetterà all'algoritmo di Meta di raggiungere più persone.</p>
<h2>Il copy</h2>
<p>Partiamo dal copy, ovvero la parte testuale del post.</p>
<img src="https://per-seo.it/wp-content/uploads/2023/04/copy.png" alt="meta ads copy" style="max-width:100%;height:auto;border-radius:8px;margin:16px 0;" />
<p>Ci sono alcune buone pratiche da seguire (non proprio regole) tra cui:</p>
<ol>
<li><strong>Conoscere il pubblico di riferimento</strong>: usi e costumi, abitudini, orari di riferimento, gerghi linguistici;</li>
<li><strong>Utilizzare parole chiavi</strong>: anche qui, come nella SEO, è utile utilizzare termini più ricercati dagli utenti nella rete e sfruttarli appieno per catturare l'attenzione degli utenti anche su Facebook;</li>
<li><strong>Utilizzare termini "hook"</strong>: non sono termini adoperati da Capitan Uncino, ma sono quelli che catturano l'attenzione dell'utente, ad esempio: "limitato", "risparmia", "gratuito", "esclusivo", sottolineando i benefici del tuo prodotto/attività.</li>
<li><strong>Utilizzare gli Other Angle</strong>: Le other angle vengono utilizzate per presentare un prodotto o servizio sotto un'ottica diversa, evidenziando particolari caratteristiche o vantaggi che potrebbero essere rilevanti per una specifica fascia di pubblico.</li>
</ol>
<h2>La call to action</h2>
<p>È fondamentalmente la frase che invita gli utenti a compiere un'azione.</p>
<img src="https://per-seo.it/wp-content/uploads/2023/04/cta.png" alt="cta meta ads" style="max-width:100%;height:auto;border-radius:8px;margin:16px 0;" />
<p>Di solito, rispecchia l'obiettivo che si è preposti quando si è creata la campagna: se cliccata può linkare al sito oppure far apparire un modulo di contatto o ancora, far apparire Whatsapp o Messenger per ricevere messaggi. È importante, quindi, che sia chiara, coerente con il copy e con il servizio o attività che si sta proponendo.</p>
<h2>Il titolo</h2>
<p>Il titolo svolge un ruolo fondamentale nel determinare il successo di un annuncio, poiché è spesso la prima cosa che gli utenti vedono quando visualizzano un annuncio nelle Meta Ads.</p>
<img src="https://per-seo.it/wp-content/uploads/2023/04/titolo.png" alt="titolo meta ads" style="max-width:100%;height:auto;border-radius:8px;margin:16px 0;" />
<p>Non avrai molto spazio per scriverlo, quindi bisogna cercare di essere estremamente sintetici, ma efficaci. In buona sostanza bisogna riassumere in pochissime parole ciò che abbiamo descritto nel copy. Può essere descrittivo, ma anche persuasivo o allusivo.</p>
<h2>La description</h2>
<p>La description è un elemento importante che può fornire informazioni aggiuntive agli utenti, spingendoli a interagire con l'annuncio o a compiere l'azione desiderata.</p>
<img src="https://per-seo.it/wp-content/uploads/2023/04/description.png" alt="description meta ads" style="max-width:100%;height:auto;border-radius:8px;margin:16px 0;" />
<p>È solitamente più lunga del titolo, ma ha comunque uno spazio limitato. Perciò, è importante utilizzare parole ed espressioni chiare e coinvolgenti per massimizzare l'impatto del messaggio.</p>
<h2>Il visual</h2>
<p>Il cuore della pubblicità su Meta sono le immagini/video/caroselli, ovvero tutto ciò che è visivo. Ed è indubbio che è la prima cosa che colpisce gli utenti mentre stanno scrollando la home di Facebook o di Instagram. Per cui, è bene tenere presente alcuni consigli che possono aumentare l'engagement del pubblico:</p>
<ol>
<li><strong>Hook</strong>: il gancio che permetta lo stop dello scroll dell'utente attraverso una headline efficace o se è un video, un'anteprima di immagine che incuriosisca lo spettatore.</li>
<li><strong>Colori</strong>: aspetto molte volte sottovalutato, ma è bene ribadire che ogni colore provoca emozioni diverse. Ad esempio, il rosso può evocare un senso di urgenza o di energia, il blu può rappresentare fiducia o tranquillità, il verde può suggerire natura o freschezza. È importante bilanciare l'uso dei colori in modo da non creare un effetto visivo confusionario.</li>
<li><strong>Tipologie</strong>: si può scegliere di creare video interviste con il pattern interrupted, cioè il montaggio a scatti. Questo è incredibilmente utile per tenere alta l'attenzione degli utenti che tende ad assottigliarsi dopo gli 8 secondi di visualizzazione dei video.</li>
<li><strong>Formati</strong>: ogni immagine o video deve avere un suo formato, perché sia Facebook e Instagram utilizzano misure diverse, ma anche al loro interno, i due social, avranno misure diverse. Dipenderà dai posizionamenti scelti.</li>
</ol>
`,

  'strategie-meta-ads': `
<h2>Guide alle strategie Meta Ads</h2>
<p>Quando si parla di strategie di Meta Ads, si fa riferimento a quei trucchetti che coinvolgono molto spesso la scelta del pubblico di riferimento e le tipologie di contenuti multimediali e formati.<br />
Le due macro strategie usate sono le: DABA e le DPA.</p>
<p>Le DABA sono le inserzioni che non impostano gli interessi e dati demografici (quindi parliamo di pubblici freddi) e giocano sulle varie combinazioni di contenuti multimediali, testi principali, titoli e descrizioni.</p>
<p>Le DPA invece giocano sul riacchiappare gli utenti che hanno visitato o compiuto un'azione sul tuo e-commerce.</p>
<h2>Strategie di pubblico</h2>
<p>La scelta del pubblico è fondamentale per le Meta Ads. Molti pensano che una volta impostata l'età, l'area geografica dove far apparire le nostre inserzioni, gli interessi del target di riferimento, sia fatta. Mi spiace, ma non è così. Ci sono alcuni tipi di pubblico a cui rivolgerci:</p>
<ul>
<li><strong>Il pubblico Freddo</strong>: ancora non conosce l'attività che stiamo promuovendo, quindi dovremmo utilizzare un linguaggio di presentazione.</li>
<li><strong>Il pubblico tiepido</strong>: ha interagito con il nostro sito, ma non ha compiuto azioni importanti. La creazione di inserzioni efficaci su questo tipo di pubblico, è fondamentale per tentare di portarlo a compiere un'azione sul nostro sito.</li>
<li><strong>Il pubblico caldo</strong>: è già un nostro cliente. Le inserzioni dedicate a questo target servono per mantenere alta la sua attenzione ed aumentare il LTV (lifetime value: ovvero il rapporto nel tempo che un cliente ha con la tua azienda. Più compra o usufruisce dei tuoi servizi, più questa metrica salirà).</li>
<li><strong>Il pubblico simile</strong>: di fondamentale importanza. I veri SMM conoscono bene questa tipologia di pubblico perché sanno che è estremamente redditizia ed efficace. In sostanza, se hai un elenco numeroso di clienti con i loro dati, puoi caricarlo nel Business Manager e utilizzarlo quando creerai le inserzioni. L'algoritmo di Meta raggiungerà le persone con interessi simili a quelle del tuo elenco.</li>
</ul>
<h2>Strategie del funnel</h2>
<p>Alcuni SMM raggiungono i loro obiettivi di conversioni dividendo il loro pubblico tra caldo, tiepido e freddo, altri utilizzano le fasce del funnel.<br />
Il funnel è, letteralmente, l'imbuto. La sua parte superiore è molto larga e poi tende a restringersi sempre di più.</p>
<p>Ecco le fasi del funnel:</p>
<ul>
<li><strong>TOFU</strong> = Top of the Funnel, la parte superiore. Le persone non conoscono ancora la tua azienda, quindi questa è la fase della consapevolezza.</li>
<li><strong>MOFU</strong> = Middle of the Funnel. Se hai impostato bene la fase TOFU, hai già colpito un po' di persone potenzialmente interessate. Siamo nella parte della familiarità e della considerazione.</li>
<li><strong>BOFU</strong> = Bottom of the Funnel, la parte inferiore. Le persone ti hanno conosciuto, considerato, apprezzato e, di conseguenza, sono pronte all'acquisto.</li>
</ul>
<p>Ovviamente, ci sono altre strategie che puoi creare da Ads Manager. Qui sotto verranno descritte nel dettaglio con esempi e casi studio. Tieni d'occhio questa sezione perché verrà aggiornata costantemente.</p>
`,
};
