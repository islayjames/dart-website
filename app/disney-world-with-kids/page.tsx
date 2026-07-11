import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Disney World With Kids: A Calmer Family Day · Dart',
  description: 'Managing height limits, naps, hunger spirals, and Lightning Lane with kids in tow. Dart handles the logistics so you can stay present with your family.',
  alternates: { canonical: 'https://heydart.com/disney-world-with-kids' },
  openGraph: { title: 'Disney World With Kids: A Calmer Family Day · Dart', url: 'https://heydart.com/disney-world-with-kids', images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart' }] },
};

export default function DisneyWorldWithKidsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Disney World with kids"
        title={<>The day isn&apos;t yours to optimize. <span style={{ color: 'var(--brick)' }}>It&apos;s the family&apos;s to live.</span></>}
        lead="Dart knows about nap windows, height limits, stroller logistics, and the fact that one hungry kid can reshape an afternoon. It builds the day around your family, not around the park's schedule."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">What Dart tracks for families</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Built around <span style={{ color: 'var(--brick)' }}>your family.</span>
              </h2>
              <p className="lead" style={{ marginBottom: 16 }}>
                Tell Dart who's coming — ages, heights, pace, must-dos, nap schedules. It factors all of that into every suggestion so you're not getting recommendations that don't fit your crew.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
                Height limits, stroller policies, quiet areas, restroom proximity — Dart is aware of the family-specific constraints that generic advice ignores.
              </p>
            </div>
            <div>
              <h3 className="h-card" style={{ marginBottom: 18 }}>Stuff that actually breaks a Disney day</h3>
              {[
                ['The hunger spiral', 'One kid gets hungry, the mood drops, everything grinds. Dart tracks mobile order timing and walking time to the nearest quick service so you can get ahead of it.'],
                ['The stroller situation', 'Certain rides, certain paths, certain queues. Dart knows. It routes around the friction instead of sending you to figure it out.'],
                ['Height surprises', "Your 7-year-old is 2 inches short of the cutoff. Dart knows before you walk to the ride — and already has an alternative ready."],
              ].map(([title, body]) => (
                <div key={title as string} className="card" style={{ marginBottom: 16, padding: 22 }}>
                  <h4 style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, marginBottom: 8, color: 'var(--twilight)' }}>{title}</h4>
                  <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>{body}</p>
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
            <Link href="/first-time-disney-world" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>First time at Disney World →</Link>
            <Link href="/lightning-lane-help" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>Lightning Lane help →</Link>
            <Link href="/dining-mobile-order-help" style={{ color: 'var(--brick)', fontWeight: 600, fontSize: 15 }}>Dining &amp; mobile order help →</Link>
          </div>
        </div>
      </div>

      <section className="section section-twilight">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Early access starts September 1</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
            Phone in pocket. Eyes on the kids.
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            Join the waitlist for August launch access and the launch discount.
          </p>
          <Link className="btn btn-primary btn-large" href="/pricing?source=disney-world-with-kids">
            Join the waitlist & get the launch discount →
          </Link>
        </div>
      </section>
    </div>
  );
}
