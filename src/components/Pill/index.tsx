import React from 'react'
import styled, {css} from 'styled-components'
import {ColorsTemplate} from '../../styles/theme'

import Icon from '../Icon'

type Size = 'small' | 'medium' | 'large'

const Text = styled.p`
  ${({theme}) => css`
    font-family: ${theme.font.familyRedesign};
    font-weight: ${theme.font.weights.regular};
    margin: 0;
  `}
`

const Container = styled.div<
  {fillColor: ColorsTemplate} & Pick<Props, 'size' | 'isActive'>
>`
  ${({isActive, theme, size, fillColor}) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border: 1px solid ${theme.colors[fillColor]};

    &[role='button'] {
      cursor: pointer;
    }

    ${
      isActive
        ? css`
            color: ${theme.colors.offWhite};
            background-color: ${theme.colors[fillColor]};
          `
        : css`
            color: ${theme.colors[fillColor]};
            background-color: ${theme.colors.offWhite};
          `
    }}

    ${(() => {
      if (size === 'large') {
        return css`
          height: 2.875rem;
          font-size: 1rem;
          border-radius: 1.5rem;
          padding: 0 1rem;
        `
      }
      if (size === 'small') {
        return css`
          height: 1.875rem;
          font-size: 0.8125rem;
          border-radius: 1rem;
          padding: 0 0.75rem;
        `
      }
      return css`
        height: 2.375rem;
        font-size: 0.875rem;
        border-radius: 1.25rem;
        padding: 0 0.75rem;
      `
    })()}
  `}
`

type IconProps = {
  isActive: boolean
  fillColor: ColorsTemplate
}

const IconStyled = styled(Icon)<IconProps>`
  ${({isActive, theme, fillColor}) =>
    isActive
      ? css`
          color: ${theme.colors.offWhite};
        `
      : css`
          color: ${theme.colors[fillColor]};
        `}
`

const CheckIcon = styled(IconStyled)`
  margin-right: 0.5rem;
`

const CloseIcon = styled(IconStyled)`
  margin-left: 0.5rem;
`

export type Props = {
  size?: Size
  label: string
  isActive?: boolean
  hasClose?: boolean
  isChecked?: boolean
  onClick?: () => void
  fillColor?: ColorsTemplate
}

const Pill = ({
  label,
  onClick,
  size = 'medium',
  isActive = false,
  hasClose = false,
  fillColor = 'primary',
  isChecked = false,
}: Props) => {
  const isClickable = !!onClick
  const checkIconSize = size === 'large' ? '16px' : '14px'
  const closeIconSize = size === 'large' ? '20px' : '16px'

  const clickProps = {
    role: 'button',
    onClick,
    onKeyDown: onClick,
  }

  return (
    <Container
      size={size}
      isActive={isActive}
      fillColor={fillColor}
      {...(isClickable ? clickProps : {})}
    >
      {isChecked && (
        <CheckIcon
          name="check"
          isActive={isActive}
          fillColor={fillColor}
          size={checkIconSize}
        />
      )}
      <Text>{label}</Text>
      {hasClose && (
        <CloseIcon
          name="close"
          isActive={isActive}
          fillColor={fillColor}
          size={closeIconSize}
        />
      )}
    </Container>
  )
}

export default Pill
