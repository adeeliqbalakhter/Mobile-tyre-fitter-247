// Google Ads "Call Click" conversion (clicks on the phone number). Firing this
// explicit in-page event alongside Google's automatic click-to-call detection
// gives more accurate conversion data. The conversion action must be set to
// count "One" per click so this does not double-count with Automatic.
const CALL_CLICK_SEND_TO = 'AW-18374323554/CRB5CPP6i4kdEOLax7lE'

// Push interaction events into the GTM dataLayer so they can be used as
// triggers for GA4 events and Google Ads conversions inside Tag Manager.
export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...params })

  // Explicit Google Ads conversion for phone-link clicks (more accurate than
  // automatic click-to-call detection alone).
  if (eventName === 'phone_click' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', { send_to: CALL_CLICK_SEND_TO })
  }
}
