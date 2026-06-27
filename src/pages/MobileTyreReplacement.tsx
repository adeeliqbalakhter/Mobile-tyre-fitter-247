import ServicePageTemplate from '../components/ServicePageTemplate'

const features = [
  "Complete mobile tyre replacement at your chosen location",
  "All vehicle types covered — cars, vans, 4x4s, SUVs, motorhomes",
  "Premium, mid-range, and budget tyres from all major brands",
  "Wheel balancing included with every tyre replacement",
  "New valve fitted as standard at no extra cost",
  "TPMS sensor replacement and recalibration available",
  "Locking wheel nut removal service if keys are lost",
  "Run-flat tyre specialists with full stock available",
]

const whatToExpect = [
  "Call us with your vehicle registration number or current tyre size printed on the sidewall",
  "We recommend the best tyres for your vehicle, driving style, and budget — no upselling",
  "Receive a clear, all-inclusive quote with no hidden charges or surprise fees",
  "Your nearest mobile fitter is dispatched with your chosen tyres already loaded",
  "Old tyre is safely removed, new tyre is professionally fitted, balanced, and pressure-checked",
  "Drive away knowing your new tyre is fitted to manufacturer standards with a full guarantee",
]

const contentBlocks = [
  {
    heading: "Complete Mobile Tyre Replacement At Your Location",
    paragraphs: [
      "When your tyres are worn, damaged, or simply past their best, replacing them should not be a hassle. Our mobile tyre replacement service brings the full expertise of a professional tyre garage directly to your doorstep. We supply, fit, and balance new tyres at your chosen location — whether that is your home driveway, your office car park, or a roadside location anywhere in the UK.",
      "Our service covers all vehicle types and tyre categories. From family hatchbacks and executive saloons to large 4x4s, commercial vans, and motorhomes, we have the equipment and expertise to handle them all. Our mobile vans are stocked with over 70,000 tyres from the world\'s leading manufacturers, ensuring we have the right tyre for your vehicle at a price that suits your budget.",
    ],
  },
  {
    heading: "How Do I Know If My Tyres Need Replacing?",
    paragraphs: [
      "There are several signs that indicate your tyres need replacing. The most obvious is tread depth — UK law requires a minimum tread depth of 1.6mm across the central three-quarters of the tyre. However, safety experts recommend replacing tyres when tread reaches 3mm, as wet-weather grip deteriorates significantly below this level. You can check this easily using a 20p coin: insert it into the tread groove, and if the outer band is visible, your tyre may be close to the legal limit.",
      "Other signs include visible cracks or bulges in the sidewall, uneven wear patterns (which can indicate alignment issues), persistent vibration while driving, and frequent loss of tyre pressure. If your tyre is more than five years old, it is also worth having it inspected, as rubber degrades over time even if the tread appears adequate. If you are unsure, call us and we will advise you honestly — we never recommend replacement unless it is genuinely necessary.",
    ],
  },
  {
    heading: "All Major Tyre Brands And Specialist Tyres Available",
    paragraphs: [
      "We stock an extensive range of tyres to suit every vehicle, driving style, and budget. Our premium range includes Michelin, Pirelli, Continental, Bridgestone, Goodyear, and Dunlop — ideal for drivers who prioritise performance, comfort, and longevity. Our mid-range selection features Hankook, Yokohama, Kumho, Falken, and Nexen, offering excellent value without compromising on safety or quality. For budget-conscious drivers, we carry a range of quality-tested budget tyres that meet all UK safety standards.",
      "In addition to standard road tyres, we are specialists in run-flat tyres, 4x4 and all-terrain tyres, winter tyres, and high-performance low-profile tyres. We also offer commercial-grade van tyres designed to handle heavier loads. Whatever your vehicle and whatever your requirements, we have the right tyre in stock and can fit it at your location today.",
    ],
  },
]

const serviceFaqs = [
  { question: "How do I know what size tyres I need?", answer: "Your tyre size is printed on the sidewall of your current tyres in a format like 205/55 R16 91V. Alternatively, tell us your vehicle registration number and we can look up the correct size and specifications instantly." },
  { question: "Do you supply the tyres or do I need to buy them separately?", answer: "We supply and fit everything. There is no need to buy tyres separately. We stock over 70,000 tyres from all major brands and will recommend the best option for your vehicle and budget." },
  { question: "How much does mobile tyre replacement cost?", answer: "The cost depends on your tyre size and the brand you choose. We offer transparent, all-inclusive pricing with no hidden fees. Call us on 0800 123 4567 for an instant, no-obligation quote." },
  { question: "Should I replace all four tyres at once?", answer: "For optimal handling and safety, we recommend replacing tyres in pairs (both front or both rear) at a minimum. On four-wheel-drive vehicles, all four tyres should ideally be replaced together with matching tread patterns. We will advise you based on your specific vehicle." },
  { question: "Can you replace run-flat tyres?", answer: "Yes, we are run-flat tyre specialists. We stock and fit all major run-flat brands including Bridgestone RFT, Pirelli Euforia, Dunlop DSST, Goodyear EMT, and Michelin ZP. Run-flat tyres require specialist equipment and training — our fitters are fully qualified." },
  { question: "What happens to my old tyres?", answer: "We dispose of your old tyres responsibly at no extra cost. All tyres are sent to licensed recycling facilities in compliance with UK environmental regulations. You do not need to do anything — we handle everything." },
  { question: "Do you replace TPMS sensors?", answer: "Yes, we can replace faulty TPMS (Tyre Pressure Monitoring System) sensors and recalibrate them to your vehicle\'s system. This service is available at a small additional cost and can be done during your tyre replacement." },
  { question: "What is included in the fitting service?", answer: "Our fitting service includes removal of the old tyre, fitting the new tyre, wheel balancing, a new valve, tyre pressure adjustment, and a visual inspection of your brakes and suspension. All work is guaranteed." },
]

const emergencyScenarios = [
  "Tyres worn below 3mm tread depth before a long journey",
  "MOT failure due to tyre condition",
  "Uneven wear requiring immediate replacement",
  "Sidewall bulge or crack discovered during inspection",
  "Run-flat tyre driven beyond safe distance",
  "Seasonal change — winter or all-season tyres needed",
]

const whyChoose = [
  { title: "We Supply & Fit Everything", description: "No need to buy tyres separately. We stock 70,000+ tyres and bring everything needed to your location. One call, one visit, problem solved." },
  { title: "All Vehicle Types Covered", description: "From small city cars to large commercial vans, 4x4s, SUVs, and motorhomes. Our equipment handles wheels up to 24 inches." },
  { title: "Expert Advice, No Upselling", description: "We recommend the right tyre for your needs and budget — never more expensive than necessary. Honest advice is our policy." },
  { title: "All-Inclusive Transparent Pricing", description: "Quote given upfront includes the tyre, fitting, balancing, valve, and disposal. No hidden charges, no surprises on arrival." },
  { title: "Run-Flat & Specialist Specialists", description: "Our fitters are trained and equipped for run-flat tyres, TPMS sensors, locking wheel nuts, and low-profile performance tyres." },
  { title: "Guaranteed Workmanship", description: "Every fitting comes with our workmanship guarantee. If anything is not right, we will fix it free of charge — no questions asked." },
]

const relatedServices = [
  { title: 'Emergency Tyre Fitting', href: '/emergency-tyre-fitting' },
  { title: '24 Hour Tyre Fitting', href: '/24-hour-tyre-fitting' },
  { title: 'Same Day Tyre Fitting', href: '/same-day-tyre-fitting' },
  { title: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
  { title: 'Fleet Tyre Services', href: '/fleet-tyre-services' },
]

export default function MobileTyreReplacement() {
  return (
    <ServicePageTemplate
      title="Mobile Tyre"
      titleHighlight="Replacement"
      description="Complete mobile tyre replacement service across the UK. We supply and fit new tyres at your location — home, work, or roadside. All brands, all sizes, all vehicle types. Call 0800 123 4567."
      metaTitle="Mobile Tyre Replacement UK - Fitted At Your Location"
      metaDescription="Mobile tyre replacement across the UK. New tyres supplied and fitted at home, work, or roadside. All brands and sizes. Call 0800 123 4567 for instant quote."
      heroImage="/images/hero-bg.jpg"
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
