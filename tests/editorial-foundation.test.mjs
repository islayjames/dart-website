import assert from 'node:assert/strict';
import test from 'node:test';

import {
  GUIDE_CATEGORIES,
  SUPPORTED_LOCALES,
  buildGuideJsonLd,
  buildGuideMetadata,
  categoryLabel,
  isSanityConfigured,
} from '../lib/sanity/editorial.ts';

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
