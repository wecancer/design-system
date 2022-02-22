import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import TableContext from './table.context'

const allowPintSizes = /^\d{0,}(px|rem|fr|pt|%)$/

const Container = styled.ul`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    margin: 0;
    padding: 0;
    list-style: none;
  `}
`

const parseCellsWidthArray = (data: string[] | number[]): string[] =>
  data.map((item) => {
    if (typeof item === 'number') {
      return `${item}px`
    }
    if (typeof item === 'string' && allowPintSizes.test(item)) {
      return item
    }
    throw new Error(`Invalid point size ${item}.`)
  })

type CellsWitdh = string | string[] | number[]

export type Props = {
  cellsWitdh?: CellsWitdh
  children: React.ReactNode
}

const Table = ({ children, cellsWitdh = [] }: Props): React.ReactElement => {
  const [cellsW, setCellsWidth] = useState<string[]>(
    parseCellsWidthArray(
      typeof cellsWitdh === 'string' ? cellsWitdh.split(' ') : cellsWitdh,
    ),
  )

  return (
    <TableContext.Provider value={{ cellsWidth: cellsW, setCellsWidth }}>
      <Container>{children}</Container>
    </TableContext.Provider>
  )
}

export default Table
