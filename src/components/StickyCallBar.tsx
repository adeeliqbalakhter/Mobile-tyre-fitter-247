import { Phone, MessageCircle } from 'lucide-react'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../main'
import { trackEvent } from '../lib/tracking'

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="flex items-center h-16 px-4 gap-3 max-w-[1400px] mx-auto">
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#d92a1d] py-3 text-sm font-bold text-white shadow-lg shadow-[#d92a1d]/20 active:scale-[0.98] transition-transform"
          onClick={() => { trackEvent('phone_click', { event_category: 'conversion', event_label: 'sticky_bar' }) }}
        >
          <Phone className="h-4 w-4" />
          {PHONE_NUMBER}
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-[#6a6a6a] active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
