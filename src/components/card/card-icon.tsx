import React from 'react'
import styled from 'styled-components'

import Icon, { IconsTypes } from '../icon'

const IconContainer = styled.div`
  padding: 1.25rem 1rem 1rem;
`

type Props = {
  name: IconsTypes
  size: number
}

const CardIcon = ({ name, size }: Props): React.ReactElement => {
  return (
    <IconContainer>
      <Icon name={name} size={size} />
    </IconContainer>
  )
}

export default CardIcon
