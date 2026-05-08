import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import FAQAccordion from '@/components/FAQAccordion';
import { FAQ_ENTRIES } from '@/lib/faq-data';

export const metadata: Metadata = {
  title: 'FAQ — HeyDart Lightning Lane booking assistant',
  description:
    'Answers about HeyDart, Lightning Lane Multi Pass, My Disney Experience, Dart pricing, the beta program, and how Dart compares to other Disney planning tools.',
  alternates: {
    canonical: 'https://heydart.com/learn',
  },
  openGraph: {
    title: 'FAQ — HeyDart Lightning Lane booking assistant',
    description:
      'Answers about HeyDart, Lightning Lane Multi Pass, My Disney Experience, Dart pricing, the beta program, and how Dart compares to other Disney planning tools.',
    url: 'https://heydart.com/learn',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'FAQ — HeyDart Lightning Lane booking assistant',
    description:
      'Answers about HeyDart, Lightning Lane Multi Pass, My Disney Experience, Dart pricing, the beta program, and how Dart compares to other Disney planning tools.',
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
            Everything we get asked.{' '}
            <span style={{ color: 'var(--gold)' }}>Answered plainly.</span>
          </>
        }
        lead="Substantive answers about Lightning Lane, My Disney Experience, Dart's pricing and beta program, and how all of it fits together. Tap a question to expand."
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
