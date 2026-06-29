import { Link } from 'react-router-dom'
import { Phone, Clock, Shield, MapPin } from 'lucide-react'
import { PHONE_NUMBER } from '../lib/config'

const footerLinks = {
  services: [
    { label: 'Emergency Mobile Tyre Fitting', href: '/emergency-mobile-tyre-fitting' },
    { label: 'Mobile Tyre Replacement', href: '/mobile-tyre-replacement' },
    { label: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
    { label: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
    { label: 'Fleet Tyre Services', href: '/fleet-tyre-services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Mobile Tyre Fitting Near Me', href: '/mobile-tyre-fitting-near-me' },
    { label: 'Coverage Areas', href: '/coverage-areas' },
    { label: 'Tyre Brands', href: '/tyre-brands' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  cities: [
    { label: 'London', href: '/mobile-tyre-fitting-london' },
    { label: 'Birmingham', href: '/mobile-tyre-fitting-birmingham' },
    { label: 'Manchester', href: '/mobile-tyre-fitting-manchester' },
    { label: 'Leeds', href: '/mobile-tyre-fitting-leeds' },
    { label: 'Glasgow', href: '/mobile-tyre-fitting-glasgow' },
    { label: 'Liverpool', href: '/mobile-tyre-fitting-liverpool' },
    { label: 'Bristol', href: '/mobile-tyre-fitting-bristol' },
    { label: 'Edinburgh', href: '/mobile-tyre-fitting-edinburgh' },
    { label: 'Cardiff', href: '/mobile-tyre-fitting-cardiff' },
    { label: 'Nottingham', href: '/mobile-tyre-fitting-nottingham' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      {/* Trust bar above footer */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-6 px-4 py-4 lg:gap-10">
          {[
            { icon: Phone, text: '24/7 Emergency Line' },
            { icon: Clock, text: '30-45 Min Response' },
            { icon: Shield, text: 'Fully Insured' },
            { icon: MapPin, text: 'UK-Wide Coverage' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-[#d92a1d]" />
              <span className="text-xs font-medium text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 py-12 lg:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src="/images/logo.png" alt="Mobile Tyre Fitter 247" className="h-10 w-auto" />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-[#6a6a6a]">
              UK's leading mobile tyre fitting service. We come to you at home, work, or roadside, 24 hours a day, 7 days a week.
            </p>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-lg font-bold text-[#d92a1d] hover:text-[#b82418] transition-colors"
            >
              <Phone className="h-5 w-5" />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-[#6a6a6a] hover:text-[#d92a1d] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-[#6a6a6a] hover:text-[#d92a1d] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
              Major Cities
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.cities.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-[#6a6a6a] hover:text-[#d92a1d] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 sm:flex-row">
          <p className="text-xs text-[#6a6a6a]">
            &copy; {new Date().getFullYear()} Mobile Tyre Fitter 24/7. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-[#6a6a6a]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <Link to="/cookies" className="hover:text-[#d92a1d] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
