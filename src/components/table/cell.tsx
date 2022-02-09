import React, {useContext, useEffect} from 'react'
import styled, {css} from 'styled-components'

import TableRowContext from './table-row.context'
import {BgTypes} from '../../styles/theme'

type StyleType = keyof typeof BgTypes | 'none'

const Container = styled.div<{isSolidBg: boolean}>`
  ${({theme, isSolidBg}) => css`
    padding: 0.75rem 1rem;

    ${isSolidBg &&
    css`
      background-color: ${theme.colors.offWhite};
    `}
  `}
`

export type Props = {
  children: React.ReactNode
  type?: StyleType
}

const TableCell = ({children, type = 'none'}: Props): React.ReactElement => {
  const {setTypeStyle} = useContext(TableRowContext)
  const isSolidBg = type === 'none'

  useEffect(() => {
    if (type !== 'none') {
      setTypeStyle(type)
    }
  }, [type, setTypeStyle])

  const classNames = [
    'wc-table-cell',
    isSolidBg ? 'wc-table-cell-solid' : '',
  ].filter((cname) => !!cname)

  return (
    <Container className={classNames.join(' ')} isSolidBg={isSolidBg}>
      {children}
    </Container>
  )
}

export default TableCell
