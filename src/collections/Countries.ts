import type { CollectionConfig } from 'payload'

export const Countries: CollectionConfig = {
  slug: 'countries',
  labels: {
    singular: 'Country',
    plural: 'Countries',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'shortName'],
    group: 'Reference Data',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Country Name',
    },
    {
      name: 'shortName',
      type: 'text',
      required: true,
      label: 'Short Name',
    },
    {
      name: 'flag',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Flag',
    },
  ],
}
