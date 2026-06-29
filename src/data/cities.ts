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
  'milton-keynes': { name: 'Milton Keynes', region: 'Buckinghamshire', time: '30-40 min', areas: ['City Centre', 'Bletchley', 'Wolverton', 'Newport Pagnell', 'Stony Stratford', 'Wavendon'], roads: ['M1', 'A5', 'A509', 'A421', 'A422'], image: '/images/city-london.jpg' },
  swindon: { name: 'Swindon', region: 'Wiltshire', time: '35-45 min', areas: ['Town Centre', 'Old Town', 'Stratton', 'Highworth', 'Wroughton', 'Royal Wootton Bassett'], roads: ['M4', 'A419', 'A420', 'A4259', 'A3102'], image: '/images/city-manchester.jpg' },
  edinburgh: { name: 'Edinburgh', region: 'Scotland', time: '35-50 min', areas: ['City Centre', 'Leith', 'Portobello', 'Corstorphine', 'Morningside', 'Musselburgh'], roads: ['M8', 'M9', 'A1', 'A720 City Bypass', 'A90'], image: '/images/city-birmingham.jpg' },
  coventry: { name: 'Coventry', region: 'West Midlands', time: '30-40 min', areas: ['City Centre', 'Foleshill', 'Tile Hill', 'Earlsdon', 'Bedworth', 'Nuneaton'], roads: ['M6', 'M69', 'M45', 'A45', 'A46', 'A444'], image: '/images/city-london.jpg' },
  reading: { name: 'Reading', region: 'Berkshire', time: '30-40 min', areas: ['Town Centre', 'Caversham', 'Tilehurst', 'Earley', 'Woodley', 'Wokingham'], roads: ['M4', 'A33', 'A329(M)', 'A4', 'A327'], image: '/images/city-manchester.jpg' },
  cardiff: { name: 'Cardiff', region: 'Wales', time: '35-50 min', areas: ['City Centre', 'Cardiff Bay', 'Llanishen', 'Cyncoed', 'Penarth', 'Barry'], roads: ['M4', 'A48', 'A470', 'A4232', 'A4161'], image: '/images/city-birmingham.jpg' },
  nottingham: { name: 'Nottingham', region: 'Nottinghamshire', time: '30-45 min', areas: ['City Centre', 'West Bridgford', 'Beeston', 'Arnold', 'Carlton', 'Mansfield'], roads: ['M1', 'A52', 'A60', 'A610', 'A453', 'A6514'], image: '/images/city-london.jpg' },

  // Tier-2 cities and large towns
  sheffield: { name: 'Sheffield', region: 'South Yorkshire', time: '35-50 min', areas: ['City Centre', 'Hillsborough', 'Ecclesall', 'Rotherham', 'Barnsley', 'Chesterfield'], roads: ['M1', 'A57', 'A61', 'A630', 'A6109'], image: '/images/city-manchester.jpg' },
  bradford: { name: 'Bradford', region: 'West Yorkshire', time: '30-45 min', areas: ['City Centre', 'Shipley', 'Bingley', 'Keighley', 'Halifax', 'Wibsey'], roads: ['M606', 'M62', 'A650', 'A647', 'A6177'], image: '/images/city-birmingham.jpg' },
  wolverhampton: { name: 'Wolverhampton', region: 'West Midlands', time: '30-40 min', areas: ['City Centre', 'Bilston', 'Wednesfield', 'Tettenhall', 'Penn', 'Willenhall'], roads: ['M6', 'M54', 'A449', 'A454', 'A4123'], image: '/images/city-london.jpg' },
  derby: { name: 'Derby', region: 'Derbyshire', time: '30-45 min', areas: ['City Centre', 'Allestree', 'Mickleover', 'Chaddesden', 'Spondon', 'Littleover'], roads: ['A38', 'A52', 'A6', 'A50', 'A514'], image: '/images/city-manchester.jpg' },
  plymouth: { name: 'Plymouth', region: 'Devon', time: '40-55 min', areas: ['City Centre', 'Plymstock', 'Plympton', 'Devonport', 'Stonehouse', 'Saltash'], roads: ['A38', 'A386', 'A374', 'A379'], image: '/images/city-birmingham.jpg' },
  southampton: { name: 'Southampton', region: 'Hampshire', time: '30-45 min', areas: ['City Centre', 'Shirley', 'Portswood', 'Bitterne', 'Woolston', 'Eastleigh'], roads: ['M27', 'M3', 'A33', 'A35', 'A3024'], image: '/images/city-london.jpg' },
  portsmouth: { name: 'Portsmouth', region: 'Hampshire', time: '30-45 min', areas: ['City Centre', 'Southsea', 'Cosham', 'Fratton', 'Portsea', 'Fareham'], roads: ['M27', 'M275', 'A3', 'A27', 'A2030'], image: '/images/city-manchester.jpg' },
  brighton: { name: 'Brighton', region: 'East Sussex', time: '30-45 min', areas: ['City Centre', 'Hove', 'Kemptown', 'Portslade', 'Shoreham', 'Worthing'], roads: ['A23', 'A27', 'A259', 'M23'], image: '/images/city-birmingham.jpg' },
  hull: { name: 'Hull', region: 'East Yorkshire', time: '35-50 min', areas: ['City Centre', 'Hessle', 'Cottingham', 'Beverley', 'Hedon', 'Anlaby'], roads: ['A63', 'M62', 'A1079', 'A164', 'A165'], image: '/images/city-london.jpg' },
  'stoke-on-trent': { name: 'Stoke-on-Trent', region: 'Staffordshire', time: '30-45 min', areas: ['Hanley', 'Burslem', 'Longton', 'Tunstall', 'Fenton', 'Newcastle-under-Lyme'], roads: ['M6', 'A50', 'A500', 'A34', 'A52'], image: '/images/city-manchester.jpg' },
  preston: { name: 'Preston', region: 'Lancashire', time: '30-45 min', areas: ['City Centre', 'Fulwood', 'Penwortham', 'Leyland', 'Bamber Bridge', 'Chorley'], roads: ['M6', 'M55', 'M61', 'A59', 'A6'], image: '/images/city-birmingham.jpg' },
  sunderland: { name: 'Sunderland', region: 'Tyne and Wear', time: '35-50 min', areas: ['City Centre', 'Washington', 'Houghton-le-Spring', 'Seaburn', 'Roker', 'Hetton'], roads: ['A19', 'A1231', 'A690', 'A183'], image: '/images/city-london.jpg' },
  aberdeen: { name: 'Aberdeen', region: 'Scotland', time: '40-55 min', areas: ['City Centre', 'Dyce', 'Bridge of Don', 'Cults', 'Bucksburn', 'Westhill'], roads: ['A90', 'A96', 'A92', 'A93', 'AWPR'], image: '/images/city-manchester.jpg' },
  dundee: { name: 'Dundee', region: 'Scotland', time: '40-55 min', areas: ['City Centre', 'Broughty Ferry', 'Lochee', 'West End', 'Monifieth', 'Carnoustie'], roads: ['A90', 'A92', 'A85', 'A930'], image: '/images/city-birmingham.jpg' },
  swansea: { name: 'Swansea', region: 'Wales', time: '35-50 min', areas: ['City Centre', 'Mumbles', 'Sketty', 'Morriston', 'Gowerton', 'Neath'], roads: ['M4', 'A48', 'A483', 'A4067'], image: '/images/city-london.jpg' },
  oxford: { name: 'Oxford', region: 'Oxfordshire', time: '30-45 min', areas: ['City Centre', 'Headington', 'Cowley', 'Botley', 'Kidlington', 'Abingdon'], roads: ['M40', 'A34', 'A40', 'A4142', 'A420'], image: '/images/city-manchester.jpg' },
  cambridge: { name: 'Cambridge', region: 'Cambridgeshire', time: '30-45 min', areas: ['City Centre', 'Cherry Hinton', 'Trumpington', 'Histon', 'Milton', 'Great Shelford'], roads: ['M11', 'A14', 'A1303', 'A1134', 'A10'], image: '/images/city-birmingham.jpg' },
  norwich: { name: 'Norwich', region: 'Norfolk', time: '35-50 min', areas: ['City Centre', 'Thorpe St Andrew', 'Hellesdon', 'Sprowston', 'Costessey', 'Wymondham'], roads: ['A11', 'A47', 'A140', 'A146', 'A1042'], image: '/images/city-london.jpg' },
  luton: { name: 'Luton', region: 'Bedfordshire', time: '30-40 min', areas: ['Town Centre', 'Dunstable', 'Leagrave', 'Stopsley', 'Houghton Regis', 'Wigmore'], roads: ['M1', 'A6', 'A505', 'A1081'], image: '/images/city-manchester.jpg' },
  northampton: { name: 'Northampton', region: 'Northamptonshire', time: '30-45 min', areas: ['Town Centre', 'Kingsthorpe', 'Far Cotton', 'Weston Favell', 'Duston', 'Wootton'], roads: ['M1', 'A45', 'A43', 'A508', 'A428'], image: '/images/city-birmingham.jpg' },
  peterborough: { name: 'Peterborough', region: 'Cambridgeshire', time: '30-45 min', areas: ['City Centre', 'Orton', 'Werrington', 'Stanground', 'Bretton', 'Hampton'], roads: ['A1(M)', 'A47', 'A15', 'A605', 'A1139'], image: '/images/city-london.jpg' },
  york: { name: 'York', region: 'North Yorkshire', time: '30-45 min', areas: ['City Centre', 'Acomb', 'Clifton', 'Fulford', 'Heworth', 'Haxby'], roads: ['A64', 'A1237', 'A19', 'A59', 'A1079'], image: '/images/city-manchester.jpg' },
  blackpool: { name: 'Blackpool', region: 'Lancashire', time: '35-50 min', areas: ['Town Centre', 'Bispham', 'Cleveleys', 'Lytham St Annes', 'Poulton-le-Fylde', 'Fleetwood'], roads: ['M55', 'A583', 'A584', 'A587'], image: '/images/city-birmingham.jpg' },
  bolton: { name: 'Bolton', region: 'Greater Manchester', time: '30-40 min', areas: ['Town Centre', 'Farnworth', 'Horwich', 'Westhoughton', 'Kearsley', 'Little Lever'], roads: ['M61', 'M60', 'A666', 'A58', 'A676'], image: '/images/city-london.jpg' },
  middlesbrough: { name: 'Middlesbrough', region: 'North Yorkshire', time: '35-50 min', areas: ['Town Centre', 'Acklam', 'Linthorpe', 'Stockton-on-Tees', 'Redcar', 'Thornaby'], roads: ['A19', 'A66', 'A174', 'A1085'], image: '/images/city-manchester.jpg' },
  telford: { name: 'Telford', region: 'Shropshire', time: '35-45 min', areas: ['Town Centre', 'Wellington', 'Madeley', 'Dawley', 'Newport', 'Shifnal'], roads: ['M54', 'A5', 'A442', 'A464', 'A518'], image: '/images/city-birmingham.jpg' },
  gloucester: { name: 'Gloucester', region: 'Gloucestershire', time: '35-45 min', areas: ['City Centre', 'Quedgeley', 'Hucclecote', 'Tuffley', 'Cheltenham', 'Churchdown'], roads: ['M5', 'A38', 'A40', 'A417', 'A430'], image: '/images/city-london.jpg' },
  exeter: { name: 'Exeter', region: 'Devon', time: '40-55 min', areas: ['City Centre', 'St Thomas', 'Heavitree', 'Pinhoe', 'Topsham', 'Exminster'], roads: ['M5', 'A30', 'A38', 'A377', 'A379'], image: '/images/city-manchester.jpg' },
  watford: { name: 'Watford', region: 'Hertfordshire', time: '25-40 min', areas: ['Town Centre', 'Garston', 'Bushey', 'Croxley Green', 'Rickmansworth', 'Abbots Langley'], roads: ['M1', 'M25', 'A41', 'A411', 'A412'], image: '/images/city-birmingham.jpg' },
  slough: { name: 'Slough', region: 'Berkshire', time: '25-40 min', areas: ['Town Centre', 'Langley', 'Cippenham', 'Burnham', 'Datchet', 'Windsor'], roads: ['M4', 'M40', 'A4', 'A332', 'A355'], image: '/images/city-london.jpg' },
  bournemouth: { name: 'Bournemouth', region: 'Dorset', time: '35-50 min', areas: ['Town Centre', 'Boscombe', 'Westbourne', 'Poole', 'Christchurch', 'Ferndown'], roads: ['A338', 'A35', 'A3049', 'A347'], image: '/images/city-manchester.jpg' },
  ipswich: { name: 'Ipswich', region: 'Suffolk', time: '35-50 min', areas: ['Town Centre', 'Kesgrave', 'Bramford', 'Rushmere', 'Felixstowe', 'Woodbridge'], roads: ['A14', 'A12', 'A1071', 'A1214'], image: '/images/city-birmingham.jpg' },
  warrington: { name: 'Warrington', region: 'Cheshire', time: '30-40 min', areas: ['Town Centre', 'Stockton Heath', 'Birchwood', 'Penketh', 'Lymm', 'Culcheth'], roads: ['M6', 'M62', 'M56', 'A49', 'A57'], image: '/images/city-london.jpg' },
  wigan: { name: 'Wigan', region: 'Greater Manchester', time: '30-40 min', areas: ['Town Centre', 'Hindley', 'Leigh', 'Ashton-in-Makerfield', 'Standish', 'Orrell'], roads: ['M6', 'M58', 'A49', 'A577', 'A573'], image: '/images/city-manchester.jpg' },
  doncaster: { name: 'Doncaster', region: 'South Yorkshire', time: '35-50 min', areas: ['Town Centre', 'Bentley', 'Bessacarr', 'Armthorpe', 'Mexborough', 'Thorne'], roads: ['A1(M)', 'M18', 'M180', 'A638', 'A630'], image: '/images/city-birmingham.jpg' },
}

export const citySlugs = Object.keys(cityData)

/** City pages live at /mobile-tyre-fitting-[city] to match the target keyword. */
export const CITY_URL_PREFIX = 'mobile-tyre-fitting-'

/** Full path for a city, e.g. 'london' -> '/mobile-tyre-fitting-london'. */
export function cityPath(slug: string): string {
  return `/${CITY_URL_PREFIX}${slug}`
}

