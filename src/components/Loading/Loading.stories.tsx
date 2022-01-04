import React from 'react'
import {Story} from '@storybook/react'
import Loading, {Props} from '.'

const Template: Story<Props> = (args) => <Loading {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'solid',
  size: '1rem',
  color: 'primary',
}

export default {
  title: 'Components/Loading',
  component: Loading,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['dots', 'solid'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['1rem', '2rem', '3rem', '4rem', '5rem'],
      },
    },
  },
}
