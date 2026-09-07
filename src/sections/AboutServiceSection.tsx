import { Link } from 'react-router-dom'

/**
 * Content-rich, internally-linked section for the homepage. Adds genuine,
 * unique editorial copy about mobile tyre fitting in the UK and links out to
 * the service and location hubs, strengthening topical relevance and the
 * site's internal linking for the head term "mobile tyre fitting".
 */
export default function AboutServiceSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="about-service">
      <div className="mx-auto max-w-[820px] px-4 lg:px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d92a1d]" style={{ fontFamily: 'JetBrains Mono' }}>
          Mobile tyre fitting, explained
        </p>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#1a1a1a] sm:text-3xl" style={{ fontFamily: 'Space Grotesk' }}>
          The Garage That Comes To <span className="text-[#d92a1d]">You</span>
        </h2>

        <div className="space-y-4 text-base leading-relaxed text-[#4a4a4a]">
          <p>
            A flat tyre or a blowout never picks a convenient moment. Mobile tyre fitting removes the worst part of the problem, getting a damaged car to a garage, by bringing a fully-equipped fitter directly to wherever you are. Our vans carry the tyres, the tools, and the balancing equipment to supply and fit a brand-new tyre on your driveway, in a car park, or at the roadside, usually within 30 to 45 minutes of your call.
          </p>
          <p>
            Because we come to you, there is no waiting for recovery, no risky drive on a damaged tyre, and no lost day at a garage. Whether you need{' '}
            <Link to="/emergency-mobile-tyre-fitting" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">emergency mobile tyre fitting</Link>{' '}
            after a sudden blowout, a planned{' '}
            <Link to="/mobile-tyre-replacement" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">mobile tyre replacement</Link>{' '}
            for worn tyres, or fitting at your address through our{' '}
            <Link to="/home-tyre-fitting" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">home tyre fitting</Link>{' '}
            and{' '}
            <Link to="/workplace-tyre-fitting" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">workplace tyre fitting</Link>{' '}
            services, the price we quote includes the tyre, fitting, balancing, a new valve, and disposal of your old tyre.
          </p>
          <p>
            We stock everything from trusted budget tyres to premium brands like Michelin, Continental, and Pirelli, so we can match your vehicle and your budget on the spot. Businesses running vans and cars rely on our{' '}
            <Link to="/fleet-tyre-services" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">fleet tyre services</Link>{' '}
            to keep vehicles on the road with minimal downtime.
          </p>
          <p>
            Our fitters work across the whole of the UK, 24 hours a day, 365 days a year, with no out-of-hours or weekend surcharges. Wherever you are, you can check response times for your area on our{' '}
            <Link to="/mobile-tyre-fitting-near-me" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">mobile tyre fitting near me</Link>{' '}
            page, or browse every town and city we serve on our{' '}
            <Link to="/coverage-areas" className="font-semibold text-[#d92a1d] hover:text-[#b82418]">coverage areas</Link>{' '}
            page.
          </p>
        </div>
      </div>
    </section>
  )
}
