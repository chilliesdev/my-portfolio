import { DefaultTheme } from 'styled-components'
import { colors } from './variables'

export const darkTheme: DefaultTheme = {
  primary: colors.primary,
  secondary: colors.secondary,
  accent: colors.accent
}

export const lightTheme: DefaultTheme = {
  primary: colors.secondary,
  secondary: colors.primary,
  accent: colors.lilac
}
