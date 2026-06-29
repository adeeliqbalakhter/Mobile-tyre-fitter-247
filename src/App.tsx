import { Outlet, useLocation } from 'react-router-dom'
import { Suspense, useEffect, useState } from 'react'
import StickyNav from './components/StickyNav'
import StickyCallBar from './components/StickyCallBar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#d92a1d]" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

function App() {
  const [showCallBar, setShowCallBar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setShowCallBar(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <a href="#main" className="skip-link">Skip to main content</a>
      <StickyNav />
      <main id="main">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {showCallBar && <StickyCallBar />}
      <CookieConsent />
    </div>
  )
}

export default App
