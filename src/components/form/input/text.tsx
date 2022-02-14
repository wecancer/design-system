import React from 'react'
import Input, { Props as InputProps } from './input'

export type Props = Omit<InputProps, 'type' | 'iconButtonRight'>

const InputText = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Input type="text" ref={ref} {...props} />
))

export default InputText
