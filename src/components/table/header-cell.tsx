import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { keyActionClick } from '../../events'
import Icon from '../icon'

const Container = styled.div`
  ${() => css`
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;

    &[role='button'] {
      cursor: pointer;
    }
  `}
`

const SortIcon = styled(Icon)`
  transform: translate(5px, 1px);
`

type SortDirection = 1 | -1

type SortParams = { direction: SortDirection }

export type Props = {
  children: React.ReactNode
  onSort?({ direction }: SortParams): void
}

const TableHeaderCell = ({ children, onSort }: Props): React.ReactElement => {
  const [sortDirection, setSortDirection] = useState<1 | -1>(-1)
  const classNames = ['wc-table-cell'].filter((cname) => !!cname)
  const hasSort = !!onSort

  const handleSort = () => {
    const direction = sortDirection === 1 ? -1 : 1
    setSortDirection(direction)
    onSort?.({ direction })
  }

  const buttonProps = onSort
    ? {
        role: 'button',
        tabIndex: 0,
        onClick: handleSort,
        onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) =>
          keyActionClick(e, handleSort),
      }
    : {}

  return (
    <Container {...buttonProps} className={classNames.join(' ')}>
      <div>
        {children}
        {hasSort && <SortIcon name="sort" size={12} />}
      </div>
    </Container>
  )
}

export default TableHeaderCell
