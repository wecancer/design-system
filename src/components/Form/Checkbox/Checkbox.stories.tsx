import React from 'react'
import {Story} from '@storybook/react'
import Checkbox, {Props} from '.'

const Template: Story<Props> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Checkbox',
}

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  argTypes: {
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isChecked: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
}
