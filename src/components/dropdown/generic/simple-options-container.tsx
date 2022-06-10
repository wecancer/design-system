import React from 'react'
import styled, { css } from 'styled-components'
import { ActionParams } from '.'
import { ColorsTemplate } from '../../../styles/theme'

import ButtonNoAppearance from '../../button/no-appearance'

export type AxisX = 'left' | 'right'

const Item = styled(ButtonNoAppearance)<{ textColor: ColorsTemplate }>`
  ${({ theme, textColor }) => css`
    width: 100%;
    color: ${theme.colors[textColor]};
    cursor: pointer;
    text-align: left;
    padding: 0.625rem 1.5rem;
    transition: ease 250ms background-color;
    box-sizing: border-box;

    &:hover {
      background-color: ${theme.colors.line};
    }
  `}
`

const Container = styled.div<{ hasArrow: boolean; axisX: AxisX }>`
  ${({ theme, hasArrow, axisX }) => css`
    font-family: ${theme.font.family};
    min-width: 200px;
    max-width: 100%;
    padding: 1rem 0;
    border-radius: 1rem;
    background-color: ${theme.colors.inputBg};

    ${hasArrow &&
    css`
      transform: translateY(0.625rem);
      &::before {
        content: '';
        position: absolute;
        top: -9px;
        border-left: 0.625rem solid transparent;
        border-right: 0.625rem solid transparent;
        border-bottom: 0.625rem solid ${theme.colors.inputBg};
        ${axisX === 'left'
          ? css`
              left: 9px;
            `
          : css`
              right: 9px;
            `}
      }
    `}
  `}
`

const Label = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
`

export type MenuItem = {
  id: string
  label: string
  textColor?: ColorsTemplate
  onClick?(params: ActionParams): void
}

type Props = {
  axisX: AxisX
  items: MenuItem[]
  hasArrow?: boolean
  className?: string
  actions: ActionParams
}

const ListContainer = ({
  items,
  axisX,
  actions,
  hasArrow,
}: Props): React.ReactElement => {
  return (
    <Container axisX={axisX} role="listbox" tabIndex={0} hasArrow={!!hasArrow}>
      {items.map((item) => (
        <Item
          key={item.id}
          textColor={item?.textColor || 'text'}
          onClick={() => item.onClick?.(actions)}
        >
          <Label>{item.label}</Label>
        </Item>
      ))}
    </Container>
  )
}

export default ListContainer
