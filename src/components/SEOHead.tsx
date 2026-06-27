import { useEffect } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  schema?: Record<string, unknown>
}

export default function SEOHead({ title, description, schema }: SEOHeadProps) {
  useEffect(() => {
    document.title = `${title} | Mobile Tyre Fitter 24/7`

    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', description)

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
  }, [title, description, schema])

  return null
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mobile Tyre Fitter 24/7',
  description: 'UK\'s leading mobile tyre fitting service. 24/7 emergency tyre replacement at your home, work, or roadside.',
  url: 'https://mobiletyrefitter24-7.co.uk',
  telephone: '+448001234567',
  email: 'info@mobiletyrefitter24-7.co.uk',
  priceRange: '££',
  areaServed: 'United Kingdom',
  serviceType: 'Mobile Tyre Fitting',
  openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59',
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
