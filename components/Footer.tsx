import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo e Descrizione */}
          <div>
            <img src="/logo-perseo-orizzontale.png" alt="Perseo" className="h-10 mb-4 bg-white rounded px-2 py-1" />
            <p className="text-gray-400 text-sm">
              Digital Strategist specializzato in SEO, Google Ads e Meta Ads.
              Aiuto le aziende a crescere online con strategie su misura.
            </p>
          </div>

          {/* Link Utili */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chi-sono" className="text-gray-400 hover:text-white transition">
                  Chi è Perseo?
                </Link>
              </li>
              <li>
                <Link href="/consulente-seo" className="text-gray-400 hover:text-white transition">
                  Consulente SEO
                </Link>
              </li>
              <li>
                <Link href="/google-ads-specialist" className="text-gray-400 hover:text-white transition">
                  Google Ads Specialist
                </Link>
              </li>
              <li>
                <Link href="/meta-ads-specialist" className="text-gray-400 hover:text-white transition">
                  Meta Ads Specialist
                </Link>
              </li>
              <li>
                <Link href="/risultati" className="text-gray-400 hover:text-white transition">
                  I miei risultati
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Partita IVA: 03728590781</li>
              <li>
                <Link href="/contatti" className="hover:text-white transition">
                  Modulo di contatto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Perseo - Digital Marketing Specialist</p>
          <div className="mt-2 flex justify-center gap-6">
            <Link href="/cookie-policy-ue" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
