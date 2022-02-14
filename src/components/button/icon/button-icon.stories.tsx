import React from 'react'
import { Story } from '@storybook/react'
import ButtonIcon, { Props } from '.'

const Template: Story<Props> = (args) => <ButtonIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: 'check',
}

export default {
  title: 'Components/Button/Icon',
  component: ButtonIcon,
  argTypes: {
    primary: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
  },
}
