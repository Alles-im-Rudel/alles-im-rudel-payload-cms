import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'

export const BoardMembersFields: CollectionConfig['fields'] = [
  {
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    name: 'birthday',
    label: 'Geburtstag',
    type: 'date',
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
    name: 'instagramLink',
    label: 'Instagram Link',
    type: 'text',
    required: true,
  },
  {
    name: 'snapchatLink',
    label: 'Snapchat Link',
    type: 'text',
    required: true,
  },
  {
    name: 'linkedinLink',
    label: 'Linkedin Link',
    type: 'text',
    required: true,
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
