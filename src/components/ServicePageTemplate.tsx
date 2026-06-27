import { Link } from 'react-router-dom'
import { Clock, Shield, Star, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SEOHead, { SITE_URL, SITE_NAME } from './SEOHead'
import PhoneButton from './PhoneButton'
import WhatsAppButton from './WhatsAppButton'
import EmergencyCTA from '../sections/EmergencyCTA'

interface ServicePageTemplateProps {
  title: string
  titleHighlight: string
  description: string
  metaTitle: string
  metaDescription: string
  heroImage: string
  features: string[]
  whatToExpect: string[]
  relatedServices: { title: string; href: string }[]
  contentBlocks?: { heading: string; paragraphs: string[] }[]
  serviceFaqs?: { question: string; answer: string }[]
  emergencyScenarios?: string[]
  whyChoose?: { title: string; description: string }[]
  schema?: Record<string, unknown>
}

export default function ServicePageTemplate({
  title, titleHighlight, description, metaTitle, metaDescription,
  heroImage, features, whatToExpect, relatedServices,
  contentBlocks = [], serviceFaqs = [], emergencyScenarios = [], whyChoose = [], schema,
}: ServicePageTemplateProps) {
  const serviceName = `${title} ${titleHighlight}`.trim()
  const pageUrl = typeof window !== 'undefined'
    ? `${SITE_URL}${window.location.pathname}`
    : SITE_URL

  // Build Service + Breadcrumb (+ service FAQ, if any) structured data for richer search results.
  const generatedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: serviceName,
        description: metaDescription,
        serviceType: serviceName,
        areaServed: 'United Kingdom',
        url: pageUrl,
        provider: { '@type': 'LocalBusiness', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: serviceName, item: pageUrl },
        ],
      },
      ...(serviceFaqs.length > 0
        ? [{
            '@type': 'FAQPage',
            mainEntity: serviceFaqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }]
        : []),
    ],
  }

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} schema={schema ?? generatedSchema} />

      {/* Page Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 bg-[#1a1a1a]">
          <img src={heroImage} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 via-[#1a1a1a]/80 to-[#1a1a1a]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="text-white/60 hover:text-[#ff4444] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">{title} {titleHighlight}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d92a1d]/20 bg-[#d92a1d]/5 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-live absolute inline-flex h-full w-full rounded-full bg-[#d92a1d] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d92a1d]" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>24/7 AVAILABLE NOW</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: 'Space Grotesk' }}>
                {title} <span className="text-[#ff4444]">{titleHighlight}</span>
              </h1>
              <p className="mb-6 text-base leading-relaxed text-white/80 lg:text-lg">{description}</p>

              <div className="mb-8 flex flex-wrap gap-2">
                {[{ icon: Clock, text: '30-45 min response' }, { icon: Shield, text: 'Fully insured' }, { icon: Star, text: '4.9★ rated' }, { icon: MapPin, text: 'UK-wide' }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1">
                    <Icon className="h-3 w-3 text-[#ff4444]" />
                    <span className="text-[11px] font-medium text-white/80" style={{ fontFamily: 'JetBrains Mono' }}>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PhoneButton size="lg" eventLabel={`${title.toLowerCase().replace(/\s/g, '_')}_hero`} />
                <WhatsAppButton size="lg" message={`Hi, I need ${title.toLowerCase()} ${titleHighlight.toLowerCase()}. Can you help?`} />
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 lg:p-8">
              <h3 className="mb-4 text-lg font-semibold text-white" style={{ fontFamily: 'Space Grotesk' }}>What&apos;s Included</h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ff4444]" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-white/10 border border-white/10 p-4">
                <p className="text-xs text-white/60 mb-2" style={{ fontFamily: 'JetBrains Mono' }}>AVERAGE RESPONSE TIME</p>
                <p className="text-2xl font-bold text-[#ff4444]" style={{ fontFamily: 'Space Grotesk' }}>30-45 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Content Blocks */}
      {contentBlocks.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-[800px] px-4 lg:px-6">
            {contentBlocks.map((block, i) => (
              <div key={i} className={i > 0 ? 'mt-10' : ''}>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                  {block.heading}
                </h2>
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="text-base leading-relaxed text-[#6a6a6a] mb-4">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Emergency Scenarios */}
      {emergencyScenarios.length > 0 && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
            <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
              Common <span className="text-[#d92a1d]">Situations</span> We Handle
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {emergencyScenarios.map((scenario, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#d92a1d]/10 text-xs font-bold text-[#d92a1d]">{i + 1}</span>
                  <p className="text-sm text-[#6a6a6a]">{scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What to Expect */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>What to <span className="text-[#d92a1d]">Expect</span></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatToExpect.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#d92a1d]/10 text-xs font-bold text-[#d92a1d]">{i + 1}</span>
                <p className="text-sm text-[#6a6a6a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for this service */}
      {whyChoose.length > 0 && (
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
            <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
              Why Choose Us For <span className="text-[#d92a1d]">{title} {titleHighlight}</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{item.title}</h3>
                  <p className="text-sm text-[#6a6a6a]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      {serviceFaqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-[800px] px-4 lg:px-6">
            <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
              {title} {titleHighlight} <span className="text-[#d92a1d]">FAQs</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {serviceFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-gray-200 bg-gray-50 px-5 data-[state=open]:border-[#d92a1d]/30">
                  <AccordionTrigger className="text-left text-sm font-semibold text-[#1a1a1a] hover:no-underline py-4">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[#6a6a6a] pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Related <span className="text-[#d92a1d]">Services</span></h2>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((service) => (
              <Link key={service.title} to={service.href} className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 transition-all hover:border-[#d92a1d]/30 hover:shadow-sm">
                <span className="text-sm font-medium text-[#6a6a6a] group-hover:text-[#1a1a1a] transition-colors">{service.title}</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#d92a1d] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  )
}
