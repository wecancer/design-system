import React from 'react'

import { Option, Options } from './types'
import GenericSelect from './generic-select'
import { SingleValue } from 'react-select'

type ChangeParams = {
  value: string
  option: Option
}

export type Props = {
  value: string
  label?: string
  options: Options
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
  options,
  onChange,
  className,
  onMenuOpen,
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
      onChange={(option: SingleValue<Option>) =>
        onChange({ value: `${option?.value}`, option })
      }
      className={className}
      onMenuOpen={onMenuOpen}
    />
  )
}

export default Select
