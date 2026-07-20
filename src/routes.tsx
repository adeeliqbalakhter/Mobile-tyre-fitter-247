import type { RouteRecord } from 'vite-react-ssg'
import App from './App'
import HomePage from './pages/HomePage'
import EmergencyTyreFitting from './pages/EmergencyTyreFitting'
import MobileTyreReplacement from './pages/MobileTyreReplacement'
import HomeTyreFitting from './pages/HomeTyreFitting'
import WorkplaceTyreFitting from './pages/WorkplaceTyreFitting'
import FleetTyreServices from './pages/FleetTyreServices'
import CoverageAreas from './pages/CoverageAreas'
import NearMe from './pages/NearMe'
import CityPage from './pages/CityPage'
import TyreBrands from './pages/TyreBrands'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import CookiePolicy from './pages/CookiePolicy'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import { citySlugs, CITY_URL_PREFIX } from './data/cities'
import { blogPosts } from './data/blogPosts'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },

      // Service pages (keyword-targeted slugs)
      { path: 'emergency-mobile-tyre-fitting', element: <EmergencyTyreFitting /> },
      { path: 'mobile-tyre-replacement', element: <MobileTyreReplacement /> },
      { path: 'home-tyre-fitting', element: <HomeTyreFitting /> },
      { path: 'workplace-tyre-fitting', element: <WorkplaceTyreFitting /> },
      { path: 'fleet-tyre-services', element: <FleetTyreServices /> },

      // Coverage hub + local city pages: /mobile-tyre-fitting-[city]
      { path: 'coverage-areas', element: <CoverageAreas /> },
      { path: 'mobile-tyre-fitting-near-me', element: <NearMe /> },
      {
        path: ':citySlug',
        element: <CityPage />,
        getStaticPaths: () => citySlugs.map((slug) => `${CITY_URL_PREFIX}${slug}`),
      },

      { path: 'tyre-brands', element: <TyreBrands /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'blog', element: <BlogPage /> },
      {
        path: 'blog/:slug',
        element: <BlogPostPage />,
        getStaticPaths: () => blogPosts.map((post) => `blog/${post.slug}`),
      },
      { path: 'cookies', element: <CookiePolicy /> },
      { path: 'terms-and-conditions', element: <TermsConditions /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
