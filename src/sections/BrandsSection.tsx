const brands = ['Michelin', 'Pirelli', 'Continental', 'Dunlop', 'Goodyear', 'Bridgestone', 'Hankook', 'Yokohama', 'Kumho', 'Avon', 'Falken', 'Uniroyal', 'Toyo', 'Nexen', 'Budget Options']

export default function BrandsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>Tyre Brands</p>
          <h2 className="text-2xl font-bold tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>All Major Brands <span className="text-[#d92a1d]">In Stock</span></h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {brands.map((brand) => (
            <div key={brand} className="rounded-lg border border-gray-200 bg-white px-5 py-3 transition-all hover:border-[#d92a1d]/30 hover:shadow-sm">
              <span className="text-sm font-semibold text-[#6a6a6a]" style={{ fontFamily: 'Space Grotesk' }}>{brand}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-[#6a6a6a]">Over 70,000 tyres in stock. Premium, mid-range, and budget options available for all vehicle types.</p>
      </div>
    </section>
  )
}
