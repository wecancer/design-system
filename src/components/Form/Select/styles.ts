import {DefaultTheme} from 'styled-components'
import {GroupBase, StylesConfig} from 'react-select'

import {Option} from './types'

const selectStyles = ({font, colors}: DefaultTheme): StylesConfig<Option, true, GroupBase<Option>> => ({
  container: (styles) => ({
    ...styles,
    fontFamily: font.familyRedesign,
  }),
  option: (styles, {isSelected, isFocused}) => ({
    ...styles,
    padding: '0.375rem 1.5rem',
    ...(isSelected || isFocused
      ? {
          backgroundColor: colors.line,
          color: colors.titleActive,
        }
      : {}),
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: colors.inputBg,
    padding: '0',
    borderRadius: '0.625rem',
    border: 'none',
    boxShadow: 'none',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '0.625rem 0',
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0 0.625rem',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    paddingRight: '0.75rem',
    '& > div': {
      color: colors.placeholder,
      transition: 'all 250ms ease',
      '&:hover': {
        color: colors.titleActive,
      },
    },
  }),
  control: (styles, state) => ({
    ...styles,
    height: '40px',
    borderRadius: '0.75rem',
    borderWidth: '0.125rem',
    ...(state.isFocused
      ? {
          color: colors.titleActive,
          borderColor: `${colors.primary} !important`,
          boxShadow: `0 0 0.062rem 0.375rem ${colors.focusPrimary}`,
          backgroundColor: colors.white,
        }
      : {borderColor: colors.inputBg, backgroundColor: colors.inputBg}),
    '&:hover': {
      borderColor: colors.inputBg,
    },
  }),
  multiValue: (styles) => ({
    ...styles,
    color: colors.offWhite,
    borderRadius: '1rem',
    backgroundColor: colors.primary,
    border: `2px solid ${colors.primary}`,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    fontSize: '0.81rem',
    fontWeight: 400,
    color: colors.offWhite,
    paddingLeft: '0.75rem',
    paddingRight: '0.375rem',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    borderRadius: '0.812rem',
    paddingRight: '4px',
    '&:hover': {
      color: colors.offWhite,
      background: 'rgba(0, 0, 0, 0.2)',
    },
  }),
})

export default selectStyles
