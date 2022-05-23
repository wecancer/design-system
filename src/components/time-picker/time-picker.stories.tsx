import React, { useState } from 'react'
import { Story } from '@storybook/react'
import TimePicker from '.'

const Template: Story = (args) => {
  const [value, onChange] = useState('')
  return (
    <TimePicker
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
  title: 'Components/TimePicker',
  component: TimePicker,
}
