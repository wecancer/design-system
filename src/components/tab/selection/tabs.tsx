import React, { useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'

import Context from './tab-section.context'

const Container = styled.header`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.25rem;
`

type Props = {
  children: React.ReactNode
}

const Tabs = ({ children }: Props) => {
  const ref = useRef<HTMLElement>(null)
  const { setTabActiveId, activeDefault } = useContext(Context)

  useEffect(() => {
    const target = ref.current?.querySelectorAll('[data-tabtarget]')

    if (!activeDefault?.length && target?.length) {
      setTabActiveId(target[0].getAttribute('data-tabtarget'))
    }
  }, [setTabActiveId])

  return <Container ref={ref}>{children}</Container>
}

export default Tabs
