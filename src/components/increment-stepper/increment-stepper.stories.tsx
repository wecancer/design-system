import React, { useState } from 'react'
import { Story } from '@storybook/react'
import IncrementStepper, { Props } from '.'

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState(0)
  return (
    <IncrementStepper
      {...args}
      value={val}
      onChange={({ value }) => setValue(value)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  min: -10,
  max: 100,
}

export default {
  title: 'Components/IncrementStepper',
  component: IncrementStepper,
  argTypes: {
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}
