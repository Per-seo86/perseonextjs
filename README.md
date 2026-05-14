# Perseo - Sito Next.js

Migrazione completa del sito perseo.biz da WordPress a Next.js + React.

## Caratteristiche

- ✅ **Next.js 15** con App Router
- ✅ **TypeScript** per type safety
- ✅ **Tailwind CSS** per lo styling
- ✅ **Permalink identici** a WordPress (con trailing slash)
- ✅ **Route dinamiche** per blog, categorie e showcase
- ✅ **SEO ottimizzato** con metadata per ogni pagina
- ✅ **Design responsive** con gradients purple/pink
- ✅ **Componenti riutilizzabili** (Layout, Header, Footer, ContactForm)

## Struttura del Progetto

```
perseo-nextjs/
├── app/                          # Pages (Next.js App Router)
│   ├── layout.tsx               # Layout principale
│   ├── page.tsx                 # Homepage
│   ├── chi-sono/                # Chi è Perseo
│   ├── contatti/                # Contatti
│   ├── risultati/               # I miei risultati
│   ├── consulente-seo/          # Consulente SEO
│   │   ├── seo-concessionarie/
│   │   ├── seo-negozi-di-arredamento/
│   │   └── seo-farmacie/
│   ├── google-ads-specialist/   # Google Ads
│   ├── meta-ads-specialist/     # Meta Ads
│   ├── consulenza-seo-in-calabria/
│   ├── blog/                    # Pagina blog
│   ├── [category]/[slug]/       # Route dinamica articoli
│   ├── category/[slug]/         # Route dinamica categorie
│   └── showcase/                # Showcase strumenti
│       └── [slug]/
├── components/                   # Componenti React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── ContactForm.tsx
├── lib/                         # Utilities e data
│   └── posts.ts                 # Database articoli blog
└── public/                      # Assets statici
```

## Permalink e URL

Il sito mantiene **tutti i permalink identici** al sito WordPress originale.

### Pagine Statiche
- `/` - Homepage
- `/chi-sono/` - Chi è Perseo
- `/contatti/` - Contatti
- `/risultati/` - I miei risultati
- `/consulente-seo/` - Consulente SEO
- `/google-ads-specialist/`
- `/meta-ads-specialist/`

### Blog e Articoli
- `/blog/` - Lista articoli
- `/seo/[slug]/` - Articoli SEO
- `/google-ads/[slug]/` - Articoli Google Ads
- `/meta-ads/[slug]/` - Articoli Meta Ads
- `/category/seo/` - Categoria SEO

### Showcase
- `/showcase/` - Lista strumenti
- `/showcase/seozoom/`
- `/showcase/search-console/`
- `/showcase/ga4/`

## Installazione e Avvio

```bash
# Installa dipendenze
npm install

# Avvia server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia server di produzione
npm start
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## TODO - Lavori da Completare

### 1. Contenuti Articoli Blog
I contenuti completi degli articoli devono essere integrati nel file `lib/posts.ts`.

### 2. Immagini
Scaricare e inserire le immagini dal sito WordPress in `public/images/`.

### 3. Pagine Rimanenti
- `/i-casi-piu-problematici-che-mi-siano-capitati-sulla-seo/`
- `/cookie-policy-ue/`
- Pagine specializzate SEO (concessionarie, arredamento, farmacie)

### 4. Form di Contatto
Implementare backend per invio email e integrazione hCaptcha.

### 5. SEO Avanzato
- Sitemap.xml
- Robots.txt
- Open Graph tags
- Structured data (JSON-LD)

### 6. Analytics
- Google Analytics 4
- Google Tag Manager

## Tecnologie Utilizzate

- **Next.js 15** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## Licenza

Proprietario: Perseo (perseo.biz) - P.IVA: 03728590781
