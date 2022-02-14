import React from 'react'
import { Story } from '@storybook/react'

import Pill, { Props } from '.'

const Template: Story<Props> = (args) => <Pill {...args} />

export const Default = Template.bind({})

Default.args = {
  isActive: false,
  label: 'The pill',
  fillColor: 'primary',
}

const sizes = ['small', 'medium', 'large']

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizes,
      },
    },
    isActive: {
      control: {
        type: 'boolean',
      },
    },
    isChecked: {
      control: {
        type: 'boolean',
      },
    },
    hasClose: {
      control: {
        type: 'boolean',
      },
    },
    fillColor: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'green',
          'blue',
          'turquoise',
          'violet',
          'pink',
          'orange',
          'purple',
          'yellow',
          'magenta',
          'success',
          'warning',
          'error',
        ],
      },
    },
  },
}
