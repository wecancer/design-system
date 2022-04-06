import React from 'react'
import styled, { css } from 'styled-components'

import Icon from '../../icon'
import ButtonNoAppearance from '../../button/no-appearance'

type MessageType = 'success' | 'error' | 'caption'

const createLabelBackground = (color: string) => css`
  background: ${color};
`

const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    font-family: ${theme.font.family};
  `}
`

const Textarea = styled.textarea<{ hasValue: boolean; infoType?: MessageType }>`
  ${({ theme, hasValue, infoType }) => css`
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    font-family: ${theme.font.family};
    border-radius: 1rem;
    outline: none;

    ${(() => {
      if (infoType === 'success') {
        return css`
          background-color: ${theme.colors.bgSuccess};
          border: 2px solid ${theme.colors.success};

          & + label {
            color: ${theme.colors.success} !important;
            ${createLabelBackground(theme.colors.bgSuccess)}
          }
        `
      }
      if (infoType === 'error') {
        return css`
          background-color: ${theme.colors.bgError};
          border: 2px solid ${theme.colors.error};

          & + label {
            color: ${theme.colors.error} !important;
            ${createLabelBackground(theme.colors.bgError)}
          }
        `
      }
      return css`
        background-color: ${theme.colors.offWhite};
        border: 2px solid ${theme.colors.placeholder};
      `
    })()}

    &:focus {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusPrimary};
    }

    &:focus + label {
      color: ${theme.colors.label};
      font-size: 0.875rem;
      top: -0.6875rem;
      background-color: ${theme.colors.white};
    }

    ${hasValue &&
    css`
      & + label {
        color: ${theme.colors.label};
        font-size: 0.875rem;
        top: -0.6875rem;
      }
    `}
  `}
`

const ButtonClose = styled(ButtonNoAppearance)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`

const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0 0.25rem;
    background: 
    transition: all 250ms ease;
    ${createLabelBackground(theme.colors.offWhite)};
    transition: all 250ms ease;
  `}
`

const Message = styled.p<{ type: MessageType }>`
  ${({ theme, type }) => css`
    margin: 0;
    font-size: 0.875rem;
    font-weight: ${theme.font.weights.semiBold};

    ${(() => {
      if (type === 'error') {
        return css`
          color: ${theme.colors.error};
        `
      }
      if (type === 'success') {
        return css`
          color: ${theme.colors.success};
        `
      }
      return css`
        color: ${theme.colors.label};
      `
    })()}
  `}
`

type OnChangeParams = {
  value: string
  event: React.ChangeEvent<HTMLTextAreaElement> | null
}

export type Props = {
  id?: string
  rows?: number
  value: string
  label?: string
  infoType?: MessageType
  infoMessage?: string
  onClear?(): void
  onChange(params: OnChangeParams): void
}

const InputTextarea = ({
  id,
  value,
  label,
  onClear,
  rows = 2,
  onChange,
  infoType,
  infoMessage,
  ...props
}: Props) => {
  const hasValue = !!value

  return (
    <Wrapper>
      <Textarea
        {...props}
        id={id}
        rows={rows}
        value={value}
        hasValue={hasValue}
        infoType={infoType}
        onChange={(event) =>
          onChange({ value: event.currentTarget.value, event })
        }
      />
      {label && <Label htmlFor={id}>{label}</Label>}
      {hasValue && (
        <ButtonClose onClick={onClear}>
          <Icon name="times" size={22} />
        </ButtonClose>
      )}
      {infoType && infoMessage && (
        <Message type={infoType}>{infoMessage}</Message>
      )}
    </Wrapper>
  )
}

export default InputTextarea
