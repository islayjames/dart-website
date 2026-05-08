import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing — From $10 a day',
  description:
    "Two tiers, both visible, both your choice. Sign up now and we'll send you 25% off any tier — code valid through end of 2026.",
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  const { source = 'pricing-direct' } = await searchParams;
  return <PricingPageClient source={source} />;
}
