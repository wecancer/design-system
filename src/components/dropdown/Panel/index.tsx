import React from 'react'
import styled, { css } from 'styled-components'

import { keyActionClick } from '../../../events'

import Dropdown from '..'
import ListContainer, { Option } from '../simple-options-container'

const BtnTrigger = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    font-family: ${theme.font.familyRedesign};
  `}
`

const Label = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
`

type OnChange = {
  option: Option
}

export type Props = {
  label: string
  value?: Option
  options: Option[]
  onChange(params: OnChange): void
}

const DropdownSelect = ({ options, value, onChange, label }: Props) => {
  return (
    <Dropdown
      trigger={({ handleToggle }) => (
        <BtnTrigger
          tabIndex={0}
          role="button"
          onClick={handleToggle}
          onKeyDown={(e) => keyActionClick(e, handleToggle)}
        >
          <Label>{value?.label || label}</Label>
        </BtnTrigger>
      )}
    >
      {({ handleClose }) => (
        <ListContainer
          hasArrow
          options={options}
          onSelect={(option) => {
            onChange({ option })
            handleClose()
          }}
        />
      )}
    </Dropdown>
  )
}

export default DropdownSelect
