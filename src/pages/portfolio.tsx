import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Hero from '../components/Hero'

const PortfolioPage: React.FC = () => (
  <IndexLayout>
    <Page>
      <Hero background="home.jpg">Portfolio</Hero>
    </Page>
  </IndexLayout>
)

export default PortfolioPage
