import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import StyledHero from '../styles/StyledHero'
import HeroHeading from '../styles/HeroHeading'
import useScrollHandler from '../hooks/useScrollHandler'

interface Props {
  children: string
  background: string
}

interface BackgroundQueryProps {
  allFile: {
    edges: {
      node: {
        base: string
        publicURL: string
      }
    }[]
  }
}

const Hero: React.FC<Props> = ({ children, background }) => {
  const allAssets: BackgroundQueryProps = useStaticQuery(graphql`
    query HeroBackground {
      allFile {
        edges {
          node {
            base
            publicURL
          }
        }
      }
    }
  `)

  const backgroundPath: {
    node: {
      base: string
      publicURL: string
    }
  }[] = allAssets.allFile.edges.filter(({ node }) => node.base === background)

  const atTop: boolean = useScrollHandler()

  return (
    <StyledHero atTop={atTop} image={backgroundPath[0].node.publicURL}>
      <HeroHeading>{children}</HeroHeading>
    </StyledHero>
  )
}

export default Hero
