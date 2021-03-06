import { DefaultTheme } from 'styled-components'
import { GroupBase, StylesConfig } from 'react-select'

import { SelectOption } from './types'

type StyleConfig = StylesConfig<SelectOption, true, GroupBase<SelectOption>>

const selectStyles = ({ font, colors }: DefaultTheme): StyleConfig => ({
  container: (styles) => ({
    ...styles,
    fontFamily: font.family,
  }),
  option: (styles, { isSelected, isFocused }) => ({
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
    zIndex: '50',
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '0.625rem 0',
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: '0 1rem',
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
    minHeight: '40px',
    borderRadius: '1rem',
    borderWidth: '0.125rem',
    ...(state.isFocused
      ? {
          color: colors.titleActive,
          borderColor: `${colors.primary} !important`,
          boxShadow: `0 0 0.062rem 0.375rem ${colors.focusPrimary}`,
          backgroundColor: colors.white,
        }
      : { borderColor: colors.placeholder, backgroundColor: colors.offWhite }),
    '&:hover': {
      borderColor: colors.placeholder,
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
    padding: '0 0.375rem 0 0.75rem',
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
