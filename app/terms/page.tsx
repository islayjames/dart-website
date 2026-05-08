import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Service | HeyDart',
};

/**
 * Terms of Service page — scaffolded for design; counsel fills final language before launch.
 */
export default function TermsPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Terms of Service" />

      <section className="section">
        <div className="container-narrow">
          <div className="card" style={{ padding: 32, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            {/* Gold italic notice — scaffolded content marker for counsel */}
            <p style={{ fontStyle: 'italic', color: 'var(--gold)', marginBottom: 22 }}>
              Scaffolded for design — counsel fills final language before launch.
            </p>

            <p style={{ marginBottom: 18 }}>
              By signing up for the HeyDart interest list, you agree to receive emails about
              Dart. You can unsubscribe at any time.
            </p>

            <p style={{ marginBottom: 18 }}>
              Pre-launch discount codes are subject to the terms communicated at signup —
              currently, 25% off any tier through end of 2026, redeemable once at purchase.
            </p>

            <p style={{ marginBottom: 18 }}>
              Dart does not guarantee Lightning Lane Multi Pass bookings or dining
              reservations. Availability is subject to The Walt Disney Company&apos;s systems
              and rules.
            </p>

            <p>
              Beta participation is governed by a separate beta agreement signed at the time
              of selection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
