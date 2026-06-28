/** Recognisable card / wallet chips used in the "we accept" row. ~36x24 rounded chips. */

const chip = 'rounded-[3px]'

export function VisaCard({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${chip} ${className}`} role="img" aria-label="Visa">
      <rect width="36" height="24" rx="3" fill="#fff" />
      <text x="18" y="16" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontStyle="italic" fontWeight="700" fill="#1A1F71" letterSpacing="0.5">VISA</text>
    </svg>
  )
}

export function MastercardCard({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${chip} ${className}`} role="img" aria-label="Mastercard">
      <rect width="36" height="24" rx="3" fill="#fff" />
      <circle cx="15" cy="12" r="6" fill="#EB001B" />
      <circle cx="21" cy="12" r="6" fill="#F79E1B" />
      <path d="M18 7.2a6 6 0 0 0 0 9.6 6 6 0 0 0 0-9.6Z" fill="#FF5F00" />
    </svg>
  )
}

export function AmexCard({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${chip} ${className}`} role="img" aria-label="American Express">
      <rect width="36" height="24" rx="3" fill="#1F72CF" />
      <text x="18" y="15" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="700" fill="#fff" letterSpacing="0.3">AMEX</text>
    </svg>
  )
}

export function ApplePayCard({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${chip} ${className}`} role="img" aria-label="Apple Pay">
      <rect width="36" height="24" rx="3" fill="#000" />
      <g transform="translate(6.5 6.2) scale(0.5)" fill="#fff">
        <path d="M6.9 3.2c.4-.5.7-1.2.6-1.9-.6 0-1.3.4-1.7.9-.4.4-.7 1.1-.6 1.8.7 0 1.3-.4 1.7-.8Z" />
        <path d="M7.5 4.2c-.95-.06-1.76.54-2.2.54-.45 0-1.14-.52-1.88-.5-.97.01-1.86.56-2.36 1.43-1 1.74-.26 4.32.72 5.74.48.7 1.05 1.47 1.79 1.44.72-.03.99-.46 1.86-.46.86 0 1.11.46 1.87.45.78-.01 1.27-.7 1.74-1.4.55-.8.78-1.58.79-1.62-.02-.01-1.51-.58-1.53-2.29-.01-1.43 1.17-2.12 1.23-2.16-.67-.99-1.72-1.1-2.08-1.13Z" />
      </g>
      <text x="22" y="15.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="600" fill="#fff">Pay</text>
    </svg>
  )
}

export function GooglePayCard({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={`${chip} ${className}`} role="img" aria-label="Google Pay">
      <rect width="36" height="24" rx="3" fill="#fff" />
      <text x="11.5" y="15.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700" fill="#4285F4">G</text>
      <text x="23" y="15.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="600" fill="#5F6368">Pay</text>
    </svg>
  )
}
