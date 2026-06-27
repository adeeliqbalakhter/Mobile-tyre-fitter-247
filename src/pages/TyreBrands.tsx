import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import PhoneButton from '../components/PhoneButton'
import EmergencyCTA from '../sections/EmergencyCTA'

const premium = ['Michelin', 'Pirelli', 'Continental', 'Bridgestone', 'Goodyear', 'Dunlop']
const midRange = ['Hankook', 'Yokohama', 'Kumho', 'Falken', 'Toyo', 'Nexen', 'Avon', 'Uniroyal']
const budget = ['RoadX', 'Landsail', 'Imperial', 'Windforce', 'Westlake', 'Kpatos']

export default function TyreBrands() {
  return (
    <>
      <SEOHead title="Tyre Brands - All Major Brands Stocked UK" description="All major tyre brands available for mobile fitting across the UK. Michelin, Pirelli, Continental, Bridgestone, Goodyear, and more. Call 0800 123 4567." />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Tyre Brands</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Tyre Brands <span className="text-[#d92a1d]">We Stock</span></h1>
          <p className="mb-8 max-w-2xl text-[#6a6a6a]">Over 70,000 tyres in stock from the world's leading manufacturers. Premium, mid-range, and budget options to suit every vehicle and budget.</p>

          <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Premium Brands</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{premium.map((brand) => (<div key={brand} className="rounded-lg border border-[#d92a1d]/20 bg-[#d92a1d]/5 px-4 py-3 text-center"><span className="text-sm font-semibold text-[#1a1a1a]">{brand}</span></div>))}</div>
          </div>
          <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Mid-Range Brands</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{midRange.map((brand) => (<div key={brand} className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center"><span className="text-sm text-[#6a6a6a]">{brand}</span></div>))}</div>
          </div>
          <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Budget Brands</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{budget.map((brand) => (<div key={brand} className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-center"><span className="text-sm text-[#6a6a6a]">{brand}</span></div>))}</div>
          </div>
          <div className="flex justify-center"><PhoneButton size="lg" eventLabel="brands_page" /></div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
