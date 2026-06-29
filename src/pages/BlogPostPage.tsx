import { useParams, useLocation, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import PhoneButton from '../components/PhoneButton'
import WhatsAppButton from '../components/WhatsAppButton'
import EmergencyCTA from '../sections/EmergencyCTA'
import { getPostBySlug, blogPosts } from '../data/blogPosts'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center bg-white">
        <h1 className="text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Article Not Found</h1>
        <Link to="/blog" className="mt-4 inline-block text-[#d92a1d]">Back to the blog</Link>
      </div>
    )
  }

  const pageUrl = `${SITE_URL}${location.pathname}`
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        articleSection: post.category,
        author: { '@type': 'Organization', name: SITE_NAME },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: pageUrl,
        url: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
        ],
      },
    ],
  }

  return (
    <>
      <SEOHead title={post.metaTitle} description={post.metaDescription} schema={schema} />

      <article>
        {/* Header */}
        <header className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#1a1a1a] overflow-hidden">
          <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/85 to-[#1a1a1a]" />
          <div className="relative z-10 mx-auto max-w-[800px] px-4 lg:px-6">
            <nav className="mb-6 flex items-center gap-2 text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono' }}>
              <Link to="/" className="hover:text-[#ff4444] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-[#ff4444] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/80 line-clamp-1">{post.category}</span>
            </nav>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded bg-[#d92a1d] px-2.5 py-1 text-[11px] font-bold tracking-wider text-white" style={{ fontFamily: 'JetBrains Mono' }}>{post.category.toUpperCase()}</span>
              <span className="flex items-center gap-1.5 text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono' }}><Calendar className="h-3.5 w-3.5" />{post.date}</span>
              <span className="flex items-center gap-1.5 text-xs text-white/60" style={{ fontFamily: 'JetBrains Mono' }}><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>{post.title}</h1>
          </div>
        </header>

        {/* Body */}
        <div className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-[800px] px-4 lg:px-6">
            <p className="mb-8 text-lg leading-relaxed text-[#1a1a1a]">{post.intro}</p>

            {post.sections.map((section, i) => (
              <section key={i} className="mb-8">
                {section.heading && (
                  <h2 className="mb-3 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{section.heading}</h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="mb-4 text-base leading-relaxed text-[#6a6a6a]">{p}</p>
                ))}
                {section.list && (
                  <ul className="space-y-2.5">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d92a1d]" />
                        <span className="text-base leading-relaxed text-[#6a6a6a]">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Inline CTA */}
            <div className="my-10 rounded-2xl border border-[#d92a1d]/20 bg-[#d92a1d]/5 p-6 text-center sm:p-8">
              <h2 className="mb-2 text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Need a Tyre Fitted Today?</h2>
              <p className="mb-6 text-sm text-[#6a6a6a]">We come to you 24/7, at home, work, or roadside. Average response 30-45 minutes.</p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PhoneButton size="lg" eventLabel={`blog_${post.slug}`} />
                <WhatsAppButton size="lg" variant="primary" message="Hi, I need a mobile tyre fitter. Can you help?" />
              </div>
            </div>

            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#d92a1d] hover:text-[#b82418] transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </div>

        {/* Related */}
        <section className="bg-gray-50 py-12 lg:py-16 border-t border-gray-200">
          <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
            <h2 className="mb-8 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Related <span className="text-[#d92a1d]">Articles</span></h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group rounded-xl border border-gray-200 bg-white overflow-hidden transition-all hover:border-[#d92a1d]/30 hover:shadow-md">
                  <div className="relative h-32 overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="rounded bg-[#d92a1d]/10 px-2 py-0.5 text-[10px] font-semibold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{p.category}</span>
                    <h3 className="mt-2 mb-2 font-semibold text-[#1a1a1a] group-hover:text-[#d92a1d] transition-colors" style={{ fontFamily: 'Space Grotesk' }}>{p.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#d92a1d]">Read more <ArrowRight className="h-3.5 w-3.5" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <EmergencyCTA />
    </>
  )
}
