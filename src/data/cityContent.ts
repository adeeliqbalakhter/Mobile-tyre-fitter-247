// Genuinely unique, locally-accurate content for each city page.
// This exists to defeat template duplication: instead of the same paragraphs
// with only the city name swapped, every city gets its own intro angle, local
// driving/tyre context, and real landmarks. Keep each entry factual and
// distinct. CityPage falls back gracefully for any slug not listed here.

export interface CityContent {
  /** Unique 2-3 sentence opening, weaving in real local geography. */
  intro: string
  /** City-specific driving and tyre context (roads, hazards, common jobs). */
  localContext: string
  /** Real notable local destinations we regularly attend near. */
  landmarks: string[]
}

export const cityContent: Record<string, CityContent> = {
  london: {
    intro: 'London is the busiest driving environment in the country, and a flat tyre here can bring a whole street to a standstill. From the congestion-charge zone and ULEZ in the centre to the sprawling suburbs beyond the North Circular, our fitters know the capital and reach you without you having to move the car.',
    localContext: 'Potholes on worn borough roads, kerbed alloys from tight parking, and debris on the A406 and M25 are the jobs we see most in London. Because moving a damaged car across the city is slow and costly, having us come to you at the roadside, your home, or an office car park saves both time and congestion-charge headaches.',
    landmarks: ['The City & Canary Wharf', 'Westfield Stratford', 'Heathrow & Gatwick corridors', 'Wembley', 'Croydon', 'Richmond & Kingston'],
  },
  manchester: {
    intro: 'Manchester drivers cover a lot of ground, from the city centre and MediaCity to the ring of towns around Greater Manchester. The M60 orbital and its feeder motorways carry huge volumes of traffic, so a blowout at the wrong junction can leave you stranded fast.',
    localContext: 'Tram-track crossings in the centre, heavy stop-start traffic on the M60, and pothole damage across Salford and Stockport are common causes of the tyre failures we attend. We keep vans spread across Greater Manchester so we can reach the inner ring or the outer towns quickly, day or night.',
    landmarks: ['MediaCityUK, Salford', 'Trafford Centre', 'Etihad & Old Trafford', 'Manchester Airport', 'Stockport', 'Bolton'],
  },
  birmingham: {
    intro: "As the UK's second city, Birmingham sits at the heart of the motorway network, where the M6, M5, M42 and M40 all converge. That makes it one of the busiest places in Britain to break down, and one where a fast mobile response matters most.",
    localContext: 'The notorious Spaghetti Junction, the elevated Aston Expressway, and the constant roadworks around the M6 mean debris and sudden lane changes cause plenty of tyre damage here. Rather than risk driving a damaged tyre through that traffic, we come to you across the West Midlands with the right tyre on board.',
    landmarks: ['Bullring & city centre', 'Spaghetti Junction (M6 J6)', 'NEC & Birmingham Airport', 'Solihull', 'Sutton Coldfield', 'Merry Hill, Dudley'],
  },
  glasgow: {
    intro: "Glasgow's road network is dominated by the M8, which cuts right through the heart of the city, making it one of the few UK cities with a motorway running through its centre. Combined with Scottish winters, that keeps our fitters busy year round.",
    localContext: 'Cold-weather pressure loss, pothole damage after frost, and debris on the M8 and Kingston Bridge are the jobs we see most in Glasgow. We cover the city centre, the East and West Ends, and out towards Paisley and Hamilton, fitting winter and all-season tyres as well as emergency replacements.',
    landmarks: ['City centre & Merchant City', 'SEC & OVO Hydro', 'Silverburn & Braehead', 'Paisley', 'Hamilton', 'Glasgow Airport'],
  },
  leeds: {
    intro: "Leeds is the commercial hub of West Yorkshire, and its position on the M1 and M62 means a constant flow of commuter and freight traffic. The M621 loop around the city is a frequent spot for roadside call-outs.",
    localContext: 'Heavy freight on the M62, pothole-scarred roads across the wider district, and rush-hour congestion on the M621 are behind many of the tyre jobs we attend in Leeds. We keep fitters close to the city centre and the surrounding towns so we can reach you before a slow puncture becomes a bigger problem.',
    landmarks: ['City centre & Trinity Leeds', 'Elland Road', 'White Rose Centre', 'Leeds Bradford Airport', 'Wakefield', 'Bradford'],
  },
  liverpool: {
    intro: "Liverpool sits on the Mersey with the Kingsway and Queensway tunnels linking it to the Wirral, and the M62, M57 and M58 feeding the wider city. Dock traffic and a dense urban core keep our fitters on the move.",
    localContext: 'Kerb damage in tight terraced streets, debris around the docks, and potholes across Merseyside are the tyre failures we most often attend in Liverpool. Because the tunnels and city-centre one-ways make driving on a damaged tyre risky, we come straight to your location on either side of the Mersey.',
    landmarks: ['Albert Dock & waterfront', 'Anfield & Goodison', 'Liverpool ONE', 'Wirral & Birkenhead', 'St Helens', 'Liverpool John Lennon Airport'],
  },
  bristol: {
    intro: "Bristol combines steep hills, a historic harbourside, and the busy M4/M5 interchange on its doorstep. Whether you are in Clifton, the city centre, or heading out towards Bath, a flat tyre in Bristol traffic is a genuine headache.",
    localContext: "Bristol's hilly streets and tight Georgian parking mean kerbed alloys and sidewall damage are common, while the M4/M5 junction sees plenty of motorway blowouts. Our fitters cover the whole city and out towards Bath and Weston-super-Mare, bringing the replacement tyre to you.",
    landmarks: ['Harbourside & city centre', 'Clifton Suspension Bridge', 'Cabot Circus', 'Cribbs Causeway', 'Bath', 'Bristol Airport'],
  },
  leicester: {
    intro: "Leicester sits right on the M1 and M69 in the East Midlands, a key crossroads for traffic heading north and south. Its compact centre and busy ring road keep demand for fast tyre help high.",
    localContext: 'Motorway debris on the M1, congestion on the inner ring road, and pothole damage across the county are common here. We keep fitters near the city and the surrounding towns so a roadside flat or a slow puncture at home is dealt with quickly.',
    landmarks: ['City centre & King Power Stadium', 'Fosse Park', 'Highcross', 'Loughborough', 'Hinckley', 'Leicester Racecourse'],
  },
  newcastle: {
    intro: "Newcastle anchors the North East, with the A1 and A19 carrying traffic along the coast and the Tyne bridges linking it to Gateshead. Cold northern winters add an extra layer of tyre wear and tear.",
    localContext: 'Winter pressure loss, pothole damage after hard frosts, and debris on the A1 and A19 are the jobs we see most around Tyneside. We cover Newcastle, Gateshead and out towards Sunderland, fitting cold-weather and all-season tyres alongside emergency replacements.',
    landmarks: ['Quayside & city centre', 'St James’ Park', 'MetroCentre, Gateshead', 'Newcastle Airport', 'Sunderland', 'Angel of the North'],
  },
  'milton-keynes': {
    intro: "Milton Keynes is unlike anywhere else in Britain to drive, with its famous grid-road system and hundreds of roundabouts. The city sits directly on the M1, making it a common spot for both local and motorway tyre call-outs.",
    localContext: 'The high-speed grid roads and constant roundabouts mean fast wear and the odd kerbed alloy, while the M1 brings motorway blowouts. Our fitters know the grid layout well and reach you quickly whether you are on a redway junction or stranded on the hard shoulder.',
    landmarks: ['centre:mk & the grid', 'Stadium MK', 'Bletchley', 'Newport Pagnell services (M1)', 'Wolverton', 'Xscape'],
  },
  swindon: {
    intro: "Swindon sits on the M4 between Bristol and Reading, with the famous Magic Roundabout at its heart. Its position on a major commuter and freight route means plenty of tyre emergencies pass through.",
    localContext: 'M4 motorway debris, the tight Magic Roundabout, and pothole damage across the older parts of town are common causes of the tyre jobs we attend in Swindon. We cover the town centre, Old Town and the surrounding villages, coming to your home, work, or the roadside.',
    landmarks: ['Magic Roundabout', 'Town centre & Designer Outlet', 'Old Town', 'Royal Wootton Bassett', 'Highworth', 'M4 Junction 15/16'],
  },
  edinburgh: {
    intro: "Edinburgh mixes a historic, cobbled Old Town with a busy modern bypass, the A720. Festival season and tourist traffic can bring the city to a crawl, so a flat tyre in the wrong place needs a quick fix.",
    localContext: "Edinburgh's cobbled setts and steep streets are hard on tyres and alloys, while the A720 City Bypass sees regular roadside call-outs. Our fitters cover the centre, Leith and out towards Musselburgh, bringing the right tyre so you never have to nurse a damaged one over the cobbles.",
    landmarks: ['Old Town & Royal Mile', 'Leith & the shore', 'Murrayfield', 'Edinburgh Airport', 'Musselburgh', 'A720 City Bypass'],
  },
  coventry: {
    intro: "Coventry sits at the centre of the West Midlands motorway web, ringed by the M6, M69 and M45 and split by its own ring road. A compact but busy city, it sees a steady stream of tyre emergencies.",
    localContext: "Coventry's tight, elevated ring road is notorious for quick lane changes and kerb strikes, while the M6 nearby brings motorway blowouts. We cover the city and out towards Nuneaton and Bedworth, reaching you fast whether you are on the ring road or the driveway.",
    landmarks: ['City centre & Cathedral', 'Coventry Building Society Arena', 'War Memorial Park', 'Bedworth', 'Nuneaton', 'A45 corridor'],
  },
  reading: {
    intro: "Reading is one of the busiest commuter towns in the Thames Valley, sitting on the M4 with strong links to London and Heathrow. Heavy business traffic keeps demand for fast, mobile tyre help high.",
    localContext: 'M4 motorway debris, congestion on the A33 and IDR, and kerb damage in tight town-centre parking are common here. We cover Reading, Caversham and out towards Wokingham, fitting tyres at business parks and driveways alike so your day is barely interrupted.',
    landmarks: ['The Oracle & town centre', 'Madejski Stadium', 'Green Park business area', 'Caversham', 'Wokingham', 'M4 Junction 11/12'],
  },
  cardiff: {
    intro: "Cardiff, the Welsh capital, draws huge match-day and event crowds to the city centre and Principality Stadium, while the M4 skirts the north of the city. That mix of event traffic and motorway flow keeps our fitters busy.",
    localContext: 'Match-day congestion, debris on the M4 around Cardiff, and pothole damage across the valleys roads are the jobs we see most. We cover the city centre, Cardiff Bay and out towards Penarth and Barry, bringing the replacement tyre to you rather than adding to the traffic.',
    landmarks: ['Principality Stadium', 'Cardiff Bay & Mermaid Quay', 'St David’s Centre', 'Penarth', 'Barry', 'Cardiff City Stadium'],
  },
  nottingham: {
    intro: "Nottingham sits on the M1 in the East Midlands, with a busy tram network threading through the city and out to the suburbs. The mix of tram lines, ring road and motorway makes for varied tyre call-outs.",
    localContext: 'Tram-track crossings in the centre, congestion on the ring road, and M1 motorway debris all cause the tyre failures we attend around Nottingham. We keep fitters near the city and out towards Beeston and West Bridgford so help is never far away.',
    landmarks: ['City centre & Old Market Square', 'Nottingham Castle', 'Trent Bridge & City Ground', 'West Bridgford', 'Beeston', 'Victoria Centre'],
  },
  sheffield: {
    intro: "Sheffield is built across seven hills on the edge of the Peak District, giving it some of the steepest urban roads in England. Add the M1 running along its eastern side and you have a city that keeps tyre fitters in demand.",
    localContext: "Steep hills are tough on tyres and brakes, tram tracks cross the centre, and Peak District roads bring debris and pothole damage. Our fitters cover Sheffield and out towards Rotherham and Chesterfield, so you never have to tackle a steep hill on a failing tyre.",
    landmarks: ['City centre & The Moor', 'Meadowhall', 'Bramall Lane & Hillsborough', 'Peak District fringe', 'Rotherham', 'Chesterfield'],
  },
  bradford: {
    intro: "Bradford sits in a bowl in the hills of West Yorkshire, with steep approaches and the M606 spur linking it to the M62. Its dense, hilly streets are hard on tyres and quick to snarl up when a car breaks down.",
    localContext: 'Steep gradients, tight terraced parking, and pothole damage across the district are the jobs we see most in Bradford. We cover the city and out towards Shipley, Bingley and Keighley, coming to your driveway or the roadside so a flat never leaves you stuck on a hill.',
    landmarks: ['City centre & The Broadway', 'Valley Parade', 'Saltaire & Shipley', 'Bingley', 'Keighley', 'M606 corridor'],
  },
  wolverhampton: {
    intro: "Wolverhampton anchors the Black Country, linked to Birmingham by the M6, M54 and the busy A449 and A454. Its network of ring roads and industrial estates generates steady demand for mobile tyre help.",
    localContext: 'Congested ring roads, debris on the M6 and M54, and pothole damage across the Black Country cause many of the tyre jobs we attend here. We cover Wolverhampton, Bilston and Wednesfield, fitting new tyres at homes, workplaces and the roadside.',
    landmarks: ['City centre & Mander Centre', 'Molineux Stadium', 'Bilston', 'Wednesfield', 'Tettenhall', 'i54 / M54 corridor'],
  },
  derby: {
    intro: "Derby, on the edge of the Peak District, is a major manufacturing and rail city sitting just off the M1 via the A38 and A52. That mix of commuter, freight and Peak-bound traffic keeps our fitters busy.",
    localContext: 'The A38 and A52 carry heavy traffic and see plenty of debris, while Peak District roads and city potholes bring kerb and sidewall damage. We cover Derby and out towards Allestree, Mickleover and Chaddesden, reaching you quickly at home or on the road.',
    landmarks: ['City centre & Cathedral Quarter', 'Pride Park Stadium', 'Intu Derby', 'Allestree', 'Mickleover', 'A38 corridor'],
  },
  plymouth: {
    intro: "Plymouth is the largest city in the South West peninsula, at the end of the A38 Devon Expressway with the sea on three sides. Its remote location makes a reliable local tyre service especially valuable.",
    localContext: 'Long A38 runs, coastal weather, and pothole damage on rural Devon roads are behind many of the tyre jobs we attend around Plymouth. Because the nearest big-city garages are far away, our local fitters coming to you saves a long, risky drive on a damaged tyre.',
    landmarks: ['The Hoe & Barbican', 'City centre & Drake Circus', 'Devonport', 'Plympton & Plymstock', 'Saltash', 'A38 Devon Expressway'],
  },
  southampton: {
    intro: "Southampton is a major south-coast port city, linked to the M27 and M3 and busy with cruise, container and commuter traffic. Its mix of docks and dense suburbs keeps demand for fast tyre help high.",
    localContext: 'Dock-road debris, congestion on the M27, and kerb damage in tight city parking are the jobs we see most in Southampton. We cover the city, Shirley, Portswood and out towards Eastleigh, bringing the replacement tyre to your home, work, or the roadside.',
    landmarks: ['City centre & WestQuay', 'Port & cruise terminals', 'St Mary’s Stadium', 'Shirley', 'Eastleigh', 'M27 corridor'],
  },
  portsmouth: {
    intro: "Portsmouth is Britain's only island city, densely built on Portsea Island and linked to the mainland by the M275. That tight island geography means a broken-down car quickly causes tailbacks.",
    localContext: 'Dense island streets, the busy M275 approach, and kerb damage from tight parking are common in Portsmouth. Because there is limited room to manoeuvre a damaged car on the island, we come straight to you in Southsea, Fratton, Cosham or out towards Fareham.',
    landmarks: ['Gunwharf Quays & Spinnaker Tower', 'Southsea seafront', 'Fratton Park', 'Cosham', 'Fareham', 'M275 approach'],
  },
  brighton: {
    intro: "Brighton & Hove is the South Coast's liveliest city, hemmed in between the sea and the South Downs. Steep hills, seafront traffic and limited parking make it a place where tyre trouble is quickly felt.",
    localContext: 'Steep Downs approaches, tight hilly parking, and debris on the A23 and A27 are behind the tyre jobs we most often attend in Brighton. Our fitters cover the seafront, the lanes, Hove and out towards Shoreham and Worthing, bringing the tyre to you.',
    landmarks: ['Seafront & Palace Pier', 'The Lanes & North Laine', 'Amex Stadium', 'Hove', 'Shoreham-by-Sea', 'A23 / A27'],
  },
  hull: {
    intro: "Hull sits at the mouth of the Humber in the East Riding, at the end of the M62 with the vast Humber Bridge nearby. Its coastal, end-of-the-line position makes a dependable local tyre service important.",
    localContext: 'Exposed coastal weather, debris on the A63 and M62, and pothole damage across the city are common causes of the tyre failures we attend in Hull. We cover the city centre, Hessle, Cottingham and out towards Beverley, coming to your home or the roadside.',
    landmarks: ['Marina & Old Town', 'Humber Bridge', 'St Stephen’s & city centre', 'Hessle', 'Beverley', 'A63 corridor'],
  },
  'stoke-on-trent': {
    intro: "Stoke-on-Trent, the Potteries, is a city of six towns strung along the A50 and A500 with the M6 on its western edge. That spread-out layout and heavy through-traffic keep our fitters on the move.",
    localContext: 'The A500 “D-road” and M6 bring motorway-style debris and blowouts, while the older town roads suffer potholes and kerb damage. We cover Hanley, Burslem, Longton and out towards Newcastle-under-Lyme, reaching you fast wherever you break down.',
    landmarks: ['Hanley city centre', 'bet365 Stadium', 'Trentham Estate', 'Newcastle-under-Lyme', 'Festival Park', 'A500 / M6 J15-16'],
  },
  preston: {
    intro: "Preston is a key Lancashire hub where the M6, M55 and M61 meet, making it one of the North West's busiest motorway junctions. That concentration of traffic means plenty of roadside tyre call-outs.",
    localContext: 'The M6/M55/M61 interchange sees frequent debris and blowouts, while city and rural Lancashire roads bring pothole damage. Our fitters cover Preston, Fulwood, Penwortham and out towards Leyland and Chorley, coming to the roadside or your driveway.',
    landmarks: ['City centre & Flag Market', 'Deepdale', 'UCLan campus', 'Fulwood', 'Leyland', 'M6 Junction 31/32'],
  },
  sunderland: {
    intro: "Sunderland sits on the North East coast at the mouth of the Wear, linked to the region by the A19 and A1231. A big car-manufacturing city, it depends on keeping vehicles moving.",
    localContext: 'Coastal weather, winter pressure loss, and debris on the A19 are behind many of the tyre jobs we attend around Sunderland. We cover the city centre, Washington, Houghton-le-Spring and the coast, fitting cold-weather and emergency tyres wherever you are.',
    landmarks: ['City centre & Keel Square', 'Stadium of Light', 'Seaburn & Roker', 'Washington', 'Houghton-le-Spring', 'A19 corridor'],
  },
  aberdeen: {
    intro: "Aberdeen, the Granite City, is Scotland's north-eastern hub and the centre of the UK's offshore energy industry. The new AWPR bypass has reshaped how traffic flows around the city, but harsh weather still keeps tyres under pressure.",
    localContext: 'Cold, wet North Sea weather, granite-hard winter roads, and long commutes on the A90 and AWPR are common factors in the tyre jobs we attend here. Our fitters cover the city, Dyce and out towards Westhill, fitting winter and all-season tyres alongside emergency replacements.',
    landmarks: ['City centre & Union Street', 'Aberdeen Harbour', 'Pittodrie', 'Dyce & the airport', 'Bridge of Don', 'AWPR bypass'],
  },
  dundee: {
    intro: "Dundee sits on the Firth of Tay with the waterfront transformed by the V&A museum, linked south by the Tay Road Bridge. A compact Scottish city, it still sees its share of coastal weather and tyre wear.",
    localContext: 'Bridge-approach traffic, coastal weather off the Tay, and pothole damage across the city cause the tyre failures we most often attend in Dundee. We cover the centre, Broughty Ferry and out towards Monifieth, coming to your home or the roadside with the right tyre.',
    landmarks: ['V&A Dundee & waterfront', 'City centre', 'Broughty Ferry', 'Dens Park & Tannadice', 'Monifieth', 'Tay Road Bridge'],
  },
  swansea: {
    intro: "Swansea is Wales's second city, curving around the bay towards the Gower peninsula with the M4 on its northern edge. Coastal weather and holiday traffic to the Gower keep our fitters busy.",
    localContext: 'Salt-air corrosion, M4 debris, and pothole damage across the valleys roads are common around Swansea. We cover the city centre, Mumbles, Morriston and out towards Neath, bringing the replacement tyre to you rather than risking the coast road on a damaged one.',
    landmarks: ['City centre & Marina', 'Mumbles & Gower', 'Swansea.com Stadium', 'Morriston', 'Neath', 'M4 Junction 42-47'],
  },
  oxford: {
    intro: "Oxford's historic centre, narrow streets and strict low-emission and traffic-filter zones make it one of the trickier cities to drive in. The ring road and A34 carry heavy through-traffic around the edge.",
    localContext: 'Tight medieval streets, park-and-ride pressure, and debris on the A34 and ring road are behind many Oxford tyre jobs. Because driving a damaged car through the centre or the traffic filters is a real hassle, we come to you in Headington, Cowley, Botley or out towards Kidlington.',
    landmarks: ['City centre & colleges', 'Westgate Oxford', 'Kassam Stadium', 'Headington', 'Cowley (Mini plant)', 'A34 / ring road'],
  },
  cambridge: {
    intro: "Cambridge is a compact, cycle-dominated university city ringed by the M11, A14 and the busy science and business parks that have made it a tech hub. Congestion and tight streets make quick, mobile tyre help valuable.",
    localContext: 'Heavy A14 freight, park-and-ride congestion, and kerb damage in narrow historic streets are common in Cambridge. Our fitters cover the centre, Cherry Hinton, Trumpington and the science parks, fitting tyres at workplaces and homes so your day keeps moving.',
    landmarks: ['City centre & the Backs', 'Grand Arcade', 'Cambridge Science Park', 'Addenbrooke’s', 'Trumpington', 'A14 / M11'],
  },
  norwich: {
    intro: "Norwich is the regional capital of Norfolk, a historic city ringed by its own inner and outer routes and linked to the network by the A11 and A47. Its relatively remote East Anglian position makes local tyre help important.",
    localContext: 'The A11 and A47 carry heavy traffic and see plenty of debris, while the medieval street pattern brings kerb damage. We cover the centre, Thorpe St Andrew, Hellesdon and out towards Wymondham, coming to your driveway or the roadside.',
    landmarks: ['City centre & Cathedral', 'Castle Quarter', 'Carrow Road', 'Thorpe St Andrew', 'Wymondham', 'A11 / A47'],
  },
  luton: {
    intro: "Luton sits right on the M1 in Bedfordshire, with its busy airport a major traffic generator. That constant flow of commuters and airport journeys keeps demand for fast tyre help high.",
    localContext: 'Airport-run traffic, M1 debris, and pothole damage across the town are the jobs we see most in Luton. We cover the town centre, Dunstable, Leagrave and out towards Houghton Regis, reaching you at home, at the airport approach, or on the hard shoulder.',
    landmarks: ['Town centre & The Mall', 'London Luton Airport', 'Kenilworth Road', 'Dunstable', 'Houghton Regis', 'M1 Junction 10/11'],
  },
  northampton: {
    intro: "Northampton is a large East Midlands town sitting just off the M1, historically the centre of England's shoe trade and now a busy logistics hub. Heavy distribution traffic keeps our fitters on the move.",
    localContext: 'Warehouse and HGV traffic, M1 debris, and pothole damage across the town cause many of the tyre failures we attend in Northampton. We cover the centre, Kingsthorpe, Far Cotton and out towards the surrounding villages, coming to you quickly.',
    landmarks: ['Town centre & Market Square', 'Sixfields Stadium', 'Northampton Saints (Franklin’s Gardens)', 'Kingsthorpe', 'Weston Favell', 'M1 Junction 15/15A/16'],
  },
  peterborough: {
    intro: "Peterborough is a fast-growing cathedral city on the A1(M) in Cambridgeshire, a key point on the Great North Road and East Coast routes. Its position on major arteries brings plenty of passing tyre emergencies.",
    localContext: 'A1(M) and A47 debris, parkway congestion, and pothole damage across the townships are common in Peterborough. We cover the centre, Orton, Werrington and Bretton, reaching you on the parkways, at home, or on the motorway hard shoulder.',
    landmarks: ['City centre & Cathedral', 'Queensgate', 'Weston Homes Stadium', 'Orton', 'Werrington', 'A1(M) / A47'],
  },
  york: {
    intro: "York is a historic walled city where narrow medieval streets meet a busy outer ring road, the A1237. Heavy tourist traffic and tight, ancient streets make a car breakdown here particularly awkward.",
    localContext: 'Tight cobbled and medieval streets, park-and-ride pressure, and congestion on the A1237 outer ring cause many of the tyre jobs we attend in York. Rather than nurse a damaged tyre through the bars and gates, let us come to you in Acomb, Clifton, Fulford or Haxby.',
    landmarks: ['City walls & Minster', 'The Shambles', 'York Designer Outlet', 'Acomb', 'Clifton', 'A1237 outer ring'],
  },
  blackpool: {
    intro: "Blackpool is Britain's best-known seaside resort, its seafront lined by the famous tramway and Illuminations that draw huge visitor traffic. Salt air and heavy tourist flows keep our fitters busy on the Fylde coast.",
    localContext: 'Salt-air corrosion, tram-track crossings on the promenade, and stop-start tourist traffic are behind many Blackpool tyre jobs. We cover the seafront, Bispham, Cleveleys and out towards Lytham and Fleetwood, bringing the replacement tyre to you.',
    landmarks: ['The Promenade & Tower', 'Pleasure Beach', 'Bispham & Cleveleys', 'Lytham St Annes', 'Fleetwood', 'M55 approach'],
  },
  bolton: {
    intro: "Bolton is one of the largest towns in Greater Manchester, sitting on the M61 with the West Pennine Moors rising behind it. Its mix of busy town roads and moorland approaches keeps demand for tyre help steady.",
    localContext: 'Moorland-road debris, M61 blowouts, and pothole damage across the town are the jobs we most often attend in Bolton. We cover the centre, Farnworth, Horwich and Westhoughton, reaching you at home or on the roadside with the right tyre on board.',
    landmarks: ['Town centre & Victoria Square', 'University of Bolton Stadium', 'Middlebrook, Horwich', 'Farnworth', 'Westhoughton', 'M61 corridor'],
  },
  middlesbrough: {
    intro: "Middlesbrough is the heart of Teesside, an industrial town linked by the A19 and A66 with the striking Transporter Bridge over the Tees. Heavy industry and coastal weather both take a toll on tyres.",
    localContext: 'Industrial-road debris, coastal weather, and pothole damage across Teesside are common causes of the tyre failures we attend here. We cover the town centre, Acklam, Linthorpe and out towards Stockton and Redcar, coming to you day or night.',
    landmarks: ['Town centre & Centre Square', 'Riverside Stadium', 'Transporter Bridge', 'Stockton-on-Tees', 'Redcar', 'A19 / A66'],
  },
  telford: {
    intro: "Telford is a modern Shropshire new town built around the M54, with a network of fast dual carriageways linking its districts. That road layout means quick journeys but also fast tyre wear and sudden roadside failures.",
    localContext: 'High-speed local dual carriageways, M54 debris, and pothole damage are behind many Telford tyre jobs. Our fitters cover the town centre, Wellington, Madeley and out towards Newport and Shifnal, reaching you quickly wherever you break down.',
    landmarks: ['Telford Centre', 'Ironbridge Gorge', 'Wellington', 'Madeley', 'Newport', 'M54 Junction 4-7'],
  },
  gloucester: {
    intro: "Gloucester sits on the River Severn beside the M5, twinned with neighbouring Cheltenham and gateway to the Forest of Dean and the Cotswolds. Its position on a major motorway corridor brings steady tyre demand.",
    localContext: 'M5 debris, congestion on the A38 and A40, and pothole damage on rural Gloucestershire roads are common here. We cover the city, Quedgeley, Hucclecote and out towards Cheltenham, bringing the replacement tyre to your home, work, or the roadside.',
    landmarks: ['Historic Docks & Cathedral', 'Gloucester Quays', 'Kingsholm', 'Quedgeley', 'Cheltenham', 'M5 Junction 11-12'],
  },
  exeter: {
    intro: "Exeter is the cathedral city that serves as the gateway to Devon and Cornwall, where the M5 ends and the A30 and A38 head into the South West. Its role as a regional hub keeps our fitters busy year round.",
    localContext: 'Holiday traffic heading south west, M5/A30 debris, and pothole damage on rural Devon roads are the jobs we see most in Exeter. Because onward garages get sparse beyond the city, our local fitters coming to you avoids a long drive on a damaged tyre.',
    landmarks: ['City centre & Cathedral', 'Princesshay', 'St James Park', 'Topsham', 'Exeter Airport', 'M5 Junction 29-31'],
  },
  watford: {
    intro: "Watford sits at the southern tip of Hertfordshire where the M1 and M25 meet, on the edge of Greater London. That junction of two of Britain's busiest motorways makes it a hotspot for roadside tyre call-outs.",
    localContext: 'The M1/M25 interchange sees constant debris and blowouts, while busy town roads bring kerb and pothole damage. Our fitters cover the town centre, Garston, Bushey and out towards Rickmansworth, reaching you fast on the motorway or at home.',
    landmarks: ['atria Watford & town centre', 'Vicarage Road', 'Warner Bros. Studio Tour', 'Bushey', 'Rickmansworth', 'M1/M25 Junction'],
  },
  slough: {
    intro: "Slough sits on the M4 just west of London, one of the busiest business and trading estates in the country and right next to Windsor and Heathrow. Heavy commercial traffic keeps demand for fast tyre help high.",
    localContext: 'M4 debris, trading-estate HGV traffic, and kerb damage in dense parking are common in Slough. We cover the town centre, Langley, Cippenham and out towards Windsor and Datchet, fitting tyres at business units, homes and the roadside.',
    landmarks: ['Town centre & Queensmere', 'Slough Trading Estate', 'Windsor & Eton', 'Langley', 'Cippenham', 'M4 Junction 5-7'],
  },
  bournemouth: {
    intro: "Bournemouth is a south-coast resort and conurbation stretching along the coast towards Poole and Christchurch, popular with visitors and retirees alike. Seven miles of beach draw seasonal traffic that keeps our fitters busy.",
    localContext: 'Salt-air corrosion, seasonal seafront congestion, and pothole damage across the conurbation are behind many tyre jobs here. We cover the town centre, Boscombe, Westbourne and out towards Poole and Christchurch, bringing the tyre to you.',
    landmarks: ['Pier & seafront', 'Town centre & The Square', 'Vitality Stadium', 'Boscombe', 'Poole', 'Christchurch'],
  },
  ipswich: {
    intro: "Ipswich is the county town of Suffolk, sitting on the River Orwell at the meeting of the A12 and A14, close to the huge Port of Felixstowe. Container and commuter traffic keep the roads here busy.",
    localContext: 'Heavy port-bound HGV traffic on the A14, debris on the A12, and pothole damage across the town are common in Ipswich. We cover the centre, Kesgrave, Rushmere and out towards Felixstowe, reaching you on the trunk roads or at home.',
    landmarks: ['Waterfront & marina', 'Town centre & Cornhill', 'Portman Road', 'Kesgrave', 'Felixstowe', 'A12 / A14'],
  },
  warrington: {
    intro: "Warrington sits between Manchester and Liverpool where the M6, M62 and M56 all meet, one of the most connected towns in the North West. That web of motorways makes it a frequent spot for roadside tyre emergencies.",
    localContext: 'The M6/M62/M56 junctions bring constant debris and blowouts, while busy town roads see kerb and pothole damage. Our fitters cover the town centre, Stockton Heath, Birchwood and out towards Lymm, reaching you quickly on the motorway or the driveway.',
    landmarks: ['Town centre & Golden Square', 'Halliwell Jones Stadium', 'Gemini Retail Park', 'Stockton Heath', 'Birchwood', 'M6/M62/M56'],
  },
  wigan: {
    intro: "Wigan is a large Greater Manchester town on the M6 with a proud industrial and sporting heritage. Its position between Manchester, Liverpool and Preston keeps its roads, and our fitters, busy.",
    localContext: 'M6 debris, congestion on the A49, and pothole damage across the borough are the tyre jobs we most often attend in Wigan. We cover the town centre, Hindley, Leigh and out towards Standish and Orrell, coming to your home or the roadside.',
    landmarks: ['Town centre & Grand Arcade', 'DW Stadium', 'Wigan Pier', 'Leigh', 'Standish', 'M6 Junction 25/26/27'],
  },
  doncaster: {
    intro: "Doncaster is a major South Yorkshire transport hub where the A1(M), M18 and M180 meet, long a key point on the Great North Road. That concentration of motorways brings a steady flow of roadside tyre call-outs.",
    localContext: 'The A1(M) and M18 junctions see frequent debris and blowouts, while town and colliery roads bring pothole damage. Our fitters cover the town centre, Bentley, Bessacarr and out towards Armthorpe and Thorne, reaching you fast wherever you break down.',
    landmarks: ['Town centre & Frenchgate', 'Eco-Power Stadium', 'Doncaster Racecourse', 'Bentley', 'Bessacarr', 'A1(M) / M18'],
  },
}
