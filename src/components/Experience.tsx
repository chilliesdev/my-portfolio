import React from 'react'
import { experience } from '../data'

import StyledExperience from '../styles/StyledExperience'
import ExpericenceIcon from '../styles/ExpericenceIcon'
import ExpericenceWrapper from '../styles/ExpericenceWrapper'
import ExpericenceCompany from '../styles/ExpericenceCompany'
import ExpericenceRole from '../styles/ExpericenceRole'
import ExpericenceDesc from '../styles/ExpericenceDesc'
import ExpericenceDate from '../styles/ExpericenceDate'
import ExpericenceCard from '../styles/ExpericenceCard'

const Expericence: React.FC = () => {
  return (
    <StyledExperience>
      {experience.map(({ id, date, company, description, role }) => (
        // eslint-disable-next-line react/no-array-index-key
        <ExpericenceCard key={id}>
          <ExpericenceDate>{date}</ExpericenceDate>
          <ExpericenceIcon />
          <ExpericenceWrapper>
            <ExpericenceCompany>{company}</ExpericenceCompany>
            <ExpericenceDesc>{description}</ExpericenceDesc>
            <ExpericenceRole>{role}</ExpericenceRole>
          </ExpericenceWrapper>
        </ExpericenceCard>
      ))}
    </StyledExperience>
  )
}

export default Expericence
