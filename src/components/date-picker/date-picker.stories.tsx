import React, { useState } from 'react'
import { Story } from '@storybook/react'
import DatePicker, { Props, DatePickerValue } from '.'
import DatePickerRange, { Props as RangeProps, RangePickerValue } from './range'

const Template: Story<Props> = () => {
  const [date, setValue] = useState<DatePickerValue | undefined>(
    new Date(Date.now()),
  )
  return (
    <DatePicker
      label="Birthday"
      value={date}
      onChange={({ value }) => setValue(value)}
    />
  )
}
export const Default = Template.bind({})
Default.args = {
  fromYear: 2018,
  toYear: 2025,
}

const RangeTemplate: Story<RangeProps> = (args) => {
  const [date, setValue] = useState<RangePickerValue>({
    from: new Date(2020, 10, 10),
    to: new Date(2020, 11, 18),
  })
  return (
    <DatePickerRange
      {...args}
      value={date}
      onChange={({ value }) => setValue(value)}
    />
  )
}
export const Range = RangeTemplate.bind({})
Range.args = {
  fromYear: 2018,
  toYear: 2025,
  endLabel: 'End date',
  startLabel: 'Start date',
}

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
}
