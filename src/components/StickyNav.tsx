import { useState, useEffect, useRef, useCallback } from 'react'
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
  { label: 'Mobile Tyre Fitting Near Me', href: '/mobile-tyre-fitting-near-me' },
  { label: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
  { label: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
  { label: 'Fleet Tyre Services', href: '/fleet-tyre-services' },
]

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  // Close dropdown when clicking or tabbing outside
  const closeDropdown = useCallback(() => setDropdownOpen(false), [])

  useEffect(() => {
    if (!dropdownOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { closeDropdown(); return }
      // Trap focus within the dropdown when open
      if (e.key === 'Tab' && dropdownRef.current) {
        const focusable = dropdownRef.current.querySelectorAll<HTMLElement>('a, button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [dropdownOpen, closeDropdown])

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
                width={150}
                height={50}
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
                  onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) => {
                    if (link.hasDropdown && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault()
                      setDropdownOpen((prev) => !prev)
                    }
                  }}
                  aria-expanded={link.hasDropdown ? dropdownOpen : undefined}
                  aria-haspopup={link.hasDropdown ? 'true' : undefined}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-[#6a6a6a] hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
                </Link>
                {link.hasDropdown && dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    role="menu"
                    className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-gray-200 bg-white shadow-xl py-2 z-[52]"
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.label}
                        to={s.href}
                        role="menuitem"
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
          <img src="/images/logo.png" alt="Mobile Tyre Fitter 247" width={150} height={50} className="h-14 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            className="h-12 w-12 flex items-center justify-center"
            aria-label="Close menu"
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
            <div className="flex items-center justify-center gap-4 mb-4">
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
