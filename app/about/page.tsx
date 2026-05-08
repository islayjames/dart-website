import type { Metadata } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'About HeyDart — Built by Disney fans',
  description:
    'HeyDart is built by a husband-and-wife team — a software founder who worked at Disneyland through college and a bespoke travel agent who homeschools their kids. DVC members. Annual passholders. Disney family.',
  alternates: {
    canonical: 'https://heydart.com/about',
  },
  openGraph: {
    title: 'About HeyDart — Built by Disney fans',
    description:
      'HeyDart is built by a husband-and-wife team — a software founder who worked at Disneyland through college and a bespoke travel agent who homeschools their kids. DVC members. Annual passholders.',
    url: 'https://heydart.com/about',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'About HeyDart — Built by Disney fans',
    description:
      'HeyDart is built by a husband-and-wife team — a software founder who worked at Disneyland through college and a bespoke travel agent who homeschools their kids.',
    images: ['/images/dart-logo-mark.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heydart.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://heydart.com/about' },
  ],
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HeyDart',
  url: 'https://heydart.com',
  logo: 'https://heydart.com/images/dart-logo-mark.png',
  foundingDate: '2026',
  description:
    'HeyDart is a planning and in-park assistant for Walt Disney World guests, built by a husband-and-wife team of Disney annual passholders and DVC members.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@heydart.com',
    contactType: 'customer support',
  },
};

const PRINCIPLES = [
  [
    'Disney trips should be easier — especially for first-timers',
    'The current system rewards expertise. People with planning fluency get the most out of their visit. We want to flatten that gap so a first-time family can have nearly as smooth a day as the annual passholder beside them.',
  ],
  [
    "We're a small business. Please be patient as we grow.",
    "We're building this with care. We'll occasionally ship slow. We'll occasionally get something wrong and fix it the next day. We promise to be transparent about both.",
  ],
  [
    'We use only public or licensed content',
    "No scraping creators' work. No content theft. We're committed to working with the community of writers, YouTubers, and content makers who built the planning culture, not around them.",
  ],
  [
    'Fair pricing, fair use of system resources',
    "We're committed to staying affordable for families and to not monopolizing public APIs or hammering Disney's systems. The category has good norms here. We'll honor them.",
  ],
  [
    'Not affiliated with Disney',
    "We are not affiliated with, endorsed by, or sponsored by The Walt Disney Company. The full disclaimer is below — read it once, take it seriously, and the rest is just us trying to make a tool we'd use.",
  ],
] as const;

export default function AboutPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <PageHeader
        eyebrow="Why we're building this"
        title={
          <>
            We loved the existing tools.{' '}
            <span style={{ color: 'var(--gold)' }}>We built the one we wished existed.</span>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: 56 }}>
            <div>
              <p className="lead" style={{ fontSize: 19, marginBottom: 22 }}>
                He worked at Disneyland through college. He says it&apos;s the most fun he&apos;s
                ever had — running rides at night, watching the parade roll past, eating churros
                for dinner. He left for software, founded and exited two companies, and is now
                Chief AI Officer at a billion-dollar company.
              </p>
              <p className="lead" style={{ fontSize: 19, marginBottom: 22 }}>
                She homeschools their kids and runs a bespoke travel agency, planning
                custom-tailored trips for families who want more than a packaged vacation.
                She&apos;s used every Disney planning tool there is. She has opinions.
              </p>
              <p className="lead" style={{ fontSize: 19, marginBottom: 22 }}>
                We&apos;re DVC members, annual passholders, a Disney family. We&apos;ve spent a
                lot of time at the parks — with strollers, with grandparents, in the rain, with
                hungry kids at 2 PM. We loved the existing tools. We learned from them. And we
                built the one we wished existed.
              </p>
            </div>
            <div>
              {/* position:relative is required for Next.js fill images */}
              <div
                className="art-frame"
                style={{ position: 'relative', aspectRatio: '3 / 4' }}
              >
                <NextImage
                  src="/images/about-portrait.png"
                  alt="Founders portrait — husband and wife illustrated in watercolor"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="section section-cream">
        <div className="container">
          <div className="eyebrow">What we believe</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 36, maxWidth: 720 }}>
            Five small principles we keep coming back to.
          </h2>
          <div className="grid-2" style={{ gap: 24 }}>
            {PRINCIPLES.map(([title, body]) => (
              <div key={title} className="card card-cream" style={{ padding: 26 }}>
                <h3
                  className="serif-i"
                  style={{ fontSize: 22, marginBottom: 10, color: 'var(--ink)' }}
                >
                  {title}
                </h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section section-deep">
        <div className="container-narrow">
          <div className="eyebrow">The full disclaimer</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 22 }}>
            Not affiliated with The Walt Disney Company.
          </h2>
          <div className="card" style={{ padding: 32 }}>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--cream-2)', marginBottom: 14 }}>
              Dart and HeyDart are not affiliated with, endorsed by, or sponsored by The Walt
              Disney Company, or any of its affiliates or subsidiaries.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--cream-2)', marginBottom: 14 }}>
              All Disney park names, attraction names, character names, and related marks
              (including but not limited to &ldquo;Walt Disney World,&rdquo;
              &ldquo;Magic Kingdom,&rdquo; &ldquo;EPCOT,&rdquo; &ldquo;Disney&apos;s Hollywood
              Studios,&rdquo; &ldquo;Disney&apos;s Animal Kingdom,&rdquo; &ldquo;Lightning
              Lane,&rdquo; &ldquo;Lightning Lane Multi Pass,&rdquo; and &ldquo;My Disney
              Experience&rdquo;) are the property of their respective owners and are used here
              only for descriptive purposes.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--cream-2)' }}>
              Dart is a third-party planning assistant. Use of Dart is subject to The Walt Disney
              Company&apos;s terms of service for any of its products you may also use. Dart works
              alongside My Disney Experience but does not replace it.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="h-section" style={{ marginBottom: 18 }}>Say hello.</h2>
          <p className="lead" style={{ margin: '0 auto 22px', maxWidth: 480 }}>
            We&apos;re a small team. We read every email.
          </p>
          <a className="btn btn-primary btn-large" href="mailto:hello@heydart.com">
            hello@heydart.com
          </a>
          <p style={{ marginTop: 22, fontSize: 14, color: 'var(--ink-3)' }}>
            Curious about pricing?{' '}
            <Link href="/pricing" style={{ color: 'var(--gold)' }}>
              See all tiers →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
