import { useState } from 'react'
import { Story } from '@storybook/react'
import Button from '../../button'

import Select, { Props } from '.'
import { SelectOption } from './types'

const generateOptionsFrom = (fromIndex: number) =>
  new Array(20).fill(null).map<SelectOption>((el, i) => ({
    label: `Item ${i + fromIndex}`,
    value: `${i + fromIndex}`,
  })) as SelectOption[]

const options = generateOptionsFrom(0)

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState('')

  return (
    <Select
      {...args}
      value={val}
      onChange={({ value }) => {
        setValue(value)
      }}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  options,
  value: options[1]?.value,
  label: 'Select item',
}

const RequiredTemplate: Story<Props> = (args) => {
  const [val, setValue] = useState('')

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Select {...args} value={val} onChange={({ value }) => setValue(value)} />
      <br />
      <Button type="submit" primary onClick={() => null}>
        Test required submit
      </Button>
    </form>
  )
}

export const Required = RequiredTemplate.bind({})
Required.args = {
  options,
  label: 'Select item',
  required: true,
}

const InfinityScrollTemplate: Story<Props> = () => {
  const [value, setValue] = useState('')
  const [opts, setOpts] = useState<SelectOption[]>(generateOptionsFrom(0))

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Select
        value={value}
        options={opts}
        label="Scroll me"
        onChange={({ value: val }) => setValue(val)}
        onScrollEnd={() => {
          setOpts((prev) => [...prev, ...generateOptionsFrom(prev.length - 1)])
        }}
      />
    </form>
  )
}

export const InfinityScroll = InfinityScrollTemplate.bind({})

export default {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {},
}
