import ServicePageTemplate from '../components/ServicePageTemplate'

const features = [
  "Dedicated account manager for your fleet",
  "Volume discounts on bulk tyre orders and regular replacements",
  "Scheduled maintenance programmes to prevent unexpected failures",
  "Priority dispatch for fleet vehicles, faster response times",
  "Detailed reporting and invoicing for fleet management",
  "Nationwide coverage for all your depots and offices",
  "Credit account facilities with 30-day payment terms",
  "24/7 emergency support line exclusively for fleet customers",
]

const whatToExpect = [
  "Contact us to set up your fleet account, we will assign you a dedicated account manager",
  "We conduct a full fleet tyre audit to establish current conditions and maintenance needs",
  "Receive preferential pricing, priority booking, and a tailored maintenance schedule",
  "Schedule regular tyre checks and replacements at your premises to minimise downtime",
  "Receive detailed monthly reports covering all work, costs, and tyre conditions across your fleet",
  "Benefit from our nationwide coverage, one supplier for all your depots across the UK",
]

const contentBlocks = [
  {
    heading: "Complete Fleet Tyre Management For UK Businesses",
    paragraphs: [
      "Managing a fleet of vehicles comes with unique challenges, and tyre maintenance is one of the most critical. Worn or damaged tyres put your drivers at risk, can result in MOT failures, and cause costly unexpected downtime. Our fleet tyre management service takes the hassle out of fleet tyre maintenance by providing a single, reliable supplier who covers your entire operation nationwide.",
      "We work with businesses of all sizes, from local delivery companies with five vans to national organisations with hundreds of vehicles. Our service is built around your needs: scheduled maintenance visits to check tyre conditions, priority emergency response when failures occur, volume pricing that reduces your costs, and detailed reporting that gives you complete visibility over your fleet\'s tyre health. One phone call to your dedicated account manager is all it takes.",
    ],
  },
  {
    heading: "Proactive Fleet Maintenance Prevents Costly Downtime",
    paragraphs: [
      "The most expensive tyre problem is the one you do not see coming. A blowout on a delivery route, an MOT failure that takes a vehicle off the road, or a driver stranded with a flat tyre all cost far more than proactive maintenance. Our scheduled fleet tyre inspection programme is designed to catch problems before they become emergencies.",
      "We visit your premises at agreed intervals, monthly, quarterly, or bi-annually depending on your fleet size and usage, and inspect every vehicle. We check tread depth, tyre pressure, sidewall condition, and alignment wear patterns. You receive a detailed report highlighting any vehicles that need attention, and we schedule the work at a time that minimises disruption. This proactive approach typically reduces emergency breakdowns by over 70% and extends tyre life by ensuring correct inflation and early rotation.",
    ],
  },
  {
    heading: "Volume Pricing And Simplified Invoicing",
    paragraphs: [
      "Fleet customers benefit from our volume discount structure, which offers significant savings compared to individual retail pricing. The more tyres you purchase, the lower your per-tyre cost. We also offer preferential rates for scheduled maintenance contracts and multi-depot accounts. Your dedicated account manager will work with you to structure a pricing plan that fits your budget and maintenance requirements.",
      "Our invoicing system is designed for business efficiency. Rather than receiving individual receipts for every fitting, fleet customers receive a single detailed monthly invoice that breaks down all work by vehicle, location, and cost centre. This makes accounting, VAT reclaims, and cost tracking straightforward. We also offer 30-day credit terms for established accounts, helping with cash flow management.",
    ],
  },
]

const serviceFaqs = [
  { question: "What size fleet do you work with?", answer: "We work with fleets of all sizes, from 2 vehicles to 200+. Whether you are a small business with a few vans or a large organisation with a national fleet, we can provide a tailored service package." },
  { question: "Do you offer volume discounts?", answer: "Yes, we offer significant volume discounts for fleet customers. The more tyres you purchase, the lower your per-tyre cost. We also offer discounted rates for scheduled maintenance contracts." },
  { question: "Can you service multiple locations?", answer: "Absolutely. Our nationwide coverage means we can service all your depots, offices, and operating locations from a single account. One supplier, one invoice, complete coverage." },
  { question: "What reporting do you provide?", answer: "Fleet customers receive detailed monthly reports covering all work carried out, costs by vehicle and location, tyre condition assessments, and recommendations for upcoming maintenance. This gives you complete visibility over your fleet tyre health." },
  { question: "Do you offer credit terms?", answer: "Yes, established fleet accounts can apply for 30-day credit terms. We also offer corporate invoicing with detailed VAT breakdowns for straightforward accounting." },
  { question: "Can you handle emergency fleet breakdowns?", answer: "Yes, fleet customers receive priority dispatch on all emergency jobs. Our 24/7 emergency line is always available, and fleet vehicles are given priority over non-fleet bookings." },
  { question: "Do you provide tyre condition inspections?", answer: "Yes, we offer scheduled fleet tyre inspection services. Our fitters visit your premises and check every vehicle in your fleet, providing a detailed condition report and recommendations." },
  { question: "How do I set up a fleet account?", answer: "Call us on 0800 123 4567 and ask to speak to our fleet team. We will assign you a dedicated account manager who will discuss your requirements, conduct a fleet audit, and set up your account within 24 hours." },
]

const emergencyScenarios = [
  "Fleet vehicle blowout during a delivery route",
  "Multiple vehicles need tyres before annual inspections",
  "New driver reports vibration or handling issues",
  "MOT failure requiring immediate fleet tyre replacement",
  "End-of-lease vehicles need tyre replacement before return",
  "Seasonal fleet tyre change, winter tyres for all vehicles",
]

const whyChoose = [
  { title: "Dedicated Account Manager", description: "A single point of contact who understands your fleet, your schedule, and your requirements. No explaining your situation to a different person every time." },
  { title: "Nationwide Multi-Depot Coverage", description: "One supplier for all your locations across the UK. London, Manchester, Birmingham, Glasgow, covered by a single account with consolidated reporting." },
  { title: "Volume Pricing Savings", description: "Significant discounts for bulk orders and regular maintenance contracts. The more you use us, the more you save." },
  { title: "Proactive Maintenance", description: "Scheduled inspections catch problems before they become emergencies. Reduce unexpected failures by 70% and extend tyre life." },
  { title: "Priority Emergency Response", description: "Fleet customers get priority dispatch 24/7. When a vehicle is off the road, every minute counts, we act fast." },
  { title: "Simplified Invoicing", description: "Single monthly invoice with detailed breakdowns by vehicle and location. Makes accounting, VAT reclaims, and cost tracking effortless." },
]

const relatedServices = [
  { title: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
  { title: 'Emergency Tyre Fitting', href: '/emergency-mobile-tyre-fitting' },
  { title: 'Mobile Tyre Replacement', href: '/mobile-tyre-replacement' },
  { title: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
]

export default function FleetTyreServices() {
  return (
    <ServicePageTemplate
      title="Fleet Tyre"
      titleHighlight="Services"
      description="Dedicated fleet tyre management for businesses across the UK. Volume discounts, scheduled maintenance, priority dispatch, and dedicated account management. Call 0800 123 4567."
      metaTitle="Fleet Tyre Services UK - Business Fleet Tyre Management & Maintenance"
      metaDescription="Dedicated fleet tyre management for UK businesses. Volume discounts, scheduled maintenance, priority 24/7 dispatch, and dedicated account management. Call 0800 123 4567."
      heroImage="/images/service-fleet.webp"
      features={features}
      whatToExpect={whatToExpect}
      contentBlocks={contentBlocks}
      serviceFaqs={serviceFaqs}
      emergencyScenarios={emergencyScenarios}
      whyChoose={whyChoose}
      relatedServices={relatedServices}
    />
  )
}
