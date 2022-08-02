import React from 'react'
import { MultiValue } from 'react-select'

import GenericSelect from '../select/generic-select'
import { Props as SelectProps } from '../select'
import { SelectOption, SelectOptions } from '../select/types'
import useTranslation from '../../../locale/use-translation'

type ChangeParams = {
  value: SelectOptions
}

export type Props = Omit<SelectProps, 'value' | 'onChange'> & {
  value?: SelectOptions
  hasSelectAll?: boolean
  onChange(args: ChangeParams): void
}

const SelectGroup = ({
  value,
  label,
  onChange,
  required,
  className,
  onLoadMore,
  onScrollEnd,
  options = [],
  isMenuListLoading,
  hasSelectAll = true,
}: Props) => {
  const t = useTranslation()

  const isAllSelected = options.length === value?.length
  const selectAllOption = {
    label: t(isAllSelected ? 'Unselect all' : 'Select all'),
    value: '__wcds_select-all',
  }

  const opts = hasSelectAll ? [selectAllOption, ...options] : options
  const newLabel = { label: t('All'), value: '' }

  console.log('value: ', value)
  console.log('primeiro: ', isAllSelected)
  return (
    <GenericSelect
      isMulti
      label={label}
      value={isAllSelected ? newLabel : value}
      options={isAllSelected ? [] : opts}
      required={required}
      className={className}
      onLoadMore={onLoadMore}
      onScrollEnd={onScrollEnd}
      closeMenuOnSelect={false}
      isMenuListLoading={isMenuListLoading}
      onChange={(val: MultiValue<SelectOption>, action) => {
        const newOptionValue = val as SelectOptions
        console.log('segundo isAllSelected: ', isAllSelected)
        if (action.option?.value === selectAllOption.value) {
          onChange({ value: isAllSelected ? [] : options })
          console.log('action: ', action.action)
          console.log('bla: ', isAllSelected ? [] : options)
          return
        }
        onChange({ value: newOptionValue })
      }}
    />
  )
}

export default SelectGroup
