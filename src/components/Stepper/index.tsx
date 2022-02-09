import React from 'react'
import styled, {css} from 'styled-components'
import Icon from '../Icon'

const Wrapper = styled.div`
  ${({theme}) => css`
    width: 100%;
    display: flex;
    font-family: ${theme.font.familyRedesign};
  `}
`

const Step = styled.div<{isActived: boolean}>`
  ${({isActived, theme}) =>
    css`
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-weight: ${theme.font.weights.bold};
      z-index: 1;

      ${isActived
        ? css`
            color: ${theme.colors.bg};
            background-color: ${theme.colors.primary};
          `
        : css`
            color: ${theme.colors.label};
            background-color: ${theme.colors.line};
          `}
    `}
`

const Label = styled.p<{isActived: boolean}>`
  ${({theme, isActived}) => css`
    color: ${isActived ? theme.colors.titleActive : theme.colors.label};
    text-align: center;
  `}
`

const Cell = styled.div<{isLastItem: boolean; isCompleted: boolean}>`
  ${({theme, isLastItem, isCompleted}) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    position: relative;

    ${!isLastItem &&
    css`
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        top: 16px;
        left: 50%;
        background-color: ${isCompleted
          ? theme.colors.primary
          : theme.colors.line};
      }
    `}
  `}
`

export type Props = {
  current: number
  items: {
    id: string
    label?: string
  }[]
}

const Stepper = ({items, current = 1}: Props): React.ReactElement | null => {
  if (!items.length) return null

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={items.length}
    >
      {items.map((step, index) => {
        const isCompleted = current - 1 > index
        const isLastItem = items.length - 1 === index
        const isActived = index + 1 <= current
        const isChecked = index + 1 < current

        return (
          <Cell key={step.id} isLastItem={isLastItem} isCompleted={isCompleted}>
            <Step isActived={isActived}>
              {isChecked ? <Icon name="check" /> : index + 1}
            </Step>
            {step.label && <Label isActived={isActived}>{step.label}</Label>}
          </Cell>
        )
      })}
    </Wrapper>
  )
}

export default Stepper
