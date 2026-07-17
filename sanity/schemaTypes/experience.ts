import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for manual sorting. Lower numbers appear first.',
    }),
    defineField({ name: 'company', type: 'string', title: 'Company' }),
    defineField({ name: 'role', type: 'string', title: 'Role' }),
    defineField({ name: 'startDate', type: 'string', title: 'Start Date' }),
    defineField({ name: 'endDate', type: 'string', title: 'End Date', description: 'e.g. "Present"' }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'summary', type: 'text', title: 'Summary' }),
    defineField({
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'link', type: 'url', title: 'Link' }),
  ],
})
