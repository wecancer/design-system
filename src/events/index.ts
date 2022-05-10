import { KeyboardEvent } from 'react'

type Callback = () => void
export type KeyboardEvt = KeyboardEvent | KeyboardEvent<any>

export const keyActionClick = (e: KeyboardEvt, callback: Callback): void => {
  if (/Enter|\s/.test(e.key) && typeof callback === 'function') callback()
}

export const keyArrowDown = (e: KeyboardEvt, callback: Callback): void => {
  if (e.key === 'ArrowDown' && typeof callback === 'function') callback()
}

export const keyArrowUp = (e: KeyboardEvt, callback: Callback): void => {
  if (e.key === 'ArrowUp' && typeof callback === 'function') callback()
}

export const keyEsc = (e: KeyboardEvt, callback: Callback): void => {
  if (e.key === 'Escape' && typeof callback === 'function') callback()
}

export default null
