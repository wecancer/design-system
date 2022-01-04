const appearances = {
  text: {
    light: '#6E7191',
    main: '#14142B',
    darken: '#000000',
  },
  primary: {
    light: '#6295ea',
    main: '#4787f3',
    darken: '#336ed2',
  },
  secondary: {
    light: '#64DD80',
    main: '#4ABC64',
    darken: '#2AA851',
  },
  light: {
    light: '#FAFAFA',
    main: '#FFF',
    darken: '#EFEFEF',
  },
  dark: {
    light: '#CACACA',
    main: '#515151',
    darken: '#000',
  },
  success: {
    light: '#F2FFFB',
    main: '#00BA88',
    darken: '#00936b',
  },
  warning: {
    light: '#E0C71F',
    main: '#E0C71F',
    darken: '#CC8F02',
  },
  caution: {
    light: '#f78726',
    main: '#f78726',
    darken: '#CC8F02',
  },
  danger: {
    light: '#FFF3F8',
    main: '#dc3545',
    darken: '#90131f',
  },
  disabled: {
    light: '#EFF0F6',
    main: '#EFF0F6',
    darken: '#A0A3BD',
  },
  reDesignColor: {
    light: '#4786f3',
    main: '#005ac0',
    darken: '#00328f',
  },
}

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

export enum BgTypes {
  turquoise = 'bgTurquoise',
  violet = 'bgViolet',
  pink = 'bgPink',
  orange = 'bgOrange',
  success = 'bgSuccess',
  warning = 'bgWarning',
  error = 'bgError',
  input = 'inputBg',
}

export default {
  appearances,
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

    warning: '#F4B740',
    darkWarning: '#946200',
    lightWarning: '#FFD789',
    bgWarning: '#FFF4DF',

    error: '#DC3545',
    darkError: '#90131F',
    lightError: '#FF84B7',
    bgError: '#FFDFED',
  },
  boxShadow: {
    smooth: '0 4px 8px rgba(0, 0, 0, 0.06)',
    default: '0px 8px 16px rgba(17, 17, 17, 0.06)',
    sharp: '0px 8px 16px rgba(17, 17, 17, 0.4)',
  },
  border: {
    default: '1px solid ',
  },
  borderRadius: {
    default: '1rem',
  },
  container: {
    maxWidth: '1000px',
  },
  button: {
    borderRadius: '0.8rem',
    sizes: {
      xs: {
        paddingX: 8,
        paddingY: 0,
        fontSize: 'small',
      },
      sm: {
        paddingX: 10,
        paddingY: 10,
        fontSize: 'small',
      },
      md: {
        paddingX: 20,
        paddingY: 10,
        fontSize: 'default',
      },
      small: {
        paddingX: '16px',
        paddingY: '10px',
        fontSize: 'xsmall',
      },
      medium: {
        paddingX: '20px',
        paddingY: '11px',
        fontSize: 'small',
      },
      large: {
        paddingX: '24px',
        paddingY: '12px',
        fontSize: 'default',
      },
    },
  },
  field: {
    paddingX: 12,
    paddingY: 6,
    borderRadius: 3,
    appearances: {
      ...appearances,
    },
  },
  font: {
    lineHeight: 1.2,
    family: 'Roboto, sans-serif',
    familyRedesign: 'Poppins, sans-serif',
    weights: {
      light: '300',
      regular: '400',
      semiBold: '500',
      bold: '700',
    },
    sizes: {
      'display-1': '3rem',
      'display-2': '2.5rem',
      'display-3': '2rem',
      'display-4': '1.5rem',
      'display-5': '1.25rem',
      'display-6': '1rem',
      default: '1rem',
      small: '0.9rem',
      xsmall: '0.8rem',
    },
  },
  grid: {
    gutterWidth: '15px',
    columns: 12,
  },
} as const
