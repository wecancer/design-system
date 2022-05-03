import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import TableRowContext, { StyleType } from './table-row.context'
import { BgTypes } from '../../styles/theme'
import useCalcGridColumns from './use-calc-grid-columns'
import { keyActionClick } from '../../events'

const Container = styled.li<{ typeStyle: StyleType }>`
  ${({ typeStyle, theme }) => css`
    border-radius: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.08);

    &[role='button'] {
      cursor: pointer;
    }

    ${typeStyle !== 'none' &&
    css`
      background-color: ${theme.colors[BgTypes[typeStyle]]};
    `}
  `}
`

const Wrapper = styled.div<{ gridColumns: string }>`
  ${({ gridColumns }) => css`
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
  onClick?(
    event:
      | React.KeyboardEvent<HTMLLIElement>
      | React.MouseEvent<HTMLLIElement, MouseEvent>,
  ): void
  children: React.ReactNode
}

const TableRow = ({ children, onClick }: Props): React.ReactElement => {
  const [typeStyle, setTypeStyle] = useState<StyleType>('none')
  const gridColumns = useCalcGridColumns(React.Children.count(children))

  const clickParams =
    typeof onClick === 'function'
      ? {
          role: 'button',
          onClick,
          onKeyDown(event: React.KeyboardEvent<HTMLLIElement>) {
            keyActionClick(event, () => onClick(event))
          },
        }
      : {}

  return (
    <TableRowContext.Provider value={{ typeStyle, setTypeStyle }}>
      <Container {...clickParams} typeStyle={typeStyle}>
        <Wrapper gridColumns={gridColumns}>{children}</Wrapper>
      </Container>
    </TableRowContext.Provider>
  )
}

export default TableRow
