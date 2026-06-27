import { useEffect, useRef, useState } from 'react'

const steps = [
  { number: '01', title: 'Call Us', description: '24/7 emergency line. Tell us your location and tyre size. We\'ll give you an instant quote and ETA.', image: '/images/step-call.jpg' },
  { number: '02', title: 'We Dispatch', description: 'Your nearest fully-equipped mobile technician is routed to your location via GPS. Real-time tracking available.', image: '/images/step-dispatch.jpg' },
  { number: '03', title: 'Fitted On-Site', description: 'Expert tyre fitting and balancing at your location. All work guaranteed. New valve and balancing included.', image: '/images/step-fitting.jpg' },
  { number: '04', title: 'Drive Away', description: 'Back on the road the same day. Pay securely on completion. We dispose of your old tyre responsibly.', image: '/images/step-drive.jpg' },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight - viewportHeight * 0.5)))
      const stepIndex = Math.min(3, Math.floor(scrollProgress * 4))
      setActiveStep(stepIndex)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-gray-50" id="how-it-works">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-6">
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>How It Works</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
            Back On The Road In <span className="text-[#d92a1d]">4 Simple Steps</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`flex items-start gap-4 rounded-xl border p-5 text-left transition-all duration-300 ${
                  activeStep === index ? 'border-[#d92a1d]/30 bg-[#d92a1d]/5' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <span className={`text-4xl font-bold leading-none transition-colors duration-300 ${activeStep === index ? 'text-[#d92a1d]' : 'text-gray-200'}`} style={{ fontFamily: 'Space Grotesk' }}>
                  {step.number}
                </span>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors ${activeStep === index ? 'text-[#1a1a1a]' : 'text-[#6a6a6a]'}`} style={{ fontFamily: 'Space Grotesk' }}>{step.title}</h3>
                  <p className={`mt-1 text-sm leading-relaxed transition-all duration-300 ${activeStep === index ? 'text-[#6a6a6a] max-h-40 opacity-100' : 'text-gray-400 max-h-0 opacity-0 overflow-hidden lg:max-h-40 lg:opacity-100'}`}>
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="relative hidden lg:block h-[480px]">
            <div className="sticky top-32 h-[480px]">
              {steps.map((step, index) => (
                <div key={step.number} className={`absolute inset-0 overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all duration-500 ${activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <img src={step.image} alt={step.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
