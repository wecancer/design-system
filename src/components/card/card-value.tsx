import React, { useContext, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { ColorsTemplate } from '../../styles/theme'
import Context from './card.context'

const Container = styled.div<{ fillColor: ColorsTemplate }>`
  ${({ theme, fillColor }) => css`
    min-width: 90px;
    height: 90px;
    background-color: ${theme.colors[fillColor]};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-self: flex-start;
  `}
`

const Value = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.offWhite};
    font-size: 2rem;
    font-weight: 500;
  `}
`

const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.offWhite};
    font-size: 0.875rem;
  `}
`

type Props = {
  value: number | string
  label: string
  prevChar?: string
  nextChar?: string
  fillColor?: ColorsTemplate
}

const CardValue = ({
  value,
  label,
  prevChar,
  nextChar,
  fillColor = 'primary',
}: Props) => {
  const { setStyle } = useContext(Context)

  useEffect(() => {
    setStyle({
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 90px) 1fr',
      alignItems: 'center',
    })
  }, [])

  return (
    <Container fillColor={fillColor}>
      <Value>
        {prevChar} {value} {nextChar}
      </Value>
      <Label>{label}</Label>
    </Container>
  )
}

export default CardValue
