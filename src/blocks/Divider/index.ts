import type { Block } from 'payload/types'

export const Divider: Block = {
  slug: 'divider',
  fields: [
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
  ],
}
