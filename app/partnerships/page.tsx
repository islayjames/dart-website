import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Partnerships — HeyDart',
  description:
    'HeyDart partners with Disney planning content creators and travel agents. Affiliate revenue share, licensing fees, white-labeled gift codes, and early access for launch in July 2026.',
  alternates: {
    canonical: 'https://heydart.com/partnerships',
  },
  openGraph: {
    title: 'Partnerships — HeyDart',
    description:
      'HeyDart partners with Disney planning content creators and travel agents. Affiliate revenue share, licensing fees, white-labeled gift codes, and early access for launch in July 2026.',
    url: 'https://heydart.com/partnerships',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'Partnerships — HeyDart',
    description:
      'HeyDart partners with Disney planning content creators and travel agents. Affiliate revenue share, licensing fees, white-labeled gift codes, and early access for launch in July 2026.',
    images: ['/images/dart-logo-mark.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heydart.com' },
    { '@type': 'ListItem', position: 2, name: 'Partnerships', item: 'https://heydart.com/partnerships' },
  ],
};

export default function PartnershipsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader
        eyebrow="Partnerships"
        title={
          <>
            Friends of <span style={{ color: 'var(--gold)' }}>the community.</span>
          </>
        }
        lead="We're a small business and a friend of the Disney planning community. We'd love to work with people who share our audience — content creators and travel agents — to help more families have a better park day."
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 28 }}>
            <div className="card" style={{ padding: 32 }}>
              <div className="eyebrow" style={{ color: 'var(--magenta)' }}>Content creators</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14, fontSize: 32 }}>
                Get Dart in front of audiences who&apos;d benefit.
              </h2>
              <p style={{ marginBottom: 16, color: 'var(--ink-2)' }}>
                We license content fairly and only use publicly available material. We want to work
                with creators, not around them. If your audience plans Disney trips, let&apos;s talk.
              </p>
              <ul style={{ paddingLeft: 18, color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7, marginBottom: 22 }}>
                <li>Affiliate revenue share on any tier</li>
                <li>Licensing fees for substantive use of your work</li>
                <li>Co-marketing for launch in July 2026</li>
                <li>Early access for review</li>
              </ul>
              <a
                className="btn btn-primary"
                href="mailto:partnerships@heydart.com?subject=Creator%20partnership"
              >
                Email partnerships@heydart.com →
              </a>
            </div>

            <div className="card" style={{ padding: 32 }}>
              <div className="eyebrow" style={{ color: 'var(--teal)' }}>Travel agents</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14, fontSize: 32 }}>
                Help your clients have a better Disney experience.
              </h2>
              <p style={{ marginBottom: 16, color: 'var(--ink-2)' }}>
                We come from this world — one of our founders runs a custom travel agency. We know
                the difference a great agent makes for a first-time family. Let&apos;s give you
                another tool in your kit.
              </p>
              <ul style={{ paddingLeft: 18, color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7, marginBottom: 22 }}>
                <li>Agent rate cards for client purchases</li>
                <li>White-labeled gift codes for client onboarding</li>
                <li>Dedicated agent contact for issues</li>
                <li>Early access for evaluation</li>
              </ul>
              <a
                className="btn btn-primary"
                href="mailto:partnerships@heydart.com?subject=Travel%20agent%20partnership"
              >
                Email partnerships@heydart.com →
              </a>
            </div>
          </div>

          {/* Gold-tinted notice box — rgba matches design source's var(--gold) at low opacity */}
          <div
            style={{
              marginTop: 36,
              padding: 24,
              borderRadius: 14,
              background: 'rgba(244,197,66,0.06)',
              border: '1px solid rgba(244,197,66,0.2)',
            }}
          >
            <p style={{ fontSize: 14.5, color: 'var(--ink-2)' }}>
              <strong style={{ color: 'var(--gold)' }}>Honest framing:</strong> We&apos;re a small
              organization. Please be patient as we ramp up — we want to do these partnerships well
              rather than fast. We&apos;ll respond within a week and we&apos;ll be candid about
              what we can and can&apos;t do.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className="lead" style={{ margin: '0 auto 18px', maxWidth: 520 }}>
            Want to see what your clients will experience?
          </p>
          <Link className="btn btn-primary" href="/pricing">
            See pricing and tiers →
          </Link>
        </div>
      </section>
    </div>
  );
}
