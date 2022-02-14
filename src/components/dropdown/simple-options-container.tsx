import React from 'react'
import styled, { css } from 'styled-components'

import { keyActionClick } from '../../events'

const Item = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    padding: 0.625rem 1.5rem;
    transition: ease 250ms background-color;

    &:hover {
      background-color: ${theme.colors.line};
    }
  `}
`

const Container = styled.div<{ hasArrow: boolean }>`
  ${({ theme, hasArrow }) => css`
    font-family: ${theme.font.familyRedesign};
    min-width: 200px;
    max-width: 100%;
    padding: 1rem 0;
    border-radius: 1rem;
    background-color: ${theme.colors.inputBg};

    ${hasArrow &&
    css`
      transform: translateY(10px);
      &::before {
        content: '';
        position: absolute;
        top: -9px;
        left: 12px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid ${theme.colors.inputBg};
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

export type OptionValue = string | number

export type Option = {
  label: string
  value: OptionValue
}

type Props = {
  options: Option[]
  hasArrow?: boolean
  onSelect(option: Option): void
  className?: string
}

const ListContainer = ({
  options,
  hasArrow,
  onSelect,
  ...props
}: Props): React.ReactElement => {
  return (
    <Container role="listbox" tabIndex={0} hasArrow={!!hasArrow} {...props}>
      {options.map((option) => (
        <Item
          tabIndex={0}
          role="button"
          key={option.value}
          onClick={() => onSelect(option)}
          onKeyDown={(e) => keyActionClick(e, () => onSelect(option))}
        >
          <Label>{option.label}</Label>
        </Item>
      ))}
    </Container>
  )
}

export default ListContainer
