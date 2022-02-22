import React from 'react'
import styled, { css } from 'styled-components'

type Position = 'top' | 'left' | 'bottom' | 'right'

const Container = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    position: relative;
    display: inline-block;

    &:hover > [role='tooltip'] {
      visibility: visible;
      opacity: 1;
    }
  `}
`

const Balloon = styled.div<{ pos: Position; widthBalloon?: number }>`
  ${({ pos, theme, widthBalloon }) => css`
    position: absolute;
    color: ${theme.colors.offWhite};
    background-color: ${theme.colors.body};
    border-radius: 8px;
    padding: 1rem 1.5rem;
    visibility: hidden;
    opacity: 0;
    transition: all ease 250ms;
    z-index: 300;

    ${widthBalloon &&
    css`
      width: ${widthBalloon}px;
    `}

    &::after {
      content: '';
      position: absolute;
    }

    ${(() => {
      if (pos === 'left') {
        return css`
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%);

          &::after {
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 6px solid ${theme.colors.body};
          }
        `
      }
      if (pos === 'right') {
        return css`
          left: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%);

          &::after {
            top: 50%;
            right: 100%;
            transform: translateY(-50%);
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-right: 6px solid ${theme.colors.body};
          }
        `
      }
      if (pos === 'bottom') {
        return css`
          top: calc(100% + 0.875rem);
          left: 50%;
          transform: translateX(-50%);

          &::after {
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 6px solid ${theme.colors.body};
          }
        `
      }

      // top by default
      return css`
        bottom: calc(100% + 0.875rem);
        left: 50%;
        transform: translateX(-50%);

        &::after {
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid ${theme.colors.body};
        }
      `
    })()}
  `}
`

export type Props = {
  width?: number
  children: React.ReactNode
  tooltip?: string
  position?: Position
}

const Tooltip = ({ children, tooltip, width, position = 'top' }: Props) => {
  return (
    <Container>
      {children}
      {tooltip && (
        <Balloon role="tooltip" widthBalloon={width} pos={position}>
          {tooltip}
        </Balloon>
      )}
    </Container>
  )
}

export default Tooltip
