import { Link } from 'react-router-dom'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  { question: 'How quickly can you get to me?', answer: 'Our average response time is 30-45 minutes, depending on your location and current demand. In major cities like London, Manchester, and Birmingham, we typically arrive within 25-35 minutes. For remote locations, we may take up to 60 minutes. When you call, we\'ll give you an exact ETA.' },
  { question: 'Do you operate 24 hours a day?', answer: 'Yes, absolutely. We operate 24 hours a day, 7 days a week, 365 days a year — including Christmas Day and all bank holidays. Tyre emergencies don\'t take days off, and neither do we.' },
  { question: 'What areas do you cover?', answer: 'We cover the entire United Kingdom, including England, Scotland, Wales, and Northern Ireland. Our mobile fitters are positioned strategically across the UK to ensure rapid response times wherever you are.' },
  { question: 'Can you fit tyres at my home or workplace?', answer: 'Yes, that\'s exactly what we do. Our mobile tyre fitting vans come fully equipped to your location — whether that\'s your home driveway, office car park, or roadside. No need to visit a garage.' },
  { question: 'What tyre brands do you stock?', answer: 'We stock all major tyre brands including Michelin, Pirelli, Continental, Dunlop, Goodyear, Bridgestone, Hankook, Yokohama, and many more. We also carry quality mid-range and budget options. With over 70,000 tyres in stock, we have something for every vehicle and budget.' },
  { question: 'How much does mobile tyre fitting cost?', answer: 'Our pricing is transparent and competitive. The cost depends on your tyre size and brand choice. There are no hidden call-out fees. When you call us, we\'ll give you a clear, upfront quote before any work begins. We accept all major credit and debit cards.' },
  { question: 'Do you do puncture repairs?', answer: 'Yes, we can repair punctures that meet British Standard BSAU-159 safety guidelines. If the puncture is in the central tread area, smaller than 6mm, and the tyre has no other damage, we can usually repair it on the spot for a fraction of the cost of a new tyre.' },
  { question: 'Are your fitters insured?', answer: 'Yes, all our mobile tyre fitters are fully insured, trained to industry standards, and background-checked. We also guarantee all our workmanship. If anything isn\'t right, we\'ll fix it free of charge.' },
]

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50" id="faq">
      <div className="mx-auto max-w-[800px] px-4 lg:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>FAQs</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
            Frequently Asked <span className="text-[#d92a1d]">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-gray-200 bg-white px-5 data-[state=open]:border-[#d92a1d]/30">
              <AccordionTrigger className="text-left text-sm font-semibold text-[#1a1a1a] hover:no-underline py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#6a6a6a] pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#6a6a6a]">
            Still have questions? <Link to="/faq" className="font-semibold text-[#d92a1d] hover:text-[#b82418] transition-colors">View all FAQs</Link> or <Link to="/contact" className="font-semibold text-[#d92a1d] hover:text-[#b82418] transition-colors">contact us</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
