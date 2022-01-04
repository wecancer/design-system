import React from 'react'
import styled from 'styled-components'

const BtnContainer = styled.button`
  appearance: none;
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
`
const ButtonNoAppearance = (props: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'css'>): React.ReactElement => (
  <BtnContainer type="button" {...props} />
)

export default ButtonNoAppearance
