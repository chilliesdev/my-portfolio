import React from 'react'

import StyledFeatured from '../styles/StyledFeatured'
import FeaturedWrapper from '../styles/FeaturedWrapper'
import Heading from '../styles/Heading'
import Button from '../styles/Button'
import FeaturedButtonWrapper from '../styles/FeaturedButtonWrapper'
import ArrowButton from './ArrowButton'
import BodyText from '../styles/BodyText'
import useRelativePath from '../hooks/useRelativePath'
import { devIntro, resumeLink } from '../data'

interface Props {
  details?: {
    image: string
    heading: string
    body: string
    accentBtn: string
    secondaryBtn: string
    arrowBtn: string
  }
  open: boolean
  onNext: () => void
}

interface Defaults {
  heading: string
  body: string
  accentBtn: string
  arrow: string
}

const defaults: Defaults = {
  heading: devIntro.heading,
  body: devIntro.body,
  accentBtn: 'About Me',
  arrow: 'featured projects'
}

const Featured: React.FC<Props> = ({ details, open, onNext }) => {
  return (
    <StyledFeatured image={details?.image || useRelativePath(devIntro.picture)} open={open}>
      <FeaturedWrapper open={open}>
        <Heading>{details ? details.heading : defaults.heading}</Heading>
        <BodyText>{details ? details.body : defaults.body}</BodyText>
        <FeaturedButtonWrapper>
          <Button to={details ? details.accentBtn : '/about'} color="accent">
            {details ? 'details' : defaults.accentBtn}
          </Button>
          {details ? (
            <Button to="/portfolio" color="secondary">
              all projects
            </Button>
          ) : (
            <Button to={resumeLink} target="_blank" color="secondary">
              my resume
            </Button>
          )}
        </FeaturedButtonWrapper>
        <ArrowButton onClick={onNext}>{details ? details.arrowBtn : defaults.arrow}</ArrowButton>
      </FeaturedWrapper>
    </StyledFeatured>
  )
}

export default Featured
