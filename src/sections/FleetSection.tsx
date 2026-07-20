import { Truck, Phone } from 'lucide-react'
import { PHONE_NUMBER } from '../lib/config'

const fleetBenefits = [
  'Volume discounts on bulk tyre orders',
  'Scheduled maintenance programmes',
  'Dedicated account manager',
  'Priority dispatch for fleet vehicles',
  'Detailed reporting and invoicing',
  'Nationwide coverage for all depots',
]

export default function FleetSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#d92a1d]/10 px-3 py-1">
                <Truck className="h-4 w-4 text-[#d92a1d]" />
                <span className="text-xs font-semibold tracking-wider text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>FLEET SERVICES</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
                Fleet Tyre Management <span className="text-[#d92a1d]">For Business</span>
              </h2>
              <p className="mb-6 text-[#6a6a6a] leading-relaxed">
                Managing a fleet? We offer dedicated tyre management services for businesses of all sizes. From delivery vans to executive car fleets, we keep your vehicles on the road.
              </p>
              <ul className="mb-8 space-y-3">
                {fleetBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d92a1d]" />
                    <span className="text-sm text-[#6a6a6a]">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-lg bg-[#d92a1d] px-6 py-3 text-sm font-bold text-white hover:bg-[#b82418] transition-colors">
                <Phone className="h-4 w-4" /> Call for Fleet Quote
              </a>
            </div>
            <div className="relative hidden lg:block">
              <img src="/images/service-fleet.webp" alt="Fleet tyre fitting service" width={400} height={240} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
