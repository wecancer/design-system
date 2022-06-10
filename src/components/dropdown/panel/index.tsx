import React from 'react'
import styled, { css } from 'styled-components'

import { keyActionClick } from '../../../events'

import Dropdown, { AxisX } from '../generic'
import ListContainer, { MenuItem } from '../generic/simple-options-container'

const BtnTrigger = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    font-family: ${theme.font.family};
  `}
`

const Label = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
`

export type Props = {
  label: string
  axisX?: AxisX
  items: MenuItem[]
}

const DropdownSelect = ({ items, label, axisX = 'left' }: Props) => {
  return (
    <Dropdown
      axisX={axisX}
      trigger={({ handleToggle }) => (
        <BtnTrigger
          tabIndex={0}
          role="button"
          onClick={handleToggle}
          onKeyDown={(e) => keyActionClick(e, handleToggle)}
        >
          <Label>{label}</Label>
        </BtnTrigger>
      )}
    >
      {(actions) => (
        <ListContainer axisX={axisX} actions={actions} hasArrow items={items} />
      )}
    </Dropdown>
  )
}

export default DropdownSelect
