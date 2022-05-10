import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import usePortal from '../../hooks/use-portal'

import Icon from '../icon'
import BtnNoAppearance from '../button/no-appearance'
import { keyActionClick, KeyboardEvt, keyEsc } from '../../events'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 500;
  overflow: hidden;
`

const Container = styled.section<{ widthSize: number }>`
  ${({ widthSize, theme }) => css`
    width: ${widthSize}px;
    color: ${theme.colors.titleActive};
    font-family: ${theme.font.family};
    position: relative;
    padding: 1.5rem;
    margin: 3rem auto;
    z-index: 501;
    background-color: ${theme.colors.offWhite};
    border-radius: 1.5rem;
    box-shadow: 0px 2rem 4rem rgba(17, 17, 17, 0.08);
  `}
`

const Header = styled.header`
  ${({ theme }) => css`
    h2 {
      font-size: 1.5rem;
      line-height: 2.375rem;
      letter-spacing: 0;
      font-weight: ${theme.font.weights.semiBold};
      margin: 0 0 1rem;
      word-wrap: break-word;
      padding-right: 2.375rem;
    }
  `}
`

const BtnClose = styled(BtnNoAppearance)`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
`

export type Props = {
  width?: number
  title?: string
  isOpen?: boolean
  children: React.ReactNode
  onClose?(): void
}

const Modal = ({
  children,
  title,
  isOpen = false,
  onClose,
  width = 500,
}: Props) => {
  const portal = usePortal()
  const overlayRef = useRef(null)

  useEffect(() => {
    const handle = (e: KeyboardEvent) =>
      keyEsc(e as unknown as KeyboardEvt, () => onClose?.())
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [])

  const handleCloseOverlayClick = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (overlayRef.current === e.target && onClose) {
      onClose()
    }
  }

  if (!isOpen) return null

  return portal.add(
    <Overlay
      role="button"
      tabIndex={-1}
      ref={overlayRef}
      onClick={handleCloseOverlayClick}
      onKeyDown={(e) => keyActionClick(e, () => handleCloseOverlayClick(e))}
    >
      <Container widthSize={width}>
        <Header>
          {title && <h2>{title}</h2>}
          <BtnClose onClick={onClose}>
            <Icon name="times" size={26} />
          </BtnClose>
        </Header>
        {children}
      </Container>
    </Overlay>,
  )
}

export default Modal
