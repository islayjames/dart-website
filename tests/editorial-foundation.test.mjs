import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import {
  GUIDE_CATEGORIES,
  SUPPORTED_LOCALES,
  buildGuideJsonLd,
  buildGuideMetadata,
  categoryLabel,
  guideAttribution,
  isSanityConfigured,
} from '../lib/sanity/editorial.ts';
import { guidePreviewPath, isPreviewConfigured } from '../lib/sanity/preview.ts';
import * as previewHelpers from '../lib/sanity/preview.ts';

test('editorial taxonomy is English-first and ready for pt-BR', () => {
  assert.deepEqual(SUPPORTED_LOCALES, ['en', 'pt-BR']);
  assert.deepEqual(GUIDE_CATEGORIES.map(({ value }) => value), [
    'planning-and-logistics', 'attractions', 'dining', 'merchandise', 'comparisons', 'misc',
  ]);
  assert.equal(categoryLabel('planning-and-logistics'), 'Planning & logistics');
});

test('Sanity remains disabled unless both public connection values exist', () => {
  assert.equal(isSanityConfigured({}), false);
  assert.equal(isSanityConfigured({ NEXT_PUBLIC_SANITY_PROJECT_ID: 'abc' }), false);
  assert.equal(isSanityConfigured({ NEXT_PUBLIC_SANITY_PROJECT_ID: 'abc', NEXT_PUBLIC_SANITY_DATASET: 'production' }), true);
});

test('draft preview requires both server-only credentials', () => {
  assert.equal(isPreviewConfigured({}), false);
  assert.equal(isPreviewConfigured({ SANITY_API_READ_TOKEN: 'token' }), false);
  assert.equal(isPreviewConfigured({ SANITY_PREVIEW_SECRET: 'secret' }), false);
  assert.equal(isPreviewConfigured({ SANITY_API_READ_TOKEN: 'token', SANITY_PREVIEW_SECRET: 'secret' }), true);
});

test('draft preview accepts only canonical guide slugs', () => {
  assert.equal(guidePreviewPath('character-dining-compared'), '/guides/character-dining-compared');
  assert.equal(guidePreviewPath('../pricing'), null);
  assert.equal(guidePreviewPath('https://example.com'), null);
  assert.equal(guidePreviewPath('Uppercase'), null);
});

test('Sanity Open preview uses a short-lived generated token and canonical guide path', () => {
  assert.equal(typeof previewHelpers.buildSanityGuidePreviewUrl, 'function');
  const previewUrl = new URL(previewHelpers.buildSanityGuidePreviewUrl({
    origin: 'https://preview.example.com',
    secret: 'generated-secret',
    slug: 'hardest-disney-world-dining-reservations',
    vercelProtectionBypass: 'vercel-bypass',
  }));
  assert.equal(previewUrl.origin, 'https://preview.example.com');
  assert.equal(previewUrl.pathname, '/api/draft/enable');
  assert.equal(previewUrl.searchParams.get('sanity-preview-secret'), 'generated-secret');
  assert.equal(previewUrl.searchParams.get('sanity-preview-pathname'), '/guides/hardest-disney-world-dining-reservations');
  assert.equal(previewUrl.searchParams.get('sanity-preview-perspective'), 'drafts');
  assert.equal(previewUrl.searchParams.get('x-vercel-protection-bypass'), 'vercel-bypass');
  assert.equal(previewUrl.searchParams.get('x-vercel-set-bypass-cookie'), 'true');
  assert.equal(previewUrl.searchParams.has('secret'), false);
});

test('draft enable validates generated Sanity tokens and restricts redirects to guide paths', () => {
  assert.equal(typeof previewHelpers.guidePreviewPathFromUrl, 'function');
  assert.equal(previewHelpers.guidePreviewPathFromUrl('https://preview.example.com/guides/character-dining-compared?draft=1'), '/guides/character-dining-compared');
  assert.equal(previewHelpers.guidePreviewPathFromUrl('https://evil.example/pricing'), null);
  assert.equal(previewHelpers.guidePreviewPathFromUrl('https://preview.example.com/guides/../pricing'), null);

  const routeSource = readFileSync(new URL('../app/api/draft/enable/route.ts', import.meta.url), 'utf8');
  assert.match(routeSource, /validatePreviewUrl/);
  assert.match(routeSource, /previewClient/);
});

test('Studio Open preview creates a short-lived Sanity token instead of linking to production', () => {
  const configSource = readFileSync(new URL('../sanity.config.ts', import.meta.url), 'utf8');
  assert.match(configSource, /resolveGuideProductionUrl/);
  assert.match(configSource, /createPreviewSecret/);
  assert.match(configSource, /buildSanityGuidePreviewUrl/);
  assert.match(configSource, /sanity-preview-url-secret\.vercel-protection-bypass/);
  assert.doesNotMatch(configSource, /\/guides\/\$\{document\.slug\.current\}/);
});

test('guide metadata uses SEO overrides, canonical URL, and noindex', () => {
  const metadata = buildGuideMetadata({
    title: 'Guide title', slug: 'guide-title', summary: 'Summary', seoTitle: 'Search title',
    seoDescription: 'Search description', noindex: true,
  });
  assert.equal(metadata.title, 'Search title');
  assert.equal(metadata.description, 'Search description');
  assert.equal(metadata.alternates.canonical, 'https://heydart.com/guides/guide-title');
  assert.deepEqual(metadata.robots, { index: false, follow: true });
});

test('guide hero projection preserves Sanity alt text', () => {
  const querySource = readFileSync(new URL('../lib/sanity/queries.ts', import.meta.url), 'utf8');
  assert.match(querySource, /"heroImage": \{"url": heroImage\.asset->url, "alt": heroImage\.alt\}/);
});

test('guide structured data includes article and breadcrumb facts', () => {
  const guide = {
    title: 'Guide title', slug: 'guide-title', summary: 'Summary', publishedAt: '2026-07-10',
    updatedAt: '2026-07-11', author: { name: 'Dart Editorial' }, heroImage: { url: 'https://cdn.example/hero.jpg', alt: 'Castle' },
  };
  const { article, breadcrumbs } = buildGuideJsonLd(guide);
  assert.equal(article['@type'], 'BlogPosting');
  assert.equal(article.dateModified, '2026-07-11');
  assert.equal(article.image, 'https://cdn.example/hero.jpg');
  assert.equal(breadcrumbs.itemListElement[2].item, 'https://heydart.com/guides/guide-title');
});

test('guide attribution keeps HeyDart organizational authorship honest', () => {
  assert.deepEqual(guideAttribution({ authorName: 'HeyDart' }), { label: 'HeyDart', schema: { '@type': 'Organization', name: 'HeyDart' } });
  assert.deepEqual(guideAttribution({ author: { name: 'James Simmons' } }), { label: 'James Simmons', schema: { '@type': 'Person', name: 'James Simmons' } });
});

test('guide body schema supports links and accessible editorial components', () => {
  const schema = readFileSync(new URL('../sanity/schemaTypes/guide.ts', import.meta.url), 'utf8');
  assert.match(schema, /type: 'guideDecisionMap'/);
  assert.match(schema, /type: 'guideLineup'/);
  assert.match(schema, /type: 'guideTable'/);
  assert.match(schema, /name: 'link'/);
});

test('guide page renders structured components with accessible table behavior', () => {
  const page = readFileSync(new URL('../app/guides/[slug]/page.tsx', import.meta.url), 'utf8');
  assert.match(page, /guideDecisionMap/);
  assert.match(page, /guideLineup/);
  assert.match(page, /guideTable/);
  assert.match(page, /tabIndex=\{0\}/);
  assert.match(page, /<caption>/);
  assert.match(page, /guideAttribution/);
});

test('guide structured components have responsive production styles', () => {
  const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');
  assert.match(css, /\.guide-decision-map/);
  assert.match(css, /\.guide-lineup/);
  assert.match(css, /\.guide-table-scroll/);
  assert.match(css, /overflow-x: auto/);
  assert.match(css, /\.guide-article > \.guide-body \{ padding-top: 52px/);
});
