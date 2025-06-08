import type { CollectionConfig } from 'payload'

export const Years: CollectionConfig = {
  slug: 'years',
  access: {
    create: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
    read: () => true, // Public read access
    update: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    useAsTitle: 'title',
    group: 'Reference Data',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (typeof value === 'string') {
              return value
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
                .toLowerCase()
            }

            // Auto-generate from title if no slug provided
            if (data?.title && typeof data.title === 'string') {
              return data.title
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
                .toLowerCase()
            }
          },
        ],
      },
      index: true,
      unique: true,
    },
  ],
}
