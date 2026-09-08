import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import StickyNav from './components/StickyNav'
import StickyCallBar from './components/StickyCallBar'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

function App() {
  const [showCallBar, setShowCallBar] = useState(false)
  const location = useLocation()

  // Enable scroll-reveal animations only after hydration so crawlers and
  // no-JS visitors always see fully-rendered content.
  useEffect(() => {
    document.documentElement.classList.add('anim-ready')
  }, [])

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
        <Outlet />
      </main>
      <div className="pb-20 lg:pb-0"><Footer /></div>
      {showCallBar && <StickyCallBar />}
      <CookieConsent />
    </div>
  )
}

export default App
