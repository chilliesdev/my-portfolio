import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Hero background="home.jpg">About Me</Hero>
      </Container>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
