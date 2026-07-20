import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'

const cities = [
  { name: 'London', time: '25 min', image: '/images/city-london.webp', slug: 'london' },
  { name: 'Manchester', time: '30 min', image: '/images/city-manchester.webp', slug: 'manchester' },
  { name: 'Birmingham', time: '30 min', image: '/images/city-birmingham.webp', slug: 'birmingham' },
  { name: 'Glasgow', time: '35 min', image: '/images/city-london.webp', slug: 'glasgow' },
  { name: 'Leeds', time: '30 min', image: '/images/city-manchester.webp', slug: 'leeds' },
  { name: 'Liverpool', time: '30 min', image: '/images/city-birmingham.webp', slug: 'liverpool' },
  { name: 'Bristol', time: '35 min', image: '/images/city-london.webp', slug: 'bristol' },
  { name: 'Sheffield', time: '35 min', image: '/images/city-manchester.webp', slug: 'sheffield' },
]

export default function CoverageGrid() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>Nationwide Coverage</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
              We Cover The <span className="text-[#d92a1d]">Entire UK</span>
            </h2>
            <p className="mt-3 max-w-lg text-[#6a6a6a]">From London to Glasgow, our mobile fitters are never far away. Average response times for major cities.</p>
          </div>
          <Link to="/coverage-areas" className="flex items-center gap-2 text-sm font-semibold text-[#d92a1d] hover:text-[#b82418] transition-colors">
            View all coverage areas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cities.map((city) => (
            <Link key={city.name} to={`/mobile-tyre-fitting-${city.slug}`} className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              onMouseEnter={() => setHoveredCity(city.name)} onMouseLeave={() => setHoveredCity(null)}>
              <img src={city.image} alt={`${city.name} mobile tyre fitting coverage`} width={400} height={300} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
              <div className="absolute inset-0 bg-[#d92a1d]/0 transition-colors duration-300 group-hover:bg-[#d92a1d]/15" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>{city.name.toUpperCase()}</h3>
                <div className={`flex items-center gap-1.5 mt-1 transition-all duration-300 ${hoveredCity === city.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <Clock className="h-3 w-3 text-[#d92a1d]" />
                  <span className="text-xs font-semibold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{city.time} avg response</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
