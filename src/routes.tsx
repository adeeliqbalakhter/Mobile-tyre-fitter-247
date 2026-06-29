import type { RouteRecord } from 'vite-react-ssg'
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
import CityPage from './pages/CityPage'
import TyreBrands from './pages/TyreBrands'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import CookiePolicy from './pages/CookiePolicy'
import NotFound from './pages/NotFound'
import { citySlugs } from './data/cities'
import { blogPosts } from './data/blogPosts'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'emergency-tyre-fitting', element: <EmergencyTyreFitting /> },
      { path: '24-hour-tyre-fitting', element: <MobileTyreFitting24Hr /> },
      { path: 'same-day-tyre-fitting', element: <SameDayTyreFitting /> },
      { path: 'mobile-tyre-replacement', element: <MobileTyreReplacement /> },
      { path: 'home-tyre-fitting', element: <HomeTyreFitting /> },
      { path: 'workplace-tyre-fitting', element: <WorkplaceTyreFitting /> },
      { path: 'fleet-tyre-services', element: <FleetTyreServices /> },
      { path: 'coverage-areas', element: <CoverageAreas /> },
      {
        path: 'coverage/:city',
        element: <CityPage />,
        getStaticPaths: () => citySlugs.map((slug) => `coverage/${slug}`),
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
      { path: '*', element: <NotFound /> },
    ],
  },
]
