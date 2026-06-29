import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X, ShieldCheck, BarChart3, Megaphone } from 'lucide-react'
import { applyConsent, getStoredChoice, type ConsentChoice } from '../lib/consent'

/** Other components can open the preferences panel: window.dispatchEvent(new Event('open-cookie-prefs')). */
export const OPEN_COOKIE_PREFS_EVENT = 'open-cookie-prefs'

function Toggle({ checked, onChange, disabled, label }: { checked: boolean; onChange?: (v: boolean) => void; disabled?: boolean; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors ${checked ? 'bg-[#d92a1d]' : 'bg-gray-300'} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
    >
      <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-5' : ''}`} />
    </button>
  )
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => getStoredChoice() === null)
  const [showPrefs, setShowPrefs] = useState(false)
  const [analytics, setAnalytics] = useState(() => getStoredChoice()?.analytics ?? false)
  const [ads, setAds] = useState(() => getStoredChoice()?.ads ?? false)

  useEffect(() => {
    const openPrefs = () => {
      const current = getStoredChoice()
      setAnalytics(current?.analytics ?? false)
      setAds(current?.ads ?? false)
      setShowPrefs(true)
    }
    window.addEventListener(OPEN_COOKIE_PREFS_EVENT, openPrefs)
    return () => window.removeEventListener(OPEN_COOKIE_PREFS_EVENT, openPrefs)
  }, [])

  const decide = (choice: ConsentChoice) => {
    applyConsent(choice)
    setAnalytics(choice.analytics)
    setAds(choice.ads)
    setShowBanner(false)
    setShowPrefs(false)
  }

  if (!showBanner && !showPrefs) return null

  return (
    <>
      {/* Preferences modal */}
      {showPrefs && (
        <div className="fixed inset-0 z-[95] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label="Cookie preferences">
          <div className="w-full max-w-lg rounded-t-2xl border border-gray-200 bg-white shadow-2xl sm:rounded-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-[#d92a1d]" />
                <h2 className="text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Cookie Preferences</h2>
              </div>
              <button onClick={() => { setShowPrefs(false); if (!getStoredChoice()) setShowBanner(true) }} aria-label="Close" className="text-gray-400 hover:text-[#1a1a1a]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto px-5 py-4">
              <p className="mb-5 text-sm leading-relaxed text-[#6a6a6a]">
                We use cookies to run the site and, with your permission, to measure traffic and improve our advertising. Choose which categories to allow.
              </p>

              {/* Necessary */}
              <div className="mb-3 flex items-start justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1a7a4f]" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Strictly Necessary</h3>
                    <p className="mt-0.5 text-xs text-[#6a6a6a]">Required for the website to function. Always on.</p>
                  </div>
                </div>
                <Toggle checked disabled label="Strictly necessary cookies (always on)" />
              </div>

              {/* Analytics */}
              <div className="mb-3 flex items-start justify-between gap-4 rounded-xl border border-gray-200 p-4">
                <div className="flex gap-3">
                  <BarChart3 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d92a1d]" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Analytics</h3>
                    <p className="mt-0.5 text-xs text-[#6a6a6a]">Helps us understand how visitors use the site (Google Analytics).</p>
                  </div>
                </div>
                <Toggle checked={analytics} onChange={setAnalytics} label="Analytics cookies" />
              </div>

              {/* Advertising */}
              <div className="flex items-start justify-between gap-4 rounded-xl border border-gray-200 p-4">
                <div className="flex gap-3">
                  <Megaphone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d92a1d]" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Advertising</h3>
                    <p className="mt-0.5 text-xs text-[#6a6a6a]">Used to measure and personalise ads (Google Ads).</p>
                  </div>
                </div>
                <Toggle checked={ads} onChange={setAds} label="Advertising cookies" />
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-200 px-5 py-4 sm:flex-row sm:justify-end">
              <button onClick={() => decide({ analytics: false, ads: false })} className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-50">
                Reject all
              </button>
              <button onClick={() => decide({ analytics, ads })} className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-50">
                Save preferences
              </button>
              <button onClick={() => decide({ analytics: true, ads: true })} className="rounded-lg bg-[#d92a1d] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#b82418]">
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom consent banner */}
      {showBanner && !showPrefs && (
        <div className="fixed inset-x-0 bottom-0 z-[90] px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-3">
                <Cookie className="mt-0.5 hidden h-6 w-6 flex-shrink-0 text-[#d92a1d] sm:block" />
                <div>
                  <h2 className="mb-1 text-sm font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>We value your privacy</h2>
                  <p className="text-xs leading-relaxed text-[#6a6a6a] sm:text-sm">
                    We use cookies to run this site and, with your consent, for analytics and advertising (Google Analytics &amp; Google Ads). You can accept all, reject non-essential, or choose. See our{' '}
                    <Link to="/cookies" className="font-semibold text-[#d92a1d] underline hover:text-[#b82418]">Cookie Policy</Link>.
                  </p>
                </div>
              </div>
              <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row">
                <button onClick={() => decide({ analytics: false, ads: false })} className="order-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-50 sm:order-1">
                  Reject all
                </button>
                <button onClick={() => setShowPrefs(true)} className="order-3 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-50 sm:order-2">
                  Cookie settings
                </button>
                <button onClick={() => decide({ analytics: true, ads: true })} className="order-1 rounded-lg bg-[#d92a1d] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#b82418] sm:order-3">
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
