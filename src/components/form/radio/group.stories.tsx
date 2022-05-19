import React, { useState } from 'react'
import { Story } from '@storybook/react'
import RadioGroup, { Props } from './group'
import { RadioItem } from '.'

const Template: Story<Props> = (args) => {
  const [items, setItems] = useState<RadioItem[]>([
    { id: '1', isChecked: false, label: 'Label 01' },
    { id: '2', isChecked: false, label: 'Label 02' },
    { id: '3', isChecked: false, label: 'Label 03' },
  ])

  return (
    <RadioGroup
      {...args}
      items={items}
      onChange={({ itemsUpdated }) => setItems(itemsUpdated)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  line: 'row',
}

export default {
  title: 'Components/Form/Radio/Group',
  component: RadioGroup,
  argTypes: {
    line: {
      control: {
        type: 'select',
        options: ['row', 'line'],
      },
    },
  },
}
