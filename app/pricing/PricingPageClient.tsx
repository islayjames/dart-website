'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconHunt, IconDart, IconMagic, IconBadge } from '@/components/Icons';
import SignupForm from '@/components/SignupForm';

const PRICES = {
  small: { day: 15, trip: 45, annual: 120 },
  large: { day: 25, trip: 75, annual: null },
} as const;

const QUICK_FAQS = [
  ['What does Trip Pass actually cover?', 'Up to 7 park days within a 15-day window. Cover your whole Disney vacation, not just one isolated day.'],
  ['Is dining a separate tier?', 'No. Every pass includes dining reservation alerts, walk-up waitlist timing, and mobile order timing. It\'s all one Dart experience.'],
  ['Do I need a My Disney Experience account?', 'Yes. Dart connects to MDE via a standard Friends & Family connection — same as every other tool in the category.'],
  ['Larger party sizes?', 'Day Pass and Trip Pass support up to 20 guests at a different price. Annual Pass is currently up to 8. Need more? Get in touch.'],
  ['Where does my discount get sent?', 'To the email you sign up with. We\'ll send your code in time for your first park day.'],
] as const;

export default function PricingPageClient({ source = 'pricing-direct' }: { source?: string }) {
  const [partyLarge, setPartyLarge] = useState(false);
  const [signupTier, setSignupTier] = useState('');

  const prices = partyLarge ? PRICES.large : PRICES.small;
  const partyLabel = partyLarge ? '9–20' : '1–8';

  const goSignup = (tier: string) => {
    setSignupTier(tier);
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Page header */}
      <header className="page-header">
        <div className="container">
          <div className="eyebrow">Pricing</div>
          <h1 style={{ marginTop: 12, fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(38px, 4.5vw, 60px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--twilight)' }}>
            Simple party pricing.{' '}
            <span style={{ color: 'var(--brick)' }}>No per-person fees.</span>{' '}
            No confusing add-ons.
          </h1>
          <p className="lead" style={{ marginTop: 18 }}>
            Every Dart pass includes real-time guidance powered by live Disney park data, your plans,
            and your family&apos;s preferences. Trip Pass covers up to 7 park days within a 15-day
            window — best for most Disney vacations.
          </p>
        </div>
      </header>

      {/* Launch discount banner */}
      <section style={{ padding: '20px 0', background: 'rgba(200,54,42,0.07)', borderBottom: '1px solid rgba(200,54,42,0.18)' }}>
        <div className="container discount-banner-inner">
          <div className="discount-banner-text">
            <span className="tag tag-brick">Pre-launch</span>
            <span className="serif-i" style={{ fontSize: 18, color: 'var(--brick)' }}>
              Waitlist members get the launch discount.
            </span>
          </div>
          <button className="btn btn-primary" onClick={() => goSignup('')}>
            Join the waitlist →
          </button>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section">
        <div className="container">
          {/* Header row with toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
            <h2 className="h-section">Pick your pass.</h2>
            <div className="size-toggle">
              <span className="size-toggle-label">Party size</span>
              <button
                className={`size-toggle-btn${!partyLarge ? ' active' : ''}`}
                onClick={() => setPartyLarge(false)}
              >
                1–8
              </button>
              <button
                className={`size-toggle-btn${partyLarge ? ' active' : ''}`}
                onClick={() => setPartyLarge(true)}
              >
                9–20
              </button>
            </div>
          </div>

          <div className="pricing-cards">
            {/* Day Pass */}
            <div className="pcard">
              <div className="pcard-head">
                <IconBadge icon={IconDart} tint="gold" size={44} />
                <div>
                  <div className="pcard-eyebrow">For the day</div>
                  <div className="pcard-name">Day Pass</div>
                </div>
              </div>
              <p className="pcard-body">
                Hitting the parks for a single packed day, or just want to try Dart out? Squeeze the
                most out of your day — from rope drop to fireworks — while we handle the logistics.
              </p>
              <div className="pcard-price">
                <span className="pcard-price-amount">${prices.day}</span>
                <span className="pcard-price-unit">/ park day · party of {partyLabel}</span>
              </div>
              <ul className="pcard-list">
                <li>Real-time Lightning Lane and dining</li>
                <li>Live wait times and walking time</li>
                <li>Your plans and commitments</li>
              </ul>
              <button className="btn btn-secondary pcard-cta" onClick={() => goSignup('1day-8')}>
                Start with Day Pass →
              </button>
            </div>

            {/* Trip Pass — featured */}
            <div className="pcard featured">
              <div className="pcard-flag">Most popular</div>
              <div className="pcard-head">
                <IconBadge icon={IconHunt} tint="brick" size={44} />
                <div>
                  <div className="pcard-eyebrow">For the trip</div>
                  <div className="pcard-name">Trip Pass</div>
                </div>
              </div>
              <p className="pcard-body">
                Use Dart for up to seven park days over a fifteen-day window, plus as your built-in
                concierge for everything around Walt Disney World on your rest days. From three to
                seven days out, all the way to checkout, Dart helps ensure the vacation runs smooth
                and tailored to your family.
              </p>
              <div className="pcard-price">
                <span className="pcard-price-amount">${prices.trip}</span>
                <span className="pcard-price-unit">/ trip · 7 days in 15 · party of {partyLabel}</span>
              </div>
              <ul className="pcard-list">
                <li>Everything in Day Pass</li>
                <li>Pre-trip prep + in-park guidance</li>
                <li>Resort &amp; between-park concierge on rest days</li>
                <li>One purchase covers the whole vacation</li>
              </ul>
              <button className="btn btn-primary pcard-cta" onClick={() => goSignup('trip-8')}>
                Start with Trip Pass →
              </button>
            </div>

            {/* Annual Pass */}
            <div className={`pcard${partyLarge ? ' pcard-unavail' : ''}`}>
              <div className="pcard-head">
                <IconBadge icon={IconMagic} tint="magenta" size={44} />
                <div>
                  <div className="pcard-eyebrow">For the year</div>
                  <div className="pcard-name">Annual Pass</div>
                </div>
              </div>
              <p className="pcard-body">
                For frequent visitors. You know your way around — tell Dart what you want and let it
                handle the rest. Put your day (or half-day) on autopilot and relax in the place you
                love.
              </p>
              <div className="pcard-price">
                {partyLarge ? (
                  <span className="pcard-price-unavail">Available for parties up to 8</span>
                ) : (
                  <>
                    <span className="pcard-price-amount">$120</span>
                    <span className="pcard-price-unit">/ year · party of 1–8</span>
                  </>
                )}
              </div>
              <ul className="pcard-list">
                <li>Everything in Trip Pass</li>
                <li>Unlimited park days for the year</li>
                <li>Save your party + preferences across visits</li>
              </ul>
              <button
                className="btn btn-secondary pcard-cta"
                onClick={() => {
                  if (partyLarge) setPartyLarge(false);
                  goSignup('annual-8');
                }}
              >
                {partyLarge ? 'See Annual Pass (1–8)' : 'Start with Annual Pass →'}
              </button>
            </div>
          </div>

          <p className="muted" style={{ textAlign: 'center', marginTop: 20, fontSize: 14 }}>
            All passes include the full Dart experience — no per-person fees, no add-ons, no separate dining tier.
          </p>
        </div>
      </section>

      {/* Beta callout */}
      <section className="section-tight section-cream">
        <div className="container">
          <div className="beta-callout">
            <div className="beta-callout-icon">
              <IconBadge icon={IconHunt} tint="teal" size={64} />
            </div>
            <div className="beta-callout-body">
              <div className="eyebrow" style={{ color: 'var(--teal)' }}>Beta program · limited</div>
              <h3 className="h-card" style={{ marginTop: 6, marginBottom: 10, fontStyle: 'italic' }}>
                Love WDW? Help us shape Dart.
              </h3>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 16 }}>
                We&apos;re looking for Walt Disney World regulars, planners, and folks who genuinely
                enjoy experimenting to test Dart before launch. Selected testers get a full year of
                Dart free and a direct line to the team — in exchange for honest feedback in real
                park conditions.
              </p>
              <button className="btn btn-secondary" onClick={() => goSignup('beta')}>
                Apply to the beta program →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Every pass includes */}
      <section className="section section-cream">
        <div className="container">
          <div className="eyebrow">Every pass includes</div>
          <h2 className="h-section" style={{ marginTop: 8, marginBottom: 32 }}>
            Real-time guidance across the whole day.
          </h2>
          <div className="grid-2" style={{ gap: 32 }}>
            <ul className="check-list">
              <li>Lightning Lane availability monitoring</li>
              <li>Dining reservation alerts</li>
              <li>Walk-up waitlist timing</li>
              <li>Mobile order wait times and pickup timing</li>
              <li>Standby wait awareness</li>
              <li>Park hours and entertainment</li>
            </ul>
            <ul className="check-list">
              <li>Your itinerary, Lightning Lane selections, and dining</li>
              <li>Plans and commitments (parades, naps, meet-ups, shows)</li>
              <li>Location-aware suggestions and walking time</li>
              <li>Restrooms, points of interest, transportation</li>
              <li>Weather and family preferences</li>
              <li>Pre-trip help and in-park guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Signup form */}
      <section className="section section-deep" id="signup">
        <div className="container-narrow">
          <div className="eyebrow">Sign up</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14 }}>
            Join the waitlist.{' '}
            <span style={{ color: 'var(--gold)' }}>Get the launch discount.</span>
          </h2>
          <p className="lead" style={{ marginBottom: 32 }}>
            Tell us when you&apos;re going. We&apos;ll prioritize beta access and send your discount
            code in time for your first park day.
          </p>
          <div className="card">
            <SignupForm source={source} preselectedTier={signupTier} />
          </div>
          <p className="muted" style={{ marginTop: 18, fontSize: 13 }}>
            We&apos;ll only email you about Dart. You can unsubscribe at any time. Read our{' '}
            <Link href="/privacy" style={{ color: 'var(--gold)' }}>privacy policy</Link>.
          </p>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="section">
        <div className="container-narrow">
          <div className="eyebrow">Quick questions</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 24 }}>Before you sign up.</h2>
          {QUICK_FAQS.map(([q, a]) => (
            <div key={q} style={{ paddingBottom: 18, marginBottom: 18, borderBottom: '1px solid rgba(200,138,28,0.14)' }}>
              <h3 className="serif-i" style={{ fontSize: 20, marginBottom: 6 }}>{q}</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.6 }}>{a}</p>
            </div>
          ))}
          <p style={{ marginTop: 18 }}>
            <Link href="/learn" style={{ color: 'var(--gold)' }}>See the full FAQ →</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
