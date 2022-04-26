import React from 'react'
import { MultiValue } from 'react-select'

import GenericSelect from '../select/generic-select'
import { Props as SelectProps } from '../select'
import { Options, Option } from '../select/types'

type ChangeParams = {
  value: Options
}

export type Props = Omit<SelectProps, 'value' | 'onChange'> & {
  value?: Options
  onChange(args: ChangeParams): void
}

const SelectGroup = ({
  value,
  label,
  options,
  onChange,
  required,
  className,
}: Props) => {
  return (
    <GenericSelect
      isMulti
      label={label}
      value={value}
      options={options}
      required={required}
      className={className}
      closeMenuOnSelect={false}
      onChange={(val: MultiValue<Option>) =>
        onChange({ value: val as Options })
      }
    />
  )
}

export default SelectGroup
