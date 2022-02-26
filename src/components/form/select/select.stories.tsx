import { useState } from 'react'
import { Story } from '@storybook/react'
import Button from '../../button'

import Select, { Props } from '.'

const options = [
  { value: '1', label: 'Item 1' },
  { value: '2', label: 'Item 2' },
  { value: '3', label: 'Item 3' },
  { value: '4', label: 'Item 4' },
]

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState('')
  return (
    <Select
      {...args}
      value={val}
      onChange={({ value, option }) => {
        console.log(value, option)
        setValue(value)
      }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  options,
  value: options[1].value,
  label: 'Select item',
}

const RequiredTemplate: Story<Props> = (args) => {
  const [val, setValue] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Select {...args} value={val} onChange={({ value }) => setValue(value)} />
      <br />
      <Button type="submit" primary onClick={() => null}>
        Test required submit
      </Button>
    </form>
  )
}

export const Required = RequiredTemplate.bind({})
Required.args = {
  options,
  label: 'Select item',
  required: true,
}

export default {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {},
}
