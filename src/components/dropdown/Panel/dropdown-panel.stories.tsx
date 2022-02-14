import React from 'react'
import { Story } from '@storybook/react'
import DropdownPanel, { Props } from '.'

const Template: Story<Props> = (args) => <DropdownPanel {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Click me!',
  onChange: () => null,
  options: [
    { label: 'item 1', value: '1' },
    { label: 'item 2', value: '2' },
    { label: 'item 3', value: '3' },
    { label: 'item 4', value: '4' },
  ],
}

export default {
  title: 'Components/Dropdown/Panel',
  component: DropdownPanel,
}
