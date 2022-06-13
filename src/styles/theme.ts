export type ColorsTemplate =
  | 'primary'
  | 'secondary'
  | 'turquoise'
  | 'violet'
  | 'pink'
  | 'orange'
  | 'purple'
  | 'yellow'
  | 'magenta'
  | 'success'
  | 'warning'
  | 'error'
  | 'white'
  | 'text'

export enum BgTypes {
  turquoise = 'bgTurquoise',
  violet = 'bgViolet',
  pink = 'bgPink',
  orange = 'bgOrange',
  success = 'bgSuccess',
  warning = 'bgWarning',
  error = 'bgError',
  input = 'inputBg',
  line = 'line',
  white = 'offWhite',
}

const theme = {
  colors: {
    primary: '#0080EB',
    darkPrimary: '#00318A',
    lightPrimary: '#00BEF7',
    extraLightPrimary: '#8DE7E6',
    focusPrimary: '#CEE2FF',
    bgPrimary: '#D8E3FF',

    secondary: '#1A8F3F',
    darkSecondary: '#0D4C0B',
    lightSecondary: '#34C279',
    extraLightSecondary: '#7CEB93',
    bgSecondary: '#C7EBC6',

    text: '#14142B',
    titleActive: '#14142B',
    body: '#4E4B66',
    label: '#6E7191',
    placeholder: '#A0A3BD',
    line: '#D9DBE9',
    focusLine: '#F1F2F7',
    inputBg: '#EFF0F6',
    bg: '#F7F7FC',
    offWhite: '#FCFCFC',
    white: '#FFFFFF',

    turquoise: '#17C3B2',
    darkTurquoise: '#30ACAC',
    lightTurquoise: '#6CDEDE',
    bgTurquoise: '#6CDEDE',

    violet: '#7433FF',
    darkViolet: '#3D2EEA',
    lightViolet: '#624AF2',
    bgViolet: '#624AF2',

    pink: '#ED2E7E',
    darkPink: '#C30052',
    lightPink: '#FF84B7',
    bgPink: '#FF84B7',

    orange: '#FF7849ED',
    darkOrange: '#FF5216',
    lightOrange: '#FF9E7C',
    bgOrange: '#FFD8CB',

    purple: '#A62C9E',
    magenta: '#F51F4F',
    yellow: '#FF9B00',

    success: '#00BA88',
    darkSuccess: '#00966D',
    lightSuccess: '#F2FFFB',
    bgSuccess: '#F2FFFB',
    focusSuccess: '#C7F3E1',

    warning: '#F4B740',
    darkWarning: '#946200',
    lightWarning: '#FFD789',
    bgWarning: '#FFF4DF',

    error: '#DC3545',
    darkError: '#90131F',
    lightError: '#FF84B7',
    bgError: '#FFDFED',
    focusError: '#FFEAEA',
  },
  font: {
    family: 'Poppins, sans-serif',
    weights: {
      light: '300',
      regular: '400',
      semiBold: '500',
      bold: '700',
    },
  },
}

export default theme
