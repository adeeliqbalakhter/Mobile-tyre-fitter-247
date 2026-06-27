import SEOHead, { localBusinessSchema } from '../components/SEOHead'
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

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="24/7 Mobile Tyre Fitting UK - Emergency Tyre Replacement"
        description="UK's leading mobile tyre fitting service. 24/7 emergency tyre replacement at your home, work, or roadside. Average 30-45 min response. Call 0800 123 4567 now."
        schema={localBusinessSchema}
      />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <CoverageGrid />
      <ReviewsSection />
      <BrandsSection />
      <FAQSection />
      <EmergencyCTA />
    </>
  )
}
