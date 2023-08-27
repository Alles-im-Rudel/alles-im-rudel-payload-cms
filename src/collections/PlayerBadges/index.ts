import type { CollectionConfig } from 'payload/types'

import { slugField } from '../../fields/slug'

export const PlayerBadges: CollectionConfig = {
  slug: 'player-badges',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'image',
      label: 'Bild',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    slugField(),
  ],
}
