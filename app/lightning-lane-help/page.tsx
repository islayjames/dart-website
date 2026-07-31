import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to plan your Lightning Lane day at Disney World',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Purchase Lightning Lane Multi Pass in My Disney Experience', text: 'Buy LLMP in the MDE app starting at park open (or 7am for resort guests). This gives you one Lightning Lane selection at a time.' },
    { '@type': 'HowToStep', position: 2, name: 'Make your first Lightning Lane selection', text: 'Choose your highest-priority attraction first — typically the one with the longest standby wait. Dart watches availability and alerts you to the best windows.' },
    { '@type': 'HowToStep', position: 3, name: 'Redeem and rebook', text: 'After redeeming or 2 hours have passed, you can make your next selection. Dart tracks timing and recommends when to rebook based on wait patterns.' },
    { '@type': 'HowToStep', position: 4, name: 'Watch for walk-up and modified availability', text: 'Lightning Lane availability shifts throughout the day. Dart monitors for better times and walk-up opportunities so you can rebook without constantly checking the app.' },
    { '@type': 'HowToStep', position: 5, name: 'Balance Lightning Lane with standby', text: "Not every attraction needs Lightning Lane. Dart recommends when to use your selection vs. join the standby line based on current wait times and your party's priorities." },
  ],
};

export const metadata: Metadata = {
  title: 'Lightning Lane Multi Pass Help · Dart',
  description: 'Dart monitors Lightning Lane availability and helps you decide when to take a selection — so you stop scanning and start riding.',
  alternates: { canonical: 'https://heydart.com/lightning-lane-help' },
  openGraph: { title: 'Lightning Lane Multi Pass Help · Dart', url: 'https://heydart.com/lightning-lane-help', images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart' }] },
};

export default function LightningLaneHelpPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <PageHeader
        eyebrow="Lightning Lane help"
        title={<>Stop scanning. <span style={{ color: 'var(--brick)' }}>Start riding.</span></>}
        lead="Lightning Lane Multi Pass opens up throughout the day — but knowing when to take a selection, and for which ride, takes real-time awareness of wait times, your location, and what's available. Dart watches all of it."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">How Dart helps with Lightning Lane</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Not just another tool that <span style={{ color: 'var(--brick)' }}>finds openings.</span>
              </h2>
              <p className="lead" style={{ marginBottom: 16 }}>
                Most tools show you what's available. Dart tells you what to do with it — based on your location, walking time, your family's priorities, and how the rest of the day is shaped.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6, marginBottom: 16 }}>
                You purchase Multi Pass yourself in My Disney Experience, the same way you always have. Dart monitors availability and helps you decide when a selection makes sense for your specific day.
              </p>
            </div>
            <div>
              <h3 className="h-card" style={{ marginBottom: 18 }}>Honest limits</h3>
              {[
                ["Dart doesn't buy LLMP for you", 'You purchase Multi Pass in MDE. Dart helps with the decision, not the transaction.'],
                ["Dart doesn't buy Individual Lightning Lanes", 'LLSP are a separate paid Disney product. You handle those in MDE; Dart can help move one you already own.'],
                ["No guarantees on availability", "Lightning Lane availability is controlled by Disney. We watch fast and surface recommendations — we can't create openings."],
                ["Walt Disney World only at launch", "Disneyland support isn't planned for the September 2026 early-access launch."],
              ].map(([title, body]) => (
                <div key={title as string} className="card" style={{ marginBottom: 14, padding: 20 }}>
                  <h4 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, marginBottom: 6, color: 'var(--gold)' }}>{title}</h4>
                  <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container-narrow">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Related guides</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <Link href="/guides/is-lightning-lane-worth-it-disney-world" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>Is Lightning Lane worth it? →</Link>
            <Link href="/first-time-disney-world" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>First time at Disney World →</Link>
            <Link href="/dining-mobile-order-help" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>Dining &amp; mobile order help →</Link>
            <Link href="/trip-pass" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>Trip Pass →</Link>
          </div>
        </div>
      </div>

      <section className="section section-twilight">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Early access starts September 1</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
            Stop scanning. Start riding.
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            Join for August dining alerts, controlled September access, and the launch discount.
          </p>
          <Link className="btn btn-primary btn-large" href="/pricing?source=lightning-lane-help">
            Join the waitlist & get the launch discount →
          </Link>
        </div>
      </section>
    </div>
  );
}
