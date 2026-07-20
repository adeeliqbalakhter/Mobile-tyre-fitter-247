import { Phone, Clock, Shield, Star, MapPin, Wrench } from 'lucide-react'

const trustItems = [
  { icon: Clock, text: '30-45 MIN RESPONSE TIME' },
  { icon: Phone, text: 'OPEN 24/7, 365 DAYS' },
  { icon: Shield, text: 'FULLY INSURED FITTERS' },
  { icon: Star, text: '4.9\u2605 GOOGLE RATING' },
  { icon: MapPin, text: 'UK-WIDE COVERAGE' },
  { icon: Wrench, text: 'ALL MAJOR TYRE BRANDS' },
]

export default function TrustBar() {
  const doubled = [...trustItems, ...trustItems]

  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-gray-50 py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-6">
            <item.icon className="h-4 w-4 text-[#d92a1d]" />
            <span className="text-xs font-semibold tracking-wider text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
              {item.text}
            </span>
            <span className="mx-4 text-gray-300">|</span>
          </div>
        ))}
      </div>
    </section>
  )
}
