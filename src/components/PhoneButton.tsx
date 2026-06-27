import { Phone } from 'lucide-react'
import { PHONE_NUMBER } from '../main'
import { trackEvent } from '../lib/tracking'

interface PhoneButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  label?: string
  className?: string
  eventLabel?: string
}

export default function PhoneButton({
  variant = 'primary',
  size = 'md',
  showLabel = true,
  label = PHONE_NUMBER,
  className = '',
  eventLabel = 'phone_button',
}: PhoneButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  }

  const variantClasses = {
    primary: 'bg-[#d92a1d] text-white hover:bg-[#b82418] shadow-lg shadow-[#d92a1d]/20',
    outline: 'border border-[#d92a1d] text-[#d92a1d] hover:bg-[#d92a1d] hover:text-white',
    ghost: 'text-[#d92a1d] hover:text-white hover:bg-[#d92a1d]/10',
  }

  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  return (
    <a
      href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition-all active:scale-[0.98] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={() => {
        trackEvent('phone_click', { event_category: 'conversion', event_label: eventLabel })
      }}
    >
      <Phone className={iconSizes[size]} />
      {showLabel && label}
    </a>
  )
}
