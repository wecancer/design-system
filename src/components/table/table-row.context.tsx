import React from 'react'
import { BgTypes } from '../../styles/theme'

export type StyleType = keyof typeof BgTypes | 'none'

type TableRowContext = {
  typeStyle: StyleType
  setTypeStyle: React.Dispatch<React.SetStateAction<StyleType>>
}

const defaultValue: TableRowContext = {
  typeStyle: 'none',
  setTypeStyle: () => null,
}

export default React.createContext<TableRowContext>(defaultValue)
