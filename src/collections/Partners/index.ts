import type { CollectionConfig } from 'payload/types'

export const Partners: CollectionConfig = {
  slug: 'partners',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'smallLogo',
      label: 'kleines Logo (wenn vorhanden)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'benefits',
      label: 'Vorteile',
      type: 'richText',
      required: true,
    },
    {
      name: 'howToGet',
      label: 'Wie Bekomme ich die Vorteile',
      type: 'richText',
      required: true,
    },
    {
      name: 'branches',
      type: 'relationship',
      label: 'Sparten',
      relationTo: 'branches',
      hasMany: true,
    },
  ],
}
