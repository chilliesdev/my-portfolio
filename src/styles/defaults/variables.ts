/* eslint-disable max-len */

export interface ColorProps {
  primary: string
  secondary: string
  brand: string
  lilac: string
  accent: string
  success: string
  warning: string
  ui: {
    bright: string
    light: string
    whisper: string
  }
  code: string
  gray: {
    dark: string
    copy: string
    calm: string
  }
  white: string
  black: string
}

export const colors: ColorProps = {
  primary: '#000000',
  secondary: '#FFFFFF',
  brand: '#000000',
  lilac: '#003459',
  accent: '#D80032',
  success: '#37b635',
  warning: '#ec1818',
  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc'
  },
  code: '#fcf6f0',
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)'
  },
  white: '#FFFFFF',
  black: '#000000'
}

export const fonts = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace',
  questrial: '"Questrial", sans-serif',
  dmSans: '"DM Sans", sans-serif'
}

export const breakpoints = {
  xs: 320,
  ms: 375,
  sm: 425,
  md: 768,
  lg: 992,
  xl: 1200
}

export const widths = {
  md: 720,
  lg: 960,
  xl: 1140
}

export const dimensions = {
  fontSize: {
    regular: 12,
    large: 18
  },
  headingSizes: {
    h1: 45,
    h2: 32,
    h3: 25,
    h4: 20
  },
  lineHeight: {
    regular: 1,
    heading: 1.2
  },
  containerPadding: 0
}

export const heights = {
  header: 60
}

export const margins = {
  small: 20,
  large: 80
}
