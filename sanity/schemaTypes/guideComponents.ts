import { defineArrayMember, defineField, defineType } from 'sanity';

export const guideDecisionMapType = defineType({
  name: 'guideDecisionMap',
  title: 'Decision map',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'intro', type: 'text', rows: 3 }),
    defineField({
      name: 'groups', type: 'array', validation: (rule) => rule.required().min(1), of: [defineArrayMember({
        type: 'object', fields: [
          defineField({ name: 'heading', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'note', type: 'string' }),
          defineField({ name: 'items', type: 'array', validation: (rule) => rule.required().min(1), of: [defineArrayMember({
            type: 'object', fields: [
              defineField({ name: 'anchor', description: 'Optional in-page target without #', type: 'string' }),
              defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
              defineField({ name: 'subtitle', type: 'string', validation: (rule) => rule.required() }),
              defineField({ name: 'meta', type: 'string' }),
              defineField({ name: 'muted', type: 'boolean', initialValue: false }),
            ],
          })] }),
        ],
      })] }),
    defineField({ name: 'note', type: 'string' }),
  ],
  preview: { select: { title: 'title', subtitle: 'eyebrow' } },
});

export const guideLineupType = defineType({
  name: 'guideLineup',
  title: 'Lineup guide',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'intro', type: 'text', rows: 3 }),
    defineField({
      name: 'groups', type: 'array', validation: (rule) => rule.required().min(1), of: [defineArrayMember({
        type: 'object', fields: [
          defineField({ name: 'heading', type: 'string', validation: (rule) => rule.required() }),
          defineField({ name: 'items', type: 'array', validation: (rule) => rule.required().min(1), of: [defineArrayMember({
            type: 'object', fields: [
              defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
              defineField({ name: 'location', type: 'string', validation: (rule) => rule.required() }),
              defineField({ name: 'meta', type: 'string' }),
            ],
          })] }),
        ],
      })] }),
    defineField({ name: 'note', type: 'string' }),
  ],
  preview: { select: { title: 'title', subtitle: 'eyebrow' } },
});

export const guideTableType = defineType({
  name: 'guideTable',
  title: 'Accessible comparison table',
  type: 'object',
  fields: [
    defineField({ name: 'caption', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'columns', type: 'array', validation: (rule) => rule.required().min(2), of: [defineArrayMember({ type: 'string' })] }),
    defineField({
      name: 'rows', type: 'array', validation: (rule) => rule.required().min(1), of: [defineArrayMember({
        type: 'object', fields: [
          defineField({ name: 'anchor', description: 'Optional stable row ID without #', type: 'string' }),
          defineField({ name: 'cells', type: 'array', validation: (rule) => rule.required().min(2), of: [defineArrayMember({ type: 'string' })] }),
        ],
      })],
    }),
  ],
  preview: { select: { title: 'caption' } },
});
