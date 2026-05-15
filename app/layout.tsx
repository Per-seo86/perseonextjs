import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Layout from "@/components/Layout";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Perseo - Digital Marketing Specialist | SEO, Google Ads, Meta Ads",
  description: "Digital Strategist da più di 10 anni specializzato in SEO, Google Ads e Meta Ads. Consulenze e strategie su misura per far crescere la tua azienda online.",
  keywords: "SEO, Google Ads, Meta Ads, Digital Marketing, Consulente SEO, Web Marketing",
  metadataBase: new URL("https://perseo.biz"),
  alternates: {
    canonical: "https://perseo.biz",
  },
  icons: {
    icon: "/favicon-perseo.webp",
    apple: "/favicon-perseo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* ── Consent Mode v2 — default tutto denied PRIMA di GTM ── */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage:      'denied',
              ad_storage:             'denied',
              ad_user_data:           'denied',
              ad_personalization:     'denied',
              functionality_storage:  'granted',
              personalization_storage:'denied',
              wait_for_update:        500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', true);
          `}
        </Script>

        {/* ── Google Tag Manager ── */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ZFQDPMR');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZFQDPMR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Layout>{children}</Layout>
        <CookieBanner />
      </body>
    </html>
  );
}
