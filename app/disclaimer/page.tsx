import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Disclaimer | HeyDart',
  description:
    'HeyDart and Dart are not affiliated with, endorsed by, or sponsored by The Walt Disney Company or any of its affiliates. Independent third-party planning assistant for Walt Disney World guests.',
  alternates: {
    canonical: 'https://heydart.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | HeyDart',
    description:
      'HeyDart and Dart are not affiliated with, endorsed by, or sponsored by The Walt Disney Company or any of its affiliates. Independent third-party planning assistant.',
    url: 'https://heydart.com/disclaimer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heydart.com' },
    { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: 'https://heydart.com/disclaimer' },
  ],
};

/**
 * Disclaimer page — affirms non-affiliation with Disney and describes independent service.
 *
 * All Disney park names and trademarks are the property of their respective owners and
 * are referenced here for descriptive purposes only.
 */
export default function DisclaimerPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader eyebrow="Legal" title="Disclaimer" />

      <section className="section">
        <div className="container-narrow">
          <div className="card" style={{ padding: 32, lineHeight: 1.7 }}>

            {/* Section 1: Core affiliation disclaimer */}
            <h3 className="serif-i" style={{ fontSize: 24, marginBottom: 12, color: 'var(--gold)' }}>
              Not affiliated with Disney
            </h3>
            <p style={{ marginBottom: 18 }}>
              Dart and HeyDart are not affiliated with, endorsed by, or sponsored by The
              Walt Disney Company, or any of its affiliates or subsidiaries.
            </p>

            {/* Section 2: Full trademark list */}
            <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 12, color: 'var(--gold)' }}>
              Trademarks
            </h3>
            <p style={{ marginBottom: 18 }}>
              All Disney park names, attraction names, character names, and related marks
              (including but not limited to &ldquo;Walt Disney World,&rdquo; &ldquo;Magic
              Kingdom,&rdquo; &ldquo;EPCOT,&rdquo; &ldquo;Disney&apos;s Hollywood
              Studios,&rdquo; &ldquo;Disney&apos;s Animal Kingdom,&rdquo; &ldquo;Lightning
              Lane,&rdquo; &ldquo;Lightning Lane Multi Pass,&rdquo; and &ldquo;My Disney
              Experience&rdquo;) are the property of their respective owners and are used
              here only for descriptive purposes.
            </p>

            {/* Section 3: Independent service statement */}
            <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 12, color: 'var(--gold)' }}>
              Independent service
            </h3>
            <p style={{ marginBottom: 18 }}>
              Dart is a third-party planning assistant. Use of Dart is subject to The Walt
              Disney Company&apos;s terms of service for any of its products you may also
              use. Dart works alongside My Disney Experience but does not replace it.
            </p>

            {/* Section 4: Availability disclaimer */}
            <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 12, color: 'var(--gold)' }}>
              No guarantees
            </h3>
            <p>
              Dart watches Lightning Lane Multi Pass openings and books selections as quickly
              as possible within Disney&apos;s rules, but availability is outside our
              control. We do not guarantee bookings.
            </p>

          </div>
          <p style={{ marginTop: 24, fontSize: 14, color: 'var(--ink-3)' }}>
            <Link href="/" style={{ color: 'var(--gold)' }}>← Back to home</Link>
            {' · '}
            <Link href="/pricing" style={{ color: 'var(--gold)' }}>See pricing →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
