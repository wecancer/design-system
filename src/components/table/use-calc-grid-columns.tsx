import { useContext } from 'react'
import TableContext from './table.context'

export default function useCalcGridColumns(collsLength: number): string {
  const { cellsWidth } = useContext(TableContext)

  return new Array(collsLength)
    .fill(null)
    .map((item, index) => cellsWidth[index] || '1fr')
    .join(' ')
}
