import ServicePageTemplate from '../components/ServicePageTemplate'

const features = [
  "Guaranteed same-day fitting when you book before 6pm",
  "Flexible appointment slots to suit your schedule",
  "Fitted at your home, work, or roadside location",
  "All tyre brands available for same-day fitting",
  "Professional fitting, wheel balancing, and new valve included",
  "Instant quote and booking confirmation over the phone",
  "Free disposal of your old tyres",
  "All work guaranteed with a full receipt provided",
]

const whatToExpect = [
  "Call us before 6pm to guarantee same-day service anywhere in the UK",
  "Choose a convenient time slot — morning, afternoon, or evening appointments available",
  "We confirm your tyre availability, exact price, and fitting location",
  "Your mobile fitter is dispatched with the correct tyres for your vehicle",
  "Professional on-site fitting with balancing, valve replacement, and safety checks",
  "Pay securely by card on completion. Drive away with perfectly fitted tyres",
]

const contentBlocks = [
  {
    heading: "Same Day Tyre Fitting At Your Convenience",
    paragraphs: [
      "Not every tyre problem is an emergency, but that does not mean you want to wait days for an appointment. Our same-day tyre fitting service is designed for customers who need their tyres replaced quickly but at a time that suits their schedule. Whether you have noticed uneven wear during a routine check, been advised to replace your tyres after an MOT, or simply want the convenience of having new tyres fitted without visiting a garage, we can help.",
      "Simply call us before 6pm and we guarantee same-day fitting anywhere in the UK. You choose the time and location — your home driveway, your office car park, or even a roadside lay-by. Our mobile fitter arrives at the scheduled time with your chosen tyres, performs a professional fitting and balancing service, and disposes of your old tyres responsibly. The whole process typically takes 30-45 minutes per tyre.",
    ],
  },
  {
    heading: "Why Same-Day Fitting Beats Garage Appointments",
    paragraphs: [
      "Traditional tyre garages require you to book an appointment days in advance, drive to their location, wait in a queue, and then drive home. For busy professionals, parents, and business owners, this is simply not practical. Our same-day mobile fitting service eliminates all of these inconveniences. There is no travel, no waiting, and no disruption to your day.",
      "The quality of our mobile fitting is identical to — and often superior to — garage fitting. Our technicians use the same professional-grade equipment, follow the same safety standards, and are trained to the same industry certifications. The only difference is that we come to you. Many of our customers who have switched from garage to mobile fitting tell us they will never go back.",
    ],
  },
  {
    heading: "Book Before 6pm For Guaranteed Same-Day Service",
    paragraphs: [
      "Our same-day guarantee is simple: call us before 6pm, and we will have a fitter at your chosen location the same day. We offer flexible appointment slots throughout the day, including early morning (7-9am), mid-morning (9-11am), lunchtime (12-2pm), afternoon (2-4pm), and evening (4-7pm) slots. This means you can have your tyres fitted before work, during your lunch break, or after you get home.",
      "Booking is quick and easy. Call us on 0800 123 4567, tell us your vehicle registration or tyre size, choose your preferred time slot, and we will handle the rest. We will send you a confirmation text with your appointment details and a reminder 30 minutes before your fitter arrives. Payment is taken on completion by card — no deposit, no upfront payment required.",
    ],
  },
]

const serviceFaqs = [
  { question: "What time do I need to book by for same-day service?", answer: "Call us before 6pm to guarantee same-day fitting. We offer appointment slots throughout the day including morning, afternoon, and evening options." },
  { question: "Do you charge extra for same-day fitting?", answer: "No. Same-day fitting is included as standard at no extra cost. The price we quote is based solely on the tyre and fitting work required, not on how quickly you need it." },
  { question: "Can I choose my appointment time?", answer: "Yes. We offer flexible time slots throughout the day including early morning (7-9am), mid-morning, lunchtime, afternoon, and evening (4-7pm) appointments. You choose what works for your schedule." },
  { question: "What if I need same-day fitting after 6pm?", answer: "If you call after 6pm, we will still do our best to accommodate you depending on fitter availability. Alternatively, our 24-hour emergency service is always available with no extra charges." },
  { question: "Do you cover my area for same-day fitting?", answer: "We cover the entire United Kingdom for same-day fitting. Major cities including London, Manchester, Birmingham, Glasgow, Leeds, Liverpool, and Bristol are fully covered with fast response times." },
  { question: "Can I have tyres fitted at my workplace?", answer: "Absolutely. Many of our customers choose to have their tyres fitted at their office car park during working hours. Our fitter arrives, performs the work, and you continue working with zero disruption." },
  { question: "What tyre brands are available same-day?", answer: "We stock all major brands including Michelin, Pirelli, Continental, Bridgestone, Goodyear, Dunlop, Hankook, Yokohama, and many more. We also carry quality mid-range and budget options. With over 70,000 tyres in stock, availability is rarely an issue." },
  { question: "How long does the fitting take?", answer: "The actual fitting process takes approximately 30-45 minutes per tyre, including removal of the old tyre, fitting the new one, balancing the wheel, and performing safety checks." },
]

const emergencyScenarios = [
  "MOT advisory requiring immediate tyre replacement",
  "Uneven tyre wear discovered during routine check",
  "Pre-holiday safety inspection reveals worn tyres",
  "New car needs a full set of tyres before a road trip",
  "Business vehicle needs tyres replaced between shifts",
  "Winter approaching — need all-season or winter tyres fitted",
]

const whyChoose = [
  { title: "Guaranteed Same-Day Service", description: "Book before 6pm and we guarantee fitting the same day. No waiting, no delays, no rescheduling. Your time is valuable and we respect that." },
  { title: "Flexible Time Slots", description: "Choose from morning, afternoon, or evening appointments. We fit around your schedule, not the other way around." },
  { title: "We Come To You", description: "Home, work, or roadside — you choose the location. No travel, no queues, no waiting rooms. We bring the garage to you." },
  { title: "Instant Booking Confirmation", description: "Call us and get an immediate quote, confirmation, and ETA. We send reminder texts so you never miss your appointment." },
  { title: "Pay On Completion", description: "No deposit, no upfront payment. Pay securely by card only after the work is done and you are completely satisfied." },
  { title: "70,000+ Tyres In Stock", description: "All major brands and sizes available for same-day fitting. Premium, mid-range, and budget options to suit every need." },
]

const relatedServices = [
  { title: 'Emergency Tyre Fitting', href: '/emergency-tyre-fitting' },
  { title: '24 Hour Tyre Fitting', href: '/24-hour-tyre-fitting' },
  { title: 'Home Tyre Fitting', href: '/home-tyre-fitting' },
  { title: 'Workplace Tyre Fitting', href: '/workplace-tyre-fitting' },
  { title: 'Mobile Tyre Replacement', href: '/mobile-tyre-replacement' },
]

export default function SameDayTyreFitting() {
  return (
    <ServicePageTemplate
      title="Same Day"
      titleHighlight="Tyre Fitting"
      description="Need tyres fitted today? Book before 6pm for guaranteed same-day mobile tyre fitting at your location. Home, work, or roadside — we come to you anywhere in the UK. Call 0800 123 4567."
      metaTitle="Same Day Tyre Fitting UK - Book Before 6pm Guaranteed"
      metaDescription="Same day mobile tyre fitting across the UK. Book before 6pm for guaranteed service today. We come to your home, work, or roadside. Call 0800 123 4567."
      heroImage="/images/step-fitting.jpg"
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
