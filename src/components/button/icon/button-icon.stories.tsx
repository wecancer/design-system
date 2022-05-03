import React from 'react'
import { Story } from '@storybook/react'
import ButtonIcon, { Props } from '.'
import { iconsMap } from '../../icon'

const sizes = ['small', 'medium', 'large']

const Template: Story<Props> = (args) => <ButtonIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: 'check',
}

export default {
  title: 'Components/Button/Icon',
  component: ButtonIcon,
  argTypes: {
    primary: {
      control: {
        type: 'boolean',
      },
    },
    isActive: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: sizes,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconsMap),
      },
    },
    color: {
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
