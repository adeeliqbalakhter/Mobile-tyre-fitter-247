// Google Consent Mode v2 helper — drives the cookie banner and updates gtag/GTM.
// Window.gtag and Window.dataLayer are declared in src/types/index.ts

export interface ConsentChoice {
  /** GA4 / analytics_storage */
  analytics: boolean
  /** Google Ads — ad_storage, ad_user_data, ad_personalization */
  ads: boolean
}

export const CONSENT_KEY = 'cookie-consent'
/** Bump this when the cookie/consent terms materially change to re-prompt visitors. */
export const CONSENT_VERSION = 1

interface StoredConsent {
  version: number
  choice: ConsentChoice
  consent: Record<string, 'granted' | 'denied'>
  timestamp: number
}

function read(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredConsent
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

/** Returns the saved choice, or null if the visitor has not decided yet. */
export function getStoredChoice(): ConsentChoice | null {
  return read()?.choice ?? null
}

function toConsentMap(choice: ConsentChoice): Record<string, 'granted' | 'denied'> {
  const g = (allowed: boolean): 'granted' | 'denied' => (allowed ? 'granted' : 'denied')
  return {
    analytics_storage: g(choice.analytics),
    ad_storage: g(choice.ads),
    ad_user_data: g(choice.ads),
    ad_personalization: g(choice.ads),
  }
}

/** Persist the choice and push the update to Google Consent Mode + the dataLayer. */
export function applyConsent(choice: ConsentChoice) {
  const consent = toConsentMap(choice)

  window.gtag?.('consent', 'update', consent)
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'cookie_consent_update', ...consent })

  const payload: StoredConsent = {
    version: CONSENT_VERSION,
    choice,
    consent,
    timestamp: Date.now(),
  }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(payload))
  } catch {
    /* storage unavailable — consent still applies for this session */
  }
}
