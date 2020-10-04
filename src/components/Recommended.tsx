import React from 'react'

import StyledRecommended from '../styles/StyledRecommended'
import ProjectImage from './ProjectImage'
import useAllProjects, { AllProjectsProps } from '../hooks/useAllProjects'
import { recommended } from '../data'

const Recommended: React.FC = () => {
  const AllProjects: AllProjectsProps = useAllProjects(recommended)

  return (
    <StyledRecommended>
      {AllProjects.allMarkdownRemark.edges.map(({ node }) => {
        const { id, title, image, slug } = node.frontmatter

        return recommended.map(recId => recId === id && <ProjectImage title={title} image={image} slug={slug} />)
      })}
    </StyledRecommended>
  )
}

export default Recommended
