import React, {useState, useRef} from 'react'
import styled, {css} from 'styled-components'

import OutsideEvent from '../OutsideEvent'

type AxisX = 'left' | 'right'

const Wrapper = styled(OutsideEvent)`
  position: relative;
  display: inline-block;
`

const TriggerContainer = styled.div``

const BoxContainer = styled.div<{triggerHeight: number; axisX: AxisX}>`
  ${({triggerHeight, axisX}) => css`
    position: absolute;
    top: ${triggerHeight + 10}px;
    ${axisX === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
  `}
`

export type ActionParams = {
  isOpen: boolean
  handleClose(): void
  handleToggle(): void
}

export type Props = {
  axisX?: AxisX
  trigger(params: ActionParams): React.ReactNode
  children(params: ActionParams): React.ReactNode
  className?: string
}

const Dropdown = ({axisX = 'left', children, trigger, ...props}: Props) => {
  const refTrigger = useRef<HTMLDivElement>(null)
  const [isOpen, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen(!isOpen)

  return (
    <Wrapper onClickOutside={handleClose} {...props}>
      <TriggerContainer ref={refTrigger}>
        {trigger({isOpen, handleClose, handleToggle})}
      </TriggerContainer>
      {isOpen && (
        <BoxContainer
          axisX={axisX}
          triggerHeight={refTrigger.current?.offsetHeight || 0}
        >
          {children({isOpen, handleClose, handleToggle})}
        </BoxContainer>
      )}
    </Wrapper>
  )
}

export default Dropdown
