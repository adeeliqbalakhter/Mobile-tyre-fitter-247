import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import EmergencyCTA from '../sections/EmergencyCTA'
import { blogPosts } from '../data/blogPosts'

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Tyre Fitting Blog - Mobile Tyre Fitter 24/7',
  description: 'Tyre fitting tips, maintenance advice, safety guides, and industry news from the UK\'s leading mobile tyre fitting service.',
  url: `${SITE_URL}/blog`,
  isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <SEOHead title="Blog - Tyre Fitting Tips, Safety Guides & Maintenance Advice" description="Expert tyre fitting tips, safety guides, and maintenance advice for UK drivers. Learn about tyre replacement, emergency repairs, and seasonal tyre care from Mobile Tyre Fitter 24/7." keywords="tyre blog, tyre fitting tips, tyre safety guide, tyre maintenance UK, mobile tyre advice" schema={blogSchema} />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Blog</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Tyre Fitting <span className="text-[#d92a1d]">Blog</span></h1>
          <p className="mb-10 max-w-2xl text-[#6a6a6a]">Tips, guides, and advice on tyre maintenance, safety, and getting the most from your tyres, written for UK drivers.</p>

          {/* Featured post */}
          <Link to={`/blog/${featured.slug}`} className="group mb-10 grid overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 transition-all hover:border-[#d92a1d]/30 hover:shadow-lg lg:grid-cols-2">
            <div className="relative min-h-[200px] overflow-hidden lg:min-h-[280px]">
              <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6 lg:p-10">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded bg-[#d92a1d] px-2.5 py-1 text-[10px] font-bold tracking-wider text-white" style={{ fontFamily: 'JetBrains Mono' }}>FEATURED</span>
                <span className="rounded bg-[#d92a1d]/10 px-2 py-0.5 text-[10px] font-semibold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{featured.category}</span>
                <span className="flex items-center gap-1.5 text-[11px] text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}><Clock className="h-3 w-3" />{featured.readTime}</span>
              </div>
              <h2 className="mb-3 text-2xl font-bold text-[#1a1a1a] group-hover:text-[#d92a1d] transition-colors sm:text-3xl" style={{ fontFamily: 'Space Grotesk' }}>{featured.title}</h2>
              <p className="mb-4 text-[#6a6a6a]">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d92a1d]">Read article <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col rounded-xl border border-gray-200 bg-gray-50 overflow-hidden transition-all hover:border-[#d92a1d]/30 hover:bg-white hover:shadow-md">
                <div className="relative h-40 overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-[#d92a1d]/10 px-2 py-0.5 text-[10px] font-semibold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{post.category}</span>
                    <span className="flex items-center gap-1 text-[10px] text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}><Calendar className="h-3 w-3" />{post.date}</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-[#1a1a1a] group-hover:text-[#d92a1d] transition-colors" style={{ fontFamily: 'Space Grotesk' }}>{post.title}</h3>
                  <p className="mb-4 flex-1 text-sm text-[#6a6a6a]">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#d92a1d]">Read more <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
