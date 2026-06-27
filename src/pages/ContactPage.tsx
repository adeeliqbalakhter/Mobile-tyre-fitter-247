import { Link } from 'react-router-dom'
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../main'
import { trackEvent } from '../lib/tracking'
import EmergencyCTA from '../sections/EmergencyCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+448001234567',
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
      hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
    },
  },
}

export default function ContactPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent('Hi, I need help with my tyres.')}`
  return (
    <>
      <SEOHead title="Contact Us - 24/7 Mobile Tyre Fitting UK" description="Contact Mobile Tyre Fitter 24/7. Call 0800 123 4567 for emergency tyre fitting, available 24/7 across the UK. Phone and WhatsApp support, day or night." schema={schema} />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Contact</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Contact <span className="text-[#d92a1d]">Us</span></h1>
          <p className="mb-8 max-w-2xl text-[#6a6a6a]">Need tyre fitting? We&apos;re here 24/7, 365 days a year. Calling gets you the fastest response — or reach out on WhatsApp and we&apos;ll get straight back to you.</p>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Phone */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              onClick={() => trackEvent('phone_click', { event_category: 'conversion', event_label: 'contact_page' })}
              className="group flex flex-col rounded-xl border border-[#d92a1d]/20 bg-[#d92a1d]/5 p-6 transition-all hover:border-[#d92a1d]/40 hover:shadow-md"
            >
              <Phone className="mb-3 h-8 w-8 text-[#d92a1d]" />
              <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Call Us — Fastest Response</h3>
              <p className="mb-3 text-sm text-[#6a6a6a]">24/7 emergency line, answered by a real person.</p>
              <p className="mt-auto text-2xl font-bold text-[#d92a1d]" style={{ fontFamily: 'Space Grotesk' }}>{PHONE_NUMBER}</p>
            </a>

            {/* WhatsApp */}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-[#25D366]/40 hover:shadow-md">
              <WhatsAppIcon className="mb-3 h-8 w-8 text-[#25D366]" />
              <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>WhatsApp</h3>
              <p className="mb-3 text-sm text-[#6a6a6a]">Message us anytime with your location and tyre size.</p>
              <p className="mt-auto text-sm font-semibold text-[#25D366]">Click to open WhatsApp →</p>
            </a>

            {/* Coverage */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6">
              <MapPin className="mb-3 h-8 w-8 text-[#d92a1d]" />
              <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Coverage</h3>
              <p className="mb-3 text-sm text-[#6a6a6a]">Nationwide across England, Scotland &amp; Wales.</p>
              <Link to="/coverage-areas" className="mt-auto text-sm font-semibold text-[#d92a1d] hover:text-[#b82418] transition-colors">View coverage areas →</Link>
            </div>
          </div>

          {/* Hours + why call */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
                <Clock className="h-5 w-5 text-[#d92a1d]" /> Opening Hours
              </h2>
              <div className="flex items-center justify-between rounded-lg bg-white border border-gray-200 px-4 py-3">
                <span className="text-sm font-medium text-[#1a1a1a]">Monday – Sunday</span>
                <span className="text-sm font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>OPEN 24 HOURS</span>
              </div>
              <p className="mt-3 text-sm text-[#6a6a6a]">Including weekends, bank holidays, and Christmas Day. There are no out-of-hours or weekend surcharges — ever. Average response time is 30-45 minutes across the UK.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Why Calling Is Best</h2>
              <ul className="space-y-3">
                {[
                  'Instant quote — no forms to fill out',
                  'Immediate dispatch — a fitter sent within minutes',
                  'Real-time ETA — know exactly when we\'ll arrive',
                  'Speak to a real person — no bots or queues',
                  'Emergency prioritisation — stranded drivers come first',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#6a6a6a]">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d92a1d]" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
