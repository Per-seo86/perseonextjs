import { MetadataRoute } from 'next';

// Crawler dei motori di ricerca e degli assistenti AI: accesso esplicito
// per comparire nelle risposte di ChatGPT, Claude, Perplexity, Gemini, Copilot.
const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended', 'Bingbot',
  'CCBot', 'meta-externalagent', 'DuckAssistBot', 'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiBots, allow: '/' },
    ],
    sitemap: 'https://perseo.biz/sitemap.xml',
  };
}
