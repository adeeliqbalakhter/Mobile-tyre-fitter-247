import { Link } from 'react-router-dom'
import { Home, Phone } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { PHONE_NUMBER } from '../main'

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for could not be found. Browse our mobile tyre fitting services or call 0800 123 4567."
        noindex
      />
      <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-2 text-6xl font-bold text-[#d92a1d]" style={{ fontFamily: 'Space Grotesk' }}>404</p>
          <h1 className="mb-4 text-2xl font-bold text-[#1a1a1a] sm:text-3xl" style={{ fontFamily: 'Space Grotesk' }}>Page Not Found</h1>
          <p className="mb-8 text-[#6a6a6a]">
            Sorry, the page you are looking for does not exist or has moved. Try one of these instead, or call us 24/7.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d92a1d] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#b82418]">
              <Home className="h-4 w-4" /> Back to Home
            </Link>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-50">
              <Phone className="h-4 w-4 text-[#d92a1d]" /> {PHONE_NUMBER}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            {[
              { label: 'Services', href: '/emergency-tyre-fitting' },
              { label: 'Coverage Areas', href: '/coverage-areas' },
              { label: 'Tyre Brands', href: '/tyre-brands' },
              { label: 'FAQs', href: '/faq' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="font-medium text-[#d92a1d] hover:text-[#b82418] transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
