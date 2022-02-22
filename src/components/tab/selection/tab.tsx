import React, { useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'

import Context, { TabId } from './tab-section.context'
import BtnNoAppearance from '../../button/no-appearance'
import { keyActionClick } from '../../../events'

const Item = styled(BtnNoAppearance)`
  ${({ theme }) => css`
    font-size: 1rem;
    font-family: ${theme.font.family};
    color: ${theme.colors.body};
    text-align: center;
    padding: 0.75rem 1.25rem;
    border-radius: 1rem;
    position: relative;
    transition: all ease 250ms;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.titleActive};
      background-color: ${theme.colors.inputBg};
    }

    &:active {
      color: ${theme.colors.titleActive};
    }

    &[aria-disabled='true'] {
      opacity: 0.7;
      cursor: default;
      &:hover {
        background-color: transparent;
      }
    }

    &[aria-selected='true'] {
      color: ${theme.colors.primary};
      &::after {
        content: '●';
        display: block;
        margin: 0;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  `}
`

type Props = {
  target: TabId
  isDisabled?: boolean
  children: React.ReactNode
}

const Tab = ({ children, target, isDisabled }: Props) => {
  const { setTabIds, tabActiveId, setTabActiveId } = useContext(Context)
  const isSelected = tabActiveId === target

  const handleClick = () => {
    setTabActiveId(target)
  }

  // register the target ID
  useEffect(() => {
    setTabIds((ids) => [...ids, target])
    return () => setTabIds((ids) => ids.filter((id) => id !== target))
  }, [setTabIds, target])

  return (
    <Item
      role="tab"
      onClick={handleClick}
      data-tabtarget={target}
      aria-selected={isSelected}
      aria-disabled={!!isDisabled}
      onKeyDown={(e) => keyActionClick(e, handleClick)}
    >
      {children}
    </Item>
  )
}

export default Tab
