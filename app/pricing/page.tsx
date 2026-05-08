import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing — HeyDart from $10 a day',
  description:
    'HeyDart Lightning Lane booking assistant starts at $10 per party per day. Single day, 5-day pack, and annual plans available. Sign up now for 25% off — valid through end of 2026.',
  alternates: {
    canonical: 'https://heydart.com/pricing',
  },
  openGraph: {
    title: 'Pricing — HeyDart from $10 a day',
    description:
      'HeyDart Lightning Lane booking assistant starts at $10 per party per day. Single day, 5-day pack, and annual plans available. Sign up now for 25% off.',
    url: 'https://heydart.com/pricing',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'Pricing — HeyDart from $10 a day',
    description:
      'HeyDart Lightning Lane booking assistant starts at $10 per party per day. Sign up now for 25% off — valid through end of 2026.',
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
  name: 'HeyDart — Disney World Lightning Lane booking assistant',
  url: 'https://heydart.com/pricing',
  lowPrice: '10',
  highPrice: '150',
  priceCurrency: 'USD',
  offerCount: 8,
  offers: [
    {
      '@type': 'Offer',
      name: 'Single Day — Lightning Lane (party of 1–6)',
      description: 'One park day of automatic Lightning Lane Multi Pass booking for a party of 1–6.',
      price: '10',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: 'Single Day — Lightning Lane + Dining (party of 1–6)',
      description: 'One park day of Lightning Lane booking plus dining availability monitoring for a party of 1–6.',
      price: '15',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: 'Single Day — Lightning Lane (party of 7+)',
      description: 'One park day of automatic Lightning Lane Multi Pass booking for a party of 7 or more.',
      price: '15',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: 'Single Day — Lightning Lane + Dining (party of 7+)',
      description: 'One park day of Lightning Lane booking plus dining monitoring for a party of 7 or more.',
      price: '25',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: '5-Day Pack — Lightning Lane (party of 1–6)',
      description: 'Five park days of Lightning Lane booking, redeemable within 30 days, for a party of 1–6.',
      price: '25',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: '5-Day Pack — Lightning Lane + Dining (party of 1–6)',
      description: 'Five park days of Lightning Lane plus dining monitoring, redeemable within 30 days, for a party of 1–6.',
      price: '35',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: 'Annual — Lightning Lane (party of 1–6)',
      description: 'Unlimited park days of Lightning Lane booking for the year, for parties of 1–6.',
      price: '100',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: 'Annual — Lightning Lane + Dining (party of 1–6)',
      description: 'Unlimited park days of Lightning Lane booking plus dining monitoring for the year, for parties of 1–6.',
      price: '150',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
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
