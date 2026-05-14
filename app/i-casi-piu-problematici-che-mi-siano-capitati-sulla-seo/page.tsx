import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'I casi più problematici che mi siano capitati sulla SEO | Perseo',
  description: 'Casi studio SEO reali: i problemi più complessi affrontati in oltre 10 anni di attività.',
};

export default function CasiSEO() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Consulente SEO', href: '/consulente-seo' }, { label: 'Casi SEO' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            I casi più problematici che mi siano capitati sulla SEO
          </h1>
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

          {/* Caso 1 - Blocco Paypal */}
          <h2 className="text-3xl font-bold mb-6">Sito estero – Blocco Paypal</h2>
          <p className="text-gray-700 mb-4">
            In più di 10 anni di attività, mi sono capitate, ovviamente, alcune sfide. Alcune grosse, altre di meno. All'inizio non ci capivo niente e avevo più difficoltà, poi con l'abitudine e il ripresentarsi di medesimi errori, c'ho fatto il callo, come tutti.
          </p>

          <h3 className="text-xl font-semibold mb-4">Il caso studio è questo</h3>
          <p className="text-gray-700 mb-4">
            Sito estero, abbastanza grosso, con molte pagine sia di prodotti che di servizi (offerte di lavoro, collaborazioni ecc…).
          </p>
          <p className="text-gray-700 mb-4">
            Sulla Search Console appaiono una caterva di pagine non scansionabili e, di conseguenza, non indicizzabili. Le pagine del blog non hanno problemi, infatti il traffico arriva tutto da lì. Ma quelle relative agli acquisti, ovviamente 0.
          </p>
          <p className="text-gray-700 mb-4">
            Nella mia ingenuità penso "Visto che il sito è in React, mi gioco tutto che è un problema di Server-Side Rendering." E avrei perso tutto, dato che Wappalyzer mi segnala che il portale ha Next.js: framework che permette una serie di operazioni SEO in React.
          </p>
          <p className="text-gray-700 mb-4">
            Voglio una conferma e da "Visualizza sorgente pagina", l'html si legge tutto. Titoli, link, paragrafi, immagini.
          </p>
          <p className="text-gray-700 mb-4">
            "Ok, quindi non può essere questo il problema" (anche perché sarebbero stati bloccati gli articoli del blog, a quel punto). Chiedo aiuto alla nostra vecchia rana (Screaming Frog), dove, in effetti, segnala una sfilza di pagine bloccate dal robots.txt. Sono tutte quelle di "acquisto". Ci siamo!
          </p>
          <p className="text-gray-700 mb-4">
            Vado sul robots, dove mi aspetto di trovare i path in disallow, ma è tutto libero. Pure troppo. È tutto in Allow. Non è possibile! Tiro giù qualche Madonna e comincio a leggere meglio i dati di Screaming Frog. Noto che nei dettagli c'è un link paypal che causa il blocco.
          </p>
          <p className="text-gray-700 mb-4">
            C'è qualcosa che non va esternamente. Comincio a cercare qualcosa "sull'Internet" e in un forum legato a paypal, c'è un utente che aveva avuto il mio stesso problema e che il blocco, secondo lui, era dovuto ai CORS.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-4">
            <p className="text-gray-700">
              I CORS (Cross-Origin Resource Sharing) sono un sistema di sicurezza del browser che impedisce che uno o più script in una pagina web, effettuino richieste verso un dominio diverso dal proprio, a meno che il server di destinazione non permetta esplicitamente tali richieste. Se PayPal non consente l'accesso alle sue risorse da parte di un dominio, le risorse non vengono caricate, causando problemi di funzionamento o visualizzazione sul sito.
            </p>
          </div>
          <p className="text-gray-700 mb-4">
            Ok forse ci sono!
          </p>
          <p className="text-gray-700 mb-4">
            Mi metto in contatto con l'assistenza ufficiale di Paypal spiegando il problema e mi dicono che sarò ricontattato a breve.
          </p>
          <p className="text-gray-700 mb-4">
            Ovviamente, mi aspettavo una risposta tipo "Sì, in effetti il sito del cliente è visto come malevolo da Paypal e quindi le pagine dove c'è il sistema di pagamento sono bloccate". Invece mi dicono che il sito è tutto ok e non è in alcuna "black list".
          </p>
          <p className="text-gray-700 mb-4">
            "Com'è possibile?" Però forse c'è una logica. Se c'è un blocco tra i browser, dovrebbero esserci problemi di visualizzazione o errori 500, 503 et similia non appena le persone tentano di effettuare un pagamento. Search Console me le avrebbe restituite con questo status code o al massimo in 404. Mi sa che sono sulla strada sbagliata.
          </p>
          <p className="text-gray-700 mb-4">
            Finalmente forse la luce della ragione (LA BAAAAANDA – cit. Blues Brothers):
          </p>
          <p className="text-gray-700 mb-4">
            Dunque, se Screaming Frog segnala che le pagine sono bloccate dal robots.txt, ma in realtà il file è completamente aperto, non è che il problema è su PayPal? Controllo ed ecco la risposta: il link PayPal contenuto nel sito, include un percorso che è in Disallow nel <strong>robots.txt di PayPal stesso</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            Finalmente tutto ha senso.
          </p>
          <p className="text-gray-700 mb-4">
            Segnalo il problema al cliente e gli invio una guida ufficiale su come aggirarlo, modificando il link in tutte le pagine coinvolte, rispettando i criteri di PayPal.
          </p>

          <h3 className="text-xl font-semibold mb-4">Com'è andata a finire?</h3>
          <p className="text-gray-700 mb-12">
            Qualche tempo dopo lascio l'agenzia che mi aveva affidato questo cliente estero e, per curiosità, controllo qualche giorno fa come va il tutto: <strong>quelle pagine sono ancora bloccate</strong>. 😅 Grazie a questo errore, il sito, ancora oggi, perde una marea di soldi al giorno.
          </p>

          {/* Caso 2 - Sito di informazione */}
          <h2 className="text-3xl font-bold mb-6">Sito di informazione – Problema principale: thin content</h2>
          <p className="text-gray-700 mb-4">
            Infatti molte news non venivano indicizzate. Cominciamo a pubblicare news lunghe, formattate per la SEO (headings, link interni ed esterni, tag alt ecc…), dettagliate, esaustive e alcune, addirittura, escono prima dei competitor. Cresciamo sulla ricerca organica, ma c'è qualcosa che blocca l'aumento di visite.
          </p>
          <p className="text-gray-700 mb-4">
            Vado sulla Search Console e mi accorgo che c'è un numero spropositato di pagine scansionate, ma non indicizzate. Il povero crawler stava faticando assai. Scansionare URL spazzatura non è bello, anche tag non pertinenti del vecchio sito, quando era in WordPress (ora è in un CMS proprietario). Bisogna bloccare questo sistema disfunzionale.
          </p>
          <p className="text-gray-700 mb-4">
            "Vabbè, ma vanno poi tutte in 404, che te frega?! poi Google le elimina" mi dicono. Il fatto è che stavano aumentando di giorno in giorno.
          </p>
          <p className="text-gray-700 mb-4">
            Rifletti, analizza e vai a beccare che all'interno della sitemap_index, ci sono 2 sitemap. "Mi sta bene" penso io. Ci sono tantissimi articoli ed è corretto che anche prima dei 50k URL, si crei una seconda sitemap per non appesantire tutto il sito in una sola. Dopo un paio di giorni, ritorno sulle 2 sitemap e vedo che hanno gli stessi URL. Sono identiche. Una la copia dell'altra.
          </p>
          <p className="text-gray-700 mb-4">
            Immediatamente faccio rimuoverne una e… tac. Lo spider sembra che torni finalmente a respirare. Così, questo intervento tecnico, insieme agli ottimi e autorevoli articoli che ormai popolano la testata, hanno fatto sì che il sito cominciasse a crescere sul serio.
          </p>
          <p className="text-gray-700 mb-6">
            Molte persone credono che basti un tag title, un H1 o H2 per far riprendere un sito. Molti addirittura dicono "sì sì abbiamo la SEO sul sito. c'è già Yoast". Ah tutto qui? Avete risolto tutto? Come si può ben vedere, la SEO è un mix perfetto di strategie, psicologia del target, tecniche (a volte complesse) e contenuti. Come tutte le cose, è un insieme di fattori esterni e interni. E soprattutto non è un'attività che può cambiarti la vita da un giorno all'altro (ho cominciato a seguire questo cliente da giugno, più o meno dov'è la freccia rossa).
          </p>
          <div className="mb-12">
            <Image
              src="/images/andamento-sito-informazione.jpg"
              alt="andamento sito di informazione Search Console"
              width={1200}
              height={600}
              className="rounded-lg shadow-md w-full"
            />
          </div>

        </div>
      </section>

      {/* Form */}
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
