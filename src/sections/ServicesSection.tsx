import { Link } from 'react-router-dom'
import { AlertTriangle, Zap, Home, Building2, Truck, MapPin, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: AlertTriangle, title: 'Emergency Mobile Tyre Fitting',
    description: 'Flat or blowout? Our emergency team reaches you within 30-45 minutes, 24/7 and same day, anywhere in the UK.',
    href: '/emergency-mobile-tyre-fitting', image: '/images/service-emergency.jpg', badge: 'MOST POPULAR',
  },
  {
    icon: Zap, title: 'Mobile Tyre Replacement',
    description: 'New tyres supplied and fitted at your location. All brands, all sizes, all vehicle types.',
    href: '/mobile-tyre-replacement', image: '/images/step-fitting.jpg',
  },
  {
    icon: Home, title: 'Home Tyre Fitting',
    description: 'We come to your driveway. No need to visit a garage. Fitting while you relax at home.',
    href: '/home-tyre-fitting', image: '/images/service-home.jpg',
  },
  {
    icon: Building2, title: 'Workplace Tyre Fitting',
    description: 'Tyre replacement at your office car park. Minimal disruption to your working day.',
    href: '/workplace-tyre-fitting', image: '/images/step-fitting.jpg',
  },
  {
    icon: Truck, title: 'Fleet Tyre Services',
    description: 'Dedicated fleet management for businesses. Volume discounts and scheduled maintenance.',
    href: '/fleet-tyre-services', image: '/images/service-fleet.jpg', badge: 'BUSINESS',
  },
  {
    icon: MapPin, title: 'Mobile Tyre Fitting Near You',
    description: 'We cover the whole UK. Find your city and check the response time in your area.',
    href: '/mobile-tyre-fitting-near-me', image: '/images/city-london.jpg',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="services">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>
            Our Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
            Every Tyre Service, <span className="text-[#d92a1d]">Wherever You Are</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#6a6a6a]">
            From emergency roadside assistance to scheduled fleet maintenance, we provide comprehensive mobile tyre services across the UK.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-[#d92a1d]/30 hover:shadow-lg"
            >
              {service.image && (
                <div className="relative h-44 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  {service.badge && (
                    <span className="absolute top-3 right-3 rounded bg-[#d92a1d] px-2 py-0.5 text-[10px] font-bold tracking-wider text-white" style={{ fontFamily: 'JetBrains Mono' }}>
                      {service.badge}
                    </span>
                  )}
                </div>
              )}
              <div className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#d92a1d]/10">
                  <service.icon className="h-5 w-5 text-[#d92a1d]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed text-[#6a6a6a]">{service.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#d92a1d] opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
