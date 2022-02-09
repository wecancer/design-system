import React from 'react'
import styled, {css} from 'styled-components'

import Radio from '.'

const Container = styled.div<{isRow: boolean}>`
  ${({isRow}) =>
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

type Item = {
  id: string
  label: string
  isChecked: boolean
  isDisabled?: boolean
}

type ChangeParams = {
  item: Item
  index: number
  itemsUpdated: Item[]
}

export type Props = {
  onChange?(params: ChangeParams): void
  isDisabled?: boolean
  line: 'row' | 'column'
  items: Item[]
}

const RadioGroup = ({items, onChange, isDisabled, line = 'row'}: Props) => (
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
                ? {...item, isChecked: !item.isChecked}
                : value,
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
