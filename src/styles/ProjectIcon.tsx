import React from 'react'
import { Link } from 'gatsby'
import StyledProjectIcon from './StyledProjectIcon'
import ProjectImage from '../components/ProjectImage'
import SubHeading from './SubHeading'
import BodyText from './BodyText'
import AccentText from './AccentText'

interface Props {
  image: string
  title: string
  details: {
    description: string
    slug: string
    tech: string
  }
}

const ProjectIcon: React.FC<Props> = ({ image, title, details }) => (
  <StyledProjectIcon>
    <ProjectImage image={image} title={title} />
    <SubHeading>
      <Link to={`/${details.slug}`}>{title}</Link>
    </SubHeading>
    <BodyText>{details.description}</BodyText>
    <AccentText>{details.tech}</AccentText>
  </StyledProjectIcon>
)

export default ProjectIcon
