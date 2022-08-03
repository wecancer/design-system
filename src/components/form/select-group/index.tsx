import React, { useState } from 'react'
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
  allValues: SelectOptions
  hasSelectAll?: boolean
  onChange(args: ChangeParams): void
}

const SelectGroup = ({
  value,
  label,
  onChange,
  required,
  allValues,
  className,
  onLoadMore,
  onScrollEnd,
  options = [],
  isMenuListLoading,
  hasSelectAll = true,
}: Props) => {
  const t = useTranslation()
  const [verification, setVerification] = useState(false)

  const isAllSelected = onLoadMore?.length
    ? allValues.length === value?.length || verification
    : options.length === value?.length || verification

  const selectAllOption = {
    label: t(isAllSelected ? 'Unselect all' : 'Select all'),
    value: '__wcds_select-all',
  }

  const opts = hasSelectAll ? [selectAllOption, ...options] : options

  const newLabel = { label: t('All'), value: '' }

  const onSelectAll = () => {
    setVerification(true)
    if (onLoadMore?.length) {
      value = allValues
    }
  }

  console.log('primeiro: ', isAllSelected)
  return (
    <GenericSelect
      isMulti
      label={label}
      value={isAllSelected ? newLabel : value}
      options={isAllSelected ? [] : opts}
      required={required}
      className={className}
      onLoadMore={!verification ? onLoadMore : undefined}
      onScrollEnd={onScrollEnd}
      closeMenuOnSelect={false}
      isMenuListLoading={isMenuListLoading}
      onChange={(val: MultiValue<SelectOption>, action) => {
        const newOptionValue = val as SelectOptions
        console.log('segundo isAllSelected: ', isAllSelected)
        console.log(action)
        if (action.option?.value === selectAllOption.value) {
          onSelectAll()
          onChange({ value: isAllSelected ? [] : allValues })
          console.log('action: ', action.action)
          console.log('options: ', options)
          console.log('value: ', value)
          console.log('bla: ', isAllSelected ? [] : options)
          return
        }
        if (isAllSelected) {
          onChange({ value: isAllSelected ? [] : options })
          console.log('value: ', value)
        }
        if (action.action === 'clear') {
          setVerification(false)
          console.log('value: ', value)
          console.log('limpando..')
        }
        if (value?.includes({ label: 'All', value: '' })) {
          onChange({ value: isAllSelected ? [] : allValues })
          console.log('value: ', value)
        }
        if (action.removedValue?.label === 'All') {
          setVerification(false)
          console.log('value: ', value)
          console.log('deletando tudo')
        }
        onChange({ value: newOptionValue })
      }}
    />
  )
}

export default SelectGroup
