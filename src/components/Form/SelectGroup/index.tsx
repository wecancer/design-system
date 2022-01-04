import React from 'react'
import {useTheme} from 'styled-components'
import Select from 'react-select'

import selectStyles from '../Select/styles'
import {MultiValueRemove, DropdownIndicator, MultiValueContainer, Props as SelectProps} from '../Select'
import {Options} from '../Select/types'

type ChangeParams = {
  value: Options
}

export type Props = Omit<SelectProps, 'value' | 'onChange'> & {
  value?: Options
  onChange(args: ChangeParams): void
}

const SelectGroup = ({options, onChange, placeholder, className, value}: Props) => {
  const theme = useTheme()
  const styles = selectStyles(theme)

  return (
    <Select
      isMulti
      value={value}
      styles={styles}
      options={options}
      className={className}
      placeholder={placeholder}
      closeMenuOnSelect={false}
      onChange={(val) => onChange({value: val as Options})}
      components={{MultiValueContainer, DropdownIndicator, MultiValueRemove}}
    />
  )
}

export default SelectGroup
