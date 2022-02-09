import React from 'react'
import {Story} from '@storybook/react'
import TextArea, {Props} from '.'

const Template: Story<Props> = (args) => <TextArea {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Text area',
  id: 'label-id',
  infoMessage: '',
  infoType: undefined,
  onClear: () => null,
  onChange: () => null,
}

export default {
  title: 'Components/Form/Textarea',
  component: TextArea,
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    infoType: {
      control: {
        type: 'select',
        options: ['success', 'error', 'caption'],
      },
    },
  },
}
