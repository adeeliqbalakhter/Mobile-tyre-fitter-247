import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../main'
import EmergencyCTA from '../sections/EmergencyCTA'

export default function ContactPage() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent('Hi, I need help with my tyres.')}`
  return (
    <>
      <SEOHead title="Contact Us - 24/7 Mobile Tyre Fitting UK" description="Contact Mobile Tyre Fitter 24/7. Call 0800 123 4567 for emergency tyre fitting. Available 24/7 across the UK. WhatsApp and phone support." />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Contact</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Contact <span className="text-[#d92a1d]">Us</span></h1>
          <p className="mb-8 max-w-2xl text-[#6a6a6a]">Need tyre fitting? We&apos;re here 24/7. Call us now for the fastest response, or reach out via WhatsApp.</p>

          <div className="grid gap-6 lg:grid-cols-3">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="group rounded-xl border border-[#d92a1d]/20 bg-[#d92a1d]/5 p-6 transition-all hover:border-[#d92a1d]/40">
              <Phone className="mb-3 h-8 w-8 text-[#d92a1d]" />
              <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{PHONE_NUMBER}</h3>
              <p className="mb-2 text-sm text-[#6a6a6a]">24/7 emergency line</p>
              <p className="text-xl font-bold text-[#d92a1d]" style={{ fontFamily: 'Space Grotesk' }}>{PHONE_NUMBER}</p>
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-[#25D366]/30">
              <MessageCircle className="mb-3 h-8 w-8 text-[#25D366]" />
              <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>WhatsApp</h3>
              <p className="mb-2 text-sm text-[#6a6a6a]">Message us anytime</p>
              <p className="text-sm font-medium text-[#25D366]">Click to open WhatsApp</p>
            </a>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <MapPin className="mb-3 h-8 w-8 text-[#d92a1d]" />
              <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Coverage</h3>
              <p className="mb-2 text-sm text-[#6a6a6a]">Nationwide across the UK</p>
              <Link to="/coverage-areas" className="text-sm font-medium text-[#d92a1d] hover:text-[#b82418] transition-colors">View coverage areas</Link>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Why Call Is Best</h3>
            <ul className="space-y-3">
              {['Instant quote -- no forms to fill out', 'Immediate dispatch -- fitter sent within minutes', 'Real-time ETA -- know exactly when we\'ll arrive', 'Speak to a real person -- no bots or queues', 'Emergency prioritisation -- stranded drivers get priority'].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#6a6a6a]"><Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d92a1d]" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
