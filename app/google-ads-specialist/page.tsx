import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import QuickEmailForm from '@/components/QuickEmailForm';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Google Ads Specialist | Perseo',
  description: 'Hai mai visto nei risultati di ricerca di Google questi siti?',
};

export default function GoogleAdsSpecialist() {
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
          <Breadcrumb items={[{ label: 'Google Ads Specialist' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Google Ads Specialist</h1>
          <p className="text-xl opacity-90">E cosa fa per far performare meglio gli annunci Google</p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Annunci image */}
          <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/annunci.png"
              alt="Annunci Google Ads"
              width={1238}
              height={932}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Cosa sono gli annunci Google?</h2>
              <p className="mb-4">
                Hai mai visto nei risultati di ricerca di Google questi siti? Penso proprio di sì. Ecco, non sono siti speciali. Sono siti che però hanno deciso di investire pagando Google per apparire nei risultati di ricerca a pagamento. Li vedi sia sopra sia sotto i risultati organici (ovvero: quelli &ldquo;normali&rdquo; non a pagamento).
              </p>
              <p className="mb-4">
                Questa è una piccola parte del potere di Google Ads, che non si limita a questo tipo di annunci, come vedremo in seguito. Questi catturano gli utenti della domanda consapevole ovvero quelli che cercano qualcosa su Google/Bing/Yandex ecc… e il motore di ricerca restituisce alcuni risultati secondo &ldquo;lui&rdquo; più soddisfacenti. Quindi l&apos;utente è consapevole di aver bisogno in quel momento di un prodotto, servizio, informazione ecc.. e lo richiede.
              </p>
              <h3 className="text-2xl font-bold mb-3 mt-8 text-gray-900">Come faccio a far apparire i miei annunci sopra quelli degli altri?</h3>
              <p className="mb-4">
                Al contrario della SEO, Google Ads si paga. Se vuoi vedere i tuoi annunci nei risultati di ricerca di Google, una delle campagne più utilizzate è quella in cui vengono utilizzate le parole chiavi e i tipi di corrispondenza (generica, a frase, esatta). Se hai in mente di creare questo tipo di campagna, allora devi comprare le parole chiavi come se fossi ad un&apos;asta. No, non c&apos;è il giudice con il martello che esclama a chi andrà quella specifica parola chiave ma Google Ads ti dà già un costo medio calcolato in base a quanto gli altri inserzionisti sono disposti a spendere.
              </p>
              <p className="mb-4">
                In settori non troppo competitivi, potresti trovare keyword ad anche meno di 0,50 cent.. Ma in altri settori, potresti trovare parole chiavi a più di 2 euro. Poi ad esempio, in quello assicurativo e finanziario, arriviamo a 50€ per keyword. Questo vuol dire che ogni qualvolta un utente clicca sul tuo annuncio, paghi Google 0,50/2/50€/cifra indefinita ecc…euro (ovviamente dopo aver associato un conto corrente/carte di debito nelle impostazioni di pagamento di Google Ads). Alla fine, alcuni di questi utenti, dopo aver cliccato, potrebbero scegliere di acquistare i tuoi prodotti o servizi.
              </p>
              <p>
                Quindi, qui la domanda pertinente è: quanto vuoi pagare per le keywords? Vuoi offrire più degli altri? Benissimo. Google in base ad alcuni fattori come il punteggio di qualità degli annunci ovvero: se sono pertinenti o meno; oppure se la landing page, ovvero la pagina del tuo sito che gli utenti vedono dopo aver cliccato il tuo annuncio, risulta effettivamente utile, allora in questi casi probabilmente sceglierebbe il tuo annuncio per essere visibile nella parte superiore della prima pagina di Google.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUICK EMAIL FORM ── */}
      <div className="container mx-auto px-4 max-w-4xl pb-4">
        <QuickEmailForm title="Hai bisogno di una consulenza Google Ads urgente?" recipientEmail="urgente@perseo.biz" />
      </div>

      {/* ── SECTION 2 ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-8 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ma i banner che vedo sugli altri siti fanno parte di Google Ads?</h2>
            <p className="mb-4">
              Non tutti, ma sì, molti di quelli fanno parte della rete di Google Ads. Questi annunci sono molto potenti perché consentono di far apparire i banner creati da te sui siti dove potenzialmente può dirigersi il nostro target di riferimento. Non solo, ma il bello arriva ora: puoi far apparire i tuoi banner agli utenti che hanno visitato o compiuto un&apos;azione sul tuo sito o la tua app (iscriversi ad una newsletter, averti contattato, aver comprato uno o più prodotti ecc…) mentre ne stanno visitando un altro. Tecnicamente questo viene chiamato remarketing e, insieme agli annunci di ricerca spiegati qui sopra, potrebbero farti scalare vertiginosamente il tuo business.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">E gli annunci dei prodotti che vedo nei risultati di ricerca fanno parte di Google Ads?</h3>
            <p>
              Diciamo di sì. Se hai un&apos;e-commerce e hai collegato il tuo sito con la piattaforma di Google Merchant Center, allora potresti vedere i tuoi prodotti (con foto, descrizione e prezzi) nella parte superiore dei risultati Google, appena sotto la barra di ricerca.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Quanto devo spendere per gli annunci?</h3>
            <p className="mb-4">
              Bella domanda. Dipende dal settore e vedere quanti altri inserzionisti giocano la tua stessa partita. E dipende dal margine che vuoi ottenere, ovvero il ritorno che hai sull&apos;investimento pubblicitario. Quanto ti costa un contatto o un contatto che acquista un tuo prodotto?
            </p>
            <p className="mb-4">
              Se per esempio spendi 300 € al mese per una campagna (quindi 10€ al giorno), hai 30 contatti mensili, al costo ognuno di 5€ (cioè: in media ogni 5 euro ti arriva un cliente che vuole essere seguito) che ti paga 50 € perché sei uno psicologo, il tuo ritorno (ROAS) sulla spesa pubblicitaria sarà: del 500%. Con 300 € al mese spesi, ne hai guadagnato 1500. Naturalmente non tutte le campagne potranno avere queste cifre, ed è compito di un bravo Google Ads specialist la missione di farti avere il giusto ritorno.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Posso creare campagne da solo?</h3>
            <p className="mb-4">
              Certo, non c&apos;è alcuna legge che te lo vieti. Però sappi che potresti spendere dei budget totalmente a casaccio senza tenere conto del ritorno. Ho visto alcuni titolari/imprenditori &ldquo;fare la prova&rdquo; degli annunci per vedere come andavano. Quasi sempre una schifezza. Di conseguenza le solite lamentele su come Google è una macchina mangia soldi e basta.
            </p>
            <p>
              Se l&apos;account è impostato bene fin dall&apos;inizio con campagne che performano correttamente, i risultati sono già visibili. In più, una volta ottenuto uno storico con ottimi CPA e ROAS, si possono impostare, eventualmente, le campagne smart bidding (ovvero quelle dove l&apos;offerta è gestita dal machine learning di Google per generare più conversioni) dove i miglioramenti in termini di costo per acquisto e ROAS potrebbero aumentare ancora di più.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Perché scegliere un Google Ads specialist?</h3>
            <p>
              Perché farsi seguire da un professionista è sempre un&apos;ottima decisione. Uno che sappia valutare i KPI e mettere mano ai copy, alle grafiche, all&apos;ottimizzazione delle landing page, può fare molto la differenza. …E poi costano meno delle agenzie.
            </p>
          </div>

        </div>
      </section>

      {/* ── PREZZI ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Prezzi Google Ads una tantum</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="h-2" style={{ backgroundColor: '#737de8' }} />
              <div className="p-8 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#737de8' }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#737de8' }}>Consulenza Google Ads una tantum</h3>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#7af492' }}>Creazione campagne</h3>
                <ul className="text-gray-500 text-sm mb-6 space-y-1">
                  <li>Creazione testi</li>
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
