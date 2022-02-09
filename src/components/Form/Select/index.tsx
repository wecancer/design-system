import {useRef, useState} from 'react'
import styled, {useTheme, css} from 'styled-components'
import {Label as InputLabel} from '../Input/Input'

import ReactSelect, {
  SelectInstance,
  MultiValueRemoveProps,
  MultiValueGenericProps,
  DropdownIndicatorProps,
  components as SelectComponents,
  GroupBase,
} from 'react-select'

import Icon from '../../Icon'
import {Option, Options} from './types'
import selectStyles from './styles'

export const Label = styled(InputLabel)<{
  isFocused: boolean
  hasValue: boolean
}>`
  z-index: 30;
  padding-bottom: 0;

  ${({theme, isFocused, hasValue}) =>
    isFocused || hasValue
      ? css`
          color: ${theme.colors.label};
          font-size: 0.875rem;
          transform: translateY(calc(-100% - 10px));
          border-radius: 3px 3px 0 0;
          background: ${!isFocused && hasValue ? `transparent` : theme.colors.white};
        `
      : css`
          background: transparent;
        `}
`

const Container = styled.div`
  position: relative;
`

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
  label?: string
  value?: Option
  options: Options
  className?: string
  onChange(args: ChangeParams): void
}

const Select = ({label, options, onChange, className, value}: Props) => {
  const theme = useTheme()
  const styles = selectStyles(theme)
  const selectRef = useRef<SelectInstance<Option, true, GroupBase<Option>>>(null)
  const [focused, setFocused] = useState(false)

  return (
    <Container className={className}>
      {label && (
        <Label onClick={() => selectRef.current?.focus()} hasGapLeft={false} isFocused={focused} hasValue={!!value}>
          {label}
        </Label>
      )}
      <ReactSelect
        value={value}
        placeholder=""
        ref={selectRef}
        styles={styles}
        options={options}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        onChange={(val) => onChange({value: val as unknown as Option})}
        components={{MultiValueContainer, DropdownIndicator, MultiValueRemove}}
      />
    </Container>
  )
}

export default Select
