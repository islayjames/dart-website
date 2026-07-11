import { NextRequest, NextResponse } from 'next/server';

const LOOPS_API = 'https://app.loops.so/api/v1';

interface SignupPayload {
  email?: string;
  name?: string;
  interest?: string;
  party_size?: string;
  trip_type?: string;
  biggest_stress?: string;
  visit_dates?: string;
  email_consent?: string;
  _source?: string;
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

  const nameParts = (data.name ?? '').trim().split(' ');
  const contact = {
    email,
    firstName: nameParts[0] ?? '',
    lastName: nameParts.slice(1).join(' '),
    source: data._source ?? 'waitlist',
    userGroup: 'waitlist',
    // Custom properties — must exist in Loops Settings → Custom Attributes
    tierInterest: data.interest ?? '',
    partySizeRange: data.party_size ?? '',
    tripType: data.trip_type ?? '',
    biggestStress: data.biggest_stress ?? '',
    visitDates: data.visit_dates ?? '',
    signupSource: data._source ?? 'waitlist',
    betaInterest: data.interest === 'beta',
    diningAlertsInterest: data.interest === 'dining-alerts',
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

    // Duplicate email is fine — contact already on the list
    if (!res.ok && result.message !== 'Contact already exists') {
      console.error('[signup] Loops error:', result);
      return NextResponse.json({ success: false, error: 'Failed to add to list' }, { status: 502 });
    }

    const eventRes = await fetch(`${LOOPS_API}/events/send`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        eventName: 'waitlistSignup',
        eventProperties: {
          source: data._source ?? 'waitlist',
          tierInterest: data.interest ?? '',
          tripType: data.trip_type ?? '',
          betaInterest: data.interest === 'beta',
          diningAlertsInterest: data.interest === 'dining-alerts',
        },
      }),
    });

    if (!eventRes.ok) {
      console.error('[signup] Loops event error:', await eventRes.text());
      return NextResponse.json({ success: false, error: 'Failed to record signup' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[signup] Network error:', err);
    return NextResponse.json({ success: false, error: 'Network error' }, { status: 502 });
  }
}
