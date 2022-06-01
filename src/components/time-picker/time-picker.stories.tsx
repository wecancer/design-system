import React, { useState } from 'react'
import { Story } from '@storybook/react'
import TimePicker from '.'
import InputText from '../form/input/input'
import SelectGroup from '../form/select-group'

const options = [
  { value: '1', label: 'Item 1' },
  { value: '2', label: 'Item 2' },
  { value: '3', label: 'Item 3' },
]

const Template: Story = (args) => {
  const [value, onChange] = useState('00:00')
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
  label: 'Time',
}

const OverlapTemplate: Story = (args) => {
  const [val, setVal] = useState('00:00')
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TimePicker
        {...args}
        value={val}
        onChange={(params) => setVal(params.value)}
      />
      <br />
      <InputText
        type="text"
        value="Testing if is overlapping the input"
        onChange={() => {}}
      />
      <br></br>
      <SelectGroup value={options} label="test select" onChange={() => {}} />
    </form>
  )
}

export const Overlap = OverlapTemplate.bind({})
Overlap.args = {
  label: 'Time',
}

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
}
