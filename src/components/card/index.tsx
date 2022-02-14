import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Context, { GapDirection } from './card.context'
import { keyActionClick } from '../../events'

const Container = styled.div<{ isIndependentContent: boolean }>`
  ${({ theme, isIndependentContent }) => css`
    position: relative;

    ${!isIndependentContent &&
    css`
      border-radius: 1rem;
      box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
      background-color: ${theme.colors.offWhite};
    `}

    &[role='button'] {
      cursor: pointer;
    }
  `}
`

type Props = React.HTMLAttributes<HTMLDivElement> & {
  onClick?(
    e:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void
}

const Card = ({ onClick, ...props }: Props): React.ReactElement => {
  const [gapDirection, setGapDirection] = useState<GapDirection>('none')
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
    <Context.Provider value={{ gapDirection, setGapDirection }}>
      <Container
        isIndependentContent={gapDirection === 'left'}
        {...props}
        {...btnProps}
      />
    </Context.Provider>
  )
}

export default Card
