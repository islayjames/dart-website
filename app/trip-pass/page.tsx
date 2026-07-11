import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Trip Pass · Real-Time Disney Help Across Your Whole Trip · Dart',
  description: 'Trip Pass covers up to 7 park days in a 15-day window — plus concierge support on rest days. $45 for parties of 1–8. Early access starts September 1, 2026.',
  alternates: { canonical: 'https://heydart.com/trip-pass' },
  openGraph: { title: 'Trip Pass · Dart', url: 'https://heydart.com/trip-pass', images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart' }] },
};

export default function TripPassPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Trip Pass"
        title={<>Your whole vacation. <span style={{ color: 'var(--brick)' }}>One pass.</span></>}
        lead="Trip Pass covers up to 7 park days within a 15-day window — and acts as your concierge for everything around Walt Disney World on your rest days. One purchase, the whole trip."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: 'center' }}>
            <div>
              <div className="eyebrow">What 7 days in 15 looks like</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Built for how <span style={{ color: 'var(--brick)' }}>real trips work.</span>
              </h2>
              <p className="lead" style={{ marginBottom: 16 }}>
                Most Disney vacations are 3–7 park days spread over a longer stay — with resort days, Disney Springs visits, and travel days mixed in. Trip Pass matches that shape.
              </p>
              {[
                ['3–7 days out', "Dart helps you prep — priorities, Lightning Lane strategy, dining decisions, understanding the shape of each park day."],
                ['Park days', 'Dart connects to live data — Lightning Lane, dining alerts, wait times, mobile order timing — and helps your family decide what to do next.'],
                ['Rest days', 'Concierge support for resort activities, Disney Springs, hotel dining, transportation, and prep for the next park day.'],
              ].map(([label, desc]) => (
                <div key={label as string} style={{ marginBottom: 16, paddingLeft: 16, borderLeft: '3px solid var(--brick)' }}>
                  <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--brick)', marginBottom: 4 }}>{label}</div>
                  <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55 }}>{desc}</p>
                </div>
              ))}
            </div>
            <div className="pcard featured" style={{ maxWidth: 380, width: '100%' }}>
              <div className="pcard-flag">Best for a full trip</div>
              <div className="pcard-eyebrow" style={{ marginBottom: 4 }}>For the trip</div>
              <div className="pcard-name">Trip Pass</div>
              <p className="pcard-body">
                Up to 7 park days in a 15-day window. Pre-trip prep, in-park guidance, rest day concierge. One purchase covers the whole vacation.
              </p>
              <div className="pcard-price">
                <span className="pcard-price-amount">$45</span>
                <span className="pcard-price-unit">/ trip · party of 1–8</span>
              </div>
              <ul className="pcard-list">
                <li>Real-time Lightning Lane and dining</li>
                <li>Pre-trip prep + in-park guidance</li>
                <li>Resort &amp; between-park concierge</li>
                <li>One purchase covers the whole vacation</li>
              </ul>
              <Link className="btn btn-primary pcard-cta" href="/pricing?source=trip-pass">
                Start with Trip Pass →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container-narrow">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Related guides</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <Link href="/lightning-lane-help" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>Lightning Lane help →</Link>
            <Link href="/dining-mobile-order-help" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>Dining &amp; mobile order help →</Link>
            <Link href="/first-time-disney-world" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>First time at Disney World →</Link>
          </div>
        </div>
      </div>

      <section className="section section-twilight">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Early access starts September 1</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
            Be a guest at your own vacation.
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            Join for August dining alerts, controlled September access, and the launch discount.
          </p>
          <Link className="btn btn-primary btn-large" href="/pricing?source=trip-pass-cta">
            Join the waitlist & get the launch discount →
          </Link>
        </div>
      </section>
    </div>
  );
}
