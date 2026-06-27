export interface Brand {
  name: string
  slug: string
}

export interface BrandTier {
  name: string
  blurb: string
  highlight: boolean
  brands: Brand[]
}

export const brandTiers: BrandTier[] = [
  {
    name: 'Premium Brands',
    blurb: 'The best grip, braking, longevity, and refinement. Ideal for performance cars, high-mileage drivers, and anyone who wants maximum safety.',
    highlight: true,
    brands: [
      { name: 'Michelin', slug: 'michelin' },
      { name: 'Pirelli', slug: 'pirelli' },
      { name: 'Continental', slug: 'continental' },
      { name: 'Bridgestone', slug: 'bridgestone' },
      { name: 'Goodyear', slug: 'goodyear' },
      { name: 'Dunlop', slug: 'dunlop' },
    ],
  },
  {
    name: 'Mid-Range Brands',
    blurb: 'A smart balance of performance and value. Excellent everyday tyres that perform well in UK conditions without the premium price tag.',
    highlight: false,
    brands: [
      { name: 'Hankook', slug: 'hankook' },
      { name: 'Yokohama', slug: 'yokohama' },
      { name: 'Toyo', slug: 'toyo' },
      { name: 'BFGoodrich', slug: 'bfgoodrich' },
      { name: 'General Tire', slug: 'general-tire' },
      { name: 'Firestone', slug: 'firestone' },
      { name: 'Avon', slug: 'avon' },
      { name: 'Uniroyal', slug: 'uniroyal' },
    ],
  },
  {
    name: 'Budget Brands',
    blurb: 'The most affordable way to get safe, legal, road-ready tyres fitted. Great for older vehicles, second cars, or tighter budgets.',
    highlight: false,
    brands: [
      { name: 'Kelly', slug: 'kelly' },
      { name: 'Gislaved', slug: 'gislaved' },
      { name: 'Rovelo', slug: 'rovelo' },
      { name: 'Autogreen', slug: 'autogreen' },
      { name: 'Sailun', slug: 'sailun' },
    ],
  },
]

/** Flat list of every brand that has a logo, in display order. */
export const allBrands: Brand[] = brandTiers.flatMap((tier) => tier.brands)
