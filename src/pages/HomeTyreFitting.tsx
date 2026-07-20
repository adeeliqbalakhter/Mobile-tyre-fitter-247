import ServicePageTemplate from '../components/ServicePageTemplate'

const features = [
  "Fitted at your home on your driveway or garage",
  "No need to visit a tyre garage or wait in queues",
  "Flexible appointment times including evenings and weekends",
  "Same-day and next-day appointments usually available",
  "All tyre brands available from our mobile stock",
  "Minimal disruption, continue your day while we work",
  "Professional, courteous, and tidy service guaranteed",
  "All work guaranteed with a full receipt provided",
]

const whatToExpect = [
  "Call us with your address, vehicle registration, or tyre size",
  "Choose a convenient appointment time that fits your schedule",
  "We confirm your tyre availability, exact price, and arrival time",
  "Your mobile fitter arrives at your home in a fully equipped van",
  "Tyres are fitted on your driveway while you relax inside or carry on with your day",
  "Old tyres are removed for responsible disposal. Pay by card on completion",
]

const contentBlocks = [
  {
    heading: "The Most Convenient Way To Get New Tyres",
    paragraphs: [
      "There was a time when getting new tyres meant taking time off work, driving to a garage, sitting in a waiting room for an hour, and then driving home. Those days are over. Our home tyre fitting service brings the entire tyre replacement experience to your doorstep. You choose the time, we do the work, and you never have to leave your house.",
      "Home tyre fitting is our most popular service for good reason. It eliminates every inconvenience associated with traditional tyre replacement. There is no travel, no waiting, no disruption to your day. Whether you work from home, have young children, or simply value your free time, having your tyres fitted on your driveway is the ultimate in convenience. Our customers consistently tell us it is the best service they have ever used.",
    ],
  },
  {
    heading: "How Home Tyre Fitting Works",
    paragraphs: [
      "The process is simple. Call us on 0800 123 4567 and tell us your address and vehicle details. We will check our stock, confirm availability, and give you an all-inclusive quote. You choose an appointment time, we offer slots from 7am to 7pm, seven days a week, and we will send you a confirmation text with your fitter\'s details and ETA.",
      "On the day, your fitter arrives in a clearly marked van, introduces themselves, and assesses the work. They will need access to your vehicle and enough space on your driveway to work safely, typically about the length of your car. The fitting process takes 30-45 minutes per tyre, during which you are free to carry on with your day. When the work is complete, your fitter will show you the results, provide a full receipt, and take payment by card. Your old tyres are loaded into the van for responsible recycling.",
    ],
  },
  {
    heading: "Safe, Professional, And Respectful Of Your Property",
    paragraphs: [
      "We understand that inviting a service provider to your home requires trust. That is why every one of our mobile fitters is fully background-checked, insured, and trained to the highest professional standards. They arrive in clean, clearly marked vans, wear uniforms, and treat your property with the utmost respect. We use protective mats to prevent any marks on your driveway and clean up thoroughly after the work is done.",
      "All our home tyre fitting work is fully guaranteed. If you experience any issues with your new tyres, vibration, noise, or handling problems, we will return and resolve the issue at no cost. We also provide a 12-month guarantee on all valves and balancing work. When you choose Mobile Tyre Fitter 24/7 for home tyre fitting, you are choosing convenience without compromise.",
    ],
  },
]

const serviceFaqs = [
  { question: "Do I need to be home while you fit the tyres?", answer: "Not necessarily. Many of our customers give us access to their vehicle and pay by card over the phone. However, we recommend being present so our fitter can show you the completed work and answer any questions." },
  { question: "How much space do you need on my driveway?", answer: "We need enough space to safely work around your vehicle, approximately the length of your car plus a small working area. As long as your vehicle is parked on a flat, stable surface, we can work safely." },
  { question: "Can you fit tyres if I park on the street?", answer: "Yes, as long as the vehicle is legally parked and we have safe access to work. We carry all necessary safety equipment including cones and warning triangles for street-side fitting." },
  { question: "What times are available for home tyre fitting?", answer: "We offer appointments from 7am to 7pm, seven days a week. We also have an emergency 24/7 service if you need tyres fitted outside these hours. Same-day appointments are usually available if you call before 6pm." },
  { question: "Is home tyre fitting more expensive than going to a garage?", answer: "Surprisingly, no. Our prices are competitive with major tyre chains, and when you factor in the time saved by not travelling to and from a garage, most customers find our service better value. We also have no hidden fees, the quote we give is the price you pay." },
  { question: "Will you damage my driveway?", answer: "Absolutely not. We use protective mats and work carefully to ensure no damage to your property. Our fitters are trained to work respectfully in residential environments." },
  { question: "Can you fit tyres on a lease car at my home?", answer: "Yes. We fit tyres on all types of vehicles including lease cars, company cars, and fleet vehicles. We provide detailed receipts suitable for expense claims and lease returns." },
  { question: "What if it is raining or snowing?", answer: "Our mobile vans are fully equipped to work in all weather conditions. We carry shelter equipment for wet weather and work as normal in light rain or snow. In severe weather, we will contact you to reschedule if necessary." },
]

const emergencyScenarios = [
  "Flat tyre discovered while the car is parked at home",
  "MOT failure requiring immediate tyre replacement",
  "Seasonal tyre change before winter or summer",
  "New car delivered that needs better quality tyres",
  "Busy parent who cannot visit a garage during opening hours",
  "Elderly driver who prefers not to drive to a tyre shop",
]

const whyChoose = [
  { title: "Ultimate Convenience", description: "No travel, no queues, no waiting rooms. We come to your home at a time that suits you. The easiest way to get new tyres fitted." },
  { title: "Flexible Appointments", description: "7am to 7pm, seven days a week. Choose a time that fits your schedule, before work, during the day, or in the evening." },
  { title: "Same-Day Available", description: "Call before 6pm for same-day fitting at your home. No waiting days for a garage appointment." },
  { title: "Respectful & Professional", description: "Background-checked, uniformed fitters who treat your property with respect. Protective mats used, full cleanup after." },
  { title: "Continue Your Day", description: "While we fit your tyres, you carry on working, looking after the kids, or simply relaxing. Zero disruption to your routine." },
  { title: "Fully Guaranteed Work", description: "All fitting work guaranteed. Any issues and we return free of charge. Detailed receipt provided for warranties and claims." },
]

const relatedServices = [
  { title: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
  { title: 'Emergency Tyre Fitting', href: '/emergency-mobile-tyre-fitting' },
  { title: 'Mobile Tyre Replacement', href: '/mobile-tyre-replacement' },
]

export default function HomeTyreFitting() {
  return (
    <ServicePageTemplate
      title="Home"
      titleHighlight="Tyre Fitting"
      description="Mobile tyre fitting at your home across the UK. We come to your driveway, no need to visit a garage. Same-day appointments available. Call 0800 123 4567 to book."
      metaTitle="Home Tyre Fitting UK - Mobile Tyre Replacement At Your Doorstep"
      metaDescription="Home mobile tyre fitting across the UK. We come to your driveway with same-day appointments available. All major brands stocked. No garage visit needed. Call 0800 123 4567 to book."
      heroImage="/images/service-home.webp"
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
