import React, { useImperativeHandle, useRef } from 'react'
import styled, { css } from 'styled-components'
import { keyActionClick } from '../../../events'

import Icon, { IconsTypes } from '../../icon'
import useInputErrorValidation from './use-input-error-validation'

const topGrap = '13px'

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    font-family: ${theme.font.family};
  `}
`

const Input = styled.input<{
  hasGapLeft: boolean
  hasGapRight: boolean
  hasError: boolean
}>`
  ${({ theme, hasGapLeft, hasGapRight, hasError }) => css`
    width: 100%;
    height: 40px;
    font-size: 1rem;
    padding-top: 0;
    padding-bottom: 0;
    box-sizing: border-box;
    font-family: ${theme.font.family};
    border-radius: 1rem;
    outline: none;
    transition: all 250ms ease;

    ${hasError
      ? css`
          background-color: ${theme.colors.bgError};
          border: 0.125rem solid ${theme.colors.error};
        `
      : css`
          background-color: ${theme.colors.offWhite};
          border: 0.125rem solid ${theme.colors.placeholder};
        `}

    ${hasGapLeft
      ? css`
          padding-left: 2.5rem;
        `
      : css`
          padding-left: 1rem;
        `}

    ${hasGapRight
      ? css`
          padding-right: 2.5rem;
        `
      : css`
          padding-right: 1rem;
        `}

    &:focus {
      border-color: ${theme.colors.primary};
      ${hasError
        ? css`
            background-color: ${theme.colors.bgError};
            border: 0.125rem solid ${theme.colors.error};
            box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusError};
          `
        : css`
            background-color: ${theme.colors.white};
            border: 0.125rem solid ${theme.colors.primary};
            box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusPrimary};
          `}
    }

    &[value]:not([value='']) + div[data-label],
    &:focus + div[data-label] {
      color: ${hasError ? theme.colors.error : theme.colors.label};
      font-size: 0.875rem;
      transform: translateY(calc(-100% - 0.625rem));
    }
  `}
`

const IconLeft = styled(Icon)`
  position: absolute;
  left: 1.25rem;
  top: ${topGrap};
`

const ButtonRight = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  appearance: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 4px;
  right: 1rem;
`

const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 0.875rem;
    font-weight: ${theme.font.weights.semiBold};
    margin-top: 0.5rem;
  `}
`

export const Label = styled.div<{ hasGapLeft: boolean; hasError: boolean }>`
  ${({ theme, hasGapLeft, hasError }) => css`
    position: absolute;
    top: 20px;
    left: 0.875rem;
    padding: 0 0.25rem;
    outline: none;
    transition: all 250ms ease;

    ${hasError
      ? css`
          color: ${theme.colors.darkError};
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(20, 20, 255, 0) 50%,
            ${theme.colors.bgError} 50%,
            ${theme.colors.bgError} 100%
          );
        `
      : css`
          background-color: ${theme.colors.white};
        `}

    ${hasGapLeft
      ? css`
          transform: translate(1.25rem, -50%);
        `
      : css`
          transform: translateY(-50%);
        `}
  `}
`

type InputTypes = 'text' | 'password' | 'email' | 'search'

type Value = string

type CustomValidation = {
  message: string
  isValid: boolean
}

type OnChangeParams = {
  value: Value
  event: React.ChangeEvent<HTMLInputElement> | null
}

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'type' | 'css' | 'onChange'
> & {
  id?: string
  label?: string
  value?: Value
  type: InputTypes
  onChange(params: OnChangeParams): void
  iconLeft?: IconsTypes
  customValidation?: CustomValidation
  iconButtonRight?: {
    type: IconsTypes
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  }
}

const InputText = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      label,
      iconLeft,
      onChange,
      iconButtonRight,
      customValidation,
      ...props
    }: Props,
    ref,
  ) => {
    const innerRef = useRef<HTMLInputElement>(null)
    const { errorMessage, hasError } = useInputErrorValidation(
      { ref: innerRef, value: props.value || '' },
      {
        required: props.required,
        email: props.type === 'email',
      },
      customValidation,
    )
    const hasGapLeft = !!iconLeft
    const hasGapRight = !!iconButtonRight

    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement)

    return (
      <Wrapper>
        <Input
          {...props}
          id={id}
          ref={innerRef}
          hasError={hasError}
          hasGapLeft={hasGapLeft}
          hasGapRight={hasGapRight}
          onChange={(event) => {
            const el = event.currentTarget

            if (customValidation?.isValid === false) {
              el.setCustomValidity(customValidation.message)
            }
            if (customValidation?.isValid === true) {
              el.setCustomValidity('')
            }

            onChange({ value: el.value, event })
          }}
        />
        {label && (
          <Label
            role="button"
            tabIndex={-1}
            data-label="true"
            aria-label={label}
            hasError={hasError}
            aria-labelledby={id}
            hasGapLeft={hasGapLeft}
            onClick={() => innerRef.current?.focus()}
            onKeyDown={(e) =>
              keyActionClick(e, () => innerRef.current?.focus())
            }
          >
            {label}
          </Label>
        )}
        {iconLeft && (
          <IconLeft className="icon-left" size={14} name={iconLeft} />
        )}
        {iconButtonRight && (
          <ButtonRight type="button" onClick={iconButtonRight.onClick}>
            <Icon className="icon-right" name={iconButtonRight.type} />
          </ButtonRight>
        )}
        {errorMessage && <Error>{errorMessage}</Error>}
      </Wrapper>
    )
  },
)

export default InputText
