import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useHoverDirty } from 'react-use'

import StyledProjectImage from '../styles/StyledProjectImage'
import Button from '../styles/Button'
import ButtonGroup from '../styles/ButtonGroup'
import SubHeading from '../styles/SubHeading'
import useRelativePath from '../hooks/useRelativePath'
import ProjectImageCover from '../styles/ProjectImageCover'

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  idx: number
  image: string
  title: string
  slug: string
  large?: boolean
  refCustom: React.RefObject<HTMLDivElement>
}

const ProjectImage: React.FC<Props> = ({ idx, image, title, className, large, slug, refCustom }) => {
  const hovered = useHoverDirty(refCustom)

  useEffect(() => {
    const duration = 0.5

    const fadeIn = (element: string) => {
      gsap.to(element, duration, {
        opacity: 1,
        rotateY: 0,
        y: 0,
        ease: 'power.out',
        stagger: {
          amount: 0.3
        }
      })
    }

    const fadeOut = (element: string) => {
      gsap.to(element, duration, {
        opacity: 0,
        rotateY: 90,
        y: -999,
        ease: 'power.out'
      })
    }

    // eslint-disable-next-line no-unused-expressions
    hovered ? fadeOut(`.project-image-cover-${idx}`) : fadeIn(`.project-image-cover-${idx}`)
  })

  return (
    <StyledProjectImage large={large} className={className} ref={refCustom || null} background={useRelativePath(image)}>
      <ProjectImageCover className={`project-image-cover-${idx}`} hover={hovered} background={useRelativePath(image)} />
      {/* <ProjectImageWrapper> */}
      <SubHeading>{title}</SubHeading>
      <ButtonGroup flexDirectionColumnOnSmScreen>
        <Button to={`/${slug}`} color="accent">
          details
        </Button>
        <Button to={`/${slug}`} color="secondary">
          live preview
        </Button>
      </ButtonGroup>
      {/* </ProjectImageWrapper> */}
    </StyledProjectImage>
  )
}

export default ProjectImage
