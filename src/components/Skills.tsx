import React from 'react'
import { skills } from '../data'
import useRelativePath from '../hooks/useRelativePath'

import StyledSkills from '../styles/StyledSkills'
import SkillsText from '../styles/SkillsText'
import SkillsItem from '../styles/SkillsItem'
import SkillsIcon from '../styles/SkillsIcon'
import SectionCol from '../styles/SectionCol'
import SubHeading from '../styles/SubHeading'
import Section from '../styles/Section'

const Skills: React.FC = () => {
  // const getIconPath = (title: string) => `./images/skills/${title.toLowerCase()}.svg`

  return (
    <>
      <Section bottomMargin="5rem">
        <SectionCol size="lg">
          <SubHeading>My skills</SubHeading>
        </SectionCol>
      </Section>
      {skills.map(({ id, cartegory, details }) => (
        <Section key={id} zeroMargin>
          <SectionCol>
            <SubHeading>{cartegory}</SubHeading>
          </SectionCol>
          <SectionCol>
            <StyledSkills>
              {details.map(({ id: skillsId, title, icon }) => (
                <SkillsItem key={skillsId}>
                  <SkillsIcon src={useRelativePath(icon)} />
                  <SkillsText>{title}</SkillsText>
                </SkillsItem>
              ))}
            </StyledSkills>
          </SectionCol>
        </Section>
      ))}
    </>
  )
}

export default Skills
