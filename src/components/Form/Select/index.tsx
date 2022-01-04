import React from 'react'
import {useTheme} from 'styled-components'

import ReactSelect, {
  MultiValueRemoveProps,
  MultiValueGenericProps,
  DropdownIndicatorProps,
  components as SelectComponents,
} from 'react-select'

import Icon from '../../Icon'
import {Option, Options} from './types'
import selectStyles from './styles'

export const MultiValueContainer = (props: MultiValueGenericProps<Option>) => (
  <SelectComponents.MultiValueContainer {...props} />
)

export const DropdownIndicator = (props: DropdownIndicatorProps<Option, true>) => (
  <SelectComponents.DropdownIndicator {...props}>
    <Icon name="arrowDown" size={12} />
  </SelectComponents.DropdownIndicator>
)

export const MultiValueRemove = (props: MultiValueRemoveProps<Option, true>) => (
  <SelectComponents.MultiValueRemove {...props}>
    <Icon name="close" size={16} />
  </SelectComponents.MultiValueRemove>
)

type ChangeParams = {
  value: Option
}

export type Props = {
  value?: Option
  options: Options
  className?: string
  placeholder?: string
  onChange(args: ChangeParams): void
}

const Select = ({options, onChange, placeholder, className, value}: Props) => {
  const theme = useTheme()
  const styles = selectStyles(theme)

  return (
    <ReactSelect
      value={value}
      styles={styles}
      options={options}
      className={className}
      placeholder={placeholder}
      onChange={(val) => onChange({value: val as unknown as Option})}
      components={{MultiValueContainer, DropdownIndicator, MultiValueRemove}}
    />
  )
}

export default Select
