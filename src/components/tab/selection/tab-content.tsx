import React, { useContext } from 'react'
import Context, { TabId } from './tab-section.context'

type Props = {
  id: TabId
  children: React.ReactNode
}

const TabContent = ({ children, id }: Props) => {
  const { tabActiveId } = useContext(Context)

  if (tabActiveId !== id) return null

  return <>{children}</>
}

export default TabContent
