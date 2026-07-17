import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'techStack',
  title: 'Tech Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for manual sorting. Lower numbers appear first.',
    }),
    defineField({ name: 'key', type: 'string', title: 'Key (Icon name prefix)' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'href', type: 'url', title: 'Link' }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'theme', type: 'boolean', title: 'Requires Light/Dark Theme Icons' }),
  ],
})
