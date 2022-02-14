import { KeyboardEvent } from 'react'

type Callback = () => void
type KeyboardEvt = KeyboardEvent | KeyboardEvent<HTMLDivElement>

export const keyActionClick = (e: KeyboardEvt, callback: Callback): void => {
  if (/Enter|\s/.test(e.key) && typeof callback === 'function') callback()
}

export const keyArrowDown = (e: KeyboardEvt, callback: Callback): void => {
  if (e.key === 'ArrowDown' && typeof callback === 'function') callback()
}

export const keyArrowUp = (e: KeyboardEvt, callback: Callback): void => {
  if (e.key === 'ArrowUp' && typeof callback === 'function') callback()
}

export default null
