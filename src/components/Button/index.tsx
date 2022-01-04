import React from 'react'
import styled, {css, FlattenSimpleInterpolation} from 'styled-components'
import Loading from '../Loading'

type Color = 'primary' | 'secondary' | 'default'

export const ButtonStyled = styled.button<{colorType: Color}>`
  ${({theme, colorType}) => css`
    height: 40px;
    font-size: 1rem;
    display: inline-block;
    cursor: pointer;
    font-weight: ${theme.font.weights.semiBold};
    padding: 0 1.5rem;
    appearance: none;
    border-radius: 0.5rem;
    outline: none;
    transition: all 250ms ease;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    ${((): FlattenSimpleInterpolation => {
      if (colorType === 'primary') {
        return css`
          color: ${theme.colors.white};
          background-color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};

          &:not(:disabled):hover {
            background-color: ${theme.colors.darkPrimary};
            border-color: ${theme.colors.darkPrimary};
          }

          &:focus {
            box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusPrimary};
          }
        `
      }
      if (colorType === 'secondary') {
        return css`
          color: ${theme.colors.primary};
          background-color: ${theme.colors.white};
          border: 2px solid ${theme.colors.primary};

          &:not(:disabled):hover {
            border-color: ${theme.colors.darkPrimary};
          }

          &:focus {
            box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusPrimary};
          }
        `
      }
      return css`
        color: ${theme.colors.primary};
        background-color: ${theme.colors.white};
        border: 2px solid ${theme.colors.line};

        &:not(:disabled):hover {
          color: ${theme.colors.darkPrimary};
        }

        &:focus {
          box-shadow: 0 0 0.062rem 0.375rem ${theme.colors.focusLine};
        }
      `
    })()}
  `}
`

export type Props = {
  type?: 'button' | 'reset' | 'submit'
  title?: string
  primary?: boolean
  className?: string
  secondary?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({
  title,
  onClick,
  children,
  className,
  type = 'button',
  primary = false,
  secondary = false,
  isLoading = false,
  isDisabled = false,
}: Props): React.ReactElement => (
  <ButtonStyled
    type={type}
    title={title}
    onClick={onClick}
    disabled={isDisabled}
    className={className}
    colorType={((): Color => {
      if (primary) return 'primary'
      if (secondary) return 'secondary'
      return 'default'
    })()}
  >
    {isLoading ? <Loading /> : children}
  </ButtonStyled>
)

export default Button
