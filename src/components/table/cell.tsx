import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'

import TableRowContext from './table-row.context'
import { BgTypes } from '../../styles/theme'

type StyleType = keyof typeof BgTypes | 'none'
type Alignment = 'center' | 'left' | 'right'

const Container = styled.div<{ isSolidBg: boolean; align: Alignment }>`
  ${({ theme, isSolidBg, align }) => css`
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;

    ${(() => {
      if (align === 'center') {
        return css`
          justify-content: center;
          text-align: center;
        `
      }

      if (align === 'right') {
        return css`
          justify-content: flex-end;
          text-align: right;
        `
      }

      // left by default
      return css`
        justify-content: flex-start;
        text-align: left;
      `
    })()}

    ${isSolidBg &&
    css`
      background-color: ${theme.colors.offWhite};
    `}
  `}
`

export type Props = {
  type?: StyleType
  align?: Alignment
  className?: string
  children: React.ReactNode
}

const TableCell = ({
  children,
  className,
  type = 'none',
  align = 'left',
}: Props): React.ReactElement => {
  const { setTypeStyle } = useContext(TableRowContext)
  const isSolidBg = type === 'none'

  useEffect(() => {
    if (type !== 'none') {
      setTypeStyle(type)
    }
  }, [type, setTypeStyle])

  const classNames = [
    className,
    'wc-table-cell',
    isSolidBg ? 'wc-table-cell-solid' : '',
  ].filter((cname) => !!cname)

  return (
    <Container
      align={align}
      className={classNames.join(' ')}
      isSolidBg={isSolidBg}
    >
      <div>{children}</div>
    </Container>
  )
}

export default TableCell
