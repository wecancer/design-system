import React from 'react'
import { Story } from '@storybook/react'
import InputText, { Props } from './text'
import { iconsMap } from '../../icon'

const Template: Story<Props> = (args) => <InputText {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Input text',
  id: 'label-id',
}

export default {
  title: 'Components/Form/Input/Text',
  component: InputText,
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
