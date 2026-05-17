import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Disney World Dining Reservations & Mobile Order Timing · Dart',
  description: "Dart watches dining availability and mobile order timing so you don't miss a table or waste time in a pickup queue. You confirm the booking yourself in MDE.",
  alternates: { canonical: 'https://heydart.com/dining-mobile-order-help' },
  openGraph: { title: 'Disney World Dining & Mobile Order Timing · Dart', url: 'https://heydart.com/dining-mobile-order-help', images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart' }] },
};

export default function DiningMobileOrderHelpPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Dining & mobile order"
        title={<>Hungry kids don&apos;t wait. <span style={{ color: 'var(--brick)' }}>Dart doesn&apos;t either.</span></>}
        lead="Dart watches dining availability and mobile order pickup timing so you can act at the right moment — without refreshing a page every 30 seconds. You confirm the booking yourself in My Disney Experience."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">The three timing problems Dart solves</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Timing is <span style={{ color: 'var(--brick)' }}>everything.</span>
              </h2>
              {[
                ['Dining reservations', 'Hard-to-get tables open up when someone cancels. Dart watches and alerts you the moment availability appears — you book it in MDE.'],
                ['Walk-up waitlist timing', 'Walk-up lists open at unpredictable times. Dart monitors and tells you when the window is right so you don\'t have to keep checking.'],
                ['Mobile order pickup', 'Ordering too early means cold food. Too late means a long pickup wait. Dart watches queue length and recommends when to order.'],
              ].map(([title, body]) => (
                <div key={title as string} style={{ marginBottom: 22 }}>
                  <h3 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 21, marginBottom: 8, color: 'var(--twilight)' }}>{title}</h3>
                  <p style={{ fontSize: 15.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{body}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="h-card" style={{ marginBottom: 18 }}>Real examples</h3>
              {[
                ['Mobile order before the line builds', "It's 11:45. You're finishing a ride. Dart sees mobile order pickup at Satu'li is showing 8 minutes — the best it's been all morning. It suggests ordering now so food is ready when you arrive."],
                ['Skip the cross-park dining hike', "You wanted dinner at Space 220 but it's showing 90-minute waits. Dart caught a cancellation at Topolino's and flagged it immediately — closer to your next Lightning Lane too."],
                ['Catch the cancellation', 'Be Our Guest has been fully booked for months. Dart watches the cancellation stream. When a table opens for your dates, you get the alert — and the link to book it in MDE.'],
              ].map(([title, body]) => (
                <div key={title as string} className="card" style={{ marginBottom: 14, padding: 20 }}>
                  <h4 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, marginBottom: 6, color: 'var(--twilight)' }}>{title}</h4>
                  <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{body}</p>
                </div>
              ))}
              <p className="muted" style={{ fontSize: 13, marginTop: 8, fontStyle: 'italic' }}>
                Dart doesn&apos;t place orders or book reservations for you — you confirm in My Disney Experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-twilight">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Launching August 2026</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
            Hungry kids don&apos;t wait. Dart doesn&apos;t either.
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            Join the waitlist for August launch access and the launch discount.
          </p>
          <Link className="btn btn-primary btn-large" href="/pricing?source=dining-mobile-order-help">
            Join the waitlist & get the launch discount →
          </Link>
        </div>
      </section>
    </div>
  );
}
