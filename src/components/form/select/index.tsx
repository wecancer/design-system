import React from 'react'

import { SelectOption, SelectOptions } from './types'
import GenericSelect from './generic-select'
import { SingleValue } from 'react-select'

type ChangeParams = {
  value: string
  option: SelectOption
}

export type Props = {
  value: string
  label?: string
  options?: SelectOptions
  onFocus?(): void
  required?: boolean
  className?: string
  onMenuOpen?(): void
  onChange(args: ChangeParams): void
}

const Select = ({
  label,
  value,
  onFocus,
  onChange,
  className,
  onMenuOpen,
  options = [],
  required = false,
}: Props) => {
  const selected = value
    ? options.find((item) => item?.value === value)
    : undefined

  return (
    <GenericSelect
      label={label}
      value={selected}
      onFocus={onFocus}
      options={options}
      required={required}
      onChange={(option: SingleValue<SelectOption>) =>
        onChange({ value: `${option?.value}`, option })
      }
      className={className}
      onMenuOpen={onMenuOpen}
    />
  )
}

export default Select
