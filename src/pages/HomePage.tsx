import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import Reveal from '../components/Reveal'
import HeroSection from '../sections/HeroSection'
import TrustBar from '../sections/TrustBar'
import CoverageGrid from '../sections/CoverageGrid'
import HowItWorks from '../sections/HowItWorks'
import ServicesSection from '../sections/ServicesSection'
import WhyChooseUs from '../sections/WhyChooseUs'
import ReviewsSection from '../sections/ReviewsSection'
import BrandsSection from '../sections/BrandsSection'
import FAQSection from '../sections/FAQSection'
import EmergencyCTA from '../sections/EmergencyCTA'

const homeSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mobile Tyre Fitter 24/7 - 24/7 Mobile Tyre Fitting UK',
    description: "UK's leading 24/7 mobile tyre fitting service. Emergency tyre replacement at home, work, or roadside. 30-45 min average response. Call 0800 123 4567.",
    url: SITE_URL,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How quickly can you get to me?',
        acceptedAnswer: { '@type': 'Answer', text: 'Our average response time is 30-45 minutes across the UK, and 25-35 minutes in major cities like London, Manchester, and Birmingham. When you call, we give you an exact ETA based on your postcode and nearest available fitter.' },
      },
      {
        '@type': 'Question',
        name: 'Do you operate 24 hours a day?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We operate 24 hours a day, 7 days a week, 365 days a year including weekends and bank holidays. There are no out-of-hours or weekend surcharges.' },
      },
      {
        '@type': 'Question',
        name: 'What areas do you cover?',
        acceptedAnswer: { '@type': 'Answer', text: 'We cover the entire United Kingdom including England, Scotland, and Wales. Our mobile fitters are positioned across major cities and motorways for the fastest possible response times.' },
      },
      {
        '@type': 'Question',
        name: 'How much does mobile tyre fitting cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pricing depends on your tyre size and brand choice. We give you a clear, all-inclusive quote upfront before any work begins. The price includes the tyre, fitting, balancing, new valve, and old tyre disposal. Call 0800 123 4567 for an instant quote.' },
      },
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="24/7 Mobile Tyre Fitting UK - Emergency Tyre Replacement Anywhere"
        description="UK's leading 24/7 mobile tyre fitting service. Emergency tyre replacement at your home, work, or roadside with 30-45 min average response. All major brands stocked. Call 0800 123 4567 now for an instant quote."
        schema={homeSchema}
      />
      <HeroSection />
      <TrustBar />
      <Reveal><ServicesSection /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><WhyChooseUs /></Reveal>
      <Reveal><CoverageGrid /></Reveal>
      <Reveal><ReviewsSection /></Reveal>
      <Reveal><BrandsSection /></Reveal>
      <Reveal><FAQSection /></Reveal>
      <Reveal variant="scale"><EmergencyCTA /></Reveal>
    </>
  )
}