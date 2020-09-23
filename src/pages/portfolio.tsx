import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Hero from '../components/Hero'

const PortfolioPage: React.FC = () => {
  const data: {
    file: {
      id: string
    }
  } = useStaticQuery(graphql`
    query Background {
      file(base: { eq: "home.jpg" }) {
        id
      }
    }
  `)

  return (
    <IndexLayout>
      <Page>
        <Hero background={data.file.id}>Portfolio</Hero>
      </Page>
    </IndexLayout>
  )
}

export default PortfolioPage
