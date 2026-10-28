// Generazione di llms.txt e llms-full.txt (standard https://llmstxt.org)
// Contenuti derivati da lib/posts.ts: un nuovo post compare in automatico.
import { getAllPosts, categoryMeta, Post, PostSection } from './posts';

export const SITE_URL = 'https://perseo.biz';

const intro = `# Perseo - Digital & Growth

> Blog e consulenza di digital marketing di Lorenzo Curia (Perseo), digital strategist e web consultant freelance con base a Cosenza, in Calabria. Guide pratiche in italiano su SEO (tecnica, on-page, off-page, copywriting), Google Ads e Meta Ads, scritte da chi gestisce campagne e siti di clienti reali.

Perseo offre consulenza SEO, gestione di campagne Google Ads e Meta Ads per aziende, professionisti e attività locali, in Calabria e in tutta Italia. Le immagini generate con IA sono dichiarate in pagina; la policy completa è in ${SITE_URL}/uso-intelligenza-artificiale/.`;

const pages: { title: string; path: string; description: string }[] = [
  { title: 'Chi sono', path: '/chi-sono/', description: 'Chi è Perseo: digital strategist con oltre 10 anni di esperienza in web marketing.' },
  { title: 'Consulente SEO', path: '/consulente-seo/', description: 'Consulenza SEO: analisi, ottimizzazione tecnica e strategie per posizionarsi su Google.' },
  { title: 'SEO per concessionarie', path: '/consulente-seo/seo-concessionarie/', description: 'Strategie SEO per il settore automotive.' },
  { title: 'SEO per farmacie', path: '/consulente-seo/seo-farmacie/', description: 'Strategie SEO per farmacie online e fisiche.' },
  { title: 'SEO per negozi di arredamento', path: '/consulente-seo/seo-negozi-di-arredamento/', description: 'Strategie SEO per e-commerce e showroom di arredamento.' },
  { title: 'Consulenza SEO a Catanzaro', path: '/consulenza-seo-a-catanzaro/', description: 'Consulenza SEO per studi professionali, sanità, servizi e turismo sulla costa ionica in provincia di Catanzaro.' },
  { title: 'Consulenza SEO a Cosenza', path: '/consulenza-seo-a-cosenza/', description: 'Consulenza SEO per aziende e attività locali di Cosenza.' },
  { title: 'Consulenza SEO a Crotone', path: '/consulenza-seo-a-crotone/', description: 'Consulenza SEO per turismo, agroalimentare e attività locali di Crotone.' },
  { title: 'Consulenza SEO a Reggio Calabria', path: '/consulenza-seo-a-reggio-calabria/', description: 'Consulenza SEO per turismo sullo Stretto e in Aspromonte, bergamotto, agroalimentare e attività locali di Reggio Calabria.' },
  { title: 'Consulenza SEO a Vibo Valentia', path: '/consulenza-seo-a-vibo-valentia/', description: 'Consulenza SEO per turismo sulla Costa degli Dei, prodotti tipici e attività locali di Vibo Valentia.' },
  { title: 'Consulenza SEO in Calabria', path: '/consulenza-seo-in-calabria/', description: 'Consulenza SEO per aziende calabresi.' },
  { title: 'Google Ads Specialist', path: '/google-ads-specialist/', description: 'Gestione e ottimizzazione di campagne Google Ads.' },
  { title: 'Meta Ads Specialist', path: '/meta-ads-specialist/', description: 'Gestione di campagne pubblicitarie su Facebook e Instagram.' },
  { title: 'Risultati', path: '/risultati/', description: 'Case study e risultati ottenuti con SEO, Google Ads e Meta Ads.' },
  { title: 'I casi SEO più problematici', path: '/i-casi-piu-problematici-che-mi-siano-capitati-sulla-seo/', description: 'Casi studio SEO reali e come sono stati risolti.' },
  { title: 'Casi studio Google Ads', path: '/casi-studio-google-ads/', description: 'Casi studio Google Ads reali, con numeri e strategie.' },
  { title: 'Contatti', path: '/contatti/', description: 'Richiedi una consulenza su SEO, Google Ads o Meta Ads.' },
];

const postUrl = (p: Post) => `${SITE_URL}/${p.category}/${p.slug}/`;

// Raggruppa i post per categoria principale, nell'ordine di categoryMeta
function postsByTopCategory(): [string, Post[]][] {
  const all = getAllPosts();
  return Object.entries(categoryMeta)
    .filter(([, meta]) => !meta.parent)
    .map(([key, meta]) => [meta.name, all.filter((p) => p.category === key)] as [string, Post[]])
    .filter(([, list]) => list.length > 0);
}

export function buildLlmsTxt(): string {
  const out: string[] = [intro, '', '## Servizi e pagine principali', ''];
  for (const p of pages) out.push(`- [${p.title}](${SITE_URL}${p.path}): ${p.description}`);

  for (const [name, list] of postsByTopCategory()) {
    out.push('', `## Articoli: ${name}`, '');
    for (const p of list) out.push(`- [${p.title}](${postUrl(p)}): ${p.excerpt}`);
  }

  out.push('', '## Optional', '');
  out.push(`- [Testo completo degli articoli](${SITE_URL}/llms-full.txt): tutti gli articoli del blog in un unico file di testo.`);
  out.push(`- [Uso dell'intelligenza artificiale](${SITE_URL}/uso-intelligenza-artificiale/): come Perseo usa l'IA nei contenuti.`);
  return out.join('\n') + '\n';
}

const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();

function sectionToMarkdown(s: PostSection): string | null {
  switch (s.type) {
    case 'heading':
      return `${'#'.repeat(Math.min((s.level ?? 2) + 1, 6))} ${stripHtml(s.content ?? '')}`;
    case 'paragraph':
      return s.content ? stripHtml(s.content) : null;
    case 'list':
      return s.items?.length ? s.items.map((i) => `- ${stripHtml(i)}`).join('\n') : null;
    case 'code':
      return s.content ? '```' + (s.language ?? '') + '\n' + s.content + '\n```' : null;
    case 'table':
      return s.rows?.length
        ? s.rows.map((r) => `- ${r.label}: pro ${r.pro.join('; ')} | contro ${r.contro.join('; ')}`).join('\n')
        : null;
    default:
      return null; // le immagini non servono agli LLM
  }
}

export function buildLlmsFullTxt(): string {
  const out: string[] = [intro];
  for (const [, list] of postsByTopCategory()) {
    for (const p of list) {
      out.push('', '---', '', `## ${p.title}`, '', `URL: ${postUrl(p)}`, `Data: ${p.date}`, '', p.excerpt, '');
      const body = p.sections?.length
        ? p.sections.map(sectionToMarkdown).filter(Boolean).join('\n\n')
        : p.content.split('\n\n').map(stripHtml).join('\n\n');
      out.push(body);
    }
  }
  return out.join('\n') + '\n';
}
