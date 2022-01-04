import React from 'react'
import {render, RenderResult} from '@testing-library/react'
import WecancerProvider from './WecancerProvider'

type Props = {
  children: React.ReactNode
}

const AllTheProviders = ({children}: Props) => {
  return <WecancerProvider>{children}</WecancerProvider>
}

// eslint-disable-next-line
const appRender = (ui: React.ReactElement, options?: any): RenderResult =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {appRender as render}
