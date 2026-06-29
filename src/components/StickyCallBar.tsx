import { Phone } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../lib/config'
import { trackEvent } from '../lib/tracking'

export default function StickyCallBar() {
  return (
    <div className="animate-slide-up-bar fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="flex items-center h-16 px-4 gap-3 max-w-[1400px] mx-auto">
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          className="animate-cta-glow group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#d92a1d] py-3 text-sm font-bold text-white active:scale-[0.98] transition-transform"
          onClick={() => { trackEvent('phone_click', { event_category: 'conversion', event_label: 'sticky_bar' }) }}
        >
          {/* Shimmer sweep */}
          <span className="pointer-events-none absolute inset-0" aria-hidden="true">
            <span className="animate-shimmer absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </span>
          <Phone className="animate-phone-ring relative h-4 w-4" />
          <span className="relative">{PHONE_NUMBER}</span>
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="animate-wa-glow relative flex items-center justify-center gap-2 rounded-lg border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-3 text-sm font-medium text-[#128C7E] active:scale-[0.98] transition-transform"
        >
          <WhatsAppIcon className="animate-heartbeat relative h-4 w-4 text-[#25D366]" />
          <span className="relative hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
