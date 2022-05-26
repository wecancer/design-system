import React from 'react'
import styled, { css } from 'styled-components'

import Loading from '../../loading'
import Icon, { IconsTypes } from '../../icon'
import { ColorsTemplate } from '../../../styles/theme'

type Size = 'small' | 'medium' | 'large'

const Container = styled.button<{
  buttonSize: Size
  isActive: boolean
  isDisabled: boolean
  fillColor: ColorsTemplate
}>`
  ${({ theme, isActive, fillColor, buttonSize, isDisabled }) => css`
    padding: 0;
    cursor: ${isDisabled ? 'default' : 'pointer'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid ${theme.colors[fillColor]};

    ${isDisabled &&
    css`
      opacity: 0.5;
    `}

    ${isActive
      ? css`
          color: ${theme.colors.offWhite};
          background-color: ${theme.colors[fillColor]};
        `
      : css`
          color: ${theme.colors[fillColor]};
          background-color: ${theme.colors.offWhite};
        `}

    ${(() => {
      if (buttonSize === 'large') {
        return css`
          width: 2.875rem;
          height: 2.875rem;
          flex: 0 0 2.875rem;
          font-size: 1rem;
        `
      }
      if (buttonSize === 'small') {
        return css`
          width: 1.875rem;
          height: 1.875rem;
          flex: 0 0 1.875rem;
          font-size: 0.8125rem;
        `
      }
      return css`
        width: 2.375rem;
        height: 2.375rem;
        flex: 0 0 2.375rem;
        font-size: 0.875rem;
      `
    })()}
  `}
`

export type Props = {
  size?: Size
  title?: string
  icon: IconsTypes
  isActive?: boolean
  className?: string
  isLoading?: boolean
  isDisabled?: boolean
  color?: ColorsTemplate
  hasStopPropagation?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ButtonIcon = ({
  icon,
  title,
  onClick,
  isActive,
  isLoading,
  className,
  size = 'medium',
  color = 'primary',
  isDisabled = false,
  hasStopPropagation = false,
}: Props): React.ReactElement => (
  <Container
    title={title}
    fillColor={color}
    buttonSize={size}
    className={className}
    isActive={!!isActive}
    isDisabled={isDisabled}
    onClick={(e) => {
      if (hasStopPropagation) {
        e.stopPropagation()
      }

      if (!isDisabled) {
        onClick?.(e)
      }
    }}
  >
    {isLoading ? <Loading /> : <Icon name={icon} />}
  </Container>
)

export default ButtonIcon
