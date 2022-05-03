import React from 'react'
import styled, { css } from 'styled-components'
import useCalcGridColumns from './use-calc-grid-columns'

const Container = styled.li`
  margin-bottom: 0;
`

const Wrapper = styled.div<{ gridColumns: string }>`
  ${({ theme, gridColumns }) => css`
    color: ${theme.colors.label};
    font-size: 0.875rem;
    display: grid;
    grid-template-columns: ${gridColumns};

    .wc-table-cell {
      background-color: transparent;
    }
  `}
`

type Props = {
  children: React.ReactNode
}

const TableRowHeader = ({ children }: Props): React.ReactElement => {
  const gridColumns = useCalcGridColumns(React.Children.count(children))

  return (
    <Container>
      <Wrapper gridColumns={gridColumns}>{children}</Wrapper>
    </Container>
  )
}

export default TableRowHeader
