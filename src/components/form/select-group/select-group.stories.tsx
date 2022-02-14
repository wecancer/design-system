import React, { useState } from 'react'
import { Story } from '@storybook/react'
import SelectMulti, { Props } from '.'

const options = [
  { value: '1', label: 'Item 1' },
  { value: '2', label: 'Item 2' },
  { value: '3', label: 'Item 3' },
  { value: '4', label: 'Item 4' },
]

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState(args.value)
  return (
    <SelectMulti
      {...args}
      value={val}
      onChange={({ value }) => setValue(value)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  value: [options[0], options[2]],
  options,
}

export default {
  title: 'Components/Form/SelectGroup',
  component: SelectMulti,
  argTypes: {
    placeholder: {
      type: 'string',
    },
  },
}
