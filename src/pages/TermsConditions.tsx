import { Link } from 'react-router-dom'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  REGISTERED_OFFICE,
  SUPPORT_EMAIL,
} from '../lib/config'

interface Clause {
  subheading?: string
  paragraphs?: string[]
  list?: string[]
}

interface Section {
  number: number
  title: string
  clauses: Clause[]
}

const LAST_UPDATED = 'September 2026'

// Prominent key points shown at the top of the page. UK unfair-terms law
// (Consumer Rights Act 2015 s.68; CMA37 guidance Ch 4) requires onerous or
// surprising terms to be flagged clearly, not buried in the small print.
const keyPoints: string[] = [
  `You have a legal right to cancel within 14 days. Because our service is usually urgent, you can ask us to start straight away; if you do and then cancel, you pay only for the work done and costs we have actually incurred (see section 5).`,
  `Cancellation charges reflect the stage reached: nothing before we incur any cost; £50 once your tyre is sourced; £150 once a fitter is on the way; the full call-out fee plus the tyre cost once a fitter has arrived.`,
  `A call-out fee applies to some jobs. The standard call-out fee is £120, and it can be higher for remote locations. We confirm the exact fee with you when you book, before you commit.`,
  `If a tyre we supply is faulty, you have rights against us under the Consumer Rights Act 2015. If we damage your wheel or vehicle through our own fault, we will put it right — please tell us as soon as possible, ideally within 24 hours.`,
  `Nothing in these Terms removes your statutory rights.`,
]

const sections: Section[] = [
  {
    number: 1,
    title: 'Definitions',
    clauses: [
      {
        list: [
          `"Company", "we", "us", "our" means ${COMPANY_LEGAL_NAME}, company number ${COMPANY_NUMBER}, registered office ${REGISTERED_OFFICE}.`,
          `"You", "your", the "Customer" means the person or business placing an order with us.`,
          `"Consumer" means an individual acting wholly or mainly outside their trade, business, craft or profession, as defined in the Consumer Rights Act 2015. Consumers have additional legal protections, which are described in these Terms.`,
          `"Business customer" means a customer who is not a consumer, for example a company, sole trader or fleet operator ordering for business purposes. Section 18 sets out the terms that apply specifically to business customers.`,
          `"Durable medium" means a format (such as email) in which we can give you information that you can keep and reproduce unchanged.`,
          `"These Terms" means these terms and conditions, as updated from time to time in accordance with section 15.`,
        ],
      },
    ],
  },
  {
    number: 2,
    title: 'Scope and Formation of the Contract',
    clauses: [
      {
        paragraphs: [
          `These Terms apply to every order you place with us and form the contract between you and the Company. They do not affect anything we tell you or confirm to you about your specific order (for example the price, the tyre specification, or the estimated arrival time) before you place it. You can rely on that information, and under the Consumer Rights Act 2015 it forms part of your contract.`,
          `You can place an order by telephone, WhatsApp, email, our mobile application, or our website. Before you confirm your order, you will have the opportunity to check and correct the order details, including the price, the tyre specification and the address.`,
          `Your order is accepted, and a legally binding contract is formed, when we confirm your order after payment has been taken. We will send you confirmation of your order on a durable medium (for example by email or message).`,
          `We keep a record of your contract for as long as we reasonably need it to provide the service and to meet our legal, accounting and tax obligations, normally six years, and we handle your information in line with our Privacy Policy.`,
        ],
      },
    ],
  },
  {
    number: 3,
    title: 'Our Services and Products',
    clauses: [
      {
        paragraphs: [
          `We provide emergency mobile tyre fitting across the UK. We aim to attend within a target window of 30 minutes to 2 hours from the time your order is placed or payment is taken. This is an estimate only and may vary with your location, traffic, weather and the tyre required (see section 4.7). It does not limit your legal right to have the service carried out within a reasonable time.`,
          `We provide tyre replacement only. We do not carry out puncture repairs, tyre patching, sidewall repairs, wheel repairs, suspension repairs, or wheel alignment, unless we agree otherwise in writing before the appointment.`,
          `Our tyre range includes budget, mid-range and premium tyres. The tyre and price confirmed when you order form part of your contract.`,
        ],
      },
      {
        subheading: '3.1 Tyre availability',
        list: [
          `All bookings are subject to the availability of the specific tyre required for your vehicle.`,
          `We will not fit an incorrect or unsuitable tyre to your vehicle under any circumstances, even where doing so would allow an appointment to go ahead. This is for your safety and to keep your vehicle road-legal.`,
          `Where we cannot source the tyre required, we will tell you as soon as reasonably possible and give you a full refund.`,
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'Placing an Order',
    clauses: [
      {
        subheading: '4.1 How to order',
        paragraphs: [
          `You can order by telephone on ${PHONE_NUMBER}, by email at ${SUPPORT_EMAIL}, or on WhatsApp at ${WHATSAPP_NUMBER}. Our website is normally available 24 hours a day, though it may occasionally be unavailable for maintenance or for reasons outside our reasonable control.`,
          `When you order, please provide: your full name; a mobile number; your vehicle details (make, model, year); the exact tyre size; the number of tyres required; whether a locking wheel-nut key is available; the postcode of the vehicle's current location; the vehicle registration; and payment information.`,
        ],
      },
      {
        subheading: '4.2 Reviews',
        paragraphs: [
          `You are welcome to read customer feedback and ratings on our website before ordering. All reviews we display are from genuine customers; we do not publish fake reviews or undisclosed incentivised reviews.`,
        ],
      },
      {
        subheading: '4.3 Who can order',
        paragraphs: [
          `By placing an order you confirm that you are old enough to enter into a binding contract and, if ordering for a business, that you are authorised to bind that business. We may decline an order where we reasonably cannot carry out the work safely or lawfully, where the required tyre cannot be sourced, or where we otherwise have reasonable grounds to do so. We will never refuse service on any ground prohibited by the Equality Act 2010. Where we decline before work begins, you will not be charged and any payment taken will be refunded.`,
        ],
      },
      {
        subheading: '4.4 Accurate information and extra costs',
        paragraphs: [
          `You are responsible for giving us accurate and complete information, including your vehicle details, the exact tyre size, your location, and whether a locking wheel-nut key is available on site.`,
          `If inaccurate or incomplete information means we reasonably incur extra cost (for example a wasted journey, re-sourcing a tyre, or a return visit), we may charge you the reasonable cost we actually incur. We will tell you the amount and get your agreement before applying any such charge.`,
          `If you do not tell us that a locking wheel-nut key is missing, we will assume it is available on site. If we then have to remove the nut without the correct key, an additional charge applies, which we will confirm with you before carrying out that work.`,
        ],
      },
      {
        subheading: '4.5 Choosing your tyre',
        paragraphs: [
          `Please tell us your preferred tyre category (budget, mid-range or premium) when you book. If you do not state a preference, we will supply a budget or mid-range tyre suitable for your vehicle.`,
        ],
      },
      {
        subheading: '4.6 Brand and premium requests',
        paragraphs: [
          `If you ask for a specific brand or a premium tyre, this may affect both the price and the time needed to source and fit it. We will always confirm the price with you before any chargeable work begins.`,
        ],
      },
      {
        subheading: '4.7 Arrival times',
        list: [
          `Our target attendance window is 30 minutes to 2 hours from the time your order is placed or payment is taken. Arrival times are estimates only and are not a guaranteed delivery time.`,
          `Arrival times may be affected by traffic, weather, supplier delays, breakdowns, remote locations, or other circumstances beyond our reasonable control.`,
          `We will make every reasonable effort to keep you informed of any significant delay.`,
          `If a delay is expected to exceed 5 hours from the original estimated arrival time, we will contact you to discuss your options, which include cancelling for a full refund.`,
          `Where a delay is caused by us or something within our control, this section does not exclude our responsibility to you.`,
        ],
      },
    ],
  },
  {
    number: 5,
    title: 'Your Right to Cancel, and Cancellation Charges',
    clauses: [
      {
        subheading: '5.1 Your 14-day right to cancel (consumers)',
        paragraphs: [
          `Because you order at a distance (by phone, message, app or website), you normally have a legal right to cancel within 14 days under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, without giving a reason.`,
          `Our service is usually urgent, so you can ask us to begin within the 14-day period. By asking us to carry out the work straight away, you agree that we may start before the 14 days end, and you acknowledge that once the work is fully complete you will no longer have the right to cancel it. If you cancel after asking us to start but before the work is complete, you pay only for the work done and the costs we have actually and reasonably incurred up to that point.`,
          `To cancel, contact us on ${PHONE_NUMBER}, at ${SUPPORT_EMAIL}, or on WhatsApp at ${WHATSAPP_NUMBER}. Any refund due is paid using the same payment method you used, without undue delay.`,
        ],
      },
      {
        subheading: '5.2 Cancellation charges',
        paragraphs: [
          `We do not charge fixed cancellation penalties. Any charge reflects only the stage reached and the costs we have actually and reasonably incurred:`,
        ],
        list: [
          `Before we have sourced your tyre or assigned a fitter, there is no charge.`,
          `After we have sourced your tyre and booked the job, but before a fitter has been dispatched, a charge of £50 applies, covering tyre sourcing and booking costs.`,
          `After a fitter has been dispatched and is on the way, a charge of £150 applies, covering travel already under way and the tyre sourced for you.`,
          `After a fitter has arrived at your location, the full call-out fee (standard £120, or the higher amount confirmed at booking for a remote location) applies, together with the cost of the tyre, which we will give to you so it can be fitted elsewhere.`,
          `If we cannot source the correct tyre for your vehicle, you receive a full refund, whenever you cancel.`,
        ],
      },
      {
        subheading: '5.3 Call-out fee',
        paragraphs: [
          `A call-out fee applies to some jobs. The standard call-out fee is £120. For remote or distant locations the call-out fee may be higher. We will confirm the exact call-out fee that applies to your job when you book, before you commit, so you always know it in advance.`,
        ],
      },
    ],
  },
  {
    number: 6,
    title: 'Your Statutory Rights',
    clauses: [
      {
        paragraphs: [
          `Nothing in these Terms affects the legal rights you have as a consumer. In particular, under the Consumer Rights Act 2015:`,
        ],
        list: [
          `the tyres we supply must be of satisfactory quality, fit for their purpose, and as described;`,
          `our fitting service must be carried out with reasonable care and skill, and within a reasonable time;`,
          `if we breach these rights, you may be entitled to a remedy such as repeat performance, repair or replacement, a price reduction, or a refund, depending on the circumstances.`,
        ],
      },
      {
        paragraphs: [
          `These rights cannot be excluded or restricted by these Terms. For more information about your rights, contact Citizens Advice or visit gov.uk.`,
        ],
      },
    ],
  },
  {
    number: 7,
    title: 'Prices and Payment',
    clauses: [
      {
        list: [
          `We accept payment by debit or credit card, PayPal, and bank transfer.`,
          `Card payments are processed through a secure, PCI-compliant provider using 3D Secure authentication. We do not store your card details in an unsecured or unauthorised way.`,
          `We take payment when your order is confirmed. Taking payment does not affect your statutory rights to a refund, including the cancellation rights described in section 5.`,
          `By ordering, you confirm you are the legitimate cardholder or are otherwise authorised to use the payment method, and you authorise us to take payment for the amount due.`,
          `Bank transfers must be made to our registered business bank account, quoting your order number as the reference.`,
        ],
      },
    ],
  },
  {
    number: 8,
    title: 'Ownership and Risk',
    clauses: [
      {
        paragraphs: [
          `For consumers, the tyres remain at our risk until they are fitted to your vehicle or otherwise handed to you, in line with section 29 of the Consumer Rights Act 2015. Ownership passes to you once the tyres are fitted or handed over and payment has been made.`,
          `For business customers, risk and ownership pass on delivery or fitting, in accordance with the Sale of Goods Act 1979.`,
        ],
      },
    ],
  },
  {
    number: 9,
    title: 'Faulty Tyres and Warranty',
    clauses: [
      {
        paragraphs: [
          `The tyres we supply must be of satisfactory quality, fit for purpose and as described. If a tyre we supplied is faulty, you have rights against us as the seller under the Consumer Rights Act 2015, which may include repair, replacement, a price reduction or a refund, depending on the circumstances.`,
          `Tyres also come with the manufacturer's own warranty, which can offer additional cover (for example for road hazards or a longer period). This warranty is in addition to, and does not replace, your rights against us. You may choose to claim under the manufacturer's warranty, but you do not have to, and doing so does not affect your rights against us.`,
          `We are not responsible for normal wear, for punctures or other road damage, or for damage caused after fitting (for example by kerbing, impact, or incorrect tyre pressure), as these are not faults in the tyre as supplied.`,
        ],
      },
    ],
  },
  {
    number: 10,
    title: 'Our Workmanship, and Damage to Your Wheel or Vehicle',
    clauses: [
      {
        subheading: '10.1 Problems with our workmanship',
        paragraphs: [
          `If you think there is a problem with our fitting or workmanship, please tell us as soon as reasonably practicable after you notice it, so we can put it right quickly. Reporting promptly helps us resolve the issue, but it does not affect the statutory time limits for bringing a claim. Where we are responsible for a fitting error, we will provide an appropriate remedy under the Consumer Rights Act 2015. Any goodwill gesture we may offer does not reduce your statutory rights.`,
        ],
      },
      {
        subheading: '10.2 Damage to your wheel or vehicle',
        paragraphs: [
          `If we damage your wheel or vehicle because we failed to use reasonable care and skill, we are responsible for putting that right. Please check your wheels straight after fitting and tell us about any damage as soon as possible, and ideally within 24 hours, so we can verify and resolve it quickly.`,
          `The sooner you report damage, the easier it is for us to establish that it happened during our work. If damage is reported later, it may be harder to show that it was caused by us rather than by later use, and we may reasonably ask you for evidence.`,
          `We are not responsible for pre-existing damage, corrosion, cosmetic defects or wear that was present before we started work. Nothing in this section limits our liability for death or personal injury caused by our negligence.`,
        ],
      },
    ],
  },
  {
    number: 11,
    title: 'Wheel and Vehicle Safety',
    clauses: [
      {
        list: [
          `We may refuse to carry out fitting where a wheel is cracked, damaged, or otherwise unsafe. Where we have told you about the call-out fee in advance, that fee remains payable, together with any other costs you agreed.`,
          `If we cannot safely complete fitting because of a fault with, or an unsafe condition of, your wheel or vehicle, we will give you the tyre we have sourced so it can be fitted at a suitable garage once the issue is resolved. Because you receive the tyre, it is not refundable in these circumstances.`,
          `We remain responsible for any damage caused by our own failure to use reasonable care and skill (see section 10). We are not responsible for pre-existing wheel damage, corrosion or wear present before we began work.`,
        ],
      },
    ],
  },
  {
    number: 12,
    title: 'Roadside and Motorway Limitations',
    clauses: [
      {
        list: [
          `For safety reasons, we cannot balance wheels on motorway hard shoulders, in motorway service areas, or anywhere balancing equipment cannot be operated safely.`,
          `Where balancing cannot be safely completed at the roadside, we will advise you to have the wheel balanced at a safe location as soon as possible. This restriction exists for your safety and for reasons beyond our control, and does not exclude any liability arising from our own failure to use reasonable care and skill.`,
        ],
      },
    ],
  },
  {
    number: 13,
    title: 'Our Responsibility to You',
    clauses: [
      {
        paragraphs: [
          `If we fail to meet our obligations, we are responsible for loss or damage you suffer that is a foreseeable result of our breach or of our failing to use reasonable care and skill. Loss is foreseeable if it is an obvious consequence of our breach, or if it was contemplated by you and us when the contract was formed.`,
          `We do not exclude or limit our liability in any way where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, and for breach of your statutory rights under the Consumer Rights Act 2015.`,
          `We are not liable for loss or damage that is not foreseeable, or that is caused by events beyond our reasonable control (see section 14). Nothing in these Terms affects your statutory rights. Business customers should also read section 18.`,
        ],
      },
    ],
  },
  {
    number: 14,
    title: 'Events Beyond Our Control',
    clauses: [
      {
        paragraphs: [
          `Sometimes we may be prevented from, or delayed in, providing the service by events beyond our reasonable control, for example severe weather, accidents, road closures, civil emergencies, or failures of utilities or networks. These do not include matters within our control, such as our own staffing or equipment.`,
          `If such an event happens, we will contact you as soon as we can and agree a new time. If the delay is significant, you may cancel and receive a full refund for any work not yet done. We will not be liable for delays or failures caused by such events, but this does not affect your statutory rights.`,
        ],
      },
    ],
  },
  {
    number: 15,
    title: 'Changes to These Terms',
    clauses: [
      {
        paragraphs: [
          `We may change these Terms where we have a valid reason, for example to reflect changes in the law or regulation, or to reflect changes in how we provide our service. The Terms that apply to your order are those in force when you place that order.`,
          `We will publish any updated Terms on our website with a new "last updated" date. If we make a change that would significantly disadvantage you under an ongoing arrangement, we will give you reasonable notice and you may end that arrangement without penalty if you do not accept the change.`,
        ],
      },
    ],
  },
  {
    number: 16,
    title: 'Complaints and Dispute Resolution',
    clauses: [
      {
        paragraphs: [
          `If you are unhappy with our service, please contact us first on ${PHONE_NUMBER} or at ${SUPPORT_EMAIL}. We aim to acknowledge complaints within 5 working days and to resolve them promptly and fairly.`,
          `Alternative Dispute Resolution (ADR): we are not currently members of, and do not use, an ADR scheme. If we cannot resolve your complaint, you can obtain free, independent advice from Citizens Advice. Using our complaints process does not affect your right to take a claim to court.`,
        ],
      },
    ],
  },
  {
    number: 17,
    title: 'Your Privacy and Data',
    clauses: [
      {
        paragraphs: [
          `We handle your personal information in accordance with the UK GDPR and the Data Protection Act 2018, and any marketing in accordance with the Privacy and Electronic Communications Regulations. We only use your information as described in our Privacy Policy, which explains what we collect, why, and your rights over your data. Payment information is processed securely by our payment provider.`,
        ],
      },
    ],
  },
  {
    number: 18,
    title: 'Business and Fleet Customers',
    clauses: [
      {
        paragraphs: [
          `This section applies where you order as a business customer rather than as a consumer. Where it conflicts with other sections, this section prevails for business customers.`,
        ],
        list: [
          `The consumer protections in these Terms, including the 14-day cancellation right in section 5.1 and the consumer rights summarised in section 6, do not apply to business customers. Cancellation charges for business customers are those set out in section 5.2.`,
          `Our total liability to a business customer arising out of or in connection with a contract, whether in contract, tort (including negligence) or otherwise, is limited to the price paid for the order concerned. We are not liable to business customers for loss of profit, loss of business, or any indirect or consequential loss. Nothing limits our liability for death or personal injury caused by our negligence, for fraud, or for anything that cannot lawfully be limited.`,
          `Approved fleet and business accounts may be offered 30-day credit terms. We may charge interest on overdue invoices under the Late Payment of Commercial Debts (Interest) Act 1998.`,
          `Business customers confirm they are not acting as a consumer and that they are authorised to bind their organisation to these Terms.`,
        ],
      },
    ],
  },
  {
    number: 19,
    title: 'General',
    clauses: [
      {
        list: [
          `Each of these Terms operates separately. If any court or authority decides that any of them is unlawful or unfair, the remaining Terms will remain in full force and effect.`,
          `These Terms are between you and us. No other person has any right to enforce any of them under the Contracts (Rights of Third Parties) Act 1999.`,
          `We may transfer our rights and obligations under a contract to another organisation, but this will not reduce your rights under these Terms; where it would, we will tell you and you may cancel and receive a refund for any work not yet done. You may transfer your rights to another person only with our written agreement.`,
          `These Terms, together with the order details and any information we confirm to you before you order, make up the whole agreement between us. This does not exclude any representation we have made to you that you relied on when ordering.`,
          `The contract and all communications between us will be in English.`,
        ],
      },
    ],
  },
  {
    number: 20,
    title: 'Governing Law and Jurisdiction',
    clauses: [
      {
        paragraphs: [
          `These Terms are governed by the law of England and Wales. If you are a consumer, this does not deprive you of the protection of the consumer-protection law of the part of the UK where you live.`,
          `If you are a consumer, you can bring court proceedings about these Terms in the courts of the part of the UK where you live; if you live in a different part of the UK from where the Company is based, you may instead choose to bring proceedings in the courts where the Company is based. For business customers, the courts of England and Wales have exclusive jurisdiction.`,
        ],
      },
    ],
  },
]

export default function TermsConditions() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms and Conditions',
    url: `${SITE_URL}/terms-and-conditions`,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  }

  return (
    <>
      <SEOHead
        title="Terms and Conditions"
        description={`The terms and conditions governing sales of tyres and mobile tyre fitting services by ${COMPANY_LEGAL_NAME}.`}
        schema={schema}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Terms and Conditions', url: '/terms-and-conditions' }]}
      />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Terms and Conditions</span>
          </nav>

          <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
            Terms &amp; <span className="text-[#d92a1d]">Conditions</span>
          </h1>
          <p className="mb-8 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>Last updated: {LAST_UPDATED}</p>

          {/* Intro */}
          <div className="mb-8 space-y-4 text-base leading-relaxed text-[#6a6a6a]">
            <p>
              {COMPANY_LEGAL_NAME} ("we", "us", "our", the "Company") is a UK-based company providing emergency mobile tyre fitting services throughout the United Kingdom via{' '}
              <a href={SITE_URL} className="font-semibold text-[#d92a1d] hover:text-[#b82418]">{SITE_URL.replace('https://', '')}</a>. We are registered with{' '}
              <a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">Companies House</a>{' '}
              under number {COMPANY_NUMBER}, and under the Companies Act 2006 as a private limited company, with our registered office at {REGISTERED_OFFICE}.
            </p>
            <p>
              These terms of sale (the "Terms") govern the sale of our products and services to any customer, whether a consumer or a business (the "Customer"), where an order is placed by telephone, email, message, our mobile application, or our website. Before you place an order, we will draw the key terms below to your attention. By placing an order, you agree to these Terms, which are available to read in full at any time on our website.
            </p>
          </div>

          {/* Key points (prominence for onerous/important terms) */}
          <div className="mb-10 rounded-xl border border-[#d92a1d]/30 bg-[#d92a1d]/5 p-6">
            <h2 className="mb-3 text-base font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Key points at a glance</h2>
            <ul className="space-y-2">
              {keyPoints.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#1a1a1a]">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d92a1d]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[#6a6a6a]">This summary highlights important terms. It does not replace the full Terms below.</p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.number}>
                <h2 className="mb-4 text-xl font-bold text-[#1a1a1a] sm:text-2xl" style={{ fontFamily: 'Space Grotesk' }}>
                  <span className="text-[#d92a1d]">{section.number}.</span> {section.title}
                </h2>
                <div className="space-y-5">
                  {section.clauses.map((clause, i) => (
                    <div key={i}>
                      {clause.subheading && (
                        <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{clause.subheading}</h3>
                      )}
                      {clause.paragraphs?.map((p, j) => (
                        <p key={j} className="mb-3 text-base leading-relaxed text-[#6a6a6a]">{p}</p>
                      ))}
                      {clause.list && (
                        <ul className="mb-3 space-y-2">
                          {clause.list.map((item, k) => (
                            <li key={k} className="flex gap-3 text-base leading-relaxed text-[#6a6a6a]">
                              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#d92a1d]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="mb-2 text-lg font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Questions about these terms?</h2>
            <p className="text-base leading-relaxed text-[#6a6a6a]">
              If you have any questions about these Terms, please{' '}
              <Link to="/contact" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">contact us</Link>, call {PHONE_NUMBER}, or email{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-[#d92a1d] hover:text-[#b82418]">{SUPPORT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
