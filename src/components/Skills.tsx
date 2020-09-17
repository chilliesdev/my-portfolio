import React from 'react'
import { skills } from '../data'

import StyledSkills from '../styles/StyledSkills'
import SkillsText from '../styles/SkillsText'
import SkillsItem from '../styles/SkillsItem'
import SkillsIcon from '../styles/SkillsIcon'

const Skills: React.FC = () => {
  const getIconPath = (title: string) => `./images/skills/${title.toLowerCase()}.svg`

  return (
    <StyledSkills>
      {skills.map(({ id, title }) => (
        <SkillsItem key={id}>
          <SkillsIcon src={getIconPath(title)} />
          <SkillsText>{title}</SkillsText>
        </SkillsItem>
      ))}
    </StyledSkills>
  )
}

export default Skills
