import { Link } from 'react-router-dom'
import SEOHead, { SITE_URL, SITE_NAME } from '../components/SEOHead'
import {
  PHONE_NUMBER,
  SUPPORT_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_NUMBER,
  REGISTERED_OFFICE,
} from '../lib/config'

interface Clause {
  heading?: string
  paragraphs?: string[]
  list?: string[]
}

interface Section {
  number: number
  title: string
  clauses: Clause[]
}

const sections: Section[] = [
  {
    number: 1,
    title: 'Who We Are',
    clauses: [
      {
        paragraphs: [
          `${COMPANY_LEGAL_NAME} ("we", "us", or "our") is a UK-based private limited company registered at Companies House under number ${COMPANY_NUMBER}, with our registered office at ${REGISTERED_OFFICE}. We operate the website ${SITE_URL.replace('https://', '')} and provide 24/7 emergency mobile tyre fitting services across the United Kingdom.`,
          `For any questions about this privacy policy, you can contact us by email at ${SUPPORT_EMAIL} or by calling ${PHONE_NUMBER}.`,
        ],
      },
    ],
  },
  {
    number: 2,
    title: 'What This Policy Covers',
    clauses: [
      {
        paragraphs: [
          'This privacy policy explains how we collect, use, store, and protect your personal data when you use our website, call or message us to request a tyre fitting, or otherwise interact with our services. It applies to all visitors, customers, and business clients.',
          'We are committed to protecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and any other applicable UK data protection laws. This policy should be read alongside our Cookie Policy, which explains how we use cookies and similar tracking technologies.',
        ],
      },
    ],
  },
  {
    number: 3,
    title: 'Data We Collect',
    clauses: [
      {
        heading: '3.1 Information you give us directly',
        paragraphs: [
          'When you contact us to request a mobile tyre fitting, we collect the following personal data to provide our service:',
        ],
        list: [
          'Full name',
          'Mobile phone number and, where provided, a landline number',
          'Email address (if you contact us by email or provide one for correspondence)',
          'Vehicle make, model, year, and registration number',
          'Tyre size and quantity required',
          'Your current location or postcode where the fitting is needed',
          'Payment card details (processed securely through our payment provider; we do not store full card numbers)',
          'Any special instructions or accessibility requirements you communicate to us',
        ],
      },
      {
        heading: '3.2 Information collected automatically',
        paragraphs: [
          'When you visit our website, certain information is collected automatically through cookies and similar technologies, but only if you have given consent. This includes:',
        ],
        list: [
          'IP address and approximate geographic location (country/city level)',
          'Browser type and version, operating system, and device type',
          'Pages visited, time spent on each page, and navigation path through the site',
          'Referral source (how you found our website, including search engine queries)',
          'Click patterns and interactions with page elements such as phone buttons and forms',
        ],
      },
      {
        heading: '3.3 Information from third parties',
        paragraphs: [
          'We may receive information about you from third-party services, including Google Analytics and Google Ads, but only after you have given your consent through our cookie banner. We do not purchase personal data from data brokers or third-party marketing lists.',
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'How We Use Your Data',
    clauses: [
      {
        paragraphs: [
          'We process your personal data only for the purposes described below, or where otherwise permitted by law:',
        ],
        list: [
          'To provide and fulfil your mobile tyre fitting service, including dispatching a fitter to your location.',
          'To communicate with you about your booking, including confirmation, ETA updates, and post-service follow-up.',
          'To process payment securely through our PCI DSS-compliant payment provider.',
          'To improve our website, services, and customer experience by analysing anonymised usage data (with your consent).',
          'To measure the effectiveness of our advertising campaigns through Google Ads (with your consent).',
          'To comply with legal obligations, including record-keeping for tax and warranty purposes.',
          'To detect, prevent, and respond to fraud, safety issues, or technical problems.',
          'To communicate with fleet and business account customers regarding their ongoing service agreements.',
        ],
      },
      {
        paragraphs: [
          'Our lawful bases for processing your data under UK GDPR are: (a) performance of a contract to provide you with tyre fitting services, (b) legitimate business interests such as improving our services and preventing fraud, (c) consent where you have opted in to analytics or advertising cookies, and (d) compliance with legal obligations.',
        ],
      },
    ],
  },
  {
    number: 5,
    title: 'Who We Share Your Data With',
    clauses: [
      {
        paragraphs: [
          'We do not sell, rent, or trade your personal data to third parties. We may share your data only in the following circumstances:',
        ],
        list: [
          'Our mobile fitters and dispatch team, who need your name, phone number, location, and vehicle details to carry out the service.',
          'Our payment processor, which handles card transactions securely in compliance with PCI DSS standards. We do not store full card details on our systems.',
          'Google, if you have consented to analytics or advertising cookies, through Google Analytics and Google Ads. Google processes data under its own privacy policy.',
          'Professional advisors such as lawyers, accountants, or insurers where required for our legitimate business interests or legal compliance.',
          'UK law enforcement or regulatory authorities if required by law or to protect our legal rights.',
        ],
      },
    ],
  },
  {
    number: 6,
    title: 'Data Retention',
    clauses: [
      {
        paragraphs: [
          'We keep your personal data only for as long as necessary to fulfil the purposes for which it was collected. Specifically:',
        ],
        list: [
          'Transaction records (name, service details, payment) are retained for six years from the date of service, in line with HMRC requirements for tax and accounting purposes.',
          'Contact details (phone number, email) are retained for two years from the date of your last interaction with us, after which they are deleted unless you have an active fleet account.',
          'Fleet and business account data is retained for the duration of the contractual relationship and for six years afterwards.',
          'Website analytics data collected via Google Analytics is retained for 14 months in aggregate, anonymised form, in line with Google default settings.',
        ],
      },
      {
        paragraphs: [
          'When your data is no longer needed, it is securely deleted or anonymised. You can request earlier deletion at any time by contacting us (see Section 10).',
        ],
      },
    ],
  },
  {
    number: 7,
    title: 'Data Security',
    clauses: [
      {
        paragraphs: [
          'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include encrypted data transmission (TLS/HTTPS), secure payment processing through PCI DSS-compliant providers, access controls limiting who can view customer data, and regular review of our security practices.',
          'Despite our best efforts, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee the absolute security of your data, but we are committed to maintaining industry-standard protections and will notify you promptly if a data breach occurs that affects your personal information.',
        ],
      },
    ],
  },
  {
    number: 8,
    title: 'Your Rights Under UK GDPR',
    clauses: [
      {
        paragraphs: [
          'Under the UK General Data Protection Regulation, you have the following rights regarding your personal data. We will respond to any request within 30 days, free of charge:',
        ],
        list: [
          'Right of access: You can ask us for a copy of the personal data we hold about you.',
          'Right to rectification: You can ask us to correct any inaccurate or incomplete personal data.',
          'Right to erasure: You can ask us to delete your personal data, subject to certain legal exceptions such as tax record-keeping obligations.',
          'Right to restriction of processing: You can ask us to limit how we use your data in certain circumstances.',
          'Right to data portability: You can ask us to transfer your data to another service provider in a machine-readable format.',
          'Right to object: You can object to our processing of your data based on legitimate interests or for direct marketing purposes.',
          'Rights related to automated decision-making: You have the right not to be subject to decisions based solely on automated processing, including profiling, that produce legal or similarly significant effects.',
        ],
      },
      {
        paragraphs: [
          'To exercise any of these rights, please contact us at the details provided in Section 1. We may need to verify your identity before fulfilling your request. If you are unsatisfied with our response, you have the right to lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk.',
        ],
      },
    ],
  },
  {
    number: 9,
    title: 'Cookies and Tracking Technologies',
    clauses: [
      {
        paragraphs: [
          'Our website uses cookies and similar technologies. Some cookies are strictly necessary for the site to function (for example, remembering your cookie consent preferences). Analytics and advertising cookies are only activated after you give explicit consent through our cookie banner.',
          'For full details on the cookies we use, how to manage them, and how to withdraw consent at any time, please read our Cookie Policy. You can access it from the footer of any page or by contacting us directly.',
        ],
      },
    ],
  },
  {
    number: 10,
    title: 'Third-Party Links',
    clauses: [
      {
        paragraphs: [
          'Our website may contain links to third-party websites, including tyre manufacturer websites, payment providers, or review platforms. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policy of any website you visit through links on our site. This privacy policy only applies to data collected on our own website and through our direct services.',
        ],
      },
    ],
  },
  {
    number: 11,
    title: 'Children\'s Privacy',
    clauses: [
      {
        paragraphs: [
          'Our services are directed at adults who hold a valid driving licence and own or operate a motor vehicle. We do not knowingly collect personal data from children under the age of 16. If we become aware that we have inadvertently collected data from a child under 16, we will take steps to delete that information as quickly as possible. If you believe a child has provided us with personal data, please contact us immediately.',
        ],
      },
    ],
  },
  {
    number: 12,
    title: 'Changes to This Policy',
    clauses: [
      {
        paragraphs: [
          'We may update this privacy policy from time to time to reflect changes in our practices, legal requirements, or the services we offer. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify you through our website or by email. We encourage you to review this policy periodically to stay informed about how we protect your data.',
          'Your continued use of our website or services after any changes to this policy constitutes your acceptance of the updated terms.',
        ],
      },
    ],
  },
]

export default function PrivacyPolicy() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy',
    url: `${SITE_URL}/privacy-policy`,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  }

  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description={`How ${COMPANY_LEGAL_NAME} collects, uses, and protects your personal data in compliance with UK GDPR. Your privacy rights explained.`}
        schema={schema}
      />
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white">
        <div className="mx-auto max-w-[800px] px-4 lg:px-6">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>
            <Link to="/" className="hover:text-[#d92a1d]">Home</Link><span>/</span><span className="text-[#1a1a1a]">Privacy Policy</span>
          </nav>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl" style={{ fontFamily: 'Space Grotesk' }}>
            Privacy <span className="text-[#d92a1d]">Policy</span>
          </h1>

          <p className="mb-2 text-sm text-[#6a6a6a]" style={{ fontFamily: 'JetBrains Mono' }}>Last updated: 18 July 2025</p>

          {/* Sections */}
          <div className="mt-8 space-y-10">
            {sections.map((section) => (
              <div key={section.number}>
                <h2 className="mb-4 text-xl font-bold text-[#1a1a1a] sm:text-2xl" style={{ fontFamily: 'Space Grotesk' }}>
                  <span className="text-[#d92a1d]">{section.number}.</span> {section.title}
                </h2>
                <div className="space-y-5">
                  {section.clauses.map((clause, i) => (
                    <div key={i}>
                      {clause.heading && (
                        <h3 className="mb-2 text-base font-semibold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>{clause.heading}</h3>
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
            <h2 className="mb-2 text-lg font-bold text-[#1a1a1a]" style={{ fontFamily: 'Space Grotesk' }}>Questions about your privacy?</h2>
            <p className="text-base leading-relaxed text-[#6a6a6a]">
              If you have any questions about this privacy policy or want to exercise your data rights, please{' '}
              <Link to="/contact" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">contact us</Link>{' '}
              or call {PHONE_NUMBER}. You also have the right to lodge a complaint with the{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">
                Information Commissioner&apos;s Office (ICO)
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}