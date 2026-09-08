import { SITE_NAME, SITE_URL } from '../components/SEOHead'

/**
 * Complete LocalBusiness reference used as the `provider` in Service schema
 * across service, city, and near-me pages. It carries a full postal address
 * (and @id matching the sitewide business node in index.html) so structured
 * data validators do not flag the provider as a LocalBusiness missing an
 * address.
 */
export const BUSINESS_PROVIDER = {
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: '+447933899930',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '128 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
}
