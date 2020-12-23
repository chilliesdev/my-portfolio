import React, { useState } from 'react'

import StyledProjectImage from '../styles/StyledProjectImage'
import Button from '../styles/Button'
import ButtonGroup from '../styles/ButtonGroup'
import SubHeading from '../styles/SubHeading'
import useRelativePath from '../hooks/useRelativePath'

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  image: string
  title: string
  slug: string
  large?: boolean
  refCustom?: React.RefObject<HTMLDivElement> | null | undefined
}

const ProjectImage: React.FC<Props> = ({ image, title, className, large, slug, refCustom }) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <StyledProjectImage
      large={large}
      className={className}
      ref={refCustom || null}
      hover={hover}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      background={useRelativePath(image)}
    >
      <SubHeading>{title}</SubHeading>
      <ButtonGroup>
        <Button to={`/${slug}`} color="accent">
          details
        </Button>
        <Button to={`/${slug}`} color="secondary">
          live preview
        </Button>
      </ButtonGroup>
    </StyledProjectImage>
  )
}

export default ProjectImage
