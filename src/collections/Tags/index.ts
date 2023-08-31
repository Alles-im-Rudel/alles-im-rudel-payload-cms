import type { CollectionConfig } from 'payload/types'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'color',
      label: 'Tag',
      type: 'select',
      defaultValue: 'secondary',
      options: [
        {
          value: 'secondary',
          label: 'Allgemein',
        },
        {
          value: 'gaming',
          label: 'Gaming',
        },
        {
          value: 'eSports',
          label: 'E-Sports',
        },
        {
          value: 'airsoft',
          label: 'Airsoft',
        },
      ],
      required: true,
    },
  ],
}
