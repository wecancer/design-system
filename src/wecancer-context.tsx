import { createContext } from 'react'

type Context = {
  rootElement: HTMLElement | null
}

export default createContext<Context>({
  rootElement: null,
})
