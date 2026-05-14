import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abilita trailing slash per mantenere i permalink identici a WordPress
  trailingSlash: true,

  // Configurazione per le immagini (se necessario per immagini esterne)
  images: {
    domains: ['perseo.biz'],
  },
};

export default nextConfig;
