import { createContext } from 'react'

export type GapDirection = 'left' | 'right' | 'none'

type CardContext = {
  gapDirection: GapDirection
  setGapDirection(dir: GapDirection): void
}

const Context = createContext<CardContext>({
  gapDirection: 'none',
  setGapDirection: () => null,
})

export default Context
