'use client';

import { useState } from 'react';

const CHECK = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="8" cy="8" r="8" fill="rgba(44,138,130,0.15)" />
    <path d="M4.5 8.5l2.5 2.5 4.5-5.5" stroke="#2c8a82" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LL_TOP: string[] = [
  'Books Lightning Lane Multi Pass selections automatically throughout the day',
  'Syncs with My Disney Experience — no re-entering your plans',
  'Conversational — just talk to Dart, no forms to fill',
  'Re-plans as your day changes (ride down, running late, kid needs a break)',
];

const LL_MORE: string[] = [
  'Routes around your preferences — avoid backtracking, maximize rides, or take it easy',
  'Reschedules Lightning Lane Single Pass selections after you purchase',
  'Add your own blocks: nap time, parade viewing, meal breaks, anything',
  'Virtual queue reminders so you never miss a boarding group window',
  'Park hopping support',
  'Swaps backup selections for first choices as they open up',
  'Wait time awareness to help plan the rest of your day',
];

const DINING_TOP: string[] = [
  'Everything in Lightning Lane, plus:',
  'Alerts you the moment a dining table opens',
  'Watch by restaurant, cuisine, price range, or location',
  'Aware of Disney Dining Plan, character dining, and booking nuances',
];

const DINING_MORE: string[] = [
  'Limited dining recommendations — content partner reviews coming soon',
];

const LL_PRICING = [
  { label: 'Single day', p1to6: '$10', p7plus: '$15' },
  { label: '5-day pass', p1to6: '$25', p7plus: '$35', note: 'use within 30 days' },
  { label: 'Annual', p1to6: '$100', p7plus: null, note: '1–6 people only' },
];

const LLD_PRICING = [
  { label: 'Single day', p1to6: '$15', p7plus: '$25' },
  { label: '5-day pass', p1to6: '$35', p7plus: '$50', note: 'use within 30 days' },
  { label: 'Annual', p1to6: '$150', p7plus: null, note: '1–6 people only' },
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((f) => (
        <li key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.45 }}>
          {CHECK}
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

function PricingStrip({ rows }: { rows: typeof LL_PRICING }) {
  return (
    <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--rule)' }}>
      <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 10 }}>
        Pricing · per party
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {rows.map(({ label, p1to6, p7plus, note }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 15, color: 'var(--twilight)', minWidth: 80 }}>
              {label}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 15, color: 'var(--twilight)', fontWeight: 500 }}>
              {p1to6}
            </span>
            {p7plus ? (
              <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>· {p7plus} for 7+</span>
            ) : (
              <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>· {note}</span>
            )}
            {p7plus && note && (
              <span style={{ fontSize: 11.5, color: 'var(--ink-3)', marginLeft: 4 }}>({note})</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingCard({
  tag,
  tagStyle,
  title,
  titleColor,
  subtitle,
  topFeatures,
  moreFeatures,
  pricing,
  accentColor,
}: {
  tag: string;
  tagStyle: string;
  title: string;
  titleColor: string;
  subtitle: string;
  topFeatures: string[];
  moreFeatures: string[];
  pricing: typeof LL_PRICING;
  accentColor: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: 'var(--paper)',
      border: `1px solid var(--rule)`,
      borderRadius: 'var(--r-lg)',
      padding: '22px 20px',
      boxShadow: 'var(--shadow-sm)',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 14 }}>
        <span className={`tag ${tagStyle}`} style={{ marginBottom: 10, display: 'inline-flex' }}>{tag}</span>
        <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 26, color: titleColor, lineHeight: 1.1, marginBottom: 4 }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{subtitle}</div>
      </div>

      {/* Top features — always visible */}
      <FeatureList items={topFeatures} />

      {/* Expand/collapse for remaining features */}
      {moreFeatures.length > 0 && (
        <>
          {expanded && (
            <div style={{ marginTop: 10 }}>
              <FeatureList items={moreFeatures} />
            </div>
          )}
          <button
            onClick={() => setExpanded((v) => !v)}
            style={{
              marginTop: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 13,
              fontWeight: 600,
              color: accentColor,
              background: 'none',
              border: 'none',
              padding: '4px 0',
              cursor: 'pointer',
            }}
            aria-expanded={expanded}
          >
            <span
              style={{
                display: 'inline-block',
                width: 16,
                height: 16,
                borderRadius: '50%',
                border: `1.5px solid ${accentColor}`,
                lineHeight: '13px',
                textAlign: 'center',
                fontSize: 14,
                transition: 'transform 0.2s',
                transform: expanded ? 'rotate(45deg)' : 'none',
              }}
            >
              +
            </span>
            {expanded ? 'Show less' : `${moreFeatures.length} more feature${moreFeatures.length > 1 ? 's' : ''}`}
          </button>
        </>
      )}

      {/* Pricing strip */}
      <PricingStrip rows={pricing} />
    </div>
  );
}

export default function PricingCardsMobile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <PricingCard
        tag="July 2026"
        tagStyle="tag-gold"
        title="Lightning Lane"
        titleColor="var(--twilight)"
        subtitle="Automatic Multi Pass booking · full day planning"
        topFeatures={LL_TOP}
        moreFeatures={LL_MORE}
        pricing={LL_PRICING}
        accentColor="var(--gold-deep)"
      />
      <PricingCard
        tag="Fall 2026 · optional upgrade"
        tagStyle="tag-magenta"
        title="+ Dining Alerts"
        titleColor="var(--magenta)"
        subtitle="Everything in Lightning Lane, plus dining"
        topFeatures={DINING_TOP}
        moreFeatures={DINING_MORE}
        pricing={LLD_PRICING}
        accentColor="var(--magenta)"
      />
      <p style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 4, lineHeight: 1.5 }}>
        Prices are per party, not per person. 5-day pass must be redeemed within 30 days. Dining Alerts available when Dining launches Fall 2026.
      </p>
    </div>
  );
}
