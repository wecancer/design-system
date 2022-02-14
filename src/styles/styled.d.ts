import 'styled-components'
import theme from './theme'

type Theme = typeof theme

declare module 'styled-components' {
  // don't disable the eslint in other files
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme {}
}
