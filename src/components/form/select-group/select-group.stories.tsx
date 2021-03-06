import React, { useState } from 'react'
import { Story } from '@storybook/react'
import SelectMulti, { Props } from '.'
import { SelectOption } from '../select/types'

const generateOptionsFrom = (fromIndex: number) =>
  new Array(12).fill(null).map<SelectOption>((el, i) => ({
    label: `Item ${i + fromIndex}`,
    value: `${i + fromIndex}`,
  })) as SelectOption[]

const options = generateOptionsFrom(0)

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState(args.value)
  return (
    <SelectMulti
      {...args}
      value={val}
      label="Select group"
      onChange={({ value }) => setValue(value)}
    />
  )
}

const InfinityScrollTemplate: Story<Props> = (args) => {
  const [value, setValue] = useState(args.value)
  const [count, setCount] = useState(12)
  const opts = generateOptionsFrom(0)

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <SelectMulti
        value={value}
        options={opts}
        label="Scroll me"
        onChange={({ value: val }) => setValue(val)}
        onLoadMore={(search) => {
          setCount((prev) => prev + 12)
          const newValues = generateOptionsFrom(count)
          return {
            options: newValues,
            hasMore: !search,
          }
        }}
      />
    </form>
  )
}

export const InfinityScroll = InfinityScrollTemplate.bind({})

export const Default = Template.bind({})
Default.args = {
  value: [options[0], options[2]],
  options,
}

export default {
  title: 'Components/Form/SelectGroup',
  component: SelectMulti,
  argTypes: {
    placeholder: {
      type: 'string',
    },
  },
}
