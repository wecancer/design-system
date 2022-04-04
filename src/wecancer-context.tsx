import { createContext } from 'react'
import { Language } from './locale/language'

type Context = {
  language: Language
  rootElement: HTMLElement | null
}

export default createContext<Context>({
  language: 'en-US',
  rootElement: null,
})
