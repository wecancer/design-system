import React from 'react'
import {Story} from '@storybook/react'
import ConfirmModal, {Props} from './Confirm'

const Template: Story<Props> = (args) => <ConfirmModal {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'The confirm modal',
  isOpen: true,
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel',
  children: (
    <p>
      Etiam vitae fringilla mauris, eget laoreet tellus. Nunc et quam a turpis ornare pretium. Nullam sed fringilla
      mauris. Proin fermentum ullamcorper velit at lobortis.
    </p>
  ),
}

export default {
  title: 'Components/Modal/Confirm',
  component: ConfirmModal,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
}
