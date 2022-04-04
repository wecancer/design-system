import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import ResetCSS from './reset-css'
import innerTheme from './styles/theme'
import WecancerContext from './wecancer-context'
import ToastProvider from './hooks/toast/toast-provider'
import { Language } from './locale/language'

const ROOT_ELEMENT_ID = process?.env?.REACT_APP_ROOT_ELEMENT_ID || 'we-root'

type Props = {
  children: React.ReactNode
  theme?: DefaultTheme
  language?: Language
  hasStyledComponentsProvider?: boolean
}

const createRootElement = () => {
  const weRoot = document.createElement('div')
  weRoot.setAttribute('id', ROOT_ELEMENT_ID)
  document.body.appendChild(weRoot)
  return weRoot
}

const WecancerProvider = ({
  theme,
  children,
  language = 'en-US',
  hasStyledComponentsProvider = true,
}: Props) => {
  const rootElement =
    document.getElementById(ROOT_ELEMENT_ID) || createRootElement()

  const essentials = (
    <WecancerContext.Provider value={{ rootElement, language }}>
      <ToastProvider>
        <ResetCSS />
        {children}
      </ToastProvider>
    </WecancerContext.Provider>
  )

  if (hasStyledComponentsProvider) {
    return (
      <ThemeProvider theme={theme || innerTheme}>{essentials}</ThemeProvider>
    )
  }

  return essentials
}

export default WecancerProvider
