import React, {useState} from 'react'
import {Story} from '@storybook/react'

import Select, {Props} from '.'
import {Option} from './types'

const options = [
  {value: '1', label: 'Item 1'},
  {value: '2', label: 'Item 2'},
  {value: '3', label: 'Item 3'},
  {value: '4', label: 'Item 4'},
]

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState<Option>(null)
  return <Select {...args} value={val} onChange={({value}) => setValue(value)} />
}

export const Default = Template.bind({})
Default.args = {
  value: options[1],
  options,
  placeholder: 'Select an item...',
}

export default {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {
    placeholder: {
      type: 'string',
    },
  },
}
