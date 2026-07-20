// Push interaction events into the GTM dataLayer so they can be used as
// triggers for GA4 events and Google Ads conversions inside Tag Manager.
export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName, ...params })
}
