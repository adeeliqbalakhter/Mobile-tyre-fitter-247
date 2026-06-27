import { Link } from 'react-router-dom'
import { Shield, Clock, Star, Truck, Wrench, BadgeCheck } from 'lucide-react'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import PhoneButton from '../components/PhoneButton'
import WhatsAppButton from '../components/WhatsAppButton'
import EmergencyCTA from '../sections/EmergencyCTA'

const milestones = [
  { year: '2015', title: 'Founded', desc: 'Started with a single van fitting tyres across London.' },
  { year: '2017', title: 'UK Expansion', desc: 'Expanded our fitter network to Manchester and Birmingham.' },
  { year: '2019', title: '24/7 Service', desc: 'Launched round-the-clock emergency tyre fitting.' },
  { year: '2021', title: 'Fleet Services', desc: 'Introduced dedicated fleet management for businesses.' },
  { year: '2023', title: '70K+ Tyres', desc: 'Reached 70,000 tyres in stock across the country.' },
  { year: '2025', title: 'UK Leader', desc: 'Recognised as one of the UK\'s leading mobile tyre fitters.' },
]

const values = [
  { icon: Clock, title: 'Always Available', desc: '24/7, 365 days a year. No exceptions, no out-of-hours surcharges.' },
  { icon: Shield, title: 'Fully Insured', desc: 'Every fitter is insured, trained, and background-checked.' },
  { icon: Star, title: 'Customer First', desc: '4.9★ rating from more than 2,500 verified reviews.' },
  { icon: Truck, title: 'Rapid Response', desc: '30-45 minute average response time across the UK.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    foundingDate: '2015',
    description: 'UK-wide 24/7 mobile tyre fitting service, replacing tyres at home, work, or roadside.',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2500' },
  },
}

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us - UK's Leading Mobile Tyre Fitting Service"
        description="Learn about Mobile Tyre Fitter 24/7 — the UK's trusted mobile tyre fitting service since 2015. 70,000+ tyres fitted, 4.9★ rating, 30-45 min response."
        schema={schema}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#1a1a1a]">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#ff4444] transition-colors">Home</Link><span>/</span><span className="text-white/80">About</span>
          </nav>
          <h1 className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ fontFamily: 'Space Grotesk' }}>
            About <span className="text-[#ff4444]">Mobile Tyre Fitter 24/7</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            Since 2015, we've made tyre replacement as fast and stress-free as possible by bringing a fully-equipped workshop directly to UK drivers — wherever and whenever they need us.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-b border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            {[
              { icon: Wrench, stat: '70,000+', label: 'Tyres fitted' },
              { icon: Star, stat: '4.9★', label: 'From 2,500+ reviews' },
              { icon: Clock, stat: '30-45 min', label: 'Average response' },
              { icon: Shield, stat: '24/7', label: 'Every day of the year' },
              { icon: BadgeCheck, stat: '10+ yrs', label: 'Serving UK drivers' },
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

      {/* Our story */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-4 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Our <span className="text-[#d92a1d]">Story</span></h2>
          <p className="mb-4 text-lg leading-relaxed text-[#1a1a1a]">
            Mobile Tyre Fitter 24/7 began with a simple frustration: getting a tyre replaced meant losing half a day to a garage waiting room. We knew there had to be a better way.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
            Starting with a single van in London in 2015, we set out to bring the tyre shop to the driver instead of the other way round. Word spread quickly — drivers loved being able to have a new tyre fitted on their own driveway, in the office car park, or at the roadside after a breakdown, without ever queuing at a garage. As demand grew, so did our network of fully-equipped mobile fitters.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
            Today we operate across the entire United Kingdom, 24 hours a day, 365 days a year. Our vans carry over 70,000 tyres from premium, mid-range, and budget brands, so in the vast majority of cases we can supply and fit the right tyre on the very first visit. Every job is carried out by an insured, professionally-trained fitter, and every quote is transparent — the price we give includes the tyre, fitting, balancing, a new valve, and disposal of your old tyre, with no hidden call-out fees.
          </p>
          <p className="text-base leading-relaxed text-[#6a6a6a]">
            That commitment to speed, honesty, and genuine convenience has earned us a 4.9-star rating from more than 2,500 customers — and made us one of the most trusted names in mobile tyre fitting in the UK.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>What We <span className="text-[#d92a1d]">Stand For</span></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-5">
                <Icon className="mb-3 h-6 w-6 text-[#d92a1d]" />
                <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{title}</h3>
                <p className="text-sm text-[#6a6a6a]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-10 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Our <span className="text-[#d92a1d]">Journey</span></h2>
          <div className="relative border-l-2 border-gray-200 pl-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-[#d92a1d] ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="text-xs font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{m.year}</span>
                <h3 className="mt-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{m.title}</h3>
                <p className="text-sm text-[#6a6a6a]">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PhoneButton size="lg" eventLabel="about_page" />
            <WhatsAppButton size="lg" variant="primary" message="Hi, I'd like to know more about your mobile tyre fitting service." />
          </div>
        </div>
      </section>

      <EmergencyCTA />
    </>
  )
}
