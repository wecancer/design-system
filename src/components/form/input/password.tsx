import React, { useState } from 'react'
import Input, { Props as InputProps } from './input'

export type Props = Omit<InputProps, 'type' | 'iconButtonRight'>

const InputPassword = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
      <Input
        autoComplete="off"
        type={isShowPassword ? 'text' : 'password'}
        ref={ref}
        {...props}
        iconButtonRight={{
          type: isShowPassword ? 'view' : 'unview',
          onClick() {
            setIsShowPassword(!isShowPassword)
          },
        }}
      />
    )
  },
)

export default InputPassword
