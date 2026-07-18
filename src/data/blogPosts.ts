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
  image: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: BlogSection[]
  /** Tags for article:tag OG meta and keyword targeting */
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'flat-tyre-motorway',
    image: '/images/hero-bg.jpg',
    title: 'What to Do If You Get a Flat Tyre on the Motorway',
    excerpt: 'A flat tyre on the motorway can be dangerous. Here\'s exactly what to do to stay safe and get back on the road quickly.',
    date: '15 Jan 2025',
    dateISO: '2025-01-15',
    category: 'Safety',
    readTime: '5 min read',
    metaTitle: 'What to Do If You Get a Flat Tyre on the Motorway (UK Guide)',
    metaDescription: 'Step-by-step UK guide on what to do if you get a flat tyre or blowout on the motorway. Stay safe, follow the rules, and get back on the road fast.',
    intro: 'Suffering a flat tyre or blowout at 70mph is one of the most unnerving things that can happen on the road. Knowing exactly what to do in the moments that follow keeps you safe and gets you moving again quickly. Here is the UK-specific advice every driver should know.',
    tags: ['flat tyre', 'motorway safety', 'blowout', 'tyre emergency', 'breakdown'],
    sections: [
      {
        heading: 'Keep control and slow down gradually',
        paragraphs: [
          'If a tyre deflates or blows out while you are driving, grip the wheel firmly with both hands and keep the car pointing straight. Do not brake sharply, ease off the accelerator and let the car slow down naturally. Sudden braking or steering can cause you to lose control, especially with a front tyre failure.',
          'Indicate and move to the hard shoulder (or, on a smart motorway, the nearest emergency refuge area or exit) as smoothly as you can. Try to get as far to the left as possible, with your wheels turned slightly to the left.',
        ],
      },
      {
        heading: 'Get yourself to safety',
        paragraphs: [
          'Once stopped, switch on your hazard lights. On a conventional motorway with a hard shoulder, exit the vehicle via the left-hand (passenger) doors and stand behind the safety barrier, well away from moving traffic. Take any passengers and pets with you.',
          'Never attempt to change a tyre yourself on a live motorway or hard shoulder, passing traffic makes it extremely dangerous. Do not place a warning triangle on a motorway either; it puts you at risk walking back to the carriageway.',
        ],
      },
      {
        heading: 'Call for help',
        paragraphs: [
          'From a safe position behind the barrier, call for assistance. If you are in immediate danger, call 999. Otherwise, contact a 24/7 mobile tyre fitting or recovery service and give them your location, use the marker posts on the hard shoulder or the location displayed on the nearest sign to pinpoint where you are.',
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
          'Avoid potholes and kerbs where possible, impact damage is a common cause of sudden failure.',
        ],
      },
    ],
  },
  {
    slug: 'how-long-tyres-last',
    image: '/images/service-emergency.jpg',
    title: 'How Long Should Your Tyres Last?',
    excerpt: 'Learn the average lifespan of car tyres, the signs of wear to watch for, and how to maximise tyre longevity.',
    date: '10 Jan 2025',
    dateISO: '2025-01-10',
    category: 'Maintenance',
    readTime: '6 min read',
    metaTitle: 'How Long Should Car Tyres Last? UK Lifespan & Wear Guide',
    metaDescription: 'How many miles and years should car tyres last? Learn the signs of wear, the 1.6mm UK legal limit, and how to make your tyres last longer.',
    intro: 'Tyres are the only part of your car that touches the road, so knowing when they need replacing is essential for safety and economy. There is no single answer to how long they last, it depends on the tyre, your car, and how you drive, but there are clear benchmarks and warning signs to watch for.',
    tags: ['tyre lifespan', 'tyre wear', 'tyre replacement', 'tyre maintenance'],
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
          'For safety, many experts recommend replacing tyres at around 3mm rather than waiting for 1.6mm, as wet-weather grip and braking distances deteriorate significantly as tread wears down. A quick check: insert a 20p coin into the tread grooves, if you can see the outer band of the coin, your tread may be too low.',
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
          'Drive smoothly, harsh acceleration, braking, and cornering accelerate wear.',
          'Avoid overloading the car beyond its recommended limits.',
        ],
      },
    ],
  },
  {
    slug: 'run-flat-vs-standard',
    image: '/images/service-fleet.jpg',
    title: 'Run-Flat Tyres vs Standard Tyres: Which Is Better?',
    excerpt: 'We compare run-flat tyres and standard tyres to help you decide which is best for your vehicle and driving style.',
    date: '5 Jan 2025',
    dateISO: '2025-01-05',
    category: 'Guide',
    readTime: '6 min read',
    metaTitle: 'Run-Flat vs Standard Tyres: Which Should You Choose?',
    metaDescription: 'A clear comparison of run-flat and standard tyres, how they work, the pros and cons, cost, and which is right for your car.',
    intro: 'If your car came fitted with run-flat tyres, you may be wondering whether to stick with them or switch to standard tyres at replacement time. Both have genuine advantages. Here is how they compare so you can make the right choice for your vehicle and budget.',
    tags: ['run-flat tyres', 'tyre types', 'tyre comparison', 'tyre safety'],
    sections: [
      {
        heading: 'How run-flat tyres work',
        paragraphs: [
          'Run-flat tyres have reinforced sidewalls that can temporarily support the weight of the vehicle even after a puncture and loss of air pressure. This allows you to keep driving, typically up to around 50 miles at reduced speed (usually no more than 50mph), so you can reach a safe place or a fitter rather than stopping at the roadside.',
          'Because of this, cars fitted with run-flats often do not carry a spare wheel, which saves boot space and weight. They rely on a tyre pressure monitoring system (TPMS) to alert you to a loss of pressure, since the tyre may not look visibly flat.',
        ],
      },
      {
        heading: 'The pros and cons',
        paragraphs: [
          'Run-flats offer clear safety and convenience benefits: you can keep moving after a puncture and avoid changing a wheel in a dangerous spot. The trade-offs are a firmer ride, generally higher prices, and the fact that they usually cannot be repaired, a punctured run-flat normally needs replacing.',
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
          'If safety and convenience are your priorities and your car was designed for run-flats, staying with them makes sense. If ride comfort and cost matter more, and you are happy to carry a spare or call a mobile fitter when needed, quality standard tyres are an excellent choice. Whichever you pick, a mobile tyre fitter can supply and fit both types at your home, work, or roadside.',
        ],
      },
    ],
  },
  {
    slug: 'winter-tyre-guide',
    image: '/images/city-manchester.jpg',
    title: 'Winter Tyre Guide for UK Drivers',
    excerpt: 'Everything you need to know about winter tyres in the UK, when to fit them, the benefits, and the law.',
    date: '28 Dec 2024',
    dateISO: '2024-12-28',
    category: 'Seasonal',
    readTime: '5 min read',
    metaTitle: 'Winter Tyres UK: When to Fit Them, Benefits & the Law',
    metaDescription: 'A UK driver\'s guide to winter tyres, how they work, when to fit them, whether they\'re a legal requirement, and if they\'re worth it.',
    intro: 'Winter tyres are common across much of mainland Europe, but many UK drivers are unsure whether they are worth it here. With our cold, wet winters, they can make a real difference to safety. Here is what every UK driver should know.',
    tags: ['winter tyres', 'tyre safety', 'seasonal tyres', 'driving in snow'],
    sections: [
      {
        heading: 'What makes a winter tyre different',
        paragraphs: [
          'Winter tyres use a special rubber compound that stays soft and flexible in cold temperatures, plus a tread pattern with thousands of small slits (sipes) that bite into snow, slush, and wet roads. The key threshold is 7°C, below this, standard summer tyres begin to harden and lose grip, while winter tyres continue to perform.',
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
          'No, unlike some European countries, the UK has no law requiring winter tyres. They are optional. However, if you regularly drive in rural areas, on hills, or in regions prone to cold snaps, they can dramatically improve safety and may reduce your risk of an accident.',
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
    image: '/images/service-home.jpg',
    title: 'Why Mobile Tyre Fitting Beats Garage Visits',
    excerpt: 'Discover the benefits of mobile tyre fitting, convenience, speed, and why more UK drivers are choosing it.',
    date: '20 Dec 2024',
    dateISO: '2024-12-20',
    category: 'Service',
    readTime: '4 min read',
    metaTitle: 'Mobile Tyre Fitting vs Garage: Why Drivers Are Switching',
    metaDescription: 'Mobile tyre fitting brings the garage to you. Compare mobile fitting with traditional garage visits on convenience, speed, price, and safety.',
    intro: 'Traditionally, a flat or worn tyre meant booking a garage, arranging time off, and sitting in a waiting room. Mobile tyre fitting flips that model, the fitter comes to you. Here is why a growing number of UK drivers are choosing mobile over the garage.',
    tags: ['mobile tyre fitting', 'garage vs mobile', 'tyre fitting comparison', 'convenience'],
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
          'Driving on a damaged or under-inflated tyre to reach a garage is risky and can cause further damage. Mobile fitting removes that risk, the work is done where the car is, so you never have to drive on a compromised tyre.',
        ],
      },
      {
        heading: 'Is it more expensive?',
        paragraphs: [
          'Many people assume the convenience of mobile fitting comes at a premium, but that is often not the case. Reputable mobile fitters offer transparent, competitive pricing quoted upfront, and the price typically includes fitting, balancing, a new valve, and disposal of the old tyre. When you factor in the time and fuel saved, mobile fitting frequently works out better value overall.',
        ],
      },
    ],
  },
  {
    slug: 'tyre-labels-explained',
    image: '/images/city-birmingham.jpg',
    title: 'Understanding Tyre Labels: Fuel, Wet Grip & Noise',
    excerpt: 'How to read EU tyre labels and what fuel efficiency, wet grip, and noise ratings really mean for your driving.',
    date: '15 Dec 2024',
    dateISO: '2024-12-15',
    category: 'Guide',
    readTime: '5 min read',
    metaTitle: 'Tyre Labels Explained: Fuel, Wet Grip & Noise Ratings',
    metaDescription: 'Learn how to read tyre labels in the UK, what the fuel efficiency, wet grip, and noise ratings mean and how to choose the right tyre.',
    intro: 'Every new tyre sold in the UK comes with a standardised label, similar to the energy labels on household appliances. These labels make it easier to compare tyres on three key measures. Here is what each rating means and how to use them when choosing your next set.',
    tags: ['tyre labels', 'fuel efficiency', 'wet grip', 'tyre ratings', 'EU tyre label'],
    sections: [
      {
        heading: 'Fuel efficiency (rolling resistance)',
        paragraphs: [
          'The fuel efficiency rating, graded from A (most efficient) to E (least efficient), reflects the tyre\'s rolling resistance, how much energy is lost as the tyre rolls. A more efficient tyre requires less energy to move, which can reduce fuel consumption and emissions over the life of the tyre. The difference between the best and worst ratings can add up to a noticeable saving at the pump.',
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
          'Use the label as a starting point rather than the only factor. Balance fuel efficiency and noise against wet grip and your budget, and remember the label does not cover everything, dry handling, durability, and performance in snow are not shown. If you are unsure which tyre suits your car and driving, a professional fitter can recommend the right option and fit it at your location.',
        ],
      },
    ],
  },
  {
    slug: 'mobile-tyre-fitting-cost',
    image: '/images/service-emergency.jpg',
    title: 'How Much Does Mobile Tyre Fitting Cost in the UK?',
    excerpt: 'A clear breakdown of what mobile tyre fitting costs in the UK, what is included in the price, and how it compares to a traditional garage.',
    date: '20 Feb 2025',
    dateISO: '2025-02-20',
    category: 'Guide',
    readTime: '6 min read',
    metaTitle: 'How Much Does Mobile Tyre Fitting Cost in the UK? (2025 Guide)',
    metaDescription: 'How much does mobile tyre fitting cost in the UK? A transparent breakdown of tyre prices, what is included, and how mobile fitting compares to a garage.',
    intro: 'One of the first questions drivers ask about mobile tyre fitting is what it costs, and whether having a fitter come to you is more expensive than visiting a garage. The honest answer is that the price you pay is built almost entirely around the tyre itself. Here is a transparent breakdown of what goes into a mobile tyre fitting quote in the UK.',
    tags: ['tyre fitting cost', 'tyre prices', 'mobile tyre fitting', 'tyre replacement cost'],
    sections: [
      {
        heading: 'What determines the price of a fitted tyre',
        paragraphs: [
          'The single biggest factor in any quote is the tyre you choose. Tyre prices vary by size, brand, and performance category. A small budget tyre for a city car sits at the lower end, a mid-range tyre for a family hatchback in the middle, and a large premium or performance tyre for a 4x4 or executive car at the higher end.',
          'Your tyre size is printed on the sidewall of your current tyres (for example 205/55 R16). Once you know that, a fitter can give you an exact, all-inclusive price for your vehicle over the phone.',
        ],
      },
      {
        heading: 'What is included in a mobile fitting price',
        list: [
          'The new tyre itself, in the brand and size you choose',
          'Professional fitting at your home, work, or roadside',
          'Wheel balancing to prevent vibration and uneven wear',
          'A new valve fitted as standard',
          'Disposal of your old tyre, handled responsibly for you',
        ],
      },
      {
        heading: 'Is mobile fitting more expensive than a garage?',
        paragraphs: [
          'A common assumption is that the convenience of mobile fitting carries a big premium. In practice, a reputable mobile service quotes a single all-inclusive price with no hidden extras, and you save the cost and time of getting a damaged car to a garage, no recovery fee, no taxi home, no day off work.',
          'When you factor in those hidden costs of the traditional route, mobile fitting is often comparable or cheaper overall, especially in an emergency where the alternative is a tow.',
        ],
      },
      {
        heading: 'Watch out for hidden charges',
        paragraphs: [
          'Always ask whether the quote is fully inclusive. With us, the price we give you upfront covers the tyre, fitting, balancing, a new valve, and old tyre disposal, with no out-of-hours, weekend, or bank holiday surcharges. The price you are quoted is the price you pay.',
        ],
      },
      {
        heading: 'Getting an accurate quote',
        paragraphs: [
          'The quickest way to know exactly what your tyre will cost is a short phone call or WhatsApp message with your tyre size and location. We will confirm the price for your vehicle, give you an ETA, and dispatch the nearest van, often reaching you within 30 to 45 minutes.',
        ],
      },
    ],
  },
  {
    slug: 'legal-tyre-tread-depth-uk',
    image: '/images/step-fitting.jpg',
    title: 'What Is the Legal Tyre Tread Depth in the UK?',
    excerpt: 'The UK legal minimum tyre tread depth, how to check yours with the 20p test, and the penalties for driving on illegal tyres.',
    date: '18 Feb 2025',
    dateISO: '2025-02-18',
    category: 'Legal',
    readTime: '5 min read',
    metaTitle: 'Legal Tyre Tread Depth UK: The 20p Test & Penalties Explained',
    metaDescription: 'The legal tyre tread depth in the UK is 1.6mm. Learn how to check your tread with the 20p test and the fines and penalty points for illegal tyres.',
    intro: 'Worn tyres are one of the most common reasons cars fail their MOT, and driving on them is both dangerous and illegal. Knowing the legal limit and how to check your own tyres takes less than a minute and could save you from a hefty fine. Here is what every UK driver needs to know.',
    tags: ['tyre tread depth', 'legal minimum', 'MOT', 'tyre law UK', 'tyre safety'],
    sections: [
      {
        heading: 'The UK legal minimum is 1.6mm',
        paragraphs: [
          'In the UK, the legal minimum tread depth for cars is 1.6mm across the central three-quarters of the tyre, around its entire circumference. This applies to cars, vans, and trailers up to 3,500kg. Tread is what channels water away from the contact patch, so as it wears down, your grip and braking in the wet get dramatically worse.',
          'While 1.6mm is the legal limit, many safety experts and manufacturers recommend replacing tyres at 3mm, as wet braking performance falls off sharply below that point.',
        ],
      },
      {
        heading: 'How to check with the 20p test',
        paragraphs: [
          'You do not need any special tools to get a quick indication of your tread depth. Take a 20p coin and insert it into the main tread grooves of the tyre. If the outer band of the coin is hidden by the tread, your tyres are above the legal limit. If you can see the outer band, your tread may be illegal and you should have the tyres checked by a professional.',
          'Check at several points across the width and around the tyre, as tyres often wear unevenly. Repeat for all four tyres.',
        ],
      },
      {
        heading: 'Penalties for illegal tyres',
        paragraphs: [
          'Driving with a tyre below 1.6mm can land you a fine of up to 2,500 pounds and 3 penalty points, per tyre. That means a car with four illegal tyres could in theory result in a 10,000 pound fine and 12 points, enough to lose your licence. Beyond the legal risk, worn tyres significantly increase your stopping distance in the wet.',
        ],
      },
      {
        heading: 'What to do if your tyres are worn',
        paragraphs: [
          'If your tread is near or below the limit, replace the affected tyres as soon as possible. A mobile tyre fitter can supply and fit new tyres at your home or workplace, so you do not have to drive on illegal or unsafe tyres to reach a garage. Call or WhatsApp with your tyre size for an instant quote.',
        ],
      },
    ],
  },
  {
    slug: 'can-you-drive-on-a-flat-tyre',
    image: '/images/hero-bg.jpg',
    title: 'Can You Drive on a Flat Tyre? What Happens If You Do',
    excerpt: 'Whether it is ever safe to drive on a flat tyre, how far you can go, and the damage it can cause to your wheel and car.',
    date: '12 Feb 2025',
    dateISO: '2025-02-12',
    category: 'Safety',
    readTime: '5 min read',
    metaTitle: 'Can You Drive on a Flat Tyre? What Happens If You Do (UK)',
    metaDescription: 'Can you drive on a flat tyre? Learn how far you can safely go, the damage driving on a flat causes, and what to do instead if you get a puncture.',
    intro: 'It is a situation most drivers face at some point: you come back to your car and find a tyre completely flat, or you feel one deflate as you drive. The temptation is to limp to the nearest garage, but driving on a flat tyre can be dangerous and costly. Here is what you need to know.',
    tags: ['flat tyre', 'driving on flat', 'tyre damage', 'tyre safety'],
    sections: [
      {
        heading: 'The short answer: avoid it if you can',
        paragraphs: [
          'Driving on a fully flat tyre is strongly discouraged. Without air, the tyre cannot support the weight of the car, the rubber overheats and breaks up, and you are effectively running on the metal wheel. Even a short distance can destroy the tyre beyond repair and damage the wheel itself.',
          'You also lose a significant amount of steering and braking control, particularly in a corner or emergency, which makes driving on a flat a genuine safety hazard to you and others.',
        ],
      },
      {
        heading: 'How far can you actually drive?',
        paragraphs: [
          'If you absolutely must move the car a few metres to reach a safe spot, do so slowly and carefully. Beyond that, you should not drive on a flat. What may feel like a small saving in time often turns a repairable puncture into a write-off, and can add the cost of a new wheel, or even suspension damage, on top of a new tyre.',
        ],
      },
      {
        heading: 'Run-flat tyres are different',
        paragraphs: [
          'If your car is fitted with run-flat tyres, they are designed to be driven on for a limited distance after a loss of pressure, typically up to around 50 miles at a reduced speed of around 50mph. Check your handbook for the exact figures. Even so, a run-flat that has been driven on usually needs replacing rather than repairing.',
        ],
      },
      {
        heading: 'The safer alternative',
        paragraphs: [
          'Instead of risking further damage, stay put and call a mobile tyre fitter. We come to your location with a new tyre, fit and balance it on the spot, and have you back on the road, often within 30 to 45 minutes. It saves your wheel, avoids a tow, and is usually quicker than driving to a garage on a ruined tyre.',
        ],
      },
    ],
  },
  {
    slug: 'correct-tyre-pressure-guide',
    image: '/images/step-fitting.jpg',
    title: 'Tyre Pressure Guide: Finding the Correct PSI for Your Car',
    excerpt: 'How to find the right tyre pressure for your vehicle, why it matters, and how often you should check it.',
    date: '8 Feb 2025',
    dateISO: '2025-02-08',
    category: 'Maintenance',
    readTime: '5 min read',
    metaTitle: 'Correct Tyre Pressure Guide: Find the Right PSI for Your Car',
    metaDescription: 'How to find the correct tyre pressure for your car, where to check it, and why the right PSI improves safety, fuel economy, and tyre life.',
    intro: 'Correct tyre pressure is one of the simplest and most overlooked parts of car maintenance. Get it right and your tyres last longer, your car is safer, and you use less fuel. Get it wrong and you risk uneven wear, poor handling, and even a blowout. Here is how to find and maintain the right pressure.',
    tags: ['tyre pressure', 'tyre maintenance', 'fuel efficiency', 'tyre safety', 'TPMS'],
    sections: [
      {
        heading: 'Where to find your correct pressure',
        paragraphs: [
          'The recommended pressures for your car are set by the manufacturer, not the tyre maker. You will usually find them on a sticker inside the driver\'s door shut, inside the fuel filler flap, or in the owner\'s handbook. Pressures are given in PSI or bar, and often list different figures for front and rear, and for a fully loaded car.',
          'Always set pressures to the vehicle manufacturer\'s figures for your specific load, not a generic number.',
        ],
      },
      {
        heading: 'Why correct pressure matters',
        list: [
          'Safety: correct pressure gives the best grip, braking, and steering response',
          'Tyre life: under or over-inflation causes uneven wear and shortens tyre life',
          'Fuel economy: under-inflated tyres increase rolling resistance and fuel use',
          'Comfort: the right pressure gives a balanced, controlled ride',
        ],
      },
      {
        heading: 'How often to check',
        paragraphs: [
          'Check your tyre pressures at least once a month and before any long journey. Always check when the tyres are cold (driven less than a couple of miles), as warm tyres read higher and give a false figure. Do not forget the spare, if your car has one.',
          'If you find a tyre repeatedly low on air, it may have a slow puncture and should be inspected by a professional.',
        ],
      },
      {
        heading: 'Signs your pressure is wrong',
        paragraphs: [
          'Wear on both outer edges of the tread points to under-inflation, while wear concentrated in the centre suggests over-inflation. Pulling to one side, vibration, or a soft, vague feel through the steering can all indicate a pressure problem. If a tyre will not hold its pressure, call a mobile fitter who can inspect, repair, or replace it at your location.',
        ],
      },
    ],
  },
  {
    slug: 'part-worn-vs-new-tyres',
    image: '/images/service-fleet.jpg',
    title: 'Part-Worn vs New Tyres: Which Should You Buy?',
    excerpt: 'The real cost, safety, and value differences between part-worn and new tyres, and why new is usually the smarter buy.',
    date: '4 Feb 2025',
    dateISO: '2025-02-04',
    category: 'Guide',
    readTime: '6 min read',
    metaTitle: 'Part-Worn vs New Tyres: Which Is Better Value? (UK Guide)',
    metaDescription: 'Are part-worn tyres worth it? Compare the cost, safety, and value of part-worn vs new tyres in the UK and find out which is the smarter choice.',
    intro: 'Part-worn tyres can look like a bargain, often advertised at half the price of a new tyre. But once you account for the tread you are actually getting and the unknowns that come with a used tyre, the maths rarely adds up. Here is an honest comparison to help you decide.',
    tags: ['part-worn tyres', 'tyre safety', 'used tyres', 'tyre value'],
    sections: [
      {
        heading: 'You pay more per millimetre of tread',
        paragraphs: [
          'A new tyre starts life with around 8mm of tread. A part-worn tyre, by law, must have at least 2mm, and many are sold close to that. That means a part-worn tyre may have only a quarter of the usable tread of a new one, yet often costs more than a quarter of the price. Measured by cost per millimetre of tread, part-worns are frequently the more expensive option.',
        ],
      },
      {
        heading: 'The hidden risks of used tyres',
        list: [
          'Unknown history: previous impacts, punctures, or kerbing may be hidden',
          'Internal damage that is not visible from the outside',
          'Uneven or irregular wear from the previous vehicle',
          'Age: rubber degrades over time even with plenty of tread left',
          'Improperly repaired punctures that are unsafe',
        ],
      },
      {
        heading: 'What the law requires',
        paragraphs: [
          'Part-worn tyres are legal to sell in the UK, but they must meet strict conditions: a minimum of 2mm tread, no dangerous damage, and they must be marked PART-WORN clearly and permanently. Many tyres sold do not meet these standards, so buying part-worn means trusting the seller to have inspected and graded them correctly.',
        ],
      },
      {
        heading: 'The verdict',
        paragraphs: [
          'For most drivers, new tyres offer better value, longer life, and complete peace of mind about safety. You know exactly what you are getting, the full tread, a clean history, and a manufacturer warranty. When you factor in the longer replacement interval, new tyres usually cost less per mile.',
          'A mobile fitter can supply and fit quality new tyres, from budget to premium, at your home or workplace, with a clear all-inclusive price. Call or WhatsApp with your tyre size for a quote.',
        ],
      },
    ],
  },
  {
    slug: 'slow-puncture-causes',
    image: '/images/service-home.jpg',
    title: 'Tyre Losing Air Slowly? Common Causes of a Slow Puncture',
    excerpt: 'Why your tyre keeps going down, how to spot a slow puncture, and whether it can be repaired or needs replacing.',
    date: '30 Jan 2025',
    dateISO: '2025-01-30',
    category: 'Maintenance',
    readTime: '5 min read',
    metaTitle: 'Slow Puncture: Causes, Signs & How to Fix a Tyre Losing Air',
    metaDescription: 'Tyre losing air slowly? Learn the common causes of a slow puncture, how to spot one, and whether it can be repaired or needs replacing.',
    intro: 'A tyre that is fine one day and noticeably soft the next is the classic sign of a slow puncture. Unlike a blowout, it can go unnoticed for weeks, quietly affecting your handling, fuel economy, and safety. Here is what causes a slow puncture and what to do about it.',
    tags: ['slow puncture', 'tyre repair', 'puncture causes', 'tyre maintenance'],
    sections: [
      {
        heading: 'Common causes of a slow puncture',
        list: [
          'A nail, screw, or shard of glass embedded in the tread',
          'A damaged or corroded valve that leaks air',
          'A poor seal between the tyre and the wheel rim',
          'Kerbing or pothole damage to the wheel or tyre bead',
          'Cracked or perished rubber on an older tyre',
        ],
      },
      {
        heading: 'How to spot a slow puncture',
        paragraphs: [
          'The most obvious sign is one tyre that repeatedly reads lower than the others when you check pressures. You might also notice the car pulling gently to one side, a soft or vague feel through the steering, or your tyre pressure warning light coming on intermittently. A tyre that looks slightly flatter than its neighbours is worth investigating.',
        ],
      },
      {
        heading: 'Can a slow puncture be repaired?',
        paragraphs: [
          'It depends where the damage is. A puncture in the central tread area, within the repairable zone and under a certain size, can often be safely repaired to British Standard. Damage to the sidewall or shoulder, or a tyre that has been driven on while flat, cannot be safely repaired and needs replacing.',
          'Never rely on a tyre sealant as a permanent fix, it is only ever a temporary, get-you-home measure.',
        ],
      },
      {
        heading: 'Do not ignore it',
        paragraphs: [
          'A slow puncture rarely fixes itself and usually gets worse, sometimes failing suddenly at speed. The safest approach is to have the tyre inspected promptly. A mobile fitter can come to your home or workplace, assess whether the tyre is repairable, and either repair it or fit a replacement on the spot, so a small problem never becomes a roadside emergency.',
        ],
      },
    ],
  },
]

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
