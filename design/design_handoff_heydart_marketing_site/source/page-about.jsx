/* global React, ArtSlot */

// =============================================================================
// ABOUT
// =============================================================================
const PageAbout = ({ go }) => (
  <div>
    <header className="page-header">
      <div className="container">
        <div className="eyebrow">Why we're building this</div>
        <h1 style={{ marginTop: 12 }}>We loved the existing tools. <span style={{ color: 'var(--gold)' }}>We built the one we wished existed.</span></h1>
      </div>
    </header>

    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: 56 }}>
          <div>
            <p className="lead" style={{ fontSize: 19, marginBottom: 22 }}>
              He worked at Disneyland through college. He says it's the most fun he's ever had — running rides
              at night, watching the parade roll past, eating churros for dinner. He left for software, founded
              and exited two companies, and is now Chief AI Officer at a billion-dollar company.
            </p>
            <p className="lead" style={{ fontSize: 19, marginBottom: 22 }}>
              She homeschools their kids and runs a bespoke travel agency, planning custom-tailored trips for
              families who want more than a packaged vacation. She's used every Disney planning tool there is.
              She has opinions.
            </p>
            <p className="lead" style={{ fontSize: 19, marginBottom: 22 }}>
              We're DVC members, annual passholders, a Disney family. We've spent a lot of time at the parks —
              with strollers, with grandparents, in the rain, with hungry kids at 2 PM. We loved the existing
              tools. We learned from them. And we built the one we wished existed.
            </p>
          </div>
          <div>
            <ArtSlot id="about-portrait" ratio="3 / 4"
              label="Founders portrait"
              prompt="Stylized double-portrait illustration of a husband and wife duo standing close together, the man casually dressed, the woman holding a small clipboard. Generic warm faces — illustrated, not photo-real. Watercolor wash with visible pencil under-drawing. Cream paper background, navy ink lines, hints of gold and magenta. Painterly. NO Disney imagery in the background — just a soft cobalt sky."
              model="Midjourney v6 stylize 350 + character reference image — fallback Flux 1.1 Pro"
              ref_="watercolor portrait illustration · Mary Blair character work"
              palette="cream · navy · rust · gold · magenta accents" />
          </div>
        </div>
      </div>
    </section>

    {/* What we believe */}
    <section className="section section-cream">
      <div className="container">
        <div className="eyebrow">What we believe</div>
        <h2 className="h-section" style={{ marginTop: 14, marginBottom: 36, maxWidth: 720 }}>
          Five small principles we keep coming back to.
        </h2>
        <div className="grid-2" style={{ gap: 24 }}>
          {[
            ['Disney trips should be easier — especially for first-timers',
             'The current system rewards expertise. People with planning fluency get the most out of their visit. We want to flatten that gap so a first-time family can have nearly as smooth a day as the annual passholder beside them.'],
            ['We\'re a small business. Please be patient as we grow.',
             'We\'re building this with care. We\'ll occasionally ship slow. We\'ll occasionally get something wrong and fix it the next day. We promise to be transparent about both.'],
            ['We use only public or licensed content',
             'No scraping creators\' work. No content theft. We\'re committed to working with the community of writers, YouTubers, and content makers who built the planning culture, not around them.'],
            ['Fair pricing, fair use of system resources',
             'We\'re committed to staying affordable for families and to not monopolizing public APIs or hammering Disney\'s systems. The category has good norms here. We\'ll honor them.'],
            ['Not affiliated with Disney',
             'We are not affiliated with, endorsed by, or sponsored by The Walt Disney Company. The full disclaimer is below — read it once, take it seriously, and the rest is just us trying to make a tool we\'d use.'],
          ].map(([title, body]) => (
            <div key={title} className="card card-cream" style={{ padding: 26 }}>
              <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 10, color: 'var(--cream-ink)' }}>{title}</h3>
              <p style={{ color: 'var(--cream-ink-2)', fontSize: 15, lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Disclaimer */}
    <section className="section section-deep">
      <div className="container-narrow">
        <div className="eyebrow">The full disclaimer</div>
        <h2 className="h-section" style={{ marginTop: 14, marginBottom: 22 }}>
          Not affiliated with The Walt Disney Company.
        </h2>
        <div className="card" style={{ padding: 32 }}>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--cream-2)', marginBottom: 14 }}>
            Dart and HeyDart are not affiliated with, endorsed by, or sponsored by The Walt Disney Company,
            or any of its affiliates or subsidiaries.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--cream-2)', marginBottom: 14 }}>
            All Disney park names, attraction names, character names, and related marks (including but not
            limited to "Walt Disney World," "Magic Kingdom," "EPCOT," "Disney's Hollywood Studios,"
            "Disney's Animal Kingdom," "Lightning Lane," "Lightning Lane Multi Pass," and "My Disney
            Experience") are the property of their respective owners and are used here only for descriptive
            purposes.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--cream-2)' }}>
            Dart is a third-party planning assistant. Use of Dart is subject to The Walt Disney Company's
            terms of service for any of its products you may also use. Dart works alongside My Disney
            Experience but does not replace it.
          </p>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="section">
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <h2 className="h-section" style={{ marginBottom: 18 }}>Say hello.</h2>
        <p className="lead" style={{ margin: '0 auto 22px', maxWidth: 480 }}>
          We're a small team. We read every email.
        </p>
        <a className="btn btn-primary btn-large" href="mailto:hello@heydart.com">
          hello@heydart.com
        </a>
      </div>
    </section>
  </div>
);

// =============================================================================
// PARTNERSHIPS
// =============================================================================
const PagePartnerships = ({ go }) => (
  <div>
    <header className="page-header">
      <div className="container">
        <div className="eyebrow">Partnerships</div>
        <h1 style={{ marginTop: 12 }}>Friends of <span style={{ color: 'var(--gold)' }}>the community.</span></h1>
        <p className="lead" style={{ marginTop: 18 }}>
          We're a small business and a friend of the Disney planning community. We'd love to work with people
          who share our audience — content creators and travel agents — to help more families have a better
          park day.
        </p>
      </div>
    </header>

    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 28 }}>
          <div className="card" style={{ padding: 32 }}>
            <div className="eyebrow" style={{ color: 'var(--magenta)' }}>Content creators</div>
            <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14, fontSize: 32 }}>
              Get Dart in front of audiences who'd benefit.
            </h2>
            <p style={{ marginBottom: 16, color: 'var(--cream-2)' }}>
              We license content fairly and only use publicly available material. We want to work with creators,
              not around them. If your audience plans Disney trips, let's talk.
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--cream-2)', fontSize: 14.5, lineHeight: 1.7, marginBottom: 22 }}>
              <li>Affiliate revenue share on any tier</li>
              <li>Licensing fees for substantive use of your work</li>
              <li>Co-marketing for launch in July 2026</li>
              <li>Early access for review</li>
            </ul>
            <a className="btn btn-primary" href="mailto:partnerships@heydart.com?subject=Creator%20partnership">
              Email partnerships@heydart.com →
            </a>
          </div>

          <div className="card" style={{ padding: 32 }}>
            <div className="eyebrow" style={{ color: 'var(--teal)' }}>Travel agents</div>
            <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14, fontSize: 32 }}>
              Help your clients have a better Disney experience.
            </h2>
            <p style={{ marginBottom: 16, color: 'var(--cream-2)' }}>
              We come from this world — one of our founders runs a custom travel agency. We know the difference
              a great agent makes for a first-time family. Let's give you another tool in your kit.
            </p>
            <ul style={{ paddingLeft: 18, color: 'var(--cream-2)', fontSize: 14.5, lineHeight: 1.7, marginBottom: 22 }}>
              <li>Agent rate cards for client purchases</li>
              <li>White-labeled gift codes for client onboarding</li>
              <li>Dedicated agent contact for issues</li>
              <li>Early access for evaluation</li>
            </ul>
            <a className="btn btn-primary" href="mailto:partnerships@heydart.com?subject=Travel%20agent%20partnership">
              Email partnerships@heydart.com →
            </a>
          </div>
        </div>

        <div style={{ marginTop: 36, padding: 24, borderRadius: 14, background: 'rgba(244,197,66,0.06)', border: '1px solid rgba(244,197,66,0.2)' }}>
          <p style={{ fontSize: 14.5, color: 'var(--cream-2)' }}>
            <strong style={{ color: 'var(--gold)' }}>Honest framing:</strong> We're a small organization. Please be patient as we ramp up — we want to do these
            partnerships well rather than fast. We'll respond within a week and we'll be candid about what we
            can and can't do.
          </p>
        </div>
      </div>
    </section>
  </div>
);

window.PageAbout = PageAbout;
window.PagePartnerships = PagePartnerships;
