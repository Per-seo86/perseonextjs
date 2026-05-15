import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import ContactForm from '@/components/ContactForm';
import TestimonialSlider from '@/components/TestimonialSlider';

export default function Home() {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative text-white overflow-hidden flex flex-col"
        style={{
          background: 'linear-gradient(to right, #6039ff, #76c6fd 56%, #19dffa 100%)',
          minHeight: '90vh',
        }}
      >
        {/* wave bg overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/Progetto-senza-titolo-15.webp')" }}
        />

        {/* Content */}
        <div className="relative flex-1 flex items-center container mx-auto px-4 max-w-6xl py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
            {/* left */}
            <div className="flex-1">
              <p className="text-sm uppercase tracking-widest mb-4 opacity-90">Digital Strategist</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Digital Strategist per aziende e startup del sud
              </h1>
              <p className="text-lg mb-10 opacity-90 max-w-xl">
                Servizi di Digital Marketing per aziende, startup e liberi professionisti della Sicilia, Calabria, Basilicata, Puglia, Campania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contatti"
                  className="bg-white font-semibold px-8 py-4 rounded-full transition hover:shadow-xl text-center"
                  style={{ color: '#6039ff' }}
                >
                  Parlami del tuo progetto →
                </Link>
                <Link
                  href="/contatti"
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full transition hover:bg-white hover:text-purple-700 text-center"
                >
                  Contattami
                </Link>
              </div>
            </div>
            {/* right image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <Image
                src="/images/marketing.png"
                alt="Digital Marketing"
                width={560}
                height={480}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Animated waves bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none h-20 md:h-28">
          <style>{`
            @keyframes waveScroll1 {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes waveScroll2 {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .wave-track1 { animation: waveScroll1 10s linear infinite; }
            .wave-track2 { animation: waveScroll2 16s linear infinite; }
          `}</style>

          {/* Back wave — slower, semi-transparent */}
          <div className="wave-track2 absolute bottom-0 flex" style={{ width: '200%', height: '100%' }}>
            <svg viewBox="0 0 1440 112" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '50%', height: '100%', display: 'block' }}>
              <path d="M0,56 C180,112 360,0 540,56 C720,112 900,0 1080,56 C1260,112 1440,28 1440,56 L1440,112 L0,112 Z" fill="white" fillOpacity="0.35" />
            </svg>
            <svg viewBox="0 0 1440 112" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '50%', height: '100%', display: 'block' }}>
              <path d="M0,56 C180,112 360,0 540,56 C720,112 900,0 1080,56 C1260,112 1440,28 1440,56 L1440,112 L0,112 Z" fill="white" fillOpacity="0.35" />
            </svg>
          </div>

          {/* Front wave — faster, solid white */}
          <div className="wave-track1 absolute bottom-0 flex" style={{ width: '200%', height: '100%' }}>
            <svg viewBox="0 0 1440 112" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '50%', height: '100%', display: 'block' }}>
              <path d="M0,70 C240,20 480,112 720,70 C960,28 1200,112 1440,70 L1440,112 L0,112 Z" fill="white" />
            </svg>
            <svg viewBox="0 0 1440 112" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '50%', height: '100%', display: 'block' }}>
              <path d="M0,70 C240,20 480,112 720,70 C960,28 1200,112 1440,70 L1440,112 L0,112 Z" fill="white" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── CHI SONO + 4 SERVICE CARDS ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#737de8' }}>
                Chi sono
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Ciao, mi chiamo Perseo e sono un <strong>Digital Strategist da più di 10 anni</strong>. Mi sono formato seguendo alcune web agency, aziende italiane e, soprattutto, studiando e mettendo in pratica la mia passione: il Web Marketing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ho deciso di dare una mano alle PMI e ai liberi professionisti del sud Italia ed aiutarli nel processo di digitalizzazione della loro attività al fine di renderli competitivi sul piano: locale, nazionale od internazionale.
              </p>
            </div>
          </div>

          {/* 4 Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SEO */}
            <Link href="/consulente-seo" className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition" style={{ backgroundColor: '#737de8' }} />
              <div
                className="text-4xl font-black mb-4 leading-none"
                style={{ color: '#737de8', opacity: 0.15, fontSize: '5rem', position: 'absolute', top: '8px', right: '16px' }}
              >1</div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#737de8' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">SEO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Supera i tuoi competitors e aumenta la tua visibilità su Google</p>
              </div>
            </Link>

            {/* SEA */}
            <Link href="/google-ads-specialist" className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition" style={{ backgroundColor: '#46d599' }} />
              <div
                className="absolute top-2 right-4 font-black"
                style={{ color: '#46d599', opacity: 0.15, fontSize: '5rem', lineHeight: 1 }}
              >2</div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#46d599' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">SEA</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Massimizza le conversioni con gli annunci su Google</p>
              </div>
            </Link>

            {/* SMM */}
            <Link href="/meta-ads-specialist" className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition" style={{ backgroundColor: '#2ac6ff' }} />
              <div
                className="absolute top-2 right-4 font-black"
                style={{ color: '#2ac6ff', opacity: 0.15, fontSize: '5rem', lineHeight: 1 }}
              >3</div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#2ac6ff' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">SMM</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Raggiungi il tuo target specifico con le inserzioni Facebook e Instagram</p>
              </div>
            </Link>

            {/* EMM */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100 cursor-default">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition" style={{ backgroundColor: '#737de8' }} />
              <div
                className="absolute top-2 right-4 font-black"
                style={{ color: '#737de8', opacity: 0.15, fontSize: '5rem', lineHeight: 1 }}
              >4</div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#737de8' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">EMM</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Aggiorna e fidelizza i tuoi clienti tramite Newsletter ed email follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COS'È IL WEB MARKETING ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Cos&apos;è il Web Marketing e perché può aiutare la tua attività
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Il web marketing è il marketing applicato al Web con l&apos;obbiettivo di ottenere risultati in termini, soprattutto di: visite e conversioni. Le conversioni vengono spesso associate agli acquisti online, ma non è così. Se hai un e-commerce, il tuo fine sarà quello di vendere di più; se hai un quotidiano online, la mission sarà quella di avere più visite. Se invece offri un servizio di psicoterapia, magari vorrai più clienti che ti contattino attraverso email o dopo il completamento di un form.
            </p>
            <p>
              Dipende dalla tua attività e dal mercato in cui sei inserita/o. Le visite e conversioni possono avvenire tramite un sito posizionato bene all&apos;interno dei motori di ricerca in modo &quot;gratuito&quot; (<Link href="/consulente-seo" className="hover:underline font-semibold" style={{ color: '#737de8' }}>SEO</Link>) oppure pagando Google, Bing, Yandex ecc…per far apparire i tuoi annunci sponsorizzati in alto nei risultati di ricerca e per mostrare i tuoi banner in siti terzi affini al tuo (<Link href="/google-ads-specialist" className="hover:underline font-semibold" style={{ color: '#46d599' }}>SEA</Link>). Virando verso la parte social, è possibile incrementare le conversioni o il traffico sul sito creando <Link href="/meta-ads-specialist" className="hover:underline font-semibold" style={{ color: '#2ac6ff' }}>campagne a pagamento su Facebook e Instagram</Link> (ormai Meta) per gli utenti che non conoscono il tuo brand, ma anche a chi ti conosce già, al fine di fidelizzarlo e non abbandonarlo alla concorrenza dopo un&apos;unica o poche conversioni sul tuo sito.
            </p>
            <p>
              La parte di Email Marketing è fondamentale per avvertire i tuoi utenti che non solo ti conoscono, ma ti hanno già lasciato i tuoi contatti acquistando un tuo prodotto, servizio o scaricando, ad esempio, una guida. Informarli e aggiornarli ti consentirà di avere una base clienti fidelizzata che aumenterà il Lifetime Value (quando, appunto, un utente compie un&apos;azione più volte nel tempo nel tuo sito). Più è grande questo numero, più vuol dire che i clienti hanno un&apos;ottima relazione con la tua attività in un determinato periodo di tempo, prendendoti come punto di riferimento in quello specifico ambito. Credo che, ormai, negli anni &apos;20 del duemila, essere visibile e, quantomeno, raggiungibile online, sia quasi un obbligo. Le aziende e attività che non investono in questo gigantesco mercato, saranno e, molte di queste, sono già tagliate fuori, al contrario di quelle che invece hanno messo da parte il budget necessario per essere presenti nei motori di ricerca e sui social.
            </p>
          </div>
        </div>
      </section>

      {/* ── COME FAR CRESCERE ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="lg:w-1/2">
              <Image
                src="/images/copetina.png"
                alt="Come far crescere le aziende del sud"
                width={600}
                height={480}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
            {/* Text + Counters */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Come far crescere le aziende del sud
              </h2>
              <p className="text-gray-700 leading-relaxed mb-10">
                L&apos;obiettivo che mi pongo è aiutare a creare o migliorare la comunicazione pubblicitaria delle PMI del sud Italia attraverso gli strumenti digitali quali: il sito web, i social e le email al fine di ottenere migliori risultati in termini di vendite di prodotti, servizi e aumentare la fiducia del brand negli occhi degli utenti.
              </p>
              {/* Counters */}
              <div className="flex gap-12">
                <div>
                  <div className="text-5xl font-black mb-1" style={{ color: '#ffc768' }}>+50</div>
                  <div className="text-gray-600 font-medium">Progetti SEO completati</div>
                </div>
                <div>
                  <div className="text-5xl font-black mb-1" style={{ color: '#2ac6ff' }}>+200</div>
                  <div className="text-gray-600 font-medium">Clienti soddisfatti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Alcune schermate del mio <strong>Lavoro</strong>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/showcase/ga4" className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/showcase-ga4.png"
                  alt="Google Analytics 4 - risultati SEO"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-end">
                  <span className="text-white font-semibold px-4 py-3 opacity-0 group-hover:opacity-100 transition flex items-center gap-2">
                    Guarda i dettagli →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/showcase/search-console" className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/showcase-search-console.png"
                  alt="Google Search Console - risultati"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-end">
                  <span className="text-white font-semibold px-4 py-3 opacity-0 group-hover:opacity-100 transition">
                    Guarda i dettagli →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/showcase/seozoom" className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/showcase-seozoom.png"
                  alt="SEOZoom - analisi SEO"
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-end">
                  <span className="text-white font-semibold px-4 py-3 opacity-0 group-hover:opacity-100 transition">
                    Guarda i dettagli →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DIGITAL STRATEGIST vs WEB AGENCY ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Perché rivolgersi ad un{' '}
            <span style={{ color: '#737de8' }}>Digital Strategist</span>{' '}
            invece che ad una{' '}
            <span style={{ color: '#2ac6ff' }}>Web Agency</span>
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Un Digital Strategist è un esperto nei vari ambiti del Web Marketing e che idea e crea le strategie migliori per un&apos;attività. La maggior parte delle volte è un freelance che collabora con aziende, startup e liberi professionisti. I benefici di &quot;reclutare&quot; una figura come la sua sono molteplici: segue passo passo il tuo brand, concentrando le sue forze nel creare e seguire costantemente campagne e strategie al fine di migliorare il ritorno economico e aumentando la reputazione della tua attività.
            </p>
            <p>
              Che sia un sito, una campagna Meta o Google, l&apos;esperto dovrà essere in grado immediatamente di riconoscere le criticità e i problemi al loro interni (che siano tecnici o contenutistici) e modificarli in modo da scalare sempre di più, abbassando il costo delle campagne e aumentando l&apos;ingresso di nuovi utenti e clienti. Così come dovrà sapere affrontare le problematiche legate al contenuto o gli errori tecnici del sito, affinché i motori di ricerca trovino pagine veloci, sicure, con contenuti che soddisfino le aspettative e le intenzioni di chi atterra sul sito. I vantaggi di scegliere una/un solo professionista rispetto alle normali Web Agency sono, fondamentalmente, due:
            </p>
            <ul className="space-y-4 mt-6">
              <li className="flex gap-4">
                <span className="font-black text-xl mt-0.5 shrink-0" style={{ color: '#737de8' }}>•</span>
                <div>
                  <strong>I costi:</strong> ovviamente, il budget per un freelance è molto ridotto rispetto ad una Web Agency che dovrà, invece, coprire tutta una serie di costi dovuti ai collaboratori/dipendenti, alle utenze della sede o sedi fisiche.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-black text-xl mt-0.5 shrink-0" style={{ color: '#737de8' }}>•</span>
                <div>
                  <strong>rapporto one to one:</strong> la comunicazione con una Web Agency è molto difficoltoso, anche perché non si parla quasi mai con chi effettivamente fa il lavoro sporco. È spesso un passaparola. Il commerciale che informa il CEO e il CEO riporta al collaboratore ciò che deve eseguire. Si perde tempo ma, soprattutto, le informazioni, molte volte, vengono riportate errate o modificate rispetto al messaggio originale. Quindi si rischia di ricontattare l&apos;agenzia per avvertire che quello che è stato appena fatto, non andava fatto. Con un freelance, c&apos;è una comunicazione migliore, c&apos;è un tempo più flessibile perché non soggetto a orari imposti e, sembrerà strano, ma aggiungerei anche, una maggiore empatia da ambo le parti.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── PERCHÉ AFFIDARSI A PERSEO ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Perché affidarsi a Perseo
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image src="/images/efficirnza.png" alt="Efficienza" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">Efficienza</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Capacità di rendimento a lungo termine</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image src="/images/competenza.png" alt="Competenza" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">Competenza</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Più di dieci anni di esperienza e formazione con Web Agency e aziende nazionali</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image src="/images/puntualita.png" alt="Puntualità" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">Puntualità</h3>
              <p className="text-gray-600 text-sm leading-relaxed">La puntualità nei lavori e negli appuntamenti con i clienti rappresentano la base della fiducia</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <Image src="/images/assistenza.png" alt="Assistenza" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3">Assistenza</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Assistenza personalizzata con i clienti</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialSlider />

      {/* ── CLIENTS LOGOS ── */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-center text-sm uppercase tracking-widest text-gray-400 font-semibold mb-8">Alcuni dei miei clienti</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[

              { url: 'https://www.internet-idee.net/', src: '/images/logo-internet-idee-new.svg', name: 'Internet Idee' },
              { url: 'https://www.ultimavoce.it/', src: '/images/logo-ultimavoce-new.webp', name: 'UltimaVoce' },
              { url: 'https://ripetiamodiritto.com/', src: '/images/logo-ripetiamodiritto-new.webp', name: 'Ripetiamodiritto' },
              { url: 'https://www.facebook.com/AziendaCupelli', src: '/images/logo-cupelli-new.jpg', name: 'Cupelli Azienda Agricola' },
              { url: 'https://www.mazingaeventi.it/', src: '/images/logo-mazinga-new.png', name: 'Mazinga' },
              { url: 'https://arkys.it/', src: '/images/logo-arkys-new.png', name: 'Arkys' },
              { url: 'https://zpress.it/', src: '/images/logo-zpress-new.png', name: 'Zpress' },
              { url: 'https://www.sisem.it/', src: '/images/logo-sisem-new.png', name: 'SISEM' },
              { url: 'http://moodsocialclub.it', src: '/images/logo-unknown2.jpg', name: 'MOOD Social Club' },
              { url: 'https://www.blteventi.it/', src: '/images/logo-bealternative-new.svg', name: 'BE Alternative' },
              { url: 'https://www.carboneclimatizzazione.com/', src: '/images/logo-carbone-new.webp', name: 'Carbone Climatizzazione' },
              { url: 'https://www.bomboniereportaconfetti.it/', src: '/images/logo-bomboniere.webp', name: 'Bomboniere Portaconfetti' },
            ].map(({ url, src, name }) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="transition">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={name} className="h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Approfondimenti dai mondi Digital Marketing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {latestPosts.map((post) => (
              <article key={post.slug} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition">
                {post.image ? (
                  <div className="relative h-48">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100" />
                )}
                <div className="p-6">
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                    {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <h3 className="text-lg font-bold mb-3 leading-snug">
                    <Link href={`/${post.category}/${post.slug}`} className="hover:text-purple-600 transition">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block font-semibold px-8 py-3 rounded-full border-2 transition hover:text-white"
              style={{ color: '#737de8', borderColor: '#737de8' }}
            >
              Visita il Blog →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-16" style={{ background: 'linear-gradient(to right, #6039ff, #76c6fd 56%, #19dffa)' }}>
        <div className="container mx-auto px-4 max-w-3xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hai un progetto in mente?
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Parliamone insieme. Ti rispondo entro 24 ore.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-left text-gray-900">
            <ContactForm recipientEmail="info@perseo.biz" />
          </div>
        </div>
      </section>

    </div>
  );
}
