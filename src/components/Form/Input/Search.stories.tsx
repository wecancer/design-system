import React from 'react'
import {Story} from '@storybook/react'
import InputSearch, {Props} from './Search'

const Template: Story<Props> = (args) => <InputSearch {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Search',
  id: 'label-id',
}

export default {
  title: 'Components/Form/Input/Search',
  component: InputSearch,
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
  },
}
