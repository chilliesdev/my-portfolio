import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Icon from '../assets/Logo.svg'

import StyledLogo from '../styles/StyledLogo'
import LogoIcon from '../styles/LogoIcon'
import LogoText from '../styles/LogoText'

interface PageTitle {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Logo: React.FC = () => {
  const data: PageTitle = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLogo to="/">
      <LogoIcon src={Icon} />
      <LogoText>{data.site.siteMetadata.title}</LogoText>
    </StyledLogo>
  )
}

export default Logo
