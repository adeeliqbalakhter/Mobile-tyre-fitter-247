import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'

declare const gtag: (...args: unknown[]) => void;

import App from './App'
import HomePage from './pages/HomePage'
import EmergencyTyreFitting from './pages/EmergencyTyreFitting'
import MobileTyreFitting24Hr from './pages/MobileTyreFitting24Hr'
import SameDayTyreFitting from './pages/SameDayTyreFitting'
import MobileTyreReplacement from './pages/MobileTyreReplacement'
import HomeTyreFitting from './pages/HomeTyreFitting'
import WorkplaceTyreFitting from './pages/WorkplaceTyreFitting'
import FleetTyreServices from './pages/FleetTyreServices'
import CoverageAreas from './pages/CoverageAreas'
import TyreBrands from './pages/TyreBrands'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import CityPage from './pages/CityPage'

const PHONE_NUMBER = "0800 123 4567"
const WHATSAPP_NUMBER = "+447912345678"

export { PHONE_NUMBER, WHATSAPP_NUMBER }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
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
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
)
