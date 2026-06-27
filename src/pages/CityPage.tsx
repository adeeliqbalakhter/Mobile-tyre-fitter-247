import { useParams, Link } from 'react-router-dom'
import {
  MapPin, Clock, Shield, Star, CheckCircle, ArrowRight,
  AlertTriangle, Home, Building2, Truck, Zap, Route,
} from 'lucide-react'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import PhoneButton from '../components/PhoneButton'
import WhatsAppButton from '../components/WhatsAppButton'
import EmergencyCTA from '../sections/EmergencyCTA'

interface CityInfo {
  name: string
  region: string
  time: string
  areas: string[]
  roads: string[]
  image: string
}

const cityData: Record<string, CityInfo> = {
  london: { name: 'London', region: 'Greater London', time: '25-35 min', areas: ['Central London', 'North London', 'South London', 'East London', 'West London', 'Croydon', 'Bromley', 'Greenwich', 'Enfield', 'Wembley'], roads: ['M25', 'M4', 'M1', 'A406 North Circular', 'A40', 'M11'], image: '/images/city-london.jpg' },
  manchester: { name: 'Manchester', region: 'Greater Manchester', time: '30-40 min', areas: ['City Centre', 'Salford', 'Stockport', 'Bolton', 'Oldham', 'Rochdale', 'Bury', 'Trafford'], roads: ['M60', 'M62', 'M56', 'M61', 'A56', 'A6'], image: '/images/city-manchester.jpg' },
  birmingham: { name: 'Birmingham', region: 'West Midlands', time: '30-40 min', areas: ['City Centre', 'Solihull', 'Coventry', 'Wolverhampton', 'Dudley', 'Walsall', 'Sutton Coldfield'], roads: ['M6', 'M5', 'M42', 'M40', 'A38', 'A45'], image: '/images/city-birmingham.jpg' },
  glasgow: { name: 'Glasgow', region: 'Scotland', time: '35-50 min', areas: ['City Centre', 'East End', 'West End', 'South Side', 'Paisley', 'Hamilton', 'Motherwell'], roads: ['M8', 'M77', 'M74', 'M73', 'A82', 'A77'], image: '/images/city-london.jpg' },
  leeds: { name: 'Leeds', region: 'West Yorkshire', time: '30-45 min', areas: ['City Centre', 'Bradford', 'Wakefield', 'Huddersfield', 'Halifax', 'York'], roads: ['M1', 'M62', 'M621', 'A61', 'A64', 'A58'], image: '/images/city-manchester.jpg' },
  liverpool: { name: 'Liverpool', region: 'Merseyside', time: '30-40 min', areas: ['City Centre', 'Birkenhead', 'Wirral', 'St Helens', 'Warrington', 'Chester'], roads: ['M62', 'M57', 'M58', 'M53', 'A59', 'A565'], image: '/images/city-birmingham.jpg' },
  bristol: { name: 'Bristol', region: 'South West England', time: '35-50 min', areas: ['City Centre', 'Bath', 'Weston-super-Mare', 'Gloucester', 'Cheltenham', 'Swindon'], roads: ['M5', 'M4', 'M32', 'A4', 'A38', 'A370'], image: '/images/city-london.jpg' },
  leicester: { name: 'Leicester', region: 'East Midlands', time: '35-50 min', areas: ['City Centre', 'Nottingham', 'Derby', 'Northampton', 'Loughborough'], roads: ['M1', 'M69', 'A6', 'A46', 'A47', 'A50'], image: '/images/city-manchester.jpg' },
  newcastle: { name: 'Newcastle', region: 'North East England', time: '35-50 min', areas: ['City Centre', 'Sunderland', 'Middlesbrough', 'Durham', 'Gateshead'], roads: ['A1(M)', 'A19', 'A69', 'A167', 'A184'], image: '/images/city-birmingham.jpg' },
}

const cityServices = [
  { icon: AlertTriangle, title: 'Emergency Tyre Fitting', href: '/emergency-tyre-fitting' },
  { icon: Clock, title: '24 Hour Tyre Fitting', href: '/24-hour-tyre-fitting' },
  { icon: Zap, title: 'Same Day Tyre Fitting', href: '/same-day-tyre-fitting' },
  { icon: Home, title: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
  { icon: Building2, title: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
  { icon: Truck, title: 'Fleet Tyre Services', href: '/fleet-tyre-services' },
]

export default function CityPage() {
  const { city } = useParams<{ city: string }>()
  const cityInfo = city ? cityData[city as keyof typeof cityData] : null

  if (!cityInfo) {
    return (
      <div className="pt-32 pb-20 text-center bg-white">
        <h1 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Area Not Found</h1>
        <Link to="/coverage-areas" className="mt-4 inline-block text-[#d92a1d]">View all coverage areas</Link>
      </div>
    )
  }

  const { name, region, time, areas, roads } = cityInfo
  const otherCities = Object.entries(cityData).filter(([slug]) => slug !== city).slice(0, 6)

  const localFaqs = [
    {
      question: `How quickly can you reach me in ${name}?`,
      answer: `Our average response time across ${name} is ${time}. We have mobile fitters working throughout ${region} around the clock, so when you call we'll give you an exact ETA based on your postcode and the nearest available van.`,
    },
    {
      question: `Do you cover all areas of ${name}?`,
      answer: `Yes. We cover ${name} city centre and all surrounding areas, including ${areas.slice(0, 5).join(', ')} and beyond. We also attend breakdowns on the major routes around the city such as the ${roads.slice(0, 3).join(', ')}.`,
    },
    {
      question: `Are you available 24/7 in ${name}?`,
      answer: `Absolutely. Our ${name} mobile tyre fitting service operates 24 hours a day, 7 days a week, 365 days a year — including weekends and bank holidays. There are no out-of-hours or weekend surcharges.`,
    },
    {
      question: `How much does mobile tyre fitting cost in ${name}?`,
      answer: `Pricing depends on your tyre size and brand choice, but every quote is fully transparent with no hidden call-out fees. The price includes the tyre, fitting, balancing, a new valve, and disposal of your old tyre. Call us for an instant quote for your vehicle.`,
    },
  ]

  const pageUrl = typeof window !== 'undefined' ? `${SITE_URL}${window.location.pathname}` : SITE_URL
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Mobile Tyre Fitting ${name}`,
        description: `24/7 mobile tyre fitting in ${name} and across ${region}. Emergency tyre replacement at your home, work, or roadside with a ${time} average response.`,
        serviceType: 'Mobile Tyre Fitting',
        areaServed: { '@type': 'City', name },
        url: pageUrl,
        provider: { '@type': 'LocalBusiness', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Coverage Areas', item: `${SITE_URL}/coverage-areas` },
          { '@type': 'ListItem', position: 3, name, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: localFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <>
      <SEOHead
        title={`Mobile Tyre Fitting ${name} - 24/7 Emergency Service`}
        description={`Mobile tyre fitting in ${name} and surrounding areas. 24/7 emergency tyre replacement at home, work, or roadside with a ${time} average response. Call now for an instant quote.`}
        schema={schema}
      />

      {/* Hero — dark, high-contrast for readability over the city photo */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a]">
          <img src={cityInfo.image} alt={`Mobile tyre fitting in ${name}`} className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/85 via-[#1a1a1a]/80 to-[#1a1a1a]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#ff4444] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/coverage-areas" className="hover:text-[#ff4444] transition-colors">Coverage</Link>
            <span>/</span>
            <span className="text-white/80">{name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1">
                <MapPin className="h-3.5 w-3.5 text-[#ff4444]" />
                <span className="text-xs font-semibold tracking-wider text-white/80" style={{ fontFamily: 'JetBrains Mono' }}>{region.toUpperCase()}</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg" style={{ fontFamily: 'Space Grotesk' }}>
                Mobile Tyre Fitting <span className="text-[#ff4444]">{name}</span>
              </h1>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-white/85 lg:text-lg">
                Stranded with a flat in {name}? We bring the garage to you — at home, work, or roadside — 24 hours a day, 7 days a week, with an average {time} response across {region}.
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {[{ icon: Clock, text: `${time} response` }, { icon: Shield, text: 'Fully insured' }, { icon: Star, text: '4.9★ rated' }, { icon: MapPin, text: `${region}` }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1">
                    <Icon className="h-3 w-3 text-[#ff4444]" />
                    <span className="text-[11px] font-medium text-white/80" style={{ fontFamily: 'JetBrains Mono' }}>{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PhoneButton size="lg" eventLabel={`city_${name.toLowerCase()}_hero`} />
                <WhatsAppButton size="lg" variant="primary" message={`Hi, I need a mobile tyre fitter in ${name}. Can you help?`} />
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 lg:p-8">
              <h2 className="mb-4 text-lg font-semibold text-white" style={{ fontFamily: 'Space Grotesk' }}>Why drivers in {name} call us</h2>
              <ul className="space-y-3">
                {[
                  `Fast ${time} average response across ${name}`,
                  'Available 24/7 — no out-of-hours or weekend surcharges',
                  'New tyres supplied, fitted & balanced at your location',
                  'All major brands plus budget options in stock',
                  'No hidden call-out fees — the quote is the price you pay',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ff4444]" />
                    <span className="text-sm text-white/85">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg bg-white/10 border border-white/10 p-4">
                <p className="text-xs text-white/60 mb-2" style={{ fontFamily: 'JetBrains Mono' }}>AVERAGE RESPONSE IN {name.toUpperCase()}</p>
                <p className="text-2xl font-bold text-[#ff4444]" style={{ fontFamily: 'Space Grotesk' }}>{time}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-4 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
            24/7 Mobile Tyre Fitting Across <span className="text-[#d92a1d]">{name}</span>
          </h2>
          <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
            When you're stranded with a flat tyre or blowout in {name}, the last thing you need is a long wait for recovery or the hassle of arranging a tow to a garage. Mobile Tyre Fitter 24/7 brings a fully-equipped workshop directly to you — anywhere in {name} and across {region} — with an average response time of just {time}.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
            Our mobile vans carry a wide range of tyres and the equipment to supply, fit, and balance a brand-new tyre at your roadside, home driveway, or workplace car park. We work right across the city — from {areas.slice(0, 4).join(', ')} and beyond — as well as the busy routes that surround it, including the {roads.slice(0, 4).join(', ')}. Whether you've suffered a blowout on the motorway or woken up to a flat on the drive, help is never far away.
          </p>
          <p className="text-base leading-relaxed text-[#6a6a6a]">
            Every job is carried out by fully-insured, professionally-trained fitters, and every price we quote includes the tyre, fitting, balancing, a new valve, and disposal of your old tyre. No hidden call-out fees, no out-of-hours premiums — just fast, honest mobile tyre fitting in {name}, day or night.
          </p>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
            Our Tyre Services in <span className="text-[#d92a1d]">{name}</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cityServices.map((service) => (
              <Link key={service.title} to={service.href} className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-[#d92a1d]/30 hover:shadow-md">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#d92a1d]/10">
                  <service.icon className="h-5 w-5 text-[#d92a1d]" />
                </div>
                <span className="flex-1 text-sm font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{service.title}</span>
                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#d92a1d] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas + roads covered */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
                <MapPin className="h-5 w-5 text-[#d92a1d]" /> Areas We Cover Near {name}
              </h2>
              <p className="mb-4 text-sm text-[#6a6a6a]">We reach drivers right across {name} and the wider {region} area, including:</p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span key={area} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-[#6a6a6a]">{area}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
                <Route className="h-5 w-5 text-[#d92a1d]" /> Motorways &amp; Major Roads
              </h2>
              <p className="mb-4 text-sm text-[#6a6a6a]">Broken down on a busy route? We respond fast to roadside emergencies on the main roads around {name}:</p>
              <div className="flex flex-wrap gap-2">
                {roads.map((road) => (
                  <span key={road} className="rounded-lg bg-[#d92a1d]/10 border border-[#d92a1d]/20 px-3 py-2 text-sm font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{road}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
            Mobile Tyre Fitting in {name} — <span className="text-[#d92a1d]">FAQs</span>
          </h2>
          <div className="space-y-4">
            {localFaqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{faq.question}</h3>
                <p className="text-sm leading-relaxed text-[#6a6a6a]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <div className="rounded-2xl border border-[#d92a1d]/20 bg-[#d92a1d]/5 p-8 text-center">
            <h2 className="mb-2 text-xl font-bold text-[#1a1a1a] sm:text-2xl" style={{ fontFamily: 'Space Grotesk' }}>Need a Tyre Fitter in {name} Now?</h2>
            <p className="mb-6 text-sm text-[#6a6a6a]">Call or WhatsApp for an instant quote and immediate dispatch. Average response: {time}.</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PhoneButton size="lg" eventLabel={`city_${name.toLowerCase()}_cta`} />
              <WhatsAppButton size="lg" variant="primary" message={`Hi, I need a mobile tyre fitter in ${name}. Can you help?`} />
            </div>
          </div>
        </div>
      </section>

      {/* Other cities — internal linking */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Other Areas We <span className="text-[#d92a1d]">Cover</span></h2>
          <div className="flex flex-wrap gap-3">
            {otherCities.map(([slug, info]) => (
              <Link key={slug} to={`/coverage/${slug}`} className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 transition-all hover:border-[#d92a1d]/30 hover:shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-[#d92a1d]" />
                <span className="text-sm font-medium text-[#6a6a6a] group-hover:text-[#1a1a1a] transition-colors">{info.name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#d92a1d] transition-colors" />
              </Link>
            ))}
            <Link to="/coverage-areas" className="group flex items-center gap-2 rounded-lg border border-[#d92a1d]/30 bg-white px-4 py-3 transition-all hover:shadow-sm">
              <span className="text-sm font-semibold text-[#d92a1d]">View all coverage areas</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#d92a1d]" />
            </Link>
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  )
}
