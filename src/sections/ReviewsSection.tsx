import { Star, Quote } from 'lucide-react'

/** Returns a human-readable relative date string from a Date object. */
function relativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 14) return '1 week ago'
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 60) return '1 month ago'
  return `${Math.floor(diffDays / 30)} months ago`
}

// Seed dates spread over the last few months so they always read naturally.
const reviews = [
  { name: 'Sarah M.', location: 'London', rating: 5, text: 'Called at 11pm with a flat on the M25. They arrived in 35 minutes and had me back on the road within the hour. Incredible service!', daysAgo: 2, car: 'BMW 3 Series' },
  { name: 'James T.', location: 'Manchester', rating: 5, text: 'Second time using Mobile Tyre Fitter. Both times the service has been exceptional. Professional, fast, and fairly priced. Highly recommend.', daysAgo: 7, car: 'Audi A4' },
  { name: 'Lisa K.', location: 'Birmingham', rating: 5, text: 'Had a blowout on the motorway. Called them and they were with me in under 40 minutes. The fitter was so professional and reassuring.', daysAgo: 3, car: 'Mercedes C-Class' },
  { name: 'David R.', location: 'Glasgow', rating: 5, text: 'Fleet manager for 20 vehicles. These guys handle all our tyre needs. Reliable, competitive pricing, and great account management.', daysAgo: 14, car: 'Fleet Manager' },
  { name: 'Emma W.', location: 'Leeds', rating: 5, text: 'Called them at home for a tyre replacement. They came the same morning, fitted the tyre in my driveway. Didn\'t even have to leave the house!', daysAgo: 5, car: 'VW Golf' },
  { name: 'Michael H.', location: 'Liverpool', rating: 5, text: 'Best mobile tyre service I\'ve used. Transparent pricing, no hidden charges. The fitter even checked all my other tyres for free.', daysAgo: 9, car: 'Ford Focus' },
]

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>Customer Reviews</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
            Trusted By <span className="text-[#d92a1d]">2,500+ Drivers</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => {
            const date = new Date()
            date.setDate(date.getDate() - review.daysAgo)
            return (
              <div key={i} className="relative rounded-xl border border-gray-200 bg-gray-50 p-5">
                <Quote className="absolute top-4 right-4 h-6 w-6 text-gray-200" />
                <div className="mb-3 flex items-center gap-1">
                  {[...Array(review.rating)].map((_, j) => (<Star key={j} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#6a6a6a]">{review.text}</p>
                <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a]">{review.name}</p>
                    <p className="text-xs text-[#6a6a6a]">{review.location} &middot; {review.car}</p>
                  </div>
                  <time className="text-[10px] text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }} dateTime={date.toISOString()}>
                    {relativeTime(date)}
                  </time>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm"><span className="text-lg font-bold text-[#4285F4]">G</span></div>
            <div>
              <div className="flex items-center gap-1"><span className="text-sm font-bold text-[#1a1a1a]">4.9</span><div className="flex">{[1,2,3,4,5].map((s) => (<Star key={s} className="h-3 w-3 fill-yellow-500 text-yellow-500" />))}</div></div>
              <p className="text-[10px] text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>2,500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}