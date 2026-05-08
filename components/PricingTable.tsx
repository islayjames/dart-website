import PricingCardsMobile from '@/components/PricingCardsMobile';

/**
 * PricingTable — Feature comparison + pricing grid.
 * Desktop: full feature/price table. Mobile: stacked expandable cards.
 */

const CHECK = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="9" fill="rgba(44,138,130,0.14)" />
    <path d="M5 9.5l3 3 5-6" stroke="#2c8a82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DASH = (
  <span style={{ color: 'var(--ink-3)', fontSize: 18, lineHeight: 1 }} aria-label="not included">—</span>
);

const CORE_FEATURES = [
  'Integrates with your My Disney Experience itinerary',
  'Works with Lightning Lane Multi Pass — books selections automatically throughout the day',
  'Reschedules Lightning Lane Single Pass selections after you purchase',
  'Add your own blocks: nap time, parade viewing, meal breaks, anything',
  'Conversational interface — just talk to Dart, no forms to fill',
  'Re-plans with you as your day changes (ride down, running late, kid needs a break)',
  'Routes around your preferences — avoid backtracking, maximize rides, cram it in or take it easy',
  'Virtual queue reminders so you never miss a boarding group window',
  'Park hopping support',
  'Swaps backup selections for first choices as they open up',
  'Wait time awareness to help plan the rest of your day',
];

const DINING_FEATURES = [
  'Monitors dining availability and alerts you the moment a table opens',
  'Watch by specific restaurant, cuisine, price range, or location',
  'Aware of Disney Dining Plan details, character dining, and booking nuances',
  'Limited dining recommendations — content partner reviews coming soon',
];

const PRICING: { label: string; sub: string; ll1to6: string; lld1to6: string; ll7plus: string; lld7plus: string }[] = [
  { label: 'Single day', sub: 'one park day', ll1to6: '$10', lld1to6: '$15', ll7plus: '$15', lld7plus: '$25' },
  { label: '5-day pass', sub: 'use within 30 days', ll1to6: '$25', lld1to6: '$35', ll7plus: '$35', lld7plus: '$50' },
  { label: 'Annual', sub: 'unlimited park days, 1–6 people only', ll1to6: '$100', lld1to6: '$150', ll7plus: '—', lld7plus: '—' },
];

export default function PricingTable() {
  return (
    <div>
      {/* Mobile: stacked expandable cards */}
      <div className="pricing-mobile">
        <PricingCardsMobile />
      </div>

      {/* Desktop: full feature + price tables */}
      <div className="pricing-desktop">
      {/* Feature comparison */}
      <div className="price-scroll" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 560 }}>
          <thead>
            <tr>
              <th style={{ width: '55%', padding: '0 16px 16px 0', textAlign: 'left', borderBottom: '2px solid var(--rule-strong)' }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Features</span>
              </th>
              <th style={{ width: '22.5%', padding: '0 12px 16px', textAlign: 'center', borderBottom: '2px solid var(--rule-strong)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--twilight)', letterSpacing: '-0.01em', marginBottom: 4 }}>
                  Lightning Lane
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 500 }}>from $10/day</div>
              </th>
              <th style={{ width: '22.5%', padding: '0 0 16px 12px', textAlign: 'center', borderBottom: '2px solid var(--rule-strong)', borderRadius: '8px 8px 0 0', background: 'rgba(193,55,138,0.06)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--magenta)', letterSpacing: '-0.01em' }}>
                    + Dining Alerts
                  </div>
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 500 }}>from $15/day · Fall 2026</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Core feature rows */}
            {CORE_FEATURES.map((feat, i) => (
              <tr key={feat} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(31,27,58,0.02)' }}>
                <td style={{ padding: '11px 16px 11px 0', fontSize: 14.5, color: 'var(--ink-2)', borderBottom: '1px solid var(--rule)' }}>
                  {feat}
                </td>
                <td style={{ padding: '11px 12px', textAlign: 'center', borderBottom: '1px solid var(--rule)' }}>{CHECK}</td>
                <td style={{ padding: '11px 0 11px 12px', textAlign: 'center', borderBottom: '1px solid var(--rule)', background: 'rgba(193,55,138,0.03)' }}>{CHECK}</td>
              </tr>
            ))}

            {/* Dining-only section header */}
            <tr>
              <td colSpan={3} style={{ padding: '20px 0 8px', borderBottom: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--magenta)' }}>
                    Dining Alerts add-on · Fall 2026
                  </span>
                  <span style={{ height: 1, flex: 1, background: 'rgba(193,55,138,0.2)' }} />
                </div>
              </td>
            </tr>

            {/* Dining feature rows */}
            {DINING_FEATURES.map((feat, i) => (
              <tr key={feat} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(31,27,58,0.02)' }}>
                <td style={{ padding: '11px 16px 11px 0', fontSize: 14.5, color: 'var(--ink-2)', borderBottom: '1px solid var(--rule)' }}>
                  {feat}
                </td>
                <td style={{ padding: '11px 12px', textAlign: 'center', borderBottom: '1px solid var(--rule)' }}>{DASH}</td>
                <td style={{ padding: '11px 0 11px 12px', textAlign: 'center', borderBottom: '1px solid var(--rule)', background: 'rgba(193,55,138,0.03)' }}>{CHECK}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pricing grid */}
      <div style={{ marginTop: 36, borderTop: '2px solid var(--rule-strong)', paddingTop: 28 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>
          Pricing
        </div>
        <div className="price-scroll" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 540 }}>
            <thead>
              <tr>
                <th style={{ width: '28%', padding: '0 12px 12px 0', textAlign: 'left', borderBottom: '1px solid var(--rule)' }} />
                <th style={{ padding: '0 8px 12px', textAlign: 'center', borderBottom: '1px solid var(--rule)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                  Lightning Lane<br />
                  <span style={{ color: 'var(--ink-3)', fontWeight: 500 }}>1–6 people</span>
                </th>
                <th style={{ padding: '0 8px 12px', textAlign: 'center', borderBottom: '1px solid var(--rule)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--magenta)' }}>
                  + Dining Alerts<br />
                  <span style={{ fontWeight: 500, color: 'var(--ink-3)' }}>1–6 people</span>
                </th>
                <th style={{ padding: '0 8px 12px', textAlign: 'center', borderBottom: '1px solid var(--rule)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
                  Lightning Lane<br />
                  <span style={{ fontWeight: 500 }}>7+ people</span>
                </th>
                <th style={{ padding: '0 0 12px 8px', textAlign: 'center', borderBottom: '1px solid var(--rule)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--magenta)' }}>
                  + Dining Alerts<br />
                  <span style={{ fontWeight: 500, color: 'var(--ink-3)' }}>7+ people</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map(({ label, sub, ll1to6, lld1to6, ll7plus, lld7plus }) => (
                <tr key={label}>
                  <th scope="row" style={{ padding: '13px 12px 13px 0', textAlign: 'left', borderBottom: '1px solid var(--rule)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 600, fontSize: 17, color: 'var(--twilight)', verticalAlign: 'top' }}>
                    {label}
                    <span style={{ display: 'block', fontFamily: 'var(--sans)', fontStyle: 'normal', fontSize: 11.5, fontWeight: 500, color: 'var(--ink-3)', marginTop: 2 }}>
                      {sub}
                    </span>
                  </th>
                  <td style={{ padding: '13px 8px', textAlign: 'center', borderBottom: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 17, color: ll1to6 === '—' ? 'var(--ink-3)' : 'var(--twilight)', fontWeight: 500 }}>{ll1to6}</td>
                  <td style={{ padding: '13px 8px', textAlign: 'center', borderBottom: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 17, color: lld1to6 === '—' ? 'var(--ink-3)' : 'var(--magenta)', fontWeight: 500, background: 'rgba(193,55,138,0.04)' }}>{lld1to6}</td>
                  <td style={{ padding: '13px 8px', textAlign: 'center', borderBottom: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 17, color: ll7plus === '—' ? 'var(--ink-3)' : 'var(--twilight)', fontWeight: 500 }}>{ll7plus}</td>
                  <td style={{ padding: '13px 0 13px 8px', textAlign: 'center', borderBottom: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 17, color: lld7plus === '—' ? 'var(--ink-3)' : 'var(--magenta)', fontWeight: 500, background: 'rgba(193,55,138,0.04)' }}>{lld7plus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-3)' }}>
          Prices are per-party, not per-person. 5-day pass must be redeemed within 30 days. Annual plans are for parties of 1–6 only.
          Lightning Lane + Dining Alerts becomes purchasable when Dining launches Fall 2026.
        </p>
      </div>
      </div>{/* end .pricing-desktop */}
    </div>
  );
}
