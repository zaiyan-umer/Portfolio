import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'courseCategory',
  title: 'Course Category',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for manual sorting. Lower numbers appear first.',
    }),
    defineField({ name: 'categoryKey', type: 'string', title: 'Category Key (e.g. software)' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
