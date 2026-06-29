import { Link, useLocation } from 'react-router-dom'
import {
  MapPin, Clock, Shield, Star, CheckCircle, ArrowRight,
  Phone, Navigation, Wrench, Home, BadgeCheck,
} from 'lucide-react'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import PhoneButton from '../components/PhoneButton'
import WhatsAppButton from '../components/WhatsAppButton'
import EmergencyCTA from '../sections/EmergencyCTA'
import { cityData, cityPath } from '../data/cities'

const steps = [
  { icon: Phone, title: 'Call or message us', desc: 'Tell us your postcode or location and your tyre size. We confirm the nearest available fitter and give you an exact ETA.' },
  { icon: Navigation, title: 'We come to you', desc: 'Your closest mobile fitter is dispatched to wherever you are, home, work, or roadside, usually within 30-45 minutes.' },
  { icon: Wrench, title: 'Fitted on the spot', desc: 'We supply, fit, and balance your new tyre at your location. No need to drive anywhere or wait at a garage.' },
  { icon: CheckCircle, title: 'Back on the road', desc: 'Pay securely by card on completion. We take your old tyre away for responsible recycling.' },
]

const whyChoose = [
  { icon: Clock, title: 'Genuinely local response', desc: 'A nationwide network of fitters means there is almost always one near you, day or night.' },
  { icon: Home, title: 'We come to you', desc: 'Home, office car park, supermarket, or the hard shoulder, we fit tyres wherever you are.' },
  { icon: Shield, title: 'Fully insured fitters', desc: 'Every mobile fitter is insured, trained, and background-checked for your peace of mind.' },
  { icon: BadgeCheck, title: 'Upfront pricing', desc: 'A clear, all-inclusive quote before any work begins. The price we quote is the price you pay.' },
]

const faqs = [
  { question: 'How do I find mobile tyre fitting near me?', answer: 'Just call us with your postcode or location and we will dispatch the nearest available mobile fitter. We cover the whole of the UK, so wherever you are, there is usually a fitter close by who can reach you within 30-45 minutes.' },
  { question: 'Do you really come to my location?', answer: 'Yes. That is the whole point of our service, we bring the tyre workshop to you. We fit tyres at your home, your workplace, the roadside, or anywhere your vehicle is safely parked.' },
  { question: 'How quickly can a mobile fitter reach me?', answer: 'Our average response time is 30-45 minutes, and 25-35 minutes in major cities. When you call, we give you an accurate ETA based on your exact location and the nearest available van.' },
  { question: 'Are you available near me 24/7?', answer: 'Yes. We operate 24 hours a day, 7 days a week, 365 days a year across the UK, including weekends and bank holidays, with no out-of-hours surcharge.' },
  { question: 'How much does mobile tyre fitting near me cost?', answer: 'Pricing depends on your tyre size and brand choice, and is always quoted upfront with no hidden fees. The price includes the tyre, fitting, balancing, a new valve, and disposal of your old tyre.' },
]

const tier1 = ['london', 'leeds', 'birmingham', 'manchester', 'bristol', 'glasgow', 'leicester', 'milton-keynes', 'swindon', 'liverpool', 'edinburgh', 'coventry', 'reading', 'cardiff', 'nottingham']

export default function NearMe() {
  const location = useLocation()
  const pageUrl = `${SITE_URL}${location.pathname}`
  const cities = tier1.filter((slug) => cityData[slug])

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Mobile Tyre Fitting Near Me',
        description: 'Mobile tyre fitting that comes to your location anywhere in the UK, 24/7, with a 30-45 minute average response.',
        serviceType: 'Mobile Tyre Fitting',
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        url: pageUrl,
        provider: { '@type': 'LocalBusiness', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Mobile Tyre Fitting Near Me', item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
      },
    ],
  }

  return (
    <>
      <SEOHead
        title="Mobile Tyre Fitting Near Me - 24/7 Fitters Near You"
        description="Looking for mobile tyre fitting near you? We come to your location anywhere in the UK, 24/7, with a 30-45 minute average response. Call now for an instant quote."
        schema={schema}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a]">
          <img src="/images/hero-bg.jpg" alt="Mobile tyre fitting near you" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/85 via-[#1a1a1a]/80 to-[#1a1a1a]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#ff4444] transition-colors">Home</Link><span>/</span><span className="text-white/80">Near Me</span>
          </nav>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1">
                <MapPin className="h-3.5 w-3.5 text-[#ff4444]" />
                <span className="text-xs font-semibold tracking-wider text-white/80" style={{ fontFamily: 'JetBrains Mono' }}>UK-WIDE, WE COME TO YOU</span>
              </div>
              <h1 className="mb-4 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg" style={{ fontFamily: 'Space Grotesk' }}>
                Mobile Tyre Fitting <span className="text-[#ff4444]">Near Me</span>
              </h1>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-white/85 lg:text-lg">
                Need a tyre fitter near you? We bring the workshop to your door, anywhere in the UK, 24 hours a day, with an average response of just 30-45 minutes.
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {[{ icon: Clock, text: '30-45 min response' }, { icon: Shield, text: 'Fully insured' }, { icon: Star, text: '4.9★ rated' }, { icon: MapPin, text: 'UK-wide coverage' }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1">
                    <Icon className="h-3 w-3 text-[#ff4444]" />
                    <span className="text-[11px] font-medium text-white/80" style={{ fontFamily: 'JetBrains Mono' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PhoneButton size="lg" eventLabel="near_me_hero" />
                <WhatsAppButton size="lg" variant="primary" message="Hi, I need a mobile tyre fitter near me. Can you help?" />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 lg:p-8">
              <h2 className="mb-4 text-lg font-semibold text-white" style={{ fontFamily: 'Space Grotesk' }}>Why drivers search "near me"</h2>
              <ul className="space-y-3">
                {['No driving to a garage on a damaged tyre', 'A fitter dispatched from near your location', 'Fitted at home, work, or the roadside', 'Available 24/7 with no out-of-hours premium', 'All major brands carried in the van'].map((f) => (
                  <li key={f} className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ff4444]" /><span className="text-sm text-white/85">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-4 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>How Mobile Tyre Fitting <span className="text-[#d92a1d]">Near You</span> Works</h2>
          <p className="mb-4 text-lg leading-relaxed text-[#1a1a1a]">When you search for "mobile tyre fitting near me", you want one thing: someone to come to you, fast. That is exactly what we do.</p>
          <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">Instead of driving on a flat or damaged tyre to a garage and waiting around, you call us and we send the nearest available mobile fitter straight to your location. Our fitters work right across the UK in rotating shifts, so wherever you are, and whatever the time, there is usually a fully-equipped van close by.</p>
          <p className="text-base leading-relaxed text-[#6a6a6a]">Every van carries a wide range of tyres and the equipment to supply, fit, and balance your new tyre on the spot. The price we quote includes the tyre, fitting, balancing, a new valve, and disposal of your old tyre, with no hidden fees.</p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Clock, stat: '30-45 min', label: 'Average response' },
              { icon: Shield, stat: '24/7', label: 'Every day of the year' },
              { icon: Star, stat: '4.9★', label: 'From 2,500+ reviews' },
              { icon: Wrench, stat: '70,000+', label: 'Tyres in stock' },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="mb-2 h-5 w-5 text-[#d92a1d]" />
                <div className="text-xl font-bold text-[#1a1a1a] sm:text-2xl" style={{ fontFamily: 'Space Grotesk' }}>{stat}</div>
                <div className="text-[11px] text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find a fitter near you - city links */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-2 text-2xl font-bold text-[#1a1a1a] sm:text-3xl" style={{ fontFamily: 'Space Grotesk' }}>Find a Mobile Tyre Fitter <span className="text-[#d92a1d]">Near You</span></h2>
          <p className="mb-8 max-w-2xl text-[#6a6a6a]">Choose your city to see local coverage and response times, or call us to confirm we cover your postcode.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {cities.map((slug) => (
              <Link key={slug} to={cityPath(slug)} className="group flex items-center justify-between gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-all hover:border-[#d92a1d]/30 hover:bg-white hover:shadow-sm">
                <span className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]"><MapPin className="h-3.5 w-3.5 text-[#d92a1d]" />{cityData[slug].name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-300 group-hover:text-[#d92a1d] transition-colors" />
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/coverage-areas" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d92a1d] hover:text-[#b82418] transition-colors">View all coverage areas <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a] sm:text-3xl" style={{ fontFamily: 'Space Grotesk' }}>How It <span className="text-[#d92a1d]">Works</span></h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#d92a1d] text-white"><s.icon className="h-5 w-5" /></div>
                <div className="mb-1 text-xs font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>STEP {i + 1}</div>
                <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#6a6a6a]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a] sm:text-3xl" style={{ fontFamily: 'Space Grotesk' }}>Why Choose Us <span className="text-[#d92a1d]">Near You</span></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <w.icon className="mb-3 h-6 w-6 text-[#d92a1d]" />
                <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{w.title}</h3>
                <p className="text-sm text-[#6a6a6a]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Mobile Tyre Fitting Near Me <span className="text-[#d92a1d]">FAQs</span></h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{f.question}</h3>
                <p className="text-sm leading-relaxed text-[#6a6a6a]">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  )
}
