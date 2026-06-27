import { allBrands } from '../data/brands'

export default function BrandsSection() {
  // Duplicate the list so the marquee loops seamlessly.
  const marquee = [...allBrands, ...allBrands]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>Tyre Brands</p>
          <h2 className="text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-3xl" style={{ fontFamily: 'Space Grotesk' }}>All Major Brands <span className="text-[#d92a1d]">In Stock</span></h2>
        </div>
      </div>

      {/* Logo marquee — fades at both edges */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent sm:w-32" />
        <div className="flex w-max animate-marquee items-center gap-4">
          {marquee.map((brand, i) => (
            <div
              key={`${brand.slug}-${i}`}
              className="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-5 shadow-sm"
            >
              <img
                src={`/images/brands/${brand.slug}.png`}
                alt={`${brand.name} tyres`}
                width={160}
                height={56}
                loading="lazy"
                className="max-h-12 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <p className="mt-10 text-center text-sm text-[#6a6a6a]">Over 70,000 tyres in stock — premium, mid-range, and budget options available for all vehicle types.</p>
      </div>
    </section>
  )
}
