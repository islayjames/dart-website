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
    'HeyDart watches Lightning Lane Multi Pass and books selections as they drop. A personal concierge for Walt Disney World guests. Launching July 2026.',
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
      'HeyDart watches Lightning Lane Multi Pass and books selections as they drop. A personal concierge for Walt Disney World guests. Launching July 2026.',
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
      'HeyDart watches Lightning Lane Multi Pass and books selections as they drop. Launching July 2026.',
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
    'HeyDart is a planning and in-park assistant for Walt Disney World guests. Watches Lightning Lane Multi Pass openings and books selections as they drop.',
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
    'HeyDart watches Lightning Lane Multi Pass and books selections as they drop. A personal concierge for Walt Disney World guests.',
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'HeyDart',
  url: 'https://heydart.com',
  applicationCategory: 'TravelApplication',
  operatingSystem: 'Web',
  description:
    'HeyDart is a Disney World Lightning Lane booking assistant that watches Lightning Lane Multi Pass availability and books selections automatically throughout the day. Launching July 2026. Not affiliated with The Walt Disney Company.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Single Day — Lightning Lane (1–6 people)',
      price: '10',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: 'Single Day — Lightning Lane + Dining (1–6 people)',
      price: '15',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: '5-Day Pack — Lightning Lane (1–6 people)',
      price: '25',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
    },
    {
      '@type': 'Offer',
      name: 'Annual — Lightning Lane (1–6 people)',
      price: '100',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-07-01',
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
