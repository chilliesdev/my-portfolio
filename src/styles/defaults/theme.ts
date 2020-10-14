import { DefaultTheme } from 'styled-components'
import { colors } from './variables'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    primary: string
    secondary: string
    accent: string
    invert: boolean
  }
}

export const darkTheme: DefaultTheme = {
  name: 'dark',
  primary: colors.primary,
  secondary: colors.secondary,
  accent: colors.accent,
  invert: true
}

export const lightTheme: DefaultTheme = {
  name: 'light',
  primary: colors.secondary,
  secondary: colors.primary,
  accent: colors.lilac,
  invert: false
}
