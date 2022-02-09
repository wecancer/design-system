import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import TableRowContext, {StyleType} from './TableRow.Context'
import {BgTypes} from '../../styles/theme'
import useCalcGridColumns from './useCalcGridColumns'

const Container = styled.li<{typeStyle: StyleType}>`
  ${({typeStyle, theme}) => css`
    border-radius: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.08);

    ${typeStyle !== 'none' &&
    css`
      background-color: ${theme.colors[BgTypes[typeStyle]]};
    `}
  `}
`

const Wrapper = styled.div<{gridColumns: string}>`
  ${({gridColumns}) => css`
    display: grid;
    border-radius: 1rem;
    grid-template-columns: ${gridColumns};

    & > .wc-table-cell:first-child {
      border-radius: 1rem 0 0 1rem;
    }

    & > .wc-table-cell:last-child {
      border-radius: 0 1rem 1rem 0 !important;
    }

    & > .wc-table-cell-solid {
      border-radius: 1rem 0 0 1rem;
    }

    &
      > .wc-table-cell:not(:last-child).wc-table-cell-solid
      ~ .wc-table-cell-solid {
      border-radius: 0;
    }
  `}
`

type Props = {
  children: React.ReactElement[]
}

const TableRow = ({children}: Props): React.ReactElement => {
  const [typeStyle, setTypeStyle] = useState<StyleType>('none')
  const gridColumns = useCalcGridColumns(children.length)

  return (
    <TableRowContext.Provider value={{typeStyle, setTypeStyle}}>
      <Container typeStyle={typeStyle}>
        <Wrapper gridColumns={gridColumns}>{children}</Wrapper>
      </Container>
    </TableRowContext.Provider>
  )
}

export default TableRow
