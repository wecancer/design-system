import React from 'react'
import { ThemeProvider, createGlobalStyle, css } from 'styled-components'

import themeVars from './styles/theme'
import WecancerContext from './wecancer-context'
import ToastProvider from './hooks/toast/toast-provider'

const ResetHtml = createGlobalStyle`
  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&family=Roboto:wght@400;500;700&display=swap');

    * {
      padding: 0;
      margin: 0;
    }

    body {
      min-height: 100vh;
      line-height: 1.5;
      font-size: 16px;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      color: ${theme.colors.titleActive};
      font-family: ${theme.font.family};
      background-color: ${theme.colors.offWhite};
    }

    p {
      font-size: 1rem;
      font-weight: ${theme.font.weights.regular};
    }

    b,
    strong {
      font-weight: ${theme.font.weights.bold};
    }

    button,
    input,
    select,
    textarea {
      font-size: 1rem;
      font-family: ${theme.font.family};
    }

    h1 {
      font-size: 3rem;
      font-weight: ${theme.font.weights.bold};
    }

    h2 {
      font-size: 2.5rem;
      font-weight: ${theme.font.weights.bold};
    }

    h3 {
      font-size: 2rem;
      font-weight: ${theme.font.weights.bold};
    }

    h4 {
      font-size: 1.5rem;
      font-weight: ${theme.font.weights.bold};
    }

    h5 {
      font-size: 1.25rem;
      font-weight: ${theme.font.weights.bold};
    }

    h6 {
      font-size: 1rem;
      font-weight: ${theme.font.weights.bold};
    }

    img {
      vertical-align: middle;
      border-style: none;
      max-width: 100%;
    }
  `}
`

const ROOT_ELEMENT_ID = process?.env?.REACT_APP_ROOT_ELEMENT_ID || 'we-root'

type Props = {
  children: React.ReactNode
}

const createRootElement = () => {
  const weRoot = document.createElement('div')
  weRoot.setAttribute('id', ROOT_ELEMENT_ID)
  document.body.appendChild(weRoot)
  return weRoot
}

const WecancerProvider = ({ children }: Props) => {
  const rootElement =
    document.getElementById(ROOT_ELEMENT_ID) || createRootElement()

  return (
    <WecancerContext.Provider value={{ rootElement }}>
      <ThemeProvider theme={themeVars}>
        <ToastProvider>
          <ResetHtml />
          {children}
        </ToastProvider>
      </ThemeProvider>
    </WecancerContext.Provider>
  )
}

export default WecancerProvider
