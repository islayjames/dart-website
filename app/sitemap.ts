import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://heydart.com';
  return [
    { url: base,                        changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/pricing`,           changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/how-it-works`,      changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/learn`,             changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`,             changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/partnerships`,      changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/trip-pass`,                  changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/first-time-disney-world`,    changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/disney-world-with-kids`,     changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/lightning-lane-help`,        changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dining-mobile-order-help`,   changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/disclaimer`,        changeFrequency: 'yearly',  priority: 0.4 },
    { url: `${base}/privacy`,           changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,             changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
