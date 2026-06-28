import { Phone, Clock, ArrowRight, Check } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import { VisaCard, MastercardCard, AmexCard, ApplePayCard, GooglePayCard } from '../components/icons/PaymentIcons'
import { Link } from 'react-router-dom'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../main'
import { trackEvent } from '../lib/tracking'

export default function EmergencyCTA() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent('Hi, I need emergency tyre fitting. Can you help?')}`

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d92a1d]/10 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d92a1d]/30 bg-[#d92a1d]/10 px-4 py-2">
            <Clock className="h-4 w-4 text-[#d92a1d]" />
            <span className="text-xs font-bold tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>24/7 EMERGENCY LINE OPEN NOW</span>
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{ fontFamily: 'Space Grotesk' }}>
            Call Now For <span className="text-[#d92a1d]">Immediate Assistance</span>
          </h2>
          <p className="mb-8 text-lg text-gray-400">
            Our mobile fitters are standing by. Average response time: 30-45 minutes across the UK.
          </p>

          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="group mb-4 inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-[#d92a1d] px-8 py-5 text-xl font-bold text-white shadow-2xl shadow-[#d92a1d]/40 transition-all hover:bg-[#b82418] active:scale-[0.98] sm:px-10 sm:text-2xl"
            onClick={() => { trackEvent('phone_click', { event_category: 'conversion', event_label: 'emergency_cta' }) }}>
            <Phone className="h-6 w-6 transition-transform group-hover:scale-110" />
            {PHONE_NUMBER}
          </a>

          <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-all hover:border-[#25D366] hover:text-[#25D366]">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
            </a>
            <Link to="/coverage-areas" className="inline-flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-all hover:border-white hover:text-white">
              Check Coverage <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Trust points */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {['Upfront pricing', 'Workmanship guaranteed', 'Free old tyre disposal'].map((text) => (
              <span key={text} className="flex items-center gap-1.5 text-sm text-gray-400">
                <Check className="h-3.5 w-3.5 text-[#d92a1d]" /> {text}
              </span>
            ))}
          </div>

          {/* Accepted payment methods */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs uppercase tracking-widest text-gray-500" style={{ fontFamily: 'JetBrains Mono' }}>We accept</span>
            <div className="flex items-center gap-2">
              <VisaCard className="h-7 w-auto shadow-sm ring-1 ring-white/10" />
              <MastercardCard className="h-7 w-auto shadow-sm ring-1 ring-white/10" />
              <AmexCard className="h-7 w-auto shadow-sm ring-1 ring-white/10" />
              <ApplePayCard className="h-7 w-auto shadow-sm ring-1 ring-white/10" />
              <GooglePayCard className="h-7 w-auto shadow-sm ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
