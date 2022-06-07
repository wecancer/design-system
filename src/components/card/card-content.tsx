import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { BgTypes } from '../../styles/theme'

import Context, { GapDirection } from './card.context'

export const CardContentStyled = styled.div<{
  gapDirection: GapDirection
  bgColor: BgTypes
}>`
  ${({ theme, gapDirection, bgColor }) => css`
    font-family: ${theme.font.family};
    background-color: ${theme.colors[bgColor]};

    border-radius: 1rem;
    position: relative;
    z-index: 2;

    ${gapDirection === 'left'
      ? css`
          min-height: 46px;
          margin-left: 1.875rem;
          padding: 1rem 1rem 1rem 4.06rem;
          border-radius: 1rem;
          box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
        `
      : css`
          padding: 1rem;
        `}
  `}
`

type Props = {
  children: React.ReactNode
}

const CardContent = ({ children }: Props): React.ReactElement => {
  const { gapDirection, bgColor } = useContext(Context)
  return (
    <CardContentStyled bgColor={bgColor} gapDirection={gapDirection}>
      {children}
    </CardContentStyled>
  )
}

export default CardContent
