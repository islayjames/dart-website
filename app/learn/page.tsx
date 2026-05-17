import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import FAQAccordion from '@/components/FAQAccordion';
import { FAQ_ENTRIES } from '@/lib/faq-data';

export const metadata: Metadata = {
  title: 'Dart FAQ — Disney World assistant questions answered',
  description:
    'Everything you need to know about Dart — live park data, Lightning Lane, dining alerts, pricing, beta program, and how it all works at Walt Disney World.',
  alternates: {
    canonical: 'https://heydart.com/learn',
  },
  openGraph: {
    title: 'Dart FAQ — Disney World assistant questions answered',
    description:
      'Everything you need to know about Dart — live park data, Lightning Lane, dining alerts, pricing, beta program, and how it all works at Walt Disney World.',
    url: 'https://heydart.com/learn',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'Dart FAQ — Disney World assistant questions answered',
    description:
      'Everything you need to know about Dart — live park data, Lightning Lane, dining alerts, pricing, beta program, and how it all works at Walt Disney World.',
    images: ['/images/dart-logo-mark.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heydart.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn / FAQ', item: 'https://heydart.com/learn' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ENTRIES.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function LearnPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* JSON-LD FAQPage schema for rich results — covers all FAQ_ENTRIES */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeader
        eyebrow="Learn / FAQ"
        title={
          <>
            Dart FAQ.{' '}
            <span style={{ color: 'var(--brick)' }}>Everything you need to know.</span>
          </>
        }
        lead="Live park data, Lightning Lane, dining, pricing, beta — all the questions, answered honestly."
      />

      <section className="section">
        <div className="container-narrow">
          <FAQAccordion />
        </div>
      </section>

      <section className="section section-deep">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="h-section" style={{ marginBottom: 22 }}>
            Got a question we didn&apos;t answer?
          </h2>
          <p className="lead" style={{ margin: '0 auto 22px', maxWidth: 480 }}>
            We read every email.
          </p>
          <a className="btn btn-primary btn-large" href="mailto:hello@heydart.com">
            hello@heydart.com
          </a>
        </div>
      </section>
    </div>
  );
}
