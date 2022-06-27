import React, { createContext } from 'react'

export type TabId = string

type TabSectionContext = {
  tabActiveId: TabId | null
  setTabActiveId: React.Dispatch<React.SetStateAction<TabId | null>>

  tabIds: TabId[]
  setTabIds: React.Dispatch<React.SetStateAction<TabId[]>>

  active?: string
}

const defaultValue = {
  tabIds: [],
  tabActiveId: null,
  setTabIds: () => null,
  setTabActiveId: () => null,
}

export default createContext<TabSectionContext>(defaultValue)
