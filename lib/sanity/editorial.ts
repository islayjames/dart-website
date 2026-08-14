export const SUPPORTED_LOCALES = ['en', 'pt-BR'] as const;
export const DEFAULT_LOCALE = 'en';
export const GUIDE_CATEGORIES = [
  { value: 'planning-and-logistics', title: 'Planning & logistics' },
  { value: 'attractions', title: 'Attractions' },
  { value: 'dining', title: 'Dining' },
  { value: 'merchandise', title: 'Merchandise' },
  { value: 'comparisons', title: 'Comparisons' },
  { value: 'misc', title: 'Miscellaneous' },
] as const;

export type Guide = {
  _id?: string; title: string; slug: string; summary: string; category?: string;
  body?: unknown[]; publishedAt?: string; updatedAt?: string; noindex?: boolean;
  seoTitle?: string; seoDescription?: string; primaryQuestion?: string; directAnswer?: string;
  authorName?: string; author?: { name: string }; reviewer?: { name: string };
  heroImage?: { url: string; alt: string; width?: number; height?: number };
  sources?: { title: string; url: string; publisher?: string }[];
  relatedGuides?: Pick<Guide, 'title' | 'slug' | 'summary'>[];
  cta?: { enabled?: boolean; label?: string; url?: string };
};

export function groupConsecutiveLabels(rows: Array<{ cells?: string[] }>) {
  const spans = rows.map(() => 0);
  let start = 0;
  while (start < rows.length) {
    const label = rows[start].cells?.[0] || '';
    let end = start + 1;
    while (label && end < rows.length && rows[end].cells?.[0] === label) end += 1;
    spans[start] = end - start;
    start = end;
  }
  return spans;
}

export function guideAttribution(guide: Pick<Guide, 'authorName' | 'author'>) {
  if (guide.author?.name) return { label: guide.author.name, schema: { '@type': 'Person', name: guide.author.name } };
  const label = guide.authorName || 'HeyDart';
  return { label, schema: { '@type': 'Organization', name: label } };
}

export function categoryLabel(value?: string) {
  return GUIDE_CATEGORIES.find((category) => category.value === value)?.title ?? 'Miscellaneous';
}

export function isSanityConfigured(env: Record<string, string | undefined> = process.env) {
  return Boolean(env.NEXT_PUBLIC_SANITY_PROJECT_ID && env.NEXT_PUBLIC_SANITY_DATASET);
}

const SITE_URL = 'https://heydart.com';
export function buildGuideMetadata(guide: Pick<Guide, 'title' | 'slug' | 'summary' | 'seoTitle' | 'seoDescription' | 'noindex' | 'publishedAt' | 'updatedAt' | 'heroImage'>) {
  const title = guide.seoTitle || guide.title;
  const description = guide.seoDescription || guide.summary;
  const url = `${SITE_URL}/guides/${guide.slug}`;
  const image = guide.heroImage ? {
    url: guide.heroImage.url,
    alt: guide.heroImage.alt,
    width: guide.heroImage.width,
    height: guide.heroImage.height,
  } : undefined;
  return {
    title, description, alternates: { canonical: url },
    robots: guide.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: 'article', title, description, url,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt || guide.publishedAt,
      images: image ? [image] : undefined,
    },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image] : undefined },
  };
}

export function buildGuideJsonLd(guide: Pick<Guide, 'title' | 'slug' | 'summary' | 'publishedAt' | 'updatedAt' | 'authorName' | 'author' | 'reviewer' | 'heroImage'>) {
  const url = `${SITE_URL}/guides/${guide.slug}`;
  return {
    article: {
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: guide.title,
      description: guide.summary, url, mainEntityOfPage: url, datePublished: guide.publishedAt,
      dateModified: guide.updatedAt || guide.publishedAt, image: guide.heroImage?.url,
      author: guideAttribution(guide).schema,
      reviewedBy: guide.reviewer ? { '@type': 'Person', name: guide.reviewer.name } : undefined,
      publisher: { '@type': 'Organization', name: 'HeyDart', logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/dart-logo-mark.png` } },
    },
    breadcrumbs: {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
        { '@type': 'ListItem', position: 3, name: guide.title, item: url },
      ],
    },
  };
}
