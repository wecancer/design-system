import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import ResetCSS from './reset-css'
import innerTheme from './styles/theme'
import WecancerContext from './wecancer-context'
import ToastProvider from './hooks/toast/toast-provider'

const ROOT_ELEMENT_ID = process?.env?.REACT_APP_ROOT_ELEMENT_ID || 'we-root'

type Props = {
  children: React.ReactNode
  theme?: DefaultTheme
}

const createRootElement = () => {
  const weRoot = document.createElement('div')
  weRoot.setAttribute('id', ROOT_ELEMENT_ID)
  document.body.appendChild(weRoot)
  return weRoot
}

const WecancerProvider = ({ children, theme }: Props) => {
  const rootElement =
    document.getElementById(ROOT_ELEMENT_ID) || createRootElement()

  return (
    <WecancerContext.Provider value={{ rootElement }}>
      <ThemeProvider theme={theme || innerTheme}>
        <ToastProvider>
          <ResetCSS />
          {children}
        </ToastProvider>
      </ThemeProvider>
    </WecancerContext.Provider>
  )
}

export default WecancerProvider
