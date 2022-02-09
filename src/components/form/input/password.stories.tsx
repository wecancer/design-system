import React from 'react'
import {Story} from '@storybook/react'
import InputPassword, {Props} from './password'
import {iconsMap} from '../../icon'

const Template: Story<Props> = (args) => <InputPassword {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Your password',
  id: 'label-id',
}

export default {
  title: 'Components/Form/Input/Password',
  component: InputPassword,
  argTypes: {
    value: {
      control: {
        type: 'text',
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
