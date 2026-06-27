import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../main'
import { trackEvent } from '../lib/tracking'

interface WhatsAppButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  label?: string
  className?: string
  message?: string
}

export default function WhatsAppButton({
  variant = 'outline',
  size = 'md',
  showLabel = true,
  label = 'WhatsApp',
  className = '',
  message = 'Hi, I need emergency tyre fitting. Can you help?',
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  }

  const variantClasses = {
    primary: 'bg-[#25D366] text-white hover:bg-[#1fad53]',
    outline: 'border border-[#2a2a2a] text-[#a0a0a0] hover:text-white hover:border-[#25D366]',
    ghost: 'text-[#a0a0a0] hover:text-[#25D366]',
  }

  const iconSizes = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  const encodedMessage = encodeURIComponent(message)
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodedMessage}`

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition-all active:scale-[0.98] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={() => {
        trackEvent('whatsapp_click', { event_category: 'conversion', event_label: 'whatsapp_button' })
      }}
    >
      <MessageCircle className={iconSizes[size]} />
      {showLabel && label}
    </a>
  )
}
