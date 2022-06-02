import { useState } from 'react'
import { Story } from '@storybook/react'
import Button from '../../button'

import Select, { Props } from '.'

const options = new Array(30)
  .fill(null)
  .map((item, index) => ({ value: `${index}`, label: `Item ${index}` }))

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState('')
  return (
    <Select
      {...args}
      value={val}
      onChange={({ value }) => {
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
