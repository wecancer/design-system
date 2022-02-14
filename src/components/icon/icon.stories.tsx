import React from 'react'
import { Story } from '@storybook/react'
import Icon, { Props, iconsMap } from '.'

const Template: Story<Props> = (args) => <Icon name={args.name} />

export const Default = Template.bind({})
Default.args = {
  name: 'check',
}

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: Object.keys(iconsMap),
      },
    },
  },
}
