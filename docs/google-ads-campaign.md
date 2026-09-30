# Google Ads Campaign — Master Reference

**Business:** Mobile Tyre Fitter 247 Ltd — mobiletyrefitter247.co.uk
**Prepared:** 30 September 2026
**Scope:** Emergency campaign (06:30–11:30 UK), value-based lead-gen.

> ⚠️ **Two things that must be true for everything below to work:**
> 1. **Final URLs must point to `https://www.mobiletyrefitter247.co.uk`** (the optimised site), **not** `mobiletyrefixer.co.uk`.
> 2. **Ad copy speed claim stays honest: "as fast as 30 minutes" / "often 30-45 mins"** — never a bare "in 30 minutes" (matches the site + Terms; avoids ASA/DMCC misleading-ad + Google policy risk).

---

## 1. Campaign strategy (refined)

- **Schedule:** 06:30–11:30 UK (tested). Note: a 5-hour window slows smart-bidding learning; widen if data is thin.
- **Budget:** £350/day. Expect a 1–2 week learning phase where CPA runs above the £100 target (tuition). Consider £150–200 in week 1, then scale in 20–30% steps.
- **Bidding:** Maximize Conversion Value. Fresh account + same-day offline upload + short (emergency) conversion cycle makes this workable; expect a cold ramp in the first 3–5 days. Add **tROAS only after ~30–50 converted leads** with stable value.
- **Keywords:** ~200 broad + ~500 broad negatives. On a cold account, watch the search-terms report daily for the first 2 weeks and add negatives aggressively.
- **Freeze settings for 2 weeks** after launch (every big change resets learning).

### Conversion tracking (already set up)
- **Primary:** Converted Lead (offline import — caller number + call start time + conversion time + value). Same-day upload ~22:00.
- **Secondary:** Call on Number (calls from website, 60s+) + WhatsApp click + Call Click.
- **Recommendation:** Converted Lead = Primary (bidding optimises to revenue); calls/WhatsApp = Secondary (observe, no double-count).

---

## 2. Ad groups → landing pages (message match)

| Ad group | Final URL |
|---|---|
| Emergency Tyre Fitting | `/emergency-mobile-tyre-fitting` |
| Mobile Tyre Fitting | `/` (homepage — H1 "Mobile Tyre Fitting in 30-45 Minutes") |
| Local Targeting (city keywords) | `/mobile-tyre-fitting-near-me` |
| Near Me | `/mobile-tyre-fitting-near-me` |

Rule: each ad group → its most relevant page (Quality Score). **No pinning** on RSAs (max Ad Strength). Limits: headline ≤30, description ≤90.

---

## 3. EMERGENCY ad group — 2 RSAs
Final URL: `https://www.mobiletyrefitter247.co.uk/emergency-mobile-tyre-fitting`

### RSA #1 — "We Come To You / Speed"
**Headlines:** Emergency Tyre Fitting · Emergency Tyre Replacement · Emergency Mobile Tyre Fitting · Emergency Tyre Change · Emergency Tyres Near You · 24/7 Emergency Tyre Fitting · Flat Tyre? We Come To You · As Fast As 30 Minutes · We Come To Your Location · At Home, Work Or Roadside · Fitted On The Spot · All Major Brands Stocked · Rated 4.9 By 2,500+ Drivers · Clear Upfront Pricing · Call Now For Fast Help
**Descriptions:**
1. Stuck with a flat or blowout? Our mobile fitters come to you — home, work or roadside.
2. Emergency tyre fitting across the UK, 24/7. New tyre supplied and fitted on the spot.
3. Rapid response, often 30-45 mins. Rated 4.9 by 2,500+ drivers. Call now for a quote.
4. All major brands stocked. Clear upfront pricing, no nasty surprises. Book your callout.
**Paths:** /Emergency-Tyres /Call-Out

### RSA #2 — "Rapid Response / Trust"
**Headlines:** Emergency Tyre Fitting · Emergency Tyre Replacement · Emergency Tyre Call-Out · Emergency Mobile Tyre Fitting · Emergency Fitting Near You · Roadside Tyre Fitting · Often There In 30-45 Mins · Back On The Road Fast · Stuck? We're On The Way · Open 24/7, Call Anytime · 70,000+ Tyres Fitted · Fully Insured Fitters · Trusted UK Tyre Fitters · Get An Instant Quote · Book Your Callout Now
**Descriptions:**
1. Flat tyre emergency? We come to your location and fit a new tyre fast, day or night.
2. 24/7 emergency mobile tyre fitting. Skip the breakdown wait — we come straight to you.
3. Trusted by thousands of UK drivers. Fully insured fitters, transparent pricing.
4. Call now and we'll be there — often within 30-45 minutes. Instant quote, no obligation.
**Paths:** /Emergency-Tyre /Fitted-To-You

---

## 4. MOBILE TYRE FITTING ad group — 2 RSAs
Final URL: `https://www.mobiletyrefitter247.co.uk/`

### RSA #1 — "Mobile Tyre Fitting / We Come To You"
**Headlines:** Mobile Tyre Fitting · Mobile Tyre Fitting UK · Mobile Tyre Fitter Near You · Mobile Tyre Replacement · Mobile Tyre Service 24/7 · We Come To You · Tyres Fitted At Your Location · Same-Day Tyre Fitting · No Garage Visit Needed · As Fast As 30 Minutes · All Major Brands Stocked · Rated 4.9 By 2,500+ Drivers · Clear Upfront Pricing · Fully Insured Fitters · Call Now For A Quote
**Descriptions:**
1. Mobile tyre fitting that comes to you — home, work or roadside. No garage trip needed.
2. New tyres supplied and fitted on the spot, across the UK. All major brands stocked.
3. Often there in 30-45 mins, 24/7. Rated 4.9 by 2,500+ drivers. Call now for a quote.
4. Clear, all-inclusive pricing quoted upfront. Book your mobile tyre fitting today.
**Paths:** /Mobile-Tyre /Fitting

### RSA #2 — "Fitter Near You / Convenience"
**Headlines:** Mobile Tyre Fitting · Mobile Tyre Fitter Near You · Mobile Tyre Fitting Service · Mobile Car Tyre Replacement · Mobile Tyre Change · Roadside Tyre Assistance · We Come To Your Location · Fitted At Home, Work, Roadside · Often There In 30-45 Mins · Skip The Garage Trip · 70,000+ Tyres Fitted · Trusted UK Tyre Fitters · Open 24/7, 365 Days · Get An Instant Quote · Book Your Fitting Today
**Descriptions:**
1. Local mobile tyre fitters near you. We come to your home, work or the roadside.
2. Mobile tyre replacement and fitting, 24/7. Save a garage trip — we come to you.
3. Trusted UK mobile tyre service. 70,000+ tyres fitted, fully insured, 4.9 rated.
4. Get an instant quote in one call. Same-day mobile tyre fitting, often in 30-45 mins.
**Paths:** /Mobile-Tyre /Fitter-Near-You

---

## 5. LOCAL TARGETING ad group (city keywords) — 2 RSAs
Final URL: `https://www.mobiletyrefitter247.co.uk/mobile-tyre-fitting-near-me`
Uses **Location Insertion** `{LOCATION(City):default}` — inserts the searcher's city; falls back to the default text when unavailable or too long.

### RSA #1 — "Local + We Come To You"
**Headlines:** `Mobile Tyre Fitting {LOCATION(City):Near You}` · `Tyre Fitters Near {LOCATION(City):You}` · `Same-Day Tyres In {LOCATION(City):Your Area}` · `Book Tyre Fitting {LOCATION(City):Today}` · Mobile Tyre Fitting · We Come To You · Local Tyre Fitters Near You · Often There In 30-45 Mins · Same-Day Tyre Fitting · All Major Brands Stocked · Rated 4.9 By 2,500+ Drivers · Fully Insured Fitters · No Garage Trip Needed · Clear Upfront Pricing · Call Now For A Quote
**Descriptions:**
1. `Mobile tyre fitting in {LOCATION(City):your area}, 24/7. We come to you — home, work or roadside.`
2. New tyres supplied and fitted on the spot. All major brands, clear upfront pricing.
3. Often there in 30-45 mins, 24/7. Rated 4.9 by 2,500+ drivers. Call now for a quote.
4. No need for a garage trip — we bring the tyre shop to your door. Book today.
**Paths:** /Mobile-Tyre /Near-You

### RSA #2 — "Local Fitters Near You / Trust"
**Headlines:** `Mobile Tyre Fitting {LOCATION(City):Near You}` · `Local Tyre Fitters {LOCATION(City):Near You}` · `Tyre Replacement {LOCATION(City):Near You}` · `Mobile Tyres In {LOCATION(City):Your Town}` · Mobile Tyre Fitting · Mobile Tyre Service 24/7 · We Come To Your Location · Roadside Tyre Assistance · As Fast As 30 Minutes · 70,000+ Tyres Fitted · Trusted UK Tyre Fitters · Open 24/7, 365 Days · Skip The Garage Trip · Get An Instant Quote · Book Your Fitting Today
**Descriptions:**
1. `Local mobile tyre fitters near {LOCATION(City):you}. Fast fitting at your door, 24/7.`
2. Mobile tyre replacement and fitting across the UK. We come to you, day or night.
3. Trusted UK mobile tyre service. 70,000+ tyres fitted, fully insured, 4.9 rated.
4. Get an instant quote in one call. Same-day mobile tyre fitting, often in 30-45 mins.
**Paths:** /Mobile-Tyre /Fitter-Near-You

---

## 6. NEAR ME ad group — 2 RSAs
Final URL: `https://www.mobiletyrefitter247.co.uk/mobile-tyre-fitting-near-me`

### RSA #1 — "Near You / Local"
**Headlines:** Mobile Tyre Fitting Near You · Mobile Tyre Fitter Near You · Local Mobile Tyre Fitters · Mobile Tyre Change Near You · Mobile Tyre Service Near You · We Come To You · Same-Day Tyre Fitting · As Fast As 30 Minutes · On-Site Tyre Fitting · No Garage Trip Needed · All Major Brands Stocked · Rated 4.9 By 2,500+ Drivers · Fully Insured Fitters · Clear Upfront Pricing · Call Now For A Quote
**Descriptions:**
1. Local mobile tyre fitters near you. We come to your home, work or the roadside.
2. Mobile tyre change and replacement on the spot. No garage trip — we come to you.
3. Often there in 30-45 mins, 24/7. Rated 4.9 by 2,500+ drivers. Call now for a quote.
4. All major brands stocked, clear upfront pricing. Book mobile tyre fitting near you.
**Paths:** /Mobile-Tyre /Near-You

### RSA #2 — "Local Fitters / We Come To You"
**Headlines:** `Mobile Tyre Fitting {LOCATION(City):Near You}` · `Tyre Fitters Near {LOCATION(City):You}` · Local Tyre Fitters Near You · Mobile Tyre Fitter Near You · Emergency Tyres Near You · Fast Tyre Help Near You · We Come To Your Location · Fitted At Home Or Roadside · Often There In 30-45 Mins · Mobile Tyre Service 24/7 · 70,000+ Tyres Fitted · Trusted Local Tyre Fitters · Open 24/7, 365 Days · Get An Instant Quote · Book Your Fitting Today
**Descriptions:**
1. Searching mobile tyre fitting near you? We bring the tyre shop to your door, 24/7.
2. Local, fully insured fitters. Fast tyre change at home, work or roadside. Call now.
3. Trusted local tyre service. 70,000+ tyres fitted, 4.9 rated by 2,500+ drivers.
4. Get an instant quote in one call. Same-day mobile tyre fitting, often in 30-45 mins.
**Paths:** /Mobile-Tyre /Fitter-Near-You

---

## 7. Shared assets (add at campaign/ad-group level)

**Sitelinks (add 6+):**
- Emergency Tyre Fitting → /emergency-mobile-tyre-fitting
- Mobile Tyre Replacement → /mobile-tyre-replacement
- Coverage Areas → /coverage-areas
- Tyre Brands → /tyre-brands
- Mobile Tyre Fitting Near Me → /mobile-tyre-fitting-near-me
- Contact Us → /contact

**Callouts:** We Come To You · 24/7, 365 Days · All Major Brands · Fully Insured · Clear Upfront Pricing · Same-Day Fitting · On-Site Fitting · Fitted On The Spot

**Structured snippet — Services:** Emergency Tyre Fitting, Mobile Tyre Replacement, Home Tyre Fitting, Roadside Tyre Fitting, Fleet Tyre Services, Run-Flat Tyres, Winter Tyres

**Call asset:** 0800 058 4106 (drives calls — a tracked conversion)

**WhatsApp message asset (campaign level):**
- Number: 07933 899930 (United Kingdom)
- CTA: Book now
- Starter message: `Hi, I need emergency mobile tyre fitting. I have a flat tyre and need a fitter to come to me. My location and tyre size:`
- CTA description: `24/7 emergency tyre callout`

---

## 8. Launch checklist
- [ ] All Final URLs on mobiletyrefitter247.co.uk (not mobiletyrefixer.co.uk)
- [ ] No pinning on RSAs (unless deliberately pinning one keyword to pos 1)
- [ ] 6+ sitelinks + callouts + structured snippet + call asset added
- [ ] Conversion tracking verified (Converted Lead primary; calls/WhatsApp secondary)
- [ ] Negative keyword list (~500) applied; check search terms daily for 2 weeks
- [ ] Budget/bidding frozen for 2 weeks after launch
- [ ] Ad copy speed = "as fast as 30 mins / often 30-45 mins" (no bare "30 minutes")

---

*Why these beat the competitor (mobiletyrefixer.co.uk) ads: more keyword coverage in headlines (their Google flag), no pinning (theirs scored Poor), specific trust signals (Rated 4.9 by 2,500+, 70,000+ fitted, fully insured) vs their vague "thousands of happy clients", and honest 30-45 min speed vs their risky absolute "in 30 Minutes".*
