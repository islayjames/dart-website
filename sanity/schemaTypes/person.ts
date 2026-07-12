import { defineField, defineType } from 'sanity';
export const personType = defineType({
  name: 'person', title: 'Person', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', title: 'Role / credentials', type: 'string' }),
    defineField({ name: 'bio', title: 'Short bio', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'name', subtitle: 'role' } },
});
