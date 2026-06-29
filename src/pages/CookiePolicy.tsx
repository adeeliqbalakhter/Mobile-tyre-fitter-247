import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { OPEN_COOKIE_PREFS_EVENT } from '../components/CookieConsent'

const categories = [
  {
    name: 'Strictly necessary',
    desc: 'Essential for the website to work, such as page navigation, security, and remembering your cookie choices. These are always active and cannot be switched off.',
  },
  {
    name: 'Analytics',
    desc: 'Help us understand how visitors find and use the site so we can improve it. We use Google Analytics. These cookies only load if you allow them.',
  },
  {
    name: 'Advertising',
    desc: 'Used to measure the performance of our advertising and to show more relevant ads. We use Google Ads. These cookies only load if you allow them.',
  },
]

export default function CookiePolicy() {
  return (
    <>
      <SEOHead
        title="Cookie Policy"
        description="How Mobile Tyre Fitter 24/7 uses cookies, including Google Analytics and Google Ads, and how you can manage your consent."
      />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Cookie Policy</span>
          </nav>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>Cookie <span className="text-[#d92a1d]">Policy</span></h1>
          <p className="mb-8 text-base leading-relaxed text-[#6a6a6a]">
            This policy explains how Mobile Tyre Fitter 24/7 uses cookies and similar technologies on this website, and how you can control them. By using the site you can choose which non-essential cookies to allow.
          </p>

          <h2 className="mb-3 text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>What are cookies?</h2>
          <p className="mb-8 text-base leading-relaxed text-[#6a6a6a]">
            Cookies are small text files stored on your device when you visit a website. They help the site work, remember your preferences, and provide information to the site owner. Some cookies are essential, while others are only used with your consent.
          </p>

          <h2 className="mb-3 text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Cookie categories we use</h2>
          <div className="mb-8 space-y-3">
            {categories.map((c) => (
              <div key={c.name} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="mb-1 text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{c.name}</h3>
                <p className="text-sm leading-relaxed text-[#6a6a6a]">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mb-3 text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Consent and Google services</h2>
          <p className="mb-4 text-base leading-relaxed text-[#6a6a6a]">
            We use Google Consent Mode. Until you give consent, analytics and advertising cookies are disabled by default and no analytics or advertising data is collected. When you accept, we enable Google Analytics and Google Ads (managed through Google Tag Manager) in line with your choices.
          </p>
          <p className="mb-8 text-base leading-relaxed text-[#6a6a6a]">
            You can change or withdraw your consent at any time using the button below. You can also delete cookies through your browser settings.
          </p>

          <button
            onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFS_EVENT))}
            className="rounded-lg bg-[#d92a1d] px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#b82418]"
          >
            Manage cookie preferences
          </button>

          <h2 className="mt-12 mb-3 text-xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Contact</h2>
          <p className="text-base leading-relaxed text-[#6a6a6a]">
            If you have any questions about how we use cookies, please <Link to="/contact" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">contact us</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
