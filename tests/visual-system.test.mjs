import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

function pngDimensions(path) {
  const data = readFileSync(join(root, path));
  assert.equal(data.toString('ascii', 1, 4), 'PNG');
  return [data.readUInt32BE(16), data.readUInt32BE(20)];
}

test('website uses the approved whimsical park-day palette', () => {
  const css = read('app/globals.css');
  for (const token of [
    '--bg: #e7f5f1',
    '--bg-2: #d6eee9',
    '--ink: #12343b',
    '--brick: #d84a35',
    '--brick-deep: #b93425',
    '--twilight: #12343b',
    '--teal: #177b72',
    '--gold: #e3a218',
    '--magenta: #b93678',
  ]) assert.match(css, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));

  for (const retired of ['#fbf3df', '#f5e7c1', '#1f1b3a', '#2a2562', '#1c184a']) {
    assert.doesNotMatch(css, new RegExp(retired, 'i'));
  }
});

test('production illustration assets satisfy the intended pixel contracts', () => {
  const square = [
    'dart-logo-mark.png', 'dart-full-character.png', 'dart-waving.png', 'dart-thinking.png',
    'dart-running.png', 'dart-celebrating.png', 'home-spot-1.png', 'home-spot-2.png',
    'home-spot-3.png', 'hiw-2.png', 'hiw-4.png', 'hiw-5.png', 'pricing-beta.png',
  ];
  for (const name of square) assert.deepEqual(pngDimensions(`public/images/${name}`), [1024, 1024], name);
  assert.deepEqual(pngDimensions('public/images/home-hero.png'), [1024, 1280]);
  assert.deepEqual(pngDimensions('public/images/about-portrait.png'), [832, 1248]);
  assert.deepEqual(pngDimensions('public/images/home-hero-side-pocket-overlap-landscape.png'), [1536, 864]);
  assert.deepEqual(pngDimensions('public/images/about-portrait-folded-map.png'), [832, 1248]);
  for (const name of ['dart-thinking-folded-map.png', 'hiw-2-folded-map.png', 'hiw-4-folded-map.png']) {
    assert.deepEqual(pngDimensions(`public/images/${name}`), [1024, 1024], name);
  }
});

test('rendered routes use cache-busting folded-map asset filenames', () => {
  const source = [read('app/page.tsx'), read('app/how-it-works/page.tsx'), read('app/about/page.tsx')].join('\n');
  for (const name of ['home-hero-side-pocket-overlap-landscape.png', 'dart-thinking-folded-map.png', 'hiw-2-folded-map.png', 'hiw-4-folded-map.png', 'about-portrait-folded-map.png']) {
    assert.ok(source.includes(name), `missing folded-map asset reference: ${name}`);
  }
});

test('visible illustration descriptions no longer claim castles or old generic itinerary art', () => {
  const home = read('app/page.tsx');
  const how = read('app/how-it-works/page.tsx');
  const about = read('app/about/page.tsx');
  assert.doesNotMatch(home, /gazing up at a castle/i);
  assert.doesNotMatch(how, /Illustration of a Disney itinerary/i);
  assert.doesNotMatch(how, /live park data signals flowing/i);
  assert.match(home, /colorful, invented park promenade/);
  assert.match(about, /colorful, invented park promenade/);
});

test('visual system source-of-truth bans tropical shorthand and recognizable park IP', () => {
  const spec = read('design/VISUAL_SYSTEM.md');
  for (const required of ['palms, tropical leaves, hibiscus', 'dense flowers, beaches, water', 'castles, Ferris wheels', 'copied park architecture', 'Disney typography/logos', 'readable generated text, pseudo-text']) {
    assert.ok(spec.includes(required), `missing visual-system rule: ${required}`);
  }
});

test('every full Dart asset uses the locked nonlinguistic folded-map planner kit', () => {
  const spec = read('design/VISUAL_SYSTEM.md');
  for (const required of ['personal-planner kit', 'shallow side pocket attached to the lower viewer-left side panel', 'tri-fold park map standing vertically', 'short marigold pencil', 'main satchel top and large front flap stay clean', 'dark open mouth', 'stitched outer edge', 'front pocket wall', 'emerge together through that pocket mouth', 'continue uninterrupted into the dark cavity', 'no empty band, cut edge, or gap', 'overlap the lower portions by a narrow visible band', 'Nothing may float above the pocket', 'Never add a second pocket', 'looping path', 'abstract lagoon shape', 'three clustered colored nodes', 'wide, shallow landscape illustration']) {
    assert.ok(spec.includes(required), `missing side-pocket planner rule: ${required}`);
  }
  for (const forbidden of ['continents, a world map, streets, labels, attraction icons', 'recognizable park-map geometry', 'branded tickets', 'copied interface elements']) {
    assert.ok(spec.includes(forbidden), `missing tri-fold exclusion: ${forbidden}`);
  }
});
