import React, { useState } from 'react'
import { Story } from '@storybook/react'
import SelectMulti, { Props } from '.'
import { SelectOption } from '../select/types'

const generateOptionsFrom = (fromIndex: number) =>
  new Array(12).fill(null).map<SelectOption>((el, i) => ({
    label: `Item ${i + fromIndex}`,
    value: `${i + fromIndex}`,
  })) as SelectOption[]

const testOptions = [
  { label: 'test1', value: 'valueTest1', disabled: true },
  { label: 'test2', value: 'valueTest2', disabled: false },
  { label: 'test3', value: 'valueTest3', disabled: false },
  { label: 'test4', value: 'valueTest4', disabled: false },
  { label: 'test5', value: 'valueTest5', disabled: false },
  { label: 'test6', value: 'valueTest6', disabled: false },
  { label: 'test7', value: 'valueTest7', disabled: true },
  { label: 'test8', value: 'valueTest8', disabled: true },
]

const allValues = [
  { label: 'test1', value: 'valueTest1', disabled: true },
  { label: 'test2', value: 'valueTest2', disabled: false },
  { label: 'test3', value: 'valueTest3', disabled: false },
  { label: 'test4', value: 'valueTest4', disabled: false },
  { label: 'test5', value: 'valueTest5', disabled: false },
  { label: 'test6', value: 'valueTest6', disabled: false },
  { label: 'test7', value: 'valueTest7', disabled: true },
  { label: 'test8', value: 'valueTest8', disabled: true },
  { label: 'test9', value: 'valueTest9', disabled: true },
  { label: 'test10', value: 'valueTest10', disabled: false },
  { label: 'test11', value: 'valueTest11', disabled: false },
  { label: 'test12', value: 'valueTest12', disabled: false },
  { label: 'test13', value: 'valueTest13', disabled: false },
  { label: 'test14', value: 'valueTest14', disabled: false },
  { label: 'test15', value: 'valueTest15', disabled: true },
  { label: 'test16', value: 'valueTest16', disabled: true },
  { label: 'test17', value: 'valueTest17', disabled: true },
  { label: 'test18', value: 'valueTest18', disabled: false },
  { label: 'test19', value: 'valueTest19', disabled: false },
  { label: 'test20', value: 'valueTest20', disabled: false },
]

const options = generateOptionsFrom(0)

const Template: Story<Props> = (args) => {
  const [val, setValue] = useState(args.value)

  return (
    <SelectMulti
      {...args}
      allValues={allValues}
      options={testOptions}
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
        hasSelectAll
        allValues={allValues}
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
