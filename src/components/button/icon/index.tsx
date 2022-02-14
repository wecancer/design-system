import React from 'react'
import styled from 'styled-components'

import Loading from '../../loading'
import Icon, { IconsTypes } from '../../icon'
import { ButtonStyled } from '..'

const Container = styled(ButtonStyled)`
  width: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export type Props = {
  title?: string
  icon: IconsTypes
  primary?: boolean
  className?: string
  isLoading?: boolean
  isDisabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const ButtonIcon = ({
  icon,
  title,
  primary,
  onClick,
  isLoading,
  className,
  isDisabled = false,
}: Props): React.ReactElement => (
  <Container
    title={title}
    onClick={onClick}
    disabled={isDisabled}
    className={className}
    colorType={primary ? 'primary' : 'secondary'}
  >
    {isLoading ? <Loading /> : <Icon name={icon} />}
  </Container>
)

export default ButtonIcon
