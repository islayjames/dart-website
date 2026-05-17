import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'First Time at Disney World? Here\'s What to Know · Dart',
  description: 'Lightning Lane, MDE, and what Dart actually handles — a clear guide for first-time Disney World visitors. Dart launches August 2026.',
  alternates: { canonical: 'https://heydart.com/first-time-disney-world' },
  openGraph: { title: 'First Time at Disney World? Here\'s What to Know · Dart', url: 'https://heydart.com/first-time-disney-world', images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart' }] },
};

export default function FirstTimeDisneyWorldPage() {
  return (
    <div>
      <PageHeader
        eyebrow="First time at Disney World"
        title={<>The system is learnable. <span style={{ color: 'var(--brick)' }}>Dart learns it for you.</span></>}
        lead="Lightning Lane Multi Pass, My Disney Experience, dining reservations, mobile order — there's a lot to absorb. Dart connects to the live park systems so you don't have to master them before you go."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">What you actually need to know</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Less prep. <span style={{ color: 'var(--brick)' }}>More park.</span>
              </h2>
              <p className="lead" style={{ marginBottom: 16 }}>
                First-timers often spend weeks researching Lightning Lane strategy, dining reservation timing, and park routing. Dart handles the live decisions so you can spend that time getting excited instead of anxious.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
                You still make the calls. Dart just has the live data — wait times, Lightning Lane availability, mobile order timing — and surfaces the right move when the moment arrives.
              </p>
            </div>
            <div className="card" style={{ padding: 28 }}>
              <h3 className="h-card" style={{ marginBottom: 18 }}>Common first-timer questions</h3>
              {[
                ['Do I have to book every ride in advance?', 'No. Lightning Lane Multi Pass lets you reserve rides throughout the day — Dart watches for the right openings as you go.'],
                ['What is My Disney Experience?', "Disney's app for tickets, dining, plans, and Lightning Lane. Dart connects to it via a standard Friends & Family link."],
                ['Will Dart book everything for me?', "Dart watches and recommends — you confirm. It's designed to keep you in control while handling the monitoring."],
                ['What if plans change?', "They always do. Dart adjusts as the day shifts — new Lightning Lane availability, wait time changes, timing updates."],
              ].map(([q, a]) => (
                <div key={q as string} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid var(--rule)' }}>
                  <h4 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, marginBottom: 6, color: 'var(--twilight)' }}>{q}</h4>
                  <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-twilight">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Launching August 2026</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
            Less planning. Less scanning. More memories.
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            Join the waitlist for August launch access and the launch discount.
          </p>
          <Link className="btn btn-primary btn-large" href="/pricing?source=first-time-disney-world">
            Join the waitlist & get the launch discount →
          </Link>
        </div>
      </section>
    </div>
  );
}
