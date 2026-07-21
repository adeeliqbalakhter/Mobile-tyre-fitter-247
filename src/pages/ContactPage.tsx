import { Link } from 'react-router-dom'
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react'
import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import SEOHead, { SITE_URL } from '../components/SEOHead'
import { PHONE_NUMBER, WHATSAPP_NUMBER, COMPANY_LEGAL_NAME, COMPANY_NUMBER, SUPPORT_EMAIL } from '../lib/config'
import { trackEvent } from '../lib/tracking'
import EmergencyCTA from '../sections/EmergencyCTA'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: COMPANY_LEGAL_NAME,
    url: SITE_URL,
    taxID: COMPANY_NUMBER,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '128 City Road',
      addressLocality: 'London',
      postalCode: 'EC1V 2NX',
      addressCountry: 'GB',
    },
    email: SUPPORT_EMAIL,
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
      <SEOHead title="Contact Us - 24/7 Mobile Tyre Fitting UK" description="Contact Mobile Tyre Fitter 24/7. Call 0800 123 4567 for emergency tyre fitting, available 24/7 across the UK. Phone and WhatsApp support. Get an instant quote now." keywords="contact tyre fitter, mobile tyre fitting phone, tyre emergency contact, 24/7 tyre help UK" schema={schema} />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Contact</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Contact <span className="text-[#d92a1d]">Us</span></h1>
          <p className="mb-8 max-w-2xl text-[#6a6a6a]">Need tyre fitting? We&apos;re here 24/7, 365 days a year. Calling gets you the fastest response, or reach out on WhatsApp and we&apos;ll get straight back to you.</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              onClick={() => trackEvent('phone_click', { event_category: 'conversion', event_label: 'contact_page' })}
              className="group flex flex-col rounded-xl border border-[#d92a1d]/20 bg-[#d92a1d]/5 p-6 transition-all hover:border-[#d92a1d]/40 hover:shadow-md"
            >
              <Phone className="mb-3 h-8 w-8 text-[#d92a1d]" />
              <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Call Us, Fastest Response</h3>
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

            {/* Social Media */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <svg className="h-8 w-8 text-[#d92a1d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
              </div>
              <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Follow Us</h3>
              <p className="mb-4 text-sm text-[#6a6a6a]">See our latest work, updates, and customer photos on social media.</p>
              <div className="mt-auto flex items-center gap-3">
                <a
                  href="https://www.facebook.com/mobiletyrefitter247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#6a6a6a] transition-colors hover:border-[#1877F2] hover:text-[#1877F2] hover:bg-[#1877F2]/5"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mobiletyrefitter247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#6a6a6a] transition-colors hover:border-[#E4405F] hover:text-[#E4405F] hover:bg-[#E4405F]/5"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Hours + why call */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>
                <Clock className="h-5 w-5 text-[#d92a1d]" /> Opening Hours
              </h2>
              <div className="flex items-center justify-between rounded-lg bg-white border border-gray-200 px-4 py-3">
                <span className="text-sm font-medium text-[#1a1a1a]">Monday, Sunday</span>
                <span className="text-sm font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>OPEN 24 HOURS</span>
              </div>
              <p className="mt-3 text-sm text-[#6a6a6a]">Including weekends, bank holidays, and Christmas Day. There are no out-of-hours or weekend surcharges, ever. Average response time is 30-45 minutes across the UK.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Why Calling Is Best</h2>
              <ul className="space-y-3">
                {[
                  'Instant quote, no forms to fill out',
                  'Immediate dispatch, a fitter sent within minutes',
                  'Real-time ETA, know exactly when we\'ll arrive',
                  'Speak to a real person, no bots or queues',
                  'Emergency prioritisation, stranded drivers come first',
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
