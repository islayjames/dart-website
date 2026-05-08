import type { Metadata } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import HeroEyebrow from '@/components/HeroEyebrow';
import { IconHunt, IconDart, IconMagic, IconBadge } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'HeyDart — Disney World Lightning Lane booking assistant',
  description:
    'HeyDart watches Lightning Lane Multi Pass and books selections as they drop — so you stay present with your family. Walt Disney World planning assistant launching July 2026.',
  alternates: { canonical: 'https://heydart.com' },
  openGraph: {
    title: 'HeyDart — Disney World Lightning Lane booking assistant',
    description:
      'HeyDart watches Lightning Lane Multi Pass and books selections as they drop — so you stay present with your family. Launching July 2026.',
    url: 'https://heydart.com',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'HeyDart — Disney World Lightning Lane booking assistant',
    description:
      'HeyDart watches Lightning Lane Multi Pass and books selections as they drop — so you stay present with your family. Launching July 2026.',
    images: ['/images/dart-logo-mark.png'],
  },
};

const MOVES = [
  {
    icon: IconHunt,
    tint: 'gold' as const,
    title: 'Checks Lightning Lane every few minutes',
    body: 'Dart watches Multi Pass availability for your party throughout the day and secures selections as they become available.',
    img: null,
  },
  {
    icon: IconDart,
    tint: 'rust' as const,
    title: 'Plans around your day',
    body: "Dining you've booked, parades, naptime, height limits — Dart shapes the schedule around what you've already planned.",
    img: { src: '/images/home-spot-1.png', alt: 'Dart peeking around a queue gate' },
  },
  {
    icon: IconMagic,
    tint: 'brick' as const,
    title: 'Adjusts when the day shifts',
    body: 'Running late, ride goes down, kid needs a break — Dart suggests the next move and quietly reworks the rest.',
    img: null,
  },
  {
    icon: IconHunt,
    tint: 'magenta' as const,
    title: 'Watches dining availability',
    body: 'Hard-to-find reservations as they become available. Optional add-on, Fall 2026.',
    tag: 'Fall 2026',
    img: { src: '/images/home-spot-2.png', alt: 'A vintage park itinerary scroll' },
  },
];

const SPOT_IMAGES = [
  { src: '/images/home-spot-1.png', alt: 'Dart peeking around a queue gate' },
  { src: '/images/home-spot-2.png', alt: 'A vintage park itinerary scroll' },
  { src: '/images/home-spot-3.png', alt: 'Fireworks over a ferris wheel' },
];

function IconCalendar({ color = 'currentColor', size = 28 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2.5" />
      <path d="M3 9h18M8 2v4M16 2v4" />
      <path d="M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2" strokeWidth="2" />
    </svg>
  );
}

function IconLightning({ color = 'currentColor', size = 22 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L4.5 13.5H11L9 22L20 10H13.5L13 2Z"
        fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.7"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDining({ color = 'currentColor', size = 22 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 2v7c0 2.2 1.8 4 4 4v9" />
      <path d="M7 2v7" />
      <path d="M5 2v4" />
      <path d="M17 2a5 5 0 0 1 0 10v10" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero starlit">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text-col">
              <HeroEyebrow>Lightning Lane · July 2026 · Pre-launch</HeroEyebrow>
              <h1>
                Be a guest at<br />
                <span className="alt">your own vacation.</span>
              </h1>
              <p className="lead">
                Your personal concierge, darting through the parks — scoping lines, holding tables,
                threading the day a step ahead. Phone in pocket. Eyes on the kids.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-primary btn-large" href="/pricing?source=home-hero">
                  Get 25% off — join the list
                </Link>
                <Link className="btn btn-secondary btn-large" href="/how-it-works">
                  How Dart works →
                </Link>
              </div>
              <p style={{ marginTop: 14, fontSize: 13.5, color: 'var(--cream-2)', opacity: 0.78, fontStyle: 'italic' }}>
                Lightning Lane today, Dining coming this fall.
              </p>
              <div className="hero-meta">
                <div className="hero-meta-item"><strong>Lightning Lane</strong> July 2026</div>
                <div className="hero-meta-item"><strong>Dining add-on</strong> Fall 2026</div>
                <div className="hero-meta-item"><strong>From</strong> $10 a day</div>
              </div>
            </div>

            <div className="hero-image-col">
              <div className="art-frame hero-art" style={{ position: 'relative' }}>
                <NextImage
                  src="/images/home-hero.png"
                  alt="Dart the fox gazing up at a castle at dusk"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                  sizes="(max-width: 880px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Dart does */}
      <section className="section section-cream">
        <div className="container">
          <div className="eyebrow">What Dart does</div>
          <h2 className="h-section" style={{ marginTop: 8, marginBottom: 36, maxWidth: 720 }}>
            The moves Dart makes while you&apos;re on the ride.
          </h2>

          {/* Desktop: 4-card grid then 3-image row */}
          <div className="moves-desktop">
            <div className="grid-4">
              {MOVES.map((c) => (
                <div key={c.title} className="card card-cream move-card">
                  <IconBadge icon={c.icon} tint={c.tint} size={44} />
                  <h3 className="h-card">
                    {c.title}
                    {c.tag && (
                      <span className="tag tag-magenta" style={{ marginLeft: 10, verticalAlign: 'middle' }}>
                        {c.tag}
                      </span>
                    )}
                  </h3>
                  <p style={{ color: 'var(--ink-2)', fontSize: 14.5, marginTop: -4 }}>{c.body}</p>
                </div>
              ))}
            </div>
            <div className="grid-3" style={{ marginTop: 40 }}>
              {SPOT_IMAGES.map((img) => (
                <div key={img.src} className="art-frame" style={{ aspectRatio: '1 / 1', position: 'relative' }}>
                  <NextImage src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }}
                    sizes="(max-width: 880px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: interleaved cards + images */}
          <div className="moves-mobile">
            {[
              { type: 'card', data: MOVES[0] },
              { type: 'img',  data: SPOT_IMAGES[0] },
              { type: 'card', data: MOVES[1] },
              { type: 'img',  data: SPOT_IMAGES[1] },
              { type: 'card', data: MOVES[2] },
              { type: 'img',  data: SPOT_IMAGES[2] },
              { type: 'card', data: MOVES[3] },
            ].map((item, i) =>
              item.type === 'card' ? (() => {
                const c = item.data as typeof MOVES[0];
                return (
                  <div key={i} className="card card-cream move-card" style={{ marginBottom: 16 }}>
                    <IconBadge icon={c.icon} tint={c.tint} size={44} />
                    <h3 className="h-card">
                      {c.title}
                      {c.tag && (
                        <span className="tag tag-magenta" style={{ marginLeft: 10, verticalAlign: 'middle' }}>
                          {c.tag}
                        </span>
                      )}
                    </h3>
                    <p style={{ color: 'var(--ink-2)', fontSize: 14.5, marginTop: -4 }}>{c.body}</p>
                  </div>
                );
              })() : (() => {
                const img = item.data as typeof SPOT_IMAGES[0];
                return (
                  <div key={i} className="art-frame" style={{ aspectRatio: '4 / 3', position: 'relative', marginBottom: 16 }}>
                    <NextImage src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }}
                      sizes="100vw" />
                  </div>
                );
              })()
            )}
          </div>
        </div>
      </section>

      {/* Category framing */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Where Dart fits</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 22 }}>
            Another option, from a different angle.
          </h2>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 640, fontSize: 18 }}>
            The Disney planning tool community is small and friendly, and we&apos;ve used most of them.
            Most Lightning Lane tools just search. Most dining tools only alert. Dart pulls Lightning
            Lane, dining, and your fixed plans into one optimized day — and you talk to it like
            you&apos;d text a friend who knows the parks.
          </p>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section section-deep">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <div>
              <div className="eyebrow">Pricing</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Priced for everyone.{' '}
                <span style={{ color: 'var(--gold)' }}>From $10 a day.</span>
              </h2>
              <p className="lead" style={{ marginBottom: 22 }}>
                Pick Lightning Lane only, or add Dining when it ships. Both tiers, both party sizes,
                all three durations — listed plainly.
              </p>
              <div style={{ padding: 18, borderRadius: 14, background: 'rgba(200,138,28,0.10)', border: '1px solid rgba(200,138,28,0.32)', marginBottom: 22 }}>
                <div className="serif-i" style={{ fontSize: 22, color: 'var(--gold)', marginBottom: 6 }}>
                  Sign up now and get 25% off
                </div>
                <p style={{ fontSize: 14.5, color: 'var(--cream-2)', margin: 0 }}>
                  Code valid for any tier through end of 2026. Lock in your discount; pick your tier when you&apos;re ready.
                </p>
              </div>
              <Link className="btn btn-primary" href="/pricing?source=home-pricing">
                See full pricing →
              </Link>
            </div>

            <div className="tier-stack">
              <div className="tier-row featured">
                <IconBadge icon={IconHunt} tint="cream" size={40} />
                <div>
                  <div className="tier-label">Single day · Lightning Lane</div>
                  <div className="tier-sub">Try Dart for one park day</div>
                </div>
                <div>
                  <div className="tier-price">$10</div>
                  <span className="tier-price-sub">party of 1–6</span>
                </div>
              </div>
              <div className="tier-row">
                <IconBadge icon={IconDart} tint="cream" size={40} />
                <div>
                  <div className="tier-label">5-day pack · Lightning Lane</div>
                  <div className="tier-sub">Use within 30 days</div>
                </div>
                <div>
                  <div className="tier-price">$25</div>
                  <span className="tier-price-sub">party of 1–6</span>
                </div>
              </div>
              <div className="tier-row">
                <IconBadge icon={IconMagic} tint="cream" size={40} />
                <div>
                  <div className="tier-label">Annual · Lightning Lane</div>
                  <div className="tier-sub">Best for frequent visitors</div>
                </div>
                <div>
                  <div className="tier-price">$100</div>
                  <span className="tier-price-sub">party of 1–6</span>
                </div>
              </div>
              <p className="muted" style={{ fontSize: 12.5, marginTop: 4, textAlign: 'right' }}>
                + Dining add-on from $15 single-day · 7+ party tier available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section section-deep">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center' }}>Launch dates</div>
          <h2 className="h-section" style={{ textAlign: 'center', marginTop: 14, marginBottom: 40 }}>
            When you can use Dart.
          </h2>
          <div className="grid-2" style={{ gap: 24 }}>

            {/* July 2026 — Lightning Lane */}
            <div className="card launch-card" style={{ padding: 32, position: 'relative', overflow: 'hidden' }}>
              {/* Fox illustration — bottom-right corner accent */}
              <div style={{ position: 'absolute', bottom: -4, right: 0, width: 110, height: 110, opacity: 0.22, pointerEvents: 'none' }}>
                <NextImage src="/images/dart-running.png" alt="" fill style={{ objectFit: 'contain', objectPosition: 'bottom right' }} sizes="110px" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <IconCalendar color="var(--gold)" size={26} />
                <span className="tag tag-gold">Beta underway</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <IconLightning color="var(--gold)" size={20} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  Lightning Lane
                </span>
              </div>

              <div className="serif-i" style={{ fontSize: 52, color: 'var(--gold)', lineHeight: 1, marginBottom: 4 }}>July</div>
              <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--cream)', marginBottom: 14 }}>2026</div>

              <p style={{ color: 'var(--cream-2)', fontSize: 14.5, lineHeight: 1.55, maxWidth: 240 }}>
                Dart goes live with full Lightning Lane Multi Pass booking, day planning, and live replanning.
              </p>
            </div>

            {/* Fall 2026 — Dining add-on */}
            <div className="card launch-card" style={{ padding: 32, position: 'relative', overflow: 'hidden' }}>
              {/* Subtle fox silhouette */}
              <div style={{ position: 'absolute', bottom: -4, right: 0, width: 110, height: 110, opacity: 0.13, pointerEvents: 'none' }}>
                <NextImage src="/images/dart-thinking.png" alt="" fill style={{ objectFit: 'contain', objectPosition: 'bottom right' }} sizes="110px" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <IconCalendar color="var(--magenta)" size={26} />
                <span className="tag tag-magenta">Optional upgrade</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <IconDining color="var(--magenta)" size={20} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--magenta)' }}>
                  Dining Alerts
                </span>
              </div>

              <div className="serif-i" style={{ fontSize: 52, color: 'var(--magenta)', lineHeight: 1, marginBottom: 4 }}>Fall</div>
              <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--cream)', marginBottom: 14 }}>2026</div>

              <p style={{ color: 'var(--cream-2)', fontSize: 14.5, lineHeight: 1.55, maxWidth: 240 }}>
                Dining availability monitoring added as an optional tier upgrade — same conversation, more of it.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="h-display" style={{ marginBottom: 22 }}>
            Off your phone.<br />
            <span style={{ color: 'var(--gold)' }}>On the ride.</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px', maxWidth: 540 }}>
            Join the list and lock in 25% off any tier through the end of 2026.
          </p>
          <Link className="btn btn-primary btn-large" href="/pricing?source=home-final">
            Get my 25% off code →
          </Link>
          <p style={{ marginTop: 22, fontSize: 12.5, color: 'var(--ink-3)', opacity: 0.7 }}>
            Not affiliated with The Walt Disney Company.{' '}
            <Link href="/disclaimer" style={{ color: 'var(--gold)' }}>
              Read the full disclaimer →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
