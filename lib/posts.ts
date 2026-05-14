// Blog posts data
export interface Post {
  slug: string;
  title: string;
  category: string;
  subcategory?: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  sections?: PostSection[];
}

export const categoryMeta: Record<string, { name: string; parent?: string }> = {
  'analisi-dei-dati':      { name: 'Analisi dei dati' },
  'google-ads':            { name: 'Google Ads' },
  'seo':                   { name: 'SEO' },
  'technical-seo':         { name: 'Guide alla SEO tecnica',               parent: 'seo' },
  'cms-framework':         { name: 'CMS/Framework',                        parent: 'seo' },
  'copywriting':           { name: 'Guide alla SEO copywriting',            parent: 'seo' },
  'seo-off-page':          { name: 'SEO off-page',                         parent: 'seo' },
  'meta-ads':              { name: 'Meta Ads' },
  'creativita-meta-ads':   { name: 'Guide alle creatività per le Meta Ads', parent: 'meta-ads' },
  'strategie-meta-ads':    { name: 'Guide alle strategie Meta Ads',         parent: 'meta-ads' },
};

export interface PostSection {
  type: 'heading' | 'paragraph' | 'code' | 'image' | 'list' | 'table';
  content?: string;
  level?: number; // for headings (2, 3, 4)
  language?: string; // for code blocks
  items?: string[]; // for lists
  alt?: string; // for images
  src?: string; // for images
  headers?: string[]; // for tables
  rows?: { label: string; pro: string[]; contro: string[] }[]; // for tables
}

export const posts: Post[] = [
  {
    slug: 'guida-pratica-all-htaccess-redirect-cache-e-seo-tecnica',
    title: 'Guida pratica all\'.htaccess: redirect, cache e SEO tecnica',
    category: 'seo',
    subcategory: 'technical-seo',
    date: '2025-12-15',
    excerpt: 'Se il tuo sito gira su Apache, il file .htaccess è la chiave per affinare SEO tecnica, performance e sicurezza senza toccare la configurazione globale del server.',
    content: '',
    image: '/images/htaccess-featured.jpg',
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Cos\'è l\'.htaccess e perché conta per la SEO'
      },
      {
        type: 'paragraph',
        content: 'Se il tuo sito gira su Apache, il file .htaccess è la chiave per affinare SEO tecnica, performance e sicurezza senza toccare la configurazione globale del server. Con poche direttive puoi gestire redirect 301, canonicalizzazione, URL rewriting con mod_rewrite, cache browser e compressione gzip, impattando in modo diretto su crawl budget, Core Web Vitals e stabilità del sito. È uno strumento potente ma sensibile: un carattere fuori posto può portare a un errore 500, quindi conviene procedere con metodo e test mirati.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Dove si trova e come modificarlo senza rischi'
      },
      {
        type: 'paragraph',
        content: 'Trovi l\'.htaccess nella root del sito (spesso public_html o htdocs) e, su WordPress, nella stessa cartella del file wp-config.php. Se non lo vedi nel file manager o via FTP, attiva la visualizzazione dei file nascosti e verifica i permessi corretti. Prima di ogni modifica scarica una copia di backup, usa un editor di testo semplice e testa subito l\'apertura di homepage e pagine interne per intercettare errori. Se compaiono errori 500 o redirect loop, ripristina il file precedente e reintroduci le modifiche a piccoli passi.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Redirect 301/302 e canonicalizzazione del dominio'
      },
      {
        type: 'paragraph',
        content: 'I redirect 301 consolidano il valore SEO quando cambi URL, mentre i 302 sono temporanei e indicano transizioni brevi. Nella pratica quotidiana conviene impostare una sola versione canonica del dominio (con o senza www) e forzare https per eliminare duplicati tra protocolli e host. Se lavori a una migrazione, mappa URL vecchi e nuovi e preferisci redirect diretti (senza catene 301→301) per ridurre latenza e perdita di segnali.'
      },
      {
        type: 'code',
        language: 'apache',
        content: `# Abilita mod_rewrite
<IfModule mod_rewrite.c>
RewriteEngine On
</IfModule>

# Redirect 301 pagina → pagina
Redirect 301 /vecchia-pagina/ https://www.tuosito.it/nuova-pagina/

# Forza HTTPS su tutto il sito
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://www.tuosito.it/$1 [L,R=301]
</IfModule>

# Forza www
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\\.tuosito\\.it [NC]
RewriteRule ^(.*)$ https://www.tuosito.it/$1 [L,R=301]
</IfModule>`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Gestione degli errori: pagina 404 utile ed errori 500 da evitare'
      },
      {
        type: 'paragraph',
        content: 'Una pagina 404 personalizzata aiuta l\'utente a rientrare nel percorso giusto e riduce pogo sticking e rimbalzi. In ottica SEO conviene offrire ricerca interna, link alle categorie principali e magari i contenuti più letti, così da recuperare sessioni altrimenti perse. Gli errori 500, invece, sono sintomo di regole malformate o moduli mancanti: controlla i log del server e prova le modifiche in staging quando possibile.'
      },
      {
        type: 'code',
        language: 'apache',
        content: `# Pagine di errore personalizzate
ErrorDocument 404 /pagina-404.html
ErrorDocument 403 /errore-403.html
ErrorDocument 500 /errore-500.html`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cache browser: Expires e Cache-Control per asset statici'
      },
      {
        type: 'paragraph',
        content: 'Impostare header di cache per immagini, CSS e JavaScript riduce richieste ripetute e migliora LCP e TTFB percepito. Se versioni gli asset (query string o filename hashing), puoi spingere su max-age elevati; in caso contrario scegli durate più caute per evitare problemi di aggiornamento. Una combinazione di Expires e Cache-Control è semplice da mantenere e ben supportata.'
      },
      {
        type: 'code',
        language: 'apache',
        content: `# Expires headers
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Cache-Control
<IfModule mod_headers.c>
<FilesMatch "\\.(js|css|png|jpg|jpeg|gif|webp)$">
Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
</IfModule>`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Compressione gzip (e Brotli) per ridurre il peso delle risorse'
      },
      {
        type: 'paragraph',
        content: 'La compressione gzip è un quick win che abbatte il peso di HTML, CSS e JS, migliorando tempi di download e punteggi PageSpeed Insights.'
      },
      {
        type: 'code',
        language: 'apache',
        content: `# Compressione gzip
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/plain text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/json
</IfModule>`
      },
      {
        type: 'paragraph',
        content: 'La compressione gzip è un quick win che abbatte il peso di HTML, CSS e JS, migliorando tempi di download e punteggi PageSpeed Insights. Se il tuo hosting supporta Brotli a livello di server, otterrai spesso ratio migliori, ma da .htaccess la strada più semplice resta mod_deflate. Dopo l\'attivazione testa con uno strumento di verifica della compressione per confermare che gli header siano corretti.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'URL rewriting con mod_rewrite: URL SEO friendly'
      },
      {
        type: 'paragraph',
        content: 'Gli URL parlanti aiutano la scansione e migliorano il CTR mostrando percorsi chiari e parole chiave rilevanti. Con mod_rewrite puoi trasformare query string in path leggibili, mantenendo il backend invariato. Ricorda che su WordPress i pretty permalink sono gestiti dal core: limita le personalizzazioni per evitare conflitti con plugin e rewrite rule esistenti.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Sicurezza di base: directory listing e file sensibili'
      },
      {
        type: 'paragraph',
        content: 'Disattivare il directory listing impedisce che vengano elencati file e cartelle quando manca un index, una misura semplice ma efficace. Per i file critici su Apache 2.4, usa la direttiva moderna Require all denied, così eviti vecchie sintassi deprecate e chiudi varchi banali. Integra queste regole con una WAF o limitazioni a livello di hosting quando gestisci pannelli di amministrazione.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Best practice e test senza sorprese'
      },
      {
        type: 'paragraph',
        content: 'Procedi in modo incrementale: aggiungi una regola alla volta, testa la pagina interessata e controlla gli header di risposta con curl -I o gli strumenti di rete del browser. Per i redirect verifica i codici di stato e l\'assenza di catene usando servizi come httpstatus.io; per cache e compressione guarda gli header Cache-Control, Expires e Content-Encoding. In caso di refactoring massivi o migrazioni SEO, lavora in staging, prepara una redirect map e pianifica un monitoraggio post go-live con Search Console e log analysis.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Esempio di .htaccess "tipo" per produzione'
      },
      {
        type: 'paragraph',
        content: 'Questo esempio combina HTTPS forzato, canonicalizzazione, cache browser, compressione e una 404 personalizzata. Adattalo al tuo dominio e verifica la presenza dei moduli necessari (mod_rewrite, mod_expires, mod_headers, mod_deflate).'
      },
      {
        type: 'code',
        language: 'apache',
        content: `# Attiva mod_rewrite
<IfModule mod_rewrite.c>
RewriteEngine On
</IfModule>

# Canonical: forza HTTPS e www
<IfModule mod_rewrite.c>
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\\.tuosito\\.it$ [NC]
RewriteRule ^(.*)$ https://www.tuosito.it/$1 [L,R=301]
</IfModule>

# Sicurezza base
Options -Indexes

# Errori personalizzati
ErrorDocument 404 /404.html

# Cache browser
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/webp "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 year"
ExpiresByType text/css "access plus 1 month"
ExpiresByType application/javascript "access plus 1 month"
ExpiresByType text/html "access plus 1 hour"
</IfModule>

<IfModule mod_headers.c>
<FilesMatch "\\.(js|css|png|jpg|jpeg|gif|webp|svg|ico)$">
Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
<FilesMatch "\\.(html|htm)$">
Header set Cache-Control "public, max-age=3600, must-revalidate"
</FilesMatch>
</IfModule>

# Compressione gzip
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json
</IfModule>`
      },
      {
        type: 'paragraph',
        content: 'Se stai ottimizzando siti con molto traffico o molte risorse statiche, abbina queste regole a versioning degli asset e a un CDN per benefici ulteriori su HTTP/2.'
      }
    ]
  },
  {
    slug: 'quale-sistema-e-il-migliore-per-creare-un-sito',
    image: '/images/quale-sistema-featured.png',
    title: 'Quale sistema è il migliore per creare un sito?',
    category: 'seo',
    subcategory: 'cms-framework',
    date: '2023-02-16',
    excerpt: 'La scelta è varia, anche perché non c\'è solo un modo per creare i siti. WordPress, Drupal, Joomla, e-commerce con Magento o Prestashop, sviluppo custom con React e Next.js.',
    content: '',
    sections: [
      {
        type: 'paragraph',
        content: 'Beh la scelta è varia, anche perché non c\'è solo un modo per creare i siti.'
      },
      {
        type: 'paragraph',
        content: 'Ci sono diversi CMS (Content Management System: cioè software che consentono di creare siti in maniera più semplice rispetto alla programmazione) tra cui scegliere, ognuno con i suoi punti di forza e di debolezza. Tantissimi siti vengono realizzati con WordPress (forse quello più utilizzato), ma non è raro vedere anche siti in Drupal e Joomla. Drupal sicuramente è un po\' più complesso e richiede un minimo di conoscenza di codice. Questo, però, permette di avere un sito altamente personalizzabile e configurabile. Quindi, alla fine, la risposta più scontata è anche la più vera, ovvero: dipende quello che l\'utente vuole.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quale metodo per un e-commerce?'
      },
      {
        type: 'paragraph',
        content: 'Ci sono diversi metodi per creare un sito web e-commerce, ma in generale ci sono alcune linee guida che potresti seguire per assicurarti di creare un sito web funzionale e accattivante. Poi, certo, la parolina magica è dipende. Dipende se è un e-commerce grosso, medio, piccolo o single product. Sì, anche gli e-commerce per un singolo prodotto esistono e, se creati in maniera adeguata, danno ottimi risultati. Io stesso ho creato un e-commerce con solo una bottiglia di olio calabrese, ma l\'azienda vendette tantissimo perché, oltre ad avere qualità ottime ed essere coltivato a 400 metri s.l.m., il sito rispettava tutte le caratteristiche della SEO tecnica ed in più, l\'azienda aprì un piccolo blog all\'interno di esso, dove contenuti freschi, autorevoli, aggiornati, venivano aggiunti ogni giorno. Ovviamente, non potei pensare di aprire un e-commerce per un singolo prodotto utilizzando un\'infrastruttura estremamente complessa come ad esempio Magento. Utilizzai semplicemente il CMS WordPress + Woocommerce (il plugin che permette di rendere il sito WordPress un e-commerce aggiungendo metodi di pagamento, aggiunta di prodotti, metodi di spedizione ecc…). Cosa diversa quando ebbi a che fare con un sito come "Farmacia del sorriso", dove i farmaci erano migliaia e migliaia. Infatti non sviluppai il sito io, ma il titolare della farmacia delegò un esperto sviluppatore affinché creasse la struttura per ospitare quel numero enorme di prodotti da vendere.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Meglio Magento o Prestashop?'
      },
      {
        type: 'paragraph',
        content: 'Mi ripeto: dipende dalle esigenze. Per dirla in breve, Magento è un colosso per e-commerce molto grossi, sia in termini di prodotti che in quantità di traffico sul sito. Prestashop potrebbe essere utile per negozi di media entità. L\'interfaccia gestionale per chi deve mettere mano al sito, è più semplice così come quella utente: molto intuitiva. I moduli (un po\' come i plugin di WordPress) e temi disponibili per personalizzare il tuo negozio. Insomma, se hai un negozio non troppo grosso e non hai budget per assumere uno sviluppatore, Prestashop si "presta" molto di più.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Si può fare una buona SEO con Magento o Prestashop?'
      },
      {
        type: 'paragraph',
        content: 'Certo, soprattutto con Magento 2, gli sviluppatori della piattaforma hanno compreso l\'importanza di avere un CMS e non solo un gestionale e-commerce. Quindi anche per quanto riguarda la SEO, Magento offre tutte le soluzioni alle problematiche che affliggono i SEO quotidianamente: dall\'invio della sitemap alla riscrittura delle URL, dall\'inserimento dei meta tags all\'utilizzo dei canonical e così via. Così anche per Prestashop esistono vari moduli come Modulo Google Tag Manager Enhanced Ecommerce per configurare Tag Manager sul sito, o Modulo SEO EXPERT per l\'automatica compilazione dei meta tag. Ormai non esistono CMS che non prevedano moduli e plugin adatti per i motori di ricerca. Sarebbe semplicemente assurdo pensarlo nel 2023.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'E per aprire un blog quale metodo è il migliore?'
      },
      {
        type: 'paragraph',
        content: 'Sicuramente WordPress è il CMS più adatto. È sostanzialmente nato per creare blog. Ora ci si può creare un po\' di tutto, ma l\'ottimizzazione degli articoli rimane uno dei suoi punti più forti. WordPress, inoltre, dà ampio spazio a tutorial, articoli al suo interno che aiutano i novelli blogger ad ottimizzare i loro contenuti, dargli man forte a configurare un minimo i temi e plugin e come gestire in toto la piattaforma. Particolare sottovalutato è: la scelta dell\'hosting. Esso deve offrire servizi di qualità, ma soprattutto possedere eccellenti server. Ho visto molte volte siti in WordPress ottimamente performanti che però restituivano quasi continuamente errori 500, come il 508 perché le risorse del server erano sovraccariche. Questi errori non dovrebbero esistere, o quantomeno non così frequentemente. Questo naturalmente vale per i blog, gli e-commerce o qualsiasi altro sito che abbia un minimo di visitatori.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'È possibile fare siti senza utilizzare i CMS?'
      },
      {
        type: 'paragraph',
        content: 'Certo che è possibile, ma è una strada abbastanza ripida, costosa e richiede molto più tempo. Ma sì, è possibilissimo. Tra i linguaggi PHP, HTML e Javascript si possono sviluppare siti web altamente performanti e personalizzati fino al minimo dettaglio; cosa molto più faticosa con i CMS e i moduli/plugin, perché essendo sviluppati da programmatori esterni, offrono sicuramente soluzioni ottimali per le esigenze degli utenti, ma limitate. Se un responsabile di un\'azienda richiedesse troppe specifiche da personalizzare, probabilmente si dovrebbe ricorrere ad altri plugin e si appesantirebbe il sito, nonché rischiare di farli confliggere tra loro facendo "scazzare" il sito sia graficamente che sul piano delle funzionalità anche basiche.'
      },
      {
        type: 'paragraph',
        content: 'Ci sono framework orientati agli eventi o agli oggetti come Python o Javascript che, al loro interno, possiedono delle librerie (una specie di plugin dei CMS) ed una volta configurate, rendono i siti web perfettamente funzionanti in ogni minimo aspetto.'
      },
      {
        type: 'paragraph',
        content: 'Poi ci sono i siti web serverless che prevedono l\'utilizzo di servizi di cloud computing come AWS Lambda. Sono adatti più che altro per sviluppare applicazioni senza preoccuparsi delle problematiche relative ai server la cui gestione è completamente affidata ai servizi di cloud computing.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cos\'è React?'
      },
      {
        type: 'paragraph',
        content: 'React è un framework Javascript per creare interfacce utenti molto potente, infatti rende i siti estremamente veloci e reattivi grazie ai suoi componenti. Ma ho voluto dedicare un paragrafo a questo framework (molto utilizzato da un\'infinità di sviluppatori) per una ragione molto precisa: se non è configurato bene, i siti web potrebbero ricevere un danno infinito alla loro visibilità sui motori di ricerca. Questo perché? Perché storicamente Javascript e la SEO hanno un rapporto un po\' conflittuale.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Javascript e la SEO: una storia di odio e amore'
      },
      {
        type: 'paragraph',
        content: 'Il problema del rapporto tra la SEO e il linguaggio Javascript è rappresentato dal Rendering: ossia quando un browser web scarica il codice Javascript di una pagina web. I vantaggi di questa opzione (che molto spesso è di default) sono: minor carico sul server e funzionalità del sito che vengono eseguite sul dispositivo specifico (smartphone, tablet, pc ecc…) senza che la pagina abbia bisogno di ricaricarsi. Quindi sicuramente la velocità è uno dei fattori che contribuiscono all\'esperienza utente su quella pagina web. Purtroppo non possiamo dire la stessa cosa dei crawlers dei motori di ricerca (ovvero i software dei motori di ricerca che analizzano le pagine web). Google bot ad esempio, eseguendo un rendering di una pagina lato client, non vede l\'HTML della pagina con tutte le specifiche e i meta tag aggiunti dai SEO o i webmasters di quei siti, ma vede soltanto una porzione di codice, molte volte, "striminzita". E il resto dov\'è? Sul server web. In sostanza i motori di ricerca rimangono a stomaco vuoto e l\'indicizzazione delle pagine non avviene o avviene con molta difficoltà/in ritardo.'
      },
      {
        type: 'image',
        src: '/images/googlebot-crawl-render.png',
        alt: 'Googlebot crawl render index process flow'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Che fare?'
      },
      {
        type: 'paragraph',
        content: 'Ma se allora l\'HTML è rimasto sul server web, non si possono mandare i crawler dei motori di ricerca sui server web invece che rimanere sul browser, così leggono per bene tutto ciò che contengono le pagine web? Sì, ed è una delle soluzioni ottimali. Oltre quindi a riuscire a leggere l\'HTML completo, questa operazione, chiamata appunto "rendering lato server" fa sì che il crawler legga tutto prima che il browser riceva una risposta. Quindi, sempre in termini SEO, i Core Web Vitals (ossia le metriche che valutano la velocità e la stabilità del layout delle pagine web), esultano!'
      },
      {
        type: 'paragraph',
        content: 'Ad esempio è possibile utilizzare un altro framework chiamato: Next.js, il quale, appunto, riesce a far eseguire la scansione dei javascript sul server web ai crawler dei motori di ricerca i quali possono accedere alla versione pre-renderizzata della pagina e indicizzarla correttamente, garantendo che il contenuto della pagina sia disponibile per la ricerca.Next.js fornisce anche funzionalità SEO specifiche, come il supporto per meta tag personalizzati e URL SEO-friendly, la generazione di mappe del sito XML e il supporto delle funzionalità di Open Graph e Twitter Card per migliorare la condivisione sui social media.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusione'
      },
      {
        type: 'paragraph',
        content: 'Abbiamo parlato un po\' del framework Next.js, ma è bene essere chiari: In generale, qualsiasi framework o libreria JavaScript che utilizza il rendering lato client (client-side rendering) può causare problemi SEO. Questo perché, ripeto, i motori di ricerca spesso non riescono a eseguire il rendering del codice JavaScript e quindi non sono in grado di indicizzare completamente il contenuto della pagina web.'
      },
      {
        type: 'paragraph',
        content: 'Ad esempio: Angular, Vue.js, Ember.js, Backbone.js ecc…'
      },
      {
        type: 'paragraph',
        content: 'Come si è visto, le strade delle creazioni di siti sono infinite e sarebbe solo una follia elencarle in un articolo. Ci vorrebbero manuali e manuali (anzi già ci sono). Poi, come al solito, dipende dalla complessità del progetto che si intende realizzare. Progetti più semplici come un blog o un piccolo e-commerce, richiedono l\'intervento di un webmaster che sappia lavorare con i CMS. Altro conto è sviluppare un backend "gestionale" completamente personalizzato e un frontend che supporti alcune specifiche funzionalità per gli utenti. E in questi casi, mi spiace dirlo, ma bisognerebbe fare un investimento serio….molto serio.'
      }
    ]
  },
  {
    slug: 'skag-vs-stag-levoluzione-della-struttura-delle-campagne-google-ads-e-perche-non-puoi-piu-ignorarla',
    image: '/images/skag-vs-stag-featured.jpeg',
    title: 'SKAG vs STAG: L\'evoluzione della struttura delle campagne Google Ads e perché non puoi più ignorarla',
    category: 'google-ads',
    date: '2025-12-13',
    excerpt: 'Il panorama del PPC è cambiato drasticamente. Le SKAG (Single Keyword Ad Groups) hanno dominato per anni, ma oggi i professionisti devono confrontarsi con le STAG (Single Theme Ad Groups).',
    content: '',
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Che cosa sono le SKAG (Single Keyword Ad Groups)?'
      },
      {
        type: 'paragraph',
        content: 'Per anni, la struttura SKAG (Single Keyword Ad Groups) è stata il Santo Graal per ogni PPC Specialist. Come suggerisce il nome, questa tecnica prevedeva la creazione di un Gruppo di Annunci per ogni singola parola chiave.'
      },
      {
        type: 'paragraph',
        content: 'L\'idea era semplice ma potente:'
      },
      {
        type: 'list',
        items: [
          'Hai la parola chiave "scarpe da corsa rosse".',
          'Crei un gruppo di annunci chiamato "Scarpe da corsa rosse".',
          'All\'interno inserisci solo quella keyword in corrispondenza esatta (Exact Match), a frase (Phrase) e modificatore generico (BMM).',
          'Crei un annuncio che contiene esattamente "Scarpe da corsa rosse" nel titolo e nella descrizione.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        content: 'Perché le SKAG funzionavano così bene in passato?'
      },
      {
        type: 'paragraph',
        content: 'Fino al 2018 circa, le SKAG garantivano un livello di rilevanza imbattibile. Se un utente cercava una keyword specifica, il tuo annuncio rispondeva a specchio. Questo portava a due enormi vantaggi:'
      },
      {
        type: 'list',
        items: [
          'CTR (Click-Through Rate) Elevatissimo: L\'utente vedeva esattamente ciò che aveva cercato.',
          'Punteggio di Qualità (Quality Score) alle stelle: Google premiava la coerenza tra query, keyword, annuncio e landing page con CPC più bassi.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Era un\'epoca di micro-management. Tuttavia, questa struttura creava account enormi, con migliaia di gruppi di annunci, difficili da gestire ma estremamente precisi.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Il declino delle SKAG: Cosa è cambiato in Google Ads?'
      },
      {
        type: 'paragraph',
        content: 'La morte delle SKAG non è avvenuta in un giorno, ma è stata causata da una serie di aggiornamenti algoritmici di Google volti a favorire l\'automazione.'
      },
      {
        type: 'paragraph',
        content: 'Il colpo di grazia è arrivato con l\'evoluzione delle corrispondenze delle parole chiave. Un tempo, la "corrispondenza esatta" significava davvero esatta. Oggi non è più così. Google ha introdotto il concetto di Varianti Simili (Close Variants).'
      },
      {
        type: 'paragraph',
        content: 'Oggi, se la tua keyword è [servizi idraulico], il tuo annuncio potrebbe attivarsi anche per "idraulico vicino a me" o "riparazione tubi". Questo significa che la precisione millimetrica delle SKAG è diventata ridondante: le keyword di gruppi diversi hanno iniziato a competere tra loro (cannibalizzazione), creando confusione nell\'account.'
      },
      {
        type: 'paragraph',
        content: 'Inoltre, con l\'arrivo degli Annunci Adattabili della Rete di Ricerca (RSA) e dello Smart Bidding, Google ha bisogno di dati. Le SKAG frammentano i dati in piccoli silos; questo "affama" l\'algoritmo, impedendogli di ottimizzare le conversioni in modo efficace.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Benvenuti nell\'era delle STAG (Single Theme Ad Groups)'
      },
      {
        type: 'paragraph',
        content: 'Qui entra in gioco la struttura STAG (Single Theme Ad Groups). Invece di isolare le parole chiave, le raggruppiamo per temi o intenti di ricerca.'
      },
      {
        type: 'paragraph',
        content: 'In una struttura STAG, un gruppo di annunci non ruota attorno a una singola sintassi, ma attorno a un concetto.'
      },
      {
        type: 'paragraph',
        content: 'Esempio pratico:'
      },
      {
        type: 'list',
        items: [
          'Tema: Scarpe da running Nike',
          'Keywords nel gruppo: "scarpe running nike", "prezzo scarpe nike corsa", "migliori scarpe nike per correre".'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Perché le STAG sono fondamentali oggi?'
      },
      {
        type: 'paragraph',
        content: 'L\'approccio STAG è progettato per nutrire l\'algoritmo di Google. Raggruppando da 5 a 20 parole chiave tematicamente simili nello stesso gruppo, permettiamo al sistema di accumulare un volume di dati (impressioni e conversioni) sufficiente per far funzionare lo Smart Bidding (come il CPA Target o il ROAS Target).'
      },
      {
        type: 'paragraph',
        content: 'Ecco i vantaggi principali delle STAG nel moderno digital marketing:'
      },
      {
        type: 'list',
        items: [
          'Consolidamento dei dati: L\'algoritmo impara più velocemente quali utenti convertono.',
          'Gestione semplificata: Meno gruppi di annunci significano un account più pulito e facile da analizzare.',
          'Adattabilità: Gli annunci RSA possono testare diverse combinazioni di titoli e descrizioni per coprire tutte le varianti del tema, senza dover creare annunci specifici per ogni singola query.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'SKAG vs STAG: Le differenze principali a confronto'
      },
      {
        type: 'paragraph',
        content: 'Per visualizzare meglio il cambiamento, ecco un confronto diretto tra le due filosofie di gestione PPC:'
      },
      {
        type: 'list',
        items: [
          'Granularità: La SKAG punta alla massima granularità (1 keyword = 1 gruppo). La STAG punta alla coerenza tematica (1 tema = 1 gruppo).',
          'Tempo di gestione: Le SKAG richiedono ore di gestione per le negative keywords e l\'ottimizzazione delle bid manuali. Le STAG si affidano maggiormente all\'automazione, liberando tempo per la strategia.',
          'Tipo di Annunci: Le SKAG erano perfette per i vecchi annunci di testo espansi (ETA). Le STAG sono native per gli annunci adattabili (RSA).',
          'KPI focus: Le SKAG si concentravano su CTR e Quality Score. Le STAG si concentrano su Conversion Rate e CPA/ROAS.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'L\'evoluzione estrema: Hagakure e la semplificazione'
      },
      {
        type: 'paragraph',
        content: 'Parlando di STAG, è impossibile non citare il metodo Hagakure. Questa è un\'evoluzione ancora più radicale della struttura STAG. La struttura Hagakure suggerisce di strutturare l\'account basandosi quasi esclusivamente sulle URL di destinazione e sui volumi di dati, utilizzando spesso la corrispondenza generica (Broad Match) abbinata allo Smart Bidding.'
      },
      {
        type: 'paragraph',
        content: 'Mentre le STAG mantengono ancora una distinzione semantica precisa, Hagakure spinge l\'automazione al limite, raggruppando tutto ciò che condivide la stessa landing page e lo stesso obiettivo di business. Per molti inserzionisti, il passaggio da SKAG a STAG è il primo passo naturale verso questa modernizzazione.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come passare da SKAG a STAG senza perdere soldi'
      },
      {
        type: 'paragraph',
        content: 'Se hai un account storico strutturato in SKAG che performa ancora decentemente, non distruggerlo dall\'oggi al domani. La transizione deve essere graduale.'
      },
      {
        type: 'paragraph',
        content: 'Ecco una mini-guida How to per la migrazione:'
      },
      {
        type: 'list',
        items: [
          'Analisi dei Termini di Ricerca: Guarda quali query attivano realmente i tuoi annunci. Noterai molte sovrapposizioni tra le tue SKAG.',
          'Identifica i Top Performer: Prendi i gruppi di annunci con più volume e conversioni. Questi saranno i "genitori" dei tuoi nuovi gruppi tematici.',
          'Accorpamento: Metti in pausa le SKAG a basso volume e sposta le loro keyword (o varianti più ampie) nei gruppi "genitori" identificati al punto 2.',
          'Test degli Annunci: Assicurati che gli annunci nel nuovo gruppo STAG siano abbastanza generici da coprire il tema, ma abbastanza specifici da mantenere un buon CTR. Usa l\'inserimento dinamico delle parole chiave (DKI) se necessario.',
          'Monitoraggio del Quality Score: Inizialmente potresti vedere un leggero calo nella rilevanza, ma se il tasso di conversione regge o migliora grazie all\'automazione, sei sulla strada giusta.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Qual è la scelta giusta per il 2026 e oltre?'
      },
      {
        type: 'paragraph',
        content: 'La battaglia SKAG vs STAG ha un chiaro vincitore nell\'ecosistema attuale di Google Ads: STAG.'
      },
      {
        type: 'paragraph',
        content: 'Continuare a forzare una struttura SKAG oggi significa combattere contro l\'algoritmo invece di sfruttarlo a proprio vantaggio. La rigidità non paga più; la flessibilità e la capacità di fornire dati all\'IA sono le nuove chiavi del successo.'
      },
      {
        type: 'paragraph',
        content: 'Tuttavia, il digital marketing non è mai bianco o nero. In nicchie molto specifiche, con volumi bassissimi e CPC altissimi (es. settori B2B legali o industriali), un approccio ibrido o simil-SKAG per le keyword "money" potrebbe ancora avere senso per mantenere il controllo assoluto del budget.'
      }
    ]
  },
  {
    slug: 'dpa-per-le-meta-ads',
    title: 'DPA per le Meta Ads',
    category: 'meta-ads',
    subcategory: 'strategie-meta-ads',
    image: '/images/dpa-featured.png',
    date: '2023-05-29',
    excerpt: 'Prima di parlare di inserzioni dinamiche e remarketing, è necessaria un\'introduzione al catalogo prodotti su Facebook.',
    content: '',
    sections: [
      {
        type: 'paragraph',
        content: 'Prima di parlare di inserzioni dinamiche e remarketing, è necessaria un\'introduzione al catalogo prodotti su Facebook.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come creare un catalogo prodotti?'
      },
      {
        type: 'paragraph',
        content: 'Hai mai sentito parlare di Business Manager? Se la risposta è "no", male, molto male. È lo strumento fondamentale per settare ed analizzare una serie di risorse per Facebook ed Instagram: dalle audience, al pixel, agli account pubblicitari. Se si vuole davvero fare marketing sui social, è imprescindibile averlo. Una volta creato il Business Manager, clicca sulle 3 linee, le quali apriranno il menù dove troverai tutti gli strumenti e da lì vai su "Gestore delle vendite"'
      },
      {
        type: 'image',
        src: '/images/dpa-catalogo-business-manager.png',
        alt: 'Catalogo Business Manager'
      },
      {
        type: 'paragraph',
        content: 'Nella schermata centrale ti apparirà un bel bottone blu "Aggiungi catalogo" e, una volta entrato nella sezione, dovrai selezionare il tipo di catalogo. Se hai un e-commerce, ovviamente, sceglierai quella soluzione.'
      },
      {
        type: 'image',
        src: '/images/dpa-tipo-catalogo.png',
        alt: 'Tipo di catalogo Meta'
      },
      {
        type: 'paragraph',
        content: 'Per quanto riguarda il metodo di caricamento, ti consiglio di scegliere l\'opzione "Carica le informazioni sui prodotti". Le piattaforme partner presentano molto spesso dei bug all\'interno dei plugin che consigliano e molte volte, quindi, non funzionano. Dai il nome al tuo catalogo e premi "Crea"!'
      },
      {
        type: 'image',
        src: '/images/dpa-impostazioni-catalogo.png',
        alt: 'Impostazioni catalogo Meta'
      },
      {
        type: 'paragraph',
        content: 'Perfetto, il catalogo è stato creato. Manca la cosa più importate: l\'inserimento dei prodotti. Ne hai pochi? Tipo 5-10 o una roba del genere? Puoi caricarli manualmente. Come?'
      },
      {
        type: 'paragraph',
        content: 'Nella schermata "Gestore delle vendite", nella barra a destra, all\'interno della sezione "Catalogo", clicca su "Origini dei dati" e subito dopo su "Manuale"'
      },
      {
        type: 'image',
        src: '/images/dpa-articoli-catalogo.png',
        alt: 'Caricamento articoli per catalogo Meta'
      },
      {
        type: 'paragraph',
        content: 'Compila tutti i campi: titolo, descrizione, link al sito web, prezzo, prezzo promozionale ecc…Alla fine, clicca su "Nuovo articolo" per aggiungere un ulteriore prodotto e compili di nuovo tutti i campi.'
      },
      {
        type: 'image',
        src: '/images/dpa-campi-catalogo.png',
        alt: 'Campi per catalogo Meta'
      },
      {
        type: 'paragraph',
        content: 'C\'è un altro modo per poter caricare i propri prodotti e non dover ogni volta apportare le modifiche a mano.'
      },
      {
        type: 'paragraph',
        content: 'Tornando alla schermata di "Origini dei dati", puoi scegliere l\'opzione "Elenco di dati". Nella nuova schermata, scegliendo il "Feed programmato", i prodotti si aggiorneranno automaticamente dal sito, quindi nel catalogo non dovrai toccare nulla. Se utilizzi un CMS come WordPress + Woocommerce, ti sarà facile scaricare un plugin come "Product Feed Pro", creare un feed da lì e collegarlo al catalogo Meta. Allo stesso modo, se utilizzi Magento, dovrai scaricare un\'estensione come "Facebook Catalog Product Feed" e collegare anch\'esso al catalogo. Stessa cosa con Shopify, attraverso "Facebook Product Feed (di Flexify)".'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come impostare una campagna DPA'
      },
      {
        type: 'paragraph',
        content: 'Con l\'avvento di Meta, anche su Ads Manager è cambiato qualcosa. Ad esempio, ciò che una volta era chiamato CBO (ovvero l\'impostazione di lasciar decidere l\'algoritmo di Meta su quali adset spendere il maggior budget, dopo aver inserito l\'importo totale a livello di campagna), ora prende il nome di: Budget della campagna Advantage +.'
      },
      {
        type: 'paragraph',
        content: 'Così come, troverai, sempre nella configurazione della campagna, una spunta: "Catalogo". Attivala!'
      },
      {
        type: 'image',
        src: '/images/dpa-catalogo-attivazione.png',
        alt: 'Catalogo attivazione Meta'
      },
      {
        type: 'paragraph',
        content: 'Andando avanti, nel gruppo di annunci, nella sezione "Pubblico", dovrai scegliere tra due tipi fi target: chi non ha mai interagito con il tuo sito o chi, invece, ha compiuto un\'azione nel tuo e-commerce:'
      },
      {
        type: 'image',
        src: '/images/dpa-retargeting-pubblico.png',
        alt: 'Retargeting Meta catalogo'
      },
      {
        type: 'paragraph',
        content: 'Per creare le DPA, ovviamente, scegli la seconda opzione.'
      },
      {
        type: 'paragraph',
        content: 'Immediatamente dopo aver scelto il pubblico che ha già interagito con i tuoi prodotti, dovrai scegliere una tra le seguenti opzioni di azioni:'
      },
      {
        type: 'image',
        src: '/images/dpa-eventi-retargeting.png',
        alt: 'Eventi retargeting DPA Meta'
      },
      {
        type: 'paragraph',
        content: 'Non sarò certo io a dirti quale sia la migliore soluzione, perché ogni caso è un caso a sé. Valuta tu quale sia l\'opzione più pertinente per quella campagna. Ad esempio, se hai un piccolo e-commerce, potresti scegliere la prima perché racchiude tutti gli utenti del tuo sito che hanno visualizzato i tuoi prodotti e aggiunti al carrello. Se invece hai tante visite sul tuo store, potresti semplicemente escludere gli altri e tenere in considerazione chi ha aggiunto al carrello i prodotti.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Gli insiemi di articoli nel catalogo'
      },
      {
        type: 'paragraph',
        content: 'Tornando al catalogo che hai creato precedentemente, puoi scegliere un insieme di prodotti da caricare successivamente per le inserzioni.'
      },
      {
        type: 'paragraph',
        content: 'Gestore delle vendite ⇒ Nome del catalogo ⇒ Insiemi (nella dashboard a sinistra).'
      },
      {
        type: 'paragraph',
        content: 'Lì potrai raggruppare i tuoi prodotti in base alle categorie (se sei un e-commerce di abbigliamento: tute, felpe, t-shirts, jeans ecc…).'
      },
      {
        type: 'paragraph',
        content: 'Per creare gli insiemi, clicca sul pulsante in alto verde "Crea insieme"'
      },
      {
        type: 'paragraph',
        content: 'Una volta finita l\'operazione ed avere a portata di mano le categorie di prodotti, puoi tornare in Ads manager e selezionare, questa volta a livello di ads, gli insiemi che vuoi promuovere:'
      },
      {
        type: 'image',
        src: '/images/dpa-insieme-catalogo.png',
        alt: 'Scelta insiemi dal catalogo delle vendite'
      },
      {
        type: 'paragraph',
        content: 'Facile no?!'
      }
    ]
  },
  {
    slug: 'le-creativita-dinamiche',
    title: 'Le creatività dinamiche',
    category: 'meta-ads',
    subcategory: 'creativita-meta-ads',
    image: '/images/creativita-dinamiche-featured.png',
    date: '2023-04-24',
    excerpt: 'Le creatività dinamiche permettono di testare automaticamente diverse combinazioni di elementi creativi per trovare la migliore performance.',
    content: '',
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Cosa sono'
      },
      {
        type: 'paragraph',
        content: 'Se hai capito bene quale sia il tuo potenziale target di riferimento, allora le creatività dinamiche possono rivelarsi la scelta giusta. Si tratta di video e immagini che combinati con titoli, descrizioni, call to action, danno vita ad un mix di creatività che possono colpire su più angoli i tuoi potenziali clienti.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come attivarle?'
      },
      {
        type: 'paragraph',
        content: 'Su Ads Manager, a livello di adset, subito dopo la sezione il tipo di conversione, c\'è un riquadro con la spunta per attivare le creatività dinamiche:'
      },
      {
        type: 'image',
        src: '/images/dynamic-creativita.png',
        alt: 'creatività dinamiche Meta'
      },
      {
        type: 'paragraph',
        content: 'Una volta attivata, a livello di ads, si possono attivare: 10 immagini o video, 5 copy, 5 headline, 5 description e 5 cta.'
      },
      {
        type: 'paragraph',
        content: 'Nella sezione "Creatività dell\'inserzione", controlla se è spuntata l\'opzione "Ottimizza la creatività per ogni persona".'
      },
      {
        type: 'image',
        src: '/images/persona-ottimizzazione.png',
        alt: 'ottimizza la creatività per ogni persona Meta'
      },
      {
        type: 'paragraph',
        content: 'Le ottimizzazioni possibili, seguendo il testo ufficiale di Meta sono:'
      },
      {
        type: 'paragraph',
        content: 'Applicare una serie di miglioramenti standard per ottimizzare le tue creatività dell\'inserzione.'
      },
      {
        type: 'paragraph',
        content: 'Applicare leggeri miglioramenti alle immagini o alle immagini di anteprima.'
      },
      {
        type: 'paragraph',
        content: 'Ampliare un\'immagine tramite il riempimento dello sfondo con colori e motivi corrispondenti'
      },
      {
        type: 'paragraph',
        content: 'Applicare un modello ai tuoi elementi creativi per Stories e feed.'
      },
      {
        type: 'paragraph',
        content: 'Creare un\'inserzione carosello di Stories basata su singoli titoli o immagini oppure sulle informazioni del catalogo prodotti.'
      },
      {
        type: 'paragraph',
        content: 'Scegliere la velocità di riproduzione dei video con l\'audio disattivato.'
      },
      {
        type: 'paragraph',
        content: 'Aggiungere movimento per suggerire la profondità nelle immagini o per richiamare l\'attenzione sul testo.'
      },
      {
        type: 'paragraph',
        content: 'Creare video da immagini.'
      },
      {
        type: 'paragraph',
        content: 'Per video più lunghi di 30 secondi, mostrare agli utenti un breve clip di una qualsiasi parte del video per suscitare interesse prima di riprodurre il video completo'
      },
      {
        type: 'paragraph',
        content: 'Selezionare le canzoni di accompagnamento in base al contenuto della tua inserzione, quando possibile.'
      },
      {
        type: 'paragraph',
        content: 'Selezionare ed evidenziare espressioni o frasi chiave del testo che fornisci'
      },
      {
        type: 'paragraph',
        content: 'Aggiunta di emoji correlate al tuo testo'
      },
      {
        type: 'paragraph',
        content: 'Ottimizzare la destinazione dell\'inserzione tra il tuo sito web e il tuo shop su Facebook o Instagram.'
      },
      {
        type: 'paragraph',
        content: 'Mostrare agli utenti di Instagram alcuni commenti sul tuo prodotto o sulla tua azienda che potrebbero essere pertinenti per loro'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Vantaggi di attivare le creatività dinamiche per singola persona'
      },
      {
        type: 'paragraph',
        content: 'Innanzitutto il vantaggio principale è rappresentato dal fatto che quando l\'algoritmo di Meta individua un utente realmente interessato ad una particolare combinazione di elementi dell\'ad, non se lo lascia scappare. La frequenza di visualizzazione dell\'annuncio potrebbe anche alzarsi un tantino, ma evidentemente, Meta ritiene, in base ai pattern di comportamento, che quell\'utente sarà più portato ad eseguire quella specifica azione in base ai tuoi obiettivi impostati nella campagna.'
      },
      {
        type: 'paragraph',
        content: 'Quindi, il secondo vantaggio è, di conseguenza, la naturale scrematura del target non interessato. Verrà colpito il pubblico giusto al momento giusto con un messaggio personalizzato e pertinente.'
      },
      {
        type: 'paragraph',
        content: 'Naturalmente se vuoi avere il controllo pieno di ogni ad dell\'adset, con i copy, le immagini/video, i titoli, le descrizioni e le cta univoche senza il mix degli elementi affidato all\'algoritmo, conviene non attivare le creatività dinamiche.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come misurare quali inserzioni stiano funzionando meglio delle altre?'
      },
      {
        type: 'paragraph',
        content: 'In Ads Manager accanto alla scelta delle colonne, c\'è il menù a tendina chiamato "Dettagli". Puoi cliccare lì e scegliere poi "In base alla risorsa delle creatività dinamiche". Ed eccoti tutte le combinazioni generate da Meta con i loro KPI. Così hai tutto a portata di mano e decidere, eventualmente, di spegnerne alcune e rinforzarne altre. Cercare di scalare insomma.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le DABA e le DPA'
      },
      {
        type: 'paragraph',
        content: 'Le creatività dinamiche possono far parte di alcune strategie più ampie, ovvero accorpate ad una scelta di pubblico. Le DABA (Dynamic ads for broad audience) sono un tipo di campagna molto potente che consente all\'algoritmo di Meta di riuscire a catturare gli interessi degli utenti in base alle creatività messe in campo dal tuo Meta ads specialist. Di solito in questo caso, per quanto riguarda il pubblico, a livello di adset , non vengono inseriscono interessi, dati demografici o comportamenti. Si lascia tutto vuoto e si gioca tutto sul piano delle ads con i Testi principali informativi ed accattivanti. Ottimizzati i copy delle ads, sarà cura dell\'algoritmo andare a scovare il target potenzialmente interessato che possa compiere l\'evento principale scelto come obiettivo della campagna. Quando si parla di Web semantico, questo è uno di quei casi. Come dice uno dei principali esperti di Meta'
      },
      {
        type: 'paragraph',
        content: '"Vuoi davvero insegnare a Facebook ed Instagram quali sono i reali interessi degli utenti?"'
      },
      {
        type: 'paragraph',
        content: 'In sostanza: crea dei buoni copy che indirizzino l\'algoritmo a capire quali pattern di comportamento andare a scegliere e non preoccuparti.'
      },
      {
        type: 'paragraph',
        content: 'Per quanto riguarda, invece le DPA (Dynamic product ads), come puoi ben capire, sono rivolte principalmente agli e-commerce. Utilissime se hai un negozio online o un catalogo Meta e vuoi fare una campagna di remarketing: Le DPA sfruttano i dati dei prodotti che hai caricato su Facebook, come il nome del prodotto, la descrizione, il prezzo e l\'immagine, per creare annunci automatici e altamente rilevanti per gli utenti. Quando un utente visita il tuo sito web o interagisce con i tuoi prodotti, Facebook tiene traccia di tali azioni e può mostrare gli annunci dei prodotti che hanno suscitato interesse in quel particolare utente.'
      }
    ]
  },
  {
    slug: 'come-gestire-i-contenuti-copiati-e-duplicati-del-tuo-sito',
    title: 'Come gestire i contenuti copiati e duplicati del tuo sito',
    category: 'seo',
    subcategory: 'technical-seo',
    date: '2023-04-08',
    excerpt: 'I contenuti duplicati possono danneggiare la SEO del tuo sito. Scopri come gestirli correttamente.',
    image: '/images/contenuti-duplicati-featured.webp',
    content: '',
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Indice dei contenuti'
      },
      {
        type: 'list',
        items: [
          'Perché sono considerati errori dai motori di ricerca?',
          'Se si apportano piccole modifiche al testi, riesco ad aggirare i motori di ricerca?',
          'I contenuti copiati, si possono posizionare meglio dell\'originale nei risultati di ricerca?',
          'I siti che copiano vengono puniti dai motori di ricerca?',
          'Perché gli altri copiano i miei contenuti?',
          'Come risolvere il problema di contenuti copiati?',
          'Invece, a cosa è dovuto l\'errore dei contenuti duplicati interni?',
          'Contenuti duplicati negli e-commerce',
          'Come scovare i contenuti duplicati o copiati?'
        ]
      },
      {
        type: 'paragraph',
        content: 'Innanzitutto occorre distinguere i due tipi di problemi: copiati e duplicati:'
      },
      {
        type: 'list',
        items: [
          'i contenuti copiati vengono eseguiti da un sito esterno che, arrivando sul tuo sito, copia l\'intera o una buona parta del testo di una pagina e lo incolla su quella del suo sito.',
          'i duplicati sono i testi che sono presenti sul tuo sito su due o più pagine completamente identiche.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Perché sono considerati errori dai motori di ricerca?'
      },
      {
        type: 'paragraph',
        content: 'Perché possono creare confusione negli algoritmi e nelle loro intelligenze artificiali i quali preferiscono trovare all\'interno dei siti, contenuti univoci e originali. Addirittura vanno un po\' in confusione quando ci sono due articoli simili che concorrono per la prima posizione in prima pagina nello stesso sito. Questo problema, invece, si chiama "cannibalizzazione". Non viene considerato un errore grave come possono essere, invece, i contenuti duplicati o copiati, ma anche lì bisognerebbe fare un po\' di pulizia di testi.'
      },
      {
        type: 'paragraph',
        content: 'In sostanza, più contenuti originali e unici per argomento si hanno, meglio è. Ovviamente, non farti prendere dal panico se stai riportando un articolo della Costituzione o un passo della Bibbia citandolo chiaramente. Il motore di ricerca sa benissimo che sono contenuti con un testo"non modificabile" i quali non possono subire variazioni. Quello che importa è il contesto in cui vengono inseriti. Deve essere unico e originale.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Se si apportano piccole modifiche al testi, riesco ad aggirare i motori di ricerca?'
      },
      {
        type: 'paragraph',
        content: 'Fino a qualche tempo fa, sì. Era possibile che gli algoritmi avessero difficoltà nel riconoscere un testo, sostanzialmente copiato, ma modificato. Ora, con i vari aggiornamenti dell\'algoritmo che si sono succeduti negli anni, e, soprattutto, grazie alla presenza dal 2019 dell\'intelligenza artificiale che ha portato alla rivoluzione di BERT e MUM (i due aggiornamenti dell\'algoritmo che si basano sul linguaggio naturale), i contenuti copiati ma modificati non hanno vita facile. Se prima era per alcuni una prassi consolidata che portava, in alcuni casi, qualche tipo di vantaggio, ora non più.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'I contenuti copiati, si possono posizionare meglio dell\'originale nei risultati di ricerca?'
      },
      {
        type: 'paragraph',
        content: 'Sì, in alcuni casi si è addirittura assistito ad un superamento di posizioni rispetto all\'originale. Può avvenire se, però, questo sito ha, in generale, delle informazioni aggiuntive ed è ritenuto da Google, comunque, un buon sito. Se, invece, è un sito spam che non fa altro che pubblicare articoli copiati e non ha un contenuto originale suo, dubito fortemente che possa accadere la situazione di superamento dell\'originale. Potrebbe succedere in 2 situazioni, a mio parere:'
      },
      {
        type: 'list',
        items: [
          'Tutti e due i siti, sono siti più volte penalizzati da Google per vari motivi e non offrono un\'esperienza utente adeguata e danno scarse o inadeguate risposte alle intenzioni di ricerca degli utenti',
          'Le parole chiavi e gli argomenti ricercati dagli utenti rientrano in SERP e settori per niente competitivi. Quindi, parlo di volumi di ricerca che si avvicinano allo 0.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'I siti che copiano vengono puniti dai motori di ricerca?'
      },
      {
        type: 'paragraph',
        content: 'Tendenzialmente se un sito ha ottimi contenuti, nuovi, aggiornati, autorevoli, di qualità, esaustivi e all\'improvviso comincia a pubblicare articoli palesemente presi da altri siti, è molto probabile che Google cominci a scaraventare le parole chiavi per cui è posizionato, nelle altre pagine di ricerca (dalla seconda in poi). Altro conto è, magari, se si copia un solo articolo. Lì si incorre in una penalizzazione che riguarda, appunto, quella singola pagina, che, probabilmente non vedrà mai la luce in cima alla SERP di Google. Ma se un sito nasce solo per riportare i testi di altri siti sul proprio, direi "Ma dove vuoi che vada?!".'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Perché gli altri copiano i miei contenuti?'
      },
      {
        type: 'paragraph',
        content: 'Beh probabilmente perché hai scritto un ottimi articolo e sei ben posizionato per qualche parola chiave ottima. Qualcuno che non conosce il funzionamento dei motori di ricerca, potrebbe capitare sul tuo sito e cliccare su "Seleziona tutto" e poi "Copia e incolla". Oppure c\'è uno scraper, ovvero una software progettato ad arte per estrapolare i testi di altri siti e inserirli nel proprio. Per tentare di evitarlo, è buona norma, ad esempio, sul sito:'
      },
      {
        type: 'list',
        items: [
          'fare uso di captcha,',
          'bloccare di IP sospetti,',
          'utilizzare sempre il protocollo HTTPS,',
          'avere un buon plugin anti-spam (ad esempio su WordPress il plugin Akismet può rivelarsi talvolta insufficiente),',
          'avere un\'area riservata per contenuti "premium" da accesso con password.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come risolvere il problema di contenuti copiati?'
      },
      {
        type: 'paragraph',
        content: 'Ovviamente, la cosa migliore e più immediata, è quella di contattare l\'admin del sito in questione chiedendo di rimuovere le pagine copiate entro tot giorni, intimando, altrimenti, di intervenire, successivamente, per vie legali. Se l\'admin non risponde o non intende rimuoverli, puoi utilizzare uno strumento di Google per la loro rimozione oppure utilizzare un altro strumento, sempre di Google, se qualcuno ha violato un tuo copyright.'
      },
      {
        type: 'paragraph',
        content: 'Stai tranquillo, perché anche se dovesse arrivare a te una denuncia o segnalazione di Google, ma tu sei sicuro che la tua pagina è l\'originale e non la copia, allora lo è anche Google, perché vede benissimo la data in cui sono state indicizzate le pagina. Da lì non si scappa. Non possono fregarti. È uno dei tanto vantaggi del digitale.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Invece, a cosa è dovuto l\'errore dei contenuti duplicati interni?'
      },
      {
        type: 'paragraph',
        content: 'Dipende da alcuni fattori, molte volte interni al sito. Se si tratta di WordPress o altri CMS si dovrebbe indagare su quali errori può portare il codice del tema oppure scovare il plugin che genera questo errore. Alcuni di essi, se mal configurati, possono creare delle URL con vari parametri (quindi con simboli strani come %&) che duplicano la pagina originale.'
      },
      {
        type: 'paragraph',
        content: 'È opportuno scegliere sempre dei temi e plugin di qualità e controllare sia gli aggiornamenti che le recensioni degli utenti, che siano sotto forma di voto (stellette) o con commenti testuali. Se, invece, siamo in presenza di un sito sviluppato in qualche linguaggio particolare, anche lì c\'è da indagare se, in un framework specifico, ci sia qualche errore javascript che, autonomamente, crea dei contenuti doppiati sul sito. Importantissimo, inoltre, controllare se esistano "copie" dello stesso sito.'
      },
      {
        type: 'paragraph',
        content: 'Per esempio può accadere che un sito abbia due versioni: una http e un\'altra https. Così come può avere sia il www che il non-www. In questo caso sarebbe opportuno fare un redirect di massa tramite l\'htaccess, se si utilizza il web server Apache o il file di configurazione se siamo in Nginx.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Contenuti duplicati negli e-commerce'
      },
      {
        type: 'paragraph',
        content: 'È molto frequente trovare nei siti e-commerce pagine duplicate che non fanno capire bene ai motori di ricerca quale sia la pagina più importante rispetto alle duplicate. Ad esempio, nelle pagine dei prodotti, se cambia l\'URL quando un utente attiva i filtri (cambiando il brand, il colore, le dimensioni o le altre features di quel prodotto) bisognerebbe comunicare a Google la pagina del prodotto "senza filtri" con il tag=canonical, comunicandogli che quella è la pagina madre e le altre sono le "figlie".'
      },
      {
        type: 'paragraph',
        content: 'Consiglio spassionato: mi è capitato di vedere più di una volta grossi e-commerce dove in pagine diverse c\'era lo stesso prodotto, ma cambiava solo il colore o la dimensione o la marca. Se il prodotto è lo stesso, tieni tutto su una stessa pagina e dai la possibilità agli utenti di spuntare le caselle dei vari filtri colore, dimensioni, brand ecc…'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come scovare i contenuti duplicati o copiati?'
      },
      {
        type: 'paragraph',
        content: 'Esistono vari tool online, come Siteliner o Copyscape che inserendo il link del tuo sito, ti restituiscono sia se hai contenuti duplicati all\'interno di esso, sia se sono stati plagiati e messi su altri siti. Oppure basta selezionare una porzione di testo su cui hai dei dubbi che possa essere stato sbattuto su siti terzi, copiarla e incollarla nella barra di ricerca del motore di ricerca con le virgolette.'
      },
      {
        type: 'paragraph',
        content: 'Hai avuto o hai problemi con i contenuti duplicati o copiati? Scrivimelo in un commento ⤵️'
      }
    ]
  },
  {
    slug: 'url-rewriting',
    title: 'URL rewriting: come cambiare gli URL del sito senza fare redirect',
    category: 'seo',
    subcategory: 'technical-seo',
    date: '2023-04-08',
    excerpt: 'Impara a modificare gli URL del tuo sito mantenendo la SEO intatta.',
    content: '',
    image: '/images/url-rewriting-featured.png',
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Cosa sono le pagine dinamiche'
      },
      {
        type: 'paragraph',
        content: 'Partiamo con la spiegazione degli url dinamici, ovvero quegli indirizzi di risorse che vengono generati con i linguaggi di programmazione lato server e che cambiano quando un utente digita parole da ricercare su Google. Un URL statico è:'
      },
      {
        type: 'code',
        language: 'text',
        content: 'https://perseo.biz/meta-ads-specialist/'
      },
      {
        type: 'paragraph',
        content: 'un URL dinamico potrebbe essere'
      },
      {
        type: 'code',
        language: 'text',
        content: 'https://perseo.biz/2304.php?id=20'
      },
      {
        type: 'paragraph',
        content: 'Come vedi ci sono caratteri e simboli strani che non fanno bene all\'indicizzazione nei motori di ricerca. Ad esempio il punto interrogativo che introduce una query strings. Una query string è una parte di un URL che assegna valori a parametri specificati. In altre parole, è una stringa di testo che segue il punto interrogativo in un URL e contiene coppie di chiavi e valori separati da un segno uguale.'
      },
      {
        type: 'paragraph',
        content: 'Sono molto comuni negli e-commerce quando clicchiamo, ad esempio, su un filtro per cambiare colore o dimensione ad un prodotto. Infatti un utente non chiede di cambiare pagina, ma essi vengono generati nella stessa. Per chi visualizza queste pagine, durante la propria navigazione, essi non rappresentano assolutamente un problema (molte volte neanche se ne accorgono che nella barra degli indirizzi siano stati aggiunti parametri e altri simboli), al contrario di quanto accade nei motori di ricerca.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Perché gli url dinamici possono rappresentare un problema per i motori di ricerca?'
      },
      {
        type: 'paragraph',
        content: 'Ci sono diversi motivi per cui gli URL dinamici possono rappresentare un problema per i motori di ricerca:'
      },
      {
        type: 'paragraph',
        content: 'Lunghezza e complessità: gli URL dinamici possono essere molto lunghi e complessi, con una serie di parametri, come abbiamo appena detto, separati da simboli come "?" e "&". Questo può rendere difficile la lettura e comprensione del percorso dell\'indirizzo per i motori di ricerca. Anche per gli utenti può essere frustrante, perché sono meno facili da ricordare.'
      },
      {
        type: 'paragraph',
        content: 'Contenuto duplicato: gli URL dinamici possono generare contenuto duplicato, poiché lo stesso contenuto può essere visualizzato su URL diversi che presentano una struttura ed un contenuto quasi identico tranne che per alcuni piccoli particolari (appunto: colore, dimensione, prezzo, ma la descrizione e informazioni rimangono le medesime). In genere, soprattutto negli e-commerce, si risolve inserendo un tag=canonical alla pagina prodotto principale.'
      },
      {
        type: 'paragraph',
        content: 'Crawl budget: i motori di ricerca, quando scansionano un sito, hanno un tempo limitato. Di conseguenza, succede molte volte, che non riescono a leggere tutti gli url del sito, ma solo alcuni di loro. Ovviamente, si dovrebbero preferire gli url importanti, ovvero le pagine o articoli. Ma se lo spider dei motori di ricerca "incontra" url dinamici, pieni di quesy strings o parametri strani, non indicizzerà correttamente il sito per come lo si vorrebbe e avrà, appunto, sprecato solo tempo per leggere risorse non importanti che non ci interessa indicizzare.'
      },
      {
        type: 'paragraph',
        content: 'Tuttavia, l\'URL rewriting può aiutare a risolvere questi problemi e migliorare l\'esperienza degli utenti e l\'indicizzazione del sito.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come funziona l\'url rewriting'
      },
      {
        type: 'paragraph',
        content: 'Sostanzialmente si dà una direttiva al server il quale dovrà reinterpretare gli indirizzi url. Quindi, ogni volta che avrà in input un indirizzo A (dinamico), in output dovrà uscire un indirizzo B che simula un url statico senza parametri.'
      },
      {
        type: 'paragraph',
        content: 'Esempio:'
      },
      {
        type: 'paragraph',
        content: 'Il server riceve la richiesta dal client generata dall\'utente con un url dinamico, come quella di un prodotto filtrato di un e-commerce'
      },
      {
        type: 'code',
        language: 'text',
        content: 'https://www.perseo.biz/prodotti.php?id=123'
      },
      {
        type: 'paragraph',
        content: 'In quel momento, il server la elabora internamente e la trasforma in qualcosa di simile'
      },
      {
        type: 'code',
        language: 'text',
        content: 'https://www.perseo.biz/prodotti/generatore-url-statici/'
      },
      {
        type: 'paragraph',
        content: 'Come si può vedere, l\'url statico non ha più la query string (il punto interrogativo) o l\'id del prodotto, ma riporta testualmente ed in maniera descrittiva il prodotto contenuto nel sito perseo.biz nella folder /prodotti/, ed è importantissimo per i motori di ricerca in quanto possono leggere le parole chiavi all\'interno del percorso url.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come si possono riscrivere gli URL?'
      },
      {
        type: 'paragraph',
        content: 'Utilizzando i web server, è possibile riscrivere gli URL di un sito. I web server più utilizzati al mondo sono due: Apache e Nginx.'
      },
      {
        type: 'paragraph',
        content: '1. Con Apache è necessario usare il modulo mod_rewrite che permette di definire regole di riscrittura degli URL nel file di configurazione ".htaccess". Esempio:'
      },
      {
        type: 'code',
        language: 'apache',
        content: `RewriteEngine On
RewriteRule ^vecchia-url$ nuova-url [L]`
      },
      {
        type: 'paragraph',
        content: 'La direttiva "RewriteEngine On" abilita il modulo di riscrittura degli URL, consentendo di definire regole di riscrittura degli URL.'
      },
      {
        type: 'paragraph',
        content: 'La seconda riga, invece,'
      },
      {
        type: 'code',
        language: 'text',
        content: '"RewriteRule ^vecchia-url$ nuova-url [L]"'
      },
      {
        type: 'paragraph',
        content: 'indica che quando l\'URL richiesto corrisponde a "^vecchia-url$" (cioè l\'URL inizia con "vecchia-url"), verrà riscritto in "nuova-url". La bandiera "[L]" indica di interrompere il processo di riscrittura dopo questa regola, quindi altre regole di riscrittura successive non saranno valutate.'
      },
      {
        type: 'paragraph',
        content: '2. Con Nginx basta usare la direttiva "rewrite" nel file di configurazione del server. Esempio:'
      },
      {
        type: 'code',
        language: 'nginx',
        content: `location /vecchia-url {
rewrite ^/vecchia-url$ /nuova-url last;
}`
      },
      {
        type: 'paragraph',
        content: 'In questo esempio, tutte le richieste per /vecchia-url saranno riscritte internamente come /nuova-url.'
      },
      {
        type: 'paragraph',
        content: 'Possiamo fare anche l\'esempio in IIS, quindi con i server del sistema operativo Windows.'
      },
      {
        type: 'paragraph',
        content: 'Se non è stato ancora installato, si deve prima possibile installare il modulo "URL Rewrite" tramite il Pannello di controllo di Windows o tramite il Manager dei ruoli di Windows Server. Dopo l\'installazione del modulo "URL Rewrite", è possibile creare una regola di riscrittura utilizzando l\'interfaccia grafica di gestione del modulo o definendo manualmente una regola nel file di configurazione "web.config" del sito web. Esempio:'
      },
      {
        type: 'code',
        language: 'xml',
        content: `<rule name="Example" stopProcessing="true">

    <match url="^vecchia-url$" />

    <action type="Rewrite" url="nuova-url" />

</rule>`
      },
      {
        type: 'paragraph',
        content: 'Questo codice è un esempio di come utilizzare il modulo URL Rewrite in IIS per riscrivere gli URL senza effettuare un redirect.'
      },
      {
        type: 'paragraph',
        content: '<rule name="Example" stopProcessing="true">: Questa riga definisce una nuova regola di riscrittura chiamata "Example" e imposta l\'attributo stopProcessing su true, il che significa che se questa regola viene soddisfatta, non verranno elaborate ulteriori regole.'
      },
      {
        type: 'paragraph',
        content: '<match url="^vecchia-url$" />: Questa riga definisce il modello di URL da riscrivere. In questo caso, l\'URL deve corrispondere esattamente a vecchia-url.'
      },
      {
        type: 'paragraph',
        content: '<action type="Rewrite" url="nuova-url" />: Questa riga definisce l\'azione da intraprendere quando l\'URL corrisponde al modello definito nella riga precedente. In questo caso, l\'azione è di tipo "Rewrite" e l\'URL viene riscritto come nuova-url.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'URL rewriting e Regex'
      },
      {
        type: 'paragraph',
        content: 'Le espressioni regolari (Regex) sono un potente strumento per trovare e sostituire pattern di testo in modo flessibile, e possono essere utilizzate per riscrivere gli URL in modo da ottenere una struttura più pulita o per migliorare l\'indicizzazione dei motori di ricerca. Quindi, se si ha un grande numero (o tutti) gli url di un sito che contengono query strings e si vogliono eliminare con una sola direttiva di codice, con queste espressioni regolari è possibile farlo senza complicarsi troppo la vita.'
      },
      {
        type: 'paragraph',
        content: 'Ad esempio, se il tuo sito web utilizza un formato di URL del tipo'
      },
      {
        type: 'code',
        language: 'text',
        content: '"https://www.perseo.biz/pagina.php?id=123",'
      },
      {
        type: 'paragraph',
        content: 'e vuoi riscriverlo in un formato più amichevole per gli utenti e per i motori di ricerca come'
      },
      {
        type: 'code',
        language: 'text',
        content: '"https://www.perseo.biz/pagina/123",'
      },
      {
        type: 'paragraph',
        content: 'puoi utilizzare un\'espressione regolare come questa in un file di configurazione di URL rewriting (ad esempio, in un file .htaccess per un server Apache):'
      },
      {
        type: 'code',
        language: 'apache',
        content: `RewriteEngine On
RewriteRule ^pagina/([0-9]+)/?$ pagina.php?id=$1 [NC,L]`
      },
      {
        type: 'paragraph',
        content: 'Dove la parte ^pagina/([0-9]+)/?$ è un\'espressione regolare che corrisponde a un URL che inizia con "pagina/" seguito da uno o più numeri e termina con un "/" opzionale.'
      }
    ]
  },
  {
    slug: 'come-internazionalizzare-in-modo-ottimale-un-sito',
    title: 'Come internazionalizzare in modo ottimale un sito',
    category: 'seo',
    subcategory: 'technical-seo',
    date: '2023-03-31',
    excerpt: 'Guida completa all\'internazionalizzazione del tuo sito web per mercati esteri.',
    content: '',
    image: '/images/internazionalizzazione-featured.png',
    sections: [
      {
        type: 'paragraph',
        content: 'Se hai un e-commerce o comunque un servizio che è già attivo in Italia o nel paese natìo e vuoi espanderlo in altri paesi, devi stare molto attento ad una serie di step e configurazioni necessarie.'
      },
      {
        type: 'paragraph',
        content: 'Innanzitutto domandati: a chi mi sto rivolgendo? Alcuni CEO e titolari con cui ho parlato negli anni, alla fine volevano creare un sito multilingua, ma per gli stranieri che vivevano in Italia. Discorso diverso per chi, invece, cerca di espandere il mercato rivolgendosi ai Paesi esteri. Parliamo invece qui di siti multiregionali, cioè quando vuoi rivolgerti agli abitanti di un certo Paese.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Analisi'
      },
      {
        type: 'paragraph',
        content: 'Sicuramente cominciare analizzando il target, la lingua, gli usi, i costumi di una determinata località è uno step necessario per configurare al meglio i processi aziendali lì. Bisogna non perdere la propria brand identity, ma adattandosi e immergendosi in quella specifica cultura. Questo significa che, tecnicamente, anche gli orari possono cambiare. La mia attività avrà sicuramente una chat o un supporto per gli utenti e, qualora si spostasse in America, dovrò avere chi lavora da lì direttamente o assumere persone che vivono in Italia che parlano l\'americano, ma disposte a lavorare di notte.'
      },
      {
        type: 'paragraph',
        content: 'Se ho un e-commerce che voglio aprire anche negli Stati Uniti sarò obbligato a gestire le spedizioni americane, così come dovrò impostare la sales tax (la nostra IVA) dei vari Stati (per esempio: l\'aliquota della sales tax della California è il 7,25%).'
      },
      {
        type: 'paragraph',
        content: 'Altro passaggio è verificare se la mia tipologia di prodotto è opportuna inserirle nel mercato di quel dato Paese. Ad esempio: se vendo carne suina di alta qualità e sto cercando di internazionalizzare il mio e-commerce nei Paesi arabi, ci saranno diversi problemi nel target.'
      },
      {
        type: 'paragraph',
        content: 'Non per ultimo, adattare la strategia di pricing: il prezzo è un fattore importante per i clienti di tutto il mondo. È necessario adattare la strategia di pricing ai diversi mercati, tenendo conto dei costi di produzione, dei dazi doganali e della concorrenza locale.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Contenuti'
      },
      {
        type: 'paragraph',
        content: 'Ora che sono entrati in gioco ChatGPT e Bing AI, non farti tentare di scrivere contenuti per il tuo sito o le loro versioni in altri Paesi usando completamente questi strumenti senza revisioni, né controlli umani. Non sono perfetti al 100% e gli errori che possono generare, sono dietro l\'angolo.'
      },
      {
        type: 'paragraph',
        content: 'Avere un copywriter che generi gli articoli, conoscendo alla perfezione: modi di dire, espressioni locali, termini più appropriati al contesto semantico, è di indubbio vantaggio e potenziali segnali che Google potrebbe apprezzare molto, posizionando il tuo sito più in alto rispetto ai tuoi competitor. I contenuti, inoltre, devono tenere conto, oltre alla cultura, ma anche alle regolamentazioni locali e giurisprudenza nazionale, così come ai controlli legati alla qualità del prodotto che potrebbero eseguire nei tuoi confronti.'
      },
      {
        type: 'paragraph',
        content: 'In America, se vendi prodotti alimentari, potresti ricevere visita dal Food and Drug Administration o dal dipartimento dell\'Agricoltura degli Stati Uniti (USDA)'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Siti Multilingua e multiregionali: le tecniche'
      },
      {
        type: 'paragraph',
        content: 'Ora, dopo una dovuta parentesi introduttiva teorica sull\'internazionalizzazione digitale di un\'azienda, è arrivato il momento di immergerci un po\' nel mondo della tecnica. Partiamo dagli utenti che trovano un sito multilingua: questa situazione è abbastanza semplice. Puoi aggiungere direttamente sul menù una tendina che permette di scegliere all\'utente la lingua che preferisce. Se clicca su "En", vedrà automaticamente tutto il testo del sito in inglese. Così come sarà per le altre lingue. Per gli utenti è facile, basta un click e seleziona la lingua. Per i motori di ricerca, potrebbe essere un po\' fastidioso. Gli algoritmi potrebbero porsi il problema di quale pagine inserire nelle pagine delle ricerche. La versione italiana, quella inglese o qualche altra lingua? Purtroppo, ancora oggi, vanno un po\' in confusione.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'L\'attributo Hreflang'
      },
      {
        type: 'paragraph',
        content: 'È qui che Google viene in aiuto agli sviluppatori con un attributo HTML che si chiama "Hreflang". Inserito nell\'head della pagina, informa i motori di ricerca che una pagina "madre" ha alcune pagine "figlie" in altre lingue. Sempre nell\'intestazione puoi inserire sia i Paesi che vuoi raggiungere, sia gli abitanti che non sono originari di quel Paese. Guarda qui:'
      },
      {
        type: 'code',
        language: 'html',
        content: `<link rel="alternate" href="http://it.miosito.com" hreflang="us-it"/>
<link rel="alternate" href="http://es.miosito.com/paese-bello" hreflang="it-es"/>`
      },
      {
        type: 'paragraph',
        content: 'Nel primo caso abbiamo un sottodominio "it.miosito" che indica che il paese a cui ci rivolgiamo è l\'Italia. Mentre, i valori dell\'hreflang "us-it" alla fine, indicano che i contenuti sono in americano/inglese, però per gli utenti che si trovano in Italia. Queste righe di codice bisognerebbe applicarle per ogni pagina che ha più versioni di lingue, in modo che Google riesca a capire quale versione mostrare a quali utenti di una determinata regione geografica.'
      },
      {
        type: 'paragraph',
        content: 'Così come nel secondo esempio: il sottodominio è spagnolo, ma stiamo dicendo a Google che i contenuti della pagina "paese bello" sono in italiano per gli utenti che si trovano in Spagna. Ricordo sempre di usare il formato ISO 639-1 per le lingue e ISO 3166-1 Alpha 2 per indicare le regioni geografiche, quindi, ad esempio:'
      },
      {
        type: 'paragraph',
        content: 'it per l\'Italia e non ita o altre varianti it-es e non ita-spa per contenuti italiani per utenti spagnoli.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Comunicare l\'hreflang nella sitemap'
      },
      {
        type: 'paragraph',
        content: 'Tra i vari metodi per dire a Google "Ehi, guarda che ho un sito in lingue diverse", c\'è anche l\'invio della sitemap. Per esempio, per questi URL:'
      },
      {
        type: 'paragraph',
        content: 'https://www.miosito.com/en/pagina-specifica https://www.miosito.com/fr/pagina-specifica https://www.miosito.com/de/pagina-specifica'
      },
      {
        type: 'code',
        language: 'xml',
        content: `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.miosito.com/en/pagina-speciica</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.miosito.com/en/pagina-speciica" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.miosito.com/fr/pagina-speciica" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.miosito.com/de/pagina-speciica" />
  </url>
  <url>
    <loc>https://www.miosito.com/fr/pagina-speciica</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.miosito.com/en/pagina-speciica" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.miosito.com/fr/pagina-speciica" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.miosito.com/de/pagina-speciica" />
  </url>
  <url>
    <loc>https://www.miosito.com/de/pagina-speciica</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.miosito.com/en/pagina-speciica" />
    <xhtml:link rel="alternate" hreflang="fr" href="https://www.miosito.com/fr/pagina-speciica" />
    <xhtml:link rel="alternate" hreflang="de" href="https://www.miosito.com/de/pagina-speciica" />
  </url>
</urlset>`
      },
      {
        type: 'paragraph',
        content: 'In questo esempio, ci sono tre voci <url>nella sitemap, una per ciascuna delle tre versioni della pagina. Il <loc> indica l\'URL della pagina stessa e ogni URL contiene anche un tag <xhtml:link> che specifica l\'attributo hreflang per indicare la lingua della pagina.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'E tramite la Search Console?'
      },
      {
        type: 'paragraph',
        content: 'No, questa opzione non è più supportata. Una volta era possibile comunicare le versioni in differenti lingue anche tramite la vecchia Search Console. Ora lo strumento è stato rimosso da tempo perché è diventato obsoleto. Però Google, ovviamente riconosce e supporta sempre il tag hreflang.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'E se non sono pagine in HTML?'
      },
      {
        type: 'paragraph',
        content: 'Puoi utilizzare l\'intestazione HTTP per informare i motori di ricerca di varianti di risorse con altri formati diversi da HTML, come il ".pdf". Esempio:'
      },
      {
        type: 'code',
        language: 'text',
        content: `HTTP/1.1 200 OK
Content-Type: application/pdf
Link:
<https://per-seo.com/en/file.pdf>; rel="alternate"; hreflang="en",
<https://per-seo.com/it/file.pdf>; rel="alternate"; hreflang="it",
<https://per-seo.com/es/file.pdf>; rel="alternate"; hreflang="es"`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Sottocartelle, sottodomini, o TLD nuovi?'
      },
      {
        type: 'paragraph',
        content: 'Nel processo di internazionalizzazione del sito web, non bisogna sottovalutare questi 3 aspetti. Conoscerli, renderà molto più chiaro il quadro e le scelte tecniche che vuoi intraprendere. Partiamo dall\'inizio.'
      },
      {
        type: 'table',
        headers: ['', 'Pro:', 'Contro:'],
        rows: [
          {
            label: 'ccTLD: perseo.biz',
            pro: [
              'Target chiarissimo',
              'Segnale Internazionale forte',
              'Risultati di ricerca più pertinenti',
              'Facile set up di Search Console'
            ],
            contro: [
              'Scelta costosa',
              'Gestione difficoltosa essendo più siti)',
              'Target di un solo paese'
            ]
          },
          {
            label: 'Sottodominio: it.per-seo.com',
            pro: [
              'Semplice Setup',
              'Segnale internazionale buono',
              'Facile implementazione su Search Console'
            ],
            contro: [
              'Segnale internazionale meno forte del TLD',
              'Risultati di ricerca meno pertinenti'
            ]
          },
          {
            label: 'Sottocartelle: per-seo.com/it/',
            pro: [
              'Facile setup',
              'Economico',
              'Unico dominio forte'
            ],
            contro: [
              'Segnale internazionale debole',
              'Risultati di ricerca più confusi'
            ]
          },
          {
            label: 'Parametri URL: per-seo.com?loc=it',
            pro: [
              'Economico'
            ],
            contro: [
              'Difficoltà del motore di ricerca a leggere gli indirizzi URL',
              'Segnale internazionale molto debole',
              'Generalmente non consigliato'
            ]
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quale la migliore scelta?'
      },
      {
        type: 'paragraph',
        content: 'Naturalmente la risposta è: dipende. Se hai un e-commerce molto grosso e vuoi essere presente in maniera capillare nei vari Paesi, non ti resta che comprare quanti più domini possibili nelle nazioni che vorresti "conquistare" ed essere ben visibile su Google.de, Google.uk, Google.fr ecc…Se hai siti minori, puoi puntare benissimo sulla via di mezzo dei sottodomini. Se gli hreflang sono impostati bene, è comunque un\'ottima soluzione per far capire ai motori di ricerca quali pagine mostrare agli utenti di quella determinata nazione. Vediamo cosa dice proprio Google:'
      },
      {
        type: 'paragraph',
        content: 'La prima cosa che vorrai considerare è se ha senso per te acquistare domini di primo livello (TLD) specifici per paese per tutti i paesi che prevedi di servire… I ccTLD sono utili se desideri scegliere come target i paesi a cui è associato ciascun TLD, un metodo noto come targeting geografico. Supponiamo che i tuoi contenuti in tedesco siano specifici per gli utenti tedeschi e non altrettanto rilevanti per gli utenti di lingua tedesca in Austria o Svizzera. In questo caso, vorresti registrare un dominio sul TLD .de. Gli utenti tedeschi identificheranno il tuo sito come locale di cui è più probabile che si fidino. D\'altra parte, può essere piuttosto costoso acquistare domini sui TLD specifici per paese ed è più complicato aggiornare e mantenere più domini. Quindi, se il tuo tempo e le tue risorse sono limitati, prendi in considerazione l\'acquisto di un dominio non specifico per paese (TLD), che ospita tutte le diverse versioni del tuo sito web. In questo caso, consigliamo una di queste due opzioni:1) Mettere il ​contenuto di ogni lingua in un diverso sottodominio. Per il nostro esempio, avresti en.example.com, de.example.com ed es.example.com.'
      },
      {
        type: 'paragraph',
        content: '2)Mettere il ​​contenuto di ogni lingua in una sottodirectory diversa. Questo è più facile da gestire durante l\'aggiornamento e la manutenzione del tuo sito. Per il nostro esempio, avresti example.com/en/, example.com/de/ e example.com/es/.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'La raccomandazione di John Mueller sull\'uso di x-default'
      },
      {
        type: 'paragraph',
        content: 'John Mueller, Senior Search Analyst / Search Relations di Google, una di quelle personalità che illuminano la comunità SEO da anni, poco tempo fa si è espresso proprio su questi temi di sottocartelle ed hreflang in un thread di Reddit.'
      },
      {
        type: 'paragraph',
        content: 'Ma sottolinea, soprattutto, l\'importanza dell\'attributo x-default. Questo attributo indica ai motori di ricerca di restituire agli utenti la loro lingua specifica quando non viene specificata esplicitamente. Mettiamo che in un sito esistano la versione inglese, francese e italiana, aggiungendo questo attributo, Google mostrerà i risultati agli utenti che parlano quella specifica lingua.'
      },
      {
        type: 'paragraph',
        content: 'Ma, attenzione: Questo non lo si può fare per tutte le pagine.'
      },
      {
        type: 'paragraph',
        content: 'Mueller ha dichiarato che è un attributo molto utile per le homepage, soprattutto quando si eseguono reindirizzamenti geo-IP. L\'attributo potrebbe aiutare quando l\'home reindirizza alla versione appropriata affinché gli utenti inglesi vedano la pagina in inglese, quelli francesi in francese e gli italiani in italiano.'
      },
      {
        type: 'paragraph',
        content: '"Se per gli utenti statunitensi, "/" (solo quella pagina) reindirizza a "/us" e hai hreflang su /us, /fr con x-default assegnato a /us, ciò che può accadere è che Google veda "/" come se fosse una pagina inglese, riconoscendo anche /us, /fr come pagine separate, quindi mostra sia "/" che "/(una delle altre" nei risultati della ricerca.'
      },
      {
        type: 'paragraph',
        content: 'Questo puoi evitarlo impostando "/" come x- predefinito (anche se reindirizza), Google vedrà "/" come "/us" predefinito per gli Stati Uniti, "/fr" per la Francia.'
      },
      {
        type: 'paragraph',
        content: 'Ciò significa anche che non puoi avere "/eu" come x-default (può esserci solo un #highlander #xdefault ), ma puoi comunque usarlo specificandolo come hreflang per un gruppo di paesi comuni (puoi specificare più paesi per URL). Quindi alla fine avresti "/" = x-default, "/us" per gli Stati Uniti, "/fr" per la Francia, "/eu" per un gruppo di paesi e reindirizzare da "/" alla versione migliore .'
      },
      {
        type: 'paragraph',
        content: 'Tutto questo è solo per la home page, non lo farei per nessuna delle altre pagine del sito perché è così complesso e difficile da gestire, e anche perché la home page è probabilmente la pagina che ottiene il maggior numero di impressioni di ricerca."'
      }
    ]
  },
  {
    slug: 'come-capire-quali-pagine-del-sito-hanno-perso-traffico',
    title: 'Come capire quali pagine del sito hanno perso traffico',
    category: 'seo',
    subcategory: 'copywriting',
    image: '/images/pagine-perso-traffico-featured.png',
    date: '2023-03-24',
    excerpt: 'Usa Google Analytics e Search Console per identificare le pagine che hanno perso visibilità.',
    content: '',
    sections: [
      {
        type: 'paragraph',
        content: 'Abbiamo già parlato di cali di traffico e da quali fattori possono dipendere. Sì, ma un conto è:'
      },
      {
        type: 'list',
        items: [
          'prendersi una bella penalizzazione che vale per tutto il sito',
          'Scoprire che solo alcune pagine hanno perso traffico.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Se ti rendi conto di non avere penalizzazioni grosse (accertandoti che il tuo sviluppatore non abbia commesso violazioni alle linee guida dei motori di ricerca), ma vedi che comunque il sito è sceso di visite, potresti essere autorizzato a pensare che solo alcune pagine sono scese di posizione. Soprattutto, se sono pagine importanti che hanno un ottimo volume (cioè che vengono ricercate da molti utenti al mese) e che portano tanto traffico sul tuo sito. Quindi puoi tirare un mezzo respiro di sollievo e rimboccarti le maniche.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Quali strumenti devo utilizzare per sapere le pagine del mio sito che hanno perso traffico?'
      },
      {
        type: 'paragraph',
        content: 'Come sempre consiglio di utilizzare gli strumenti fondamentali per la SEO: Analytics e Search Console.'
      },
      {
        type: 'paragraph',
        content: 'Su GA4 basta selezionare la proprietà del sito web di cui vuoi analizzare il traffico e selezionare:'
      },
      {
        type: 'paragraph',
        content: 'Report → Coinvolgimento → Pagine e schermate e il grafico ti mostrerà l\'andamento delle pagine nel tempo (puoi selezionare le date in alto a destra).'
      },
      {
        type: 'paragraph',
        content: 'In Search Console, andiamo un po\' più verso l\'esterno del sito, incontrando le parole chiavi per cui gli utenti ti trovano. Una volta selezionata la proprietà che vuoi controllare, basta andare su:'
      },
      {
        type: 'paragraph',
        content: 'Rendimento e nella tabella sotto il grafico, selezionare "Pagine". Puoi cliccare su ogni pagina della lista vedendo l\'andamento del proprio traffico, selezionando in alto l\'intervallo di date. L\'impostazione di Search Console di default è di 3 mesi, ma tu puoi ampliarla fino a 16 mesi, così vedrai il rendimento di traffico della tua pagina.'
      },
      {
        type: 'paragraph',
        content: 'Così come, al contempo, potrai renderti conto del rendimento delle query cercate (ovvero le parole chiavi) associate alla tua pagina. Nel grafico, dove vedi le tab di "Clic totali", "Impressioni totali" e "CTR media", a fianco trovi anche "Posizione media". Selezionando questa spunta, nel grafico vedrai una linea arancione che indicherà se la tua pagina, associata a quella specifica parola chiave, sta salendo di posizione nei risultati di ricerca.'
      },
      {
        type: 'paragraph',
        content: 'È una metrica molto importante che molti sottovalutano. Perché è qui che vedi se, effettivamente, la tua pagina scala le posizioni o Google la sta scaraventando nelle ultime pagine di ricerca. Ricordati che questa è la posizione media, perciò non quella assoluta. Se Search Console ti indica, ad esempio, che quella pagina è alla posizione 45, potresti trovarla nella quarta pagina di Google, come in quinta o addirittura in terza (molte volte non è puntualmente aggiornata la Console, quindi non prendere per verità assoluta i dati che restituisce).'
      },
      {
        type: 'paragraph',
        content: 'Seozoom, invece, ti dà sia l\'esatta posizione, all\'interno della SERP (le pagine dei risultati di ricerca), della pagina associata a quella parola chiave e sia quanti utenti ha perso. Ricorda che sono solo stime. Puoi anche vedere se ci sia stato qualche aggiornamento dell\'algoritmo di Google che può aver inficiato la perdita di posizioni delle pagine in questione. In più, questo meraviglioso strumento, indica se, nonostante la perdita di posizioni, sia, comunque in leggera risalita, rispetto all\'ultima scansione Seozoom, o meno. Partendo da questi dati, puoi valutare di lasciar stare un po\' quella pagina, assistendo in modo passivo alla sua risalita oppure rimettere mano al contenuto, ai link, alla velocità ecc…'
      },
      {
        type: 'paragraph',
        content: 'Utilizzando Excel ed esportando i dati di questi tre potentissimi strumenti, puoi avere un pieno controllo di cosa fare e su quali pagine esatte agire.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Nightwatch'
      },
      {
        type: 'paragraph',
        content: 'Un altro piccolo strumento, che in realtà è un\'estensione di Chrome, si chiama Nightwatch. Una volta installato, nella barra "search query" puoi inserire la parola chiave che ti interessa e nella barra "find url" l\'url del sito. In un secondo ti restituirà la posizione esatta della pagina all\'interno dei risultati di ricerca. In questo capirai di quanto sei andato sotto per quella pagina, inserendo solo il nome dominio e non l\'url completo della pagina del tuo sito. È un piccolo strumento. La stessa operazione la puoi fare da Seozoom, ma se sei in quel momento su Chrome e vuoi fare una ricerca al volo, è molto utile.'
      }
    ]
  },
  {
    slug: 'anteprima-prodotti-in-pagine-google',
    title: 'Come posso far apparire i miei prodotti nelle pagine Google',
    category: 'seo',
    subcategory: 'technical-seo',
    date: '2023-03-14',
    excerpt: 'Implementa i dati strutturati per far apparire i tuoi prodotti nei rich snippets di Google.',
    content: '',
    image: '/images/errori-404-featured.png',
    sections: [
      {
        type: 'paragraph',
        content: 'Iniziamo con un po\' di glossario di Web Marketing, così abbiamo meno problemi di termini in futuro. Non spaventarti, ho bisogno che tu conosca solo 2 termini in "web marketese", così riuscirai a seguirmi meglio in questo ed in altri articoli:'
      },
      {
        type: 'paragraph',
        content: 'SERP = sta per Search engine results page. Cioè le classiche pagine di ricerca. Quando cerchi qualcosa su Google e vedi i siti in ordine, quella è la prima pagina della SERP. Se prosegui verso la seconda e le altre pagine, sei sempre nelle SERP, ma stai vedendo i risultati/siti che, a quanto pare, piacciono di meno a Google. Altrimenti li avresti trovati in prima pagina, subito dopo che effettui una qualsiasi ricerca.'
      },
      {
        type: 'paragraph',
        content: 'SNIPPET = gli snippet non sono altro che i siti all\'interno della SERP. Vedi il titolo della pagina, sotto l\'indirizzo URL e poi una descrizione di quel sito specifico? Bene le 3 cose insieme, creano un unico Snippet. Quindi, ogni risultato/sito ha un suo snippet: con un proprio titolo, un indirizzo e una descrizione.'
      },
      {
        type: 'paragraph',
        content: 'Bene, fatta questa brevissima premessa, possiamo già addentrarci nel cuore dell\'argomento di questo articolo. Ti blocco subito. Forse starai già pensando "Ma io vedo non solo questi snippet come li chiami tu, ma alcune volte vedo delle stellette, delle immagini a fianco il sito, oppure, ricordo che quando ho cercato su Google "ricetta carbonara", a metà della prima pagina, ho visto dei riquadri con 3 foto e 3 ricette della carbonara di 3 siti diversi".'
      },
      {
        type: 'paragraph',
        content: 'Non è raro infatti imbattersi in questi snippet ricchi. Difatti si chiamano proprio "Rich Snippet" e fanno apparire il proprio sito diversamente rispetto agli altri. Così un utente quando scorre i risultati di ricerca, viene più colpito dalle stellette o dai riquadri ed è più portato a cliccare ed entrare in quelle pagine.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come si fa ad ottenere questi risultati?'
      },
      {
        type: 'paragraph',
        content: 'Non c\'è nessun trucco, nessuna magia e non è vero, come alcuni truffatori dicono, che decide Google se vuole far apparire nei suoi risultati stelle, recensioni, immagini ecc… In parte è vero. Nel senso che il giudice finale è sempre il motore di ricerca, questo è indubbio. Ma noi possiamo fare qualcosa? Certamente. Dobbiamo comunicare a Google che vogliamo quelle "aggiunte" nel nostro snippet.'
      },
      {
        type: 'paragraph',
        content: 'Sì, ma come? No, non dobbiamo chiamare nessuna assistenza e chiedere se possono farci il piacere di mettere foto, stelline o altro. Bisogna comunicare, ovviamente, tramite codice. Qui scenderò un po\' più nel tecnico.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Aggiungere i dati strutturati nel tuo sito web'
      },
      {
        type: 'paragraph',
        content: 'I dati strutturati comunicano a Google le informazioni aggiuntive sulle tue pagine e i tuoi prodotti, così, comprendendo meglio ciò che tratta il sito, può decidere, eventualmente, di applicare i risultati avanzati che accennavamo prima.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come inserire i dati strutturati?'
      },
      {
        type: 'paragraph',
        content: 'Se utilizzi un CMS come WordPress, esistono vari plug-in che consentono di inserire i dati strutturati sul tuo sito senza che tu debba conoscere codici e avere requisiti tecnici. Il formato che Google preferisce, si chiama "Json-ld" e questo è un esempio:'
      },
      {
        type: 'code',
        language: 'html',
        content: `<html>
  <head>
    <title>'Nduja di Spilinga</title>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "'Nduja di Spilinga",
      "description": "Prodotto artigianale e tipico della Calabria, la 'nduja viene preparata con rifili di pancetta e guanciale del suino.",
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Perseo"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      }
    }
    </script>
  </head>
  <body>
  </body>
</html>`
      },
      {
        type: 'paragraph',
        content: 'Scusami, ma ho fatto un esempio con la \'Nduja di Spilinga che amo da morire. Dunque, ho comunicato a Google che nel mio sito esiste un prodotto che si chiama "\'Nduja di Spilinga", con una certa descrizione e con un\'ottima valutazione "4" su "5" che è il best rating. Sostituendo questi valori (nome, descrizione ecc..) avrai anche tu comunicato a Google quel prodotto e, se deciderà un giorno, potrai vedere le stra-citate stelle nei risultati di ricerca in corrispondenza del tuo snippet.'
      },
      {
        type: 'paragraph',
        content: 'Visita il sito di schema e guarda quali informazioni in più vorresti aggiungere per il tuo sito. Una volta letti i vari schemi che ti servono, non resta che copiare e incollare il codice json-ld sulle tue pagine specifiche, ricordandoti di sostituire le tue informazioni da quelle di default che hai selezionato dal sito schema.org.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come far apparire i prodotti nei riquadri in alto della pagina di ricerca Google?'
      },
      {
        type: 'paragraph',
        content: 'Se intendi questi risultati:'
      },
      {
        type: 'image',
        src: '/images/google-shopping-prodotti.webp',
        alt: 'google shopping prodotti'
      },
      {
        type: 'paragraph',
        content: 'Dovrai aggiungere delle stringhe di codice all\'interno del json-ld, come ad esempio:'
      },
      {
        type: 'code',
        language: 'html',
        content: `<html>
  <head>
    <title>'Nduja di Spilinga </title>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "'Nduja di Spilinga ",
        "image": [
          "https://perseo.biz/wp-content/uploads/2023/03/1x1.png",
          "https://perseo.biz/wp-content/uploads/2023/03/4x3.png",
          "https://perseo.biz/wp-content/uploads/2023/03/16x9.png"
         ],
        "description": " Prodotto artigianale e tipico della Calabria, la 'nduja viene preparata con rifili di pancetta e guanciale del suino.",
        "sku": "0446310786",
        "mpn": "925872",
        "brand": {
          "@type": "Brand",
          "name": "Spilinga SRL"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Perseo"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "reviewCount": "89"
        },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "5",
          "lowPrice": "4,80",
          "highPrice": "9,99",
          "priceCurrency": "EUR"
        }
      }
    </script>
  </head>
  <body>
  </body>
</html>`
      },
      {
        type: 'paragraph',
        content: 'Come vedi ho aggiunto alcune foto, il brand, lo sku, il prezzo principale e il prezzo scontato. Ma potrebbe non bastare, perché può essere necessario caricare i tuoi prodotti in Google Merchant Center. Questi valori e, qualcuno in più, dovrai reinserirli quando, una volta registrato sulla piattaforma, sarai all\'interno della sua dashboard. Stavolta non ci sarà nessun codice strano, ti troverai di fronte un\'interfaccia molto intuitiva e, di conseguenza, sarà molto facile inserire i valori nei campi.'
      },
      {
        type: 'paragraph',
        content: 'Anzi, settando alcune opzioni, avrai la possibilità di caricare il tuo feed di prodotti o addirittura lasciar scansionare il tuo sito da Google stesso, non esaurendoti più di tanto. Su come inserire i prodotti e farli apparire in Google Shopping, mi incaricherò di scrivere un articolo o fare un video tutorial a parte.'
      },
      {
        type: 'paragraph',
        content: 'Ma già adesso, su youtube e altri siti, troverai ottime guide che ti seguiranno step by step nel processo di aggiunta di prodotti. Ti basti sapere che i dati strutturati, più l\'utilizzo di Merchant Center, sono la migliore operazione per far capire e migliorare l\'esperienza dell\'algoritmo Google nella comprensione del feed dei prodotti del tuo e-commerce.'
      }
    ]
  },
  {
    slug: 'perche-un-sito-perde-visite',
    title: 'Perché un sito perde visite',
    category: 'seo',
    subcategory: 'technical-seo',
    image: '/images/sito-perde-visite-featured.png',
    date: '2023-03-14',
    excerpt: 'Analisi delle cause principali della perdita di traffico organico e come risolverle.',
    content: '',
    sections: [
      {
        type: 'paragraph',
        content: 'Ci sono varie spiegazioni tecniche e meno tecniche sulle ragioni per cui un sito perda un consistente numero di visite. Alcune di natura interna al sito e altre dovute a fattori esterni. Ma prima di farsi prendere dal panico e assumere tranquillanti, esaminiamo con calma i principali fattori. Innanzitutto da dove stai vedendo la perdita di traffico? Da Analytics, Search Console, Semrush, Seozoom o tool come Similarweb?'
      },
      {
        type: 'paragraph',
        content: 'È importante conoscere la diversità di questi strumenti perché riportano dati e numeri diversi l\'uno dall\'altro, proprio perché alcuni di loro raccolgono dati di stima e altri dati molto più certi.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Stai guardando le visite da Google Analytics/GA4?'
      },
      {
        type: 'paragraph',
        content: 'Ok. Un errore che ho fatto anni fa, è stato quello di vedere un calo di visite incredibile da Analytics ma, allo stesso tempo, vedere le parole chiavi, che portavano più traffico sul sito, immobili in prima pagina. Non avevano neanche cambiato posizione all\'interno della prima pagina. E allora cos\'era successo? Il fatto di essere giovane e non avere tanta esperienza. Scherzo (o meglio: non tanto). In buona sostanza avevo inserito il codice di Google Analytics all\'interno del sito in WordPress dentro il file "header.php" precisamente tra l\'apertura del tag'
      },
      {
        type: 'code',
        language: 'html',
        content: '<head> e la sua chiusura</head>.'
      },
      {
        type: 'paragraph',
        content: 'Fin qui tutto ok. Vedevo le visite, le conversioni che crescevano, le pagine più visitate, quali dispositivi utilizzavano gli utenti che atterravano sul sito ecc…Insomma nessun tipo di problema. Ma un giorno, dopo aver fatto una sana e ricca colazione ed essermi seduto di fronte la mia scrivania, accendo il PC, vado sul pannello di gestione Analytics e vedo una calata di visite, stile montagna russa dei Luna Park, verso il basso. Non ho assunto psicofarmaci, ma sono andato nel pallone più totale, anche perché, come dicevo prima, vedevo tutto regolarmente nei risultati di ricerca. Dopo aver fatto qualche domanda a qualche amico e aver scritto su alcuni gruppi Facebook e forum di WordPress, finalmente ne sono venuto a capo. Il problema era che non stessi usando un tema child.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Cos\'è un tema child di WordPress?'
      },
      {
        type: 'paragraph',
        content: 'Un tema child è, appunto, un tema figlio che è l\'esatta copia del tema padre.'
      },
      {
        type: 'paragraph',
        content: 'Sì, ma perché dovrei utilizzarlo in WordPress?'
      },
      {
        type: 'paragraph',
        content: 'Perché si possono fare modifiche senza modificare i codici del tema padre. È come se avesse una barriera protettiva. E questa barriera serve soprattutto a non far sovrascrivere il codice quando il tema principale viene aggiornato. Ed è quello che è successo a me: gli sviluppatori del tema che stavo utilizzando, lo hanno aggiornato e automaticamente, così come chiunque lo stava utilizzando in quel momento nel suo WordPress, si è trovato con tutti i file aggiornati. Questo vuol dire che se qualcuno aveva messo mano nel function.php, header.php o in qualsiasi altro file, le modifiche non le ha viste più perché gli sono state cancellate. Quindi, il codice di tracciamento di Analytics che avevo aggiunto prima, non esisteva più dopo l\'aggiornamento del template e Analytics mi restituiva 3 utenti nell\'ultima giornata, quando, in genere, me ne segnava, in media, 700. Consiglio spassionato:'
      },
      {
        type: 'paragraph',
        content: 'UTILIZZATE SEMPRE TEMI CHILD!'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Stai controllando le visite da Google Search Console?'
      },
      {
        type: 'paragraph',
        content: 'Ok. Se sai leggere ed usare Search Console, potrai renderti conto se hai problemi di indicizzazione di pagine. Indaga se alcune pagine presentano problemi relativi ai video, se sono in 404 o se il tuo sviluppatore ha modificato il file robots.txt rendendole non scansionabili. Controlla la sitemap se ha problemi di invio e se le risorse in essa hanno lo status code 200 e sono raggiungibili. Potresti anche avere problemi di usabilità mobile perché il testo è troppo piccolo o gli elementi del layout sono troppo vicini tra loro, causando problemi a Googlebot per smartphone. Potresti anche avere problemi di velocità di caricamento dovuta ad un appesantimento del sito per colpa di plugin che confliggono tra loro o di immagini troppo grandi. Tieni d\'occhio anche il tuo hosting: se non è perfettamente performante, potresti avere degli errori 5xx dovuti a problemi del server. In questo caso, contatta il tuo provider e una volta risolti i problemi, se hai budget, acquista una CDN, ossia una rete di server dove vengono salvati i contenuti statici del tuo sito e restituiti agli utenti molto, ma molto più velocemente.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Stai controllando le visite da Seozoom?'
      },
      {
        type: 'paragraph',
        content: 'Qui siamo in un territorio un po\' diverso. Possiamo dire che cominciamo ad uscire un po\' dal sito per vedere che situazione si sta venendo a creare fuori. Vediamo un attimo le parole chiavi associate alle pagine che stanno avendo un calo di posizioni e proviamo a ragionare seguendo un po\' di step:'
      },
      {
        type: 'list',
        items: [
          'Le parole chiavi sono stagionali? Nel senso: se hai un hotel in montagna a Roccaraso ed è marzo/aprile, stai tranquillo. Soprattutto se rimani posizionato per keywords transazionali come: "prenotare albergo Roccaraso" o "migliore hotel a Roccaraso", forse è normale che i volumi di ricerca di queste parole, scendano nei mesi primaverili ed estivi e salgano durante l\'autunno/inverno.',
          'Stai notando un calo di sabato e domenica? Se sei un\'attività che fa B2B, probabilmente le aziende chiudono nel weekend causando la perdita di traffico sul sito.',
          'Stai attento al mercato e ai competitors? Tornando all\'esempio dell\'Hotel di Roccaraso, non è che per caso c\'è qualcun altro che abbia aperto un\'attività simile alla tua e, contemporaneamente, ha sviluppato un sito migliore (per contenuti, qualità, facilità di navigazione, sicurezza, video, servizi) del tuo?',
          'Stai controllando di non essere il bersaglio di un attacco spam da qualche dominio malevolo per parole che non c\'entrano niente con i tuoi servizi/prodotti?',
          'Stai controllando che tu non abbia contenuti obsoleti, non al passo con i tempi sul sito?',
          'Stai controllando che tu non abbia contenuti duplicati (cioè pagine identiche) all\'interno del sito?',
          'Stai controllando che chi scriva i contenuti non stia copiando da altri siti?',
          'Stai controllando che, all\'interno del sito, non ci siano pagine simili che concorrono alla prima pagina di Google per le stesse parole chiavi? In questo caso è come se ti facessi concorrenza da solo e Google può ritenere gli argomenti ridondanti.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Ma allora, se non ci sono errori tecnici, perché ho una perdita di traffico?'
      },
      {
        type: 'paragraph',
        content: 'Ci possono essere cause che non dipendono direttamente da ciò che si compie nel sito e fuori. Ad esempio, le fluttuazioni delle SERP (le pagine delle ricerche Google) sono in continua evoluzione e Google non mantiene delle posizioni fisse per i siti vita natural durante. Ci sarà sempre un competitor che spierà i tuoi punti di debolezza che renderanno più forte il suo sito. E una volta che Google se ne accorgerà, saranno "volatili per diabetici" citando Lino Banfi. Perché Google riterrà quest\'ultimo degno di rappresentare gli intenti di ricerca del tuo target, premiandolo con la prima pagina o la prima posizione, una volta era regnata da te.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Le penalizzazioni'
      },
      {
        type: 'paragraph',
        content: 'Stai sempre molto attento allo sviluppatore che scegli perché potrebbe, consapevolmente o inconsapevolmente, far infuriare i motori di ricerca. Ci sono varie tecniche per cercare di "fregare" gli algoritmi, ma quando questi se ne accorgono, vale sempre la citazione di Lino Banfi di cui sopra. Si chiamano tecniche Black Hat e violano le linee guida di Google, Bing, Yandex e compagnia bella. Ad esempio una tecnica Black Hat è quella del cloaking, ovvero quel trucco di riuscire a far apparire il sito in un modo e ai motori di ricerca un altro. Come se esistessero due siti: "uno davanti per gli utenti" e "uno dietro le quinte per i motori di ricerca". Questo per mostrare ai visitatori dei contenuti che potrebbero non essere perfettamente legali o per mostrare link e pulsanti che portino a siti illegali. Infatti un\'altra tecnica Black Hat è quella di creare siti con sneaky redirect.'
      },
      {
        type: 'paragraph',
        content: 'Quali sono?'
      },
      {
        type: 'paragraph',
        content: 'Sono sicuro che li conosci benissimo: mai visto un film in streaming, ad esempio su piattaforme come altadefinizione o filmsenzalimiti? Bene, ti sarai accorto sicuramente che quando premi play, vieni reindirizzato verso altri siti creandoti un fastidio così grande che vorresti distruggere il PC. Ecco, quelli sono gli sneaky redirect e i motori di ricerca, tendono a penalizzarli seriamente. Infatti, se ci fai caso, Google, chiudendogli i domini continuamente, altadefinizione lo dribbla, cambiando sempre il TLD, cioè la parte finale dell\'URL, come:'
      },
      {
        type: 'paragraph',
        content: 'altadefinizione.org, altadefinizione.navy, altadefinizione.guest, altadefinizione.fantasy ecc…'
      },
      {
        type: 'paragraph',
        content: 'Naturalmente esistono varie altre tecniche ma non ci addentriamo troppo nel tecnico. Basta solo che teniate d\'occhio chi sta sviluppando il sito per voi. A meno che non è vostro "cuggino" che vi vuole sicuramente bene e non farebbe mai una cosa del genere (a meno che non ci siano dispute familiari).'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Penalizzazioni manuali e penalizzazioni algoritmiche'
      },
      {
        type: 'paragraph',
        content: 'Se hai le penalizzazioni manuali, puoi stare un po\' più sereno, anche perché vuol dire che non sono gravissime (un po\' come i peccati veniali) e, in molti casi, il tuo sito viene visto come una vittima. Certo, poi è necessario contattare uno sviluppatore per risolvere gli errori, però poi, una volta risolti, dovrebbe riprendere molto presto le posizioni di prima. Vengono segnalate nella Search Console all\'interno della sezione "Sicurezza e azioni manuali". Alcuni di questi problemi li abbiamo già citati:'
      },
      {
        type: 'list',
        items: [
          'link da siti malevoli,',
          'attacco hacker che buca il sito.'
        ]
      },
      {
        type: 'paragraph',
        content: 'A questi possiamo aggiungere ad esempio:'
      },
      {
        type: 'list',
        items: [
          'contenuti scarni che non aggiungono valore',
          'testo nascosto e parole chiave in eccesso (ripetute troppe volte)',
          'problemi relativi ai dati strutturati',
          'e alcune altre.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Le penalizzazioni algoritmiche sono più insidiose perché non vengono affatto segnalate né dalla Search Console, né da altri tool. Quindi, per riuscire a risalire ai problema, è molto più difficoltoso. I principali responsabili di questo tipo di penalizzazione sono le tecniche che abbiamo già citato all\'inizio di questo paragrafo.'
      },
      {
        type: 'paragraph',
        content: 'Una volta risolti i problemi, è inutile guardare le visite o le parole chiavi ogni due minuti. Bisognerà avere molta pazienza, perché se c\'è stato davvero un "pentimento", il bot di Google ci metterà diversi giorni o settimane per riportare il sito verso posizioni accettabili. Portate pazienza!'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Occhio agli update di Google'
      },
      {
        type: 'paragraph',
        content: 'Nell\'agosto 2018 ci fu un terremoto che segnò la storia degli algoritmi di Google: moltissimi siti che vertevano sulla salute e benessere e contenuti medici, videro il proprio sito sbattuto in fondo alle pagine di ricerca Google. Il perché? Fonti ufficiali dissero che Google voleva spazzare via molti di questi perché mostravano contenuti fuorvianti nei confronti di chi ricercava parole o informazioni mediche. In realtà, molte di queste risorse online che avevano ottime recensioni, contenuti freschi e aggiornati, articoli scritti da illustri medici italiani, purtroppo persero talmente tanto traffico che, alcune di loro, chiusero definitivamente la società. Sì, per chi basa tutta la propria attività sull\'online, una come questa, può rappresentare una mazzata che non ti fa rialzare più. Anche una società per cui lavorai, rischiò di chiudere definitivamente dopo il famoso "Agosto nero del 2018". E anche se trattava materie legali, Google lo giudicò negativamente e gli utenti sul sito passarono da 5000 a poche centinaia al giorno.'
      },
      {
        type: 'paragraph',
        content: 'In effetti ho preso un esempio tragico. Ovviamente non è sempre così. Gli aggiornamenti algoritmici ci sono, ma non di questa violenza. Il medic update è stato un caso raro, puoi stare tranquillo. Soprattutto se hai un sito aggiornato, con contenuti veritieri, controllati, aggiornati e scritti da personalità autorevoli nel campo specifico. Però è una buona regola, se noti dei cali nel traffico del sito costanti, informarti se ci sia stato un update da parte di Google e, se sì, quale tipo di intervento è stato apportato. Una volta acquisite le informazioni sui nuovi cambiamenti, puoi muoverti facendo le opportune modifiche che serviranno a farti ricrescere nelle pagine di ricerca.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Interventi sul sito'
      },
      {
        type: 'paragraph',
        content: 'Anche modifiche importanti al sito possono confondere l\'algoritmo e causare penalizzazioni. Mentre aggiungere contenuto coerente generalmente è positivo, cambiamenti strutturali significativi possono creare problemi:'
      },
      {
        type: 'list',
        items: [
          'Cambiare l\'architettura del sito',
          'Sostituire il menù in alto',
          'Modificare o eliminare sezioni con link importanti dalla homepage'
        ]
      },
      {
        type: 'paragraph',
        content: 'Se l\'algoritmo si aspetta di trovare una certa struttura con link in posizioni specifiche e improvvisamente non li trova più, il sito può essere penalizzato.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Migrazioni'
      },
      {
        type: 'paragraph',
        content: 'Le migrazioni sono tra gli argomenti più complessi a livello SEO e di sviluppo. Tipi di migrazione includono:'
      },
      {
        type: 'list',
        items: [
          'Da dominio vecchio a quello nuovo',
          'Da CMS ad altro CMS',
          'Da CMS a framework/linguaggio di programmazione',
          'Da www a non www (o viceversa)',
          'Da http ad https',
          'Da hosting ad altro hosting',
          'Da template ad altro template'
        ]
      },
      {
        type: 'paragraph',
        content: 'Il consiglio dato è provocatorio: NON MIGRATE! Sebbene sia legale e possibile, è un\'operazione complessa specialmente per siti con migliaia di pagine. Anche se il nuovo sito è più user-friendly, veloce e attraente, subisce solitamente un calo drammatico di visite.'
      },
      {
        type: 'paragraph',
        content: 'Immagina un negozio di abbigliamento di fiducia. Se improvvisamente non lo trovi al solito indirizzo, rimani male. Ma se vedi un cartello "Ci siamo trasferiti in Corso Garibaldi – 18", puoi scegliere di seguire o cercare altrove. Sei stato informato.'
      },
      {
        type: 'paragraph',
        content: 'Con i motori di ricerca è uguale: devi comunicare a Google, Bing e altri che il sito si trasferisce. Come?'
      },
      {
        type: 'list',
        items: [
          'Modificando il file .htaccess con direttive di reindirizzamento',
          'Usando plugin WordPress o del tuo CMS',
          'Creando reindirizzamenti pagina per pagina (non basta un\'unica direttiva come con http→https o www→non-www)'
        ]
      },
      {
        type: 'paragraph',
        content: 'Dopo la reindirizzazione, è necessario:'
      },
      {
        type: 'list',
        items: [
          'Risolvere i problemi delle pagine 404',
          'Controllare i meta tag',
          'Inviare la nuova sitemap'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Conclusione'
      },
      {
        type: 'paragraph',
        content: 'Come visto, ci sono molteplici opzioni per dedurre le cause di perdita di traffico. Ogni sito ha una storia diversa, quindi indagare a fondo è essenziale se le operazioni standard non risolvono il problema.'
      },
      {
        type: 'paragraph',
        content: 'Per siti creati con framework piuttosto che CMS, potrebbero esserci problemi più insidiosi. A volte, piccoli errori nel codice PHP (come una variabile inserita erroneamente) possono mettere il sito in noindex, causando crolli drastici di visite.'
      }
    ]
  },
  {
    slug: 'errori-404-sul-tuo-sito',
    title: 'Errori 404 sul tuo sito?',
    category: 'seo',
    subcategory: 'technical-seo',
    date: '2023-03-10',
    excerpt: 'Come gestire correttamente gli errori 404 e migliorare l\'esperienza utente.',
    content: '',
    image: '/images/errori-404-featured.png',
    sections: [
      {
        type: 'heading',
        level: 2,
        content: 'Ma cos\'è questo celebre errore 404?'
      },
      {
        type: 'paragraph',
        content: 'È un codice di stato HTTP, così come lo sono tanti altri: 403, 429, 500, 508 ecc… Questi rappresentano tutti errori, diversi, ma sempre errori. Diciamo che il numero giusto che non deve preoccuparci è il 200. Questo vuol dire che il browser (Chrome, Mozilla, Firefox, Safari ecc…) quando chiede "caro server, per caso hai questo indirizzo?" e il server risponde "certo caro Chrome, te lo do immediatamente", siamo di fronte ad un codice di stato 200. Possiamo stare tranquilli? Sì, eccetto se vuoi che non sia più raggiungibile o non voglia farla apparire nei risultati di ricerca o non voglia farla scansionare dai motori di ricerca. Ma questo discorso lo affronteremo in articoli opportuni e specifici. Ora concentriamoci sul 404.'
      },
      {
        type: 'paragraph',
        content: 'In sostanza, è una risorsa che al momento non è disponibile. Ma perché? Da cosa dipende? Di sicuro non è un problema di server. Altrimenti sarebbe apparso un errore 5xx (500, 503, 508). Quindi non telefonare al tuo servizio hosting insultando i loro lavoratori. Stavolta non c\'entrano nulla.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Perché appare?'
      },
      {
        type: 'paragraph',
        content: 'Ci sono alcuni casi, vediamoli:'
      },
      {
        type: 'list',
        items: [
          'Un utente ha digitato male l\'URL',
          'L\'URL è cambiato',
          'Il link che porta alla pagina è cambiato',
          'La connessione internet è assente'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Come riuscire a trovare questi errori?'
      },
      {
        type: 'paragraph',
        content: 'Anche qui ci sono varie soluzioni:'
      },
      {
        type: 'paragraph',
        content: 'Screaming frog: strumento che ogni SEO dovrebbe conoscere molto bene che simula il comportamento degli spider dei motori di ricerca. Basta aggiungere il dominio nella barra principale, attendere che la scansione sia finita, andare nel riquadro a destra dello schermo, scendere con il mouse fino alla sezione "Codici di risposta" e selezionare "Errori client 4xx" per sgamare tutte le pagine interrotte del sito.'
      },
      {
        type: 'paragraph',
        content: 'Search Console: una volta entrato nel tuo account e selezionato la proprietà che vuoi controllare, vai nella sezione "Indicizzazione", clicca su "Pagine" e, nella schermata a destra, ti appariranno le pagine indicizzate in verde e, scendendo con il mouse, puoi vedere le altre pagine non indicizzate con le varie problematiche, tra cui "Non trovata (404)". Clicchi et voilà le pagine in 404.'
      },
      {
        type: 'paragraph',
        content: 'GA4: è inutile perdere tempo con Universal Analytics, tanto sta per morire, poverino. Quindi vai nel tuo account GA4 e, anche qui, seleziona la proprietà che intende controllare. Nella colonnina a sinistra dove ci sono i simboli della casa, dei grafici, clicca su "Report". Subito dopo, nella colonna a fianco, seleziona "Coinvolgimento"e, sotto, clicca su "Pagine e schermate". Ora, nella schermata centrale, sotto il grafico, a fianco "Titolo pagina e classe schermata", premi la freccetta in basso e, una volta apparso il piccolo riquadro, scrivi "Percorso pagina e classe schermata". Dopodiché, cerca il titolo della pagina 404 che hai nel tuo sito, ad esempio "Pagina non trovata", ed inseriscilo nella piccola barra di ricerca, sempre sotto il grafico (c\'è il piccolo simbolo della lente d\'ingrandimento). In questo modo hai il titolo della 404 associato a tutte le risorse in quel codice di stato.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Questa pagine/risorse le devo lasciare perdere o ripristinarle?'
      },
      {
        type: 'paragraph',
        content: 'Dipende se sono pagine importanti del tuo sito. Se appartengono ad un sito vecchio lasciato morire da anni, puoi lasciarle perdere. Così come se decidi tu stesso di eliminarle, devi solo aspettare un po\' di tempo e i motori di ricerca, si renderanno conto presto del codice di stato e rimuoveranno loro stessi le pagine dai risultati di ricerca. Certo, esegui un controllo sempre. È capitato, infatti, di trovarmi URL 404, in prima pagina Google, di pagine di domini scaduti da alcuni anni.'
      },
      {
        type: 'paragraph',
        content: 'Se invece hai bisogno di ripristinarle, correggi gli errori dell\'URL o assicurati che non sia un errore di WordPress o di qualche altro CMS. Se dopo un po\' di tempo (qualche giorno) ancora hai questo problema, puoi contattare la loro assistenza e segnalare l\'episodio.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Personalizza la tua 404'
      },
      {
        type: 'paragraph',
        content: 'In che senso personalizza? Non è una pagina di errore? Che senso ha?'
      },
      {
        type: 'paragraph',
        content: 'È lecito porsi queste domande, ma se ci rifletti un attimo, non è una sciocchezza, anzi è una chance che dai in più a quei pochi (spero per te) utenti che atterrano sul tuo sito in una pagina in 404. Se non trovano nulla, ma solo la scritta "Pagina non trovata" quando va bene, se no addirittura in inglese "Not found" con tutto lo sfondo bianco, tenderanno ad andare via da qualche tuo competitor. Altro conto è far trovare una scritta creativa. Per esempio, se hai un e-commerce di prodotti alimentari, potresti scrivere "La pagina che stavi cercando se la sono già mangiati, ma non andare via. Guarda i nostri prodotti appena creati oppure effettua una nuova ricerca." E aggiungi la barra della ricerca. Già in questo modo un utente è più invogliato a non andarsene e può concederti un\'altra opportunità. Magari, chissà, magari diventa un tuo cliente fisso.'
      }
    ]
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(category: string, slug: string): Post | undefined {
  return posts.find(post => post.slug === slug && post.category === category);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category);
}

export function getPostsBySubcategory(subcategory: string): Post[] {
  return posts
    .filter(post => post.subcategory === subcategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllCategories(): string[] {
  return Object.keys(categoryMeta);
}
