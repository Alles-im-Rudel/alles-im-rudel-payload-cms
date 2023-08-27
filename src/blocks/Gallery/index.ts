import type { Block } from 'payload/types'

export const Gallery: Block = {
  slug: 'gallery',
  fields: [
    {
      name: 'items',
      label: 'Bilder',
      type: 'array',
      minRows: 2,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
