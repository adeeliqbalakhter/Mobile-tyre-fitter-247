// Generate dist/sitemap.xml from every pre-rendered HTML page after the SSG build.
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = 'dist'
const BASE = 'https://www.mobiletyrefitter247.co.uk'
const SKIP_DIRS = new Set(['assets', 'images'])

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (!SKIP_DIRS.has(entry)) walk(full, acc)
    } else if (entry.endsWith('.html')) {
      acc.push(full)
    }
  }
  return acc
}

const urls = walk(DIST).map((file) => {
  let rel = relative(DIST, file).replace(/\\/g, '/').replace(/\.html$/, '')
  rel = rel.replace(/\/index$/, '')
  if (rel === 'index') rel = ''
  const url = `${BASE}/${rel}`.replace(/\/$/, '')
  return url || BASE
})

const unique = [...new Set(urls)].sort()
const today = new Date().toISOString().slice(0, 10)
const body = unique
  .map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
writeFileSync(join(DIST, 'sitemap.xml'), xml)
console.log(`[sitemap] wrote ${unique.length} URLs to dist/sitemap.xml`)
