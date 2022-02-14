import React from 'react'
import { Story } from '@storybook/react'
import Radio, { Props } from '.'

const Template: Story<Props> = (args) => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Radio',
}

export default {
  title: 'Components/Form/Radio',
  component: Radio,
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
