import type { Field, SelectField } from 'payload/types'

import deepMerge from '../utilities/deepMerge'

interface Args {
  overrides?: Partial<SelectField>
}

export const backgroundColor = ({ overrides = {} }: Args): Field =>
  deepMerge(
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      options: [
        {
          label: 'primary',
          value: 'primary',
        },
        {
          label: 'darkGrey',
          value: 'darkGrey',
        },
        {
          label: 'greyBlue',
          value: 'greyBlue',
        },
        {
          label: 'secondary',
          value: 'secondary',
        },
        {
          label: 'yellow',
          value: 'yellow',
        },
        {
          label: 'black',
          value: 'black',
        },
        {
          label: 'error',
          value: 'error',
        },
        {
          label: 'info',
          value: 'info',
        },
        {
          label: 'success',
          value: 'success',
        },
        {
          label: 'warning',
          value: 'warning',
        },
        {
          label: 'white',
          value: 'white',
        },
      ],
    },
    overrides,
  )
