import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Casi studio Google Ads | Perseo',
  description: 'Casi studio Google Ads reali: strategie, keyword e numeri di campagne che hanno portato contatti a costi bassi.',
};

export default function CasiGoogleAds() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 text-white pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: 'Risultati', href: '/risultati' }, { label: 'Casi Google Ads' }]} light />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Casi studio Google Ads
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

          {/* Caso 1 - Infissi e serramenti */}
          <h2 className="text-3xl font-bold mb-6">Azienda di infissi e serramenti – Le keyword che nessun governo ha mai nominato</h2>
          <p className="text-gray-700 mb-4">
            La gente non cerca quello che dicono i telegiornali, <strong>cerca quello che ha in testa</strong>. Questo caso nasce da lì.
          </p>

          <h3 className="text-xl font-semibold mb-4">Il caso studio è questo</h3>
          <p className="text-gray-700 mb-4">
            Un'azienda di infissi e serramenti che vende sostituzione e riparazione di porte, finestre e affini. Ogni cliente vale circa <strong>2.000€</strong>, quindi anche un costo per contatto non bassissimo si regge. Ma più è basso, più margine resta.
          </p>
          <p className="text-gray-700 mb-4">
            Quando ho studiato i volumi di ricerca ho notato una cosa curiosa. Il governo, nelle sue comunicazioni, ha sempre parlato di "Bonus casa" e "Bonus sicurezza". Mai di "Bonus pergole", "Bonus tapparelle" o "Bonus finestre". Eppure su Google queste ricerche avevano volumi più che buoni. La gente, insomma, prende il bonus generico e lo traduce nel proprio problema: "ho una tapparella rotta, c'è un bonus?".
          </p>
          <p className="text-gray-700 mb-4">
            E il bello è che il costo per clic era irrisorio.
          </p>

          <h3 className="text-xl font-semibold mb-4">Cosa ho fatto</h3>
          <p className="text-gray-700 mb-4">
            Ho costruito le campagne di ricerca proprio su quelle keyword: "bonus pergole", "bonus tapparelle", "bonus finestre" e le loro varianti. Niente di sofisticato: il vantaggio stava nella scelta delle keyword, non nella tecnica.
          </p>

          <h3 className="text-xl font-semibold mb-4">Com'è andata</h3>
          <p className="text-gray-700 mb-4">
            Da giugno al 26 ottobre 2026: <strong>9.484 clic, CTR del 10,34%, 31 conversioni a 58,43€ ciascuna</strong>, dove per conversione intendo un contatto lasciato da un utente sul form del sito. Facendo i conti, parliamo di circa 1.800€ di spesa totale, con un costo per clic di circa 0,19€. Quindi 58€ per acquisire un contatto, su un cliente che ne vale 2.000.
          </p>
          <div className="mb-6">
            <Image
              src="/images/caso-studio-google-ads-infissi.webp"
              alt="Riepilogo del rendimento Google Ads: clic, CTR, costo per conversione e conversioni"
              width={2000}
              height={792}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <p className="text-gray-700 mb-4">
            Il CTR del 10% non è un caso: quando una ricerca è così specifica, l'annuncio che la ripete parola per parola sembra scritto apposta per chi cerca. Nel grafico c'è un buco in mezzo: non è un errore, è che ad agosto l'azienda era chiusa e le campagne sono rimaste ferme.
          </p>
          <p className="text-gray-700 mb-4">
            Onestà: i bonus sono un tema che sale e scende con le notizie, e questo tipo di opportunità non dura per sempre. Un CPC così basso non è garantito per sempre: se più inserzionisti si accorgono delle keyword, i prezzi salgono.
          </p>

          <h3 className="text-xl font-semibold mb-4">Cosa ci porto a casa</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li><strong>Il linguaggio della gente batte quello delle istituzioni:</strong> le keyword migliori a volte non esistono in nessun comunicato ufficiale.</li>
            <li><strong>Guarda il valore del cliente, non solo il costo del clic:</strong> 58€ per un contatto è tanto o poco a seconda che il cliente ne valga 100 o 2.000.</li>
            <li><strong>Le finestre di opportunità si chiudono:</strong> se le trovi, sfruttale finché costano poco.</li>
          </ul>
          <p className="text-gray-700 mb-12">
            Le keyword migliori spesso non le trovi nei comunicati. Le trovi nei volumi di ricerca.
          </p>

          {/* Caso 2 - Piattaforma legale */}
          <h2 className="text-3xl font-bold mb-6">Piattaforma legale leader – CPA di 7€ passando da SKAG a Performance Max</h2>
          <p className="text-gray-700 mb-4">
            Una piattaforma legale leader in Italia. Siamo partiti con strategie SKAG, poi siamo passati alle automatiche (CPA target su DSA) e infine a Performance Max.
          </p>
          <p className="text-gray-700 mb-4">
            Il costo per acquisizione è sceso a circa <strong>7€ per utente</strong>, con un valore di conversione di 169€ e oltre. Nel mese di dicembre 2022: <strong>566 clic, 1.377 impressioni, 30 conversioni a 6,43€ ciascuna</strong>.
          </p>
          <div className="mb-12">
            <Image
              src="/images/risultati-3.png"
              alt="Risultato Google Ads: clic, impressioni, conversioni e costo per conversione"
              width={1990}
              height={665}
              className="rounded-lg shadow-md w-full"
            />
          </div>

        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ContactForm
            title="Vuoi risultati simili con Google Ads?"
            subtitle="Parlami del tuo progetto"
          />
        </div>
      </section>
    </div>
  );
}
