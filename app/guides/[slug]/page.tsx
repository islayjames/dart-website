import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import { buildGuideJsonLd, buildGuideMetadata, categoryLabel, guideAttribution } from '@/lib/sanity/editorial';
import { getGuide, getGuideSlugs } from '@/lib/sanity/queries';

type DecisionMap = { eyebrow?: string; title: string; intro?: string; note?: string; groups?: { _key?: string; heading: string; note?: string; items?: { _key?: string; anchor?: string; title: string; subtitle: string; meta?: string; muted?: boolean }[] }[] };
type Lineup = { eyebrow?: string; title: string; intro?: string; note?: string; groups?: { _key?: string; heading: string; items?: { _key?: string; name: string; location: string; meta?: string }[] }[] };
type GuideTable = { _key?: string; caption: string; columns?: string[]; rows?: { _key?: string; anchor?: string; cells?: string[] }[] };
type HeadingBlock = { children?: { text?: string }[] };

function headingId(value: unknown) {
  const text = (value as HeadingBlock)?.children?.map((child) => child.text || '').join('') || '';
  return text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const guidePortableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => <h2 id={headingId(value)}>{children}</h2>,
    h3: ({ children, value }) => <h3 id={headingId(value)}>{children}</h3>,
    h4: ({ children, value }) => <h4 id={headingId(value)}>{children}</h4>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href || '#';
      const external = /^https?:\/\//.test(href);
      return <a href={href} rel={external ? 'noopener noreferrer' : undefined}>{children}</a>;
    },
  },
  types: {
    guideDecisionMap: ({ value }) => {
      const map = value as DecisionMap;
      return <section className="guide-decision-map" aria-label={map.title}>
        {map.eyebrow && <p className="guide-component-eyebrow">{map.eyebrow}</p>}
        <h2>{map.title}</h2>
        {map.intro && <p>{map.intro}</p>}
        <div className="guide-decision-groups">{map.groups?.map((group, groupIndex) => <section key={group._key || groupIndex}>
          <h3>{group.heading}</h3>
          {group.note && <p className="guide-component-note">{group.note}</p>}
          <div className="guide-decision-cards">{group.items?.map((item, itemIndex) => {
            const content = <><strong>{item.title}</strong><span>{item.subtitle}</span>{item.meta && <small>{item.meta}</small>}</>;
            return item.anchor
              ? <a className="guide-decision-card" href={`#${item.anchor}`} key={item._key || itemIndex}>{content}</a>
              : <div className={`guide-decision-card${item.muted ? ' is-muted' : ''}`} key={item._key || itemIndex}>{content}</div>;
          })}</div>
        </section>)}</div>
        {map.note && <p className="guide-component-warning">{map.note}</p>}
      </section>;
    },
    guideLineup: ({ value }) => {
      const lineup = value as Lineup;
      return <section className="guide-lineup" aria-label={lineup.title}>
        {lineup.eyebrow && <p className="guide-component-eyebrow">{lineup.eyebrow}</p>}
        <h2>{lineup.title}</h2>
        {lineup.intro && <p>{lineup.intro}</p>}
        <div className="guide-lineup-groups">{lineup.groups?.map((group, groupIndex) => <section key={group._key || groupIndex}>
          <h3>{group.heading}</h3>
          {group.items?.map((item, itemIndex) => <div className="guide-lineup-row" key={item._key || itemIndex}><strong>{item.name}</strong><span>{item.location}</span>{item.meta && <small>{item.meta}</small>}</div>)}
        </section>)}</div>
        {lineup.note && <p className="guide-component-warning">{lineup.note}</p>}
      </section>;
    },
    guideTable: ({ value }) => {
      const table = value as GuideTable;
      const compact = table.columns?.length === 2;
      const sectioned = table.rows?.some((row) => row.cells?.length && row.cells.slice(1).every((cell) => !cell.trim())) || false;
      const normalizedColumns = table.columns?.map((column) => column.toLowerCase()) || [];
      const periodMatrix = !sectioned
        && normalizedColumns.some((column) => column === 'peak' || column.includes('peak period'))
        && normalizedColumns.some((column) => column === 'low' || column.includes('lower period'));
      const stacked = (table.columns?.length || 0) >= 3 && !sectioned && !periodMatrix;
      const captionId = `guide-table-${table._key || headingId({ children: [{ text: table.caption }] })}`;
      const fourColumnMatrix = periodMatrix && table.columns?.length === 4;
      return <div className={`guide-table-scroll${compact ? ' is-compact' : ''}${stacked ? ' is-stacked' : ''}${sectioned ? ' is-sectioned' : ''}${periodMatrix ? ' is-period-matrix' : ''}${fourColumnMatrix ? ' has-four-columns' : ''}`} tabIndex={0} role="region" aria-labelledby={captionId}>
        <div className="guide-table-caption" id={captionId}>{table.caption}</div>
        <table aria-labelledby={captionId}>
          {sectioned && <colgroup><col className="guide-table-attraction-column" /><col /><col /></colgroup>}
          {periodMatrix && <colgroup><col className="guide-table-label-column" />{table.columns?.slice(1).map((_, index) => <col key={index} />)}</colgroup>}
          <thead><tr>{table.columns?.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
          <tbody>{table.rows?.map((row, rowIndex) => {
            const cells = row.cells || [];
            const sectionRow = sectioned && cells.length > 0 && cells.slice(1).every((cell) => !cell.trim());
            if (sectionRow) return <tr className="guide-table-section" key={row._key || rowIndex}><th scope="rowgroup" colSpan={table.columns?.length || 1}>{cells[0]}</th></tr>;
            const totalRow = cells[0]?.startsWith('Combined total:');
            return <tr className={totalRow ? 'guide-table-total' : undefined} id={row.anchor} key={row._key || rowIndex}>{cells.map((cell, cellIndex) => cellIndex === 0 ? <th scope="row" key={cellIndex}>{cell}</th> : <td data-label={table.columns?.[cellIndex]} key={cellIndex}>{cell}</td>)}</tr>;
          })}</tbody>
        </table>
      </div>;
    },
  },
};

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
  const attribution = guideAttribution(guide);
  return <article className="guide-article">
    {!preview && <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.article) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.breadcrumbs) }} /></>}
    {preview && <aside className="container-narrow" role="status" style={{ marginBlock: '1rem', padding: '0.75rem 1rem', border: '2px solid #a85b32', background: '#fff8ee' }}><strong>Draft preview · not published</strong> · <a href="/api/draft/disable">Exit preview</a></aside>}
    <header className="guide-hero container-narrow"><nav aria-label="Breadcrumb"><Link href="/guides">Guides</Link> / {categoryLabel(guide.category)}</nav><span className="tag tag-outline">{categoryLabel(guide.category)}</span><h1>{guide.title}</h1><p className="lead">{guide.summary}</p><p className="guide-byline">By {attribution.label}{guide.reviewer && <> · Reviewed by {guide.reviewer.name}</>}<br />{guide.publishedAt && <>Published <time dateTime={guide.publishedAt}>{displayDate(guide.publishedAt)}</time></>}{guide.updatedAt && <> · Updated <time dateTime={guide.updatedAt}>{displayDate(guide.updatedAt)}</time></>}</p></header>
    {guide.heroImage && <div className="guide-image container"><Image src={guide.heroImage.url} alt={guide.heroImage.alt} width={1200} height={675} priority /></div>}
    <div className="guide-body container-narrow">
      {guide.primaryQuestion && guide.directAnswer && <aside className="direct-answer"><h2>{guide.primaryQuestion}</h2><p>{guide.directAnswer}</p></aside>}
      {guide.body && <PortableText value={guide.body as never} components={guidePortableTextComponents} />}
      {guide.sources?.length ? <section className="guide-sources"><h2>Sources</h2><ul>{guide.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.title}</a>{source.publisher && ` — ${source.publisher}`}</li>)}</ul></section> : null}
      {guide.relatedGuides?.length ? <section><h2>Related guides</h2><ul>{guide.relatedGuides.map((related) => <li key={related.slug}><Link href={`/guides/${related.slug}`}>{related.title}</Link></li>)}</ul></section> : null}
      {guide.cta?.enabled && guide.cta.label && guide.cta.url && <p><a className="btn btn-primary" href={guide.cta.url}>{guide.cta.label}</a></p>}
    </div>
  </article>;
}
