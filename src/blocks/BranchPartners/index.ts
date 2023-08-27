import type { Block } from 'payload/types'

export const BranchPartners: Block = {
  slug: 'branch-partners',
  fields: [
    {
      name: 'items',
      label: 'Partner / Sponsoren',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'parnter',
          type: 'relationship',
          relationTo: 'partners',
          hasMany: true,
          required: true,
        },
      ],
    },
  ],
}
