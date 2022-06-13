import React from 'react'
import { Story } from '@storybook/react'
import DropdownIcon, { Props } from '.'

const Template: Story<Props> = () => (
  <DropdownIcon
    items={[
      { label: 'My profile', id: '1' },
      {
        label: 'Close menu',
        id: '2',
        onClick({ handleClose }) {
          handleClose()
        },
      },
      { label: 'Remove it', id: '3', textColor: 'error' },
    ]}
  />
)

export const Default = Template.bind({})

export default {
  title: 'Components/Dropdown/Icon',
  component: DropdownIcon,
}
