import React from 'react'
import {Story} from '@storybook/react'
import Input, {Props} from './input'
import {iconsMap} from '../../icon'

const Template: Story<Props> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  id: 'label-id',
  type: 'text',
}

export default {
  title: 'Components/Form/Input/Input',
  component: Input,
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password'],
      },
    },
    iconLeft: {
      control: {
        type: 'select',
        options: Object.keys(iconsMap),
      },
    },
  },
}
