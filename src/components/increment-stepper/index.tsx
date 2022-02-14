import React from 'react'
import styled, { css } from 'styled-components'

import Icon from '../icon'
import ButtonNoAppearance from '../button/no-appearance'
import { keyArrowDown, keyArrowUp } from '../../events'

const Container = styled.div`
  display: grid;
  grid-template-columns: 32px 40px 32px;
  column-gap: 0.5rem;
`

const Input = styled.input`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.font.familyRedesign};
    font-size: 1rem;
    border: none;
    background-color: transparent;
  `}
`

const BtnStepper = styled(ButtonNoAppearance)`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.familyRedesign};
    border: 1px solid ${theme.colors.inputBg};
    background-color: ${theme.colors.inputBg};
    transition: all ease 250ms;

    &:not(:disabled):hover {
      background-color: ${theme.colors.offWhite};
    }

    &:active {
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }

    &:focus {
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 1px 6px ${theme.colors.focusPrimary};
    }

    &:disabled {
      opacity: 0.7;
      cursor: default;
    }
  `}
`

type OnChangeParams = {
  value: number
}

export type Props = {
  min?: number
  max?: number
  value: number
  isDisabled?: boolean
  onChange({ value }: OnChangeParams): void
}

const IncrementStepper = ({
  isDisabled = false,
  value,
  min,
  max,
  onChange,
}: Props) => {
  const isIncrementable = max === undefined || value < max
  const isDecrementable = min === undefined || value > min

  const handleIncrement = () => {
    if (isIncrementable) {
      onChange({ value: value + 1 })
    }
  }

  const handleDecrement = () => {
    if (isDecrementable) {
      onChange({ value: value - 1 })
    }
  }

  return (
    <Container>
      <BtnStepper
        type="button"
        disabled={!isDecrementable || isDisabled}
        onClick={handleDecrement}
      >
        <Icon size={10} name="minus" />
      </BtnStepper>
      <Input
        type="text"
        value={value}
        disabled={isDisabled}
        onKeyDown={(e) => {
          keyArrowUp(e, handleIncrement)
          keyArrowDown(e, handleDecrement)
        }}
        onBlur={() => {
          if (typeof min === 'number' && value < min) {
            onChange({ value: min })
          }
          if (typeof max === 'number' && value > max) {
            onChange({ value: max })
          }
        }}
        onChange={(e) => {
          if (/^-?([0-9]+)$/.test(e.currentTarget.value)) {
            onChange({ value: +e.currentTarget.value })
          }
          if (e.currentTarget.value === '') {
            onChange({ value: 0 })
          }
        }}
      />
      <BtnStepper
        type="button"
        disabled={!isIncrementable || isDisabled}
        onClick={handleIncrement}
      >
        <Icon size={10} name="plus" />
      </BtnStepper>
    </Container>
  )
}

export default IncrementStepper
