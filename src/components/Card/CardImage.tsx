import React, {useContext, useEffect} from 'react'
import styled, {css} from 'styled-components'
import Context from './Card.context'

const CardImageStyled = styled.div<{isLeft: boolean; heightSize: number; imageUrl: string}>`
  ${({imageUrl, heightSize, theme, isLeft}) => css`
    height: ${isLeft ? 78 : heightSize}px;
    font-family: ${theme.font.familyRedesign};
    background: url('${imageUrl}') no-repeat center;
    background-size: cover;
    position: relative;
    margin-bottom: -1rem;

    ${isLeft
      ? css`
          width: 78px;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 1rem;
          z-index: 3;
        `
      : css`
          border-radius: 1rem 1rem 0 0;
          z-index: 1;
        `}
  `}
`

type Props = React.HTMLAttributes<HTMLDivElement> & {
  position?: 'top-left'
  height?: number
  imageUrl: string
}

const CardImage = ({position, height = 100, ...props}: Props): React.ReactElement => {
  const {gapDirection, setGapDirection} = useContext(Context)

  useEffect(() => {
    setGapDirection(position === 'top-left' ? 'left' : 'none')
  }, [position, setGapDirection])

  return <CardImageStyled isLeft={gapDirection.includes('left')} heightSize={height} {...props} />
}

export default CardImage
