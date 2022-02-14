import React from 'react'
import { Story } from '@storybook/react'
import Dropdown, { Props, ActionParams } from '.'

const Template: Story<Props> = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  children: () => <p>Children</p>,
  trigger({ handleToggle, isOpen }: ActionParams) {
    return (
      <button type="button" onClick={handleToggle}>
        {isOpen ? 'Close it!' : 'Open it!'}
      </button>
    )
  },
}

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    axisX: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
}
