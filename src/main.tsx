import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import App from './App'
// HomePage is the landing/LCP route, keep it eager so it renders immediately.
import HomePage from './pages/HomePage'

// Secondary routes are code-split so they don't bloat the initial bundle.
const EmergencyTyreFitting = lazy(() => import('./pages/EmergencyTyreFitting'))
const MobileTyreFitting24Hr = lazy(() => import('./pages/MobileTyreFitting24Hr'))
const SameDayTyreFitting = lazy(() => import('./pages/SameDayTyreFitting'))
const MobileTyreReplacement = lazy(() => import('./pages/MobileTyreReplacement'))
const HomeTyreFitting = lazy(() => import('./pages/HomeTyreFitting'))
const WorkplaceTyreFitting = lazy(() => import('./pages/WorkplaceTyreFitting'))
const FleetTyreServices = lazy(() => import('./pages/FleetTyreServices'))
const CoverageAreas = lazy(() => import('./pages/CoverageAreas'))
const TyreBrands = lazy(() => import('./pages/TyreBrands'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const CityPage = lazy(() => import('./pages/CityPage'))

const PHONE_NUMBER = "0800 123 4567"
const WHATSAPP_NUMBER = "+447912345678"

export { PHONE_NUMBER, WHATSAPP_NUMBER }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/emergency-tyre-fitting" element={<EmergencyTyreFitting />} />
          <Route path="/24-hour-tyre-fitting" element={<MobileTyreFitting24Hr />} />
          <Route path="/same-day-tyre-fitting" element={<SameDayTyreFitting />} />
          <Route path="/mobile-tyre-replacement" element={<MobileTyreReplacement />} />
          <Route path="/home-tyre-fitting" element={<HomeTyreFitting />} />
          <Route path="/workplace-tyre-fitting" element={<WorkplaceTyreFitting />} />
          <Route path="/fleet-tyre-services" element={<FleetTyreServices />} />
          <Route path="/coverage-areas" element={<CoverageAreas />} />
          <Route path="/coverage/:city" element={<CityPage />} />
          <Route path="/tyre-brands" element={<TyreBrands />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
