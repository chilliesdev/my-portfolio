import React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import Hero from '../components/Hero'
import Container from '../components/Container'

const PortfolioPage: React.FC = () => (
  <IndexLayout>
    <Page>
      <Container margin="lg">
        <Hero background="home.jpg">Portfolio</Hero>
      </Container>
    </Page>
  </IndexLayout>
)

export default PortfolioPage
