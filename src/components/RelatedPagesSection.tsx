import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface RelatedPagesSectionProps {
  heading?: string
  intro?: string
  links: { label: string; href: string }[]
  /** Alternate the background so it sits well between other sections. */
  tone?: 'white' | 'gray'
}

/**
 * A reusable block of internal links with descriptive, keyword-rich anchors.
 * Used to give otherwise "dead-end" pages (About, Contact, Tyre Brands)
 * genuine in-content links to the service and location hubs.
 */
export default function RelatedPagesSection({ heading = 'Explore More', intro, links, tone = 'white' }: RelatedPagesSectionProps) {
  return (
    <section className={`py-14 lg:py-16 border-t border-gray-200 ${tone === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <h2 className="mb-2 text-2xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{heading}</h2>
        {intro && <p className="mb-6 max-w-2xl text-sm text-[#6a6a6a]">{intro}</p>}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 transition-all hover:border-[#d92a1d]/30 hover:shadow-sm"
            >
              <span className="flex-1 text-sm font-medium text-[#6a6a6a] group-hover:text-[#1a1a1a] transition-colors">{link.label}</span>
              <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-gray-300 group-hover:text-[#d92a1d] transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
