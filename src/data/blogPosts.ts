export interface BlogSection {
  heading?: string
  paragraphs?: string[]
  list?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  /** ISO date for structured data */
  dateISO: string
  category: string
  readTime: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'flat-tyre-motorway',
    title: 'What to Do If You Get a Flat Tyre on the Motorway',
    excerpt: 'A flat tyre on the motorway can be dangerous. Here\'s exactly what to do to stay safe and get back on the road quickly.',
    date: '15 Jan 2025',
    dateISO: '2025-01-15',
    category: 'Safety',
    readTime: '5 min read',
    metaTitle: 'What to Do If You Get a Flat Tyre on the Motorway (UK Guide)',
    metaDescription: 'Step-by-step UK guide on what to do if you get a flat tyre or blowout on the motorway. Stay safe, follow the rules, and get back on the road fast.',
    intro: 'Suffering a flat tyre or blowout at 70mph is one of the most unnerving things that can happen on the road. Knowing exactly what to do in the moments that follow keeps you safe and gets you moving again quickly. Here is the UK-specific advice every driver should know.',
    sections: [
      {
        heading: 'Keep control and slow down gradually',
        paragraphs: [
          'If a tyre deflates or blows out while you are driving, grip the wheel firmly with both hands and keep the car pointing straight. Do not brake sharply — ease off the accelerator and let the car slow down naturally. Sudden braking or steering can cause you to lose control, especially with a front tyre failure.',
          'Indicate and move to the hard shoulder (or, on a smart motorway, the nearest emergency refuge area or exit) as smoothly as you can. Try to get as far to the left as possible, with your wheels turned slightly to the left.',
        ],
      },
      {
        heading: 'Get yourself to safety',
        paragraphs: [
          'Once stopped, switch on your hazard lights. On a conventional motorway with a hard shoulder, exit the vehicle via the left-hand (passenger) doors and stand behind the safety barrier, well away from moving traffic. Take any passengers and pets with you.',
          'Never attempt to change a tyre yourself on a live motorway or hard shoulder — passing traffic makes it extremely dangerous. Do not place a warning triangle on a motorway either; it puts you at risk walking back to the carriageway.',
        ],
      },
      {
        heading: 'Call for help',
        paragraphs: [
          'From a safe position behind the barrier, call for assistance. If you are in immediate danger, call 999. Otherwise, contact a 24/7 mobile tyre fitting or recovery service and give them your location — use the marker posts on the hard shoulder or the location displayed on the nearest sign to pinpoint where you are.',
          'A mobile tyre fitter can supply and fit a brand-new tyre at your location, meaning you avoid a tow to a garage and the wait that comes with it. On smart motorways without a hard shoulder, follow Highways England guidance and stay in your vehicle with your seatbelt on only if you cannot safely exit.',
        ],
      },
      {
        heading: 'Prevention: reduce the risk of a blowout',
        list: [
          'Check tyre pressures at least monthly and before long journeys.',
          'Inspect tyres for cuts, bulges, and embedded objects.',
          'Keep tread depth well above the 1.6mm UK legal minimum.',
          'Replace tyres that are cracked or more than around 10 years old.',
          'Avoid potholes and kerbs where possible — impact damage is a common cause of sudden failure.',
        ],
      },
    ],
  },
  {
    slug: 'how-long-tyres-last',
    title: 'How Long Should Your Tyres Last?',
    excerpt: 'Learn the average lifespan of car tyres, the signs of wear to watch for, and how to maximise tyre longevity.',
    date: '10 Jan 2025',
    dateISO: '2025-01-10',
    category: 'Maintenance',
    readTime: '6 min read',
    metaTitle: 'How Long Should Car Tyres Last? UK Lifespan & Wear Guide',
    metaDescription: 'How many miles and years should car tyres last? Learn the signs of wear, the 1.6mm UK legal limit, and how to make your tyres last longer.',
    intro: 'Tyres are the only part of your car that touches the road, so knowing when they need replacing is essential for safety and economy. There is no single answer to how long they last — it depends on the tyre, your car, and how you drive — but there are clear benchmarks and warning signs to watch for.',
    sections: [
      {
        heading: 'Average tyre lifespan',
        paragraphs: [
          'As a rough guide, a typical set of car tyres lasts around 20,000 to 40,000 miles, with front tyres often wearing faster than rears on front-wheel-drive cars. In terms of age, most manufacturers recommend replacing tyres that are more than 10 years old regardless of tread, because the rubber hardens and degrades over time.',
          'Your actual mileage will vary depending on tyre quality, driving style, road conditions, and how well the car is maintained. Premium tyres often last longer and perform better than budget options, which can offset their higher upfront cost.',
        ],
      },
      {
        heading: 'The UK legal tread depth limit',
        paragraphs: [
          'In the UK, the legal minimum tread depth is 1.6mm across the central three-quarters of the tyre and around its entire circumference. Driving on tyres below this limit risks a fine of up to £2,500 and three penalty points per tyre, as well as a failed MOT.',
          'For safety, many experts recommend replacing tyres at around 3mm rather than waiting for 1.6mm, as wet-weather grip and braking distances deteriorate significantly as tread wears down. A quick check: insert a 20p coin into the tread grooves — if you can see the outer band of the coin, your tread may be too low.',
        ],
      },
      {
        heading: 'Signs your tyres need replacing',
        list: [
          'Tread approaching or below 1.6mm (use the 20p test or a tread gauge).',
          'Cracks, cuts, or bulges in the sidewall.',
          'Uneven wear across the tyre, which can indicate alignment or pressure issues.',
          'Vibration or a pulling sensation while driving.',
          'The tyre is more than 10 years old (check the four-digit date code on the sidewall).',
        ],
      },
      {
        heading: 'How to make your tyres last longer',
        list: [
          'Keep tyres inflated to the correct pressure for your vehicle and load.',
          'Have your wheel alignment and balancing checked periodically.',
          'Rotate tyres if recommended for your vehicle.',
          'Drive smoothly — harsh acceleration, braking, and cornering accelerate wear.',
          'Avoid overloading the car beyond its recommended limits.',
        ],
      },
    ],
  },
  {
    slug: 'run-flat-vs-standard',
    title: 'Run-Flat Tyres vs Standard Tyres: Which Is Better?',
    excerpt: 'We compare run-flat tyres and standard tyres to help you decide which is best for your vehicle and driving style.',
    date: '5 Jan 2025',
    dateISO: '2025-01-05',
    category: 'Guide',
    readTime: '6 min read',
    metaTitle: 'Run-Flat vs Standard Tyres: Which Should You Choose?',
    metaDescription: 'A clear comparison of run-flat and standard tyres — how they work, the pros and cons, cost, and which is right for your car.',
    intro: 'If your car came fitted with run-flat tyres, you may be wondering whether to stick with them or switch to standard tyres at replacement time. Both have genuine advantages. Here is how they compare so you can make the right choice for your vehicle and budget.',
    sections: [
      {
        heading: 'How run-flat tyres work',
        paragraphs: [
          'Run-flat tyres have reinforced sidewalls that can temporarily support the weight of the vehicle even after a puncture and loss of air pressure. This allows you to keep driving — typically up to around 50 miles at reduced speed (usually no more than 50mph) — so you can reach a safe place or a fitter rather than stopping at the roadside.',
          'Because of this, cars fitted with run-flats often do not carry a spare wheel, which saves boot space and weight. They rely on a tyre pressure monitoring system (TPMS) to alert you to a loss of pressure, since the tyre may not look visibly flat.',
        ],
      },
      {
        heading: 'The pros and cons',
        paragraphs: [
          'Run-flats offer clear safety and convenience benefits: you can keep moving after a puncture and avoid changing a wheel in a dangerous spot. The trade-offs are a firmer ride, generally higher prices, and the fact that they usually cannot be repaired — a punctured run-flat normally needs replacing.',
          'Standard tyres tend to be cheaper, offer a more comfortable ride, and can often be repaired if the damage is minor and in the central tread area. The downside is that a puncture means stopping to fit a spare or calling for assistance.',
        ],
      },
      {
        heading: 'Can you switch between the two?',
        paragraphs: [
          'In many cases yes, but there are important considerations. If you switch from run-flats to standard tyres, you should carry a spare wheel or a tyre repair kit, since you will no longer be able to drive on a flat. It is also best to replace all four tyres with the same type rather than mixing run-flats and standard tyres, as mixing can affect handling.',
          'Always check your vehicle handbook or ask a professional fitter before switching, and make sure any replacement matches the correct size, load rating, and speed rating for your car.',
        ],
      },
      {
        heading: 'Which should you choose?',
        paragraphs: [
          'If safety and convenience are your priorities and your car was designed for run-flats, staying with them makes sense. If ride comfort and cost matter more — and you are happy to carry a spare or call a mobile fitter when needed — quality standard tyres are an excellent choice. Whichever you pick, a mobile tyre fitter can supply and fit both types at your home, work, or roadside.',
        ],
      },
    ],
  },
  {
    slug: 'winter-tyre-guide',
    title: 'Winter Tyre Guide for UK Drivers',
    excerpt: 'Everything you need to know about winter tyres in the UK — when to fit them, the benefits, and the law.',
    date: '28 Dec 2024',
    dateISO: '2024-12-28',
    category: 'Seasonal',
    readTime: '5 min read',
    metaTitle: 'Winter Tyres UK: When to Fit Them, Benefits & the Law',
    metaDescription: 'A UK driver\'s guide to winter tyres — how they work, when to fit them, whether they\'re a legal requirement, and if they\'re worth it.',
    intro: 'Winter tyres are common across much of mainland Europe, but many UK drivers are unsure whether they are worth it here. With our cold, wet winters, they can make a real difference to safety. Here is what every UK driver should know.',
    sections: [
      {
        heading: 'What makes a winter tyre different',
        paragraphs: [
          'Winter tyres use a special rubber compound that stays soft and flexible in cold temperatures, plus a tread pattern with thousands of small slits (sipes) that bite into snow, slush, and wet roads. The key threshold is 7°C — below this, standard summer tyres begin to harden and lose grip, while winter tyres continue to perform.',
          'This means winter tyres are not just for snow. They improve braking and grip in cold, wet, and icy conditions that are far more common on UK roads than heavy snowfall.',
        ],
      },
      {
        heading: 'When should you fit them?',
        paragraphs: [
          'A good rule of thumb is to fit winter tyres from around late October or early November and switch back in March or April, when average temperatures consistently rise above 7°C. Many drivers keep a second set of wheels with winter tyres already fitted to make the seasonal swap quick and inexpensive.',
        ],
      },
      {
        heading: 'Are winter tyres a legal requirement in the UK?',
        paragraphs: [
          'No — unlike some European countries, the UK has no law requiring winter tyres. They are optional. However, if you regularly drive in rural areas, on hills, or in regions prone to cold snaps, they can dramatically improve safety and may reduce your risk of an accident.',
          'It is worth checking your insurance policy: most UK insurers treat winter tyres as a sensible safety measure rather than a modification, but it is good practice to confirm.',
        ],
      },
      {
        heading: 'Winter tyres vs all-season tyres',
        paragraphs: [
          'If swapping tyres twice a year sounds like hassle, all-season tyres are a popular compromise. They offer better cold-weather performance than summer tyres while remaining usable year-round, making them ideal for drivers who want decent grip in winter without the storage and changeover of a dedicated winter set. A mobile tyre fitter can supply and fit winter or all-season tyres at your home or workplace.',
        ],
      },
    ],
  },
  {
    slug: 'mobile-vs-garage',
    title: 'Why Mobile Tyre Fitting Beats Garage Visits',
    excerpt: 'Discover the benefits of mobile tyre fitting — convenience, speed, and why more UK drivers are choosing it.',
    date: '20 Dec 2024',
    dateISO: '2024-12-20',
    category: 'Service',
    readTime: '4 min read',
    metaTitle: 'Mobile Tyre Fitting vs Garage: Why Drivers Are Switching',
    metaDescription: 'Mobile tyre fitting brings the garage to you. Compare mobile fitting with traditional garage visits on convenience, speed, price, and safety.',
    intro: 'Traditionally, a flat or worn tyre meant booking a garage, arranging time off, and sitting in a waiting room. Mobile tyre fitting flips that model — the fitter comes to you. Here is why a growing number of UK drivers are choosing mobile over the garage.',
    sections: [
      {
        heading: 'Total convenience',
        paragraphs: [
          'With mobile tyre fitting, there is no need to drive to a garage, wait around, or rearrange your day. The fitter comes to your home, workplace, or the roadside at a time that suits you, and carries out the work on the spot. You can carry on with your day while your tyres are replaced on your own driveway or in the office car park.',
        ],
      },
      {
        heading: 'Speed in an emergency',
        paragraphs: [
          'If you have a flat or a blowout, mobile fitting is often faster than recovery to a garage. A good 24/7 service can reach you within 30 to 45 minutes, supply a new tyre from the van, and have you back on the road without a tow. That is a major advantage when you are stranded at the roadside or it is the middle of the night.',
        ],
      },
      {
        heading: 'Safety',
        paragraphs: [
          'Driving on a damaged or under-inflated tyre to reach a garage is risky and can cause further damage. Mobile fitting removes that risk — the work is done where the car is, so you never have to drive on a compromised tyre.',
        ],
      },
      {
        heading: 'Is it more expensive?',
        paragraphs: [
          'Many people assume the convenience of mobile fitting comes at a premium, but that is often not the case. Reputable mobile fitters offer transparent, competitive pricing with no hidden call-out fees, and the price typically includes fitting, balancing, a new valve, and disposal of the old tyre. When you factor in the time and fuel saved, mobile fitting frequently works out better value overall.',
        ],
      },
    ],
  },
  {
    slug: 'tyre-labels-explained',
    title: 'Understanding Tyre Labels: Fuel, Wet Grip & Noise',
    excerpt: 'How to read EU tyre labels and what fuel efficiency, wet grip, and noise ratings really mean for your driving.',
    date: '15 Dec 2024',
    dateISO: '2024-12-15',
    category: 'Guide',
    readTime: '5 min read',
    metaTitle: 'Tyre Labels Explained: Fuel, Wet Grip & Noise Ratings',
    metaDescription: 'Learn how to read tyre labels in the UK — what the fuel efficiency, wet grip, and noise ratings mean and how to choose the right tyre.',
    intro: 'Every new tyre sold in the UK comes with a standardised label, similar to the energy labels on household appliances. These labels make it easier to compare tyres on three key measures. Here is what each rating means and how to use them when choosing your next set.',
    sections: [
      {
        heading: 'Fuel efficiency (rolling resistance)',
        paragraphs: [
          'The fuel efficiency rating, graded from A (most efficient) to E (least efficient), reflects the tyre\'s rolling resistance — how much energy is lost as the tyre rolls. A more efficient tyre requires less energy to move, which can reduce fuel consumption and emissions over the life of the tyre. The difference between the best and worst ratings can add up to a noticeable saving at the pump.',
        ],
      },
      {
        heading: 'Wet grip (braking performance)',
        paragraphs: [
          'The wet grip rating, also graded A to E, indicates how well the tyre stops on wet roads. This is one of the most important safety measures: the braking distance between an A-rated and a lower-rated tyre in the wet can be several car lengths. For UK driving, where wet roads are common, prioritising a strong wet grip rating is a smart safety decision.',
        ],
      },
      {
        heading: 'Noise level',
        paragraphs: [
          'The noise rating shows the external noise the tyre produces, measured in decibels and shown with sound-wave bars. Quieter tyres make for a more comfortable, refined drive and reduce noise pollution. While noise is less safety-critical than grip, it is worth considering if you do a lot of motorway mileage.',
        ],
      },
      {
        heading: 'How to use the label when buying',
        paragraphs: [
          'Use the label as a starting point rather than the only factor. Balance fuel efficiency and noise against wet grip and your budget, and remember the label does not cover everything — dry handling, durability, and performance in snow are not shown. If you are unsure which tyre suits your car and driving, a professional fitter can recommend the right option and fit it at your location.',
        ],
      },
    ],
  },
]

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
