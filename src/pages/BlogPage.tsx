import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import EmergencyCTA from '../sections/EmergencyCTA'

const posts = [
  { title: 'What to Do If You Get a Flat Tyre on the Motorway', excerpt: 'A flat tyre on the motorway can be dangerous. Here\'s exactly what to do to stay safe and get back on the road quickly.', date: '15 Jan 2025', category: 'Safety', slug: 'flat-tyre-motorway' },
  { title: 'How Long Should Your Tyres Last?', excerpt: 'Learn the average lifespan of car tyres, the signs of wear to watch for, and how to maximise tyre longevity.', date: '10 Jan 2025', category: 'Maintenance', slug: 'how-long-tyres-last' },
  { title: 'Run-Flat Tyres vs Standard Tyres: Which Is Better?', excerpt: 'We compare run-flat tyres and standard tyres to help you decide which is best for your vehicle and driving style.', date: '5 Jan 2025', category: 'Guide', slug: 'run-flat-vs-standard' },
  { title: 'Winter Tyre Guide for UK Drivers', excerpt: 'Everything you need to know about winter tyres in the UK -- when to fit them, the benefits, and the law.', date: '28 Dec 2024', category: 'Seasonal', slug: 'winter-tyre-guide' },
  { title: 'Why Mobile Tyre Fitting Beats Garage Visits', excerpt: 'Discover the benefits of mobile tyre fitting -- convenience, speed, and why more UK drivers are choosing it.', date: '20 Dec 2024', category: 'Service', slug: 'mobile-vs-garage' },
  { title: 'Understanding Tyre Labels: Fuel, Wet Grip & Noise', excerpt: 'How to read EU tyre labels and what fuel efficiency, wet grip, and noise ratings really mean for your driving.', date: '15 Dec 2024', category: 'Guide', slug: 'tyre-labels-explained' },
]

export default function BlogPage() {
  return (
    <>
      <SEOHead title="Blog - Tyre Fitting Tips, Guides & Advice" description="Read our blog for tyre fitting tips, maintenance advice, safety guides, and industry news. Mobile Tyre Fitter 24/7 blog." />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Blog</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Tyre Fitting <span className="text-[#d92a1d]">Blog</span></h1>
          <p className="mb-8 max-w-2xl text-[#6a6a6a]">Tips, guides, and advice on tyre maintenance, safety, and getting the most from your tyres.</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden transition-all hover:border-[#d92a1d]/30 hover:bg-white hover:shadow-md">
                <div className="h-40 bg-gradient-to-br from-[#d92a1d]/10 to-gray-100" />
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-[#d92a1d]/10 px-2 py-0.5 text-[10px] font-semibold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{post.category}</span>
                    <span className="text-[10px] text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>{post.date}</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-[#1a1a1a] group-hover:text-[#d92a1d] transition-colors" style={{ fontFamily: 'Space Grotesk' }}>{post.title}</h3>
                  <p className="text-sm text-[#6a6a6a]">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
