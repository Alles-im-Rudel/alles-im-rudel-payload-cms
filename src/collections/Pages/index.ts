import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/Archive'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { Divider } from '../../blocks/Divider'
import { FormBlock } from '../../blocks/Form'
import { IndexHero } from '../../blocks/Hero'
import { MediaBlock } from '../../blocks/Media'
import { TeamGallery } from '../../blocks/TeamGallery'
import { slugField } from '../../fields/slug'
import { formatAppURL } from '../../hooks/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        CallToAction,
        Content,
        FormBlock,
        MediaBlock,
        Archive,
        IndexHero,
        Divider,
        TeamGallery,
      ],
    },
    slugField(),
  ],
}
