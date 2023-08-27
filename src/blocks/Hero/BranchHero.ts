import type { Block } from 'payload/types'

export const BranchHero: Block = {
  slug: 'branchHero',
  fields: [
    {
      name: 'headline',
      label: 'Überschrift',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Hintergrundbild',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
