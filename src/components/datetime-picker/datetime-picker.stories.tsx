import React, { useState } from 'react'
import { Story } from '@storybook/react'
import DateTimePicker from '.'

const Template: Story = (args) => {
  const [dateTime, setDateTime] = useState(new Date(0, 0, 0, 10, 10, 10, 0))

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
  labelTimePicker: 'Time',
  labelDatePicker: 'Date',
  id: 'datetime-picker-id',
}

const ShowValueTemplate: Story = (args) => {
  const [dateTime, setDateTime] = useState(new Date(0, 0, 0, 10, 10, 10, 0))
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateTimePicker
        {...args}
        datetime={dateTime}
        onChange={({ value }) => setDateTime(value)}
      />
      <br />
      <p>
        <mark>The component's date is:</mark> {dateTime.toString()}
      </p>
    </form>
  )
}

export const ShowValue = ShowValueTemplate.bind({})
ShowValue.args = {
  labelTimePicker: 'Time',
  labelDatePicker: 'Date',
  id: 'datetime-picker-id',
}

export default {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
}
