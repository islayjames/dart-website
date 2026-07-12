import { defineArrayMember, defineField, defineType } from 'sanity';
import { GUIDE_CATEGORIES, SUPPORTED_LOCALES } from '../../lib/sanity/editorial';

export const guideType = defineType({
  name: 'guide', title: 'Guide', type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true }, { name: 'editorial', title: 'Editorial' },
    { name: 'distribution', title: 'Distribution' }, { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', type: 'string', group: 'content', validation: (r) => r.required().max(90) }),
    defineField({ name: 'slug', type: 'slug', group: 'content', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'locale', type: 'string', group: 'editorial', initialValue: 'en', options: { list: SUPPORTED_LOCALES.map((value) => ({ title: value === 'en' ? 'English' : 'Português (Brasil) — future', value })) }, validation: (r) => r.required() }),
    defineField({ name: 'translationGroup', title: 'Translation group ID', description: 'Use the same stable ID across future translations. Do not create pt-BR documents until localization launches.', type: 'string', group: 'editorial' }),
    defineField({ name: 'translationOf', title: 'Translation of', type: 'reference', to: [{ type: 'guide' }], group: 'editorial' }),
    defineField({ name: 'summary', title: 'Summary / dek', type: 'text', rows: 3, group: 'content', validation: (r) => r.required().max(240) }),
    defineField({ name: 'body', type: 'array', group: 'content', of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image', fields: [{ name: 'alt', type: 'string', validation: (r) => r.required() }] })], validation: (r) => r.required() }),
    defineField({ name: 'category', type: 'string', group: 'editorial', options: { list: GUIDE_CATEGORIES.map(({ title, value }) => ({ title, value })) }, validation: (r) => r.required() }),
    defineField({ name: 'publishedAt', title: 'Publish date', type: 'datetime', group: 'editorial', validation: (r) => r.required() }),
    defineField({ name: 'updatedAt', title: 'Substantive update date', type: 'datetime', group: 'editorial' }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'person' }], group: 'editorial', validation: (r) => r.required() }),
    defineField({ name: 'reviewer', type: 'reference', to: [{ type: 'person' }], group: 'editorial' }),
    defineField({ name: 'heroImage', type: 'image', group: 'content', options: { hotspot: true }, fields: [defineField({ name: 'alt', type: 'string', validation: (r) => r.required() })] }),
    defineField({ name: 'primaryQuestion', type: 'string', group: 'content' }),
    defineField({ name: 'directAnswer', type: 'text', rows: 3, group: 'content' }),
    defineField({ name: 'sources', type: 'array', group: 'editorial', of: [defineArrayMember({ type: 'object', fields: [{ name: 'title', type: 'string', validation: (r) => r.required() }, { name: 'publisher', type: 'string' }, { name: 'url', type: 'url', validation: (r) => r.required().uri({ scheme: ['http', 'https'] }) }] })] }),
    defineField({ name: 'relatedGuides', type: 'array', group: 'distribution', of: [defineArrayMember({ type: 'reference', to: [{ type: 'guide' }] })] }),
    defineField({ name: 'cta', title: 'Call to action', type: 'object', group: 'distribution', fields: [{ name: 'enabled', type: 'boolean', initialValue: false }, { name: 'label', type: 'string' }, { name: 'url', type: 'url' }] }),
    defineField({ name: 'seoTitle', type: 'string', group: 'seo', validation: (r) => r.max(60) }),
    defineField({ name: 'seoDescription', type: 'text', rows: 3, group: 'seo', validation: (r) => r.max(160) }),
    defineField({ name: 'noindex', type: 'boolean', group: 'seo', initialValue: false }),
    defineField({ name: 'editorialStatus', type: 'string', group: 'editorial', initialValue: 'draft', options: { list: ['draft', 'in-review', 'approved'] } }),
    defineField({ name: 'editorialNotes', type: 'text', rows: 3, group: 'editorial' }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'heroImage' } },
});
