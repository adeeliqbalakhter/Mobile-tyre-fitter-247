export interface CityInfo {
  name: string
  region: string
  time: string
  areas: string[]
  roads: string[]
  image: string
}

export const cityData: Record<string, CityInfo> = {
  london: { name: 'London', region: 'Greater London', time: '25-35 min', areas: ['Central London', 'North London', 'South London', 'East London', 'West London', 'Croydon', 'Bromley', 'Greenwich', 'Enfield', 'Wembley'], roads: ['M25', 'M4', 'M1', 'A406 North Circular', 'A40', 'M11'], image: '/images/city-london.jpg' },
  manchester: { name: 'Manchester', region: 'Greater Manchester', time: '30-40 min', areas: ['City Centre', 'Salford', 'Stockport', 'Bolton', 'Oldham', 'Rochdale', 'Bury', 'Trafford'], roads: ['M60', 'M62', 'M56', 'M61', 'A56', 'A6'], image: '/images/city-manchester.jpg' },
  birmingham: { name: 'Birmingham', region: 'West Midlands', time: '30-40 min', areas: ['City Centre', 'Solihull', 'Coventry', 'Wolverhampton', 'Dudley', 'Walsall', 'Sutton Coldfield'], roads: ['M6', 'M5', 'M42', 'M40', 'A38', 'A45'], image: '/images/city-birmingham.jpg' },
  glasgow: { name: 'Glasgow', region: 'Scotland', time: '35-50 min', areas: ['City Centre', 'East End', 'West End', 'South Side', 'Paisley', 'Hamilton', 'Motherwell'], roads: ['M8', 'M77', 'M74', 'M73', 'A82', 'A77'], image: '/images/city-london.jpg' },
  leeds: { name: 'Leeds', region: 'West Yorkshire', time: '30-45 min', areas: ['City Centre', 'Bradford', 'Wakefield', 'Huddersfield', 'Halifax', 'York'], roads: ['M1', 'M62', 'M621', 'A61', 'A64', 'A58'], image: '/images/city-manchester.jpg' },
  liverpool: { name: 'Liverpool', region: 'Merseyside', time: '30-40 min', areas: ['City Centre', 'Birkenhead', 'Wirral', 'St Helens', 'Warrington', 'Chester'], roads: ['M62', 'M57', 'M58', 'M53', 'A59', 'A565'], image: '/images/city-birmingham.jpg' },
  bristol: { name: 'Bristol', region: 'South West England', time: '35-50 min', areas: ['City Centre', 'Bath', 'Weston-super-Mare', 'Gloucester', 'Cheltenham', 'Swindon'], roads: ['M5', 'M4', 'M32', 'A4', 'A38', 'A370'], image: '/images/city-london.jpg' },
  leicester: { name: 'Leicester', region: 'East Midlands', time: '35-50 min', areas: ['City Centre', 'Nottingham', 'Derby', 'Northampton', 'Loughborough'], roads: ['M1', 'M69', 'A6', 'A46', 'A47', 'A50'], image: '/images/city-manchester.jpg' },
  newcastle: { name: 'Newcastle', region: 'North East England', time: '35-50 min', areas: ['City Centre', 'Sunderland', 'Middlesbrough', 'Durham', 'Gateshead'], roads: ['A1(M)', 'A19', 'A69', 'A167', 'A184'], image: '/images/city-birmingham.jpg' },
}

export const citySlugs = Object.keys(cityData)
