import { createContext } from 'react'
import { BgTypes } from '../../styles/theme'

export type GapDirection = 'left' | 'right' | 'none'

type CardContext = {
  bgColor: BgTypes
  gapDirection: GapDirection
  setGapDirection(dir: GapDirection): void
  setStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>
}

const Context = createContext<CardContext>({
  setStyle: () => null,
  gapDirection: 'none',
  bgColor: BgTypes.white,
  setGapDirection: () => null,
})

export default Context
