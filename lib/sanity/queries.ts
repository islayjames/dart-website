import type { Guide } from './editorial';
import { sanityFetch } from './client';

const guideProjection = `{
  _id, title, "slug": slug.current, summary, category, body, publishedAt, updatedAt,
  primaryQuestion, directAnswer, noindex, seoTitle, seoDescription,
  authorName, "author": author->{name}, "reviewer": reviewer->{name},
  "heroImage": heroImage.asset->{"url": url, "alt": ^.alt}, sources,
  cta, "relatedGuides": relatedGuides[]->{title, "slug": slug.current, summary}
}`;

export async function getGuides() {
  return (await sanityFetch<Guide[]>(`*[_type == "guide" && locale == "en" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc) ${guideProjection}`)) ?? [];
}
export async function getGuide(slug: string, preview = false) {
  const publicationBoundary = preview ? '' : ' && defined(publishedAt) && publishedAt <= now()';
  return sanityFetch<Guide>(`*[_type == "guide" && locale == "en" && slug.current == $slug${publicationBoundary}][0] ${guideProjection}`, { slug }, preview);
}
export async function getGuideSlugs() {
  return (await sanityFetch<{ slug: string; updatedAt?: string }[]>(`*[_type == "guide" && locale == "en" && defined(publishedAt) && publishedAt <= now()]{"slug": slug.current, updatedAt}`)) ?? [];
}
