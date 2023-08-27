import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'

export const BoardMembersFields: CollectionConfig['fields'] = [
  {
    name: 'name',
    type: 'text',
  },
  {
    name: 'birthday',
    label: 'Geburtstag',
    type: 'date',
  },
  {
    name: 'image',
    label: 'Bild',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'instagramLink',
    label: 'Instagram Link',
    type: 'text',
  },
  {
    name: 'snapchatLink',
    label: 'Snapchat Link',
    type: 'text',
  },
  {
    name: 'linkedinLink',
    label: 'Linkedin Link',
    type: 'text',
  },
  {
    name: 'roles',
    type: 'select',
    hasMany: true,
    saveToJWT: true,
    defaultValue: ['user'],
    options: [
      {
        label: 'admin',
        value: 'admin',
      },
      {
        label: 'user',
        value: 'user',
      },
    ],
    access: {
      read: admins,
      create: admins,
      update: admins,
    },
  },
]

const BoardMembers: CollectionConfig = {
  slug: 'board-members',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  access: {
    read: anyone,
    create: admins,
    update: admins,
    delete: admins,
  },
  auth: true,
  fields: BoardMembersFields,
  timestamps: true,
}

export default BoardMembers
