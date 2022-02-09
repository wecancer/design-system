import React from 'react'
import {Story} from '@storybook/react'
import RadioGroup, {Props} from './group'

const Template: Story<Props> = (args) => <RadioGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    {id: '1', isChecked: false, label: 'Label 01'},
    {id: '2', isChecked: false, label: 'Label 02'},
    {id: '3', isChecked: false, label: 'Label 03'},
  ],
}

export default {
  title: 'Components/Form/Radio/Group',
  component: RadioGroup,
  argTypes: {
    line: {
      control: {
        type: 'select',
        options: ['row', 'line'],
      },
    },
  },
}
