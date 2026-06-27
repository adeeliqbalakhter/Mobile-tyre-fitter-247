import { useEffect } from 'react'

export const SITE_NAME = 'Mobile Tyre Fitter 24/7'
export const SITE_URL = 'https://www.mobiletyrefitter247.co.uk'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-bg.jpg`

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  schema?: Record<string, unknown>
}

/** Create or update a <meta> tag, keyed by name or property. */
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/** Create or update the canonical <link>. */
function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export default function SEOHead({ title, description, canonical, ogImage, schema }: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    document.title = fullTitle

    // Resolve canonical URL, fall back to the current path on the live origin.
    const path = canonical ?? `${window.location.pathname}${window.location.search}`
    const canonicalUrl = path.startsWith('http') ? path : `${SITE_URL}${path === '/' ? '' : path}` || SITE_URL
    const image = ogImage ?? DEFAULT_OG_IMAGE

    upsertMeta('name', 'description', description)
    upsertCanonical(canonicalUrl)

    // Open Graph
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)

    if (schema) {
      let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.id = 'json-ld-schema'
        scriptTag.type = 'application/ld+json'
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(schema)
    }

    return () => {
      const script = document.getElementById('json-ld-schema')
      if (script) script.remove()
    }
  }, [title, description, canonical, ogImage, schema])

  return null
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mobile Tyre Fitter 24/7',
  description: 'UK\'s leading mobile tyre fitting service. 24/7 emergency tyre replacement at your home, work, or roadside.',
  url: 'https://www.mobiletyrefitter247.co.uk',
  telephone: '+448001234567',
  email: 'info@mobiletyrefitter247.co.uk',
  priceRange: '££',
  areaServed: 'United Kingdom',
  serviceType: 'Mobile Tyre Fitting',
  openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2500',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tyre Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Mobile Tyre Fitting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24 Hour Tyre Fitting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Same Day Tyre Fitting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Tyre Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Tyre Fitting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workplace Tyre Fitting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fleet Tyre Services' } },
    ],
  },
}
