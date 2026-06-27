import { useParams, Link } from 'react-router-dom'
import { MapPin, Clock } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import PhoneButton from '../components/PhoneButton'
import EmergencyCTA from '../sections/EmergencyCTA'

const cityData = {
  london: { name: 'London', region: 'Greater London', time: '25-35 min', areas: ['Central London', 'North London', 'South London', 'East London', 'West London', 'Croydon', 'Bromley', 'Greenwich', 'Enfield', 'Wembley'], image: '/images/city-london.jpg' },
  manchester: { name: 'Manchester', region: 'North West England', time: '30-40 min', areas: ['City Centre', 'Salford', 'Stockport', 'Bolton', 'Oldham', 'Rochdale', 'Bury', 'Trafford'], image: '/images/city-manchester.jpg' },
  birmingham: { name: 'Birmingham', region: 'West Midlands', time: '30-40 min', areas: ['City Centre', 'Solihull', 'Coventry', 'Wolverhampton', 'Dudley', 'Walsall', 'Sutton Coldfield'], image: '/images/city-birmingham.jpg' },
  glasgow: { name: 'Glasgow', region: 'Scotland', time: '35-50 min', areas: ['City Centre', 'East End', 'West End', 'South Side', 'Paisley', 'Hamilton', 'Motherwell'], image: '/images/city-london.jpg' },
  leeds: { name: 'Leeds', region: 'Yorkshire', time: '30-45 min', areas: ['City Centre', 'Bradford', 'Wakefield', 'Huddersfield', 'Halifax', 'York'], image: '/images/city-manchester.jpg' },
  liverpool: { name: 'Liverpool', region: 'North West England', time: '30-40 min', areas: ['City Centre', 'Birkenhead', 'Wirral', 'St Helens', 'Warrington', 'Chester'], image: '/images/city-birmingham.jpg' },
  bristol: { name: 'Bristol', region: 'South West England', time: '35-50 min', areas: ['City Centre', 'Bath', 'Weston-super-Mare', 'Gloucester', 'Cheltenham', 'Swindon'], image: '/images/city-london.jpg' },
  leicester: { name: 'Leicester', region: 'East Midlands', time: '35-50 min', areas: ['City Centre', 'Nottingham', 'Derby', 'Northampton', 'Loughborough'], image: '/images/city-manchester.jpg' },
  newcastle: { name: 'Newcastle', region: 'North East England', time: '35-50 min', areas: ['City Centre', 'Sunderland', 'Middlesbrough', 'Durham', 'Gateshead'], image: '/images/city-birmingham.jpg' },
}

export default function CityPage() {
  const { city } = useParams<{ city: string }>()
  const cityInfo = city ? cityData[city as keyof typeof cityData] : null
  if (!cityInfo) return <div className="pt-32 pb-20 text-center bg-white"><h1 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Area Not Found</h1><Link to="/coverage-areas" className="mt-4 inline-block text-[#d92a1d]">View all coverage areas</Link></div>

  return (
    <>
      <SEOHead title={`Mobile Tyre Fitting ${cityInfo.name} - 24/7 Emergency Service`} description={`Mobile tyre fitting in ${cityInfo.name} and surrounding areas. 24/7 emergency service with ${cityInfo.time} average response. Call 0800 123 4567 now.`} />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="absolute inset-0">
          <img src={cityInfo.image} alt={cityInfo.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><Link to="/coverage-areas" className="hover:text-[#d92a1d]">Coverage</Link><span>/</span><span className="text-[#1a1a1a]">{cityInfo.name}</span>
          </nav>
          <div className="flex items-center gap-2 mb-4"><MapPin className="h-5 w-5 text-[#d92a1d]" /><span className="text-sm text-[#6a6a6a]">{cityInfo.region}</span></div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl" style={{ fontFamily: 'Space Grotesk' }}>Mobile Tyre Fitting <span className="text-[#d92a1d]">{cityInfo.name}</span></h1>
          <p className="mb-6 max-w-2xl text-[#6a6a6a]">Emergency mobile tyre fitting in {cityInfo.name} and surrounding areas. We come to you at home, work, or roadside -- 24 hours a day, 7 days a week.</p>
          <div className="mb-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-[#d92a1d]/20 bg-[#d92a1d]/5 px-4 py-2"><Clock className="h-3.5 w-3.5 text-[#d92a1d]" /><span className="text-xs font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{cityInfo.time} avg response</span></div>
            <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm"><span className="text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>24/7 EMERGENCY SERVICE</span></div>
          </div>
          <PhoneButton size="lg" eventLabel={`city_${cityInfo.name.toLowerCase()}`} />
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Areas We Cover Near {cityInfo.name}</h2>
            <div className="flex flex-wrap gap-2">{cityInfo.areas.map((area) => (<span key={area} className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-[#6a6a6a]">{area}</span>))}</div>
          </div>
          <div className="mt-8 rounded-xl border border-[#d92a1d]/20 bg-[#d92a1d]/5 p-6 text-center">
            <h3 className="mb-2 text-lg font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Need Tyre Fitting in {cityInfo.name}?</h3>
            <p className="mb-4 text-sm text-[#6a6a6a]">Call now for instant quote and dispatch. Average response: {cityInfo.time}.</p>
            <PhoneButton size="lg" eventLabel={`city_cta_${cityInfo.name.toLowerCase()}`} />
          </div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
