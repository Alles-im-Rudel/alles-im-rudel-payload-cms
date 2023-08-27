import type { GlobalConfig } from 'payload/types'

import { backgroundColor } from '../fields/backgroundColor'
import link from '../fields/link'

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
          type: 'richText',
        },
        {
          name: 'text',
          label: 'Text',
          type: 'richText',
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
