import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Context, { GapDirection } from './card.context'
import { keyActionClick } from '../../events'
import { BgTypes } from '../../styles/theme'

const Container = styled.div<{
  bgColor: BgTypes
  isIndependentContent: boolean
}>`
  ${({ theme, isIndependentContent, bgColor }) => css`
    position: relative;

    ${!isIndependentContent &&
    css`
      border-radius: 1rem;
      box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
      background-color: ${theme.colors[bgColor]};
    `}

    &[role='button'] {
      cursor: pointer;
    }
  `}
`

type Props = React.HTMLAttributes<HTMLDivElement> & {
  bgColor?: BgTypes
  children: React.ReactNode
  onClick?(
    e:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void
}

const Card = ({
  onClick,
  children,
  bgColor = BgTypes.white,
}: Props): React.ReactElement => {
  const [gapDirection, setGapDirection] = useState<GapDirection>('none')
  const [style, setStyle] = useState<React.CSSProperties>({})
  const btnProps =
    typeof onClick === 'function'
      ? {
          role: 'button',
          tabIndex: 0,
          onClick,
          onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) =>
            keyActionClick(e, () => onClick(e)),
        }
      : {}

  return (
    <Context.Provider
      value={{ gapDirection, setGapDirection, setStyle, bgColor }}
    >
      <Container
        {...btnProps}
        style={style}
        bgColor={bgColor}
        isIndependentContent={gapDirection === 'left'}
      >
        {children}
      </Container>
    </Context.Provider>
  )
}

export default Card
