import type { Block } from 'payload/types'

import { backgroundColor } from '../../fields/backgroundColor'

export const IndexHero: Block = {
  slug: 'indexHero',
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
}
