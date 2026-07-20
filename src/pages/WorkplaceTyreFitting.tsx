import ServicePageTemplate from '../components/ServicePageTemplate'

const features = [
  "Fitted at your office car park or business premises",
  "Minimal disruption to your working day, zero downtime",
  "Before work, during lunch, or after hours appointments",
  "All tyre brands available from our mobile stock",
  "Corporate invoicing with 30-day payment terms available",
  "Volume discounts for multiple vehicles",
  "Fully insured and professional uniformed fitters",
  "Priority booking for regular business clients",
]

const whatToExpect = [
  "Call us with your business address, vehicle details, and preferred fitting time",
  "We confirm tyre availability, provide a corporate quote, and schedule your appointment",
  "Choose a time that minimises disruption, early morning, lunch, or after-work slots",
  "Your mobile fitter arrives at your office car park in a professional branded van",
  "Tyres are fitted while you continue working, no need to leave your desk",
  "Corporate invoicing available, or pay by card on completion. Full VAT receipt provided",
]

const contentBlocks = [
  {
    heading: "Tyre Fitting At Your Office, Zero Downtime",
    paragraphs: [
      "For busy professionals, taking time out of the working day to visit a tyre garage is simply not practical. Our workplace tyre fitting service solves this problem completely. We come to your office car park and fit your tyres while you work. You do not need to take time off, arrange cover, or lose billable hours. The entire process happens in the background while you focus on what you do best.",
      "Workplace fitting is ideal for company car drivers, sales representatives who spend their days on the road, and anyone who values their time. We offer flexible appointment slots including early morning (before 9am), lunchtime (12-2pm), and after-hours (5-7pm) options. This means your tyres can be fitted before your working day begins, during your lunch break, or after you have finished, whichever causes the least disruption.",
    ],
  },
  {
    heading: "Corporate Accounts And Business Customers",
    paragraphs: [
      "We offer dedicated corporate accounts for businesses of all sizes. Benefits include priority booking, consolidated monthly invoicing with 30-day payment terms, volume discounts for multiple vehicles, and a dedicated account manager who understands your fleet requirements. Whether you have two company cars or two hundred, we can structure a service package that keeps your vehicles on the road with minimal administrative overhead.",
      "Our corporate clients include estate agents, delivery companies, sales organisations, construction firms, and healthcare providers. We understand that vehicle downtime costs money, which is why we prioritise business customers with faster response times and flexible scheduling. We also provide detailed reporting on all work carried out, making fleet management and accounting straightforward.",
    ],
  },
  {
    heading: "Professional Service That Reflects Well On Your Business",
    paragraphs: [
      "We know that our fitters are working at your place of business, often in view of your colleagues, clients, and visitors. That is why we maintain the highest standards of professionalism at all times. Our fitters arrive in clean, branded vans, wear smart uniforms, and conduct themselves with courtesy and discretion. We work efficiently, keep noise to a minimum, and leave your car park exactly as we found it.",
      "All our workplace fitting work is fully insured and guaranteed. We provide detailed VAT receipts suitable for business expense claims, and our corporate invoicing system makes reclaiming VAT straightforward. For businesses with multiple drivers, we can arrange regular tyre checks and maintenance schedules to prevent unexpected failures and keep your fleet operating safely and legally.",
    ],
  },
]

const serviceFaqs = [
  { question: "Can you fit tyres in any office car park?", answer: "Yes, as long as we have safe access to your vehicle and enough space to work. Most office car parks are suitable. We recommend checking with your building management if parking restrictions apply." },
  { question: "Do you offer corporate invoicing?", answer: "Yes, we offer corporate accounts with 30-day invoicing, volume discounts, and a dedicated account manager. Contact us on 0800 123 4567 to set up a business account." },
  { question: "Can you fit multiple vehicles at the same location?", answer: "Absolutely. We regularly service fleets of multiple vehicles at single locations. Volume discounts apply for 3 or more vehicles fitted at the same time." },
  { question: "What appointment times are available for workplace fitting?", answer: "We offer early morning (7-9am), lunchtime (12-2pm), and after-hours (4-7pm) appointments. We can also arrange weekend fitting if preferred. Emergency 24/7 service is always available." },
  { question: "Is there a minimum number of vehicles?", answer: "No minimum. We fit tyres for individual company car drivers and large fleets alike. Every business customer receives the same professional service." },
  { question: "Do you provide VAT receipts?", answer: "Yes, we provide full VAT receipts for all work carried out. Corporate customers receive detailed invoices suitable for accounting and tax purposes." },
  { question: "Can my employees book directly?", answer: "Yes, with a corporate account your employees can book directly using your account reference. All charges are consolidated on a single monthly invoice." },
  { question: "Do you offer fleet tyre checks?", answer: "Yes, we offer regular fleet tyre inspection services where we visit your premises and check the condition of all fleet vehicles. This proactive approach prevents unexpected failures and keeps your fleet safe and legal." },
]

const emergencyScenarios = [
  "Company car needs urgent tyre replacement during the working week",
  "Fleet vehicle fails MOT due to tyre condition",
  "Sales rep discovers a flat tyre before a client meeting",
  "Delivery driver needs tyres replaced between shifts",
  "Pool car requires tyres replaced for new user",
  "End-of-lease vehicle needs tyre replacement before return",
]

const whyChoose = [
  { title: "Zero Disruption To Work", description: "Tyres fitted while you work. No time off, no lost productivity, no inconvenience. The ultimate service for busy professionals." },
  { title: "Corporate Invoicing", description: "30-day payment terms, detailed VAT receipts, and consolidated monthly billing. Designed for business accounting processes." },
  { title: "Volume Discounts", description: "Discounts for multiple vehicles fitted at the same location. The more vehicles, the more you save." },
  { title: "Professional Appearance", description: "Branded vans, uniformed fitters, and discreet service that reflects well on your business in front of colleagues and clients." },
  { title: "Flexible Business Hours", description: "Early morning, lunchtime, or after-hours appointments. We fit around your schedule, not the other way around." },
  { title: "Dedicated Account Manager", description: "Corporate clients get a dedicated account manager who understands your fleet and ensures priority service every time." },
]

const relatedServices = [
  { title: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
  { title: 'Fleet Tyre Services', href: '/fleet-tyre-services' },
  { title: 'Emergency Tyre Fitting', href: '/emergency-mobile-tyre-fitting' },
]

export default function WorkplaceTyreFitting() {
  return (
    <ServicePageTemplate
      title="Workplace"
      titleHighlight="Tyre Fitting"
      description="Mobile tyre fitting at your workplace across the UK. We come to your office car park, no need to take time off. Corporate invoicing and volume discounts available. Call 0800 123 4567."
      metaTitle="Workplace Tyre Fitting UK - Mobile Service At Your Office Car Park"
      metaDescription="Mobile tyre fitting at your workplace across the UK. Office car park service with zero disruption to your day. Corporate invoicing & volume discounts. Call 0800 123 4567."
      heroImage="/images/service-fleet.webp"
      features={features}
      whatToExpect={whatToExpect}
      contentBlocks={contentBlocks}
      serviceFaqs={serviceFaqs}
      emergencyScenarios={emergencyScenarios}
      whyChoose={whyChoose}
      relatedServices={relatedServices}
    />
  )
}
