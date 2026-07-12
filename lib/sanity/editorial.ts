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
  author?: { name: string }; reviewer?: { name: string }; heroImage?: { url: string; alt: string };
  sources?: { title: string; url: string; publisher?: string }[];
  relatedGuides?: Pick<Guide, 'title' | 'slug' | 'summary'>[];
  cta?: { enabled?: boolean; label?: string; url?: string };
};

export function categoryLabel(value?: string) {
  return GUIDE_CATEGORIES.find((category) => category.value === value)?.title ?? 'Miscellaneous';
}

export function isSanityConfigured(env: Record<string, string | undefined> = process.env) {
  return Boolean(env.NEXT_PUBLIC_SANITY_PROJECT_ID && env.NEXT_PUBLIC_SANITY_DATASET);
}

const SITE_URL = 'https://heydart.com';
export function buildGuideMetadata(guide: Pick<Guide, 'title' | 'slug' | 'summary' | 'seoTitle' | 'seoDescription' | 'noindex' | 'heroImage'>) {
  const title = guide.seoTitle || guide.title;
  const description = guide.seoDescription || guide.summary;
  const url = `${SITE_URL}/guides/${guide.slug}`;
  return {
    title, description, alternates: { canonical: url },
    robots: guide.noindex ? { index: false, follow: true } : undefined,
    openGraph: { type: 'article', title, description, url, images: guide.heroImage ? [{ url: guide.heroImage.url, alt: guide.heroImage.alt }] : undefined },
    twitter: { card: 'summary_large_image', title, description, images: guide.heroImage ? [guide.heroImage.url] : undefined },
  };
}

export function buildGuideJsonLd(guide: Pick<Guide, 'title' | 'slug' | 'summary' | 'publishedAt' | 'updatedAt' | 'author' | 'reviewer' | 'heroImage'>) {
  const url = `${SITE_URL}/guides/${guide.slug}`;
  return {
    article: {
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: guide.title,
      description: guide.summary, url, mainEntityOfPage: url, datePublished: guide.publishedAt,
      dateModified: guide.updatedAt || guide.publishedAt, image: guide.heroImage?.url,
      author: guide.author ? { '@type': 'Person', name: guide.author.name } : { '@type': 'Organization', name: 'HeyDart' },
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
