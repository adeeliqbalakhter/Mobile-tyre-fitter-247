import { Link } from 'react-router-dom'
import { Gauge, Snowflake, Mountain, Truck, Zap, CircleDot } from 'lucide-react'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import EmergencyCTA from '../sections/EmergencyCTA'
import { brandTiers as tiers } from '../data/brands'

const brandsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Tyre Brands We Stock - Mobile Tyre Fitter 24/7',
  description: 'All major tyre brands stocked for mobile fitting: Michelin, Pirelli, Continental, Bridgestone, Goodyear, Dunlop, Hankook, Yokohama and more.',
  url: `${SITE_URL}/tyre-brands`,
  isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
}

const specialist = [
  { icon: CircleDot, title: 'Run-Flat Tyres', desc: 'Bridgestone RFT, Pirelli, Dunlop DSST, Goodyear EMT, Michelin ZP and more.' },
  { icon: Zap, title: 'Performance Tyres', desc: 'High-speed and low-profile tyres for sports and prestige vehicles.' },
  { icon: Mountain, title: '4x4 & SUV Tyres', desc: 'All-terrain and road tyres for larger vehicles and crossovers.' },
  { icon: Truck, title: 'Van & Commercial', desc: 'Reinforced and load-rated tyres for vans and light commercials.' },
  { icon: Snowflake, title: 'Winter & All-Season', desc: 'Cold-weather and year-round tyres for safer winter driving.' },
  { icon: Gauge, title: 'Standard Car Tyres', desc: 'Every common size for hatchbacks, saloons, and estates in stock.' },
]

export default function TyreBrands() {
  return (
    <>
      <SEOHead title="Tyre Brands We Stock - Michelin, Pirelli, Continental & More" description="All major tyre brands available for mobile fitting across the UK. Michelin, Pirelli, Continental, Bridgestone, Goodyear, Dunlop, Hankook, Yokohama and 20+ more. Premium, mid-range & budget. Call 0800 123 4567." keywords="tyre brands UK, Michelin mobile fitting, Pirelli, Continental, Bridgestone, Goodyear, Dunlop, tyre brand comparison" schema={brandsSchema} />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Tyre Brands</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Tyre Brands <span className="text-[#d92a1d]">We Stock</span></h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-[#1a1a1a]">
            Over 70,000 tyres in stock from the world's leading manufacturers, carried in our mobile vans so we can fit the right tyre at your location on the first visit.
          </p>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-[#6a6a6a]">
            Whether you want the ultimate in grip and longevity or a safe, legal tyre at the lowest possible price, we have an option to suit every vehicle and budget. Not sure which is right for you? Call us with your registration and we'll recommend the best tyre for your car and driving.
          </p>

          {/* Tiers */}
          <div className="space-y-6">
            {tiers.map((tier) => (
              <div key={tier.name} className={`rounded-xl border p-6 ${tier.highlight ? 'border-[#d92a1d]/30 bg-[#d92a1d]/5' : 'border-gray-200 bg-gray-50'}`}>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <h2 className="text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{tier.name}</h2>
                  {tier.highlight && (
                    <span className="rounded bg-[#d92a1d] px-2 py-0.5 text-[10px] font-bold tracking-wider text-white" style={{ fontFamily: 'JetBrains Mono' }}>BEST PERFORMANCE</span>
                  )}
                </div>
                <p className="mb-5 max-w-2xl text-sm text-[#6a6a6a]">{tier.blurb}</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {tier.brands.map((brand) => (
                    <div
                      key={brand.slug}
                      className="flex h-20 items-center justify-center rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-sm"
                    >
                      <img
                        src={`/images/brands/${brand.slug}.png`}
                        alt={`${brand.name} tyres`}
                        width={220}
                        height={78}
                        loading="lazy"
                        className="max-h-12 w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specialist tyres */}
          <h2 className="mt-14 mb-6 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Specialist <span className="text-[#d92a1d]">Tyres</span></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialist.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#d92a1d]/10">
                  <Icon className="h-5 w-5 text-[#d92a1d]" />
                </div>
                <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{title}</h3>
                <p className="text-sm text-[#6a6a6a]">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
