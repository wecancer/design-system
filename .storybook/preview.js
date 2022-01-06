import React from 'react'
import {ThemeProvider} from 'styled-components'
import WecancerProvider from '../src/WecancerProvider'

export const decorators = [
  (Story) => (
    <WecancerProvider>
      <Story />
    </WecancerProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}