import React from 'react'
import Input, {Props as InputProps} from './Input'

export type Props = Omit<InputProps, 'type' | 'iconButtonRight'>

const InputEmail = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Input type="email" ref={ref} {...props} />
))

export default InputEmail
