import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy | HeyDart',
  description:
    'HeyDart collects your email and trip details to send product updates. We do not sell or share your data. Unsubscribe anytime.',
  alternates: {
    canonical: 'https://heydart.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | HeyDart',
    description:
      'HeyDart collects your email and trip details to send product updates. We do not sell or share your data. Unsubscribe anytime.',
    url: 'https://heydart.com/privacy',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heydart.com' },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://heydart.com/privacy' },
  ],
};

export default function PrivacyPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />

      <section className="section">
        <div className="container-narrow">
          <div className="card" style={{ padding: 32, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            <p style={{ fontStyle: 'italic', color: 'var(--gold)', marginBottom: 22 }}>
              Scaffolded for design — counsel fills final language before launch.
            </p>

            <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 8, color: 'var(--twilight)' }}>
              What we collect
            </h3>
            <p style={{ marginBottom: 18 }}>
              Email address, party details, trip dates, and any information you provide through
              the signup form. UTM parameters and the source of your signup CTA. Standard
              analytics — page views and aggregate usage.
            </p>

            <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 8, color: 'var(--twilight)' }}>
              What we do with it
            </h3>
            <p style={{ marginBottom: 18 }}>
              We email you about Dart. That&apos;s it. We don&apos;t sell or rent your data.
              We don&apos;t share it with third parties for marketing purposes.
            </p>

            <h3 className="serif-i" style={{ fontSize: 22, marginBottom: 8, color: 'var(--twilight)' }}>
              How to remove yourself
            </h3>
            <p>
              Every email has an unsubscribe link. Email{' '}
              <Link href="mailto:hello@heydart.com" style={{ color: 'var(--brick)' }}>
                hello@heydart.com
              </Link>{' '}
              to delete your data entirely.
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
