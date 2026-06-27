import { Clock, Shield, Star, MapPin, CreditCard, Award, Truck, Headphones } from 'lucide-react'

const reasons = [
  { icon: Clock, title: '30-45 Min Average Response', description: 'When you\'re stranded, every minute counts. Our nationwide network ensures rapid response times.' },
  { icon: Shield, title: 'Fully Insured & Certified', description: 'All our technicians are fully insured, trained to industry standards, and background-checked.' },
  { icon: Star, title: '4.9\u2605 Google Rating', description: 'Over 2,500 five-star reviews from happy customers across the UK. Quality you can trust.' },
  { icon: MapPin, title: 'UK-Wide Coverage', description: 'From major cities to remote motorways, our mobile units cover the entire United Kingdom.' },
  { icon: CreditCard, title: 'Transparent Pricing', description: 'A clear, all-inclusive quote upfront before any work begins. Pay securely by card on completion.' },
  { icon: Award, title: 'All Major Tyre Brands', description: 'From premium Michelin and Pirelli to quality budget options. We stock over 70,000 tyres.' },
  { icon: Truck, title: 'Fully Equipped Vans', description: 'Latest tyre changing and balancing equipment. Capable of handling wheels up to 24 inches.' },
  { icon: Headphones, title: '24/7 Customer Support', description: 'Our UK-based call centre is always open. Speak to a real person, not a machine.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>Why Choose Us</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
            The UK&apos;s Most Trusted <span className="text-[#d92a1d]">Mobile Tyre Service</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="group rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-[#d92a1d]/30 hover:bg-white hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#d92a1d]/10 transition-colors group-hover:bg-[#d92a1d]/20">
                <reason.icon className="h-6 w-6 text-[#d92a1d]" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{reason.title}</h3>
              <p className="text-sm leading-relaxed text-[#6a6a6a]">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-200 pt-12 lg:grid-cols-4">
          {[
            { value: '70,000+', label: 'Tyres Fitted' },
            { value: '4.9\u2605', label: 'Google Rating' },
            { value: '30-45', label: 'Min Avg Response' },
            { value: '2,500+', label: 'Happy Customers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#d92a1d]" style={{ fontFamily: 'Space Grotesk' }}>{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
