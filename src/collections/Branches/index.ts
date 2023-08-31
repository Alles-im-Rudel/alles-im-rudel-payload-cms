import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { Content } from '../../blocks/Content'
import { Divider } from '../../blocks/Divider'
import { Gallery } from '../../blocks/Gallery'
import { BranchHero } from '../../blocks/Hero/BranchHero'
import { TeamGallery } from '../../blocks/TeamGallery'
import { slugField } from '../../fields/slug'

export const Branches: CollectionConfig = {
  slug: 'branches',
  admin: {
    useAsTitle: 'displayName',
    defaultColumns: ['slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'displayName',
      type: 'text',
      label: 'Anzeigename',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Kurze beschreibung',
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
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
      required: true,
    },
    {
      name: 'leader',
      label: 'Spartenleiter',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Position',
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
          name: 'birthday',
          label: 'Geburtstag',
          type: 'date',
          required: true,
        },
      ],
    },
    {
      name: 'partners',
      type: 'relationship',
      label: 'Sponsoren',
      relationTo: 'partners',
      hasMany: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [BranchHero, Content, Divider, Gallery, TeamGallery],
    },
    slugField(),
  ],
}
