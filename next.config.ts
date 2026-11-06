import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abilita trailing slash per mantenere i permalink identici a WordPress
  trailingSlash: true,

  async redirects() {
    return [
      {
        source: '/i-casi-piu-problematici-che-mi-siano-capitati-sulla-seo/',
        destination: '/casi-studio-seo/',
        statusCode: 301,
      },
    ];
  },

  // Configurazione per le immagini (se necessario per immagini esterne)
  images: {
    domains: ['perseo.biz'],
  },
};

export default nextConfig;
