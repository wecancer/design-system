import React, { useRef, useState } from 'react'
import styled, { useTheme, css } from 'styled-components'
import { Label as InputLabel } from '../input/input'
import { AsyncPaginate } from 'react-select-async-paginate'

import ReactSelect, {
  GroupBase,
  PropsValue,
  ActionMeta,
  SelectInstance,
  OptionsOrGroups,
  MultiValueRemoveProps,
  MultiValueGenericProps,
  DropdownIndicatorProps,
  components as SelectComponents,
} from 'react-select'

import Icon from '../../icon'
import selectStyles from './styles'
import useTranslation from '../../../locale/use-translation'
import useInputErrorValidation from '../input/use-input-error-validation'
import { SelectOption, SelectOptions } from './types'

export const Label = styled(InputLabel)<{
  hasError: boolean
  isFocused: boolean
  hasValue: boolean
}>`
  ${({ theme, isFocused, hasValue, hasError }) => css`
    z-index: 30;
    padding-bottom: 0;

    ${(() => {
      if (isFocused || hasValue) {
        return css`
          color: ${theme.colors.label};
          font-size: 0.875rem;
          transform: translateY(calc(-100% - 10px));
          border-radius: 3px 3px 0 0;

          ${(() => {
            if (hasError) {
              return css`
                background: linear-gradient(
                  180deg,
                  rgba(255, 255, 255, 0) 0%,
                  rgba(20, 20, 255, 0) 50%,
                  ${theme.colors.bgError} 50%,
                  ${theme.colors.bgError} 100%
                );
              `
            }
            return css`
              background: ${theme.colors.white};
            `
          })()}
        `
      }
      if (hasError) {
        return css`
          color: ${theme.colors.darkError};
          background: ${theme.colors.bgError};
        `
      }
      return css`
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(20, 20, 255, 0) 50%,
          ${theme.colors.white} 50%,
          ${theme.colors.white} 100%
        );
      `
    })()}
  `}
`

const Input = styled.input`
  position: absolute;
  bottom: -5px;
  left: 0;
  box-sizing: border-box;
  z-index: -1;
  height: 0px;
  border: 1px solid transparent;
  width: 100%;
  opacity: 0;
`

const Container = styled.div<{ hasError: boolean; hasFocus: boolean }>`
  position: relative;

  ${({ theme, hasError, hasFocus }) =>
    hasError &&
    css`
      div[class*='control'] {
        background-color: ${theme.colors.bgError};
        border-color: ${theme.colors.error} !important;
        ${hasFocus &&
        css`
          box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusError} !important;
        `}
      }
    `}
`

const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 0.875rem;
    font-weight: ${theme.font.weights.semiBold};
    margin-top: 0.5rem;
  `}
`

export const MultiValueContainer = (
  props: MultiValueGenericProps<SelectOption>,
) => <SelectComponents.MultiValueContainer {...props} />

export const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOption, true>,
) => (
  <SelectComponents.DropdownIndicator {...props}>
    <Icon name="arrowDown" size={18} />
  </SelectComponents.DropdownIndicator>
)

export const MultiValueRemove = (
  props: MultiValueRemoveProps<SelectOption, true>,
) => (
  <SelectComponents.MultiValueRemove {...props}>
    <Icon name="close" size={16} />
  </SelectComponents.MultiValueRemove>
)

type HandleScrollEnd = () => void

export type LoadedMore = {
  options: SelectOptions
  hasMore: boolean
  // can pass anything for the additional attribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additional?: any
}

export type OnLoadMore = (
  query: string,
  loadedMore: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>,
  // can pass anything for the additional attribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additional?: any,
) => LoadedMore

export type Props = {
  label?: string
  onFocus?(): void
  isMulti?: boolean
  required?: boolean
  className?: string
  onMenuOpen?(): void
  options: SelectOptions
  onLoadMore?: OnLoadMore
  closeMenuOnSelect?: boolean
  isMenuListLoading?: boolean
  onScrollEnd?: HandleScrollEnd
  value: PropsValue<SelectOption>
  onChange(
    args: PropsValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ): void
}

const GenericSelect = ({
  label,
  value,
  isMulti,
  options,
  onFocus,
  onChange,
  className,
  onLoadMore,
  onMenuOpen,
  required = false,
  closeMenuOnSelect,
}: Props) => {
  const t = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)
  const theme = useTheme()
  const styles = selectStyles(theme)
  const hasLoadMore = typeof onLoadMore === 'function'

  const selectRef =
    useRef<SelectInstance<SelectOption, true, GroupBase<SelectOption>>>(null)
  const [focused, setFocused] = useState(false)

  const hasValue = (() => {
    if (Array.isArray(value)) {
      return value.length > 0
    }
    return !!(value as SelectOption)?.value
  })()

  // just validate the requirement
  const { hasError, errorMessage } = useInputErrorValidation(
    { ref: inputRef, value: hasValue ? 'value' : '' },
    {
      required,
    },
  )

  const props = {
    placeholder: '',
    openMenuOnFocus: true,
    styles: styles,
    value: value,
    options: options,
    onChange: onChange,
    onMenuOpen: onMenuOpen,
    isMulti: isMulti || undefined,
    onBlur: () => setFocused(false),
    closeMenuOnSelect: closeMenuOnSelect,
    noOptionsMessage: () => <p>{t('No options')}</p>,
    onFocus: () => {
      setFocused(true)
      onFocus?.()
    },
    components: {
      MultiValueRemove,
      DropdownIndicator,
      MultiValueContainer,
    },
  }

  return (
    <Container hasFocus={focused} hasError={hasError} className={className}>
      {label && (
        <Label
          hasError={hasError}
          onClick={() => selectRef.current?.focus()}
          hasGapLeft={false}
          isFocused={focused}
          hasValue={!!value}
        >
          {label}
        </Label>
      )}
      {hasLoadMore ? (
        <AsyncPaginate
          selectRef={selectRef}
          loadOptions={(search, loadedMore, additionals) =>
            onLoadMore(search, loadedMore, additionals)
          }
          {...props}
        />
      ) : (
        <ReactSelect ref={selectRef} {...props} />
      )}
      {required && (
        <Input
          type="text"
          ref={inputRef}
          name="hidded-input"
          required={required}
          value={hasValue ? 'value' : ''}
          onChange={() => null}
        />
      )}
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  )
}

export default GenericSelect
