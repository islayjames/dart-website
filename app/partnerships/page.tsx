import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Partnerships — HeyDart',
  description:
    'Travel agents and creators: help your clients and audience have a calmer Disney day. Founding Agent program now open.',
  alternates: {
    canonical: 'https://heydart.com/partnerships',
  },
  openGraph: {
    title: 'Partnerships — HeyDart',
    description:
      'Travel agents and creators: help your clients and audience have a calmer Disney day. Founding Agent program now open.',
    url: 'https://heydart.com/partnerships',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'Partnerships — HeyDart',
    description:
      'Travel agents and creators: help your clients and audience have a calmer Disney day. Founding Agent program now open.',
    images: ['/images/dart-logo-mark.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://heydart.com' },
    { '@type': 'ListItem', position: 2, name: 'Partnerships', item: 'https://heydart.com/partnerships' },
  ],
};

export default function PartnershipsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        eyebrow="Partnerships"
        title={
          <>
            Help your clients and audience have a{' '}
            <span style={{ color: 'var(--brick)' }}>calmer Disney day.</span>
          </>
        }
        lead="We're a small business and a friend of the Disney planning community. We'd love to work with the people who already help families have great trips — travel agents and creators — to bring Dart into the moment when you can't be beside them: the actual park day."
      />

      {/* Travel agents */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            {/* Left: copy */}
            <div>
              <div className="eyebrow" style={{ color: 'var(--teal)' }}>Travel agents</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                You plan the dream trip. Dart&apos;s there for the rest.
              </h2>
              <p className="lead" style={{ marginBottom: 22 }}>
                You help your clients plan their dream trip. Dart takes over where you can&apos;t be
                right beside them — when they&apos;re in the park, navigating the system of
                Lightning Lanes, standby times, mobile order, and just getting around.
              </p>
              <a
                className="btn btn-primary"
                href="mailto:partnerships@heydart.com?subject=Travel%20agent%20partnership"
              >
                Email partnerships@heydart.com →
              </a>
            </div>

            {/* Right: "What we're exploring" card */}
            <div className="card" style={{ padding: 28 }}>
              <h3 className="serif-i" style={{ fontSize: 22, color: 'var(--twilight)', marginBottom: 12 }}>
                What we&apos;re exploring
              </h3>
              <ul className="check-list">
                <li>A simple way to gift Dart to a client trip</li>
                <li>A dedicated agent contact for issues</li>
                <li>Early access for evaluation</li>
                <li>Founding Agent input on the agent experience</li>
              </ul>
              <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 18, fontStyle: 'italic' }}>
                We&apos;ll be candid about what&apos;s ready and what isn&apos;t. No rate cards or
                partner codes yet — we want to design those with the agents who use them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creators & community */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            {/* Left: "What we're exploring" card */}
            <div className="card" style={{ padding: 28 }}>
              <h3 className="serif-i" style={{ fontSize: 22, color: 'var(--twilight)', marginBottom: 12 }}>
                What we&apos;re exploring
              </h3>
              <ul className="check-list">
                <li>Featuring your content in moments where it actually helps</li>
                <li>Reaching audiences who&apos;d genuinely benefit from Dart</li>
                <li>Growing together as Dart finds its footing</li>
                <li>Honest creator partnerships, no canned scripts</li>
                <li>Licensing agreements to help each other while improving guest experience</li>
              </ul>
              <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 18, fontStyle: 'italic' }}>
                We&apos;re not running an affiliate program yet. We&apos;d rather start small with
                people whose audiences would genuinely benefit.
              </p>
            </div>

            {/* Right: copy */}
            <div>
              <div className="eyebrow" style={{ color: 'var(--magenta)' }}>Creators &amp; community</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                For voices the community trusts.
              </h2>
              <p className="lead" style={{ marginBottom: 14 }}>
                We&apos;d love to work with creators, bloggers, and community voices who help
                families have better Disney days. Three ways we&apos;d like to do that, all at once:
                feature your content where it&apos;ll actually help, get Dart in front of the
                audiences who&apos;d benefit most, and figure out what &ldquo;growing together&rdquo;
                looks like as we go.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.6, marginBottom: 22 }}>
                We only use publicly available material, and we license content fairly. If something
                you&apos;ve written or filmed could help one of our users in a moment, we want it
                surfaced with credit and compensation — not scraped.
              </p>
              <a
                className="btn btn-primary"
                href="mailto:partnerships@heydart.com?subject=Creator%20partnership"
              >
                Email partnerships@heydart.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Agent program */}
      <section className="section section-deep">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Founding Agent program · limited</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 20 }}>
            Help shape Dart before launch.
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px', maxWidth: 640 }}>
            We&apos;re looking for a small group of founding travel agents and Disney planning
            partners to help us design the agent and partner experience from the inside — what works
            for your clients, what should stay out of the way, and what we should never build.
          </p>
          <a
            className="btn btn-primary btn-large"
            href="mailto:partnerships@heydart.com?subject=Founding%20Agent%20interest"
          >
            Join the Founding Agent list →
          </a>
          <p style={{ marginTop: 22, fontSize: 13, color: 'var(--cream-2)' }}>
            Questions? Email{' '}
            <a style={{ color: 'var(--gold)' }} href="mailto:hello@heydart.com">
              hello@heydart.com
            </a>
          </p>
        </div>
      </section>

      {/* Honest-framing footer card */}
      <section className="section">
        <div className="container-narrow">
          {/* Teal-tinted card — rgba(44,138,130,…) matches var(--teal) at low opacity */}
          <div
            style={{
              padding: 26,
              borderRadius: 14,
              background: 'rgba(44,138,130,0.08)',
              border: '1px solid rgba(44,138,130,0.24)',
            }}
          >
            <h3
              className="serif-i"
              style={{ fontSize: 20, marginBottom: 12, color: 'var(--twilight)' }}
            >
              A note on how we work.
            </h3>
            <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.65 }}>
              We respond to every partnership email within a week. We&apos;ll be direct about what
              we can offer right now and what&apos;s still being figured out. No auto-responders, no
              pitch decks — just a conversation about whether working together makes sense.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
