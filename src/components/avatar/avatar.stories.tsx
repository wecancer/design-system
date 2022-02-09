import React from 'react'
import {Story} from '@storybook/react'

import Avatar, {Props} from '.'

const Template: Story<Props> = (args) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  size: 48,
  src: 'https://randomuser.me/api/portraits/women/42.jpg',
  initials: 'ANA',
}

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['online', 'busy', 'away'],
      },
    },
  },
}
