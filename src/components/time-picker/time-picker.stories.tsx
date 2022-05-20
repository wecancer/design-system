import React, { useState } from 'react'
import { Story } from '@storybook/react'
import InputTimePicker from '.'

const Template: Story = (args) => {
  const [value, onChange] = useState('')
  return (
    <InputTimePicker
      {...args}
      value={value}
      onChange={(params) => onChange(params.value)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  id: 'timepicker-id',
}

export default {
  title: 'Components/InputTimePicker',
  component: InputTimePicker,
}
