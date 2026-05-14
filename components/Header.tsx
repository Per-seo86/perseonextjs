'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [zonesOpen, setZonesOpen] = useState(false);
  const [seoSubOpen, setSeoSubOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-8">
            <img src="/logo-perseo-orizzontale.png" alt="Perseo" className="h-14" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/chi-sono" className="text-gray-700 hover:text-purple-600 transition">
              Chi è Perseo?
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-purple-600 transition flex items-center"
              >
                Servizi Digital Marketing
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 mt-0 pt-2 w-64">
                  <div className="bg-white shadow-lg rounded-lg py-2">

                    {/* Consulente SEO — with nested sub-dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setSeoSubOpen(true)}
                      onMouseLeave={() => setSeoSubOpen(false)}
                    >
                      <Link
                        href="/consulente-seo"
                        className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                      >
                        Consulente SEO
                        <svg className="w-3 h-3 ml-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>

                      {seoSubOpen && (
                        <div className="absolute left-full top-0 ml-1 w-56 bg-white shadow-lg rounded-lg py-2">
                          <Link href="/consulente-seo/seo-concessionarie" className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600">
                            SEO concessionarie
                          </Link>
                          <Link href="/consulente-seo/seo-negozi-di-arredamento" className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600">
                            SEO negozi arredamento
                          </Link>
                          <Link href="/consulente-seo/seo-farmacie" className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600">
                            SEO farmacie
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link href="/google-ads-specialist" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                      Google Ads specialist
                    </Link>
                    <Link href="/meta-ads-specialist" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                      Meta Ads Specialist
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/risultati" className="text-gray-700 hover:text-purple-600 transition">
              I miei risultati
            </Link>

            {/* Zone di intervento Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setZonesOpen(true)}
              onMouseLeave={() => setZonesOpen(false)}
            >
              <button className="text-gray-700 hover:text-purple-600 transition flex items-center">
                Zone di intervento
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {zonesOpen && (
                <div className="absolute left-0 mt-0 pt-2 w-72">
                  <div className="bg-white shadow-lg rounded-lg py-2">
                    <Link href="/consulenza-seo-in-calabria" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                      Consulenza SEO in Calabria: un approccio strategico alla visibilità online
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition">
              Blog
            </Link>

            <Link href="/contatti" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Contatti
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="/chi-sono" className="block py-2 text-gray-700">
              Chi è Perseo?
            </Link>
            <Link href="/consulente-seo" className="block py-2 text-gray-700">
              Consulente SEO
            </Link>
            <Link href="/google-ads-specialist" className="block py-2 text-gray-700">
              Google Ads specialist
            </Link>
            <Link href="/meta-ads-specialist" className="block py-2 text-gray-700">
              Meta Ads Specialist
            </Link>
            <Link href="/risultati" className="block py-2 text-gray-700">
              I miei risultati
            </Link>
            <Link href="/consulenza-seo-in-calabria" className="block py-2 pl-4 text-gray-700">
              Zone di intervento
            </Link>
            <Link href="/consulenza-seo-in-calabria" className="block py-2 pl-8 text-sm text-gray-600">
              Consulenza SEO in Calabria
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700">
              Blog
            </Link>
            <Link href="/contatti" className="block py-2 text-gray-700">
              Contatti
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
