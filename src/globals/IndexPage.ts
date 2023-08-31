import type { GlobalConfig } from 'payload/types'

import { backgroundColor } from '../fields/backgroundColor'

export const IndexPage: GlobalConfig = {
  slug: 'index-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'group',
      label: 'Hero',
      name: 'hero',
      fields: [
        backgroundColor({ overrides: { name: 'mediaBlockBackgroundColor' } }),
        {
          name: 'headline',
          label: 'Überschrift',
          type: 'text',
        },
        {
          name: 'subline',
          label: 'Subline',
          type: 'text',
        },
        {
          name: 'text',
          label: 'Text',
          type: 'textarea',
        },
        {
          name: 'imageRight',
          label: 'Bild Rechts',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'imageLeft',
          label: 'Bild Links',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'imageLogo',
          label: 'Logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      type: 'array',
      label: 'Grid Texte',
      name: 'grid',
      minRows: 8,
      maxRows: 8,
      fields: [
        {
          name: 'text',
          label: 'Text',
          type: 'text',
        },
      ],
    },
  ],
}
