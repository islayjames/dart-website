export interface SignupPayload {
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

export type SignupValidationResult =
  | { ok: true; data: SignupPayload }
  | { ok: false; error: string };

const OWNED_SIGNUP_SOURCES = new Set([
  'pricing-direct',
  'dining-mobile-order-help',
  'disney-world-with-kids',
  'first-time-disney-world',
  'how-it-works-final',
  'lightning-lane-help',
  'home-hero',
  'home-pricing',
  'home-final',
  'trip-pass',
  'trip-pass-cta',
  'toddler-nap-guide',
  'character-dining-guide',
  'hardest-reservations-guide',
  'guide-lightning-lane-worth-it',
  'fantasmic-dining-package-guide',
  'park-day-order-guide',
  'disney-world-planning-apps-guide',
]);

function normalizeSignupSource(source?: string): string {
  if (!source) return 'pricing-direct';

  const normalized = source
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (OWNED_SIGNUP_SOURCES.has(normalized)) return normalized;
  if (normalized.length <= 64 && /^campaign-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(normalized)) {
    return normalized;
  }
  return 'unknown-invalid-source';
}

function isValidEmailFormat(email: string): boolean {
  if (!email || email.length > 254) return false;

  const parts = email.split('@');
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  if (!local || local.length > 64 || local.startsWith('.') || local.endsWith('.') || local.includes('..')) {
    return false;
  }
  if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(local)) return false;

  const labels = domain.split('.');
  if (labels.length < 2) return false;
  return labels.every((label) => (
    label.length > 0
    && label.length <= 63
    && /^[a-z0-9-]+$/i.test(label)
    && !label.startsWith('-')
    && !label.endsWith('-')
  ));
}

export function validateSignupPayload(input: unknown): SignupValidationResult {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, error: 'Invalid signup data' };
  }
  const data = input as SignupPayload;
  const name = data.name?.trim() ?? '';
  if (!name) return { ok: false, error: 'Name required' };

  const email = data.email?.trim().toLowerCase() ?? '';
  if (!isValidEmailFormat(email)) return { ok: false, error: 'Enter a valid email address' };

  if (data.email_consent !== 'on') {
    return { ok: false, error: 'Email consent required' };
  }

  return {
    ok: true,
    data: {
      ...data,
      name,
      email,
      _source: normalizeSignupSource(data._source),
    },
  };
}
