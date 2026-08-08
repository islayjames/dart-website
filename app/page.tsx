import type { Metadata } from 'next';
import NextImage from 'next/image';
import Link from 'next/link';
import HeroEyebrow from '@/components/HeroEyebrow';
import { IconHunt, IconDart, IconMagic, IconBadge, IconSchedule, IconGuide, IconYou } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'HeyDart — Real-time Disney World assistant powered by live park data',
  description:
    'Dining alerts open in August. Controlled early access to Dart starts September 1, followed by the full seasonal launch in October 2026.',
  alternates: { canonical: 'https://heydart.com' },
  openGraph: {
    title: 'HeyDart — Real-time Disney World assistant',
    description:
      'Dining alerts open in August. Early access starts September 1, followed by the full seasonal launch in October.',
    url: 'https://heydart.com',
    images: [{ url: '/images/dart-logo-mark.png', alt: 'HeyDart logo mark' }],
  },
  twitter: {
    title: 'HeyDart — Real-time Disney World assistant',
    description:
      'Dining alerts open in August. Early access starts September 1, followed by the full seasonal launch in October.',
    images: ['/images/dart-logo-mark.png'],
  },
};

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero starlit">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text-col">
              <HeroEyebrow>Dining alerts open in August · Early access starts September 1</HeroEyebrow>
              <h1>
                Be a guest at<br />
                <span className="alt">your own vacation.</span>
              </h1>
              <p className="lead">
                Dart connects to live Disney park data — Lightning Lane availability, dining alerts,
                wait times, mobile order timing — and your own plans, then helps your family decide
                what to do next. You stay present. Dart handles the running of the day.
              </p>
              <div className="hero-ctas">
                <Link className="btn btn-primary btn-large" href="/pricing?source=home-hero">
                  Join the waitlist &amp; get the launch discount
                </Link>
                <Link className="btn btn-secondary btn-large" href="/how-it-works">
                  See how Dart works →
                </Link>
              </div>
              <p style={{ marginTop: 14, fontSize: 13.5, color: 'var(--cream-2)', opacity: 0.78, fontStyle: 'italic' }}>
                Join for August dining alerts, controlled September access, and early pricing.
              </p>
            </div>

            <div className="hero-image-col">
              <div className="hero-image-frame">
                <NextImage
                  src="/images/home-hero-vertical-trifold-landscape.png"
                  alt="Dart the fox in a colorful, invented park promenade beneath striped canopies and lanterns"
                  width={1536}
                  height={864}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Dart connects ── */}
      <section className="section section-cream">
        <div className="container">
          <div className="eyebrow">What Dart connects</div>
          <h2 className="h-section" style={{ marginTop: 8, marginBottom: 14, maxWidth: 720 }}>
            More than an assistant with web access.
          </h2>
          <p className="lead" style={{ marginBottom: 40, maxWidth: 720 }}>
            Most chat assistants give generic advice. Dart plugs into the things that actually shape
            your day — live park data, schedules, insider knowledge, and your family&apos;s
            preferences — and turns them into the next best move.
          </p>

          <div className="connect-grid">
            {/* Featured — Live Disney data */}
            <div className="connect-card featured tint-teal">
              <div className="connect-card-head">
                <IconBadge icon={IconHunt} tint="teal" size={48} />
                <div>
                  <div className="connect-card-title">Live Disney data</div>
                  <div className="connect-card-sub">Real-time signals you&apos;d otherwise have to chase</div>
                </div>
              </div>
              <ul className="connect-card-list">
                <li>Lightning Lane availability</li>
                <li>Dining reservation alerts</li>
                <li>Walk-up waitlist timing</li>
                <li>Mobile order wait &amp; pickup timing</li>
                <li>Standby wait times</li>
              </ul>
            </div>

            {/* Schedules */}
            <div className="connect-card tint-magenta">
              <div className="connect-card-head">
                <IconBadge icon={IconSchedule} tint="magenta" size={48} />
                <div>
                  <div className="connect-card-title">Schedules &amp; showtimes</div>
                  <div className="connect-card-sub">What&apos;s happening, and when</div>
                </div>
              </div>
              <ul className="connect-card-list">
                <li>Park hours</li>
                <li>Entertainment &amp; parades</li>
                <li>Fireworks &amp; special events</li>
                <li>Your existing itinerary</li>
              </ul>
            </div>

            {/* Guides */}
            <div className="connect-card tint-gold">
              <div className="connect-card-head">
                <IconBadge icon={IconGuide} tint="gold" size={48} />
                <div>
                  <div className="connect-card-title">Guides &amp; insider tips</div>
                  <div className="connect-card-sub">Curated park knowledge, applied to your day</div>
                </div>
              </div>
              <ul className="connect-card-list">
                <li>Attraction strategy</li>
                <li>Pro moves &amp; hidden gems</li>
                <li>Restaurant picks</li>
                <li>Park-by-park know-how</li>
              </ul>
            </div>

            {/* Your day */}
            <div className="connect-card tint-rust">
              <div className="connect-card-head">
                <IconBadge icon={IconYou} tint="rust" size={48} />
                <div>
                  <div className="connect-card-title">Your day, your way</div>
                  <div className="connect-card-sub">Context most assistants don&apos;t have</div>
                </div>
              </div>
              <ul className="connect-card-list">
                <li>Family preferences (heights, pace, must-dos)</li>
                <li>Plans and commitments (parades, naps, meet-ups)</li>
                <li>Real-time location &amp; walking time</li>
                <li>Weather</li>
                <li>Restrooms, transportation, points of interest</li>
              </ul>
            </div>
          </div>

          <p className="muted" style={{ marginTop: 28, fontSize: 15, maxWidth: 720 }}>
            Dart weaves these together to suggest the next best move — ride now, eat first, head to
            a nearby restroom, stay in the area, adjust timing, or stop chasing the next thing.
          </p>
        </div>
      </section>

      {/* ── Recommendation card moment ── */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 56, alignItems: 'center' }}>
            <div>
              <div className="eyebrow">An idea of how it feels</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                The right move, at the right moment.
              </h2>
              <p className="lead" style={{ marginBottom: 16 }}>
                Dart isn&apos;t a search engine you have to interrogate. It watches what&apos;s
                happening — availability, timing, your location, your family&apos;s preferences —
                and surfaces a suggestion when the moment is right.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
                You don&apos;t have to ask. Dart already knows you wanted Flight of Passage, that
                you&apos;re 15 minutes away, and that a Lightning Lane just opened at 1:00 PM. It
                puts those together and hands you the move.
              </p>
            </div>

            <div className="rec-card">
              <div className="rec-card-head">
                <div className="rec-card-avatar">
                  <NextImage
                    src="/images/dart-thinking-folded-map.png"
                    alt="Dart the fox"
                    width={56}
                    height={56}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div>
                  <div className="rec-card-eyebrow">Dart found a better move</div>
                  <div className="rec-card-title">Flight of Passage — 1:00 PM</div>
                </div>
              </div>
              <div className="rec-card-body">
                A Lightning Lane just opened for <strong>1:00 PM</strong>. You&apos;re currently in
                Pandora — <strong>about 4 minutes away</strong>. Satu&apos;li Canteen mobile order
                pickup is showing <strong>12–15 min wait</strong> right now, so ordering after the
                ride will time out better.
              </div>
              <div className="rec-card-foot">
                <span>Pulled from: </span>
                <span className="rec-meta">
                  <span className="mono">LL avail</span>
                  <span className="mono">walking time</span>
                  <span className="mono">mobile order ETA</span>
                </span>
              </div>
              <div className="rec-card-actions">
                <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: 13 }}>
                  Not now
                </button>
                <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>
                  Take it →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing teaser ── */}
      <section className="section section-deep">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <div>
              <div className="eyebrow">Pricing</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Simple party pricing.{' '}
                <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>No per-person fees.</span>
              </h2>
              <p className="lead" style={{ marginBottom: 22 }}>
                Every Dart pass includes real-time guidance — live park data, your plans, and your
                family&apos;s preferences in one assistant. Pick a Day, a Trip, or a year.
              </p>
              <div style={{ padding: 18, borderRadius: 14, background: 'rgba(200,138,28,0.10)', border: '1px solid rgba(200,138,28,0.32)', marginBottom: 22 }}>
                <div className="serif-i" style={{ fontSize: 20, color: 'var(--gold)', marginBottom: 6 }}>
                  Waitlist members get the launch discount
                </div>
                <p style={{ fontSize: 14.5, color: 'var(--cream-2)', margin: 0 }}>
                  Join now and we&apos;ll send your code in time for your first park day.
                </p>
              </div>
              <Link className="btn btn-primary" href="/pricing?source=home-pricing">
                See full pricing →
              </Link>
            </div>

            <div className="tier-stack">
              <div className="tier-row">
                <IconBadge icon={IconDart} tint="cream" size={40} />
                <div>
                  <div className="tier-label">Day Pass</div>
                  <div className="tier-sub">One park day, full guidance</div>
                </div>
                <div>
                  <div className="tier-price">$15</div>
                  <span className="tier-price-sub">party of 1–8</span>
                </div>
              </div>
              <div className="tier-row featured">
                <IconBadge icon={IconHunt} tint="cream" size={40} />
                <div>
                  <div className="tier-label">Trip Pass</div>
                  <div className="tier-sub">7 days in a 15-day window</div>
                </div>
                <div>
                  <div className="tier-price">$45</div>
                  <span className="tier-price-sub">party of 1–8</span>
                </div>
              </div>
              <div className="tier-row">
                <IconBadge icon={IconMagic} tint="cream" size={40} />
                <div>
                  <div className="tier-label">Annual Pass</div>
                  <div className="tier-sub">Unlimited park days for the year</div>
                </div>
                <div>
                  <div className="tier-price">$120</div>
                  <span className="tier-price-sub">party of 1–8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="section section-deep">
        <div className="container">
          <div className="eyebrow" style={{ textAlign: 'center' }}>Launch</div>
          <h2 className="h-section" style={{ textAlign: 'center', marginTop: 14, marginBottom: 40 }}>
            When you can use Dart.
          </h2>
          <div className="grid-2" style={{ gap: 24 }}>
            <div className="card launch-card" style={{ padding: 32 }}>
              <div className="serif-i" style={{ fontSize: 52, color: 'var(--gold)', lineHeight: 1, marginBottom: 4 }}>August</div>
              <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--cream)', marginBottom: 14 }}>Dining alerts</div>
              <p style={{ color: 'var(--cream-2)', fontSize: 14.5, lineHeight: 1.55 }}>
                Dining availability monitoring opens first, so families can start watching for hard-to-find reservations.
              </p>
            </div>
            <div className="card launch-card" style={{ padding: 32 }}>
              <div className="serif-i" style={{ fontSize: 52, color: 'var(--magenta)', lineHeight: 1, marginBottom: 4 }}>September 1</div>
              <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--cream)', marginBottom: 14 }}>Early access</div>
              <p style={{ color: 'var(--cream-2)', fontSize: 14.5, lineHeight: 1.55 }}>
                Controlled early access begins with a small number of live parties, followed by the full seasonal launch in October.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 className="h-display" style={{ marginBottom: 22 }}>
            Less planning. Less scanning.<br />
            <span style={{ color: 'var(--gold)' }}>More memories.</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto 28px', maxWidth: 540 }}>
            Join for August dining alerts, controlled September access, and the launch discount.
          </p>
          <Link className="btn btn-primary btn-large" href="/pricing?source=home-final">
            Join the waitlist →
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
