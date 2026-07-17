import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for manual sorting. Lower numbers appear first.',
    }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'issuedBy', type: 'string', title: 'Issued By' }),
    defineField({ name: 'img', type: 'string', title: 'Image URL' }),
    defineField({ name: 'issuedAt', type: 'string', title: 'Issued At' }),
    defineField({ name: 'credentialId', type: 'string', title: 'Credential ID' }),
    defineField({ name: 'link', type: 'url', title: 'Link' }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
