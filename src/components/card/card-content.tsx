import React, {useContext} from 'react'
import styled, {css} from 'styled-components'

import Context, {GapDirection} from './card.context'

export const CardContentStyled = styled.div<{gapDirection: GapDirection}>`
  ${({theme, gapDirection}) => css`
    font-family: ${theme.font.familyRedesign};
    background-color: ${theme.colors.offWhite};

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

type Props = React.HTMLAttributes<HTMLDivElement>

const CardContent = (props: Props): React.ReactElement => {
  const {gapDirection} = useContext(Context)
  return <CardContentStyled gapDirection={gapDirection} {...props} />
}

export default CardContent
