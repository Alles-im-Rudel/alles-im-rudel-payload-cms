import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { formatAppURL, revalidatePage } from '../../hooks/revalidatePage'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  hooks: {
    beforeChange: [populatePublishedDate],
    afterRead: [populateArchiveBlock],
    afterChange: [revalidatePage],
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
      label: 'Überschrift',
      required: true,
    },
    {
      name: 'text',
      type: 'richText',
      label: 'Text',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'startAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'endAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
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
      name: 'author',
      type: 'relationship',
      label: 'Autor',
      relationTo: 'board-member',
      required: true,
    },
    {
      name: 'tag',
      label: 'Tag',
      type: 'select',
      defaultValue: 'allgemein',
      options: [
        {
          value: 'allgemein',
          label: 'Allgemein',
        },
        {
          value: 'airsoft',
          label: 'Airsoft',
        },
        {
          value: 'gaming',
          label: 'Gaming',
        },
      ],
      required: true,
    },
    slugField(),
  ],
}
