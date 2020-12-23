import React, { useRef } from 'react'
import { experience } from '../data'

import Subtitle from '../styles/Subtitle'
import SubHeading from '../styles/SubHeading'
import SectionCol from '../styles/SectionCol'
import StyledExperience from '../styles/StyledExperience'
import ExpericenceIcon from '../styles/ExpericenceIcon'
import ExpericenceWrapper from '../styles/ExpericenceWrapper'
import ExpericenceCompany from '../styles/ExpericenceCompany'
import ExpericenceRole from '../styles/ExpericenceRole'
import ExpericenceDesc from '../styles/ExpericenceDesc'
import ExpericenceDate from '../styles/ExpericenceDate'
import ExpericenceCard from '../styles/ExpericenceCard'
import useOnScrollFadeAnimation from '../hooks/useOnScrollFadeAnimation'

const ExpericenceItem: React.FC<{ id: number; date: string; company: string; description: string; role: string }> = ({
  id,
  date,
  company,
  description,
  role
}) => {

  const Ref = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: Ref,
    threshold: 0.9,
    identifier: `.experiencItem-${id}`
  })

  return (
    <ExpericenceCard ref={Ref} className={`experiencItem-${id}`}>
      <ExpericenceDate>{date}</ExpericenceDate>
      <ExpericenceIcon />
      <ExpericenceWrapper>
        <ExpericenceCompany>{company}</ExpericenceCompany>
        <ExpericenceDesc>{description}</ExpericenceDesc>
        <ExpericenceRole>{role}</ExpericenceRole>
      </ExpericenceWrapper>
    </ExpericenceCard>
  )
}

const Expericence: React.FC = () => {
  const Ref = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: Ref,
    threshold: 0.1,
    identifier: '.experience'
  })

  return (
    <>
      <SectionCol ref={Ref}>
        <SubHeading className="experience">Experience</SubHeading>
        <Subtitle className="experience">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. et ma
        </Subtitle>
      </SectionCol>
      <SectionCol>
        <StyledExperience>
          {experience.map(({ id, date, company, description, role }) => (
            // eslint-disable-next-line react/no-array-index-key
            <ExpericenceItem key={id} id={id} date={date} company={company} description={description} role={role} />
          ))}
        </StyledExperience>
      </SectionCol>
    </>
  )
}

export default Expericence
