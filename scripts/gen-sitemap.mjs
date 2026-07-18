// Generate dist/sitemap.xml from every pre-rendered HTML page after the SSG build.
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = 'dist'
const BASE = 'https://www.mobiletyrefitter247.co.uk'
const SKIP_DIRS = new Set(['assets', 'images'])
const today = new Date().toISOString().slice(0, 10)

// Priority rules based on URL patterns
function getPriority(url: string): string {
  if (url === BASE) return '1.0'
  if (url.includes('/mobile-tyre-fitting-')) return '0.8' // City pages
  if (url.includes('/emergency-mobile-tyre-fitting')) return '0.9'
  if (url.includes('/mobile-tyre-replacement')) return '0.9'
  if (url.includes('/home-tyre-fitting')) return '0.8'
  if (url.includes('/workplace-tyre-fitting')) return '0.7'
  if (url.includes('/fleet-tyre-services')) return '0.7'
  if (url.includes('/mobile-tyre-fitting-near-me')) return '0.8'
  if (url.includes('/coverage-areas')) return '0.8'
  if (url.includes('/tyre-brands')) return '0.6'
  if (url.includes('/blog/')) return '0.6' // Individual blog posts
  if (url.endsWith('/blog')) return '0.7' // Blog index
  if (url.includes('/about')) return '0.5'
  if (url.includes('/contact')) return '0.5'
  if (url.includes('/faq')) return '0.6'
  // Legal pages get lower priority
  if (url.includes('/privacy-policy') || url.includes('/cookies') || url.includes('/terms-and-conditions')) return '0.3'
  return '0.5'
}

function getChangefreq(url: string): string {
  if (url === BASE) return 'weekly'
  if (url.includes('/blog/')) return 'monthly'
  if (url.endsWith('/blog')) return 'weekly'
  if (url.includes('/mobile-tyre-fitting-')) return 'monthly' // City pages
  return 'monthly'
}

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
const body = unique
  .map((u) => {
    const priority = getPriority(u)
    const changefreq = getChangefreq(u)
    return `  <url>\n    <loc>${u}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
writeFileSync(join(DIST, 'sitemap.xml'), xml)
console.log(`[sitemap] wrote ${unique.length} URLs to dist/sitemap.xml`)