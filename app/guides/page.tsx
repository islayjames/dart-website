import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { getGuides } from '@/lib/sanity/queries';
import { categoryLabel } from '@/lib/sanity/editorial';

export const metadata: Metadata = { title: 'Disney World guides', description: 'Practical, carefully reviewed Disney World planning guides from HeyDart.', alternates: { canonical: 'https://heydart.com/guides' } };

export default async function GuidesPage() {
  const guides = await getGuides();
  return <div><PageHeader eyebrow="Editorial guides" title={<>Plan with <span style={{ color: 'var(--brick)' }}>clear answers.</span></>} lead="Practical Disney World guidance, sourced and reviewed by the HeyDart editorial team." />
    <section className="section"><div className="container-narrow guide-grid">
      {guides.length === 0 ? <div className="guide-empty"><h2>Guides are coming soon.</h2><p>We’re building a useful, carefully reviewed library. Check back shortly.</p></div> : guides.map((guide) => <article className="guide-card" key={guide._id || guide.slug}><span className="tag tag-outline">{categoryLabel(guide.category)}</span><h2><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h2><p>{guide.summary}</p>{guide.publishedAt && <time dateTime={guide.publishedAt}>{new Date(guide.publishedAt).toLocaleDateString('en-US', { dateStyle: 'long' })}</time>}</article>)}
    </div></section></div>;
}
