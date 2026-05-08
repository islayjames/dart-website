'use client';

import { useState } from 'react';

interface SignupFormProps {
  source?: string;
  preselectedTier?: string;
}

interface SubmittedData {
  email: string;
  tier: string;
  party_size: string;
  trip_status: string;
  park_days: string;
  visit_dates: string;
  email_consent: string;
  beta_optin: string;
  _source: string;
  _beta: string;
  disney_employee?: string;
  [key: string]: string | undefined;
}

export default function SignupForm({ source = 'unknown', preselectedTier = '' }: SignupFormProps) {
  const [beta, setBeta] = useState(false);
  const [submitted, setSubmitted] = useState<SubmittedData | null>(null);
  const [userTier, setUserTier] = useState('');
  const tier = preselectedTier || userTier;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((value, key) => { data[key] = value.toString(); });

    // Combine arrival + departure into a single visit_dates string
    const arrival = data.visit_start ?? '';
    const departure = data.visit_end ?? '';
    if (arrival || departure) {
      data.visit_dates = departure ? `${arrival} to ${departure}` : arrival;
    }
    delete data.visit_start;
    delete data.visit_end;

    data._source = source;
    data._beta = beta ? 'yes' : 'no';

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Something went wrong. Please try again.');
      setSubmitted(data as SubmittedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const isEmployee = submitted.disney_employee === 'yes';
    const isBeta = submitted._beta === 'yes';

    return (
      <div
        style={{ padding: 28, borderRadius: 14, background: 'rgba(200,138,28,0.08)', border: '1px solid rgba(200,138,28,0.32)' }}
        role="status"
        aria-live="polite"
      >
        <div className="serif-i" style={{ fontSize: 26, marginBottom: 12, color: 'var(--gold)' }}>
          {isEmployee
            ? 'Thanks for reaching out.'
            : isBeta
              ? 'Thanks for offering to help us test Dart.'
              : "You're on the list."}
        </div>
        <p style={{ color: 'var(--ink-2)', maxWidth: 460 }}>
          {isEmployee
            ? "Your interest signup is processed. We'd love to talk separately — please email hello@heydart.com for a demo conversation."
            : isBeta
              ? "We'll review applications and reach out — and you'll get your 25% discount code either way."
              : "We'll send your 25% discount code by email and keep you posted as we ramp up to launch. The code is good for any tier through the end of 2026."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="_source" value={source} />

      {/* Email */}
      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      {/* Tier */}
      <div className="form-field">
        <label htmlFor="tier">Which option interests you most?</label>
        <select
          id="tier"
          name="tier"
          value={tier}
          onChange={(e) => setUserTier(e.target.value)}
        >
          <option value="">Not sure yet — just want the discount</option>
          <optgroup label="Single day ($10–25)">
            <option value="1day-ll">Single day · Lightning Lane only — $10 for 1–6 people, $15 for 7+</option>
            <option value="1day-lld">Single day · Lightning Lane + Dining alerts — $15 for 1–6, $25 for 7+</option>
          </optgroup>
          <optgroup label="5-day pass — use within 30 days ($25–50)">
            <option value="5day-ll">5-day pass · Lightning Lane only — $25 for 1–6 people, $35 for 7+</option>
            <option value="5day-lld">5-day pass · Lightning Lane + Dining alerts — $35 for 1–6, $50 for 7+</option>
          </optgroup>
          <optgroup label="Annual — unlimited park days, 1–6 people ($100–150)">
            <option value="annual-ll">Annual · Lightning Lane only — $100</option>
            <option value="annual-lld">Annual · Lightning Lane + Dining alerts — $150</option>
          </optgroup>
        </select>
        <p className="form-help">Lock in 25% off any of these — code valid through end of 2026. Pick later if you&apos;re unsure.</p>
      </div>

      {/* Party size + Trip status */}
      <div className="grid-2" style={{ gap: 16 }}>
        <div className="form-field">
          <label htmlFor="party_size">Party size</label>
          <select id="party_size" name="party_size">
            <option value="">Not sure yet</option>
            <option value="1">Just me</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5 people</option>
            <option value="6">6 people</option>
            <option value="7">7 or more people</option>
          </select>
          <p className="form-help">Annual plans are for parties of 1–6.</p>
        </div>
        <div className="form-field">
          <label htmlFor="trip_status">Your situation</label>
          <select id="trip_status" name="trip_status">
            <option value="planning">We have a trip booked</option>
            <option value="considering">Planning to book soon</option>
            <option value="ap">Annual passholder</option>
            <option value="curious">Just exploring</option>
          </select>
        </div>
      </div>

      {/* Visit dates */}
      <div className="grid-2" style={{ gap: 16 }}>
        <div className="form-field">
          <label htmlFor="visit_start">
            First park day{' '}
            <span className="muted" style={{ fontWeight: 400 }}>(optional)</span>
          </label>
          <input id="visit_start" name="visit_start" type="date" />
        </div>
        <div className="form-field">
          <label htmlFor="visit_end">
            Last park day{' '}
            <span className="muted" style={{ fontWeight: 400 }}>(optional)</span>
          </label>
          <input id="visit_end" name="visit_end" type="date" />
        </div>
      </div>

      {/* Park days */}
      <div className="form-field">
        <label htmlFor="park_days">
          How many park days are you planning?{' '}
          <span className="muted" style={{ fontWeight: 400 }}>(optional)</span>
        </label>
        <select id="park_days" name="park_days">
          <option value="">Not sure</option>
          <option value="1">1 day</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
          <option value="4">4 days</option>
          <option value="5">5 days</option>
          <option value="6">6+ days</option>
        </select>
        <p className="form-help">Helps us understand what plan fits best. Not every trip day has to be a park day.</p>
      </div>

      {/* Email consent */}
      <div style={{ marginTop: 18 }}>
        <label className="form-checkbox">
          <input type="checkbox" name="email_consent" required />
          <span>Send me updates as Dart ramps up to launch — and my 25% discount code when I sign up.</span>
        </label>
      </div>

      {/* Beta opt-in */}
      <div style={{ marginTop: 14 }}>
        <label className="form-checkbox">
          <input
            type="checkbox"
            name="beta_optin"
            checked={beta}
            onChange={(e) => setBeta(e.target.checked)}
          />
          <span>
            I&apos;d like to be considered as a beta tester.{' '}
            <span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>
              Beta testers get a full year of Lightning Lane + Dining (1–6) free through August 2027.
              Florida annual passholders with May–July visits only.
            </span>
          </span>
        </label>
      </div>

      {/* Beta qualification fields — progressive disclosure */}
      <div className={`beta-fields${beta ? ' show' : ''}`} aria-hidden={!beta}>
        <p style={{ fontSize: 13.5, color: 'var(--ink-2)', marginBottom: 14 }}>
          Beta testers must be Florida annual passholders with at least one park day planned between May 15 and July 15, 2026.
          Everyone who applies gets the 25% discount code regardless.
        </p>
        <div className="grid-2" style={{ gap: 14 }}>
          <div className="form-field">
            <label htmlFor="fl_ap">Do you have a Florida annual pass?</label>
            <select id="fl_ap" name="fl_ap">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="visit_window">Park visit planned May 15 – July 15?</label>
            <select id="visit_window" name="visit_window">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="grid-2" style={{ gap: 14 }}>
          <div className="form-field">
            <label htmlFor="window_days">Park days in that May–July window</label>
            <select id="window_days" name="window_days">
              <option value="0">None</option>
              <option value="1">1 day</option>
              <option value="2">2 days</option>
              <option value="3">3 days</option>
              <option value="4">4+ days</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="disney_employee">Are you a Disney employee?</label>
            <select id="disney_employee" name="disney_employee">
              <option value="no">No</option>
              <option value="yes">Yes — please email us instead</option>
            </select>
            <p className="form-help">Disney employees aren&apos;t eligible for beta. Email hello@heydart.com for a demo.</p>
          </div>
        </div>
        <label className="form-checkbox" style={{ marginTop: 4 }}>
          <input type="checkbox" name="beta_ack" required={beta} />
          <span>
            I understand Dart is a pre-release product. Lightning Lane Multi Pass bookings are never
            guaranteed — availability is outside our control. My Lightning Lane purchase is my own
            responsibility, and I won&apos;t hold HeyDart liable for missed selections.
          </span>
        </label>
      </div>

      {error && (
        <p role="alert" style={{ color: 'var(--brick)', marginTop: 12, fontSize: 14 }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-large"
        style={{ marginTop: 22, width: '100%' }}
        disabled={loading}
      >
        {loading ? 'Submitting…' : beta ? 'Apply for the beta →' : 'Get my 25% off code →'}
      </button>
    </form>
  );
}
