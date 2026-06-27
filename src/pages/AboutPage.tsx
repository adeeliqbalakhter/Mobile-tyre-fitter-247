import { Link } from 'react-router-dom'
import { Shield, Clock, Star, Truck } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import PhoneButton from '../components/PhoneButton'
import EmergencyCTA from '../sections/EmergencyCTA'

const milestones = [
  { year: '2015', title: 'Founded', desc: 'Started with a single van in London' },
  { year: '2017', title: 'UK Expansion', desc: 'Expanded to Manchester and Birmingham' },
  { year: '2019', title: '24/7 Service', desc: 'Launched round-the-clock emergency service' },
  { year: '2021', title: 'Fleet Services', desc: 'Introduced dedicated fleet management' },
  { year: '2023', title: '70K+ Tyres', desc: 'Reached 70,000 tyres in stock nationwide' },
  { year: '2025', title: 'UK Leader', desc: 'Became UK\'s leading mobile tyre fitter' },
]

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About Us - UK\'s Leading Mobile Tyre Fitting Service" description="Learn about Mobile Tyre Fitter 24/7. UK\'s leading mobile tyre fitting service since 2015. 70,000+ tyres fitted, 4.9★ rating, 30-45 min response." />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">About</span>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>About <span className="text-[#d92a1d]">Mobile Tyre Fitter 24/7</span></h1>
          <p className="mb-8 max-w-2xl text-[#6a6a6a]">Since 2015, we&apos;ve been the UK&apos;s most trusted mobile tyre fitting service. We&apos;re on a mission to make tyre replacement as easy and stress-free as possible.</p>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[{ icon: Clock, title: 'Always Available', desc: '24/7, 365 days a year. No exceptions.' }, { icon: Shield, title: 'Fully Insured', desc: 'Every fitter is insured and certified.' }, { icon: Star, title: 'Customer First', desc: '4.9★ rating from 2,500+ reviews.' }, { icon: Truck, title: 'Rapid Response', desc: '30-45 min average across the UK.' }].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <Icon className="mb-3 h-6 w-6 text-[#d92a1d]" />
                <h3 className="mb-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{title}</h3>
                <p className="text-sm text-[#6a6a6a]">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-6 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Our <span className="text-[#d92a1d]">Journey</span></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m) => (
              <div key={m.year} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <span className="text-xs font-bold text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>{m.year}</span>
                <h3 className="mt-1 font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{m.title}</h3>
                <p className="text-sm text-[#6a6a6a]">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center"><PhoneButton size="lg" eventLabel="about_page" /></div>
        </div>
      </section>
      <EmergencyCTA />
    </>
  )
}
