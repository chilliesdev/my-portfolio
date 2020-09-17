import React from 'react'

import StyledRecommended from '../styles/StyledRecommended'
import ProjectImage from './ProjectImage'
import { projects, recommended } from '../data'

const Recommended: React.FC = () => (
  <StyledRecommended>
    {projects.map(({ id, name, image }) => recommended.map(recId => recId === id && <ProjectImage title={name} image={image} />))}
  </StyledRecommended>
)

export default Recommended
