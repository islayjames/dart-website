import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing — HeyDart Disney World assistant',
  description:
    'Day Pass $15, Trip Pass $45, Annual Pass $120. Simple party pricing, no per-person fees. Real-time Disney World guidance for your whole family.',
  alternates: {
    canonical: 'https://heydart.com/pricing',
  },
  openGraph: {
    title: 'Pricing — HeyDart Disney World assistant',
    description:
      'Day Pass $15, Trip Pass $45, Annual Pass $120. Per party, not per person. Real-time Disney World guidance from rope drop to fireworks.',
    url: 'https://heydart.com/pricing',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'Pricing — HeyDart Disney World assistant',
    description:
      'Day Pass $15, Trip Pass $45, Annual Pass $120. Per party, not per person. Join the waitlist and get the launch discount.',
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
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
    {
      '@type': 'Offer',
      name: 'Day Pass — parties of 9–20',
      description: 'One park day of real-time guidance for larger groups of 9–20.',
      price: '25',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
    {
      '@type': 'Offer',
      name: 'Trip Pass — parties of 1–8',
      description: 'Up to 7 park days within any 15-day window. Real-time Lightning Lane, dining, and wait time guidance for your whole trip.',
      price: '45',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
    {
      '@type': 'Offer',
      name: 'Trip Pass — parties of 9–20',
      description: 'Up to 7 park days within any 15-day window for larger groups of 9–20.',
      price: '75',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
    {
      '@type': 'Offer',
      name: 'Annual Pass — parties of 1–8',
      description: 'Unlimited park days of real-time Disney World guidance for a full year. Best value for frequent visitors.',
      price: '120',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
  ],
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  const { source = 'pricing-direct' } = await searchParams;
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
      <PricingPageClient source={source} />
    </>
  );
}
