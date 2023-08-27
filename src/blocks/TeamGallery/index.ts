import type { Block } from 'payload/types'

export const TeamGallery: Block = {
  slug: 'team-gallery',
  fields: [
    {
      name: 'items',
      label: 'Teammitglied',
      type: 'array',
      minRows: 2,
      fields: [
        {
          name: 'callName',
          type: 'text',
          label: 'Rufname',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          label: 'Position',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link (Airsoft verzeichnis)',
        },
        {
          name: 'joinedAt',
          type: 'date',
          label: 'Beigetreten am',
          required: true,
        },
        {
          name: 'image',
          label: 'Bild',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'playerBadges',
          type: 'relationship',
          label: 'Badges',
          relationTo: 'player-badges',
          hasMany: true,
        },
      ],
    },
  ],
}
