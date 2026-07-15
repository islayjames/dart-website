import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { PortableText } from '@portabletext/react';
import { buildGuideJsonLd, buildGuideMetadata, categoryLabel } from '@/lib/sanity/editorial';
import { getGuide, getGuideSlugs } from '@/lib/sanity/queries';

export const revalidate = 300;
export async function generateStaticParams() { return (await getGuideSlugs()).map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const preview = (await draftMode()).isEnabled;
  const guide = await getGuide((await params).slug, preview);
  if (!guide) return { title: 'Guide not found', robots: { index: false, follow: false } };
  const metadata = buildGuideMetadata(guide);
  return preview ? { ...metadata, robots: { index: false, follow: false } } : metadata;
}
const displayDate = (date: string) => new Date(date).toLocaleDateString('en-US', { dateStyle: 'long' });

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const preview = (await draftMode()).isEnabled;
  const guide = await getGuide((await params).slug, preview);
  if (!guide) notFound();
  const jsonLd = buildGuideJsonLd(guide);
  return <article className="guide-article">
    {!preview && <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumbs) }} /></>}
    {preview && <aside className="container-narrow" role="status" style={{ marginBlock: '1rem', padding: '0.75rem 1rem', border: '2px solid #a85b32', background: '#fff8ee' }}><strong>Draft preview · not published</strong> · <a href="/api/draft/disable">Exit preview</a></aside>}
    <header className="guide-hero container-narrow"><nav aria-label="Breadcrumb"><Link href="/guides">Guides</Link> / {categoryLabel(guide.category)}</nav><span className="tag tag-outline">{categoryLabel(guide.category)}</span><h1>{guide.title}</h1><p className="lead">{guide.summary}</p><p className="guide-byline">By {guide.author?.name || 'HeyDart'}{guide.reviewer && <> · Reviewed by {guide.reviewer.name}</>}<br />{guide.publishedAt && <>Published <time dateTime={guide.publishedAt}>{displayDate(guide.publishedAt)}</time></>}{guide.updatedAt && <> · Updated <time dateTime={guide.updatedAt}>{displayDate(guide.updatedAt)}</time></>}</p></header>
    {guide.heroImage && <div className="guide-image container"><Image src={guide.heroImage.url} alt={guide.heroImage.alt} width={1200} height={675} priority /></div>}
    <div className="guide-body container-narrow">
      {guide.primaryQuestion && guide.directAnswer && <aside className="direct-answer"><h2>{guide.primaryQuestion}</h2><p>{guide.directAnswer}</p></aside>}
      {guide.body && <PortableText value={guide.body as never} />}
      {guide.sources?.length ? <section className="guide-sources"><h2>Sources</h2><ul>{guide.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.title}</a>{source.publisher && ` — ${source.publisher}`}</li>)}</ul></section> : null}
      {guide.relatedGuides?.length ? <section><h2>Related guides</h2><ul>{guide.relatedGuides.map((related) => <li key={related.slug}><Link href={`/guides/${related.slug}`}>{related.title}</Link></li>)}</ul></section> : null}
      {guide.cta?.enabled && guide.cta.label && guide.cta.url && <p><a className="btn btn-primary" href={guide.cta.url}>{guide.cta.label}</a></p>}
    </div>
  </article>;
}
