'use client';

import { useState } from 'react';

interface SignupFormProps {
  source?: string;
  preselectedTier?: string;
}

export default function SignupForm({ source = 'unknown', preselectedTier = '' }: SignupFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((value, key) => { data[key] = value.toString(); });

    // Combine visit_start + visit_end into a single visit_dates string
    const arrival = data.visit_start ?? '';
    const departure = data.visit_end ?? '';
    if (arrival || departure) {
      data.visit_dates = departure ? `${arrival} to ${departure}` : arrival;
    }
    delete data.visit_start;
    delete data.visit_end;

    data._source = source;

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Something went wrong. Please try again.');
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{ padding: 28, borderRadius: 14, background: 'rgba(200,138,28,0.08)', border: '1px solid rgba(200,138,28,0.32)' }}
        role="status"
        aria-live="polite"
      >
        <div className="serif-i" style={{ fontSize: 26, marginBottom: 12, color: 'var(--gold)' }}>
          You&apos;re on the waitlist.
        </div>
        <p style={{ color: 'var(--cream-2)', maxWidth: 460 }}>
          We&apos;ll prioritize your trip dates and send your launch discount code in time for your first park day. Thanks for being early.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
        />
      </div>

      {/* Email */}
      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      {/* Interest */}
      <div className="form-field">
        <label htmlFor="interest">What are you interested in?</label>
        <select id="interest" name="interest" defaultValue={preselectedTier}>
          <option value="">Not sure yet</option>
          <option value="dining-alerts">Dining Alerts Early Access</option>
          <option value="beta">Beta program</option>
          <option value="1day-8">Day Pass — one park day</option>
          <option value="trip-8">Trip Pass — up to 7 park days in 15</option>
          <option value="annual-8">Annual Pass — frequent visitor</option>
          <option value="agent">Travel agent / partner</option>
          <option value="creator">Creator / media</option>
        </select>
      </div>

      {/* Party size */}
      <div className="form-field">
        <label htmlFor="party_size">Party size</label>
        <select id="party_size" name="party_size">
          <option value="">Select party size</option>
          <option value="1-4">1–4 people</option>
          <option value="5-8">5–8 people</option>
          <option value="9-12">9–12 people</option>
          <option value="13-20">13–20 people</option>
          <option value="20+">More than 20 people</option>
        </select>
      </div>

      {/* Trip type */}
      <div className="form-field">
        <label htmlFor="trip_type">Your trip type</label>
        <select id="trip_type" name="trip_type">
          <option value="">Select your situation</option>
          <option value="first-time">First-time Disney World visitor</option>
          <option value="florida-trip">Disney is one stop on a Florida trip</option>
          <option value="main-vacation">Main Disney vacation</option>
          <option value="dvc">DVC / annual Disney trip</option>
          <option value="ap-local">Annual passholder / local family</option>
          <option value="travel-agent">Travel agent</option>
          <option value="creator">Creator / partner</option>
          <option value="exploring">Just exploring</option>
        </select>
      </div>

      {/* Biggest stress */}
      <div className="form-field">
        <label htmlFor="biggest_stress">Biggest stress about Disney</label>
        <select id="biggest_stress" name="biggest_stress">
          <option value="">Select your biggest stress</option>
          <option value="lightning-lane">Lightning Lane</option>
          <option value="dining">Dining alerts / food timing</option>
          <option value="what-next">Not knowing what to do next</option>
          <option value="kids-logistics">Kids / naps / family logistics</option>
          <option value="walking">Walking / transportation</option>
          <option value="group">Keeping the group together</option>
          <option value="too-much-planning">Too much planning</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Trip dates */}
      <div className="grid-2" style={{ gap: 16 }}>
        <div className="form-field">
          <label htmlFor="visit_start">Trip start</label>
          <input id="visit_start" name="visit_start" type="date" />
        </div>
        <div className="form-field">
          <label htmlFor="visit_end">Trip end</label>
          <input id="visit_end" name="visit_end" type="date" />
        </div>
      </div>
      <p className="form-help">From → to. Leave blank if you&apos;re not sure yet.</p>

      {/* Email consent */}
      <div style={{ marginTop: 18 }}>
        <label className="form-checkbox">
          <input type="checkbox" name="email_consent" required />
          <span>Send me launch updates and my launch discount code.</span>
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
        {loading ? 'Submitting…' : 'Join the waitlist & get the launch discount →'}
      </button>
    </form>
  );
}
