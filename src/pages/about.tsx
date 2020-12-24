import React from 'react'
import { pageHeroImages } from '../data'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'
import Section from '../styles/Section'
import Skills from '../components/Skills'
import Expericence from '../components/Experience'
import Recommended from '../components/Recommended'
import Story from '../components/Story'

const About = () => {
  return (
    <IndexLayout>
      <Page>
        <Container margin="lg">
          <Hero background={pageHeroImages.about}>About Me</Hero>
          <Section>
            <Story />
          </Section>
          {/* <Section> */}
          <Skills />
          {/* </Section> */}
          <Section>
            <Expericence />
          </Section>
          <Section display="block">
            <Recommended />
          </Section>
        </Container>
      </Page>
    </IndexLayout>
  )
}
export default About
