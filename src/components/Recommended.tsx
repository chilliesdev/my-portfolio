import React, { useRef } from 'react'
import useOnScrollFadeAnimation from '../hooks/useOnScrollFadeAnimation'
import { recommended } from '../data'

import StyledRecommended from '../styles/StyledRecommended'
import ProjectImage from './ProjectImage'
import useAllProjects, { AllProjectsProps } from '../hooks/useAllProjects'

const RecommendedItem: React.FC<{ id: number; title: string; image: string; slug: string }> = ({ id, title, image, slug }) => {
  const Ref = useRef<HTMLDivElement>(null)

  useOnScrollFadeAnimation({
    ref: Ref,
    threshold: 0.5,
    identifier: `.recomendended-${id}`
  })

  return <ProjectImage refCustom={Ref} className={`recomendended-${id}`} title={title} image={image} slug={slug} />
}

const Recommended: React.FC = () => {
  const AllProjects: AllProjectsProps = useAllProjects(recommended)

  return (
    <StyledRecommended>
      {AllProjects.allMarkdownRemark.edges.map(({ node }) => {
        const { id, title, image, slug } = node.frontmatter

        return recommended.map(
          recommendedProjectsId => recommendedProjectsId === id && <RecommendedItem key={id} id={id} title={title} image={image} slug={slug} />
        )
      })}
    </StyledRecommended>
  )
}

export default Recommended
