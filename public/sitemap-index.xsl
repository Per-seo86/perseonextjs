<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="it">
      <head>
        <title>Sitemap XML — Indice</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #333; }
          .header { background: #4169c8; color: white; padding: 32px 40px; }
          .header h1 { font-size: 28px; font-weight: 700; margin-bottom: 12px; }
          .header p { font-size: 14px; line-height: 1.6; max-width: 800px; opacity: 0.9; }
          .header a { color: #a8c4ff; }
          .container { padding: 32px 40px; }
          .count { margin-bottom: 16px; color: #555; font-size: 14px; }
          .count strong { color: #333; }
          table { width: 100%; border-collapse: collapse; }
          thead tr { background: #4169c8; color: white; }
          thead th { padding: 12px 16px; text-align: left; font-weight: 600; font-size: 14px; }
          tbody tr { border-bottom: 1px solid #e8e8e8; }
          tbody tr:hover { background: #f5f8ff; }
          tbody td { padding: 12px 16px; }
          a { color: #4169c8; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Sitemap XML</h1>
          <p>Questo file Indice Sitemap XML è generato automaticamente. È ciò che i motori di ricerca come Google usano per scansionare e ri-scansionare post/pagine/categorie del sito web.</p>
        </div>
        <div class="container">
          <p class="count">
            Questo file Indice Sitemap XML contiene <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sitemap.
          </p>
          <table>
            <thead>
              <tr>
                <th>Sitemap</th>
                <th>Ultima modifica</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
