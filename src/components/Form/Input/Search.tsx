import React from 'react'
import styled from 'styled-components'
import Input, {Props as InputProps} from './Input'

export type Props = Omit<InputProps, 'type' | 'iconButtonRight' | 'iconLeft'> & {
  onClear?(): void
}

const InputStyled = styled(Input)`
  &::-webkit-search-cancel-button {
    visibility: hidden;
    display: none;
  }
`

const InputSearch = React.forwardRef<HTMLInputElement, Props>(({onClear, ...props}: Props, ref) => (
  <InputStyled
    {...props}
    ref={ref}
    type="search"
    iconLeft="search"
    autoComplete="off"
    iconButtonRight={{
      type: 'close',
      onClick() {
        if (typeof onClear === 'function') {
          onClear()
        }
      },
    }}
  />
))

export default InputSearch
