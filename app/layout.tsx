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
    default: 'HeyDart — Your Disney World planning assistant',
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
    title: 'HeyDart — Your Disney World planning assistant',
    description:
      'HeyDart watches Lightning Lane Multi Pass and books selections as they drop. A personal concierge for Walt Disney World guests. Launching July 2026.',
    url: 'https://heydart.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeyDart — Your Disney World planning assistant',
    description:
      'HeyDart watches Lightning Lane Multi Pass and books selections as they drop. Launching July 2026.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HeyDart',
  url: 'https://heydart.com',
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
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
