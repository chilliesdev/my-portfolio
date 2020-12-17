import React, { useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
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
  // useEffect(() => {
  const StorySectionRef = useRef<HTMLDivElement>(null)
  // }, [])

  const StorySectionintersection = useIntersection(StorySectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })

  const fadeIn = (element: any) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power.out',
      stagger: {
        amount: 0.3
      }
    })
  }

  const fadeOut = (element: any) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: 'power.out'
    })
  }

  // eslint-disable-next-line no-unused-expressions
  StorySectionintersection && StorySectionintersection.intersectionRatio < 1 ? fadeOut('.fadeIn') : fadeIn('.fadeIn')

  return (
    <IndexLayout>
      <Page>
        <Container margin="lg">
          <Hero background="home.jpg">About Me</Hero>
          <Section>
            <SectionCol size="lg">
              <SubHeading className="fadeIn">My story</SubHeading>
            </SectionCol>
            <SectionCol size="lg">
              <Section ref={StorySectionRef} zeroMargin>
                {story.map((paragraph, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <SectionCol key={idx}>
                    <StoryText className="fadeIn">{paragraph}</StoryText>
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
