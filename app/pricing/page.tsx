import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing — HeyDart Disney World assistant',
  description:
    'Pre-trip dining alerts are free. Day Pass $15, Trip Pass $45, and Annual Pass $120 add Dart’s live Disney World trip support.',
  alternates: {
    canonical: 'https://heydart.com/pricing',
  },
  openGraph: {
    title: 'Pricing — HeyDart Disney World assistant',
    description:
      'Start with free pre-trip dining alerts. Purchase a pass when you want Dart’s live support for your Disney World trip.',
    url: 'https://heydart.com/pricing',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'Pricing — HeyDart Disney World assistant',
    description:
      'Pre-trip dining alerts are free. Dart passes add live support for your park day, trip, or year.',
    images: ['/images/dart-logo-mark.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heydart.com' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://heydart.com/pricing' },
  ],
};

const SIGNUP_INTERESTS = new Set([
  'dining-alerts',
  'beta',
  '1day-8',
  'trip-8',
  'annual-8',
  'agent',
  'creator',
]);

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateOffer',
  name: 'HeyDart — Real-time Disney World assistant',
  url: 'https://heydart.com/pricing',
  lowPrice: '15',
  highPrice: '120',
  priceCurrency: 'USD',
  offerCount: 5,
  offers: [
    {
      '@type': 'Offer',
      name: 'Day Pass — parties of 1–8',
      description: 'One park day of real-time Lightning Lane timing, dining alerts, standby waits, and in-park guidance. Per party, not per person.',
      price: '15',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Day Pass — parties of 9–20',
      description: 'One park day of real-time guidance for larger groups of 9–20.',
      price: '25',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Trip Pass — parties of 1–8',
      description: 'Up to 7 park days within any 15-day window. Real-time Lightning Lane, dining, and wait time guidance for your whole trip.',
      price: '45',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Trip Pass — parties of 9–20',
      description: 'Up to 7 park days within any 15-day window for larger groups of 9–20.',
      price: '75',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Annual Pass — parties of 1–8',
      description: 'Unlimited park days of real-time Disney World guidance for a full year. Best value for frequent visitors.',
      price: '120',
      priceCurrency: 'USD',
    },
  ],
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string; interest?: string }>;
}) {
  const { source = 'pricing-direct', interest = '' } = await searchParams;
  const initialInterest = SIGNUP_INTERESTS.has(interest) ? interest : '';
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <PricingPageClient source={source} initialInterest={initialInterest} />
    </>
  );
}
