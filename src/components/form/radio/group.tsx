import React from 'react'
import styled, { css } from 'styled-components'

import Radio, { RadioItem } from '.'

const Container = styled.div<{ isRow: boolean }>`
  ${({ isRow }) =>
    isRow
      ? css`
          display: block;
          & > *:not(:last-child) {
            margin-bottom: 1rem;
          }
        `
      : css`
          display: flex;
          & > *:not(:last-child) {
            margin-right: 20px;
          }
        `}
`

type ChangeParams = {
  index: number
  item: RadioItem
  itemsUpdated: RadioItem[]
}

export type Props = {
  items: RadioItem[]
  isDisabled?: boolean
  line?: 'row' | 'column'
  onChange?(params: ChangeParams): void
}

const RadioGroup = ({ items, onChange, isDisabled, line = 'row' }: Props) => (
  <Container role="radiogroup" isRow={line === 'row'}>
    {items.map((item, index, arr) => (
      <Radio
        key={item.id}
        label={item.label}
        onChange={() =>
          typeof onChange === 'function' &&
          onChange({
            item,
            index,
            itemsUpdated: arr.map((value) =>
              value.id === item.id
                ? { ...value, isChecked: true }
                : { ...value, isChecked: false },
            ),
          })
        }
        isChecked={item.isChecked}
        isDisabled={isDisabled || item.isDisabled}
      />
    ))}
  </Container>
)

export default RadioGroup
