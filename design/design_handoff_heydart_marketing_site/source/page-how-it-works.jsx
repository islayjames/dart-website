/* global React, ArtSlot */

// =============================================================================
// HOW IT WORKS
// =============================================================================
const PageHowItWorks = ({ go }) => (
  <div>
    <header className="page-header">
      <div className="container">
        <div className="eyebrow">How it works</div>
        <h1 style={{ marginTop: 12 }}>Tell Dart your day. <span style={{ color: 'var(--gold)' }}>Dart shapes it.</span></h1>
        <p className="lead" style={{ marginTop: 18 }}>
          A mostly conversational planner with a clear schedule and the controls you'd expect when you
          want them. Dart syncs with My Disney Experience, checks Lightning Lane availability throughout
          the day, and works around your existing dining and fixed plans.
        </p>
      </div>
    </header>

    <section className="section">
      <div className="container">
        {[
          {
            n: '01', title: 'Tell Dart your party, dates, and priorities',
            body: 'Mostly conversational — a few short forms where structure helps. Who\'s coming, where you\'re staying, whether anyone is height-limited, the rides that matter most, when the youngest naps. Dart asks follow-ups when something\'s missing.',
            shot: { src: 'assets/product-mobile-welcome.png', alt: 'Dart welcome / onboarding screen' },
          },
          {
            n: '02', title: 'Dart syncs with My Disney Experience',
            body: 'A standard Friends & Family connection — same as every other tool in the category. Dart pulls in your party, your tickets, and your existing dining reservations automatically. You don\'t have to retype the things you\'ve already planned.',
            slot: { id: 'hiw-2', label: 'Spot — connection illustration', prompt: 'Stylized illustration of two cards labeled "MDE" and "Dart" connected by a flowing ribbon of light. Watercolor + pencil. Cream and cobalt palette with gold ribbon. No real Disney logos.', model: 'Midjourney v6 stylize 500', ref_: 'vintage diagram art', palette: 'cream · cobalt · gold' },
          },
          {
            n: '03', title: 'Dart checks Lightning Lane availability throughout the day',
            body: 'Dart polls Multi Pass availability every few minutes, and when a fit appears for your party, it secures it — on the right ride, at the right time, around your other plans. You see what was secured and what Dart is still watching.',
            shot: { src: 'assets/product-mobile-toast.png', alt: 'Dart live day — plan view with a Lightning Lane secured toast' },
          },
          {
            n: '04', title: 'Dart adjusts when the day shifts',
            body: 'Running late, a ride goes down, a kid needs a break — Dart suggests the next move and reworks the rest of the day quietly. You stay in charge of the schedule; Dart just keeps options ready.',
            slot: { id: 'hiw-4', label: 'Spot — fox re-routing illustration', prompt: 'A fox character looking at a winding paper map with two divergent paths sketched in. Watercolor + pencil. Cream paper, navy ink, gold path highlights, magenta detour line.', model: 'Midjourney v6 niji style 200', palette: 'cream · navy · gold · magenta' },
          },
          {
            n: '05', title: 'Add Dining when it ships',
            body: 'Available Fall 2026 as an optional upgrade — not a replacement of Lightning Lane. Dart watches dining availability and books hard-to-find reservations when they open. Always your choice whether to add it.',
            slot: { id: 'hiw-5', label: 'Spot — dining illustration', prompt: 'Stylized illustration of a small fox carrying a tiny restaurant menu like a victory flag, walking past a row of colorful umbrella tables. Watercolor + pencil. Cream paper, navy ink, magenta and teal accents.', model: 'Midjourney v6 niji 6', tag: 'Fall 2026' },
          },
        ].map((step) => (
          <div className="step" key={step.n}>
            <div className="step-num">{step.n}</div>
            <div>
              <h3>
                {step.title}
                {step.tag && <span className="tag tag-magenta" style={{ marginLeft: 12, verticalAlign: 'middle' }}>{step.tag}</span>}
              </h3>
              <p className="lead" style={{ marginTop: 8, marginBottom: 22 }}>{step.body}</p>
              <div style={{ maxWidth: 720 }}>
                {step.shot ? (
                  <div className="shot-frame shot-mobile shot-mobile-lg"><img className="shot" src={step.shot.src} alt={step.shot.alt} /></div>
                ) : (
                  <ArtSlot
                    id={step.slot.id}
                    ratio="16 / 9"
                    label={step.slot.label}
                    prompt={step.slot.prompt}
                    model={step.slot.model}
                    ref_={step.slot.ref_ || 'early Disney storyboard panel · watercolor concept'}
                    palette={step.slot.palette || 'cobalt · gold · cream · navy ink'}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* The conversation */}
    <section className="section section-cream">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
          <div>
            <div className="eyebrow">The conversation</div>
            <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
              Mostly chat. Forms when they help.
            </h2>
            <p className="lead">
              Tell Dart things in plain language. <em>"We want Space Mountain before the kids get hangry."
              "Skip Pirates if the line's bad." "Grandparents are joining day two — they tire easily."</em>{' '}
              Dart already knows your dining (it pulled it from MDE). For the things structure helps with —
              party setup, ride preferences — there's a clean form.
            </p>
          </div>
          <div className="shot-frame shot-mobile"><img className="shot" src="assets/product-mobile-chat.png" alt="Dart mobile chat — Big Thunder return window, TRON booking confirmation" /></div>
        </div>
      </div>
    </section>

    {/* The schedule */}
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
          <div className="shot-frame shot-mobile"><img className="shot" src="assets/product-mobile-plan.png" alt="Dart mobile schedule — bus, park entry, Peter Pan Lightning Lane" /></div>
          <div>
            <div className="eyebrow">The schedule</div>
            <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
              One day. One view. Lock anything you want.
            </h2>
            <p className="lead">
              Manual blocks (parade, naptime, the character meal you've been excited about for six months),
              Lightning Lane selections, and dining all live in one timeline. Lock anything and Dart works
              around it. Unlock and Dart includes it again.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What Dart doesn't do */}
    <section className="section section-deep">
      <div className="container">
        <div className="eyebrow">What Dart doesn't do</div>
        <h2 className="h-section" style={{ marginTop: 14, marginBottom: 32, maxWidth: 720 }}>
          Refreshingly direct. The list is short.
        </h2>
        <div className="grid-2" style={{ gap: 18 }}>
          {[
            ['Doesn\'t buy your Lightning Lane Multi Pass for you', 'You purchase Multi Pass in My Disney Experience, the same way you always have.'],
            ['Doesn\'t book Individual Lightning Lanes', 'Those are a separate Disney product. Different game.'],
            ['Doesn\'t join Virtual Queues', 'Not at launch. Possibly later.'],
            ['Doesn\'t replace My Disney Experience', 'Dart works alongside MDE — never instead of it.'],
            ['Doesn\'t guarantee bookings', 'Availability is outside our control. We watch hard and book fast.'],
            ['Doesn\'t work at Disneyland', 'Walt Disney World only at launch.'],
          ].map(([t, b]) => (
            <div key={t} className="card" style={{ padding: 22 }}>
              <h4 className="serif-i" style={{ fontSize: 19, marginBottom: 6, color: 'var(--gold)' }}>{t}</h4>
              <p style={{ color: 'var(--cream-2)', fontSize: 14.5 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2 className="h-section" style={{ marginBottom: 22 }}>
          Ready to see pricing?
        </h2>
        <a className="btn btn-primary btn-large" href="#pricing" onClick={(e) => { e.preventDefault(); go('pricing', { source: 'how-it-works-final' }); }}>
          See pricing →
        </a>
      </div>
    </section>
  </div>
);

window.PageHowItWorks = PageHowItWorks;
