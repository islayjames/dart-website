import type { Metadata } from 'next';
import { Source_Serif_4, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heydart.com'),
  title: {
    template: '%s | HeyDart',
    default: 'HeyDart — Disney World Lightning Lane booking assistant',
  },
  description:
    'HeyDart is a real-time Disney World assistant. Dart connects to live Lightning Lane, dining, and wait time data to help your family decide what to do next. Launching August 2026.',
  keywords: [
    'Disney World',
    'Lightning Lane',
    'Lightning Lane Multi Pass',
    'My Disney Experience',
    'Disney planning',
    'Disney trip planning',
    'Walt Disney World',
    'HeyDart',
    'Dart',
    'Disney assistant',
  ],
  openGraph: {
    type: 'website',
    siteName: 'HeyDart',
    title: 'HeyDart — Disney World Lightning Lane booking assistant',
    description:
      'HeyDart watches Lightning Lane Multi Pass and books selections as they drop. A personal concierge for Walt Disney World guests. Launching August 2026.',
    url: 'https://heydart.com',
    images: [
      {
        url: '/images/dart-logo-mark.png',
        alt: 'HeyDart logo mark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyDart — Disney World Lightning Lane booking assistant',
    description:
      'HeyDart watches Lightning Lane Multi Pass and books selections as they drop. Launching August 2026.',
    images: ['/images/dart-logo-mark.png'],
  },
  alternates: {
    canonical: 'https://heydart.com',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HeyDart',
  url: 'https://heydart.com',
  logo: 'https://heydart.com/images/dart-logo-mark.png',
  description:
    'HeyDart is a real-time planning and in-park assistant for Walt Disney World guests. Connects to live Lightning Lane, dining, and wait time data to help families decide what to do next.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@heydart.com',
    contactType: 'customer support',
  },
  foundingDate: '2026',
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'HeyDart',
  url: 'https://heydart.com',
  description:
    'HeyDart is a real-time Disney World assistant. Connects to live Lightning Lane availability, dining alerts, standby waits, and mobile order timing to help families plan and navigate their park day.',
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HeyDart',
  url: 'https://heydart.com',
  applicationCategory: 'TravelApplication',
  operatingSystem: 'Web',
  description:
    'HeyDart is a real-time Disney World assistant that connects to live Lightning Lane availability, standby waits, dining alerts, and mobile order timing to help families decide what to do next. Launching August 2026. Not affiliated with The Walt Disney Company.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Day Pass — parties of 1–8',
      description: 'One park day of real-time Lightning Lane, dining, and wait time guidance for parties of 1–8.',
      price: '15',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
    {
      '@type': 'Offer',
      name: 'Day Pass — parties of 9–20',
      description: 'One park day of real-time Lightning Lane, dining, and wait time guidance for parties of 9–20.',
      price: '25',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
    {
      '@type': 'Offer',
      name: 'Trip Pass — parties of 1–8',
      description: 'Up to 7 park days within any 15-day window. Real-time guidance throughout your whole trip.',
      price: '45',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
    {
      '@type': 'Offer',
      name: 'Trip Pass — parties of 9–20',
      description: 'Up to 7 park days within any 15-day window for larger groups.',
      price: '75',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
    {
      '@type': 'Offer',
      name: 'Annual Pass — parties of 1–8',
      description: 'Unlimited park days for a full year of Disney World trips.',
      price: '120',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-08-01',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif4.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
      style={
        {
          '--serif': sourceSerif4.style.fontFamily,
          '--sans': interTight.style.fontFamily,
          '--mono': jetbrainsMono.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
