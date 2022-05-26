import React, { useState } from 'react'
import { Story } from '@storybook/react'
import TextArea, { Props } from '.'
import Button from '../../button'

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

const RequiredTemplate: Story<Props> = (args) => {
  const [val, setValue] = useState('')
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextArea
        {...args}
        required
        value={val}
        onChange={({ value }) => setValue(value)}
      />
      <br />
      <Button type="submit" primary onClick={() => null}>
        Test required submit
      </Button>
    </form>
  )
}

export const Required = RequiredTemplate.bind({})
Required.args = {
  label: 'Type anything',
  required: true,
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
