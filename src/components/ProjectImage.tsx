import React, { useState } from 'react'

import StyledProjectImage from '../styles/StyledProjectImage'
import Button from '../styles/Button'
import ButtonGroup from '../styles/ButtonGroup'
import SubHeading from '../styles/SubHeading'

interface Props {
  image: string
  title: string
}

const ProjectImage: React.FC<Props> = ({ image, title }) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <StyledProjectImage hover={hover} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} background={image}>
      <SubHeading>{title}</SubHeading>
      <ButtonGroup>
        <Button color="accent">details</Button>
        <Button color="secondary">live preview</Button>
      </ButtonGroup>
    </StyledProjectImage>
  )
}

export default ProjectImage
