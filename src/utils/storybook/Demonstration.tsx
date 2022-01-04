import React from 'react'
import styled, {css} from 'styled-components'

type DemonstrationType = {
  width?: string
  height?: string
}

const Wrapper = styled.div<DemonstrationType>`
  ${({width, height}) => css`
    background-color: rgba(74, 188, 100, 0.2);
    width: ${width};
    height: ${height};
    border-radius: 1rem;
  `}
`

const Demonstration = ({width = '5rem', height = '5rem'}: DemonstrationType) => {
  return <Wrapper width={width} height={height} />
}

export default Demonstration
