import { MetadataRoute } from 'next';

// lastModified: update this date when content changes significantly
const LAST_UPDATED = new Date('2026-05-08');

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://heydart.com';
  return [
    { url: base,                        lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/pricing`,           lastModified: LAST_UPDATED, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/how-it-works`,      lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/learn`,             lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,             lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/partnerships`,      lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/disclaimer`,        lastModified: LAST_UPDATED, changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/privacy`,           lastModified: LAST_UPDATED, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,             lastModified: LAST_UPDATED, changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
