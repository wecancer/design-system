import React, { createContext, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

import usePortal from '../use-portal'
import Icon from '../../components/icon'
import ButtonNoAppearance from '../../components/button/no-appearance'

export type ToastType = 'default' | 'error' | 'success'

type ToastState = 'opening' | 'closing'

export type Toast = {
  id: string
  message: React.ReactNode
  type: ToastType
  state: ToastState
}

type Context = {
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>
}

const defaultValue = {
  setToasts: () => null,
}

const opeing = keyframes`
  from {
    opacity: 0;
    transform: translateX(400px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const closing = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(400px);
  }
`

const ToastList = styled.div`
  width: 400px;
  position: fixed;
  top: 25px;
  right: 0;
  overflow: hidden;
  z-index: 600;

  & > * {
    margin-bottom: 20px;
  }
`

const CloseButton = styled(ButtonNoAppearance)`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
  color: ${({ theme }) => theme.colors.white};
`

const ToastItem = styled.div<{ toastType: ToastType; animEffect: ToastState }>`
  ${({ toastType, animEffect, theme }) => css`
    width: 375px;
    position: relative;
    text-align: center;
    box-shadow: 0.125rem 0.125rem 0.625rem rgba(0, 0, 0, 0.2);

    ${(() => {
      if (animEffect === 'opening') {
        return css`
          animation: ${opeing} 250ms ease-in-out;
        `
      }
      if (animEffect === 'closing') {
        return css`
          animation: ${closing} 250ms ease-out;
        `
      }
      return css``
    })()}

    ${(() => {
      if (toastType === 'error') {
        return css`
          color: ${theme.colors.white};
          background-color: ${theme.colors.error};
        `
      }
      if (toastType === 'success') {
        return css`
          color: ${theme.colors.white};
          background-color: ${theme.colors.success};
        `
      }
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      `
    })()}
  `}
`

const ToastItemContent = styled.div`
  word-break: break-all;
  padding: 1.5rem 3.5rem 1.5rem 1.5rem;
`

export const ToastContext = createContext<Context>(defaultValue)

type Props = {
  children: React.ReactNode
}

const ToastProvider = ({ children }: Props) => {
  const portal = usePortal()
  const [toastList, setToasts] = useState<Toast[]>([])

  const handleRemoveItem = (id: string) =>
    setToasts((toasts) => toasts.filter((item) => item.id !== id))

  return (
    <ToastContext.Provider value={{ setToasts }}>
      {children}
      {toastList.length > 0 &&
        portal.add(
          <ToastList>
            {toastList.map((toast) => (
              <ToastItem
                toastType={toast.type}
                key={toast.id}
                animEffect={toast.state}
              >
                <ToastItemContent>{toast.message}</ToastItemContent>
                <CloseButton onClick={() => handleRemoveItem(toast.id)}>
                  <Icon name="timesSolid" size={24} />
                </CloseButton>
              </ToastItem>
            ))}
          </ToastList>,
        )}
    </ToastContext.Provider>
  )
}

export default ToastProvider
