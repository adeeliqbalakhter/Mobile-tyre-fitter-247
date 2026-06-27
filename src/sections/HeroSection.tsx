import { useEffect, useRef } from 'react'
import { Phone, Clock, Shield, Star, MapPin } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../main'
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
      {/* Background image, full visibility, no washout */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)', zIndex: 1 }}
      />
      {/* Very subtle dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 2 }} />
      {/* Bottom gradient for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" style={{ zIndex: 3 }} />

      {/* Content */}
      <div className="relative z-10 w-full pt-20 pb-16 px-4 lg:px-6" style={{ zIndex: 4 }}>
        <div className="mx-auto max-w-[1400px]">
          {/* Emergency badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-live absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-white" style={{ fontFamily: 'JetBrains Mono' }}>
              24/7 EMERGENCY DISPATCH ACTIVE
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="mb-4 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            ROADSIDE TYRE
            <br />
            <span className="text-[#ff4444]">REPLACEMENT</span>
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg">
            24/7 Mobile tyre fitting across the UK. We come to you at home, work, or roadside. Average response time: 30-45 minutes.
          </p>

          {/* Trust pills */}
          <div className="mb-8 flex flex-wrap gap-3">
            {[
              { icon: Clock, text: '30-45 min response' },
              { icon: Shield, text: 'Fully insured' },
              { icon: Star, text: '4.9★ Google rating' },
              { icon: MapPin, text: 'UK-wide coverage' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5">
                <Icon className="h-3.5 w-3.5 text-[#ff4444]" />
                <span className="text-xs font-medium text-white/90" style={{ fontFamily: 'JetBrains Mono' }}>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#d92a1d] px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-[#d92a1d]/30 transition-all hover:bg-[#b82418] active:scale-[0.98]"
              onClick={() => { trackEvent('phone_click', { event_category: 'conversion', event_label: 'hero_primary' }) }}
            >
              <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
              {PHONE_NUMBER}
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Social proof mini */}
          <div className="mt-8 flex items-center gap-3">
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
    </section>
  )
}
