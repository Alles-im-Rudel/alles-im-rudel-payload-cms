import type { CollectionConfig } from 'payload/types'

import { Archive } from '../../blocks/Archive'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { Divider } from '../../blocks/Divider'
import { FormBlock } from '../../blocks/Form'
import { Gallery } from '../../blocks/Gallery'
import { IndexHero } from '../../blocks/Hero'
import { BranchHero } from '../../blocks/Hero/BranchHero'
import { MediaBlock } from '../../blocks/Media'
import { TeamGallery } from '../../blocks/TeamGallery'
import { slugField } from '../../fields/slug'
import { formatAppURL } from '../../hooks/revalidatePage'

export const Branches: CollectionConfig = {
  slug: 'branches',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
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
      required: true,
      blocks: [BranchHero, Content, Divider, Gallery, TeamGallery],
    },
    slugField(),
  ],
}
