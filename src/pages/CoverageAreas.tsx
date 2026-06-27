import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight, Navigation, Wrench } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import PhoneButton from '../components/PhoneButton'
import WhatsAppButton from '../components/WhatsAppButton'
import EmergencyCTA from '../sections/EmergencyCTA'

const regions = [
  { name: 'London & Greater London', cities: ['Central London', 'North London', 'South London', 'East London', 'West London', 'Croydon', 'Bromley', 'Enfield'], time: '25-35 min', slug: 'london' },
  { name: 'North West England', cities: ['Manchester', 'Liverpool', 'Bolton', 'Stockport', 'Warrington', 'Chester', 'Blackpool'], time: '30-40 min', slug: 'manchester' },
  { name: 'West Midlands', cities: ['Birmingham', 'Coventry', 'Wolverhampton', 'Solihull', 'Dudley', 'Walsall'], time: '30-40 min', slug: 'birmingham' },
  { name: 'Scotland', cities: ['Glasgow', 'Edinburgh', 'Aberdeen', 'Dundee', 'Paisley', 'Hamilton'], time: '35-50 min', slug: 'glasgow' },
  { name: 'Yorkshire & Humber', cities: ['Leeds', 'Sheffield', 'Bradford', 'York', 'Hull', 'Huddersfield'], time: '30-45 min', slug: 'leeds' },
  { name: 'South West England', cities: ['Bristol', 'Plymouth', 'Exeter', 'Swindon', 'Gloucester', 'Bath'], time: '35-50 min', slug: 'bristol' },
  { name: 'East Midlands', cities: ['Leicester', 'Nottingham', 'Derby', 'Northampton', 'Lincoln'], time: '35-50 min', slug: 'leicester' },
  { name: 'North East England', cities: ['Newcastle', 'Sunderland', 'Middlesbrough', 'Durham'], time: '35-50 min', slug: 'newcastle' },
]

const motorways = ['M1', 'M25', 'M6', 'M40', 'M4', 'M62', 'M5', 'M11', 'M20', 'M56']

export default function CoverageAreas() {
  return (
    <>
      <SEOHead title="Coverage Areas - Mobile Tyre Fitting Across the UK" description="Mobile tyre fitting coverage across the entire UK. London, Manchester, Birmingham, Glasgow, and everywhere in between. Call 0800 123 4567 to check your area." />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Coverage Areas</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>UK-Wide <span className="text-[#d92a1d]">Coverage</span></h1>
          <p className="mb-6 max-w-2xl text-[#6a6a6a]">From major cities to remote motorways, our mobile tyre fitters cover the entire United Kingdom, England, Scotland, and Wales. Wherever you've broken down, we'll come to you 24/7. Find your area below, or call to confirm we cover your postcode.</p>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            <PhoneButton size="lg" eventLabel="coverage_hero" />
            <WhatsAppButton size="lg" variant="primary" message="Hi, do you cover my area for mobile tyre fitting?" />
          </div>

          {/* Quick stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: MapPin, stat: '8', label: 'Regions covered' },
              { icon: Navigation, stat: '24/7', label: 'Every day of the year' },
              { icon: Clock, stat: '30-45', label: 'Min average response' },
              { icon: Wrench, stat: '70k+', label: 'Tyres in stock' },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <Icon className="mb-2 h-5 w-5 text-[#d92a1d]" />
                <div className="text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{stat}</div>
                <div className="text-xs text-[#6a6a6a]">{label}</div>
              </div>
            ))}
          </div>

          <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Link key={region.slug} to={`/coverage/${region.slug}`} className="group rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-[#d92a1d]/30 hover:bg-white hover:shadow-md">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#d92a1d]" /><h3 className="font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{region.name}</h3></div>
                  <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#d92a1d] transition-colors" />
                </div>
                <div className="mb-3 flex flex-wrap gap-1.5">{region.cities.map((city) => (<span key={city} className="rounded bg-white border border-gray-100 px-2 py-0.5 text-[11px] text-[#6a6a6a]">{city}</span>))}</div>
                <div className="flex items-center gap-1.5 text-xs text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}><Clock className="h-3 w-3" />{region.time} avg response</div>
              </Link>
            ))}
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Motorway Coverage</h3>
            <p className="mb-4 text-sm text-[#6a6a6a]">We provide emergency tyre fitting on all major UK motorways. If you break down on a motorway, call us immediately.</p>
            <div className="flex flex-wrap gap-2">{motorways.map((m) => (<span key={m} className="rounded-lg bg-[#d92a1d]/10 border border-[#d92a1d]/20 px-3 py-1.5 text-sm font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{m}</span>))}</div>
          </div>

          {/* SEO / reassurance content */}
          <div className="mt-12 max-w-[800px]">
            <h2 className="mb-4 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Not Sure If We Cover Your Area?</h2>
            <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
              Our network of mobile tyre fitters stretches far beyond the major cities listed above. We regularly attend smaller towns, villages, business parks, and motorway services across England, Scotland, and Wales. If your location isn't shown, it almost certainly doesn't mean we can't reach you, the quickest way to check is a 30-second phone call.
            </p>
            <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
              When you call, just give us your postcode or motorway junction and we'll confirm coverage, give you an accurate ETA, and dispatch the nearest available van. Every fitter carries a full range of tyres and the equipment to supply, fit, and balance your new tyre on the spot, at your home, your workplace, or the roadside.
            </p>
            <p className="text-base leading-relaxed text-[#6a6a6a]">
              We're available 24 hours a day, 365 days a year, with no out-of-hours or weekend surcharges anywhere in our coverage area.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PhoneButton size="lg" eventLabel="coverage_page" />
            <WhatsAppButton size="lg" variant="primary" message="Hi, do you cover my area for mobile tyre fitting?" />
          </div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
