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

const sections: Section[] = [
  {
    number: 1,
    title: 'Object and Acceptance',
    clauses: [
      {
        paragraphs: [
          `These Terms govern all sales made by the Company and form an individual contract between the Company and each Customer.`,
          `These Terms take precedence over, and supersede, any prior agreements, representations, commitments, declarations, promises, intentions, documentation, or information exchanged with the Customer regarding an order, whether written or oral.`,
          `A Customer's order is accepted once the Customer calls, messages, or otherwise contacts the Company and requests emergency tyre services. The order is treated as complete once the Customer has reviewed and confirmed all order details, including price, tyre specification, and address, and has had a reasonable opportunity to correct any errors before final confirmation is given.`,
          `These Terms are accessible via the Company's website at all times and may also be provided to the Customer in a durable format together with the acknowledgement of receipt.`,
          `The contract between the Company and the Customer is formed at the moment the Company issues its acknowledgement of receipt.`,
          `The Company retains a record of the contract for a period of ten (10) years from the date of delivery, accessible to the Customer upon reasonable request.`,
          `Once the contract is formed, the Customer is notified accordingly, and this creates a binding obligation on the Customer to pay the agreed price in favour of the Company.`,
        ],
      },
    ],
  },
  {
    number: 2,
    title: 'Products',
    clauses: [
      {
        paragraphs: [
          `The Company provides emergency mobile tyre fitting services across the UK and is committed to attending within a target window of 30 minutes to 2 hours from the time the order is placed or payment is taken. This target is an estimate only and may vary depending on the Customer's location, traffic and weather conditions, and the type of tyre requested (see the Service Timeframe section below).`,
          `The Company's tyre range includes budget, mid-range, and premium tyres. The product information confirmed at the point of order forms the contractual obligation agreed between the parties. All orders are subject to product availability as set out below.`,
        ],
      },
      {
        subheading: '2.1 Tyre Availability',
        list: [
          `All bookings are subject to the availability of the specific tyre required for the Customer's vehicle.`,
          `The Company will not fit an incorrect or unsuitable tyre to a Customer's vehicle under any circumstances, even where doing so would allow an appointment to proceed.`,
          `Where the required tyre cannot be sourced, the Company will notify the Customer as soon as reasonably possible and issue a full refund.`,
        ],
      },
      {
        subheading: '2.2 Nature of Service',
        list: [
          `The Company provides tyre replacement services only.`,
          `The Company does not carry out puncture repairs, tyre patching, sidewall repairs, wheel repairs, suspension repairs, or vehicle wheel alignment services, unless expressly agreed otherwise in writing prior to the appointment.`,
        ],
      },
    ],
  },
  {
    number: 3,
    title: 'Placing an Order',
    clauses: [
      {
        subheading: '3.1 Access to the Company’s Website',
        paragraphs: [
          `The Company's website is publicly accessible year-round, twenty-four hours a day, seven days a week. The website may occasionally be unavailable due to scheduled maintenance or technical issues beyond the Company's reasonable control, which may require additional time to resolve. Orders may be placed instantly by telephone, WhatsApp, email, or through the Company's mobile application.`,
        ],
      },
      {
        subheading: '3.2 Reviews',
        paragraphs: [
          `Customers are invited to review independent feedback and ratings published on the Company's website prior to placing an order.`,
        ],
      },
      {
        subheading: '3.3 Placing an Order',
        paragraphs: [
          `You can place an order by telephone on ${PHONE_NUMBER}, by email at ${SUPPORT_EMAIL}, or on WhatsApp at ${WHATSAPP_NUMBER}.`,
          `An order is confirmed and processed once payment has been successfully taken. A confirmation is sent to the Customer shortly after payment. When placing an order, the Customer must provide:`,
        ],
        list: [
          `Full name`,
          `Mobile number`,
          `Vehicle details (make, model, year)`,
          `Exact tyre size`,
          `Number of tyres required`,
          `Whether a wheel locking nut key is required`,
          `Postal code of the vehicle's current location`,
          `Vehicle registration number`,
          `Payment information`,
        ],
      },
      {
        paragraphs: [
          `The Company reserves the right to refuse service, or to amend its eligibility criteria, at its discretion. By placing an order, the Customer confirms that they are of legal age to enter into a binding contract, or, where placing an order on behalf of a legal entity, that they are duly authorised to bind that entity to these Terms.`,
        ],
      },
      {
        subheading: '3.4 Information Accuracy',
        paragraphs: [
          `The Customer is solely responsible for providing the Company with accurate and complete information, including but not limited to vehicle details, exact tyre size, current location, and whether a wheel locking nut key is available on-site.`,
          `Any additional costs reasonably incurred by the Company as a result of inaccurate or incomplete information supplied by the Customer may be charged to the Customer. The Company reserves the right to take appropriate action, including recovery of costs, where information is provided knowingly falsely.`,
          `Where incorrect or incomplete information results in an additional journey, additional tyre sourcing cost, or a repeat visit, the Customer shall be responsible for the associated charges, which will be communicated to the Customer prior to being applied where reasonably practicable.`,
          `Where the Customer fails to inform the Company that a wheel locking nut key is missing, the Company will assume the key is available on-site. Where the Company's fitters are required to remove or break a locking nut without the correct key, an additional charge will apply, which will be confirmed with the Customer wherever possible before the work is carried out.`,
        ],
      },
      {
        subheading: '3.5 Product Selection',
        paragraphs: [
          `It is the Customer's responsibility to specify their preferred tyre category, budget, mid-range, or premium, at the time of booking. Where no preference is specified, the Company will default to supplying a budget or mid-range tyre suitable for the Customer's vehicle.`,
        ],
      },
      {
        subheading: '3.6 Brand and Premium Requests',
        paragraphs: [
          `Where a Customer requests a specific brand or a premium tyre, this may affect both the price and the time required to source and fit the product. The Company will always confirm the applicable price with the Customer before any chargeable work begins.`,
        ],
      },
      {
        subheading: '3.7 Service Timeframe',
        list: [
          `The Company's target attendance window is 30 minutes to 2 hours from the time the order is placed or payment is taken. Arrival times are estimates only and do not form a guaranteed delivery time.`,
          `Arrival times may be affected by traffic, weather conditions, supplier delays, vehicle breakdowns, remote locations, or other circumstances beyond the Company's reasonable control.`,
          `The Company will make every reasonable effort to keep the Customer informed of any significant anticipated delay.`,
          `The maximum anticipated delay period is 5 hours from the original estimated attendance time. Where this period is expected to be exceeded, the Company will contact the Customer directly to discuss options, which may include cancellation and a full refund at the Customer's election.`,
        ],
      },
      {
        subheading: '3.8 Cancellation',
        list: [
          `Customers may cancel their booking free of charge within 5 minutes of placing the order.`,
          `Cancellations made between 5 and 25 minutes after booking will incur a cancellation fee of £100.`,
          `Cancellations made between 25 and 60 minutes after booking will incur a cancellation fee of £150.`,
          `Cancellations made after 60 minutes will incur a charge reflecting the costs already and reasonably incurred by the Company at the time of cancellation, which may include tyre sourcing costs, fitter dispatch costs, travel costs, and supplier charges. The Customer will be notified of the applicable charge at the time of cancellation.`,
          `Where the Company is unable to source the tyre required for the Customer's vehicle, a full refund will be issued regardless of when the booking is cancelled.`,
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'Financial Conditions',
    clauses: [
      {
        list: [
          `The Company accepts payment by debit or credit card, PayPal, and bank transfer.`,
          `Card payments are processed through a secure, PCI-compliant payment provider using 3D Secure authentication. Card details are never stored or accessible to the Company in an unsecured or unauthorised manner.`,
          `Card payments are debited immediately upon confirmation of the order, and this action is irrevocable. By placing an order, the Customer authorises the Company to debit the card provided for the full amount due and confirms that they are the legitimate cardholder, or are otherwise authorised to use the payment method provided.`,
          `PayPal payments are similarly protected via secure authentication protocols.`,
          `Bank transfer payments must be made to the Company's registered business bank account, quoting the relevant order number as the payment reference to ensure accurate reconciliation.`,
        ],
      },
    ],
  },
  {
    number: 5,
    title: 'Ownership of the Product',
    clauses: [
      {
        paragraphs: [
          `Ownership of the tyre or tyres transfers to the Customer upon validation of the order and completion of payment. From the point ownership transfers, which occurs once payment is taken and the product is delivered or fitted, all risk of loss, theft, or damage to the product passes to the Customer.`,
        ],
      },
    ],
  },
  {
    number: 6,
    title: 'Warranty',
    clauses: [
      {
        subheading: '6.1 Manufacturer’s Warranty',
        list: [
          `All tyres supplied by the Company are covered by the relevant tyre manufacturer's own warranty.`,
          `Any claim relating to manufacturing defects, premature wear, or product performance must be submitted directly to the tyre manufacturer in accordance with that manufacturer's published warranty terms.`,
          `The Company does not provide any separate or additional warranty on the tyre product itself beyond that provided by the manufacturer.`,
        ],
      },
      {
        subheading: '6.2 Service Complaints (Workmanship)',
        list: [
          `Any complaint relating to the fitting service or workmanship carried out by the Company must be reported to the Company within 24 hours of the service being completed.`,
          `Complaints raised after this 24-hour window may not be investigated or accepted, save where the Company determines in its reasonable discretion that exceptional circumstances apply.`,
          `Where a genuine fitting error is identified, the Company will assess the matter and take appropriate corrective action.`,
          `Any goodwill contribution, replacement, or remedy offered by the Company in connection with a service complaint is offered entirely at the Company's discretion and shall not constitute an admission of liability.`,
        ],
      },
    ],
  },
  {
    number: 7,
    title: 'Wheel & Vehicle Safety',
    clauses: [
      {
        list: [
          `The Company reserves the right to refuse to carry out fitting where a wheel is found to be cracked, damaged, or otherwise unsafe. In such circumstances, the Customer remains responsible for the applicable call-out fee and any other charges already incurred.`,
          `Where fitting cannot be completed due to damage to, or an unsafe condition of, the wheel or vehicle, the tyre already sourced will be provided to the Customer so that fitting can be completed at a suitable garage once the underlying issue has been resolved. No refund will be issued for the tyre or for any charges already incurred in such circumstances.`,
          `The Company shall not be liable for pre-existing wheel damage, corrosion, cosmetic defects, or faults present prior to the commencement of work, nor for minor cosmetic marks or scratches to the wheel rim that may reasonably occur in the ordinary course of the tyre fitting process.`,
        ],
      },
    ],
  },
  {
    number: 8,
    title: 'Motorway Services',
    clauses: [
      {
        list: [
          `Wheel balancing services are not carried out on motorway hard shoulders, motorway service areas, or any other location where balancing equipment cannot be safely operated.`,
          `Where balancing cannot be safely completed at the roadside, the Customer will be advised to have the wheel balanced at a suitable location once it is safe to do so. The Company shall not be liable for any inconvenience, cost, or delay arising from this restriction.`,
        ],
      },
    ],
  },
  {
    number: 9,
    title: 'Limitation of Liability',
    clauses: [
      {
        list: [
          `Where a party fails to fulfil its obligations under this contract, and that failure is not considered final, the affected party will only be entitled to claim damages if it has first given the defaulting party notice of the failure and a reasonable opportunity to remedy it.`,
          `A party responsible for a failure to perform, or for delay, may be liable for resulting damages unless it can demonstrate that the failure or delay was caused by circumstances beyond its reasonable control.`,
          `Liability is limited to losses that were reasonably foreseeable at the time the contract was formed, except in cases of gross negligence or fraud. Even in such cases, liability is limited to the direct and immediate losses arising from the failure to perform.`,
          `Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability which cannot lawfully be excluded or limited under the laws of England and Wales.`,
          `Nothing in these Terms affects the Customer's statutory rights under the Consumer Rights Act 2015 or any other applicable consumer protection legislation.`,
        ],
      },
    ],
  },
  {
    number: 10,
    title: 'Force Majeure',
    clauses: [
      {
        list: [
          `Where a force majeure event creates a permanent obstacle to performance for either party, the contract will terminate automatically, and both parties will be released from their obligations under it.`,
          `Where a force majeure event creates a temporary obstacle, performance of the affected obligation will be suspended unless the resulting delay is significant enough to justify termination of the contract by either party.`,
          `Where a party is unable to fulfil a contractual obligation due to force majeure, it will be released from liability to the extent that the obstacle is caused by that event, provided it has not otherwise agreed to bear that risk or been given prior notice to perform.`,
        ],
      },
    ],
  },
  {
    number: 11,
    title: 'Complaints and Dispute Resolution',
    clauses: [
      {
        paragraphs: [
          `Any complaint regarding these Terms or the services provided should, in the first instance, be raised directly with the Company using the contact details set out above. The Company will make reasonable efforts to resolve any complaint promptly and fairly.`,
        ],
      },
    ],
  },
  {
    number: 12,
    title: 'Governing Law and Jurisdiction',
    clauses: [
      {
        paragraphs: [
          `These Terms are governed by, and construed in accordance with, the laws of England and Wales. Any disputes arising out of, or in connection with, these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
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
          <div className="mb-10 space-y-4 text-base leading-relaxed text-[#6a6a6a]">
            <p>
              {COMPANY_LEGAL_NAME} ("we", "us", "our", the "Company") is a UK-based company providing emergency mobile tyre fitting services throughout the United Kingdom via{' '}
              <a href={SITE_URL} className="font-semibold text-[#d92a1d] hover:text-[#b82418]">{SITE_URL.replace('https://', '')}</a>. We are registered with{' '}
              <a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">Companies House</a>{' '}
              under number {COMPANY_NUMBER}, and under the Companies Act 2006 as a private limited company, with our registered office at {REGISTERED_OFFICE}.
            </p>
            <p>
              These general terms of sale (the "Terms") govern all transactions for the sale of products and services to any customer, whether a natural or legal person, and whether acting in a professional or personal capacity (the "Customer"), where an order is placed by telephone, email, message, our mobile application, or via our website. These Terms establish the binding contractual framework between the Customer and the Company. By placing an order, the Customer confirms that they have read, understood, and agree to be bound by these Terms.
            </p>
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
