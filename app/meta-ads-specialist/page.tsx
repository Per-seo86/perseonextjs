import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import QuickEmailForm from '@/components/QuickEmailForm';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Perché e come scegliere un Meta Ads Specialist | Perseo',
  description: 'Quante volte ti è capitato di scorrere la home di Facebook e notare dei post di pagine a cui non avevi messo il like?',
};

export default function MetaAdsSpecialist() {
  return (
    <div>

      {/* ── HERO ── */}
      <section
        className="relative text-white py-20"
        style={{
          background: 'linear-gradient(to right, #6039ff, #76c6fd 56%, #19dffa 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 max-w-6xl">
          <Breadcrumb items={[{ label: 'Meta Ads Specialist' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Perché e come scegliere un Meta Ads Specialist</h1>
          <p className="text-xl opacity-90">E cosa fa per far performare meglio le inserzioni Meta</p>
        </div>
      </section>

      {/* ── SEZIONE 1 ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          <div className="space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Quali sono le inserzioni Meta?</h2>
              <p className="mb-4">
                Quante volte ti è capitato di scorrere la home di Facebook e notare dei post di pagine a cui non avevi messo il like? Ecco se hanno la dicitura &ldquo;sponsorizzato&rdquo; sotto il nome della pagina, allora sono le inserzioni di Facebook.
              </p>
              <h3 className="text-2xl font-bold mb-3 mt-8 text-gray-900">Perché le inserzioni di molte pagine che vedo sulla Home, poi non le vedo sulle bacheche di quelle pagine?</h3>
              <p className="mb-4">
                Perché evidentemente l&apos;inserzionista di quelle specifiche pagine ha scelto di creare le sponsorizzate dallo strumento Business Manager. Il tool fondamentale per creare le Meta ads. Stai alla larga dei pseudo social media manager/specialist che lavorano mettendo solamente in evidenza i post della pagina. No, non è sbagliato e non è nemmeno contro la legge. Nessuno finisce in galera, ma non è un modo di lavorare.
              </p>
              <p className="mb-4">
                Perché attraverso il Business Manager puoi creare i tuoi pubblici personalizzati, caricare una lista di clienti che hai già e creare i Lookalike (cioè utenti che hanno un pattern di comportamento simile agli utenti dentro la tua lista che hai caricato su Meta). Puoi aggiungere il pixel, ossia il codicino che ti permette di sapere gli utenti cosa fanno dentro il tuo sito e settare gli eventi (acquisto, aggiungi al carrello, abbandona carrello, invio contatto, iscrizione ad una newsletter ecc…) che appariranno nel Business Manager. ossia: puoi lavorare seriamente sapendo i risultati delle metriche che ti interessano e così modificare o potenziare le varie inserzioni o gruppi di inserzioni.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Perché possono essere utili le inserzioni Meta?</h3>
              <p className="mb-4">
                Se nella parte Google ho parlato di domanda consapevole, cioè di utenti che cercano un servizio, un&apos;informazione o un prodotto sulla barra di ricerca perché vogliono ottenere ciò che chiedono in quel momento, qui in Meta parliamo, invece di domanda latente. Un utente sta scorrendo la home di Facebook o di Instagram per vedere i post dei propri amici o delle pagine a cui ha messo il Like e, all&apos;improvviso, appaiono delle sponsorizzate che gli interessano.
              </p>
              <p className="mb-4">
                Mettiamo che sia un avvocato e veda una sponsorizzata di un webinar su un argomento che interessa molto al nostro utente (non so, le nuove Riforme della Giustizia), l&apos;attenzione verrà subito catturata. Ma non poteva sapere, appena entrato sui social, che avrebbe visto questi contenuti. Gli utenti entrano su Meta per &ldquo;cazzeggiare&rdquo; (perdona la mia volgarità, ma è così) e non per lavorare (a meno che tu non sia un social media manager). Eppure, con la tua inserzione, puoi fare dire a quell&apos;utente &ldquo;In effetti non ci stavo pensando, ma è proprio interessante questo webinar. Lo seguirò.&rdquo;.
              </p>
              <p>
                Quindi, sì, le inserzioni social, se create bene, con un ottimo copy, con una creatività migliore degli altri, con una scelta del target mirata e con una proposta unica (USP), possono aumentare le vendite, la tua visibilità, le interazioni. Dipende da quello che ti serve.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUICK EMAIL FORM ── */}
      <div className="container mx-auto px-4 max-w-4xl pb-4">
        <QuickEmailForm title="Hai bisogno di una consulenza Meta Ads urgente?" recipientEmail="urgente@perseo.biz" />
      </div>

      {/* ── SEZIONE 2 ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Perché spendo troppo per le inserzioni Meta?</h2>
            <p className="mb-4">
              Dipende: devi tenere d&apos;occhio una serie di KPI che ti restituiscono l&apos;andamento delle tue campagne, gli adset e le ad. Se il CPM è troppo alto (ovvero quanto stai spendendo per 1000 impressioni), probabilmente la causa è da ricercare nelle creatività. Cambia immagini/video/caroselli con immagini più accattivanti e scrivi dei copy chiari, con la tua proposta unica e un invito all&apos;azione.
            </p>
            <p>
              Se hai tanti click ma pochi acquisti potrebbe voler dire che il problema è la landing page. Hai creato una pagina d&apos;atterraggio efficace con tutte le info e le diverse angolature del tuo prodotto/servizio specifico, una section dedicata alle recensioni, un form di contatto? No? Gli utenti atterranno nella tua homepage? Allora è ovvio che tu non stia convertendo bene.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Come posso calcolare il budget per le Meta ads?</h3>
            <p className="mb-4">
              Anche qui siamo ad un&apos;asta, ma il funzionamento e l&apos;algoritmo sono diversi rispetto a quello di Google. Perciò, ti consiglierei di guardare e studiare i tuoi competitors. La Facebook Library è uno strumento utilissimo per &ldquo;spiare&rdquo; e renderti conto di come lavorano sulle creatività e quanto spendono i tuoi avversari che vorresti superare.
            </p>
            <p className="mb-4">
              Se sai già un costo medio di conversione, cioè quanto costa mediamente un prodotto (ricavato da una o più campagne create precedentemente), basta moltiplicarlo per il numero di acquisti che ti servono per avere un margine che ti soddisfi e dividere il tutto per il numero di giorni in cui la campagna sarà attiva. Quindi se hai un prodotto e per ogni utente che effettua un acquisto, spendi 8 €, in base ai calcoli, ti serviranno almeno 100 acquisti per ottenere un margine che soddisfi i tuoi requisiti.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 my-4 font-mono text-center text-lg">
              8 × 100 / 30 = <strong>27 € /giorno</strong>
            </div>
            <p className="mb-4">
              Se non si conosce il costo medio di conversione, il calcolo è un pochino più complesso e tecnico. Nulla di che, ma eviterei di parlarne qui perché magari non riusciresti a capirmi se parlassi di CPM o CTR. Ma anche lì è un&apos;analisi che va fatta. Non ci sono discorsi che tengano. Questa purtroppo è matematica.
            </p>
            <p>
              Molti imprenditori decidono il budget a loro piacimento o danno ai social media manager dei costi totalmente inventati &ldquo;Su questa campagna posso spenderci al massimo 50€ in un mese&rdquo;. Quante volte abbiamo sentito questi ragionamenti? Fin troppe. E quanti lamenti abbiamo sentito di obiettivi non raggiunti? Fin troppi.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Perché affidarti davvero a un Meta Ads Specialist</h3>
            <p className="mb-4">
              Gestire una campagna Meta non significa &ldquo;premere pubblica e incrociare le dita&rdquo;. Forse funzionava anni fa, oggi no. Io parto sempre dai dati reali e non da sensazioni. Se ad esempio vendi t-shirt e vuoi aumentare gli ordini, non basta scrivere &ldquo;Compra la nostra maglietta&rdquo;. Serve capire chi la compra davvero, perché sceglie te e cosa possiamo mostrare nelle creatività per spingerlo a tornare sul sito. Piccole cose che però cambiano tutto.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Strategie su misura, niente pacchetti copia-incolla</h3>
            <p>
              Ogni azienda ha una storia a sé. Se gestisco le ads per una pizzeria locale, la strategia non sarà mai la stessa di un e-commerce che spedisce in tutta Italia. Può sembrare banale, ma in molti usano lo stesso schema per tutti. Io no. Creo una struttura personalizzata — test, campagne dedicate, contenuti diversi — così da portare risultati veri e non &ldquo;numeri belli da vedere&rdquo;.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">L&apos;analisi dei dati: il momento in cui tutto diventa chiaro</h3>
            <p>
              A volte mi capita di entrare in account dove la gente non guarda nemmeno le metriche più semplici. Per me, invece, sono la bussola. Un CTR basso? Significa che l&apos;ad non attira l&apos;attenzione. Un CPC alto? Forse la creatività non è abbastanza forte. Un costo per lead spropositato? Magari la landing page non funziona. Sono esempi semplici, ma rendono l&apos;idea del ragionamento che faccio ogni giorno.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Pixel, Conversion API e eventi: la parte &ldquo;tecnica&rdquo; che pochi curano davvero</h3>
            <p>
              Una delle prime cose che controllo è come traccia le conversioni il tuo sito. Ti stupiresti nel vedere quanti hanno il pixel installato male o eventi che non servono a nulla. È un po&apos; come guidare con i fari spenti di notte: puoi farcela, ma non ha senso complicarsi la vita. Con un tracciamento pulito, invece, Meta capisce subito quali utenti portano valore e ottimizza tutto in automatico.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Creatività che funzionano davvero</h3>
            <p className="mb-4">
              Una buona creatività può abbassare i costi anche del 50%. Non serve sempre qualcosa di super elaborato: a volte basta un video girato con il telefono, una frase diretta e un hook che cattura l&apos;attenzione nei primi 2 secondi. Un esempio banale? &ldquo;Ehi, questo probabilmente non lo sai… ma stai pagando troppo per X.&rdquo; Semplice, pulito, immediato. E spesso funziona meglio di un contenuto perfettissimo ma freddo.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Come faccio a scalare una campagna che sta funzionando</h3>
            <p>
              Quando una campagna va bene, molti aumentano il budget e sperano continui così. Io preferisco uno scaling controllato: aumento gradualmente, monitoro la frequenza, capisco come reagisce l&apos;algoritmo e, se necessario, apro nuovi gruppi di inserzioni per non stressare il pubblico. È un processo, non un salto nel buio.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Supporto continuo, senza sparire</h3>
            <p>
              Una cosa che mi differenzia è che non sparisco dopo aver pubblicato le campagne. Le controllo, le ottimizzo, guardo i dati, correggo ciò che serve. Anche un semplice cambio di copy o una creatività aggiornata può fare la differenza tra &ldquo;sto spendendo soldi&rdquo; e &ldquo;sto facendo soldi&rdquo;. E io voglio sempre portarti verso la seconda opzione.
            </p>
          </div>

        </div>
      </section>

      {/* ── PREZZI ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Prezzi Meta Ads una tantum</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-2" style={{ backgroundColor: '#737de8' }} />
              <div className="p-8 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#737de8' }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#737de8' }}>Consulenza Meta Ads una tantum</h3>
                <p className="text-gray-500 text-sm mb-6">Consulenza one to one</p>
                <div className="text-4xl font-black mb-6 text-gray-900">50€<span className="text-lg font-normal text-gray-500">/h</span></div>
                <Link href="/contatti" className="block w-full py-3 rounded-full font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: '#737de8' }}>
                  Contattami
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-2" style={{ backgroundColor: '#7af492' }} />
              <div className="p-8 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#7af492' }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.869V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#7af492' }}>Creazione campagne</h3>
                <ul className="text-gray-500 text-sm mb-6 space-y-1">
                  <li>Creazione copy</li>
                  <li>Creazione creative</li>
                  <li>Creazione video</li>
                  <li>Monitoraggio</li>
                  <li>Scaling</li>
                </ul>
                <div className="text-xl font-bold mb-6 text-gray-900">a partire da 100€ + IVA<span className="text-sm font-normal text-gray-500"> a campagna</span></div>
                <Link href="/contatti" className="block w-full py-3 rounded-full font-semibold transition hover:opacity-90 border-2" style={{ borderColor: '#7af492', color: '#7af492' }}>
                  Contattami
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">Vuoi avviare una collaborazione duratura?</h2>
          <p className="text-center text-gray-500 mb-8">Inviami una email personalizzata</p>
          <ContactForm recipientEmail="info@perseo.biz" />
        </div>
      </section>

    </div>
  );
}
