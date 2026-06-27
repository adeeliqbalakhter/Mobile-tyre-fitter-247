import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import StickyNav from './components/StickyNav'
import StickyCallBar from './components/StickyCallBar'
import Footer from './components/Footer'

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
      <StickyNav />
      <main>
        <Outlet />
      </main>
      <Footer />
      {showCallBar && <StickyCallBar />}
    </div>
  )
}

export default App
