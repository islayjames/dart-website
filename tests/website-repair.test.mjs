import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import test from 'node:test';

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
