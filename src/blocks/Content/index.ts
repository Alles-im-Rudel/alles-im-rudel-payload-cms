import type { Block, Field } from 'payload/types'

import { backgroundColor } from '../../fields/backgroundColor'
import link from '../../fields/link'
import richText from '../../fields/richText'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    label: 'Größe',
    defaultValue: 'full',
    options: [
      {
        value: 'oneQuarter',
        label: 'Ein Viertel',
      },
      {
        value: 'oneThird',
        label: 'Ein Drittel',
      },
      {
        value: 'half',
        label: 'Hälfte',
      },
      {
        value: 'twoThirds',
        label: 'Zwei Drittel',
      },
      {
        value: 'full',
        label: 'Komplett',
      },
    ],
  },
  richText(),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  fields: [
    backgroundColor({}),
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
