import React from 'react'
import {Story} from '@storybook/react'
import Stepper, {Props} from '.'

const Template: Story<Props> = (args) => <Stepper {...args} />

const items = [
  {id: '1', label: 'Step 1'},
  {id: '2', label: 'Step 2'},
  {id: '3', label: 'Step 3'},
]

export const Default = Template.bind({})
Default.args = {items}

export default {
  title: 'Components/Stepper',
  component: Stepper,
}
