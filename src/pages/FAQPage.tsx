import { Link } from 'react-router-dom'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import SEOHead from '../components/SEOHead'
import EmergencyCTA from '../sections/EmergencyCTA'

const faqs = [
  { q: 'How quickly can you get to me?', a: 'Our average response time is 30-45 minutes, depending on your location. In major cities like London, Manchester, and Birmingham, we typically arrive within 25-35 minutes. When you call, we\'ll give you an exact ETA based on your postcode and current fitter availability.' },
  { q: 'Do you operate 24 hours a day?', a: 'Yes, absolutely. We operate 24 hours a day, 7 days a week, 365 days a year, including Christmas Day and all bank holidays. Our emergency line is always staffed by real people, never automated systems.' },
  { q: 'What areas do you cover?', a: 'We cover the entire United Kingdom, including England, Scotland, Wales, and Northern Ireland. Our mobile fitters are positioned strategically across major cities and motorways to ensure rapid response times wherever you are.' },
  { q: 'How much does mobile tyre fitting cost?', a: 'Our pricing is transparent and competitive. The cost depends on your tyre size and brand choice. When you call, we give you a clear, all-inclusive quote before any work begins, so the price we quote is the price you pay. We accept all major credit and debit cards, and payment is taken on completion.' },
  { q: 'What tyre brands do you stock?', a: 'We stock all major tyre brands including Michelin, Pirelli, Continental, Dunlop, Goodyear, Bridgestone, Hankook, Yokohama, and many more. We also carry quality mid-range and budget options. With over 70,000 tyres in stock, we have something for every vehicle and budget.' },
  { q: 'Will my flat tyre need replacing?', a: 'Most flat or damaged tyres need to be replaced with a new one for safety. If the damage is very small and in the central tread area only (under 6mm), a repair may be possible in some cases. However, sidewall damage, blowouts, or significant wear always require full replacement. Our fitter will assess your tyre on arrival and give you honest advice.' },
  { q: 'Do you fit tyres at home?', a: 'Yes, that\'s exactly what we do. Our mobile tyre fitting vans come fully equipped to your location, whether that\'s your home driveway, office car park, or roadside. No need to visit a garage at all.' },
  { q: 'Are your fitters insured?', a: 'Yes, all our mobile tyre fitters are fully insured, trained to industry standards, and background-checked. We also guarantee all our workmanship. If anything isn\'t right, we\'ll fix it free of charge.' },
  { q: 'Can you fit run-flat tyres?', a: 'Yes, we are run-flat tyre specialists. We stock and fit all major run-flat tyre brands including Bridgestone RFT, Pirelli Euforia, Dunlop DSST, Goodyear EMT, and Michelin ZP.' },
  { q: 'Do you offer fleet services?', a: 'Yes, we offer dedicated fleet tyre management for businesses of all sizes. Benefits include volume discounts, scheduled maintenance, priority dispatch, detailed reporting, and a dedicated account manager. Contact us to set up a fleet account.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards including Visa, Mastercard, and American Express. We also accept Apple Pay and Google Pay. Payment is taken on completion of the work.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function FAQPage() {
  return (
    <>
      <SEOHead title="FAQs - Mobile Tyre Fitting Questions Answered" description="Frequently asked questions about our mobile tyre fitting service. 24/7 availability, pricing, coverage, brands, and more. Call 0800 123 4567 for immediate help." schema={faqSchema} />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">FAQs</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Frequently Asked <span className="text-[#d92a1d]">Questions</span></h1>
          <p className="mb-8 text-[#6a6a6a]">Everything you need to know about our mobile tyre fitting service. Can&apos;t find your answer? Call us 24/7.</p>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-gray-200 bg-gray-50 px-5 data-[state=open]:border-[#d92a1d]/30">
                <AccordionTrigger className="text-left text-sm font-semibold text-[#1a1a1a] hover:no-underline py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[#6a6a6a] pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
