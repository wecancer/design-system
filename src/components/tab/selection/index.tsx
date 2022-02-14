import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import TabSectionContext, { TabId } from './tab-section.context'

const Container = styled.section`
  ${({ theme }) => css`
    font-family: ${theme.font.familyRedesign};
  `}
`

export type Props = {
  children: React.ReactNode
}

const TabContext = ({ children }: Props) => {
  const [tabIds, setTabIds] = useState<TabId[]>([])
  const [tabActiveId, setTabActiveId] = useState<TabId | null>(null)

  return (
    <TabSectionContext.Provider
      value={{ tabIds, setTabIds, tabActiveId, setTabActiveId }}
    >
      <Container>{children}</Container>
    </TabSectionContext.Provider>
  )
}

export default TabContext
