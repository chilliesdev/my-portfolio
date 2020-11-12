import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/defaults/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Footer from '../components/Footer'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => {
  const getTheme = () => (theme === 'light' ? 'dark' : 'light')

  const getThemeLocalStorage = () => window !== undefined ? localStorage.getItem('theme') : 'light'

  const setThemeLocalStorage = (theme: string) => window !== undefined && localStorage.setItem('theme', theme)

  const themeValueFromStorage: string | null = getThemeLocalStorage()

  const [theme, setTheme] = useState<string>(themeValueFromStorage || 'dark')
  const themeToggler = () => {
    setThemeLocalStorage(getTheme())
    setTheme(getTheme())
  }

  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data: StaticQueryProps) => (
        <LayoutRoot theme={theme}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords }
            ]}
          />
          <Header themeHandler={themeToggler} />
          <LayoutMain>{children}</LayoutMain>
          <Footer />
        </LayoutRoot>
      )}
    />
  )
}

export default IndexLayout
