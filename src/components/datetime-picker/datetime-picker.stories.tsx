import React, { useState } from 'react'
import { Story } from '@storybook/react'
import DateTimePicker from '.'

const Template: Story = (args) => {
  const [dateTime, setDateTime] = useState(new Date())

  return (
    <DateTimePicker
      {...args}
      datetime={dateTime}
      onChange={({ value }) => setDateTime(value)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  id: 'datetime-picker-id',
}

export default {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
}
