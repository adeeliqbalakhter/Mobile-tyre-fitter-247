// Global type declarations
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

// Make gtag available as global
declare const gtag: (...args: unknown[]) => void;

export {};
