# Terms & Conditions — UK Legal Mapping & Compliance Review

**Company:** Mobile Tyre Fitter 247 Ltd (Company No. 17351934)
**Document under review:** `src/pages/TermsConditions.tsx` (current 12-section T&C, "Last updated: September 2026")
**Scope of customers:** Consumers (B2C) **and** business/fleet (B2B) — both, as the T&C intro states.
**Primary source supplied by client:** CMA37 — *Guidance on the unfair contract terms provisions in the Consumer Rights Act 2015* (Competition and Markets Authority, 22 July 2026).
**Prepared:** 27 September 2026

> **What this document is.** A clause-by-clause map of the existing Terms against the Consumer Rights Act 2015 (CRA 2015) Part 2 and the other UK laws that the CMA37 guidance points to. For every clause it gives: the current substance, the exact UK law + citation, a compliance status, the reasoning (with CMA37 paragraph and CRA section references), and recommended replacement wording. Part C lists the legally-required clauses that are currently **missing**. Part D covers how the terms must be *presented* (transparency/prominence). Part E is the build plan.
>
> **Not formal legal advice.** This is well-sourced drafting support built directly from the CMA's own guidance and the statutes it cites. Because unfair-terms outcomes are decided case-by-case (CMA37 §1.5), the final wording should be signed off by a qualified UK solicitor before publication. CMA37 itself is guidance, "not a substitute for, or definitive interpretation of, the law" (CMA37 §1.4).

---

## Implementation status — updated 27 September 2026

The client confirmed the business inputs below, and the new Terms have been **drafted into `src/pages/TermsConditions.tsx`** accordingly (20 sections, awaiting the client's final go-ahead to publish to the live site).

**Confirmed business decisions:**
- **Call-out fee:** standard **£120**; higher for remote/distant locations, **confirmed to the customer at booking** (required for enforceability — CCRs reg 40).
- **Cancellation charges (stage-based, cost-reflective):** nothing before any cost is incurred → **£50** once the tyre is sourced/job booked (pre-dispatch) → **£150** once a fitter is en route → **full £120 call-out + tyre cost** once a fitter has arrived (tyre given to the customer) → **full refund** whenever we cannot source the tyre. Framed on the 14-day distance-cancellation right + the emergency-service mechanism (CCRs reg 36/37).
- **ADR:** the client uses **no ADR scheme**. The Terms state this plainly and point consumers to Citizens Advice (compliant — the duty is to disclose either way; ADR Regs 2015 reg 19).
- **Business/fleet:** **30-day credit terms** offered; **Late Payment of Commercial Debts (Interest) Act 1998** interest may apply; UCTA-reasonable liability cap (contract price).

**Two client requests adjusted for legality (client agreed):**
1. **Tyre warranty** — the client wanted "no warranty on new tyres; go to the manufacturer." That would unlawfully exclude the consumer's statutory rights against the *seller* (CRA 2015 s.31; CMA37 §6.16). Implemented instead: faulty tyres are dealt with by the Company under CRA 2015, the manufacturer warranty is *additional*, and the Company is **not** liable for wear/punctures/post-fitting damage (which are not tyre faults) — giving the client the same commercial protection lawfully.
2. **24-hour damage cut-off** — the client wanted "damage not reported within 24 hours = not liable." An absolute short cut-off is unfair/unenforceable (CMA37 §6.28 treats even 7 days as unlikely to be fair). Implemented instead: report **as soon as possible, ideally within 24 hours**, as a strong recommendation, with the point made that late reports are harder to prove were caused by the Company (the causation burden already sits with the customer) — same practical protection, lawfully.

**Final section structure implemented (20 sections):** 1 Definitions · 2 Scope & Formation · 3 Services & Products · 4 Placing an Order · 5 Right to Cancel & Cancellation Charges · 6 Your Statutory Rights · 7 Prices & Payment · 8 Ownership & Risk · 9 Faulty Tyres & Warranty · 10 Workmanship & Damage · 11 Wheel & Vehicle Safety · 12 Roadside & Motorway Limitations · 13 Our Responsibility to You · 14 Events Beyond Our Control · 15 Changes to These Terms · 16 Complaints & Dispute Resolution · 17 Your Privacy & Data · 18 Business & Fleet Customers · 19 General (severability, third-party rights, assignment, entire agreement, language) · 20 Governing Law & Jurisdiction. Plus a prominent "key points at a glance" box at the top (transparency — CMA37 Ch 4).

---

## How UK unfair-terms law works (the test every clause must pass)

Three gates from CRA 2015 Part 2, as explained in CMA37:

1. **Prohibited ("blacklisted") terms** — never allowed, not even assessed for fairness. Chiefly: excluding/limiting liability for **death or personal injury from negligence** (CRA 2015 **s.65**; CMA37 §3.20, §6.13), and any term that **excludes or restricts the consumer's statutory rights/remedies** for goods, services or digital content (CRA 2015 **s.31, s.47, s.57**; CMA37 §3.18).
2. **The fairness test** — a term is unfair if, "contrary to the requirement of good faith, it causes a significant imbalance in the parties' rights and obligations to the detriment of the consumer" (CRA 2015 **s.62(4)**; CMA37 §2.24, Ch 4). Schedule 2 to the Act is the **"Grey List"** of terms that are presumptively suspect (CRA 2015 **s.63 + Sch 2**; CMA37 Ch 6). An unfair term is **not binding on the consumer** (CRA 2015 **s.62(1)–(2)**; CMA37 §7.1) and money paid under it may have to be repaid.
3. **The transparency requirement** — written terms must be in "plain and intelligible language" and legible (CRA 2015 **s.68**; CMA37 §2.29, Ch 4). Ambiguity is read **in the consumer's favour** (CRA 2015 **s.69**; CMA37 §7.1). This is a standalone duty — breach can trigger enforcement even if the term is otherwise fair.

**Enforcement teeth (why this matters commercially):** the CMA and Trading Standards can act under CRA 2015 Sch 3 and under the **Digital Markets, Competition and Consumers Act 2024 (DMCC Act)** Part 3. Penalties reach **£300,000 or 10% of global turnover, whichever is greater** (CMA37 §1.11, §7.18). Using an unfair term is also "inherently likely" to be an unfair commercial practice under DMCC Act Part 4 Ch 1 (CMA37 §1.13).

**B2B note.** CRA 2015 Part 2 protects **consumers only** — "an individual acting for purposes wholly or mainly outside their trade, business, craft or profession" (CRA 2015 **s.2(3)**; CMA37 §2.2). Small/micro businesses acting in business **do not** get this protection (CMA37 §2.2). For business/fleet customers the governing regimes are instead the **Unfair Contract Terms Act 1977 (UCTA)** (reasonableness test for limitation clauses), the **Sale of Goods Act 1979** and **Supply of Goods and Services Act 1982** (implied terms), and the common law. Because these Terms serve both audiences, the safe design is: **draft to the higher consumer standard for everyone, then add a short B2B section** that switches off the consumer-only rights for business customers and applies UCTA-compliant limits (CMA37 §6.11 warns that mixing trade and consumer customers does **not** justify consumer-facing exclusions).

---

## Part A — Executive summary: the findings that matter most

Ranked by risk. "🔴" = likely unlawful/unenforceable as drafted; "⚠️" = needs change to be safe; "✅" = broadly fine, minor polish.

| # | Clause | Issue | Status |
|---|--------|-------|--------|
| 1 | **3.8 Cancellation** — flat £100 / £150 fees in the first hour | Disproportionate financial sanction / penalty; conflicts with the 14-day statutory cancellation right and the "pay only for what was actually supplied" rule for urgent services | 🔴 |
| 2 | **6.2 Complaints** — 24-hour deadline to report workmanship | Unlawfully shortens the consumer's statutory remedy period (up to 6 years); unfair time-limit term | 🔴 |
| 3 | **6.1 Warranty** — "Company gives no warranty beyond the manufacturer" | Reads as excluding the consumer's statutory rights **against the seller** (the Company); prohibited | 🔴 |
| 4 | **11 Dispute Resolution** — no ADR information | Legally-required ADR disclosure is missing (ADR Regs 2015; DMCC Act Part 4 Ch 4) | 🔴 (missing duty) |
| 5 | **12 Jurisdiction** — "exclusive jurisdiction of the courts of England and Wales" | A consumer in Scotland/NI must be able to sue in their own courts | ⚠️ |
| 6 | **5 Ownership/Risk** — risk passes "on payment" | For consumers, risk stays with the trader until physical possession (CRA s.29) | ⚠️ |
| 7 | **7 & 8** — "not liable for any inconvenience/cost/delay"; cosmetic-damage disclaimer | Exclusions too broad; cannot exclude liability for the Company's own negligence | ⚠️ |
| 8 | **9 Limitation** — "gross negligence"; civil-law phrasing; no B2B/UCTA track | "Gross negligence" isn't a distinct English-law concept; needs plain-English redraft + B2B version | ⚠️ |
| 9 | **10 Force Majeure** — "permanent/temporary obstacle" | Civil-law drafting; "force majeure" jargon must be explained; must not cover events within the Company's control | ⚠️ |
| 10 | **1 Object & Acceptance** — "supersede… representations… oral"; "10-year record" | Entire-agreement wording must preserve reliance on pre-contract statements; 10-year retention is not a UK rule | ⚠️ |
| 11 | **4 Financial** — payment "irrevocable" | Must make clear statutory refund/cancellation rights are unaffected | ⚠️ |
| 12 | **3.2 Reviews** | Must ensure reviews are genuine (fake/hidden-incentive reviews now banned under DMCC Act) | ⚠️ |
| — | **Missing clauses** | Statutory-rights summary, 14-day cancellation right, ADR, data protection, variation, severability, third-party rights, assignment, definitions, B2B section | 🔴/⚠️ |
| — | **Presentation** | Onerous terms (cancellation charge, call-out fee, timeframes) must be flagged prominently **and told to the customer on the phone before they commit** | ⚠️ |

---

## Part B — Clause-by-clause mapping

Format for each: **Current** → **Applicable law** → **Status** → **Analysis** → **Recommended wording**.

---

### Intro paragraph (company identity, scope, "by ordering you agree")
- **Current:** Identifies the Company, Companies House number, registered office; states the Terms bind any customer (natural or legal person, professional or personal) ordering by phone/email/message/app/website; "by placing an order the Customer confirms they have read, understood and agree."
- **Applicable law:** Companies Act 2006 (already correctly cited); Electronic Commerce (EC Directive) Regulations 2002 (SI 2002/2013) reg 6 (trader identity disclosure); CRA 2015 s.68 transparency.
- **Status:** ✅ with one caution.
- **Analysis:** Company-identity disclosure is good and required. **But** a bare "you confirm you have read and understood" declaration is on the Grey List territory — CMA37 §6.6 warns that "declarations that the consumer has read and/or understood the terms" are potentially unfair because "most consumers do not read standard written contracts," and such a declaration "effectively requires consumers to say that these conditions have been met, whether they have or not." It is not fatal, but it must not be relied on to bind consumers to **hidden/onerous** terms that were never actually brought to their attention (CMA37 §6.5–6.7).
- **Recommended wording (adjust):** Keep the identity paragraph. Replace the acknowledgement with: *"Before you place an order we will draw the key terms — including our cancellation charges, any call-out fee, and how to make a complaint — to your attention. By placing an order you agree to these Terms, which are available to read in full at any time on our website."* (Backs up the prominence duty in Part D.)

---

### Section 1 — "Object and Acceptance"
- **Current:** Terms govern all sales; "take precedence over and supersede any prior agreements, representations, commitments… whether written or oral"; order accepted on contact; contract formed on acknowledgement of receipt; **"Company retains a record of the contract for ten (10) years"**; binding obligation to pay.
- **Applicable law:** CRA 2015 **s.50** (anything said or written by/for the trader about the service is a term of the contract); CRA 2015 Sch 2 para 10 + CMA37 §6.26 (entire-agreement terms); CRA 2015 s.68 transparency; UK GDPR Art 5(1)(e) storage limitation + Data Protection Act 2018; Limitation Act 1980 s.5 (6-year limitation period for simple contracts).
- **Status:** ⚠️ Needs change (three points).
- **Analysis:**
  1. **"Object"** is civil-law terminology (French *objet du contrat*). Rename to plain English — "Scope and Formation of the Contract" — for transparency (CMA37 §4.40: use everyday words).
  2. **"supersede… representations… whether written or oral"** is an entire-agreement/exclusion term. CMA37 §6.26 lists as *unlikely to be fair* wording that lets the trader "disclaim liability for oral promises or other statements even when they have been relied on by the consumer." CRA 2015 **s.50** independently makes pre-contract statements about the service into contract terms. So the clause must **preserve** the customer's ability to rely on what they were told (e.g., the ETA or price quoted on the phone).
  3. **10-year record retention** is a hallmark of the French Consumer Code, **not** a UK requirement. Under UK GDPR storage-limitation (Art 5(1)(e)) personal data shouldn't be kept longer than necessary; the natural UK anchor is the 6-year contract limitation period (Limitation Act 1980 s.5). Overstating retention is both inaccurate and creates data-protection tension.
- **Recommended wording:**
  > **1. Scope and formation of the contract**
  > These Terms apply to every order you place with us and form the contract between you and the Company. They do not affect anything we tell you or confirm to you about your specific order (for example the price, the tyre specification, or the estimated arrival time) before you place it — you can rely on that information.
  > Your order is accepted, and a contract is formed, when we confirm your order after payment is taken. Before you confirm, you will have the chance to check and correct the order details (price, tyre, and address). We keep a record of your contract for as long as we need it to provide the service and to meet our legal and tax obligations, normally six years, in line with our Privacy Policy.

---

### Section 2 — "Products" (incl. 2.1 Availability, 2.2 Nature of Service)
- **Current:** Emergency mobile fitting UK-wide, target 30 min–2 hr (estimate only); budget/mid/premium range; product info at order forms the contract; availability caveat; won't fit unsuitable tyre; full refund if tyre unsourceable; replacement service only (no repairs/alignment unless agreed).
- **Applicable law:** CRA 2015 **s.9/10/11** (goods satisfactory quality, fit for purpose, as described); CRA 2015 **s.52** (services within a reasonable time); CRA 2015 **s.64** core exemption (main subject matter — transparency & prominence); CMA37 §5.6–5.8 (main subject matter); Motor Vehicle Tyres (Safety) Regulations 1994 & Road Vehicles (Construction and Use) Regulations 1986 reg 27 (legal tyre standards — supports "won't fit unsuitable tyre").
- **Status:** ✅ Broadly compliant.
- **Analysis:** Defining the service ("replacement only") and the tyre range describes the **main subject matter** — exempt from the fairness assessment **provided it is transparent and prominent** (CRA s.64; CMA37 §5.3, §5.6). The "full refund if we can't source the tyre" is consumer-friendly and correct. The availability and "won't fit an unsafe/incorrect tyre" points are legitimate and supported by tyre-safety law. Keep. Ensure the "replacement only / no repairs" scope is genuinely made clear at booking (prominence — Part D), so a customer expecting a puncture repair isn't surprised.
- **Recommended wording:** Retain substantially as-is; move the target-time detail to interlock with the redrafted §3.7, and ensure "we provide tyre **replacement** only" is stated plainly at the top.

---

### Section 3 — "Placing an Order"

#### 3.1 Website access / order channels — ✅
- **Law:** Electronic Commerce (EC Directive) Regulations 2002 reg 9 (steps to conclude the contract must be explained). Keep.

#### 3.2 Reviews — ⚠️
- **Current:** Invites customers to read independent feedback/ratings on the site.
- **Law:** DMCC Act 2024 Part 4 Ch 1 (unfair commercial practices) — publishing **fake reviews**, or reviews without disclosing they were incentivised, is now a banned practice; CMA37 §1.13 (using unfair practices alongside terms). 
- **Analysis:** The clause itself is harmless, but it points customers at reviews as a basis for purchase. If any displayed reviews are not genuine, or incentivised reviews aren't labelled, that is a banned practice independent of the T&C.
- **Recommended:** Keep the clause; add a one-line commitment: *"All reviews we display are from genuine customers; we do not publish fake or undisclosed incentivised reviews."* (And ensure operational compliance.)

#### 3.3 Order details / refusal of service — ⚠️
- **Current:** Order confirmed once payment taken; lists required info; "Company reserves the right to refuse service or amend eligibility criteria at its discretion"; customer confirms legal age / authority to bind entity.
- **Law:** Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 (SI 2013/3134) **reg 13** (pre-contract information for distance contracts); Equality Act 2010 **s.142** (terms that discriminate on protected characteristics are unenforceable — CMA37 §3.21); CMA37 §6.21 (terms giving the trader unfettered discretion are potentially unfair).
- **Analysis:** "Refuse at its discretion" is too open. CMA37 §6.83 treats unfettered trader discretion as suspect; and refusal must never be exercised on Equality Act protected grounds. Add a reasonableness/objectivity qualifier and a non-discrimination carve-out.
- **Recommended wording:** *"We may decline an order where we reasonably cannot carry out the work safely or lawfully, where the required tyre cannot be sourced, or where we have reasonable grounds to do so. We will never refuse service on any ground prohibited by the Equality Act 2010. Where we decline before work begins, you will not be charged, and any payment taken will be refunded."*

#### 3.4 Information accuracy / extra costs / locking-nut — ⚠️ (fixable, keep the substance)
- **Current:** Customer responsible for accurate info; extra costs for inaccurate/incomplete info may be charged; locking-nut removal charge if key not present.
- **Law:** CMA37 §4.18 (terms that "charge reasonably for dealing with problems which arise because of the consumer's fault… may be fair"); CMA37 §6.63–6.65 (charges must not be disproportionate; must reflect actual/net cost, not arbitrary sums); CCRs 2013 reg 40 (no additional payment without the consumer's **express consent** given before they are bound).
- **Analysis:** Charging for the customer's own inaccuracies is **legitimate** if the charge reflects costs **reasonably and actually incurred** and is communicated. The existing "confirmed with the Customer wherever possible before the work is carried out" is good. Tighten "additional costs" to "reasonable costs we actually incur," and make clear such charges are confirmed **before** they are applied (express consent, reg 40).
- **Recommended wording:** *"You are responsible for giving us accurate details… If inaccurate or incomplete information means we reasonably incur extra cost (for example a wasted journey, re-sourcing a tyre, or a return visit), we may charge you the reasonable cost we actually incur. We will tell you the amount and get your agreement before applying any such charge. If a locking-wheel-nut key is not available and we have to remove the nut without it, an additional charge applies, which we will confirm with you before carrying out that work."*

#### 3.5 Product selection default — ✅ (transparency point only). Keep.

#### 3.6 Brand/premium requests — ✅
- **Law:** CRA 2015 s.64 (price is core-exempt if transparent & prominent); CCRs reg 40 (express consent to extra charges). "We will always confirm the price before any chargeable work begins" is exactly right. Keep.

#### 3.7 Service Timeframe — ⚠️ (good structure, needs a fault carve-out)
- **Current:** Target 30 min–2 hr, estimates only, not guaranteed; delays from traffic/weather/supplier/etc.; will keep customer informed; max anticipated delay 5 hr, then contact customer with options incl. cancellation + full refund.
- **Law:** CRA 2015 **s.52** (service within a reasonable time where none agreed); CMA37 §6.23–6.25 (exclusion of liability for delay) — a delay exclusion is **fair only** where restricted to delays "caused by factors beyond the trader's control," must **not** "enable the trader to refuse compensation where it is at fault," and should give a **right to cancel without penalty**.
- **Analysis:** This clause is already well-built (it limits to matters beyond control and gives a cancel+refund route — both are CMA37's "more likely to be fair" features). The one gap: it must not read as excluding liability where the delay is the **Company's own fault**. Add that carve-out.
- **Recommended wording (add sentence):** *"These estimates do not limit your legal right to have the service carried out within a reasonable time. Where a delay is caused by us or something within our control, this section does not exclude our responsibility to you."*

#### 3.8 Cancellation — 🔴 **HIGH RISK — full redraft required**
- **Current:** Free within 5 min; **£100** fee 5–25 min; **£150** fee 25–60 min; after 60 min a charge for costs reasonably incurred; full refund anytime if tyre unsourceable.
- **Applicable law:**
  - **Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 (SI 2013/3134)** — because phone/WhatsApp/website/app orders are **distance contracts**, the consumer has a **14-day right to cancel** (reg 27–29). **reg 36**: if the consumer asks for the service to **start within the 14-day period**, and then cancels, they pay only a proportionate amount **for the service actually supplied** up to cancellation. **reg 37**: the right to cancel is **lost** once the service is **fully performed**, but only if the consumer gave **express prior consent** and **acknowledged** that they would lose the right. **reg 40**: no charge beyond the agreed price without express consent.
  - **CRA 2015 Sch 2 para 5 & 6** (Grey List) + **CMA37 §6.63–6.70**: terms requiring "a disproportionately high sum in compensation," or payment "for services which have not been supplied," are potentially unfair. Fees must be a **genuine pre-estimate of loss** / reflect **costs actually and reasonably incurred** (CMA37 §6.64).
  - **Common law penalties doctrine** (*Cavendish Square Holding BV v Makdessi; ParkingEye v Beavis* [2015] UKSC 67, cited at CMA37 fn 110/134): a charge that is out of proportion to the legitimate interest being protected is an unenforceable penalty.
  - A **sliding scale can be lawful** (CMA37 §6.64–6.67, *Clipper Ventures Plc v Boyde* [2013] SCLR 313) **if** each step is a genuine pre-estimate, proportionate, and set out clearly and prominently.
- **Analysis:** The problem is the **flat £100 / £150** figures charged in the first hour. Within 5–25 minutes it is entirely possible **no cost has yet been incurred** (no fitter dispatched, no tyre sourced) — charging £100 then is a classic disproportionate sanction / charge for services not supplied (Grey List paras 5–6; CMA37 §6.63, §6.68) and a likely penalty at common law. It also cuts across the 14-day statutory right without using the proper emergency-service mechanism (reg 36/37). The "after 60 min = actual costs reasonably incurred" limb is the **correct** model and should become the basis for the **whole** clause.
- **Recommended wording (redraft):**
  > **3.8 Your right to cancel, and cancellation charges**
  > **Consumers (individuals).** Because you order at a distance, you normally have a legal right to cancel within 14 days (Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013). Our service is usually urgent, so **you can ask us to begin within that 14-day period.** If you do:
  > - If you cancel **before we have incurred any cost** (for example before we dispatch a fitter or source your tyre), you pay **nothing**.
  > - If you cancel **after we have started but before the work is complete**, you pay only a **proportionate amount for what we have actually done and the costs we have reasonably incurred** up to that point (for example tyre sourcing, fitter travel). We will tell you the amount.
  > - Once the fitting is **fully complete**, the 14-day right no longer applies. **By asking us to carry out the work straight away, you agree to this and acknowledge that you lose the right to cancel once the work is finished.**
  > - If we cannot source the right tyre for your vehicle, you get a **full refund**, whenever you cancel.
  > We do not charge fixed cancellation penalties. Any charge reflects only the costs we have actually and reasonably incurred.
  > **Business/fleet customers:** see the Business Customers section.
  >
  > *(Operational note: the reg 36/37 mechanism only works if, at booking, the customer is (a) given the cancellation information, (b) asked to expressly request immediate performance, and (c) told they lose the cancellation right once the work is done. This must happen on the call — see Part D.)*

---

### Section 4 — "Financial Conditions"
- **Current:** Card/PayPal/bank transfer; PCI-compliant, 3D Secure; card debited immediately on confirmation and this is **"irrevocable"**; cardholder authorisation; bank transfer to registered account with order ref.
- **Applicable law:** Payment Services Regulations 2017; PCI-DSS (industry standard); CCRs 2013 reg 34–38 (refund on cancellation) & reg 40 (express consent to charges); CRA 2015 s.62 fairness; UK GDPR (payment data).
- **Status:** ⚠️ One word to fix.
- **Analysis:** "Irrevocable" overstates finality and could mislead a consumer into thinking they cannot get a refund. Payment being taken does not remove statutory cancellation/refund rights (CCRs; CRA). CMA37 §6.11 warns that terms placing the consumer in a worse legal position than the law provides are unfair.
- **Recommended wording:** *"We take payment when your order is confirmed. Taking payment does not affect your statutory rights to a refund, including your cancellation rights described in section 3.8."* Keep the PCI/3D-Secure and cardholder-authorisation sentences.

---

### Section 5 — "Ownership of the Product" (risk transfer)
- **Current:** Ownership transfers on validation of order + payment; from that point (once payment taken and product delivered/fitted) all risk of loss/theft/damage passes to the customer.
- **Applicable law:** **CRA 2015 s.29** — for consumers, goods **remain at the trader's risk until they come into the physical possession of the consumer**; Sale of Goods Act 1979 **s.20** — for B2B, risk generally passes with property (different rule); CMA37 §6.16 (terms passing risk before delivery are prohibited/unfair — "consumers cannot be deprived of recourse where goods are destroyed, stolen or damaged before the consumer has accepted delivery").
- **Status:** ⚠️ Needs change (consumer vs business split).
- **Analysis:** Tying **risk** to "payment" is wrong for consumers. Under CRA s.29 risk stays with the Company until the consumer has the goods — which, for a fit-at-location service, is effectively **when the tyre is fitted/handed over**. The clause's "or fitted" language is close, but "risk passes on payment" must be removed for consumers. For business customers the SGA 1979 default can apply.
- **Recommended wording:** *"For consumers, the tyres remain at our risk until they are fitted to your vehicle or otherwise handed to you, in line with section 29 of the Consumer Rights Act 2015. Ownership passes to you once the tyres are fitted or handed over and payment has been made. For business customers, risk and ownership pass on delivery/fitting in accordance with the Sale of Goods Act 1979."*

---

### Section 6 — "Warranty"

#### 6.1 Manufacturer's warranty — 🔴 HIGH RISK
- **Current:** Tyres covered by the manufacturer's warranty; all defect/wear/performance claims go **directly to the manufacturer**; "**the Company does not provide any separate or additional warranty on the tyre product itself beyond that provided by the manufacturer.**"
- **Applicable law:** CRA 2015 **s.9, s.10, s.11** (the **seller** must supply goods of satisfactory quality, fit for purpose, as described); CRA 2015 **s.19** (remedies against the seller); CRA 2015 **s.31** (these rights **cannot be excluded or restricted**); CRA 2015 **s.30** (consumer-guarantee information — must state statutory rights are unaffected); CMA37 §6.16 (denying statutory remedies for faulty goods is prohibited), §6.38–6.40 (a guarantee that offers less than the law, or is presented as the customer's only route, is unfair; "your statutory rights are unaffected" must be stated), §6.41 (limiting redress "to what is available under a guarantee/warranty" is unfair).
- **Analysis:** This is the most legally dangerous clause after 3.8. A tyre is a **good**; the consumer's statutory rights run **against the Company as the seller**, not only the manufacturer. Telling customers that all claims go to the manufacturer and that the Company gives "no warranty" reads as **excluding the consumer's statutory rights against the seller** — a prohibited term (CRA s.31; CMA37 §6.16). The manufacturer warranty is an **extra** on top of, not a substitute for, statutory rights.
- **Recommended wording:**
  > **6.1 Faulty tyres — your rights**
  > The tyres we supply must be of satisfactory quality, fit for purpose and as described. If a tyre we supplied is faulty, **you have legal rights against us as the seller under the Consumer Rights Act 2015**, including (depending on the circumstances) repair, replacement, a price reduction or a refund. These rights are **in addition to**, and are not replaced by, any warranty offered by the tyre manufacturer. You may choose to claim under the manufacturer's warranty as well, but you do not have to, and doing so does not affect your rights against us.

#### 6.2 Service complaints (24-hour deadline) — 🔴 HIGH RISK
- **Current:** Fitting/workmanship complaints must be reported within **24 hours**; complaints after 24 hours "may not be investigated or accepted."
- **Applicable law:** CRA 2015 **s.49** (services with reasonable care and skill), **s.54** (remedies — repeat performance, price reduction); CRA 2015 **s.57** (cannot exclude/restrict these); **Limitation Act 1980 s.5** (six years to bring a contract claim; five in Scotland); CMA37 **§6.27–6.30** — "a term that excludes or limits the business's responsibilities… where the consumer does not make a complaint… within an unduly short period of time is likely to be unfair," especially where "faults… may only become apparent after a time limit has expired." CMA37 gives a "7 days" example as *unlikely to be fair*; 24 hours is far shorter.
- **Analysis:** A 24-hour bar unlawfully compresses a statutory remedy window that runs for years. It is both an unfair time-limit term (Grey List / CMA37 §6.28) and an attempted exclusion of statutory service rights (CRA s.57). The fix is to **encourage prompt reporting** without **barring** later claims — exactly the "more likely to be fair" model in CMA37 §6.30.
- **Recommended wording:**
  > **6.2 Problems with our workmanship**
  > If you think there is a problem with our fitting or workmanship, please tell us **as soon as reasonably practicable after you notice it**, so we can put it right quickly. Reporting promptly helps us resolve the issue, but it does not affect your legal rights — you keep the statutory time limits for bringing a claim. Where we are responsible for a fitting error, we will provide an appropriate remedy under the Consumer Rights Act 2015 (for example re-performing the work or a price reduction). Any goodwill gesture we may offer does not reduce your statutory rights.

---

### Section 7 — "Wheel & Vehicle Safety"
- **Current:** May refuse to fit on a cracked/damaged/unsafe wheel (customer still liable for the call-out fee + charges incurred); if fitting can't complete due to wheel/vehicle fault, the tyre is provided to the customer to fit elsewhere, **no refund**; **not liable for pre-existing wheel damage, corrosion, cosmetic defects, or minor cosmetic marks/scratches "that may reasonably occur in the ordinary course of the tyre fitting process."**
- **Applicable law:** CMA37 §4.18 (charging reasonably for the consumer's situation can be fair); CCRs reg 40 (call-out fee needs express prior consent); CRA 2015 **s.49** (reasonable care and skill); CRA 2015 **s.65** (cannot exclude liability for death/PI from negligence); CMA37 §6.14–6.15 (disclaimers fair only where the trader is **not at fault**), §6.41 (limitation-of-liability terms).
- **Status:** ⚠️ Needs narrowing (last limb).
- **Analysis:** Refusing to fit on an unsafe wheel is legitimate and safety-driven. Charging the **call-out fee** is fair **provided** the fee was disclosed and agreed at booking (reg 40 — see Part D). Keeping the tyre with no refund is reasonable because the customer receives the goods. **The problem is the cosmetic-damage disclaimer**: excluding liability for marks that occur "in the ordinary course of fitting" comes close to excluding liability for the Company's **own lack of reasonable care** (CRA s.49) — impermissible. It must be limited to damage **not** caused by the Company's negligence, and must never touch injury (s.65).
- **Recommended wording:** *"We may refuse to fit a tyre where the wheel is cracked, damaged or otherwise unsafe. Where we have told you about the call-out fee in advance, that fee remains payable, together with any other costs you agreed. If we cannot safely complete fitting because of a fault with your wheel or vehicle, we will give you the tyre we have sourced so it can be fitted elsewhere; because you receive the tyre, it is not refundable. We are not responsible for pre-existing damage, corrosion or wear that was present before we started. We remain responsible for any damage caused by our own failure to use reasonable care and skill; nothing here limits our liability for death or personal injury caused by our negligence."*

---

### Section 8 — "Motorway Services"
- **Current:** No wheel balancing on hard shoulders/service areas/unsafe locations; customer advised to balance elsewhere; **"the Company shall not be liable for any inconvenience, cost, or delay arising from this restriction."**
- **Applicable law:** Health and safety / road-safety rationale (legitimate interest — CMA37 §4.18); CMA37 §6.9–6.11 (broad exclusions unfair), §6.41 (limitation of liability), CRA 2015 s.49/s.65.
- **Status:** ⚠️ Needs narrowing.
- **Analysis:** The safety restriction is fine and sensible. But "not liable for **any** inconvenience, cost or delay" is a blanket exclusion (CMA37 §6.11 — "blanket or excessively broad general exclusions should not be used"). Narrow it to the safety justification and preserve liability for the Company's own fault.
- **Recommended wording:** *"For safety reasons we cannot balance wheels on motorway hard shoulders, in service areas, or anywhere balancing equipment cannot be operated safely. Where this applies, we will advise you to have the wheel balanced at a safe location. This restriction exists for your safety and reasons beyond our control, and does not exclude any liability arising from our own failure to use reasonable care and skill."*

---

### Section 9 — "Limitation of Liability"
- **Current:** Notice + chance to remedy before damages; liable for delay unless beyond reasonable control; liability limited to reasonably foreseeable losses "except in cases of **gross negligence** or fraud," then limited to direct/immediate losses; nothing excludes death/PI/fraud/non-excludable liability; nothing affects CRA 2015 rights.
- **Applicable law:** CRA 2015 **s.65** (death/PI — prohibited to exclude; correctly preserved), **s.62** fairness, **s.31/47/57** (can't exclude statutory rights; correctly preserved); CMA37 §6.41–6.42 (limitation terms), §6.11 (broad exclusions), fn 235 ("consequential loss" jargon); *Hadley v Baxendale* (foreseeability); **for B2B:** Unfair Contract Terms Act 1977 **s.2** (can't exclude death/PI; other loss subject to reasonableness), **s.3, s.11 + Sch 2** (reasonableness test).
- **Status:** ⚠️ Needs change (three points) + add B2B track.
- **Analysis:**
  1. The **carve-outs are good** — preserving death/PI, fraud, non-excludable liability and CRA rights is exactly what CMA37 §3.20 and §6.13 require. Keep those.
  2. **"Gross negligence"** is a civil-law concept **not recognised as a distinct category in English law**; it creates ambiguity (read against the Company under CRA s.69). Remove it.
  3. The civil-law "failure not final… notice and opportunity to remedy" phrasing should be redrafted plainly (CMA37 §4.40).
  4. There is **no monetary cap** and **no B2B/UCTA version**. For consumers a cap is optional but, if used, must not cut into non-excludable liability; for business customers a UCTA-reasonable cap (e.g., the contract price or a stated sum) is standard and should sit in the Business Customers section.
- **Recommended wording (consumer-facing):**
  > **9. Our responsibility to you**
  > If we fail to meet our obligations, we are responsible for loss or damage you suffer that is a **foreseeable** result of our breach or of our failing to use reasonable care and skill. Loss is "foreseeable" if it was an obvious consequence, or if it was contemplated by you and us when the contract was formed.
  > **We do not exclude or limit our liability in any way where it would be unlawful to do so.** This includes liability for **death or personal injury caused by our negligence**, for **fraud or fraudulent misrepresentation**, and for breach of your statutory rights under the Consumer Rights Act 2015.
  > We are not liable for loss or damage that is not foreseeable, or that is caused by events beyond our reasonable control (see section 10). **Nothing in these Terms affects your statutory rights.**
- Plus a **Business Customers** limitation (Part C, new §16) drafted to UCTA's reasonableness test.

---

### Section 10 — "Force Majeure"
- **Current:** Permanent obstacle → automatic termination; temporary obstacle → suspension; released from liability to the extent of the obstacle.
- **Applicable law:** CMA37 §6.25 + fn 219 — "force majeure" is "legal jargon and best avoided and should never be used without clear explanation"; a delay/non-performance exclusion is fair only for events "genuinely outside the trader's control" and must not cover "shortage of stock, labour problems etc. which can be the fault of the trader"; CMA37 §4.40 (explain jargon); CRA 2015 s.62 fairness.
- **Status:** ⚠️ Redraft in plain English.
- **Analysis:** The "permanent/temporary obstacle" split is French Code civil (art 1218) phrasing. Reframe as an ordinary English force-majeure clause, **define the events** as genuinely beyond control, **explain the term**, and give the customer a **cancel + refund** route if a delay becomes significant (mirrors §3.7).
- **Recommended wording:**
  > **10. Events beyond our control**
  > Sometimes we may be prevented from, or delayed in, providing the service by events beyond our reasonable control — for example severe weather, accidents, road closures, or other emergencies. These do not include things within our control, such as our own staffing or equipment. If such an event happens, we will contact you as soon as we can and agree a new time. If the delay is significant, you may cancel and receive a **full refund** for any work not yet done. We will not be liable for delays or failures caused by such events, but this does not affect your statutory rights.

---

### Section 11 — "Complaints and Dispute Resolution" — 🔴 (required disclosure missing)
- **Current:** Raise complaints with the Company; the Company will try to resolve promptly and fairly.
- **Applicable law:** **Alternative Dispute Resolution for Consumer Disputes (Competent Authorities and Information) Regulations 2015 (SI 2015/542)** — a trader must tell consumers whether it is **obliged, or intends, to use an ADR provider**, and if so give its details; **DMCC Act 2024 Part 4 Ch 4 + Sch 25–27** (ADR for consumer contract disputes, in force **6 April 2026** per CMA37 fn 278); Arbitration Act 1996 **s.91** (compulsory arbitration is automatically unfair for claims ≤ £5,000 — CMA37 §6.85, fn 279); CMA37 §6.85–6.88 (ADR terms must not force the consumer or block court access).
- **Analysis:** The section is fine as far as it goes but **omits the legally-required ADR information**. Even a trader that does **not** use an ADR scheme must say so. Add an ADR statement and confirm the consumer's right to go to court is unaffected.
- **Recommended wording:**
  > **11. Complaints and dispute resolution**
  > If you are unhappy, please contact us first at [email] / [phone]; we aim to acknowledge complaints within [X] working days and resolve them promptly and fairly.
  > **Alternative Dispute Resolution (ADR):** [Choose one, and state it:] *"We are not currently obliged to use, and do not use, an ADR scheme, but you may still contact [a certified ADR provider / Citizens Advice] for help,"* **or** *"If we cannot resolve your complaint, you can refer it to [named certified ADR provider], whose details are: […]. We [do/do not] agree to be bound by its decision."*
  > Using our complaints process or ADR does not affect your right to take a claim to court.

---

### Section 12 — "Governing Law and Jurisdiction" — ⚠️
- **Current:** Governed by the laws of England and Wales; disputes subject to the **exclusive jurisdiction of the courts of England and Wales**.
- **Applicable law:** **Civil Jurisdiction and Judgments Act 1982 s.15B** — a consumer can bring proceedings in the part of the UK where they are **domiciled**, and can only be **sued** there (CMA37 §6.89, fn 281); CRA 2015 **s.74** (Part 2 applies where the contract has a close connection with the UK, even if another law is chosen); CMA37 §6.89–6.92 + the "more likely to be fair" example.
- **Analysis:** "Exclusive jurisdiction of England and Wales" is unfair/unenforceable against a consumer living in **Scotland or Northern Ireland**, who must be able to use their **local** courts (CMA37 §6.89). Governing law E&W is acceptable if it preserves the mandatory consumer protections of the customer's home UK jurisdiction.
- **Recommended wording (adopt CMA37's fair model):**
  > **12. Governing law and where you can bring a claim**
  > These Terms are governed by the law of England and Wales. If you are a consumer, this does not deprive you of the protection of the consumer-protection law of the part of the UK where you live. You can bring court proceedings about these Terms in the courts of the part of the UK where you live; if you live in a different part of the UK from where the Company is based, you may instead choose the courts where the Company is based. For business customers, the courts of England and Wales have exclusive jurisdiction.

---

## Part C — Clauses that are MISSING and should be added

Each is either legally required or strongly advisable for a "strong, complete" T&C. (Client confirmed: add missing legal clauses.)

1. **Definitions** — "consumer" (CRA 2015 **s.2(3)**), "trader/business customer" (**s.2(2)**), "durable medium," "these Terms." *Transparency* (CRA s.68; CMA37 §4.43 — clear headings and defined terms).

2. **Summary of your statutory rights (consumers)** — a short, plain-English box covering goods (satisfactory quality/fit/as described — CRA **s.9–11**) and services (reasonable care and skill / reasonable time — CRA **s.49, s.52**) and the remedies (**s.19, s.54**). CMA37 **§4.40** requires traders to *explain the substance* of statutory rights, not merely cite them.

3. **Your right to cancel (14 days)** — a standalone, prominent section implementing CCRs 2013 **reg 27–38**, including the **model cancellation wording** and the emergency-service mechanism (reg 36/37) referenced in redrafted §3.8. Under reg 13/reg 16 the cancellation information must be given as pre-contract information and confirmed on a **durable medium**.

4. **Pre-contract information / how the contract is made** — reflecting **Electronic Commerce (EC Directive) Regulations 2002 reg 9** (steps to conclude) and **CCRs reg 13** (distance pre-contract info): identity, total price, main characteristics, arrival estimate, cancellation rights, complaint route.

5. **Data protection** — cross-reference to the Privacy Policy; commit to processing personal/payment data under **UK GDPR** and the **Data Protection Act 2018**, and marketing under **PECR**. CMA37 **§6.43** flags terms that let a trader deal with personal data more freely than the law allows as unfair.

6. **Variation of these Terms** — a *fair* variation clause (CRA 2015 Sch 2 para 11; CMA37 **§6.45–6.47**): we may change the Terms only for stated valid reasons (legal/regulatory change, or clearly described operational reasons), with advance notice, and you may cancel if you don't accept a change that disadvantages you.

7. **Severability** — if any term is found unfair/unlawful it is removed and the rest continues. Mirrors CRA 2015 **s.67** (unfair term severed; contract continues so far as practicable) — CMA37 §7.1.

8. **Third-party rights** — these Terms do not give rights to anyone who is not a party, under the **Contracts (Rights of Third Parties) Act 1999**.

9. **Assignment** — we may transfer the contract only where your rights are not reduced, and (for continuing arrangements) with a right for you to cancel (CRA Sch 2 para 19; CMA37 **§6.56–6.58**). You may transfer your rights with our consent.

10. **Business/fleet customers (B2B section)** — states that CRA 2015 Part 2 and the CCRs consumer-cancellation rights **do not apply** to business customers (CMA37 §2.2); applies **UCTA 1977**-reasonable limitation of liability (a stated cap, e.g. the contract price); confirms the fleet credit/30-day terms and that late payment interest may apply under the **Late Payment of Commercial Debts (Interest) Act 1998**. Per CMA37 §6.11, the consumer-facing clauses above must **not** be diluted just because some customers are businesses — the split is done here, not by weakening the consumer terms.

11. **Contact & language** — how to reach us; the contract is concluded in **English**.

---

## Part D — Presentation & transparency (how the terms must be shown)

CMA37 Chapter 4 makes clear that *content alone is not enough* — presentation is a standalone legal duty (CRA 2015 **s.68**). Key actions:

- **Tell the onerous terms on the phone/WhatsApp before the customer commits.** Because most orders are placed by phone for an urgent job, the **cancellation charge basis, any call-out fee, and the "you lose your 14-day cancellation right once the work is done"** points must be **spoken to the customer at booking** and then confirmed on a durable medium (CMA37 **§5.16–5.21, §6.7**; CCRs reg 36/37). Burying them on the website is not sufficient for surprising/onerous terms (CMA37 §4.42–4.43).
- **Flag key terms prominently on the page** — the cancellation section, call-out fee, and complaints route should be visually emphasised (a highlighted box / bold), not the same weight as everything else (CMA37 **§4.43, §5.18–5.23**). Note: making *everything* bold defeats the purpose (§4.43).
- **Plain English, explain the effect** — replace jargon ("object," "gross negligence," "force majeure," "irrevocable") and, where a legal right is mentioned, explain what it means in practice (CMA37 **§4.40**).
- **Always available, mobile-friendly, saveable** — single-click access, readable on a phone, downloadable (CMA37 **§4.42**). The current page is already reachable and responsive; add a "last updated" date (present) and consider a short **key-summary box** at the top (§4.44).
- **Consistency with marketing** — the T&C must not contradict the site's headline promises (e.g., "30–45 min response," "no hidden fees"). Inconsistent small print is a "time bomb" (CMA37 §4.5, fn 116) and a potential unfair commercial practice (DMCC Act Part 4 Ch 1).

---

## Part E — Build plan (after you approve this mapping)

Implementation in `src/pages/TermsConditions.tsx` (data-driven `sections[]` array; low-risk content edits):

1. **Rewrite the 12 sections** per Part B (rename §1, redraft §3.8, §5, §6.1, §6.2, §9, §10, §11, §12; narrow §7, §8; tweak §2, §3.2–3.4, §3.7, §4).
2. **Add the new sections** from Part C (definitions; statutory-rights summary; 14-day cancellation; pre-contract info; data protection; variation; severability; third-party rights; assignment; **Business Customers**; contact/language). Renumber accordingly.
3. **Add a highlighted "key points" box** at the top and visually emphasise the cancellation/call-out/complaints sections (Part D) — a small styling addition to the existing template.
4. **Fill the ADR decision** in §11 (you tell me: do you use/ intend to use an ADR scheme? If not, we state that.).
5. **Update `LAST_UPDATED`** and keep everything wired to `src/lib/config.ts` (phone, email, company details) as now.
6. Build, verify the page renders, then deploy per the usual workflow.

### Open questions I need from you before drafting the final code
1. **Call-out fee** — do you charge a fixed call-out fee, and how much? (It must be disclosed at booking to be enforceable.)
2. **ADR** — do you use, or intend to use, a certified ADR/ombudsman scheme? (Legally we must state either way.)
3. **Cancellation** — confirm you're comfortable moving from fixed £100/£150 fees to **"actual reasonable costs incurred"** (this is what makes it enforceable). If you want the certainty of a scale, we can build a *genuine pre-estimate* sliding scale instead — tell me your real average costs at 15 min / 30 min / 60 min (tyre sourcing, fitter dispatch, travel).
4. **Business/fleet** — confirm the 30-day credit terms and whether you want statutory late-payment interest to apply.
5. **Complaint acknowledgement window** — how many working days do you commit to (e.g., 3–5)?

---

*Sources: Consumer Rights Act 2015 (esp. ss. 2, 9–11, 19, 29, 30, 31, 47, 49, 50, 52, 54, 57, 62–69, 71–74, Sch 2); Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 (SI 2013/3134), esp. regs 13, 16, 27–38, 40; Digital Markets, Competition and Consumers Act 2024 (Parts 3 & 4); Unfair Contract Terms Act 1977; Sale of Goods Act 1979; Supply of Goods and Services Act 1982; Limitation Act 1980; Alternative Dispute Resolution for Consumer Disputes (Competent Authorities and Information) Regulations 2015 (SI 2015/542); Arbitration Act 1996; Civil Jurisdiction and Judgments Act 1982; Contracts (Rights of Third Parties) Act 1999; Equality Act 2010; Electronic Commerce (EC Directive) Regulations 2002; UK GDPR & Data Protection Act 2018; PECR; Late Payment of Commercial Debts (Interest) Act 1998; Companies Act 2006; Motor Vehicle Tyres (Safety) Regulations 1994; Road Vehicles (Construction and Use) Regulations 1986. Guidance: CMA37 (CMA, 22 July 2026). Case law as cited in CMA37, incl. Cavendish/ParkingEye [2015] UKSC 67, Foxtons [2009] EWHC 1681 (Ch), First National Bank [2001] UKHL 52, Clipper Ventures v Boyde [2013] SCLR 313.*
