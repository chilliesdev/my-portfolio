import React, { useRef } from 'react'
import { story } from '../data'
import useOnScrollFadeAnimation from '../hooks/useOnScrollFadeAnimation'

import SectionCol from '../styles/SectionCol'
import Section from '../styles/Section'
import StoryText from '../styles/StoryText'
import SubHeading from '../styles/SubHeading'

const Story: React.FC = () => {
  const StorySectionRef = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: StorySectionRef,
    threshold: 0.9,
    identifier: '.story'
  })

  return (
    <>
      <SectionCol ref={StorySectionRef} size="lg">
        <SubHeading className="story">My story</SubHeading>
      </SectionCol>
      <SectionCol ref={StorySectionRef} size="lg">
        <Section zeroMargin>
          {story.map((paragraph, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <SectionCol key={idx}>
              <StoryText className="story">{paragraph}</StoryText>
            </SectionCol>
          ))}
        </Section>
      </SectionCol>
    </>
  )
}

export default Story
