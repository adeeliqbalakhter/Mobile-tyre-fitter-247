import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'blur'

interface RevealProps {
  children: ReactNode
  /** Direction/style of the entrance. Defaults to a gentle fade up. */
  variant?: RevealVariant
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
}

/**
 * Wraps content in a scroll-triggered entrance animation. The hidden initial
 * state only applies once <html> has the `anim-ready` class (added client-side
 * after mount), so server-rendered HTML and no-JS visitors always see the full
 * content. Honours prefers-reduced-motion via index.css.
 */
export default function Reveal({ children, variant = 'up', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // When IntersectionObserver is unavailable (SSR / very old browsers) start
  // visible so content is never hidden. This runs identically on server and
  // client, so there is no hydration mismatch.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal={variant}
      className={visible ? `is-visible ${className}`.trim() : className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
