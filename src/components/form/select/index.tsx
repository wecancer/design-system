import React from 'react'
import { SingleValue } from 'react-select'

import { SelectOption } from './types'

import GenericSelect, { Props as GenericProps } from './generic-select'

type ChangeParams = {
  value: string
  option: SelectOption
}

export type Props = Omit<GenericProps, 'value' | 'onChange'> & {
  value: string
  onChange(args: ChangeParams): void
}

const Select = ({
  label,
  value,
  onFocus,
  onChange,
  className,
  onLoadMore,
  onMenuOpen,
  onScrollEnd,
  options = [],
  required = false,
  isMenuListLoading,
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
      className={className}
      onLoadMore={onLoadMore}
      onMenuOpen={onMenuOpen}
      onScrollEnd={onScrollEnd}
      isMenuListLoading={isMenuListLoading}
      onChange={(option: SingleValue<SelectOption>) =>
        onChange({ value: `${option?.value}`, option })
      }
    />
  )
}

export default Select
