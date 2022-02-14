import React from 'react'

type AccordionContext = {
  isMulti: boolean
  listOpen: string[]
  setListOpen: React.Dispatch<React.SetStateAction<string[]>>
}

const defaultValue = {
  isMulti: true,
  listOpen: [],
  setListOpen: () => null,
}

export default React.createContext<AccordionContext>(defaultValue)
