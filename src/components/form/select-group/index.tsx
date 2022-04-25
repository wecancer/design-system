import React from 'react'
import { useTheme } from 'styled-components'
import Select from 'react-select'

import {
  MultiValueRemove,
  DropdownIndicator,
  MultiValueContainer,
  Props as SelectProps,
} from '../select'

import selectStyles from '../select/styles'
import { Options } from '../select/types'
import useTranslation from '../../../locale/use-translation'

type ChangeParams = {
  value: Options
}

export type Props = Omit<SelectProps, 'value' | 'onChange'> & {
  value?: Options
  onChange(args: ChangeParams): void
}

const SelectGroup = ({ options, onChange, className, value }: Props) => {
  const t = useTranslation()
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
      noOptionsMessage={() => <p>{t('No options')}</p>}
      onChange={(val) => onChange({ value: val as Options })}
      components={{ MultiValueContainer, DropdownIndicator, MultiValueRemove }}
    />
  )
}

export default SelectGroup
