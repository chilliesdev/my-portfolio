import React from 'react'
// import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/defaults/globalStyles'
import { darkTheme, lightTheme } from '../styles/defaults/theme'
import StyledLayoutRoot from '../styles/StyledLayoutRoot'

interface LayoutRootProps {
  className?: string
  theme: 'light' | 'dark'
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className, theme }) => {
  const getTheme = () => (theme === 'light' ? lightTheme : darkTheme)

  return (
    <ThemeProvider theme={getTheme}>
      <GlobalStyles />
      <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    </ThemeProvider>
  )
}

export default LayoutRoot
