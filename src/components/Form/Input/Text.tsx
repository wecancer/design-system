import React from 'react'
import Input, {Props as InputProps} from './Input'

export type Props = Omit<InputProps, 'type' | 'iconButtonRight'>

const InputText = React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <Input type="text" ref={ref} {...props} />
))

export default InputText
