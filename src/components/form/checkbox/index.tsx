import React from 'react'
import styled, {css} from 'styled-components'
import Icon from '../../icon'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Check = styled.div<{isChecked: boolean}>`
  ${({isChecked, theme}) => css`
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    transition-property: box-shadow, background-color;
    transition-duration: 250ms;
    transition-timing-function: ease;

    &[aria-disabled='true'] {
      opacity: 0.4;
      cursor: default;
    }

    ${isChecked
      ? css`
          color: ${theme.colors.bg};
          background-color: ${theme.colors.primary};

          &[aria-disabled='false']:hover {
            background-color: ${theme.colors.darkPrimary};
          }

          &[aria-disabled='false']:focus {
            box-shadow: 0 0 1px 6px ${theme.colors.focusPrimary};
          }
        `
      : css`
          background-color: ${theme.colors.line};

          &[aria-disabled='false']:hover {
            background-color: ${theme.colors.placeholder};
          }

          &[aria-disabled='false']:focus {
            box-shadow: 0 0 1px 6px ${theme.colors.focusLine};
          }
        `}
  `}
`

const Label = styled.div`
  ${({theme}) => css`
    font-family: ${theme.font.familyRedesign};
    margin-left: 0.625rem;
    cursor: pointer;
  `};
`

export type Props = {
  label?: string
  onChange?(): void
  className?: string
  isChecked?: boolean
  isDisabled?: boolean
}

export default function Checkbox({
  label,
  isDisabled = false,
  isChecked = false,
  onChange,
  ...props
}: Props) {
  return (
    <Container {...props}>
      <Check
        tabIndex={0}
        role="checkbox"
        onClick={onChange}
        onKeyDown={onChange}
        isChecked={isChecked}
        aria-checked={isChecked}
        aria-disabled={isDisabled}
      >
        {isChecked && <Icon name="check" />}
      </Check>
      {label && (
        <Label
          role="button"
          tabIndex={0}
          onClick={onChange}
          onKeyDown={onChange}
        >
          {label}
        </Label>
      )}
    </Container>
  )
}
