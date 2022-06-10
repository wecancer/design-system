import React from 'react'
import { Story } from '@storybook/react'
import DropdownPanel, { Props } from '.'

const Template: Story<Props> = () => (
  <DropdownPanel
    label="click me"
    items={[
      { label: 'item 1', id: '1' },
      {
        label: 'item 2',
        id: '2',
        onClick({ handleClose }) {
          console.log('handle event and close it')
          handleClose()
        },
      },
      { label: 'item 3', id: '3' },
      { label: 'item 4', id: '4' },
    ]}
  />
)

export const Default = Template.bind({})

export default {
  title: 'Components/Dropdown/Panel',
  component: DropdownPanel,
}
