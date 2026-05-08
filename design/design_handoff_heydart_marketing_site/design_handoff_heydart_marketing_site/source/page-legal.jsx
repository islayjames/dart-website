/* global React */

// =============================================================================
// LEGAL — Privacy / Terms / Disclaimer (scaffolded; counsel fills final language)
// =============================================================================

const Scaffold = ({ title, body }) => (
  <div>
    <header className="page-header">
      <div className="container">
        <div className="eyebrow">Legal</div>
        <h1 style={{ marginTop: 12 }}>{title}</h1>
      </div>
    </header>
    <section className="section">
      <div className="container-narrow">{body}</div>
    </section>
  </div>
);

const PagePrivacy = () => (
  <Scaffold title="Privacy Policy" body={
    <div className="card" style={{ padding: 32, color: 'var(--cream-2)', lineHeight: 1.7 }}>
      <p style={{ fontStyle: 'italic', color: 'var(--gold)', marginBottom: 22 }}>
        Scaffolded for design — counsel fills final language before launch.
      </p>
      <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 8, color: 'var(--cream)' }}>What we collect</h3>
      <p style={{ marginBottom: 18 }}>Email address, party details, trip dates, and any information you provide through the signup form. UTM parameters and the source of your signup CTA. Standard analytics — page views and aggregate usage.</p>
      <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 8, color: 'var(--cream)' }}>What we do with it</h3>
      <p style={{ marginBottom: 18 }}>We email you about Dart — that's it. We don't sell or rent your data. We don't share it with third parties for marketing purposes.</p>
      <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 8, color: 'var(--cream)' }}>How to remove yourself</h3>
      <p>Every email has an unsubscribe link. Email hello@heydart.com to delete your data entirely.</p>
    </div>
  } />
);

const PageTerms = () => (
  <Scaffold title="Terms of Service" body={
    <div className="card" style={{ padding: 32, color: 'var(--cream-2)', lineHeight: 1.7 }}>
      <p style={{ fontStyle: 'italic', color: 'var(--gold)', marginBottom: 22 }}>
        Scaffolded for design — counsel fills final language before launch.
      </p>
      <p style={{ marginBottom: 18 }}>By signing up for the HeyDart interest list, you agree to receive emails about Dart. You can unsubscribe at any time.</p>
      <p style={{ marginBottom: 18 }}>Pre-launch discount codes are subject to the terms communicated at signup — currently, 25% off any tier through end of 2026, redeemable once at purchase.</p>
      <p style={{ marginBottom: 18 }}>Dart does not guarantee Lightning Lane Multi Pass bookings or dining reservations. Availability is subject to The Walt Disney Company's systems and rules.</p>
      <p>Beta participation is governed by a separate beta agreement signed at the time of selection.</p>
    </div>
  } />
);

const PageDisclaimer = () => (
  <Scaffold title="Disclaimer" body={
    <div className="card" style={{ padding: 32, color: 'var(--cream-2)', lineHeight: 1.7 }}>
      <h3 className="serif-i" style={{ fontSize: 24, marginBottom: 12, color: 'var(--gold)' }}>Not affiliated with Disney</h3>
      <p style={{ marginBottom: 18 }}>
        Dart and HeyDart are not affiliated with, endorsed by, or sponsored by The Walt Disney Company,
        or any of its affiliates or subsidiaries.
      </p>
      <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 12, color: 'var(--gold)' }}>Trademarks</h3>
      <p style={{ marginBottom: 18 }}>
        All Disney park names, attraction names, character names, and related marks (including but not
        limited to "Walt Disney World," "Magic Kingdom," "EPCOT," "Disney's Hollywood Studios,"
        "Disney's Animal Kingdom," "Lightning Lane," "Lightning Lane Multi Pass," and "My Disney Experience")
        are the property of their respective owners and are used here only for descriptive purposes.
      </p>
      <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 12, color: 'var(--gold)' }}>Independent service</h3>
      <p style={{ marginBottom: 18 }}>
        Dart is a third-party planning assistant. Use of Dart is subject to The Walt Disney Company's
        terms of service for any of its products you may also use. Dart works alongside My Disney Experience
        but does not replace it.
      </p>
      <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 12, color: 'var(--gold)' }}>No guarantees</h3>
      <p>
        Dart watches Lightning Lane Multi Pass openings and books selections as quickly as possible within
        Disney's rules, but availability is outside our control. We do not guarantee bookings.
      </p>
    </div>
  } />
);

window.PagePrivacy = PagePrivacy;
window.PageTerms = PageTerms;
window.PageDisclaimer = PageDisclaimer;
