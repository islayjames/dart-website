/* global React, ArtSlot, PricingMatrix, SignupForm */
const { useState } = React;

// =============================================================================
// PRICING
// =============================================================================
const PagePricing = ({ go, source = 'pricing-direct', preselectedTier = '' }) => {
  const [activeTier, setActiveTier] = useState(preselectedTier);

  const setTierFromCard = (tier) => {
    setActiveTier(tier);
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <div className="eyebrow">Pricing</div>
          <h1 style={{ marginTop: 12 }}>Priced for everyone. <span style={{ color: 'var(--gold)' }}>From $10 a day.</span></h1>
          <p className="lead" style={{ marginTop: 18 }}>
            Two tiers, both visible, both your choice. Sign up now and we'll send you 25% off any tier — code
            valid through end of 2026. Lock in your discount; pick your tier when you're ready.
          </p>
        </div>
      </header>

      {/* Discount banner */}
      <section style={{ padding: '24px 0', background: 'rgba(244,197,66,0.10)', borderBottom: '1px solid rgba(244,197,66,0.2)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span className="tag tag-gold">Pre-launch</span>
            <span className="serif-i" style={{ fontSize: 22, color: 'var(--gold)' }}>
              Sign up now and get 25% off any tier through end of 2026.
            </span>
          </div>
          <a href="#signup" className="btn btn-primary"
             onClick={(e) => { e.preventDefault(); document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Claim discount →
          </a>
        </div>
      </section>

      {/* Full matrix */}
      <section className="section">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 28 }}>The full matrix.</h2>
          <div className="card" style={{ padding: 32 }}>
            <PricingMatrix />
          </div>
          <p className="muted" style={{ marginTop: 16, fontSize: 14 }}>
            Annual not offered to parties of 7+. LL + Dining tiers become purchasable when dining launches Fall 2026.
            Five-day pack must be redeemed within 30 days.
          </p>
        </div>
      </section>

      {/* Two tiers explained */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2">
            <div className="card card-cream" style={{ padding: 32 }}>
              <span className="tag tag-gold">July 2026</span>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14 }}>Lightning Lane</h2>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--cream-ink-2)', marginBottom: 18 }}>
                The core product. Dart watches Lightning Lane Multi Pass openings, books selections as they drop,
                and routes the day around your dining and your fixed plans. One conversation, one schedule, one tool.
              </p>
              <ul style={{ paddingLeft: 18, color: 'var(--cream-ink-2)', fontSize: 14.5, marginBottom: 22 }}>
                <li>Real-time Lightning Lane Multi Pass watching + booking</li>
                <li>Plain-language conversation, no forms</li>
                <li>MDE Friends & Family connection</li>
                <li>Manual block locking (parade, naptime, character meals)</li>
                <li>Auto re-routing when the day shifts</li>
              </ul>
              <button className="btn btn-magenta" onClick={() => setTierFromCard('annual-ll')}>
                Lock in 25% off — Lightning Lane →
              </button>
            </div>

            <div className="card card-cream" style={{ padding: 32 }}>
              <span className="tag tag-magenta">Fall 2026 · optional upgrade</span>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14 }}>Lightning Lane + Dining</h2>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--cream-ink-2)', marginBottom: 18 }}>
                Everything in Lightning Lane, plus dining-availability monitoring and booking. A permanent tier
                choice — not a price change. Always your call whether you want dining in the mix.
              </p>
              <ul style={{ paddingLeft: 18, color: 'var(--cream-ink-2)', fontSize: 14.5, marginBottom: 22 }}>
                <li>Everything in the Lightning Lane tier</li>
                <li>Hard-to-find dining reservations as they open up</li>
                <li>Dining alerts routed into your day</li>
                <li>One-tap booking when Dart finds a fit</li>
              </ul>
              <button className="btn btn-magenta" onClick={() => setTierFromCard('annual-lld')}>
                Lock in 25% off — LL + Dining →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Beta program */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <ArtSlot id="pricing-beta" ratio="4 / 3"
              label="Beta tester banner"
              prompt="A stylized banner illustration of a small fox holding a clipboard with a checkmark, standing in front of a bunting flag string. Watercolor + pencil. Cream paper, navy ink, gold and magenta accents on the flags."
              model="Midjourney v6 niji 6 stylize 350"
              ref_="vintage circus banner art"
              palette="cream · navy · gold · magenta · teal" />
            <div>
              <div className="eyebrow">Beta program</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Help us build Dart.
              </h2>
              <p className="lead" style={{ marginBottom: 18 }}>
                We're looking for a small group of Florida annual passholders with planned Disney World visits
                between May 15 and July 15 to test Dart in low-stakes situations. Selected testers get one full
                year of LL + Dining (1–6) access through August 2027. Everyone who applies gets the 25% discount
                code at minimum.
              </p>
              <ul style={{ paddingLeft: 18, color: 'var(--cream-2)', fontSize: 14.5, lineHeight: 1.7, marginBottom: 22 }}>
                <li>Florida annual passholder, with visits planned May 15 – July 15</li>
                <li>Planning to use Lightning Lane Multi Pass and/or make dining reservations</li>
                <li>Willing to test in low-stakes moments and share feedback</li>
                <li>Pre-release product, no guarantees, no LLMP reimbursement except case-by-case for catastrophic edge cases</li>
                <li>Disney employees not currently eligible — please email us for a demo conversation instead</li>
              </ul>
              <button className="btn btn-primary"
                onClick={() => { setActiveTier('annual-lld'); document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }); document.querySelector('input[name="beta_optin"]')?.click(); }}>
                Apply for the beta →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Master signup form */}
      <section className="section section-deep" id="signup">
        <div className="container-narrow">
          <div className="eyebrow">Sign up</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14 }}>
            One list. <span style={{ color: 'var(--gold)' }}>One discount.</span> Pick your tier later.
          </h2>
          <p className="lead" style={{ marginBottom: 32 }}>
            Sign up now, lock in 25% off, and choose your tier whenever you're ready. We'll keep you posted as
            we ramp up to launch.
          </p>
          <div className="card" style={{ padding: 32 }}>
            <SignupForm source={source} preselectedTier={activeTier} />
          </div>
          <p className="muted" style={{ marginTop: 18, fontSize: 13 }}>
            We'll only email you about Dart. You can unsubscribe at any time. Read our <a href="#privacy" style={{ color: 'var(--gold)' }} onClick={(e) => { e.preventDefault(); go('privacy'); }}>privacy policy</a>.
          </p>
        </div>
      </section>

      {/* Compact FAQ */}
      <section className="section">
        <div className="container-narrow">
          <div className="eyebrow">Quick questions</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 24 }}>
            Before you sign up.
          </h2>
          {[
            ['Can I get a refund?', 'Single-day and 5-day packs are non-refundable but transferable to another date. Annual is refundable within 14 days. Beta participants don\'t pay, so refunds don\'t apply there.'],
            ['Do I need a My Disney Experience account?', 'Yes. Dart connects to MDE via a standard Friends & Family connection — same as every other tool in the category.'],
            ['Do I need an annual pass?', 'No. The annual Dart tier is for guests of all kinds with frequent trips. Single-day and 5-day packs work for one-off visits.'],
            ['Does this work at Disneyland?', 'Not at launch. Walt Disney World only.'],
            ['Where does my discount get sent?', 'To the email you sign up with. We\'ll send your 25% code shortly after signup; it\'s good through end of 2026.'],
          ].map(([q, a]) => (
            <div key={q} style={{ paddingBottom: 18, marginBottom: 18, borderBottom: '1px solid rgba(244,197,66,0.14)' }}>
              <h3 className="serif-i" style={{ fontSize: 20, marginBottom: 6 }}>{q}</h3>
              <p style={{ color: 'var(--cream-2)', fontSize: 15.5, lineHeight: 1.6 }}>{a}</p>
            </div>
          ))}
          <p style={{ marginTop: 18 }}>
            <a href="#learn" style={{ color: 'var(--gold)' }} onClick={(e) => { e.preventDefault(); go('learn'); }}>
              See the full FAQ →
            </a>
          </p>
        </div>
      </section>

      {/* Categorical comparison */}
      <section className="section section-cream">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Where Dart sits</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 22 }}>
            Most Lightning Lane tools just search.<br/>Most dining tools only alert.
          </h2>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 640 }}>
            Dart pulls Lightning Lane, dining, and your fixed plans into one optimized day — and starts at
            $10. We're another option from a different angle, not a disruption to a community we're part of.
          </p>
        </div>
      </section>
    </div>
  );
};

window.PagePricing = PagePricing;
