import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import test from 'node:test';

import { validateSignupPayload } from '../lib/signup-validation.ts';

const root = new URL('..', import.meta.url).pathname;

function sourceFiles(dir = root) {
  return readdirSync(dir)
    .flatMap((name) => {
      if (['.git', '.next', 'node_modules', 'tests'].includes(name)) return [];
      const path = join(dir, name);
      return statSync(path).isDirectory() ? sourceFiles(path) : [path];
    })
    .filter((path) => /\.(ts|tsx)$/.test(path));
}

function read(path) {
  return readFileSync(join(root, path), 'utf8');
}

test('public source uses the staged launch instead of an August product launch', () => {
  const staleLaunchPatterns = [
    /Launching August 2026/i,
    /launches August 2026/i,
    /August 2026 launch/i,
    /Launch: August 2026/i,
    /August launch access/i,
    /Launch — live park data/i,
  ];
  const stale = sourceFiles()
    .filter((path) => staleLaunchPatterns.some((pattern) => pattern.test(readFileSync(path, 'utf8'))))
    .map((path) => relative(root, path));
  assert.deepEqual(stale, []);
  assert.match(read('app/page.tsx'), /Dining alerts open in August/);
  assert.match(read('app/page.tsx'), /Early access starts September 1/);
});

test('Lightning Lane copy preserves purchase and post-purchase management boundaries', () => {
  const faq = read('lib/faq-data.ts');
  assert.match(faq, /You purchase the entitlement/);
  assert.match(faq, /Dart can book, replace, and reschedule/);
  assert.doesNotMatch(faq, /you confirm the selection yourself/i);
});

test('beta interest is represented in the form and signup API', () => {
  const form = read('components/SignupForm.tsx');
  const route = read('app/api/signup/route.ts');
  assert.match(form, /<option value="beta">/);
  assert.match(route, /betaInterest/);
  assert.match(route, /interest === 'beta'/);
});

test('waitlist signup uses browser validation and server-side payload validation', () => {
  const form = read('components/SignupForm.tsx');
  const route = read('app/api/signup/route.ts');
  assert.doesNotMatch(form, /<form[^>]*\bnoValidate\b/);
  assert.match(form, /name="name"[\s\S]*?required/);
  assert.match(form, /name="email"[\s\S]*?type="email"[\s\S]*?required/);
  assert.match(form, /name="email_consent"[\s\S]*?required/);
  assert.match(route, /validateSignupPayload/);
});

test('server validation rejects malformed email syntax without requiring email verification', () => {
  for (const email of [
    'not-an-email',
    'missing-domain@',
    '@missing-local.com',
    'two words@example.com',
    '.leading-dot@example.com',
    'double..dot@example.com',
    'guest@-example.com',
    'guest@example_domain.com',
  ]) {
    assert.deepEqual(
      validateSignupPayload({ name: 'Taylor', email, email_consent: 'on' }),
      { ok: false, error: 'Enter a valid email address' },
    );
  }

  assert.deepEqual(
    validateSignupPayload({ name: ' Taylor ', email: ' TAYLOR+trip@example.com ', email_consent: 'on' }),
    {
      ok: true,
      data: { name: 'Taylor', email: 'taylor+trip@example.com', email_consent: 'on', _source: 'pricing-direct' },
    },
  );
});

test('server validation requires a name and explicit mailing-list consent', () => {
  assert.deepEqual(
    validateSignupPayload(null),
    { ok: false, error: 'Invalid signup data' },
  );
  assert.deepEqual(
    validateSignupPayload({ name: '   ', email: 'guest@example.com', email_consent: 'on' }),
    { ok: false, error: 'Name required' },
  );
  assert.deepEqual(
    validateSignupPayload({ name: 'Guest', email: 'guest@example.com' }),
    { ok: false, error: 'Email consent required' },
  );
});

test('signup source normalization preserves owned sources and bounds unknown input', () => {
  const staticSources = sourceFiles().flatMap((path) => (
    [...readFileSync(path, 'utf8').matchAll(/\/pricing\?source=([a-z0-9-]+)/g)].map((match) => match[1])
  ));
  const ownedSources = [
    ...new Set([
      ...staticSources,
      'toddler-nap-guide',
      'character-dining-guide',
      'hardest-reservations-guide',
    ]),
  ];
  assert.ok(ownedSources.length >= 13);

  for (const source of ownedSources) {
    const result = validateSignupPayload({
      name: 'Guest', email: 'guest@example.com', email_consent: 'on', _source: source,
    });
    assert.equal(result.ok && result.data._source, source);
  }

  const normalized = validateSignupPayload({
    name: 'Guest', email: 'guest@example.com', email_consent: 'on', _source: ' Home Hero ',
  });
  assert.equal(normalized.ok && normalized.data._source, 'home-hero');

  const campaign = validateSignupPayload({
    name: 'Guest', email: 'guest@example.com', email_consent: 'on', _source: 'campaign-summer-beta',
  });
  assert.equal(campaign.ok && campaign.data._source, 'campaign-summer-beta');

  for (const source of ['made-up-source', 'x'.repeat(200), '<script>alert(1)</script>']) {
    const result = validateSignupPayload({
      name: 'Guest', email: 'guest@example.com', email_consent: 'on', _source: source,
    });
    assert.equal(result.ok && result.data._source, 'unknown-invalid-source');
  }
});

test('unsupported launch claims are absent', () => {
  const forbidden = [/Most popular/i, /autopilot/i, /25% off any tier/i, /respond to every partnership email within a week/i];
  const violations = sourceFiles().flatMap((path) => {
    const content = readFileSync(path, 'utf8');
    return forbidden
      .filter((pattern) => pattern.test(content))
      .map((pattern) => `${relative(root, path)}: ${pattern}`);
  });
  assert.deepEqual(violations, []);
});

test('sitemap does not publish a shared or synthetic last-modified date', () => {
  const sitemap = read('app/sitemap.ts');
  assert.doesNotMatch(sitemap, /lastModified|LAST_UPDATED/);
});
