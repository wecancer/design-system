import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { useTheme, css } from 'styled-components'
import { Label as InputLabel } from '../input/input'

import ReactSelect, {
  GroupBase,
  PropsValue,
  ActionMeta,
  SelectInstance,
  MultiValueRemoveProps,
  MultiValueGenericProps,
  DropdownIndicatorProps,
  components as SelectComponents,
  MenuListProps,
} from 'react-select'

import Icon from '../../icon'
import selectStyles from './styles'
import useTranslation from '../../../locale/use-translation'
import useInputErrorValidation from '../input/use-input-error-validation'
import { SelectOption, SelectOptions } from './types'
import Loading from '../../loading'

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

const LoadingContainer = styled.div`
  padding: 1rem;
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

type MenuList = {
  isMenuListLoading?: boolean
  onScrollEnd: HandleScrollEnd
}

export const menuList =
  ({ onScrollEnd, isMenuListLoading }: MenuList) =>
  (props: MenuListProps<SelectOption, true>) => {
    const ref = useRef<HTMLDivElement>(null)
    const scrollEndCallback = useCallback(onScrollEnd, [])

    useEffect(() => {
      const handleScroll = (e: Event) => {
        const { scrollHeight, scrollTop, offsetHeight } =
          e.currentTarget as HTMLDivElement
        if (scrollHeight - offsetHeight <= scrollTop + 200) {
          onScrollEnd()
        }
      }
      const { current } = ref
      const element = current?.querySelector('[class*="MenuList"]')

      element?.addEventListener('scroll', handleScroll)

      return () => {
        element?.removeEventListener('scroll', handleScroll)
      }
    }, [scrollEndCallback, onScrollEnd])

    return (
      <div ref={ref}>
        <SelectComponents.MenuList {...props}>
          {props.children}
          {isMenuListLoading && (
            <LoadingContainer>
              <Loading />
            </LoadingContainer>
          )}
        </SelectComponents.MenuList>
      </div>
    )
  }

export type Props = {
  label?: string
  onFocus?(): void
  isMulti?: boolean
  required?: boolean
  className?: string
  onMenuOpen?(): void
  options: SelectOptions
  onScrollEnd?: HandleScrollEnd
  closeMenuOnSelect?: boolean
  isMenuListLoading?: boolean
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
  onMenuOpen,
  required = false,
  closeMenuOnSelect,
  isMenuListLoading,
  onScrollEnd = () => null,
}: Props) => {
  const t = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)
  const theme = useTheme()
  const styles = selectStyles(theme)

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

  return (
    <Container className={className} hasError={hasError} hasFocus={focused}>
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
      <ReactSelect
        placeholder=""
        openMenuOnFocus
        ref={selectRef}
        styles={styles}
        value={value}
        options={options}
        onChange={onChange}
        onMenuOpen={onMenuOpen}
        isMulti={isMulti || undefined}
        onBlur={() => setFocused(false)}
        closeMenuOnSelect={closeMenuOnSelect}
        noOptionsMessage={() => <p>{t('No options')}</p>}
        onFocus={() => {
          setFocused(true)
          onFocus?.()
        }}
        components={{
          MultiValueRemove,
          DropdownIndicator,
          MultiValueContainer,
          MenuList: menuList({
            onScrollEnd,
            isMenuListLoading,
          }),
        }}
      />
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
