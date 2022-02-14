import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import Icon, { IconsTypes } from '../icon'
import { ColorsTemplate } from '../../styles/theme'

type ColorsAvailable = ColorsTemplate | 'currentColor'

const SpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div<{ spinColor: ColorsAvailable }>`
  ${({ spinColor, theme }) => css`
    ${spinColor !== 'currentColor' &&
    css`
      color: ${theme.colors[spinColor]};
    `}

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      animation: ${SpinAnimation} 1200ms infinite linear;
    }
  `}
`

const loadingTypes: { [key: string]: IconsTypes } = {
  solid: 'spinnerSolid',
  dots: 'spinnerDots',
}

export type Props = {
  title?: string
  size?: number | string
  type?: 'dots' | 'solid'
  color?: ColorsAvailable
}

const Loading = ({
  type = 'solid',
  color = 'currentColor',
  title,
  size,
}: Props) => (
  <Container title={title} aria-label={title} spinColor={color}>
    <Icon name={loadingTypes[type]} size={size} />
  </Container>
)

export default Loading
