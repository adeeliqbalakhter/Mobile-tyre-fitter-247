import { useEffect, useRef } from 'react'
import { Phone, Clock, Shield, Star, MapPin, ChevronDown } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../lib/config'
import { trackEvent } from '../lib/tracking'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const heroHeight = heroRef.current.offsetHeight
      const progress = Math.min(scrollY / heroHeight, 1)
      heroRef.current.style.setProperty('--scroll-progress', String(progress))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent('Hi, I need emergency tyre fitting. Can you help?')}`

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ opacity: 'calc(1 - var(--scroll-progress, 0) * 1.5)' }}
    >
      {/* Background image with a slow ambient zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)', zIndex: 1 }}
      />
      {/* Very subtle dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }} />

      {/* Floating glow accents (decorative) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 2 }} aria-hidden="true">
        <div className="animate-float absolute -top-10 -right-10 h-72 w-72 rounded-full bg-[#d92a1d]/25 blur-3xl" />
        <div className="animate-float-slow absolute bottom-10 left-[-4rem] h-80 w-80 rounded-full bg-[#ff4444]/15 blur-3xl" />
        <div className="animate-float absolute top-1/3 left-1/2 h-56 w-56 rounded-full bg-white/10 blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" style={{ zIndex: 3 }} />

      {/* Content */}
      <div className="relative z-10 w-full pt-20 pb-16 px-4 lg:px-6" style={{ zIndex: 4 }}>
        <div className="mx-auto max-w-[1400px]">
          {/* Emergency badge */}
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2" style={{ opacity: 0, animationDelay: '0.05s' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ring absolute inline-flex h-full w-full rounded-full bg-[#22c55e]" />
              <span className="animate-pulse-live absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-white" style={{ fontFamily: 'JetBrains Mono' }}>
              24/7 EMERGENCY DISPATCH ACTIVE
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="animate-fade-up mb-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg"
            style={{ fontFamily: 'Space Grotesk', opacity: 0, animationDelay: '0.15s' }}
          >
            ROADSIDE TYRE REPLACEMENT
            <br />
            IN <span className="text-[#ff4444]">30 MINUTES</span>
          </h1>

          <p className="animate-fade-up mb-8 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg" style={{ opacity: 0, animationDelay: '0.25s' }}>
            24/7 Mobile tyre fitting across the UK. We come to you at home, work, or roadside. Average response time: 30-45 minutes.
          </p>

          {/* Trust pills */}
          <div className="animate-fade-up mb-8 flex flex-wrap gap-3" style={{ opacity: 0, animationDelay: '0.35s' }}>
            {[
              { icon: Clock, text: '30-45 min response' },
              { icon: Shield, text: 'Fully insured' },
              { icon: Star, text: '4.9★ Google rating' },
              { icon: MapPin, text: 'UK-wide coverage' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 transition-transform hover:-translate-y-0.5 hover:bg-white/25">
                <Icon className="h-3.5 w-3.5 text-[#ff4444]" />
                <span className="text-xs font-medium text-white/90" style={{ fontFamily: 'JetBrains Mono' }}>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="animate-fade-up flex flex-col gap-3 sm:flex-row" style={{ opacity: 0, animationDelay: '0.45s' }}>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#d92a1d] px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-[#d92a1d]/30 transition-all hover:-translate-y-0.5 hover:bg-[#b82418] hover:shadow-[#d92a1d]/50 active:scale-[0.98]"
              onClick={() => { trackEvent('phone_click', { event_category: 'conversion', event_label: 'hero_primary' }) }}
            >
              {/* Shimmer sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full" aria-hidden="true">
                <span className="animate-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </span>
              <Phone className="relative h-5 w-5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="relative">{PHONE_NUMBER}</span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/20 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Social proof mini */}
          <div className="animate-fade-up mt-8 flex items-center gap-3" style={{ opacity: 0, animationDelay: '0.55s' }}>
            <div className="flex -space-x-2" aria-hidden="true">
              {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'].map((color, i) => (
                <div key={i} className={`h-8 w-8 rounded-full ${color} border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white`}>
                  {['S', 'M', 'J', 'A'][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-xs font-bold text-white">4.9</span>
              </div>
              <p className="text-xs text-white/70">2,500+ happy customers this year</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll-down hint */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 sm:flex" style={{ zIndex: 4 }} aria-hidden="true">
        <span className="text-[10px] font-medium uppercase tracking-widest text-white/60" style={{ fontFamily: 'JetBrains Mono' }}>Scroll</span>
        <ChevronDown className="animate-scroll-hint h-5 w-5 text-white/70" />
      </div>
    </section>
  )
}
