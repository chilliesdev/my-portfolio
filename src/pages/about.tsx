import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { story } from '../data'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'
import SubHeading from '../styles/SubHeading'
import Section from '../styles/Section'
import SectionCol from '../styles/SectionCol'
import StoryText from '../styles/StoryText'
import Skills from '../components/Skills'
import Subtitle from '../styles/Subtitle'
import Expericence from '../components/Experience'
import Recommended from '../components/Recommended'

const About = () => {
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
        <Container margin="lg">
          <Hero background={data.file.id}>About Me</Hero>
          <Section>
            <SectionCol size="lg">
              <SubHeading>My story</SubHeading>\
            </SectionCol>
            {story.map((paragraph, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <SectionCol key={idx}>
                <StoryText>{paragraph}</StoryText>
              </SectionCol>
            ))}
          </Section>
          <Section>
            <SectionCol>
              <SubHeading>My skills</SubHeading>
            </SectionCol>
            <SectionCol>
              <Skills />
            </SectionCol>
          </Section>
          <Section>
            <SectionCol>
              <SubHeading>Experience</SubHeading>
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Netus et ma
              </Subtitle>
            </SectionCol>
            <SectionCol>
              <Expericence />
            </SectionCol>
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
