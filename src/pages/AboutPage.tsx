import { Link } from 'react-router-dom'
import { Shield, Clock, Truck, BadgeCheck, MapPin, Building2, Target, HeartHandshake } from 'lucide-react'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import RelatedPagesSection from '../components/RelatedPagesSection'
import EmergencyCTA from '../sections/EmergencyCTA'
import { COMPANY_LEGAL_NAME, COMPANY_NUMBER, REGISTERED_OFFICE } from '../lib/config'

const milestones = [
  { year: 'Jul 2026', title: 'Company Founded', desc: 'Mobile Tyre Fitter 247 Ltd incorporated on 21 July 2026, registered in London with a mission to disrupt mobile tyre fitting across the UK.' },
  { year: 'Jul 2026', title: '24/7 Launch', desc: 'Launched our round-the-clock emergency mobile tyre fitting service from day one, covering London and the Home Counties.' },
  { year: 'Jul 2026', title: 'Full Brand Range', desc: 'Partnered with leading tyre distributors to stock premium, mid-range, and budget brands from the very first week of operations.' },
  { year: 'Jul 2026', title: 'UK-Wide Coverage', desc: 'Expanded our fitter network across England, Scotland, and Wales with strategically positioned vans for rapid national response.' },
  { year: 'Jul 2026', title: 'Fleet & Corporate', desc: 'Introduced dedicated fleet tyre management with corporate accounts, volume pricing, and 30-day invoicing for businesses.' },
  { year: 'Jul 2026', title: 'Digital-First', desc: 'Launched our website with real-time booking, live tracking, and instant quotes, making mobile tyre fitting as seamless as ordering a takeaway.' },
]

const values = [
  { icon: Clock, title: 'Always Available', desc: '24/7, 365 days a year. No exceptions, no out-of-hours surcharges, no automated queues. Call us and speak to a real person every time.' },
  { icon: Shield, title: 'Fully Insured', desc: 'Every fitter is fully insured, professionally trained, and background-checked. Your vehicle is in safe hands.' },
  { icon: Target, title: 'Transparent Pricing', desc: 'The quote we give is the price you pay. No hidden charges, no call-out fees, no surprises. Ever.' },
  { icon: Truck, title: 'Rapid Response', desc: '30-45 minute average response time across the UK. We come to you at home, work, or the roadside.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    foundingDate: '2026-07-21',
    description: 'UK-wide 24/7 mobile tyre fitting service, replacing tyres at home, work, or roadside.',
    legalName: COMPANY_LEGAL_NAME,
    taxID: COMPANY_NUMBER,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '128 City Road',
      addressLocality: 'London',
      postalCode: 'EC1V 2NX',
      addressCountry: 'GB',
    },
  },
}

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us - UK's Trusted 24/7 Mobile Tyre Fitting Service"
        description="Learn about Mobile Tyre Fitter 24/7, a UK-based 24/7 mobile tyre fitting company that brings the tyre workshop to you at home, work, or the roadside."
        keywords="about mobile tyre fitter, mobile tyre fitting UK, 24/7 tyre service, UK tyre fitter, tyre fitting company"
        schema={schema}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]}
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
            Founded in 2026 with a clear mission: to make tyre replacement as fast, transparent, and stress-free as possible by bringing a fully-equipped workshop directly to UK drivers, wherever and whenever they need us.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-b border-gray-200 bg-gray-50 py-8">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            {[
              { icon: Truck, stat: 'UK-Wide', label: 'National coverage' },
              { icon: Clock, stat: '24/7', label: 'Every day of the year' },
              { icon: Shield, stat: 'Fully', label: 'Insured & guaranteed' },
              { icon: Target, stat: '30-45 min', label: 'Average response' },
              { icon: HeartHandshake, stat: 'Transparent', label: 'No hidden fees' },
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
            Mobile Tyre Fitter 24/7 was born from a straightforward observation: getting a tyre replaced in the UK is still far too inconvenient. It means taking time off work, driving to a garage, sitting in a waiting room, and hoping they have the right tyre in stock. We believed drivers deserved better, so we built the service we wished existed.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
            Incorporated on 21 July 2026 and headquartered in London, we launched from day one with a 24/7 emergency mobile tyre fitting service covering the entire United Kingdom. Instead of asking drivers to come to us, we bring the entire tyre workshop to them, whether that is at home, at the office, or at the roadside after a breakdown. Our vans are fully equipped with tyre fitting and balancing equipment, and they carry stock from all the major brands including Michelin, Pirelli, Continental, Bridgestone, Goodyear, and Dunlop, alongside quality mid-range and budget options.
          </p>
          <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
            From the very beginning, we built our service around three principles: speed, transparency, and convenience. We aim to reach you within 30 to 45 minutes of your call. The quote we give over the phone is the price you pay on the day, with no hidden charges, no call-out fees, and no nasty surprises. And because we operate around the clock, 365 days a year including weekends and bank holidays, you will never be left stranded regardless of when a tyre emergency strikes.
          </p>
          <p className="text-base leading-relaxed text-[#6a6a6a]">
            We also launched with dedicated fleet and corporate tyre management from the outset, offering businesses volume pricing, priority dispatch, monthly consolidated invoicing with 30-day payment terms, and a dedicated account manager. Whether you are an individual driver with a flat tyre or a business managing a fleet of vehicles, our service is designed to get you back on the road as quickly and painlessly as possible.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>What Makes Us <span className="text-[#d92a1d]">Different</span></h2>
          <div className="space-y-6">
            {[
              {
                title: 'Real People, Not Bots',
                desc: 'When you call us, you speak to a real person based in the UK who understands your situation and can dispatch help immediately. No automated menus, no hold music marathons, no being passed between departments. Your call is answered by someone who can actually help you.',
              },
              {
                title: 'The Price You See Is The Price You Pay',
                desc: 'We hate hidden fees as much as you do. The quote we give over the phone includes everything: the tyre, fitting, wheel balancing, a new valve, and disposal of your old tyre. There are no add-ons, no surcharges for evenings or weekends, and no call-out fees. What we say is what you pay.',
              },
              {
                title: 'We Come To You, Not The Other Way Round',
                desc: 'Home, work, roadside, motorway hard shoulder, hotel car park, it makes no difference to us. Our fully-equipped mobile fitting vans can reach you anywhere in the UK. You do not need to lift a finger except to answer the door and hand over the keys.',
              },
              {
                title: 'Built For Emergencies From Day One',
                desc: 'A flat tyre never happens at a convenient time. That is exactly why we designed our entire operation around emergency response. Our fitters are positioned strategically across the UK, our vans are loaded and ready, and our dispatch line is open 24 hours a day, 7 days a week, 365 days a year.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#6a6a6a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>What We <span className="text-[#d92a1d]">Stand For</span></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <Icon className="mb-3 h-6 w-6 text-[#d92a1d]" />
                <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{title}</h3>
                <p className="text-sm text-[#6a6a6a]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-10 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Our <span className="text-[#d92a1d]">Journey</span></h2>
          <div className="relative border-l-2 border-gray-200 pl-8">
            {milestones.map((m) => (
              <div key={m.title} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-[#d92a1d] ring-4 ring-gray-50">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="text-xs font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{m.year}</span>
                <h3 className="mt-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{m.title}</h3>
                <p className="text-sm text-[#6a6a6a]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Company <span className="text-[#d92a1d]">Details</span></h2>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d92a1d]" />
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">{COMPANY_LEGAL_NAME}</p>
                <p className="text-sm text-[#6a6a6a]">Registered in England and Wales</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d92a1d]" />
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">Companies House Number</p>
                <p className="text-sm text-[#6a6a6a]">{COMPANY_NUMBER}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d92a1d]" />
              <div>
                <p className="text-sm font-semibold text-[#1a1a1a]">Registered Office</p>
                <p className="text-sm text-[#6a6a6a]">{REGISTERED_OFFICE}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPagesSection
        heading="Our Services & Coverage"
        intro="Explore what we do and where we work across the UK."
        tone="gray"
        links={[
          { label: 'Emergency mobile tyre fitting', href: '/emergency-mobile-tyre-fitting' },
          { label: 'Mobile tyre replacement', href: '/mobile-tyre-replacement' },
          { label: 'Home tyre fitting', href: '/home-tyre-fitting' },
          { label: 'Workplace tyre fitting', href: '/workplace-tyre-fitting' },
          { label: 'Fleet tyre services', href: '/fleet-tyre-services' },
          { label: 'Mobile tyre fitting near me', href: '/mobile-tyre-fitting-near-me' },
          { label: 'Tyre brands we stock', href: '/tyre-brands' },
          { label: 'Areas we cover', href: '/coverage-areas' },
          { label: 'Contact us', href: '/contact' },
        ]}
      />

      <EmergencyCTA />
    </>
  )
}
