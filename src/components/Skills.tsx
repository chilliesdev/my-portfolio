import React, { useRef } from 'react'
import { skills } from '../data'
import useRelativePath from '../hooks/useRelativePath'
import useOnScrollFadeAnimation from '../hooks/useOnScrollFadeAnimation'

import StyledSkills from '../styles/StyledSkills'
import SkillsText from '../styles/SkillsText'
import SkillsItem from '../styles/SkillsItem'
import SkillsIcon from '../styles/SkillsIcon'
import SectionCol from '../styles/SectionCol'
import SubHeading from '../styles/SubHeading'
import Section from '../styles/Section'
import SmallHeading from '../styles/SmallHeading'

const Cartegory: React.FC<{
  id: number
  cartegory: string
  details: {
    id: number
    title: string
    icon: string
  }[]
}> = ({ id, cartegory, details }) => {
  const SectionRef = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: SectionRef,
    threshold: 0.9,
    identifier: `.skills-${id}`
  })

  return (
    <Section ref={SectionRef} zeroMargin bottomMargin="3rem" className={`skills-${id}`} gridGap="1rem">
      <SectionCol>
        <SmallHeading>{cartegory}</SmallHeading>
      </SectionCol>
      <SectionCol>
        <StyledSkills>
          {details.map(({ id: skillId, title, icon }) => (
            <SkillsItem key={skillId}>
              <SkillsIcon src={useRelativePath(icon)} />
              <SkillsText>{title}</SkillsText>
            </SkillsItem>
          ))}
        </StyledSkills>
      </SectionCol>
    </Section>
  )
}

const Skills: React.FC = () => {
  const SkillHeadingRef = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: SkillHeadingRef,
    threshold: 0.9,
    identifier: '.skillsHeading'
  })

  return (
    <>
      <Section zeroMargin bottomMargin="1rem" className="skillsHeading">
        <SectionCol ref={SkillHeadingRef} size="lg">
          <SubHeading>My skills</SubHeading>
        </SectionCol>
      </Section>
      {skills.map(({ id, cartegory, details }) => (
        <Cartegory key={id} id={id} cartegory={cartegory} details={details} />
      ))}
    </>
  )
}

export default Skills
