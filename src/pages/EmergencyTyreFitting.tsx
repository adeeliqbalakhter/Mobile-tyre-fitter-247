import ServicePageTemplate from '../components/ServicePageTemplate'

const features = [
  "Emergency response within 30-45 minutes anywhere in the UK",
  "Available 24 hours a day, 7 days a week, 365 days a year",
  "Roadside, home, or workplace fitting, we come to you",
  "All tyre brands and sizes stocked in our mobile vans",
  "Professional fitting, balancing, and new valve included",
  "Fully insured technicians with years of experience",
  "Old tyre disposal included at no extra cost",
  "Pay securely by card on completion of the work",
]

const whatToExpect = [
  "Call our 24/7 emergency line and speak directly to a dispatcher, no automated systems",
  "Tell us your location, vehicle details, and tyre size. We will give you an instant quote",
  "Your nearest fully-equipped mobile fitter is dispatched immediately with the correct tyre",
  "Receive real-time SMS updates with your fitter\'s estimated arrival time",
  "Professional fitting and balancing completed at your location while you wait",
  "Pay securely by card or Apple Pay. Drive away with a fully fitted, balanced tyre",
]

const contentBlocks = [
  {
    heading: "Emergency Mobile Tyre Fitting When You Need It Most",
    paragraphs: [
      "A flat tyre or blowout never happens at a convenient time. Whether you are stranded on the motorway at midnight, stuck in a supermarket car park, or unable to get to work in the morning, our emergency mobile tyre fitting service is designed to get you back on the road as quickly and safely as possible. We operate across the entire United Kingdom, with a network of fully equipped mobile tyre fitting vans ready to respond to your emergency within 30 to 45 minutes.",
      "Unlike traditional tyre garages that require you to drive to them, we bring the tyre shop to you. Every one of our mobile fitting vans carries a comprehensive stock of tyres ranging from premium brands like Michelin, Pirelli, and Continental to quality budget options. This means in the vast majority of cases, we can replace your tyre on the spot without needing to order parts or make a second visit. Our technicians are fully trained, insured, and equipped with the latest tyre changing and balancing equipment.",
    ],
  },
  {
    heading: "What Counts As A Tyre Emergency?",
    paragraphs: [
      "A tyre emergency can take many forms. The most common is a flat tyre or blowout caused by nails, screws, sharp debris, or potholes on the road. When a tyre loses pressure rapidly or suffers structural damage, replacement is the only safe option. Driving on a damaged or flat tyre can cause serious damage to your wheel rims and suspension, and is extremely dangerous at speed.",
      "We also regularly attend to drivers who have discovered a flat tyre that has worsened overnight, those who have hit a pothole and damaged their tyre, and commercial drivers who cannot afford downtime. No matter the situation, our advice is simple: if you are unsure whether your tyre is safe to drive on, call us. We will assess the situation over the phone and dispatch a fitter with a replacement tyre immediately. Your safety is our priority.",
    ],
  },
  {
    heading: "Why Choose Mobile Tyre Fitter 24/7 For Emergency Tyre Replacement?",
    paragraphs: [
      "With over 70,000 tyres fitted and a 4.9-star Google rating from more than 2,500 customers, Mobile Tyre Fitter 24/7 has established itself as the UK\'s most trusted emergency mobile tyre service. Our average response time of 30-45 minutes is among the fastest in the industry, and our 24/7 availability means you are never left waiting until morning. Our pricing is transparent, quoted upfront, and all of our work is guaranteed.",
      "Our coverage extends to every corner of the UK, including major motorways such as the M1, M25, M6, M40, M4, M62, M5, and M11. We understand the stress and inconvenience of a tyre emergency, which is why we have designed our entire service around speed, transparency, and quality. When you call us, you speak to a real person based in the UK who understands your situation and can dispatch help immediately.",
    ],
  },
]

const serviceFaqs = [
  { question: "How quickly can you reach me in an emergency?", answer: "Our average response time is 30-45 minutes, depending on your exact location and current demand. In major cities such as London, Birmingham, and Manchester, we typically arrive within 25-35 minutes. When you call, we will give you an accurate ETA based on the location of your nearest available fitter." },
  { question: "How is the price worked out?", answer: "When you call, we give you a clear, all-inclusive quote based on your tyre size and brand choice before any work begins. The price we quote over the phone is the price you pay. Our pricing includes the tyre, fitting, balancing, a new valve, and disposal of your old tyre. We believe in complete transparency." },
  { question: "Do I need a new tyre, or can my flat tyre be fixed?", answer: "In most cases, a flat or damaged tyre will need to be replaced with a new one for safety. If the damage is limited to the central tread area and is very small (under 6mm), a repair may be possible. However, damage to the sidewall, any blowout, or significant tread damage always requires a full replacement. We will assess your tyre on arrival and advise honestly, we never replace a tyre unless it is genuinely necessary." },
  { question: "What areas do you cover for emergency tyre fitting?", answer: "We cover the entire United Kingdom, including England, Scotland, Wales, and Northern Ireland. Our mobile fitters are positioned strategically across major cities and motorways to ensure the fastest possible response times wherever you are." },
  { question: "Do you stock my tyre size?", answer: "With over 70,000 tyres in stock across our fleet, we carry virtually every common tyre size and many specialist sizes too. From run-flat tyres and low-profile performance tyres to 4x4 and van tyres, our mobile vans are comprehensively stocked. If we do not have your exact size, we can source it quickly." },
  { question: "Is it safe to drive on a flat tyre?", answer: "No. Driving on a flat or severely underinflated tyre is dangerous and can cause expensive damage to your wheel rim, suspension, and braking system. If you suspect a flat tyre, pull over safely and call us. We will come to your location with a replacement tyre and fit it on the spot." },
  { question: "Can you fit tyres on motorways?", answer: "Yes, we provide emergency tyre fitting on all major UK motorways including the M1, M25, M6, M40, M4, M62, M5, M11, M20, and M56. If you break down on a motorway, pull over to the hard shoulder, switch on your hazard lights, and call us immediately. Our fitters are experienced in motorway safety procedures." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit and debit cards including Visa, Mastercard, and American Express. We also accept Apple Pay and Google Pay. Payment is taken on completion of the work, and you will receive a full receipt." },
]

const emergencyScenarios = [
  "Flat tyre from nails, screws, or sharp road debris",
  "Blowout at high speed on the motorway",
  "Flat tyre discovered in the morning after going down overnight",
  "Damaged tyre from hitting a pothole",
  "Flat tyre discovered before work or an important journey",
  "Run-flat tyre that has exceeded its safe driving distance",
]

const whyChoose = [
  { title: "Fastest Response Times", description: "30-45 minute average response across the UK, with sub-30-minute times in major cities. We understand that time is critical in an emergency." },
  { title: "Upfront Pricing", description: "We give you a clear, all-inclusive quote over the phone before any work begins. The price we quote is the price you pay, guaranteed." },
  { title: "Fully Stocked Vans", description: "Our mobile vans carry over 70,000 tyre options including premium, mid-range, and budget brands. In most cases, we fix it on the first visit." },
  { title: "24/7 Real Human Support", description: "When you call, you speak to a UK-based operator, not an automated system. We understand your stress and act immediately." },
  { title: "Workmanship Guaranteed", description: "All our fitting work comes with a guarantee. If anything is not right, we will fix it free of charge. Your satisfaction is our priority." },
  { title: "UK-Wide Coverage", description: "From London to Glasgow, Manchester to Cardiff, our network of mobile fitters covers the entire United Kingdom with no exceptions." },
]

const relatedServices = [
  { title: 'Mobile Tyre Replacement', href: '/mobile-tyre-replacement' },
  { title: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
  { title: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
  { title: 'Fleet Tyre Services', href: '/fleet-tyre-services' },
]

export default function EmergencyTyreFitting() {
  return (
    <ServicePageTemplate
      title="Emergency Mobile"
      titleHighlight="Tyre Fitting"
      description="Stranded with a flat tyre or blowout? Our emergency mobile tyre fitting service reaches you within 30-45 minutes anywhere in the UK. Available 24/7, same day, every day of the year. Call 0800 123 4567 now for immediate assistance."
      metaTitle="Emergency Mobile Tyre Fitting UK - 24 Hour Roadside Service"
      metaDescription="Emergency mobile tyre fitting across the UK. 24/7 roadside tyre replacement with 30-45 min response. We come to you at home, work, or the roadside. All brands stocked. Call 0800 123 4567 now."
      heroImage="/images/service-emergency.webp"
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
