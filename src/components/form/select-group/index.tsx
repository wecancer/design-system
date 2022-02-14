import React from 'react'
import { useTheme } from 'styled-components'
import Select from 'react-select'

import selectStyles from '../select/styles'
import {
  MultiValueRemove,
  DropdownIndicator,
  MultiValueContainer,
  Props as SelectProps,
} from '../select'
import { Options } from '../select/types'

type ChangeParams = {
  value: Options
}

export type Props = Omit<SelectProps, 'value' | 'onChange'> & {
  value?: Options
  onChange(args: ChangeParams): void
}

const SelectGroup = ({ options, onChange, className, value }: Props) => {
  const theme = useTheme()
  const styles = selectStyles(theme)

  return (
    <Select
      isMulti
      value={value}
      styles={styles}
      options={options}
      className={className}
      closeMenuOnSelect={false}
      onChange={(val) => onChange({ value: val as Options })}
      components={{ MultiValueContainer, DropdownIndicator, MultiValueRemove }}
    />
  )
}

export default SelectGroup
