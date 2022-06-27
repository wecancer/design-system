import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import TabSectionContext, { TabId } from './tab-section.context'

const Container = styled.section`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
  `}
`

export type Props = {
  children: React.ReactNode
  active?: string
}

const TabContext = ({ children, active }: Props) => {
  const [tabIds, setTabIds] = useState<TabId[]>([])
  const [tabActiveId, setTabActiveId] = useState<TabId | null>(active || null)

  return (
    <TabSectionContext.Provider
      value={{ tabIds, setTabIds, tabActiveId, setTabActiveId, active }}
    >
      <Container>{children}</Container>
    </TabSectionContext.Provider>
  )
}

export default TabContext
