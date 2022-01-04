import React from 'react'
import {Story} from '@storybook/react'
import Modal, {Props} from '.'

const Template: Story<Props> = (args) => (
  <Modal {...args}>
    <p>
      Etiam vitae fringilla mauris, eget laoreet tellus. Nunc et quam a turpis ornare pretium. Nullam sed fringilla
      mauris. Proin fermentum ullamcorper velit at lobortis.
    </p>
  </Modal>
)

export const Default = Template.bind({})
Default.args = {
  title: 'The modal title',
  isOpen: true,
}

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
  },
}
