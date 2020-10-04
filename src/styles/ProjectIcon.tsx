import React from 'react'
import { Link } from 'gatsby'
import StyledProjectIcon from './StyledProjectIcon'
import ProjectImage from '../components/ProjectImage'
import SubHeading from './SubHeading'
import BodyText from './BodyText'
import AccentText from './AccentText'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image: string
  title: string
  details: {
    description: string
    slug: string
    tech: string
  }
}

const ProjectIcon: React.FC<Props> = ({ image, title, details }) => (
  <StyledProjectIcon className="project-icon">
    <ProjectImage slug={details.slug} image={image} title={title} className="grid-image" large />
    <SubHeading>
      <Link to={`/${details.slug}`}>{title}</Link>
    </SubHeading>
    <BodyText>{details.description}</BodyText>
    <AccentText>{details.tech}</AccentText>
  </StyledProjectIcon>
)

export default ProjectIcon
