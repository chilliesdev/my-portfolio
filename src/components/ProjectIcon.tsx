import React, { useRef } from 'react'
import { Link } from 'gatsby'
import StyledProjectIcon from '../styles/StyledProjectIcon'
import ProjectImage from './ProjectImage'
import SubHeading from '../styles/SubHeading'
import BodyText from '../styles/BodyText'
import AccentText from '../styles/AccentText'
import useOnScrollFadeAnimation from '../hooks/useOnScrollFadeAnimation'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  idx: number
  image: string
  title: string
  details: {
    description: string
    slug: string
    tech: string
  }
}

const ProjectIcon: React.FC<Props> = ({ idx, image, title, details }) => {
  const Ref = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: Ref,
    threshold: 0.3,
    identifier: `.project-icon-${idx}`
  })

  return (
    <StyledProjectIcon ref={Ref} className={`project-icon-${idx}`}>
      <ProjectImage idx={idx} slug={details.slug} image={image} title={title} className="grid-image" large />
      <SubHeading>
        <Link to={`/${details.slug}`}>{title}</Link>
      </SubHeading>
      <BodyText>{details.description}</BodyText>
      <AccentText>{details.tech}</AccentText>
    </StyledProjectIcon>
  )
}

export default ProjectIcon
