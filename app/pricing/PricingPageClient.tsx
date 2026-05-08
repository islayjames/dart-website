'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import PricingTable from '@/components/PricingTable';
import SignupForm from '@/components/SignupForm';

const QUICK_FAQS = [
  ["Can I get a refund?", "Single-day and 5-day packs are non-refundable but transferable to another date. Annual is refundable within 14 days. Beta participants don't pay, so refunds don't apply there."],
  ["Do I need a My Disney Experience account?", "Yes. Dart connects to MDE via a standard Friends & Family connection — same as every other tool in the category."],
  ["Do I need an annual pass?", "No. The annual Dart tier is for guests of all kinds with frequent trips. Single-day and 5-day packs work for one-off visits."],
  ["Does this work at Disneyland?", "Not at launch. Walt Disney World only."],
  ["Where does my discount get sent?", "To the email you sign up with. We'll send your 25% code shortly after signup; it's good through end of 2026."],
] as const;

export default function PricingPageClient({ source = 'pricing-direct' }: { source?: string }) {
  const [activeTier, setActiveTier] = useState('');

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  const setTierFromCard = (tier: string) => {
    setActiveTier(tier);
    scrollToSignup();
  };

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <div className="eyebrow">Pricing</div>
          <h1 style={{ marginTop: 12 }}>
            Priced for everyone.{' '}
            <span style={{ color: 'var(--gold)' }}>From $10 a day.</span>
          </h1>
          <p className="lead" style={{ marginTop: 18 }}>
            Two tiers, both visible, both your choice. Sign up now and we&apos;ll send you 25% off
            any tier — code valid through end of 2026. Lock in your discount; pick your tier when
            you&apos;re ready.
          </p>
        </div>
      </header>

      {/* Discount banner */}
      <section className="discount-banner" style={{ padding: '24px 0', background: 'rgba(200,138,28,0.10)', borderBottom: '1px solid rgba(200,138,28,0.2)' }}>
        <div className="container discount-banner-inner">
          <div className="discount-banner-text">
            <span className="tag tag-gold">Pre-launch</span>
            <span className="serif-i" style={{ fontSize: 20, color: 'var(--gold)' }}>
              Sign up now and get 25% off any tier through end of 2026.
            </span>
          </div>
          <button className="btn btn-primary" onClick={scrollToSignup}>
            Claim discount →
          </button>
        </div>
      </section>

      {/* Feature + pricing table */}
      <section className="section">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 10 }}>One product. Two tiers.</h2>
          <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 32, maxWidth: 680 }}>
            Lightning Lane is the core — automatic Multi Pass booking, conversational replanning,
            all your preferences wired in. Add Dining Alerts in Fall 2026 if you want reservation
            monitoring too. Same conversation. Same interface. Just more of it.
          </p>
          <div className="card" style={{ padding: 32 }}>
            <PricingTable />
          </div>
        </div>
      </section>

      {/* Two tiers explained */}
      <section className="section section-cream">
        <div className="container">
          <div className="grid-2">
            <div className="card card-cream" style={{ padding: 32 }}>
              <span className="tag tag-gold">July 2026</span>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14 }}>Lightning Lane</h2>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)', marginBottom: 18 }}>
                The core product. Dart watches Lightning Lane Multi Pass openings throughout the day,
                books selections as they drop, and routes everything around your dining, your preferences,
                and whatever the day throws at you.
              </p>
              <ul style={{ paddingLeft: 18, color: 'var(--ink-2)', fontSize: 14.5, marginBottom: 22, lineHeight: 1.7 }}>
                <li>Automatic Lightning Lane Multi Pass booking</li>
                <li>Syncs with My Disney Experience — no re-entering your plans</li>
                <li>Conversational — talk to Dart, not a form</li>
                <li>Locks around parade, naptime, character meals, anything</li>
                <li>Re-plans automatically when the day changes</li>
                <li>Virtual queue reminders, park hopping, wait time awareness</li>
              </ul>
              <button className="btn btn-magenta" onClick={() => setTierFromCard('annual-ll')}>
                Lock in 25% off — Lightning Lane →
              </button>
            </div>

            <div className="card card-cream" style={{ padding: 32 }}>
              <span className="tag tag-magenta">Fall 2026 · optional upgrade</span>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14 }}>+ Dining Alerts</h2>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)', marginBottom: 18 }}>
                Everything in Lightning Lane, plus dining availability monitoring. Not a different product —
                just the same conversation with restaurant reservations in the mix. Your call whether to add it.
              </p>
              <ul style={{ paddingLeft: 18, color: 'var(--ink-2)', fontSize: 14.5, marginBottom: 22, lineHeight: 1.7 }}>
                <li>Everything in Lightning Lane</li>
                <li>Watches for dining availability the moment tables open</li>
                <li>Monitor by restaurant, price range, cuisine, or location</li>
                <li>Aware of Dining Plan, character dining, booking nuances</li>
                <li>Dining recommendations coming with content partners</li>
              </ul>
              <button className="btn btn-magenta" onClick={() => setTierFromCard('annual-lld')}>
                Lock in 25% off — Lightning Lane + Dining →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Beta program */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <div
              className="art-frame"
              style={{ aspectRatio: '4 / 3', position: 'relative', minHeight: 280 }}
            >
              <NextImage
                src="/images/pricing-beta.png"
                alt="Fox holding a clipboard with checkmark, standing before bunting flags"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 880px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="eyebrow">Beta program</div>
              <h2 className="h-section" style={{ marginTop: 14, marginBottom: 18 }}>
                Help us build Dart.
              </h2>
              <p className="lead" style={{ marginBottom: 18 }}>
                We&apos;re looking for a small group of Florida annual passholders with planned
                Disney World visits between May 15 and July 15 to test Dart in low-stakes
                situations. Selected testers get one full year of LL + Dining (1–6) access through
                August 2027. Everyone who applies gets the 25% discount code at minimum.
              </p>
              <ul style={{ paddingLeft: 18, color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7, marginBottom: 22 }}>
                <li>Florida annual passholder, with visits planned May 15 – July 15</li>
                <li>Planning to use Lightning Lane Multi Pass and/or make dining reservations</li>
                <li>Willing to test in low-stakes moments and share feedback</li>
                <li>Pre-release product, no guarantees, no LLMP reimbursement except case-by-case for catastrophic edge cases</li>
                <li>Disney employees not currently eligible — please email us for a demo conversation instead</li>
              </ul>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActiveTier('annual-lld');
                  scrollToSignup();
                }}
              >
                Apply for the beta →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Master signup form */}
      <section className="section section-deep" id="signup">
        <div className="container-narrow">
          <div className="eyebrow">Sign up</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 14 }}>
            One list.{' '}
            <span style={{ color: 'var(--gold)' }}>One discount.</span> Pick your tier later.
          </h2>
          <p className="lead" style={{ marginBottom: 32 }}>
            Sign up now, lock in 25% off, and choose your tier whenever you&apos;re ready.
            We&apos;ll keep you posted as we ramp up to launch.
          </p>
          <div className="card" style={{ padding: 32 }}>
            <SignupForm source={source} preselectedTier={activeTier} />
          </div>
          <p className="muted" style={{ marginTop: 18, fontSize: 13 }}>
            We&apos;ll only email you about Dart. You can unsubscribe at any time. Read our{' '}
            <Link href="/privacy" style={{ color: 'var(--gold)' }}>
              privacy policy
            </Link>.
          </p>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="section">
        <div className="container-narrow">
          <div className="eyebrow">Quick questions</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 24 }}>
            Before you sign up.
          </h2>
          {QUICK_FAQS.map(([q, a]) => (
            <div key={q} style={{ paddingBottom: 18, marginBottom: 18, borderBottom: '1px solid rgba(200,138,28,0.14)' }}>
              <h3 className="serif-i" style={{ fontSize: 20, marginBottom: 6 }}>{q}</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.6 }}>{a}</p>
            </div>
          ))}
          <p style={{ marginTop: 18 }}>
            <Link href="/learn" style={{ color: 'var(--gold)' }}>
              See the full FAQ →
            </Link>
          </p>
        </div>
      </section>

      {/* Categorical comparison */}
      <section className="section section-cream">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Where Dart sits</div>
          <h2 className="h-section" style={{ marginTop: 14, marginBottom: 22 }}>
            Most Lightning Lane tools just search.<br />Most dining tools only alert.
          </h2>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 640 }}>
            Dart pulls Lightning Lane, dining, and your fixed plans into one optimized day — and
            starts at $10. We&apos;re another option from a different angle, not a disruption to a
            community we&apos;re part of.
          </p>
        </div>
      </section>
    </div>
  );
}
