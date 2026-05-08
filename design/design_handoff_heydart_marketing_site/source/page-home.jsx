/* global React, ArtSlot, HeroEyebrow, PricingMatrix, Fox, IconDart, IconHunt, IconMagic, IconBadge */

// =============================================================================
// HOME PAGE
// =============================================================================
const PageHome = ({ go }) => (
  <div>
    {/* Hero */}
    <section className="hero starlit">
      <div className="container">
        <div className="hero-grid">
          <div>
            <HeroEyebrow>Lightning Lane · July 2026 · Pre-launch</HeroEyebrow>
            <h1>
              Be a guest at<br/>
              <span className="alt">your own vacation.</span>
            </h1>
            <p className="lead">
              Your personal concierge, darting through the parks — scoping lines, holding tables, threading the day a
              step ahead. Phone in pocket. Eyes on the kids.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-large" href="#pricing"
                 onClick={(e) => { e.preventDefault(); go('pricing', { source: 'home-hero' }); }}>
                Get 25% off — join the list
              </a>
              <a className="btn btn-secondary btn-large" href="#how-it-works"
                 onClick={(e) => { e.preventDefault(); go('how-it-works'); }}>
                How Dart works →
              </a>
            </div>
            <p style={{ marginTop: 14, fontSize: 13.5, color: 'var(--cream-2)', opacity: 0.78, fontStyle: 'italic' }}>
              Lightning Lane today, Dining coming this fall.
            </p>
            <div className="hero-meta">
              <div className="hero-meta-item"><strong>Lightning Lane</strong> July 2026</div>
              <div className="hero-meta-item"><strong>Dining add-on</strong> Fall 2026</div>
              <div className="hero-meta-item"><strong>From</strong> $10 a day</div>
            </div>
          </div>
          <div>
            <ArtSlot
              id="home-hero"
              ratio="4 / 5"
              label="Hero — castle silhouette at dusk, fox in foreground"
              prompt={`A wide vertical illustration of a generic storybook castle silhouette under a deep cobalt-night sky transitioning to warm amber horizon. Marquee-amber light glows from castle windows. A small fox character (rust-orange, cream belly) stands in soft foreground meadow looking up. Loose pencil under-drawing visible, watercolor wash on top, chalky paper texture. Hand-drawn feel — NOT digital flat shapes. Faint scatter of stars in white gouache. NO Disney IP — generic three-tower fairytale castle, NOT Cinderella's castle.`}
              model="Midjourney v6 (best for painterly storyboard) — fallback: niji 6 stylize 600, or Flux 1.1 Pro with style ref"
              ref_="early Disney pre-production storyboard art · Eyvind Earle dusk panels · Mary Blair concept boards"
              palette="cobalt #0e1238 · marquee amber #e8a630 · magenta #e0479e · cream wash #fef0d6"
            />
          </div>
        </div>
      </div>
    </section>

    {/* What Dart does */}
    <section className="section section-cream">
      <div className="container">
        <div className="eyebrow">What Dart does</div>
        <h2 className="h-section" style={{ marginTop: 8, marginBottom: 36, maxWidth: 720 }}>
          Four moves, run on repeat, all day long.
        </h2>
        <div className="grid-4">
          {[
            { icon: IconHunt,  tint: 'gold',    title: 'Checks Lightning Lane every few minutes', body: 'Dart watches Multi Pass availability for your party throughout the day and secures selections as they become available.' },
            { icon: IconDart,  tint: 'rust',    title: 'Plans around your day', body: 'Dining you\'ve booked, parades, naptime, height limits — Dart shapes the schedule around what you\'ve already planned.' },
            { icon: IconMagic, tint: 'brick',   title: 'Adjusts when the day shifts', body: 'Running late, ride goes down, kid needs a break — Dart suggests the next move and quietly reworks the rest.' },
            { icon: IconHunt,  tint: 'magenta', title: 'Watches dining availability', body: 'Hard-to-find reservations as they become available. Optional add-on, Fall 2026.', tag: 'Fall 2026' },
          ].map((c, i) => (
            <div key={i} className="card card-cream move-card">
              <IconBadge icon={c.icon} tint={c.tint} size={44} />
              <h3 className="h-card">
                {c.title}
                {c.tag && <span className="tag tag-magenta" style={{ marginLeft: 10, verticalAlign: 'middle' }}>{c.tag}</span>}
              </h3>
              <p style={{ color: 'var(--cream-ink-2)', fontSize: 14.5, marginTop: -4 }}>{c.body}</p>
            </div>
          ))}
        </div>

        {/* Spot illustration row */}
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          <ArtSlot id="home-spot-1" ratio="1 / 1" tone="light"
            label="Spot — fox at a queue gate"
            prompt="A fox character peeking around the corner of a stylized queue rope-line stanchion. Watercolor wash and pencil sketch. Cream paper background, rust-orange fox, navy ink lines."
            model="Midjourney v6 niji style 200 — or Recraft v3 (illustration mode)"
            ref_="early storyboard sketches · Bill Peet"
            palette="rust · navy · cream paper" />
          <ArtSlot id="home-spot-2" ratio="1 / 1" tone="light"
            label="Spot — schedule scroll with stamps"
            prompt="A vintage paper itinerary scroll with handwritten times and small ride-stamp icons (ferris wheel, mountain, monorail). Watercolor wash, ink lettering. Cream paper, gold stamps, navy ink."
            model="Recraft v3 (best for type-aware illustration) — fallback Midjourney v6"
            ref_="vintage travel ephemera · 1950s park brochures"
            palette="cream · gold · navy" />
          <ArtSlot id="home-spot-3" ratio="1 / 1" tone="light"
            label="Spot — fireworks over a wheel"
            prompt="A ferris wheel silhouette beneath bursting fireworks. Loose ink line, magenta and gold watercolor wash on cobalt paper. Stars scattered with white gouache."
            model="Midjourney v6 stylize 500"
            ref_="early Disney 1950s park brochure"
            palette="cobalt · gold · magenta · white gouache" />
        </div>
      </div>
    </section>

    {/* Category framing */}
    <section className="section">
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="eyebrow">Where Dart fits</div>
        <h2 className="h-section" style={{ marginTop: 14, marginBottom: 22 }}>
          Another option, from a different angle.
        </h2>
        <p className="lead" style={{ margin: '0 auto', maxWidth: 640, fontSize: 18 }}>
          The Disney planning tool community is small and friendly, and we've used most of them. Most Lightning Lane
          tools just search. Most dining tools only alert. Dart pulls Lightning Lane, dining, and your fixed plans
          into one optimized day — and you talk to it like you'd text a friend who knows the parks.
        </p>
      </div>
    </section>

    {/* Pricing teaser */}
    <section className="section section-deep">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
          <div>
            <div className="eyebrow">Pricing</div>
            <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
              Priced for everyone. <span style={{ color: 'var(--gold)' }}>From $10 a day.</span>
            </h2>
            <p className="lead" style={{ marginBottom: 22 }}>
              Pick Lightning Lane only, or add Dining when it ships. Both tiers, both party sizes, all three
              durations — listed plainly.
            </p>
            <div style={{ padding: 18, borderRadius: 14, background: 'rgba(244,197,66,0.10)', border: '1px solid rgba(244,197,66,0.32)', marginBottom: 22 }}>
              <div className="serif-i" style={{ fontSize: 22, color: 'var(--gold)', marginBottom: 6 }}>
                Sign up now and get 25% off
              </div>
              <p style={{ fontSize: 14.5, color: 'var(--cream-2)', margin: 0 }}>
                Code valid for any tier through end of 2026. Lock in your discount; pick your tier when you're ready.
              </p>
            </div>
            <a className="btn btn-primary" href="#pricing" onClick={(e) => { e.preventDefault(); go('pricing', { source: 'home-pricing' }); }}>
              See full pricing →
            </a>
          </div>
          <div className="tier-stack">
            <div className="tier-row featured">
              <IconBadge icon={IconHunt} tint="cream" size={40} />
              <div>
                <div className="tier-label">Single day · Lightning Lane</div>
                <div className="tier-sub">Try Dart for one park day</div>
              </div>
              <div>
                <div className="tier-price">$10</div>
                <span className="tier-price-sub">party of 1–6</span>
              </div>
            </div>
            <div className="tier-row">
              <IconBadge icon={IconDart} tint="cream" size={40} />
              <div>
                <div className="tier-label">5-day pack · Lightning Lane</div>
                <div className="tier-sub">Use within 30 days</div>
              </div>
              <div>
                <div className="tier-price">$25</div>
                <span className="tier-price-sub">party of 1–6</span>
              </div>
            </div>
            <div className="tier-row">
              <IconBadge icon={IconMagic} tint="cream" size={40} />
              <div>
                <div className="tier-label">Annual · Lightning Lane</div>
                <div className="tier-sub">Best for frequent visitors</div>
              </div>
              <div>
                <div className="tier-price">$100</div>
                <span className="tier-price-sub">party of 1–6</span>
              </div>
            </div>
            <p className="muted" style={{ fontSize: 12.5, marginTop: 4, textAlign: 'right' }}>
              + Dining add-on from $15 single-day · 7+ party tier available
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Roadmap */}
    <section className="section section-deep">
      <div className="container">
        <div className="eyebrow" style={{ textAlign: 'center' }}>Launch dates</div>
        <h2 className="h-section" style={{ textAlign: 'center', marginTop: 14, marginBottom: 40 }}>
          When you can use Dart.
        </h2>
        <div className="grid-2" style={{ gap: 24 }}>
          <div className="card" style={{ padding: 36, textAlign: 'center' }}>
            <div className="serif-i" style={{ fontSize: 56, color: 'var(--gold)', lineHeight: 1, marginBottom: 12 }}>July</div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: 'var(--serif)', fontStyle: 'italic' }}>2026</div>
            <p style={{ marginTop: 14, color: 'var(--cream-2)' }}><strong style={{ color: 'var(--gold)' }}>Lightning Lane</strong> — Dart goes live</p>
          </div>
          <div className="card" style={{ padding: 36, textAlign: 'center' }}>
            <div className="serif-i" style={{ fontSize: 56, color: 'var(--magenta)', lineHeight: 1, marginBottom: 12 }}>Fall</div>
            <div style={{ fontSize: 32, fontWeight: 700, fontFamily: 'var(--serif)', fontStyle: 'italic' }}>2026</div>
            <p style={{ marginTop: 14, color: 'var(--cream-2)' }}><strong style={{ color: 'var(--magenta)' }}>Dining add-on</strong> — optional upgrade</p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="section">
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2 className="h-display" style={{ marginBottom: 22 }}>
          Off your phone.<br/>
          <span style={{ color: 'var(--gold)' }}>On the ride.</span>
        </h2>
        <p className="lead" style={{ margin: '0 auto 28px', maxWidth: 540 }}>
          Join the list and lock in 25% off any tier through the end of 2026.
        </p>
        <a className="btn btn-primary btn-large" href="#pricing" onClick={(e) => { e.preventDefault(); go('pricing', { source: 'home-final' }); }}>
          Get my 25% off code →
        </a>
        <p style={{ marginTop: 22, fontSize: 12.5, color: 'var(--cream-2)', opacity: 0.7 }}>
          Not affiliated with The Walt Disney Company. <a href="#disclaimer" style={{ color: 'var(--gold)' }} onClick={(e) => { e.preventDefault(); go('disclaimer'); }}>Read the full disclaimer →</a>
        </p>
      </div>
    </section>
  </div>
);

window.PageHome = PageHome;
