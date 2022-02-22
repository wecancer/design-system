import React from 'react'
import { Story } from '@storybook/react'
import Button, { Props } from '.'

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "I'm a button",
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    primary: {
      control: {
        type: 'boolean',
      },
    },
    secondary: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
    success: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
}
