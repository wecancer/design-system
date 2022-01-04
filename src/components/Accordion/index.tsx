import React, {useState} from 'react'
import styled, {css} from 'styled-components'

import Context from './Accordion.context'

export type Props = {
  isMulti?: boolean
  children: React.ReactNode
}

const Container = styled.div`
  ${({theme}) => css`
    font-family: ${theme.font.familyRedesign};

    & > *:not(:last-child) {
      margin-bottom: 1.25rem;
    }
  `}
`

const Accordion = ({children, isMulti = true}: Props): React.ReactElement => {
  const [listOpen, setListOpen] = useState<string[]>([])
  return (
    <Context.Provider value={{listOpen, isMulti, setListOpen}}>
      <Container>{children}</Container>
    </Context.Provider>
  )
}

export default Accordion
