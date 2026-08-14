import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { getGuides } from '@/lib/sanity/queries';
import { categoryLabel } from '@/lib/sanity/editorial';

const title = 'Disney World guides';
const description = 'Practical, carefully reviewed Disney World planning guides from HeyDart.';
const url = 'https://heydart.com/guides';
const shareImage = {
  url: 'https://heydart.com/images/guides-share-card.png',
  width: 1536,
  height: 864,
  alt: 'Dart introducing Disney World guides for dining, park days, and Lightning Lane planning',
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { type: 'website', siteName: 'HeyDart', title, description, url, images: [shareImage] },
  twitter: { card: 'summary_large_image', title, description, images: [shareImage] },
};

export default async function GuidesPage() {
  const guides = await getGuides();
  return <div><PageHeader eyebrow="Editorial guides" title={<>Plan with <span style={{ color: 'var(--brick)' }}>clear answers.</span></>} lead="Practical Disney World guidance, sourced and reviewed by the HeyDart editorial team." />
    <section className="section"><div className="container-narrow guide-grid">
      {guides.length === 0 ? <div className="guide-empty"><h2>Guides are coming soon.</h2><p>We’re building a useful, carefully reviewed library. Check back shortly.</p></div> : guides.map((guide) => <article className="guide-card" key={guide._id || guide.slug}>
        {guide.heroImage && <Link className="guide-card-image" href={`/guides/${guide.slug}`} aria-label={`Read ${guide.title}`}><Image src={guide.heroImage.url} alt={guide.heroImage.alt} width={1200} height={675} sizes="(max-width: 720px) calc(100vw - 56px), 824px" /></Link>}
        <div className="guide-card-body"><span className="tag tag-outline">{categoryLabel(guide.category)}</span><h2><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h2><p>{guide.summary}</p>{guide.publishedAt && <time dateTime={guide.publishedAt}>{new Date(guide.publishedAt).toLocaleDateString('en-US', { dateStyle: 'long' })}</time>}</div>
      </article>)}
    </div></section></div>;
}
