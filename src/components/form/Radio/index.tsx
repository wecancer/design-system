import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Check = styled.div<{ isChecked: boolean }>`
  ${({ isChecked, theme }) => css`
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: flex;
    position: relative;
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

    ${
      isChecked
        ? css`
            color: ${theme.colors.bg};
            background-color: ${theme.colors.primary};

            &[aria-disabled='false']:hover {
              background-color: ${theme.colors.darkPrimary};
            }

            &[aria-disabled='false']:focus {
              box-shadow: 0 0 1px 6px ${theme.colors.focusPrimary};
            }

            &::before {
              content: '';
              width: 16px;
              height: 16px;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: ${theme.colors.bg};
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
          `
    }}
  `}
`

const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.familyRedesign};
    margin: 0 0 0 0.625rem;
    cursor: pointer;
  `};
`

export type Props = {
  id?: string
  label?: string
  onChange?(): void
  isChecked?: boolean
  isDisabled?: boolean
}

const Radio = ({
  id,
  label,
  isDisabled = false,
  isChecked = false,
  onChange,
  ...props
}: Props) => (
  <Container {...props}>
    <Check
      id={id}
      tabIndex={0}
      role="radio"
      onClick={onChange}
      onKeyDown={onChange}
      isChecked={isChecked}
      aria-checked={isChecked}
      aria-disabled={isDisabled}
    />
    {label && <Label htmlFor={id}>{label}</Label>}
  </Container>
)

export default Radio
