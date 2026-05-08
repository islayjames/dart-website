import { NextRequest, NextResponse } from 'next/server';

const LOOPS_API = 'https://app.loops.so/api/v1';

interface SignupPayload {
  email?: string;
  tier?: string;
  party_size?: string;
  trip_status?: string;
  park_days?: string;
  visit_dates?: string;
  email_consent?: string;
  beta_optin?: string;
  fl_ap?: string;
  visit_window?: string;
  window_days?: string;
  disney_employee?: string;
  _source?: string;
  _beta?: string;
}

export async function POST(request: NextRequest) {
  let data: SignupPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const { email } = data;
  if (!email) {
    return NextResponse.json({ success: false, error: 'Email required' }, { status: 400 });
  }

  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    console.error('[signup] LOOPS_API_KEY not set');
    return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
  }

  const isBeta = data._beta === 'yes' || data.beta_optin === 'on';
  const isDisneyEmployee = data.disney_employee === 'yes';

  // Upsert contact with all form fields as custom properties
  const contact = {
    email,
    source: data._source ?? 'pricing-direct',
    userGroup: isBeta ? 'beta-applicant' : 'waitlist',
    mailingLists: { [isBeta ? 'beta' : 'waitlist']: true },
    // Custom properties — create these in Loops Settings → Custom Attributes
    tierInterest: data.tier ?? '',
    partySize: data.party_size ? parseInt(data.party_size, 10) : null,
    tripStatus: data.trip_status ?? '',
    parkDays: data.park_days ? parseInt(data.park_days, 10) : null,
    visitDates: data.visit_dates ?? '',
    betaApplicant: isBeta,
    disneyEmployee: isDisneyEmployee,
    floridaAP: data.fl_ap === 'yes',
    visitWindow: data.visit_window === 'yes',
    windowDays: data.window_days ? parseInt(data.window_days, 10) : null,
    signupSource: data._source ?? 'pricing-direct',
  };

  try {
    const res = await fetch(`${LOOPS_API}/contacts/create`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    const result = await res.json();

    // Duplicate email is fine — just means they've already signed up
    if (!res.ok && result.message !== 'Contact already exists') {
      console.error('[signup] Loops error:', result);
      return NextResponse.json({ success: false, error: 'Failed to add to list' }, { status: 502 });
    }

    // Fire a signup event for use in Loops automations (welcome email, discount code, etc.)
    await fetch(`${LOOPS_API}/events/send`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        eventName: isBeta ? 'betaSignup' : 'waitlistSignup',
        eventProperties: {
          source: data._source ?? 'pricing-direct',
          tierInterest: data.tier ?? '',
          betaApplicant: isBeta,
        },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[signup] Network error:', err);
    return NextResponse.json({ success: false, error: 'Network error' }, { status: 502 });
  }
}
