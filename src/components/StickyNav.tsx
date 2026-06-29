import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Phone, ChevronDown } from 'lucide-react'
import { PHONE_NUMBER } from '../lib/config'
import { trackEvent } from '../lib/tracking'

const navLinks = [
  { label: 'Services', href: '/#services', hasDropdown: true },
  { label: 'Coverage', href: '/coverage-areas' },
  { label: 'Tyre Brands', href: '/tyre-brands' },
  { label: 'About', href: '/about' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Blog', href: '/blog' },
]

const serviceLinks = [
  { label: 'Emergency Mobile Tyre Fitting', href: '/emergency-mobile-tyre-fitting' },
  { label: 'Mobile Tyre Replacement', href: '/mobile-tyre-replacement' },
  { label: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
  { label: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
  { label: 'Fleet Tyre Services', href: '/fleet-tyre-services' },
]

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      if (location.pathname === '/') {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] border-b transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-gray-200 shadow-sm'
            : 'bg-white border-transparent'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 lg:px-6">
          {/* Left - Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation()
                setMenuOpen(true)
              }}
              className="relative z-[80] flex h-12 w-12 flex-col items-center justify-center gap-[5px] lg:hidden"
              aria-label="Open menu"
              type="button"
            >
              <span className="block h-[2px] w-6 bg-[#1a1a1a] rounded-full" />
              <span className="block h-[2px] w-6 bg-[#1a1a1a] rounded-full" />
              <span className="block h-[2px] w-5 bg-[#1a1a1a] rounded-full" />
            </button>
            <Link to="/" className="flex items-center relative z-[51] flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Mobile Tyre Fitter 247"
                className="h-11 w-auto sm:h-12"
              />
            </Link>
          </div>

          {/* Center - Nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  to={link.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-[#6a6a6a] hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>
                {link.hasDropdown && dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-gray-200 bg-white shadow-xl py-2 z-[52]">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        className="block px-4 py-2 text-[13px] text-[#6a6a6a] hover:text-[#1a1a1a] hover:bg-gray-50 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right - Phone Number */}
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="relative z-[51] flex flex-shrink-0 items-center gap-1.5 rounded-md bg-[#d92a1d] px-2.5 py-2 text-sm font-bold text-white hover:bg-[#b82418] transition-colors whitespace-nowrap"
            onClick={() => { trackEvent('phone_click', { event_category: 'conversion', event_label: 'header_nav' }) }}
          >
            <Phone className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="text-sm font-bold">{PHONE_NUMBER}</span>
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[320px] bg-white border-l border-gray-200 shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex h-[72px] items-center justify-between border-b border-gray-200 px-4">
          <img src="/images/logo.png" alt="Mobile Tyre Fitter 247" className="h-14 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            className="h-12 w-12 flex items-center justify-center"
            type="button"
          >
            <X className="h-6 w-6 text-[#1a1a1a]" />
          </button>
        </div>

        {/* Menu Content - scrollable */}
        <div className="overflow-y-auto p-4" style={{ height: 'calc(100dvh - 72px)' }}>
          <div className="mb-4 rounded-lg bg-gray-50 p-3 border border-gray-200">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-live absolute inline-flex h-full w-full rounded-full bg-[#1a7a4f] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1a7a4f]" />
              </span>
              <span className="text-xs font-medium text-[#1a7a4f]" style={{ fontFamily: 'JetBrains Mono' }}>24/7 LIVE DISPATCH</span>
            </div>
            <p className="text-xs text-[#6a6a6a]">Average response: 30-45 mins</p>
          </div>

          <div className="space-y-1">
            <p className="px-3 py-2 text-[10px] font-medium uppercase tracking-widest text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
              Services
            </p>
            {serviceLinks.map((s) => (
              <Link
                key={s.label}
                to={s.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm text-[#6a6a6a] hover:text-[#1a1a1a] hover:bg-gray-50 rounded-md transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 space-y-1">
            <p className="px-3 py-2 text-[10px] font-medium uppercase tracking-widest text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
              Company
            </p>
            {navLinks.filter(l => !l.hasDropdown).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 text-sm text-[#6a6a6a] hover:text-[#1a1a1a] hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 pb-6">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-[#d92a1d] py-3 text-sm font-bold text-white"
            >
              <Phone className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
