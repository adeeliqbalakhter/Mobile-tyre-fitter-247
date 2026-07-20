import { Head } from 'vite-react-ssg'
import { useLocation } from 'react-router-dom'

export const SITE_NAME = 'Mobile Tyre Fitter 24/7'
export const SITE_URL = 'https://www.mobiletyrefitter247.co.uk'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-bg.webp`

/** Breadcrumb item for generating BreadcrumbList structured data. */
export interface BreadcrumbItem {
  name: string
  url: string
}

interface SEOHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  schema?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
  /** Keywords meta tag (comma-separated). Used by some search engines. */
  keywords?: string
  /** Breadcrumb items to auto-generate a BreadcrumbList schema. */
  breadcrumbs?: BreadcrumbItem[]
  /** Article-specific props for richer blog/article schema. */
  articleProps?: {
    publishedTime: string
    modifiedTime?: string
    authorName?: string
    section?: string
    tags?: string[]
  }
}

export default function SEOHead({
  title, description, canonical, ogImage, ogType, schema, noindex,
  keywords, breadcrumbs, articleProps,
}: SEOHeadProps) {
  const location = useLocation()
  const fullTitle = `${title} | ${SITE_NAME}`

  const path = canonical ?? `${location.pathname}${location.search || ''}`
  const canonicalUrl = path.startsWith('http')
    ? path
    : `${SITE_URL}${path === '/' ? '' : path}`
  const image = ogImage ?? DEFAULT_OG_IMAGE

  // Normalise schema to always be an array for @graph merging
  const schemaArray: Record<string, unknown>[] = Array.isArray(schema) ? schema : schema ? [schema] : []

  // Auto-generate BreadcrumbList schema if breadcrumbs provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url.startsWith('http') ? crumb.url : `${SITE_URL}${crumb.url}`,
      })),
    }
    schemaArray.push(breadcrumbSchema)
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph — enhanced with image dimensions, site name, locale */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType ?? 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
      {ogType === 'article' && articleProps?.publishedTime && (
        <meta property="article:published_time" content={articleProps.publishedTime} />
      )}
      {ogType === 'article' && articleProps?.modifiedTime && (
        <meta property="article:modified_time" content={articleProps.modifiedTime} />
      )}
      {ogType === 'article' && articleProps?.section && (
        <meta property="article:section" content={articleProps.section} />
      )}
      {ogType === 'article' && articleProps?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter — enhanced with large image card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MobileTyre247" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Hreflang — UK English primary */}
      <link rel="alternate" hrefLang="en-gb" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Schema.org JSON-LD */}
      {schemaArray.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Head>
  )
}