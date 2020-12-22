import React, { useRef } from 'react'
import { story, pageHeroImages } from '../data'
import useOnScrollFadeAnimation from '../hooks/useOnScrollFadeAnimation'

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
  const StorySectionRef = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: StorySectionRef,
    threshold: 0.9,
    identifier: '.story'
  })

  return (
    <IndexLayout>
      <Page>
        <Container margin="lg">
          <Hero background={pageHeroImages.about}>About Me</Hero>
          <Section ref={StorySectionRef}>
            <SectionCol size="lg">
              <SubHeading className="story">My story</SubHeading>
            </SectionCol>
            <SectionCol size="lg">
              <Section zeroMargin>
                {story.map((paragraph, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <SectionCol key={idx}>
                    <StoryText className="story">{paragraph}</StoryText>
                  </SectionCol>
                ))}
              </Section>
            </SectionCol>
          </Section>
          <Skills />
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
