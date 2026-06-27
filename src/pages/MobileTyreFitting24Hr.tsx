import ServicePageTemplate from '../components/ServicePageTemplate'

const features = [
  "True 24/7 service — day or night, weekday or weekend",
  "No premium charges for out-of-hours or weekend call-outs",
  "Same fast 30-45 minute response time around the clock",
  "All locations covered — home, work, roadside, or motorway",
  "All major tyre brands available from stock",
  "Instant quote and booking over the phone",
  "Card payment accepted on completion — no upfront deposit",
  "Fully insured and guaranteed workmanship",
]

const whatToExpect = [
  "Call us any time — our emergency line is always open, even at 3am on Christmas Day",
  "Speak to a UK-based operator who will take your details and confirm your tyre requirements",
  "We dispatch your nearest available fully-equipped mobile fitter immediately",
  "Receive a text message with your fitter\'s name, photo, and live ETA",
  "Your fitter arrives, assesses your vehicle, and fits your new tyre with professional balancing",
  "Pay by card or digital wallet on completion. Drive away with complete peace of mind",
]

const contentBlocks = [
  {
    heading: "True 24 Hour Mobile Tyre Fitting — No Exceptions",
    paragraphs: [
      "Most tyre fitting companies claim to be available 24/7, but when you call at 11pm on a Sunday or 5am on a bank holiday, you get an answering machine telling you to call back during office hours. At Mobile Tyre Fitter 24/7, we mean what we say. Our phones are answered by real people 24 hours a day, 7 days a week, 365 days a year — including Christmas Day, New Year\'s Day, and every bank holiday.",
      "Our round-the-clock service is made possible by a nationwide network of mobile fitters who work in rotating shifts. This means there is always a fully equipped van and a trained technician within reach of your location, no matter what time it is. Whether you are a night-shift worker who has discovered a flat tyre at 2am, a parent needing to do the school run at 7am, or a business traveller on the motorway at midnight, we have you covered.",
    ],
  },
  {
    heading: "No Hidden Charges For Out-Of-Hours Service",
    paragraphs: [
      "One of the most common complaints we hear from customers switching from other mobile tyre services is the shock of hidden charges. Many companies advertise 24/7 service but then add a night surcharge, weekend premium, or bank holiday fee that can increase the total cost by 50% or more. At Mobile Tyre Fitter 24/7, we do not believe in penalising customers for needing help at inconvenient times.",
      "The price we quote over the phone is the price you pay. It does not matter if you call us at 2pm on a Tuesday or 2am on Christmas morning — the cost is the same. Our pricing is based on the tyre you need and the work involved, not the time of day. This transparency has earned us a 4.9-star Google rating and the trust of over 2,500 customers across the UK.",
    ],
  },
  {
    heading: "Who Uses Our 24 Hour Tyre Fitting Service?",
    paragraphs: [
      "Our 24-hour service is used by a wide range of customers across the UK. Commercial drivers and delivery companies operating overnight shifts rely on us to keep their vehicles on the road. Shift workers in healthcare, security, and logistics often discover tyre problems when leaving work in the early hours — we are the only service that can guarantee a response at those times.",
      "We also regularly help families with early morning emergencies — a flat tyre discovered when loading the car for a holiday, a blowout on the way to an airport, or a slow puncture that has gone flat overnight. Business travellers on early morning or late evening motorway journeys are another common customer group. Whatever your situation, if you need a tyre fitted at an unusual time, we are the service to call.",
    ],
  },
]

const serviceFaqs = [
  { question: "Do you really operate 24 hours a day?", answer: "Yes, absolutely. We operate 24 hours a day, 7 days a week, 365 days a year. This includes Christmas Day, New Year\'s Day, Easter, and all bank holidays. Our emergency line is always staffed by real UK-based operators, never automated systems." },
  { question: "Do you charge more for night-time or weekend call-outs?", answer: "No. We do not charge any premium for out-of-hours, weekend, or bank holiday call-outs. The price we quote is the same regardless of the time or day. Our pricing is based solely on the tyre and fitting work required." },
  { question: "What is your response time at night?", answer: "Our average response time is 30-45 minutes at all times of day and night. In major cities, we typically arrive within 25-35 minutes even in the early hours of the morning." },
  { question: "Can you fit tyres on motorways at night?", answer: "Yes, we provide 24-hour emergency tyre fitting on all major UK motorways. If you break down at night, pull over to the hard shoulder, switch on your hazard lights, and call us immediately." },
  { question: "Is it safe to wait for a fitter at night?", answer: "Yes. We prioritise safety above all else. When you call, we will advise you on the safest place to wait. All our fitters carry high-visibility equipment and warning triangles. We also send you your fitter\'s details in advance so you know exactly who to expect." },
  { question: "Do I need to pay upfront?", answer: "No. We do not require any upfront payment or deposit. You pay securely by card on completion of the work, after you have inspected the fitting and are completely satisfied." },
  { question: "What areas do you cover at night?", answer: "We cover the entire United Kingdom 24 hours a day. Our mobile fitters are positioned strategically across the country, including London, Manchester, Birmingham, Glasgow, Leeds, Liverpool, Bristol, and everywhere in between." },
  { question: "What if you don\'t have my tyre size in stock?", answer: "With over 70,000 tyres stocked across our fleet, we have virtually every common size available. In the rare event we do not have your exact size, we will source it from our nearest depot and give you an honest timeframe. We never leave you stranded." },
]

const emergencyScenarios = [
  "Flat tyre discovered before an early morning airport run",
  "Blowout on the motorway during a late-night journey",
  "Puncture found after finishing a night shift",
  "Slow puncture gone flat overnight before work",
  "Damaged tyre before a bank holiday road trip",
  "Commercial vehicle tyre failure during overnight delivery",
]

const whyChoose = [
  { title: "Genuine 24/7 Availability", description: "Not just a claim — we really are open every hour of every day. Real UK-based operators answer our phones around the clock with no exceptions." },
  { title: "No Out-Of-Hours Premium", description: "The price at 3am is the same as the price at 3pm. We do not believe in charging extra for helping you when you need us most." },
  { title: "Fast Response At All Hours", description: "30-45 minute average response even at night and on weekends. Our rotating shift system ensures fitters are always available near you." },
  { title: "Real Human Support", description: "No answering machines, no call back tomorrow messages. A trained UK operator answers every call and dispatches help immediately." },
  { title: "Fully Equipped Night Fitters", description: "Our night fitters carry the same comprehensive tyre stock and professional equipment as our daytime teams. No compromises on quality." },
  { title: "Transparent Fixed Pricing", description: "Quote given upfront, no hidden fees, no surprises. Pay only on completion when you are fully satisfied with the work." },
]

const relatedServices = [
  { title: 'Emergency Tyre Fitting', href: '/emergency-tyre-fitting' },
  { title: 'Same Day Tyre Fitting', href: '/same-day-tyre-fitting' },
  { title: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
  { title: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
  { title: 'Fleet Tyre Services', href: '/fleet-tyre-services' },
]

export default function MobileTyreFitting24Hr() {
  return (
    <ServicePageTemplate
      title="24 Hour"
      titleHighlight="Tyre Fitting"
      description="Genuine 24-hour mobile tyre fitting across the UK. No out-of-hours charges, no weekend premiums. Available day and night, 365 days a year with 30-45 minute response. Call 0800 123 4567 anytime."
      metaTitle="24 Hour Tyre Fitting UK - Mobile Service Day & Night"
      metaDescription="24 hour mobile tyre fitting across the UK. No out-of-hours charges. Available day and night, 365 days a year. 30-45 min response. Call 0800 123 4567 anytime."
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
