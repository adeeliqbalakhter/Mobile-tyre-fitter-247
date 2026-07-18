import { Head } from 'vite-react-ssg'
import { useLocation } from 'react-router-dom'

export const SITE_NAME = 'Mobile Tyre Fitter 24/7'
export const SITE_URL = 'https://www.mobiletyrefitter247.co.uk'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-bg.jpg`

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  schema?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
}

export default function SEOHead({ title, description, canonical, ogImage, ogType, schema, noindex }: SEOHeadProps) {
  const location = useLocation()
  const fullTitle = `${title} | ${SITE_NAME}`

  const path = canonical ?? `${location.pathname}${location.search || ''}`
  const canonicalUrl = path.startsWith('http')
    ? path
    : `${SITE_URL}${path === '/' ? '' : path}`
  const image = ogImage ?? DEFAULT_OG_IMAGE

  // Normalise schema to always be an array for @graph merging
  const schemaArray = Array.isArray(schema) ? schema : schema ? [schema] : []

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={ogType ?? 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Hreflang — UK English primary */}
      <link rel="alternate" hrefLang="en-gb" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {schemaArray.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Head>
  )
}