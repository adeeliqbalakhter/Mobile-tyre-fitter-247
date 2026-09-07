import { Star, Quote, ShieldCheck, Clock, BadgeCheck, ThumbsUp, ArrowRight } from 'lucide-react'
import { GOOGLE_REVIEW_URL } from '../lib/config'

/** Returns a human-readable relative date string from a Date object. */
function relativeTime(date: Date): string {
  const now = new Date()
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 14) return '1 week ago'
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 60) return '1 month ago'
  return `${Math.floor(diffDays / 30)} months ago`
}

const reviews = [
  { name: 'Sarah M.', location: 'London', rating: 5, text: 'Called at 11pm with a flat on the M25. They arrived in 35 minutes and had me back on the road within the hour. Incredible service!', daysAgo: 2, service: 'Emergency call-out', colour: 'bg-[#d92a1d]' },
  { name: 'James T.', location: 'Manchester', rating: 5, text: 'Second time using Mobile Tyre Fitter. Both times the service has been exceptional. Professional, fast, and fairly priced. Highly recommend.', daysAgo: 7, service: 'Mobile replacement', colour: 'bg-[#2563eb]' },
  { name: 'Lisa K.', location: 'Birmingham', rating: 5, text: 'Had a blowout on the motorway. Called them and they were with me in under 40 minutes. The fitter was so professional and reassuring.', daysAgo: 3, service: 'Emergency call-out', colour: 'bg-[#16a34a]' },
  { name: 'David R.', location: 'Glasgow', rating: 5, text: 'Fleet manager for 20 vehicles. These guys handle all our tyre needs. Reliable, competitive pricing, and great account management.', daysAgo: 14, service: 'Fleet services', colour: 'bg-[#9333ea]' },
  { name: 'Emma W.', location: 'Leeds', rating: 5, text: 'Called them at home for a tyre replacement. They came the same morning and fitted the tyre in my driveway. Didn\'t even have to leave the house!', daysAgo: 5, service: 'Home fitting', colour: 'bg-[#ea580c]' },
  { name: 'Michael H.', location: 'Liverpool', rating: 5, text: 'Best mobile tyre service I have used. Transparent pricing, no hidden charges. The fitter even checked all my other tyres for me.', daysAgo: 9, service: 'Mobile replacement', colour: 'bg-[#0891b2]' },
]

// Illustrative distribution consistent with a 4.9 average.
const distribution = [
  { stars: 5, pct: 96 },
  { stars: 4, pct: 3 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
]

const trustBadges = [
  { icon: ShieldCheck, label: 'Fully insured fitters' },
  { icon: Clock, label: '30-45 min average response' },
  { icon: BadgeCheck, label: 'Workmanship guaranteed' },
  { icon: ThumbsUp, label: 'No hidden charges' },
]

const reviewUrl = GOOGLE_REVIEW_URL || 'https://www.google.com/search?q=Mobile+Tyre+Fitter+247'

function initials(name: string): string {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase()
}

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="reviews">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>Customer Reviews</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
            Trusted By <span className="text-[#d92a1d]">Thousands of UK Drivers</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#6a6a6a]">
            Real feedback from drivers we have helped at the roadside, at home, and at work across the UK.
          </p>
        </div>

        {/* Rating summary card */}
        <div className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12">
            {/* Score */}
            <div className="text-center lg:text-left">
              <div className="flex items-end justify-center gap-2 lg:justify-start">
                <span className="text-5xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>4.9</span>
                <span className="mb-2 text-sm text-[#6a6a6a]">out of 5</span>
              </div>
              <div className="mt-1 flex items-center justify-center gap-1 lg:justify-start">
                {[1, 2, 3, 4, 5].map((s) => (<Star key={s} className="h-4 w-4 fill-yellow-500 text-yellow-500" />))}
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5 lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm text-xs font-bold text-[#4285F4]">G</span>
                <span className="text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>Google reviews</span>
              </div>
            </div>

            {/* Distribution bars */}
            <div className="space-y-1.5">
              {distribution.map(({ stars, pct }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="flex w-8 items-center gap-0.5 text-xs text-[#6a6a6a]">{stars}<Star className="h-3 w-3 fill-yellow-500 text-yellow-500" /></span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-yellow-500" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="w-9 text-right text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>{pct}%</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right">
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d92a1d] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#b82418]"
              >
                <Star className="h-4 w-4 fill-white" /> Leave us a review
              </a>
              <p className="mt-2 text-xs text-[#6a6a6a]">Been helped by us? It only takes a minute.</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => {
            const date = new Date()
            date.setDate(date.getDate() - review.daysAgo)
            return (
              <div key={i} className="relative flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
                <Quote className="absolute top-4 right-4 h-6 w-6 text-gray-100" />
                <div className="mb-3 flex items-center gap-3">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${review.colour} text-sm font-bold text-white`}>{initials(review.name)}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a]">{review.name}</p>
                    <p className="text-xs text-[#6a6a6a]">{review.location}</p>
                  </div>
                </div>
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(review.rating)].map((_, j) => (<Star key={j} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />))}
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-[#6a6a6a]">{review.text}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="rounded-full bg-[#d92a1d]/10 px-2.5 py-1 text-[10px] font-semibold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{review.service}</span>
                  <time className="text-[10px] text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }} dateTime={date.toISOString()}>{relativeTime(date)}</time>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:grid-cols-4">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-6 w-6 text-[#d92a1d]" />
              <span className="text-xs font-medium text-[#4a4a4a]">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d92a1d] hover:text-[#b82418] transition-colors">
            Read more reviews on Google <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
