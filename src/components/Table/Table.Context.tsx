import React from 'react'

type TableContext = {
  cellsWidth: string[]
  setCellsWidth: React.Dispatch<React.SetStateAction<string[]>>
}

const defaultValue: TableContext = {
  cellsWidth: [],
  setCellsWidth: () => null,
}

export default React.createContext<TableContext>(defaultValue)
