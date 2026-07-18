// Generate dist/sitemap.xml from every pre-rendered HTML page after the SSG build.
import { readdirSync, statSync, writeFileSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = 'dist'
const BASE = 'https://www.mobiletyrefitter247.co.uk'
const SKIP_DIRS = new Set(['assets', 'images'])
const today = new Date().toISOString().slice(0, 10)

// Priority rules based on URL patterns
function getPriority(url) {
  if (url === BASE) return '1.0'
  // High-value service pages
  if (url.includes('/emergency-mobile-tyre-fitting')) return '0.9'
  if (url.includes('/mobile-tyre-replacement')) return '0.9'
  if (url.includes('/mobile-tyre-fitting-near-me')) return '0.8'
  // City pages — high traffic SEO targets
  if (url.includes('/mobile-tyre-fitting-')) return '0.8'
  if (url.includes('/coverage-areas')) return '0.8'
  if (url.includes('/home-tyre-fitting')) return '0.8'
  // Supporting content pages
  if (url.includes('/workplace-tyre-fitting')) return '0.7'
  if (url.includes('/fleet-tyre-services')) return '0.7'
  if (url.endsWith('/blog')) return '0.7'
  if (url.includes('/faq')) return '0.6'
  // Blog posts and brands
  if (url.includes('/blog/')) return '0.6'
  if (url.includes('/tyre-brands')) return '0.6'
  // Low-priority utility pages
  if (url.includes('/about')) return '0.4'
  if (url.includes('/contact')) return '0.4'
  if (url.includes('/privacy-policy') || url.includes('/cookies') || url.includes('/terms-and-conditions')) return '0.2'
  return '0.5'
}

function getChangefreq(url) {
  if (url === BASE) return 'daily'
  if (url.includes('/blog')) return 'monthly'
  if (url.includes('/mobile-tyre-fitting-')) return 'monthly'
  // Service pages and static content rarely change
  if (url.includes('/about') || url.includes('/contact') || url.includes('/faq')) return 'yearly'
  if (url.includes('/privacy-policy') || url.includes('/cookies') || url.includes('/terms-and-conditions')) return 'yearly'
  return 'monthly'
}

/** Extract og:image from an HTML file, if present. */
function extractOgImage(html) {
  const match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/)
  return match ? match[1] : null
}

/** Extract the page's last meaningful modification date from the HTML (used by SSG). */
function extractLastmod(html) {
  // vite-react-ssg doesn't inject lastmod, so we use file mtime
  return null
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

const files = walk(DIST)

const entries = files.map((file) => {
  let rel = relative(DIST, file).replace(/\\/g, '/').replace(/\.html$/, '')
  rel = rel.replace(/\/index$/, '')
  if (rel === 'index') rel = ''
  const url = `${BASE}/${rel}`.replace(/\/$/, '') || BASE
  const priority = getPriority(url)
  const changefreq = getChangefreq(url)
  const fileMtime = statSync(file).mtime.toISOString().slice(0, 10)

  // Try to extract og:image for image sitemap entries
  let imageBlock = ''
  try {
    const html = readFileSync(file, 'utf-8')
    const ogImage = extractOgImage(html)
    if (ogImage) {
      imageBlock = `\n    <image:image>\n      <image:loc>${ogImage}</image:loc>\n    </image:image>`
    }
  } catch {
    // Skip image extraction if file read fails
  }

  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${fileMtime}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>${imageBlock}\n  </url>`
})

// Deduplicate by URL (in case of duplicate HTML files)
const seen = new Map()
for (const entry of entries) {
  const locMatch = entry.match(/<loc>([^<]+)<\/loc>/)
  if (locMatch && !seen.has(locMatch[1])) {
    seen.set(locMatch[1], entry)
  }
}

const body = [...seen.values()].join('\n')
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>
`
writeFileSync(join(DIST, 'sitemap.xml'), xml)
console.log(`[sitemap] wrote ${seen.size} URLs to dist/sitemap.xml`)