import React from 'react'
import { Story } from '@storybook/react'
import InputTimePicker from '.'

const Template: Story = (args) => {
  return <InputTimePicker {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'HH:mm',
  id: 'label-id',
}

export default {
  title: 'Components/InputTimePicker',
  component: InputTimePicker,
}
