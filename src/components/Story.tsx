import React, { useRef } from 'react'
import { story } from '../data'
import useOnScrollFadeAnimation from '../hooks/useOnScrollFadeAnimation'

import SectionCol from '../styles/SectionCol'
import Section from '../styles/Section'
import StoryText from '../styles/StoryText'
import SubHeading from '../styles/SubHeading'

const StoryParagraph: React.FC<{ idx: number; paragraph: string }> = ({ idx, paragraph }) => {
  const StoryParagraphRef = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: StoryParagraphRef,
    threshold: 0.9,
    identifier: `.story-paragraph-${idx}`
  })

  return (
    <SectionCol ref={StoryParagraphRef}>
      <StoryText className={`story-paragraph-${idx}`}>{paragraph}</StoryText>
    </SectionCol>
  )
}

const Story: React.FC = () => {
  const StorySectionRef = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: StorySectionRef,
    threshold: 0.4,
    identifier: '.story'
  })

  return (
    <>
      <SectionCol ref={StorySectionRef} size="lg">
        <SubHeading className="story">My story</SubHeading>
      </SectionCol>
      <SectionCol size="lg">
        <Section zeroMargin>
          {story.map((paragraph, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <StoryParagraph key={idx} idx={idx} paragraph={paragraph} />
          ))}
        </Section>
      </SectionCol>
    </>
  )
}

export default Story
