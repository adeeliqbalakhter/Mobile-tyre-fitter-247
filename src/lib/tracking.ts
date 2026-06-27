// Safe tracking utility - handles gtag availability
export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && typeof (window as unknown as Record<string, unknown>).gtag === 'function') {
    (window as unknown as Record<string, (...args: unknown[]) => void>).gtag('event', eventName, params)
  }
}
