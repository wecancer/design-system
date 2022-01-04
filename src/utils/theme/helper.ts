import {Appeareances, DefaultTheme, KeysOfAppearances} from 'styled-components'

export function getAppearance(appearances: Appeareances, appearance?: KeysOfAppearances) {
  if (!appearance) {
    return {
      main: '',
      darken: '',
      light: '',
    }
  }

  return appearances[appearance]
}

export function getBorderDefaultThemed(theme: DefaultTheme, appearance: KeysOfAppearances) {
  return `${theme.border.default} ${getAppearance(theme.appearances, appearance).main}`
}
