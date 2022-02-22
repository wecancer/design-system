import { useState } from 'react'
import { Story } from '@storybook/react'

import Select, { Props } from '.'
import { Option } from './types'

const options = [
  { value: '1', label: 'Item 1' },
  { value: '2', label: 'Item 2' },
  { value: '3', label: 'Item 3' },
  { value: '4', label: 'Item 4' },
]

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState<Option>(null)
  return (
    <Select {...args} value={val} onChange={({ value }) => setValue(value)} />
  )
}

export const Default = Template.bind({})
Default.args = {
  options,
  value: options[1],
  label: 'Select item',
}

const RequiredTemplate: Story<Props> = (args) => {
  const [val, setValue] = useState<Option>(null)
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Select {...args} value={val} onChange={({ value }) => setValue(value)} />
      <button type="submit" onClick={() => null}>
        Enviar
      </button>
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
