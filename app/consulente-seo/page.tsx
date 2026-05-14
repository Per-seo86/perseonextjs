import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import QuickEmailForm from '@/components/QuickEmailForm';

export const metadata: Metadata = {
  title: 'Consulente SEO | Perseo - Posizionamento Prima Pagina Google',
  description: 'Consulente SEO specializzato nel posizionare i siti in prima pagina su Google. Analisi SEO, ottimizzazione tecnica e strategie su misura.',
};

export default function ConsulenteSEO() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO' }]} light />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Chi è il consulente SEO
          </h1>
          <p className="text-lg md:text-xl inline-block bg-purple-600/70 px-6 py-2 rounded">
            E cosa fa per posizionare i siti in prima pagina su Google
          </p>
        </div>
        {/* Wave bottom */}
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

          {/* Cos'è la SEO */}
          <h2 className="text-3xl font-bold mb-6">Cos'è la SEO?</h2>
          <p className="text-lg text-gray-700 mb-4">
            La SEO è l'insieme delle strategie e delle tecniche per rendere visibile al massimo il tuo sito internet agli occhi degli utenti e dei motori di ricerca.
          </p>
          <p className="text-gray-700 mb-8">
            Se hai un sito internet e stop, purtroppo non è sufficiente. Ok, l'hai creato, benissimo, ma chi lo vede? Perché i motori di ricerca dovrebbero posizionarlo in prima pagina? È esteticamente più bello degli altri? È più originale degli altri? Purtroppo, non funziona così. Certo, la parte estetica è importantissima, la facilità di navigazione dell'utente deve essere chiara e semplice, la differenziazione della tua offerta è alla base di una solida strategia di marketing, ma ci sono almeno duecento altri fattori che i motori di ricerca prendono in considerazione possano eleggere un sito inserendolo nella prima pagina di Google.
          </p>

          {/* Prima pagina */}
          <h2 className="text-3xl font-bold mb-6 mt-12">Può il mio sito davvero arrivare in prima pagina su Google?</h2>
          <p className="text-gray-700 mb-4">
            Chi fa questo lavoro, indubbiamente, deve avere delle nozioni su alcuni linguaggi di markup e di programmazione. Se è un programmatore/sviluppatore completo: molto, ma molto meglio. Ma a mio avviso, in linea teorica, il SEO ha molto in comune con l'avvocato ed il medico. Sì, lo so, è strana come affermazione, ma adesso la spiego.
          </p>
          <p className="text-gray-700 mb-4">
            Innanzitutto, una persona seria (a prescindere che sia un SEO, un macellaio, un docente ecc…) deve essere onesto con sé stesso e con gli altri. Se un cliente mi chiede se è sicuro al 100% per quella parola chiave in prima posizione, io gli dico "Ci proverò in tutti i modi". Nel senso che adotterò tutte le capacità, conoscenze e tecniche per far apparire quel sito per quelle parole specifiche in prima posizione nella prima pagina di Google. Ma quel risultato, non posso assolutamente garantirlo. Perché il giudice che emette la sentenza è Google.
          </p>
          <p className="text-gray-700 mb-8">
            Ma non possiamo essere sicuri che quella parola fra un mese esatto sarà in quella posizione. Neanche se chiedessimo a Larry Page e Sergey Brin (i fondatori di Google) saprebbero risponderci. Google ha un algoritmo (o meglio una serie di algoritmi per via dei continui aggiornamenti) che lavora autonomamente. Negli ultimi anni è diventato ancora più intelligente al fine di seguire il linguaggio naturale degli esseri umani e ad andare incontro alla reale intenzione degli utenti quando ricercano qualcosa sul motore di ricerca. Quindi, a parte i quality raters (ovvero gli uomo e le donne che, lavorando per Google, controllano la qualità di alcuni siti), per il resto non c'è decisione, né mano umana.
          </p>

                    <QuickEmailForm />

          {/* Rimani in prima pagina */}
          <h2 className="text-3xl font-bold mb-6 mt-4">Si può rimanere in prima pagina su Google per sempre</h2>
          <p className="text-gray-700 mb-4">
            Ovviamente, una volta che il sito ha avuto un calo di posizioni nei risultati di ricerca, un bravo SEO prende in mano la situazione e cerca di "fare appello" al giudice Google adottando tecniche e risolvendo gli eventuali problemi SEO. Una volta che le criticità saranno risolte, il sito dovrebbe tornare ad avere più visite e più parole chiavi in salita. Ad essere sinceri, i cali di visite e perdite di posizioni, ci saranno sempre. Google in questo è democratico puro. Prima o poi dà spazio a tutti i siti che lo meritano. Non accetta raccomandazioni, non esistono bustarelle per corromperlo. È una macchina. È una cosa fisiologica quasi. Anche i siti dei migliori guru della SEO hanno avuto cali anche tremendi. Non ci credi?
          </p>
          <p className="text-gray-700 mb-6">
            Penso che conoscerai, anche per sentito dire, il sito di Salvatore Aranzulla, dove c'è quasi tutto lo scibile umano. È diventato negli anni una leggenda inarrivabile, perché qualsiasi cosa tu chiedessi a Google, c'era sempre lui in prima pagina. Guarda un po' cosa gli è successo recentemente.
          </p>
          <div className="mb-4">
            <Image
              src="/images/aranzulla.png"
              alt="Calo traffico Aranzulla settembre-ottobre 2022"
              width={800}
              height={450}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <p className="text-gray-700 mb-12">
            Dal 9 settembre 2022 al 21 ottobre 2022, ha perso più di 10 milioni di visite (approssimativamente: secondo i dati di Seozoom). Tranquillo nessuno è infallibile.
          </p>

          {/* Valutazione SWOT */}
          <h2 className="text-3xl font-bold mb-6">Valutazione dei punti di forza e debolezza aziendale</h2>
          <p className="text-gray-700 mb-12">
            Bhe per prima cosa, di solito, realizzo un'intervista audio o video al CEO/proprietario/libero professionista. Mi raccontano la storia, le idee, i progetti, le cose realizzate, le ambizioni, gli obiettivi di quella specifica attività; se ci sono o meno punti di diversificazione rispetto alle altre aziende, contribuendo così a conquistare la propria fetta di mercato grazie all'offerta unica della tua attività (cioè il significato di Unique selling proposition). Infine, capire quali siano le minacce e possibili "aggressioni" di mercato. Questa prima fase di analisi, è detta "Analisi SWOT". Probabilmente, ritengo questa la fase più importante, perché qui si sviscerano tutta una serie di opportunità, problematiche passate e potenzialmente future che fanno luce su dove dirigere le varie strategie. Dalla SEO alla SEM alle inserzioni social. Una volta chiarita questa parte, è tutta una strada in discesa (con i vari ostacoli annessi).
          </p>

          {/* Analisi salute sito */}
          <h2 className="text-3xl font-bold mb-6">Analisi dello stato di salute del sito</h2>
          <p className="text-gray-700 mb-4">
            Quando ho parlato poco più sopra dei SEO accostati agli avvocati, li ho anche accostati ai medici. Perché? Quante volte ci sentiamo dire "ho un sito che non fa più visite" o "gli utenti non comprano più da me, cosa posso fare?". Ovvio un check-up completo dello stato di salute del sito. Non ti sto a spiegare step by step tutta l'analisi tecnica del sito, perché probabilmente parlerei arabo se ti citassi parole come: screaming frog, errori 404 (forse questa ti è più familiare), thin content, meta tags assenti, protocolli https inesistenti, contenuti duplicati, gerarchia headings non rispettata, intenti di ricerca non raggiunti ecc…
          </p>
          <p className="text-gray-700 mb-12">
            Quindi un audit del sito è fondamentale per capire come proseguire e quali interventi adottare. L'analisi è già un lavoraccio, quindi, se sul tuo sito, hai già uno sviluppatore, un SEO specialist, una volta individuati i problemi, dialoga con lo sviluppatore, illustrandogli gli errori trovati o seguendolo passo passo per la loro effettiva risoluzione.
          </p>

          {/* SEO a tempo indeterminato */}
          <h2 className="text-3xl font-bold mb-6">E se avessi bisogno di un SEO Specialista tempo indeterminato?</h2>
          <p className="text-gray-700 mb-4">
            Non c'è problema. Sono qui per questo.
          </p>
          <p className="text-gray-700 mb-4">
            Se dopo l'audit e aver valutato positivamente il mio lavoro, ti rendessi conto che far crescere il tuo sito costantemente è il tuo obiettivo, allora potremmo parlarne con calma. Con una figura del genere, non avresti più l'ansia di non sapere perché le visite o perché le vendite del prodotto/servizio stanno crollando.
          </p>
          <p className="text-gray-700 mb-4">
            Con me o qualche mio bravo collega, non solo non avresti più l'ansia di andare a controllare la salute del sito, ma al contrario non dovresti proprio vedere il tuo sito scendere. E anche se dovessi notare questa cosa, sai già che c'è qualcuno che sta cercando di risolvere il problema. Sapresti che c'è sempre qualcuno che controlla i contenuti, aggiornandoli con le novità o colmando i gap; sapresti che c'è una figura che tiene d'occhio sempre che gli spider (ovvero i software) dei motori di ricerca, scansionino tutto il necessario e tralascino le parti non importanti o non accessibili dei siti. Ci sarà sempre qualcuno che eliminerà le pagine che non hanno più bisogno di esistere, ma di dare le giuste redirezioni alle pagine importanti ma che cambieranno indirizzo URL perché magari è cambiato il dominio ecc…
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
              <p className="text-gray-500 mb-1">Sito vetrina</p>
              <p className="text-gray-500 mb-4">Meno di 50 pagine</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire 300€</p>
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
              <p className="text-gray-500 mb-1">Sito Vetrina</p>
              <p className="text-gray-500 mb-4">Meno di 50 pagine</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 1000€</p>
              <Link href="/contatti" className="mt-auto text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
                Contattami
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-6 text-indigo-500">Analisi SEO E-Commerce</h3>
              <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
                <svg viewBox="0 0 64 64" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14">
                  <circle cx="27" cy="27" r="9"/>
                  <path d="M27 15v-3M27 42v-3M15 27h-3M42 27h-3M18.6 18.6l-2.1-2.1M37.5 37.5l-2.1-2.1M18.6 35.4l-2.1 2.1M37.5 16.5l-2.1 2.1"/>
                  <text x="27" y="31" fontSize="7" fill="#818cf8" stroke="none" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">SEO</text>
                  <line x1="33" y1="33" x2="48" y2="48" strokeWidth="2.5"/>
                  <circle cx="48" cy="48" r="4"/>
                </svg>
              </div>
              <p className="text-gray-500 mb-4">Meno di 500 prodotti</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 800€</p>
              <Link href="/contatti" className="mt-auto text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
                Contattami
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-6 text-green-400">Analisi e risoluzione problemi SEO per E-commerce</h3>
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
              <p className="text-gray-500 mb-4">Meno di 500 prodotti</p>
              <p className="text-3xl font-bold text-purple-600 mb-6">a partire da 1200€</p>
              <Link href="/contatti" className="mt-auto text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">
                Contattami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Specializzati */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Servizi SEO Specializzati</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/consulente-seo/seo-concessionarie" className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">SEO per Concessionarie</h3>
              <p className="text-gray-600 mb-4">
                Strategie SEO specifiche per concessionarie auto con gestione cataloghi vetture e posizionamento locale.
              </p>
              <span className="text-purple-600 font-semibold">Scopri di più →</span>
            </Link>

            <Link href="/consulente-seo/seo-negozi-di-arredamento" className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">SEO Negozi Arredamento</h3>
              <p className="text-gray-600 mb-4">
                Ottimizzazione SEO per e-commerce e showroom di arredamento con focus su prodotti e categorie.
              </p>
              <span className="text-purple-600 font-semibold">Scopri di più →</span>
            </Link>

            <Link href="/consulente-seo/seo-farmacie" className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4">SEO per Farmacie</h3>
              <p className="text-gray-600 mb-4">
                Consulenza SEO per farmacie con gestione cataloghi prodotti sanitari e ottimizzazione locale.
              </p>
              <span className="text-purple-600 font-semibold">Scopri di più →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Form collaborazione */}
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
